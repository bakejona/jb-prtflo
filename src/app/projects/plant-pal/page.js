import NavBar from '../../Navigation';
import styles from '../project.module.css';

const rows = [
  {
    image: '/mockups/plant-pal-mockup.png',
    title: 'What is PlantPal?',
    body: 'PlantPal is a smart indoor plant care companion that takes the guesswork out of keeping your plants alive. From finding the right plant for your space to building automated care routines, PlantPal combines a curated plant database, real-time weather data, and a personalised dashboard to keep every plant thriving.',
  },
  {
    image: '/mockups/plant-pal-mockup.png',
    title: 'Plant Matchmaker',
    body: 'Not sure which plant is right for you? The Plant Matchmaker quiz walks you through a short set of questions — your lighting conditions, how flexible your schedule is, and whether you have pets — then recommends plants that genuinely suit your lifestyle. Powered by the Perenual plant API, each match includes sunlight requirements, watering needs, and toxicity info.',
  },
  {
    image: '/mockups/plant-pal-mockup.png',
    title: 'Care Dashboard',
    body: 'The Care Dashboard automatically calculates personalised watering schedules for each of your plants and surfaces upcoming task reminders so nothing gets missed. Your plants live in a visual gallery where you can add custom names and upload your own photos — making it feel personal, not clinical.',
  },
  {
    image: '/mockups/plant-pal-mockup.png',
    title: 'Weather & Live Data',
    body: 'PlantPal pulls real-time weather data for your location via WeatherAPI and factors it into your care recommendations — so a rainy week means your outdoor plants get a break. The app is built on Vite and Firebase for fast load times and reliable cloud sync, wrapped in a custom SCSS dark-mode interface.',
  },
];

export default function PlantPalPage() {
  return (
    <main className={styles.page}>
      <NavBar />
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
