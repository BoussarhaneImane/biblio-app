import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FiArrowDownRight, FiArrowLeft, FiArrowRight, FiArrowUpRight, FiAward, FiBookOpen, FiCheck, FiCheckCircle, FiClock, FiDownload, FiFilter, FiLayers, FiPlay, FiSearch, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { allLessons, courses, lessonCount } from '../data/courses';
import { useLearning } from '../context/LearningContext';
import { CourseCard, PageFrame, ProgressBar, Quiz, ThemeToggle } from '../components/e-learning/AcademyUI';
import './LearningPages.css';

const categories = [
  { name: 'Développement', icon: '01', description: 'Coder et créer des produits numériques' },
  { name: 'Design', icon: '02', description: 'Imaginer des expériences plus utiles' },
  { name: 'Data', icon: '03', description: 'Donner du sens aux données' },
  { name: 'Langues', icon: '04', description: 'Communiquer avec confiance' },
];

function SectionHeading({ eyebrow, title, action, to = '/courses' }) {
  return <div className="section-heading"><div className="section-heading-copy"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{action && <Link className="text-link" to={to}>{action} <span aria-hidden="true">→</span></Link>}</div>;
}

export function HomePage() {
  const featured = courses[0];
  const highlights = courses.slice(0, 3);
  return <PageFrame>
    <section className="home-hero">
      <div className="home-hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker"><span /> LA FORMATION QUI VA PLUS LOIN</span>
          <h1>Apprenez quelque chose qui <em>change tout.</em></h1>
          <p>Des cours pratiques, des formateurs passionnés et un parcours qui s’adapte à votre quotidien.</p>
          <div className="hero-actions"><Link to="/courses" className="button button-primary">Découvrir les cours <FiArrowUpRight /></Link><Link to="/register" className="hero-secondary">Commencer maintenant <FiArrowRight /></Link></div>
          <div className="hero-proof"><div className="proof-avatars"><span>AM</span><span>SM</span><span>NE</span><span>+</span></div><p><strong>12 400+</strong><br />apprenants en mouvement</p></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={featured.image} alt="Apprenante découvrant un cours de programmation" /><div className="image-caption"><span className="caption-play"><FiPlay /></span><span><strong>La prochaine idée commence ici</strong><small>Apprenez à votre rythme</small></span></div></div>
          <div className="hero-floating-note"><span className="floating-icon"><FiCheck /></span><span><strong>Votre prochain chapitre</strong><small>n’attend que vous.</small></span></div>
          <span className="hero-orbit hero-orbit-one" /><span className="hero-orbit hero-orbit-two" />
        </div>
      </div>
      <div className="hero-bottomline"><span>UNE COMPÉTENCE À LA FOIS</span><span>FAITES DE LA PLACE À CE QUI VIENT <FiArrowDownRight /></span></div>
    </section>

    <section className="home-stats"><div className="stats-inner"><div><strong>48<span>+</span></strong><span>cours conçus pour agir</span></div><div><strong>12k<span>+</span></strong><span>apprenants accompagnés</span></div><div><strong>36</strong><span>experts qui partagent</span></div><div className="stats-note">Le savoir devrait toujours<br />ouvrir une nouvelle porte.</div></div></section>

    <section className="home-section home-courses"><div className="content-width"><SectionHeading eyebrow="CHOISISSEZ VOTRE PROCHAINE ÉTAPE" title="Des cours faits pour avancer." action="Tout le catalogue" /><div className="course-grid">{highlights.map((course) => <CourseCard key={course.id} course={course} />)}</div></div></section>

    <section className="home-section category-section" id="categories"><div className="content-width"><SectionHeading eyebrow="APPRENEZ À VOTRE FAÇON" title="Une curiosité, mille chemins." /><div className="category-grid">{categories.map((category) => <Link key={category.name} className="category-tile" to={`/courses?category=${encodeURIComponent(category.name)}`}><span className="category-number">{category.icon}</span><span className="category-arrow"><FiArrowUpRight /></span><h3>{category.name}</h3><p>{category.description}</p><span className="category-count">Explorer les cours <FiArrowRight /></span></Link>)}</div></div></section>

    <section className="why-section" id="about"><div className="content-width why-grid"><div className="why-copy"><span className="eyebrow">PENSÉ POUR VOTRE VRAIE VIE</span><h2>Moins de théorie qui dort. <em>Plus de savoir qui sert.</em></h2><p>Apprenez avec des personnes qui font le métier, dans des formats que vous pouvez suivre entre deux rendez-vous ou au calme le week-end.</p><Link to="/courses" className="button button-outline">Trouver mon cours <FiArrowUpRight /></Link></div><div className="why-points"><article><span className="why-icon"><FiPlay /></span><div><h3>À votre rythme</h3><p>Reprenez là où vous vous êtes arrêté, sur n’importe quel écran.</p></div></article><article><span className="why-icon"><FiUsers /></span><div><h3>Du concret, par des experts</h3><p>Des parcours créés par des professionnels qui pratiquent au quotidien.</p></div></article><article><span className="why-icon"><FiTrendingUp /></span><div><h3>Vos progrès, en clair</h3><p>Suivez chaque étape et célébrez le chemin parcouru.</p></div></article></div></div></section>

    <section className="home-section instructor-section" id="instructors"><div className="content-width instructor-banner"><div><span className="eyebrow">DU TERRAIN À VOTRE ÉCRAN</span><h2>Les meilleures leçons viennent de celles et ceux qui font.</h2></div><div className="instructor-copy"><p>Des praticiens partagent leurs méthodes, leurs outils et les raccourcis qu’ils auraient aimé connaître plus tôt.</p><Link to="/courses" className="text-link">Rencontrer les formateurs <FiArrowUpRight /></Link></div><div className="instructor-stat"><strong>36</strong><span>formateurs experts<br />et accessibles</span></div></div></section>

    <section className="home-section testimonial-section"><div className="content-width testimonial-grid"><div><span className="eyebrow">ILS SONT PASSÉS PAR LÀ</span><h2>Un petit pas.<br /><em>Un grand déclic.</em></h2><div className="testimonial-controls"><span>01 / 03</span><span>← &nbsp; →</span></div></div><article className="testimonial-quote"><div className="quote-mark">“</div><blockquote>J’ai enfin pu passer de « je crois que je peux » à « je l’ai fait ». Les cours vont droit au but et le suivi m’a aidée à tenir sur la durée.</blockquote><div className="quote-person"><span className="quote-avatar">CL</span><span><strong>Camille Laurent</strong><small>Apprenante en développement</small></span><span className="quote-rating">★★★★★</span></div></article></div></section>

    <section className="final-cta"><div className="content-width cta-inner"><div><span className="eyebrow">LE BON MOMENT, C’EST MAINTENANT</span><h2>Votre prochaine compétence<br />vous attend.</h2></div><Link to="/courses" className="button button-light">Explorer les cours <FiArrowUpRight /></Link><span className="cta-loop" aria-hidden="true">↗</span></div></section>
  </PageFrame>;
}

export function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(searchParams.get('category') || 'Toutes');
  const [level, setLevel] = useState('Tous les niveaux');
  const [price, setPrice] = useState('Tous les prix');
  const [sort, setSort] = useState('popular');
  const filtered = useMemo(() => {
    const result = courses.filter((course) => {
      const text = `${course.title} ${course.description} ${course.instructor}`.toLocaleLowerCase('fr');
      return (!query || text.includes(query.toLocaleLowerCase('fr'))) && (category === 'Toutes' || course.category === category) && (level === 'Tous les niveaux' || course.level === level) && (price === 'Tous les prix' || (price === 'Gratuit' ? course.price === 0 : course.price > 0));
    });
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (sort === 'popular') result.sort((a, b) => b.reviews - a.reviews);
    if (sort === 'newest') result.reverse();
    return result;
  }, [query, category, level, price, sort]);

  const updateCategory = (value) => {
    setCategory(value);
    if (value === 'Toutes') setSearchParams({});
    else setSearchParams({ category: value });
  };

  return <PageFrame><section className="catalog-page"><div className="content-width">
    <div className="catalog-heading"><div><span className="eyebrow">LE CATALOGUE ATELIER</span><h1>Faites grandir<br /><em>ce qui vous anime.</em></h1><p>Des formations pensées pour les projets qui vous attendent.</p></div><div className="catalog-total"><strong>{filtered.length.toString().padStart(2, '0')}</strong><span>formations<br />à explorer</span></div></div>
    <div className="catalog-toolbar"><label className="search-field"><FiSearch /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Un sujet, un formateur…" aria-label="Rechercher un cours" /></label><label className="filter-select"><FiFilter /><select value={category} onChange={(event) => updateCategory(event.target.value)} aria-label="Filtrer par catégorie"><option>Toutes</option>{categories.map((item) => <option key={item.name}>{item.name}</option>)}</select></label><label className="filter-select"><select value={level} onChange={(event) => setLevel(event.target.value)} aria-label="Filtrer par niveau"><option>Tous les niveaux</option><option>Débutant</option><option>Intermédiaire</option><option>Avancé</option></select></label><label className="filter-select"><select value={price} onChange={(event) => setPrice(event.target.value)} aria-label="Filtrer par prix"><option>Tous les prix</option><option>Gratuit</option><option>Payant</option></select></label><label className="sort-select"><span>Trier par</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Trier les cours"><option value="popular">Popularité</option><option value="rating">Meilleure note</option><option value="newest">Nouveauté</option></select></label></div>
    {filtered.length ? <div className="course-grid">{filtered.map((course) => <CourseCard key={course.id} course={course} />)}</div> : <div className="empty-state"><span><FiSearch /></span><h2>Aucun cours ne correspond à votre recherche.</h2><p>Essayez un autre mot-clé ou réinitialisez les filtres.</p><button type="button" className="button button-outline" onClick={() => { setQuery(''); updateCategory('Toutes'); setLevel('Tous les niveaux'); setPrice('Tous les prix'); }}>Effacer les filtres</button></div>}
  </div></section></PageFrame>;
}

export function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);
  const navigate = useNavigate();
  const { user, isEnrolled, enroll, visitCourse } = useLearning();
  useEffect(() => { if (course) visitCourse(course.id); }, [course, visitCourse]);
  if (!course) return <NotFoundPage />;
  const enrolled = isEnrolled(course.id);
  const related = courses.filter((item) => item.id !== course.id && item.category === course.category).slice(0, 2);
  const beginCourse = () => { enroll(course.id); navigate(`/courses/${course.id}/learn`); };
  return <PageFrame><div className="detail-page">
    <div className="detail-hero"><div className="content-width detail-hero-grid"><div className="detail-copy"><Link className="back-link" to="/courses"><FiArrowLeft /> Tous les cours</Link><span className="eyebrow">{course.category} <span className="breadcrumb-dot">/</span> {course.level}</span><h1>{course.title}</h1><p>{course.description}</p><div className="detail-meta"><span><FiUsers /> {course.instructor}</span><span><FiClock /> {course.duration}</span><span><span className="rating-star">★</span> {course.rating} ({course.reviews} avis)</span></div><div className="detail-actions"><button type="button" className="button button-primary" onClick={beginCourse}>{enrolled ? 'Reprendre le cours' : course.price === 0 ? 'S’inscrire gratuitement' : 'S’inscrire au cours'} <FiArrowUpRight /></button><span className="detail-price">{course.price === 0 ? 'Accès gratuit' : `${course.price} €`}<small>Paiement simulé · Accès immédiat</small></span></div></div><div className="detail-image"><img src={course.image} alt={`Illustration du cours ${course.title}`} /><span className="image-count"><FiBookOpen /> {lessonCount(course)} leçons · {course.modules.length} modules</span></div></div></div>
    <div className="content-width detail-content-grid"><div className="detail-main"><section className="detail-section"><span className="eyebrow">CE QUE VOUS ALLEZ APPRENDRE</span><h2>À la fin, vous saurez…</h2><div className="outcome-list">{course.outcomes.map((outcome) => <p key={outcome}><FiCheckCircle /> {outcome}</p>)}</div></section><section className="detail-section"><span className="eyebrow">LE PARCOURS</span><h2>Au programme</h2><div className="curriculum-list">{course.modules.map((module, index) => <details key={module.title} open={index === 0}><summary><span><strong>{String(index + 1).padStart(2, '0')}</strong>{module.title}</span><span>{module.lessons.length} leçons <FiArrowDownRight /></span></summary><div className="curriculum-lessons">{module.lessons.map((lesson) => <div key={lesson.id}><span><FiPlay />{lesson.title}{lesson.quiz && <small>Quiz</small>}</span><span>{lesson.duration}</span></div>)}</div></details>)}</div></section><section className="detail-section"><span className="eyebrow">AVIS DES APPRENANTS</span><h2>Ce qu’ils en retiennent.</h2><div className="review-card"><div className="review-stars">★★★★★</div><p>« Des explications très claires et des exercices qui donnent envie d’aller plus loin. J’ai tout de suite pu appliquer ce que j’apprenais. »</p><strong>— Léa M., apprenante</strong></div></section></div><aside className="detail-aside"><div className="instructor-card"><span className="teacher-avatar instructor-avatar">{course.instructor.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span><span className="eyebrow">VOTRE FORMATEUR</span><h3>{course.instructor}</h3><p>Professionnel·le passionné·e, votre formateur partage des méthodes concrètes issues du terrain.</p></div><div className="prerequisite-card"><span className="eyebrow">AVANT DE COMMENCER</span><h3>Les prérequis</h3>{course.prerequisites.map((item) => <p key={item}><FiCheck /> {item}</p>)}</div>{user && <Link className="aside-dashboard-link" to="/dashboard">Retrouver mes cours <FiArrowUpRight /></Link>}</aside></div>
    {related.length > 0 && <section className="content-width related-section"><SectionHeading eyebrow="POUR CONTINUER À EXPLORER" title="Dans la même famille." /><div className="course-grid">{related.map((item) => <CourseCard key={item.id} course={item} />)}</div></section>}
  </div></PageFrame>;
}

export function DashboardPage() {
  const { user, records, recent, progress } = useLearning();
  const enrolled = courses.filter((course) => records[course.id]?.enrolled);
  const completed = enrolled.filter((course) => progress(course.id).percent === 100);
  const inProgress = enrolled.filter((course) => progress(course.id).percent < 100);
  const certificates = completed.map((course) => ({ course, ...records[course.id].certificate }));
  const recentCourses = recent.map((id) => courses.find((course) => course.id === id)).filter(Boolean);
  return <PageFrame><div className="dashboard-page"><div className="content-width">
    <div className="dashboard-welcome"><div><span className="eyebrow">VOTRE ESPACE D’APPRENTISSAGE</span><h1>Bonjour{user?.name ? `, ${user.name.split(' ')[0]}` : ''}.</h1><p>Chaque leçon vous rapproche de la suite.</p></div><Link className="button button-primary" to="/courses">Trouver un cours <FiArrowUpRight /></Link></div>
    <div className="dashboard-stats"><div><span className="dashboard-stat-icon"><FiBookOpen /></span><span><strong>{enrolled.length}</strong><small>cours inscrits</small></span></div><div><span className="dashboard-stat-icon"><FiTrendingUp /></span><span><strong>{completed.length}</strong><small>cours terminés</small></span></div><div><span className="dashboard-stat-icon"><FiAward /></span><span><strong>{certificates.length}</strong><small>certificats obtenus</small></span></div><div><span className="dashboard-stat-icon"><FiLayers /></span><span><strong>{enrolled.reduce((sum, course) => sum + progress(course.id).completed, 0)}</strong><small>leçons terminées</small></span></div></div>
    <section className="dashboard-section" id="my-courses"><SectionHeading eyebrow="REPRENDRE LE FIL" title="Mes cours en cours." action="Explorer le catalogue" /><div className="dashboard-course-list">{inProgress.length ? inProgress.map((course) => <DashboardCourse key={course.id} course={course} percentage={progress(course.id).percent} />) : <div className="empty-state empty-state-compact"><span><FiBookOpen /></span><h2>Tout commence par une première leçon.</h2><p>Choisissez un cours et faites de la place à une nouvelle idée.</p><Link className="button button-primary" to="/courses">Explorer les cours</Link></div>}</div></section>
    {recentCourses.length > 0 && <section className="dashboard-section"><SectionHeading eyebrow="VOTRE HISTORIQUE" title="Récemment consultés." /><div className="course-grid">{recentCourses.slice(0, 3).map((course) => <CourseCard key={course.id} course={course} progress={records[course.id]?.completedLessonIds?.length ? progress(course.id).percent : 0} />)}</div></section>}
    <section className="dashboard-section"><SectionHeading eyebrow="VOS RÉUSSITES" title="Certificats." />{certificates.length ? <div className="certificate-grid">{certificates.map((certificate) => <CertificateCard key={certificate.course.id} certificate={certificate} name={user?.name || 'Apprenant'} />)}</div> : <div className="certificate-empty"><FiAward /><p>Vos certificats apparaîtront ici lorsque vous aurez terminé un parcours.</p></div>}</section>
  </div></div></PageFrame>;
}

function DashboardCourse({ course, percentage }) {
  return <article className="dashboard-course"><img src={course.image} alt="" /><div className="dashboard-course-info"><span className="eyebrow">{course.category} · {course.level}</span><h3>{course.title}</h3><span className="dashboard-course-progress">{percentage}% terminé · {lessonCount(course)} leçons</span><ProgressBar value={percentage} /></div><Link className="button button-outline button-small" to={`/courses/${course.id}/learn`}>Continuer <FiArrowRight /></Link></article>;
}

function CertificateCard({ certificate, name }) {
  const issueDate = new Date(certificate.issuedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const download = () => {
    const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
    const html = `<!doctype html><html lang="fr"><meta charset="utf-8"><title>Certificat - ${escapeHtml(certificate.course.title)}</title><style>body{margin:0;padding:40px;background:#eef3ef;font-family:Georgia,serif;color:#1d4536}.certificate{max-width:850px;margin:4vh auto;padding:80px;border:12px double #527b61;background:#fff;text-align:center}.brand{font:700 15px Arial;letter-spacing:4px;text-transform:uppercase}.eyebrow{margin-top:55px;font:700 12px Arial;letter-spacing:3px}.name{margin:20px;font-size:50px}.course{margin:12px;font-size:31px;color:#a86149}.meta{margin-top:55px;font:14px Arial}.print{margin:24px;padding:12px 18px;background:#215846;color:#fff;border:0;cursor:pointer}@media print{body{padding:0;background:#fff}.certificate{margin:0 auto;page-break-inside:avoid}.print{display:none}}</style><main class="certificate"><div class="brand">Atelier Learning</div><div class="eyebrow">CERTIFICAT DE RÉUSSITE</div><p>Ce certificat est décerné à</p><h1 class="name">${escapeHtml(name)}</h1><p>pour avoir terminé avec succès la formation</p><h2 class="course">${escapeHtml(certificate.course.title)}</h2><p class="meta">Délivré le ${escapeHtml(issueDate)} · ${escapeHtml(certificate.number)}</p><button class="print" onclick="window.print()">Imprimer ou enregistrer en PDF</button></main></html>`;
    const url = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `certificat-${certificate.course.id}.html`;
    anchor.click();
    URL.revokeObjectURL(url);
  };
  return <article className="certificate-card"><div className="certificate-art"><span className="certificate-seal"><FiAward /></span><span className="certificate-brand">ATELIER LEARNING</span><span className="certificate-title">Certificat<br />de réussite</span><span className="certificate-line" /><span className="certificate-course-name">{certificate.course.title}</span><span className="certificate-date">{issueDate}</span></div><div className="certificate-card-bottom"><span><strong>{certificate.number}</strong><small>{certificate.course.title}</small></span><button className="icon-button" type="button" onClick={download} aria-label="Télécharger le certificat"><FiDownload /></button></div></article>;
}

export function CertificatesPage() {
  const { records, user } = useLearning();
  const certificates = courses.filter((course) => records[course.id]?.certificate).map((course) => ({ course, ...records[course.id].certificate }));
  return <PageFrame><section className="simple-page"><div className="content-width"><span className="eyebrow">VOS RÉUSSITES</span><h1>Certificats.</h1><p>Les étapes que vous avez accomplies méritent d’être célébrées.</p>{certificates.length ? <div className="certificate-grid">{certificates.map((certificate) => <CertificateCard key={certificate.course.id} certificate={certificate} name={user?.name || 'Apprenant'} />)}</div> : <div className="empty-state"><span><FiAward /></span><h2>Votre premier certificat est à portée de cours.</h2><p>Terminez toutes les leçons d’un parcours pour le recevoir ici.</p><Link className="button button-primary" to="/courses">Explorer les cours</Link></div>}</div></section></PageFrame>;
}

export function LearningPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const course = courses.find((item) => item.id === id);
  const { records, progress, completeLesson, enroll, theme } = useLearning();
  const lessons = course ? allLessons(course) : [];
  const completedIds = records[id]?.completedLessonIds || [];
  const requestedId = searchParams.get('lesson');
  const activeLesson = lessons.find((lesson) => lesson.id === requestedId) || lessons.find((lesson) => !completedIds.includes(lesson.id)) || lessons[0];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  if (!course) return <NotFoundPage />;
  const activeIndex = lessons.findIndex((lesson) => lesson.id === activeLesson?.id);
  const completed = completedIds.includes(activeLesson?.id);
  const courseProgress = progress(course.id);
  const selectLesson = (lesson) => { setSearchParams({ lesson: lesson.id }); setSidebarOpen(false); };
  const moveLesson = (offset) => { const next = lessons[activeIndex + offset]; if (next) selectLesson(next); };
  const finishLesson = () => { completeLesson(course.id, activeLesson.id); enroll(course.id); };
  return <div className="player-layout academy-site" data-theme={theme}>
    <header className="player-topbar"><Link to="/dashboard" className="player-back"><FiArrowLeft /> <span>Mon espace</span></Link><Link className="academy-brand player-brand" to="/"><span className="brand-mark">a.</span><span>atelier<span className="brand-period">.</span></span></Link><div className="player-top-actions"><div className="player-top-progress"><ProgressBar value={courseProgress.percent} label={`${courseProgress.percent}%`} /></div><ThemeToggle /><Link className="player-exit" to={`/courses/${course.id}`}>Quitter le cours <FiArrowUpRight /></Link></div></header>
    <div className="player-body"><aside className={`lesson-sidebar ${sidebarOpen ? 'lesson-sidebar-open' : ''}`}><div className="lesson-sidebar-heading"><span className="eyebrow">VOTRE PARCOURS</span><h2>{course.title}</h2><ProgressBar value={courseProgress.percent} label={`${courseProgress.completed}/${courseProgress.total} leçons`} /></div><div className="lesson-modules">{course.modules.map((module, moduleIndex) => <section key={module.title}><h3><span>{String(moduleIndex + 1).padStart(2, '0')}</span>{module.title}</h3>{module.lessons.map((lesson) => <button key={lesson.id} className={`lesson-nav-item ${lesson.id === activeLesson?.id ? 'lesson-nav-active' : ''}`} type="button" onClick={() => selectLesson(lesson)}><span className="lesson-check">{completedIds.includes(lesson.id) ? <FiCheck /> : <FiPlay />}</span><span>{lesson.title}<small>{lesson.duration}</small></span></button>)}</section>)}</div></aside>
      <main className="lesson-main"><button className="lesson-list-toggle" type="button" onClick={() => setSidebarOpen(!sidebarOpen)}><FiLayers /> {sidebarOpen ? 'Masquer le programme' : 'Afficher le programme'}</button><div className="lesson-content"><div className="lesson-player"><div className="lesson-play-mark"><FiPlay /></div><span>LEÇON {String(activeIndex + 1).padStart(2, '0')} <span>·</span> {course.category.toUpperCase()}</span><h1>{activeLesson.title}</h1><p>Une nouvelle idée, à votre rythme.</p></div><div className="lesson-reading"><div className="lesson-reading-heading"><div><span className="eyebrow">LEÇON {String(activeIndex + 1).padStart(2, '0')} SUR {lessons.length}</span><h2>{activeLesson.title}</h2></div><span className="reading-time"><FiClock /> {activeLesson.duration}</span></div><p className="lesson-description">{activeLesson.content}</p><div className="lesson-resource"><span><FiBookOpen /></span><div><strong>Pour aller plus loin</strong><small>{activeLesson.resources[0]} · {activeLesson.resources[1]}</small></div><FiArrowUpRight /></div><Quiz quiz={activeLesson.quiz} /><div className="lesson-actions"><button className="button button-quiet button-small" type="button" onClick={() => moveLesson(-1)} disabled={activeIndex === 0}><FiArrowLeft /> Précédent</button><button className={`button ${completed ? 'button-outline' : 'button-primary'} button-small`} type="button" onClick={finishLesson}>{completed ? <><FiCheck /> Leçon terminée</> : 'Marquer comme terminé'}</button><button className="button button-quiet button-small" type="button" onClick={() => moveLesson(1)} disabled={activeIndex === lessons.length - 1}>Suivant <FiArrowRight /></button></div>{courseProgress.percent === 100 && <div className="completion-banner"><FiAward /><div><strong>Parcours terminé, bravo !</strong><p>Votre certificat est disponible dans votre espace.</p></div><Link to="/certificates" className="text-link">Voir mon certificat <FiArrowRight /></Link></div>}</div></div></main>
    </div>
  </div>;
}

export function AuthPage({ mode = 'login' }) {
  const isRegister = mode === 'register';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { register, login, theme } = useLearning();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    const result = isRegister ? register({ name, email }) : login({ email });
    if (result) setError(result);
    else { setMessage(isRegister ? 'Votre compte de démonstration est prêt.' : 'Ravi de vous retrouver.'); window.setTimeout(() => navigate('/dashboard'), 450); }
    setSubmitting(false);
  };
  return <div className="auth-page academy-site" data-theme={theme}>
    <div className="auth-side">
      <Link className="academy-brand auth-brand" to="/"><span className="brand-mark">a.</span><span>atelier<span className="brand-period">.</span></span></Link>
      <div className="auth-side-copy"><span className="eyebrow">FAITES DE LA PLACE À LA SUITE</span><h1>Un nouveau savoir peut tout <em>déplacer.</em></h1><p>Des formations utiles, des progrès visibles, et la liberté d’apprendre à votre rythme.</p></div>
      <span className="auth-side-note">APPRENDRE · ESSAYER · RECOMMENCER</span>
    </div>
    <div className="auth-main">
      <div className="auth-top-actions"><ThemeToggle /><Link className="auth-back" to="/"><FiArrowLeft /> Retour à l’accueil</Link></div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <span className="eyebrow">{isRegister ? 'VOTRE PROCHAINE ÉTAPE' : 'HEUREUX DE VOUS REVOIR'}</span>
        <h2>{isRegister ? 'Créer mon compte' : 'Se connecter'}</h2>
        <p>{isRegister ? 'En quelques secondes, votre espace est prêt.' : 'Retrouvez vos cours et reprenez là où vous en étiez.'}</p>
        {error && <div className="form-message form-error" role="alert">{error}</div>}
        {message && <div className="form-message form-success" role="status">{message}</div>}
        {isRegister && <label>Nom complet<input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Camille Laurent" /></label>}
        <label>Adresse e-mail<input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="vous@exemple.fr" /></label>
        <label>Mot de passe<input required type="password" minLength="4" autoComplete={isRegister ? 'new-password' : 'current-password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" /></label>
        <button type="submit" className="button button-primary auth-submit" disabled={submitting}>{isRegister ? 'Créer mon compte' : 'Continuer'} <FiArrowUpRight /></button>
        <p className="auth-switch">{isRegister ? 'Déjà inscrit·e ?' : 'Pas encore de compte ?'} <Link to={isRegister ? '/login' : '/register'}>{isRegister ? 'Se connecter' : 'Créer un compte'}</Link></p>
        <div className="simulation-note"><span>i</span><p><strong>Mode démonstration frontend.</strong> Les comptes sont enregistrés dans ce navigateur. Le mot de passe n’est ni vérifié ni stocké; cette authentification n’est pas sécurisée pour un usage réel.</p></div>
      </form>
    </div>
  </div>;
}

export function ProfilePage() {
  const { user, updateProfile, logout } = useLearning();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [saved, setSaved] = useState(false);
  return <PageFrame><section className="simple-page"><div className="content-width profile-layout"><div><span className="eyebrow">VOTRE ESPACE PERSONNEL</span><h1>Profil.</h1><p>Quelques détails sur vous, conservés uniquement dans ce navigateur.</p><div className="simulation-note"><span>i</span><p>Compte de démonstration enregistré localement. Pas de serveur, pas de données partagées, pas de sécurité réelle.</p></div></div><form className="profile-form" onSubmit={(event) => { event.preventDefault(); updateProfile({ name, email }); setSaved(true); }}><label>Nom complet<input required value={name} onChange={(event) => { setName(event.target.value); setSaved(false); }} /></label><label>Adresse e-mail<input required type="email" value={email} onChange={(event) => { setEmail(event.target.value); setSaved(false); }} /></label><div className="profile-actions"><button type="submit" className="button button-primary">{saved ? 'Modifications enregistrées' : 'Enregistrer'}</button><button type="button" className="button button-quiet" onClick={logout}>Se déconnecter</button></div><Link className="profile-dashboard-link" to="/dashboard">Retour à mon espace <FiArrowRight /></Link></form></div></section></PageFrame>;
}

export function NotFoundPage() {
  return <PageFrame><section className="simple-page"><div className="content-width not-found"><span className="eyebrow">PAGE INTROUVABLE</span><h1>Cette page a pris un autre chemin.</h1><p>Le lien n’existe pas ou le cours a été déplacé.</p><Link to="/courses" className="button button-primary">Explorer les cours <FiArrowRight /></Link></div></section></PageFrame>;
}
