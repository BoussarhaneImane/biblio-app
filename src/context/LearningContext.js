import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { courses } from '../data/courses';

const LearningContext = createContext(null);
const readStorage = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const accountId = (email, name = '') => `user-${encodeURIComponent((email || name).trim().toLowerCase())}`;
const createAccountId = () => `user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
const readCurrentUser = () => {
  const storedUser = readStorage('academyUser', null);
  if (storedUser) return { ...storedUser, id: storedUser.id || accountId(storedUser.email, storedUser.name), legacyStorage: !storedUser.id };
  const name = localStorage.getItem('userName');
  return name ? { name, email: '', id: accountId('', name), legacyStorage: true } : null;
};
const readAccounts = () => readStorage('academyAccounts', []).map((account) => ({
  ...account,
  id: account.id || accountId(account.email, account.name),
}));
const readUserData = (key, user, fallback) => {
  if (!user) return fallback;
  const userKey = `${key}:${user.id}`;
  if (localStorage.getItem(userKey) !== null) return readStorage(userKey, fallback);
  return user.legacyStorage ? readStorage(key, fallback) : fallback;
};

export function LearningProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('academyTheme') === 'dark' ? 'dark' : 'light');
  const [user, setUser] = useState(readCurrentUser);
  const [accounts, setAccounts] = useState(readAccounts);
  const [records, setRecords] = useState(() => readUserData('academyProgress', readCurrentUser(), {}));
  const [recent, setRecent] = useState(() => readUserData('academyRecent', readCurrentUser(), []));

  useEffect(() => { localStorage.setItem('academyUser', JSON.stringify(user)); }, [user]);
  useEffect(() => { localStorage.setItem('academyAccounts', JSON.stringify(accounts)); }, [accounts]);
  useEffect(() => { localStorage.setItem('academyTheme', theme); }, [theme]);
  useEffect(() => {
    if (user) localStorage.setItem(`academyProgress:${user.id}`, JSON.stringify(records));
  }, [user, records]);
  useEffect(() => {
    if (user) localStorage.setItem(`academyRecent:${user.id}`, JSON.stringify(recent));
  }, [user, recent]);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark'),
    user,
    records,
    recent,
    register: ({ name, email }) => {
      const normalizedEmail = email.trim().toLowerCase();
      if (accounts.some((account) => account.email === normalizedEmail)) return 'Cette adresse e-mail est deja utilisee.';
      const account = { id: createAccountId(), name: name.trim(), email: normalizedEmail };
      setAccounts((current) => [...current, account]);
      setUser(account);
      setRecords({});
      setRecent([]);
      localStorage.setItem(`academyProgress:${account.id}`, JSON.stringify({}));
      localStorage.setItem(`academyRecent:${account.id}`, JSON.stringify([]));
      localStorage.setItem('userName', account.name);
      localStorage.setItem('userId', account.id);
      return null;
    },
    login: ({ email }) => {
      const normalizedEmail = email.trim().toLowerCase();
      const foundAccount = accounts.find((item) => item.email === normalizedEmail);
      if (!foundAccount) return 'Aucun compte local pour cette adresse. Creez un compte pour continuer.';
      const account = user?.id === foundAccount.id && user.legacyStorage ? { ...foundAccount, legacyStorage: true } : foundAccount;
      setUser(account);
      setRecords(readUserData('academyProgress', account, {}));
      setRecent(readUserData('academyRecent', account, []));
      localStorage.setItem('userName', account.name);
      localStorage.setItem('userId', account.id);
      return null;
    },
    logout: () => {
      setUser(null);
      setRecords({});
      setRecent([]);
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
    },
    updateProfile: (profile) => {
      const updated = { ...user, ...profile };
      setUser(updated);
      setAccounts((current) => current.map((account) => account.id === user.id ? updated : account));
      localStorage.setItem('userName', updated.name);
    },
    visitCourse: (courseId) => setRecent((current) => current[0] === courseId ? current : [courseId, ...current.filter((id) => id !== courseId)].slice(0, 5)),
    isEnrolled: (courseId) => Boolean(records[courseId]?.enrolled),
    enroll: (courseId) => setRecords((current) => ({ ...current, [courseId]: { ...(current[courseId] || {}), enrolled: true, completedLessonIds: current[courseId]?.completedLessonIds || [], enrolledAt: current[courseId]?.enrolledAt || new Date().toISOString() } })),
    progress: (courseId) => {
      const course = courses.find((item) => item.id === courseId);
      if (!course) return { completed: 0, total: 0, percent: 0 };
      const total = course.modules.reduce((count, module) => count + module.lessons.length, 0);
      const completed = (records[courseId]?.completedLessonIds || []).length;
      return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
    },
    completeLesson: (courseId, lessonId) => setRecords((current) => {
      const previous = current[courseId] || { enrolled: true, completedLessonIds: [] };
      const completedLessonIds = [...new Set([...previous.completedLessonIds, lessonId])];
      const course = courses.find((item) => item.id === courseId);
      const total = course ? course.modules.reduce((count, module) => count + module.lessons.length, 0) : 0;
      const certificate = total && completedLessonIds.length === total ? previous.certificate || { number: `ACA-${Date.now().toString(36).toUpperCase()}`, issuedAt: new Date().toISOString() } : previous.certificate;
      return { ...current, [courseId]: { ...previous, enrolled: true, completedLessonIds, lastLessonId: lessonId, certificate } };
    }),
  }), [theme, user, accounts, records, recent]);

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) throw new Error('useLearning doit etre utilise dans LearningProvider.');
  return context;
}