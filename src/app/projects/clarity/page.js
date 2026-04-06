import NavBar from '../../Navigation';
import BackButton from '../BackButton';
import styles from '../project.module.css';

const rows = [
  {
    image: '/mockups/clarity-mockup.png',
    title: 'What is Clarity?',
    body: 'Clarity is a lightweight, real-time system resource monitor built for people who want a clean overview of their computer\'s health without the clutter of traditional task managers. Designed with simplicity at its core, Clarity surfaces the information that matters — instantly, and without noise.',
  },
  {
    image: '/clarity/clarity-cpu.png',
    title: 'Live System Monitoring',
    body: 'Clarity tracks CPU load, RAM usage, GPU performance, core temperatures, battery status, and live network speeds — all updated in real time. Drill into detailed modal views for each metric: see your top 5 resource-hungry processes, individual RAM module breakdowns, VRAM utilisation, active network interfaces, and latency.',
  },
  {
    image: '/clarity/clarity-dashboard.png',
    title: 'Smart Diagnostics',
    body: 'The built-in diagnostics engine analyses your system stats and delivers plain-language health summaries so you always know what\'s going on under the hood. Color-coded indicators — green, yellow, and red — give you an instant read on any area of concern without digging through raw numbers.',
  },
  {
    image: '/clarity/clarity-colors.png',
    title: 'Customize to Your Setup',
    body: 'Choose from a selection of colors with a moving background lava lamp effect to provide your setup with ambient lighting and colors that suit you.',
  },
  {
    image: '/clarity/clarity-purple.png',
    title: 'Built for Privacy',
    body: 'Every piece of data Clarity collects stays on your machine. There are no cloud connections, no telemetry, and no accounts — just a fast, local Electron app powered by React and Vite. Clarity was created out of frustration with other system resource dashboards and is soon available for both macOS and Windows.',
  },
];

export default function ClarityPage() {
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
