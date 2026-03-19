import NavBar from '../../Navigation';
import styles from '../project.module.css';

const rows = [
  {
    image: '/mockups/loci-mockup.png',
    title: 'What is Loci?',
    body: 'Loci is a concept for a local art marketplace and community platform — a space where artists and art lovers in the same city can discover, connect, and transact without the noise of global marketplaces. The project explores what a hyper-local creative economy could look like in a well-designed digital space.',
  },
  {
    image: '/mockups/loci-mockup.png',
    title: 'Community First',
    body: 'The core of Loci is community. Rather than anonymous listings, the platform surfaces the people behind the work — their stories, studios, and upcoming events. Buyers browse not just art but the artists themselves, building genuine local connections that go beyond a single transaction.',
  },
  {
    image: '/mockups/loci-mockup.png',
    title: 'Design Process',
    body: 'Loci was designed entirely in Figma and Adobe XD, moving through user research, wireframes, and high-fidelity prototypes. Each screen was crafted to feel warm and tactile — reflecting the handmade nature of the work on display. The colour palette, typography, and layout language were all chosen to feel like an art space, not a storefront.',
  },
  {
    image: '/mockups/loci-mockup.png',
    title: 'Vision',
    body: 'Local art scenes are rich but often invisible. Loci imagines a world where finding a painter two streets away is as easy as opening an app — and where that painter has a beautifully designed page to represent their practice. This mockup lays the groundwork for what a full build could become.',
  },
];

export default function LociPage() {
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
