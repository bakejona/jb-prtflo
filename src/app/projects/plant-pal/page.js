import NavBar from '../../Navigation';
import BackButton from '../BackButton';
import styles from '../project.module.css';

const rows = [
  {
    image: '/plantpal/pp-login.png',
    title: 'What is PlantPal?',
    body: 'PlantPal is a smart indoor plant care companion that takes the guesswork out of keeping your plants alive. From finding the right plant for your space to building automated care routines, PlantPal combines a curated plant database, real-time weather data, and a personalised dashboard to keep every plant thriving.',
  },
  {
    image: '/plantpal/pp-login.png',
    title: 'Plant Matchmaker',
    body: 'Not sure which plant is right for you? The Plant Matchmaker quiz walks you through a short set of questions about your space and lifestyle, then recommends plants that genuinely suit you. Powered by the Perenual plant API, each match comes with sunlight requirements, watering needs, and toxicity info.',
  },
  {
    image: '/plantpal/pp-login.png',
    title: 'Tailored to You',
    body: 'Each question in the quiz is designed to narrow down the best plant for your environment — whether you have bright south-facing windows or a dim corner office, a packed schedule or plenty of free time, or pets that like to chew on things. No generic recommendations.',
  },
  {
    image: '/plantpal/pp-login.png',
    title: 'Plant Search',
    body: 'Browse and search thousands of plant species with real-time results from the Perenual API. Each result surfaces the key details you actually need: common names, care difficulty, sunlight and watering needs — all before you commit to adding it to your collection.',
  },
  {
    image: '/plantpal/pp-login.png',
    title: 'Detailed Plant Profiles',
    body: 'Tap into any plant for a full profile — care guides, growth habits, toxicity warnings, and native region. Everything you need to understand your plant before it ever lands on your shelf.',
  },
  {
    image: '/plantpal/pp-login.png',
    title: 'Add to Your Collection',
    body: 'Adding a plant to your collection is quick and personal. Give it a nickname, upload your own photo, and PlantPal automatically builds a watering schedule based on the species data — so your care routine starts working immediately.',
  },
  {
    image: '/plantpal/pp-login.png',
    title: 'Care Dashboard & Task List',
    body: 'The Care Dashboard keeps all your upcoming plant tasks in one place. Watering reminders are automatically calculated per plant and surface as a prioritised task list — so you always know what needs attention today versus later in the week.',
  },
  {
    image: '/plantpal/pp-login.png',
    title: 'Satisfying Progress',
    body: 'Check off care tasks as you complete them and watch your progress stack up. PlantPal makes the routine feel rewarding — a clear visual record that your plants are getting the attention they need.',
  },
  {
    image: '/plantpal/pp-login.png',
    title: 'Your Account',
    body: 'PlantPal is built on Firebase for reliable cloud sync across devices. Your collection, schedules, and preferences are tied to your account and available wherever you are. Real-time weather data from WeatherAPI factors local conditions into your care recommendations automatically.',
  },
];

export default function PlantPalPage() {
  return (
    <main className={styles.page}>
      <NavBar />
      <BackButton />
      <div className={styles.rowsContainer}>
        {rows.map((row, i) => (
          <section key={i} className={`${styles.row} ${i % 2 === 1 ? styles.reverse : ''}`}>
            <div className={styles.rowImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={row.image} alt={row.title} />
            </div>
            <div className={styles.rowText}>
              <div className={styles.divider} />
              <h2>{row.title}</h2>
              <p>{row.body}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
