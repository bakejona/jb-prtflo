import NavBar from '../../Navigation';
import BackButton from '../BackButton';
import styles from '../project.module.css';

const rows = [
  {
    image: '/mockups/scooper-mockup.png',
    title: 'What is Scooper-Co?',
    body: 'Scooper-Co is a mobile-responsive web app for a pet waste removal service. The goal was to build something that felt professional and trustworthy for a niche but real local service — making it easy for pet owners to book a cleanup, understand pricing, and get in touch, all from any device.',
  },
  {
    image: '/mockups/scooper-mockup.png',
    title: 'Mobile-First Design',
    body: 'The entire experience was designed and built mobile-first, then scaled up gracefully to tablet and desktop. Layouts, touch targets, and typography were all tested at small screen sizes before being adapted for larger viewports — ensuring a smooth experience for the majority of users who arrive on their phones.',
  },
  {
    image: '/mockups/scooper-mockup.png',
    title: 'User Experience',
    body: 'Scooper-Co strips away friction at every step. The booking flow is minimal and linear, the service tiers are clearly laid out, and the call-to-action is always within reach. Visual hierarchy guides the eye from the value proposition straight to a conversion point without detours.',
  },
  {
    image: '/mockups/scooper-mockup.png',
    title: 'Built with Next.js & React',
    body: 'The app is built on Next.js with React components, taking advantage of server-side rendering for fast initial loads and clean routing. The codebase is lean and structured for easy updates — ideal for a small business site that needs to stay low-maintenance over time.',
  },
];

export default function ScooperCoPage() {
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
