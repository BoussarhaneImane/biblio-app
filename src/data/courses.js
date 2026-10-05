import imageReact from '../images/cr1.jpg';
import imageDesign from '../images/cr2.jpg';
import imageData from '../images/cr3.jpg';
import imageEnglish from '../images/crA.jpg';

const makeLesson = (id, title, duration, content, quiz) => ({
  id,
  title,
  duration,
  content,
  resources: ['Fiche de synthese', 'Exercice pratique'],
  quiz,
});

const reactModules = [
  { title: 'Les fondations', lessons: [
    makeLesson('react-1', 'Penser en composants', '12 min', 'Decouvrez comment decomposer une interface en pieces reutilisables et composer une page React.', { question: 'A quoi sert principalement un composant React ?', options: ['A reutiliser une partie d’interface', 'A stocker une image', 'A remplacer CSS'], answer: 0, explanation: 'Un composant encapsule une partie d’interface reutilisable.' }),
    makeLesson('react-2', 'JSX et rendu', '16 min', 'Le JSX rapproche la structure visuelle de votre code JavaScript. Construisez votre premier rendu dynamique.'),
  ]},
  { title: 'Donnees et interactions', lessons: [
    makeLesson('react-3', 'Props et composition', '18 min', 'Faites circuler des donnees entre composants grace aux props et gardez vos interfaces modulaires.'),
    makeLesson('react-4', 'Etat et evenements', '22 min', 'Donnez vie a vos interfaces avec useState et les gestionnaires d’evenements.', { question: 'Quel hook React permet de gerer un etat local ?', options: ['useEffect', 'useState', 'useRoute'], answer: 1, explanation: 'useState declare une valeur d’etat et sa fonction de mise a jour.' }),
  ]},
  { title: 'Construire une application', lessons: [
    makeLesson('react-5', 'Effets et donnees', '20 min', 'Synchronisez votre interface avec les effets et structurez les chargements de donnees.'),
    makeLesson('react-6', 'Projet final', '28 min', 'Assemblez les acquis dans une petite application responsive, testable et maintenable.'),
  ]},
];

export const courses = [
  {
    id: 'react-foundations', title: 'React : des bases au projet complet', category: 'Developpement', level: 'Debutant',
    description: 'Construisez des interfaces modernes et passez de vos premiers composants a une application complete.',
    instructor: 'Amine Benali', duration: '6 h 20', rating: 4.9, reviews: 284, price: 59, image: imageReact,
    modules: reactModules, outcomes: ['Composer une interface avec des composants', 'Gerer et transmettre des donnees', 'Construire une application React responsive'],
    prerequisites: ['Connaitre les bases de JavaScript', 'Aucun prealable en React'],
  },
  {
    id: 'design-interface', title: 'UI design : interfaces claires et utiles', category: 'Design', level: 'Intermediaire',
    description: 'Apprenez a transformer des besoins utilisateurs en interfaces coherentes, accessibles et elegantes.',
    instructor: 'Sarah Moreau', duration: '4 h 45', rating: 4.8, reviews: 196, price: 39, image: imageDesign,
    modules: [
      { title: 'Fondamentaux visuels', lessons: [makeLesson('design-1', 'Hierarchie visuelle', '14 min', 'Organisez titres, actions et contenus pour guider le regard sans effort.'), makeLesson('design-2', 'Couleur et contraste', '17 min', 'Choisissez une palette utile et verifiez les contrastes pour tous les publics.')] },
      { title: 'Systeme de design', lessons: [makeLesson('design-3', 'Grilles et espacements', '20 min', 'Posez une grille stable et un rythme d’espacement coherent.'), makeLesson('design-4', 'Composants reutilisables', '21 min', 'Formalisez les boutons, champs et cartes dans un systeme durable.')] },
      { title: 'Prototyper et tester', lessons: [makeLesson('design-5', 'Prototype interactif', '18 min', 'Reliez les ecrans pour rendre les parcours testables.'), makeLesson('design-6', 'Ameliorer par les retours', '24 min', 'Apprenez a observer les usages et a prioriser les ajustements.')] },
    ],
    outcomes: ['Organiser une interface lisible', 'Creer un mini systeme de design', 'Tester un prototype aupres d’utilisateurs'], prerequisites: ['Aucun outil payant requis'],
  },
  {
    id: 'data-analytics', title: 'Analyser ses donnees avec methode', category: 'Data', level: 'Intermediaire',
    description: 'Passez de tableaux bruts a des indicateurs utiles pour prendre de meilleures decisions.',
    instructor: 'Nora El Idrissi', duration: '5 h 10', rating: 4.7, reviews: 143, price: 0, image: imageData,
    modules: [
      { title: 'Bien poser la question', lessons: [makeLesson('data-1', 'Donnees et decisions', '13 min', 'Formulez une question mesurable avant d’ouvrir votre tableur.'), makeLesson('data-2', 'Nettoyer un jeu de donnees', '19 min', 'Reperez les valeurs manquantes, doublons et formats incoherents.', { question: 'Pourquoi verifier les doublons ?', options: ['Pour eviter de compter deux fois une observation', 'Pour augmenter le volume', 'Pour colorer les cellules'], answer: 0, explanation: 'Un doublon peut biaiser les totaux et les indicateurs.' })] },
      { title: 'Explorer et comparer', lessons: [makeLesson('data-3', 'Choisir les bons indicateurs', '18 min', 'Selectionnez des mesures directement reliees a votre question.'), makeLesson('data-4', 'Lire une distribution', '22 min', 'Interpretez les tendances et les valeurs atypiques avec recul.')] },
      { title: 'Raconter les resultats', lessons: [makeLesson('data-5', 'Visualiser sans bruit', '16 min', 'Choisissez un graphique qui rend le message immediat.'), makeLesson('data-6', 'Presenter une recommandation', '25 min', 'Transformez vos observations en une recommandation claire et nuancee.')] },
    ],
    outcomes: ['Nettoyer un jeu de donnees', 'Choisir et calculer des indicateurs', 'Presenter des resultats actionnables'], prerequisites: ['Aisance avec les tableaux'],
  },
  {
    id: 'english-speaking', title: 'Anglais pratique : prendre la parole', category: 'Langues', level: 'Debutant',
    description: 'Gagnez en confiance avec des situations concretes, du vocabulaire utile et des exercices courts.',
    instructor: 'Emma Wilson', duration: '3 h 30', rating: 4.9, reviews: 328, price: 29, image: imageEnglish,
    modules: [
      { title: 'Demarrer une conversation', lessons: [makeLesson('english-1', 'Se presenter naturellement', '10 min', 'Presentez votre parcours avec des phrases simples et naturelles.'), makeLesson('english-2', 'Poser les bonnes questions', '14 min', 'Entretenez la conversation avec des questions ouvertes et utiles.')] },
      { title: 'Parler au quotidien', lessons: [makeLesson('english-3', 'Au travail', '15 min', 'Entrainez-vous a participer a une reunion et partager une idee.'), makeLesson('english-4', 'Voyager sereinement', '12 min', 'Maitrisez les expressions qui facilitent les situations de voyage.')] },
      { title: 'Fluidite et confiance', lessons: [makeLesson('english-5', 'Prononciation utile', '17 min', 'Travaillez le rythme et les sons qui rendent votre message plus clair.'), makeLesson('english-6', 'Conversation finale', '20 min', 'Mettez les expressions en pratique dans une conversation guidee.')] },
    ],
    outcomes: ['Se presenter avec aisance', 'Participer a des conversations courantes', 'Pratiquer avec une routine de 10 minutes'], prerequisites: ['Aucun prealable'],
  },
];

export const allLessons = (course) => course.modules.flatMap((module) => module.lessons);
export const lessonCount = (course) => allLessons(course).length;
export default courses;