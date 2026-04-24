'use client';

import { useState } from 'react';
import NavBar from '../../Navigation';
import BackButton from '../BackButton';
import styles from './plant-pal.module.css';

const CAROUSEL_IMAGES = [
  { src: '/plantpal/pp-assembly.jpeg',   alt: 'Assembly' },
  { src: '/plantpal/pp-dash-front.jpeg', alt: 'Dashboard front' },
  { src: '/plantpal/pp-dash-main.jpeg',  alt: 'Dashboard main' },
  { src: '/plantpal/pp-empty.jpeg',      alt: 'Empty state' },
  { src: '/plantpal/pp-plant.jpeg',      alt: 'Plant view' },
  { src: '/plantpal/pp-topview.jpeg',    alt: 'Top view' },
];

export default function PlantPalPage() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx(i => (i - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const next = () => setIdx(i => (i + 1) % CAROUSEL_IMAGES.length);

  return (
    <main className={styles.page}>
      <NavBar />
      <BackButton />

      <div className={styles.content}>

        {/* ── Hero ── */}
        <div className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/plantpal/Plantpal-logos_plantpal logo color.png"
            alt="PlantPal logo"
            className={styles.heroLogo}
          />
          <h1 className={styles.heroTitle}>What is PlantPal?</h1>
          <p className={styles.heroDesc}>
            PlantPal is a mobile-first plant care companion built to help you discover, track, and maintain your
            indoor plants. From a personalised matchmaker quiz to automated daily care reminders, PlantPal combines
            a curated plant database, real-time weather data, and photo journaling — all in one clean, intuitive app.
          </p>
        </div>

        {/* ── User Focused Interface ── */}
        <div className={styles.row}>
          <div className={styles.rowImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/plantpal/ui-screens.jpg" alt="User Focused Interface" />
          </div>
          <div className={styles.rowText}>
            <div className={styles.divider} />
            <h2>User Focused Interface</h2>
            <p>
              Every screen in PlantPal is designed around reducing friction. The home dashboard surfaces a live
              weather widget powered by Open-Meteo, rotating plant care tips, and auto-generated daily task
              reminders for watering, fertilising, and journaling — all at a glance. A swipe-through onboarding
              flow eases new users in before sign-up, and the bottom navigation keeps your collection, search,
              and profile one tap away.
            </p>
          </div>
        </div>

        {/* ── Account Creation ── */}
        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.rowImageCapped}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/plantpal/createaccount.png" alt="Create account screen" />
          </div>
          <div className={styles.rowText}>
            <div className={styles.divider} />
            <h2>Account Creation</h2>
            <p>
              Getting started is quick — sign up with email and password or log in with Google, both handled
              through Firebase Authentication. Profile setup collects your display name, photo, location, and
              temperature preference so PlantPal can tailor recommendations from day one. Forgot your password?
              Email-based recovery is built in. Your collection, schedules, and journal sync instantly across
              devices via Firestore.
            </p>
          </div>
        </div>

        {/* ── Plant Specific Data ── */}
        <div className={styles.row}>
          <div className={styles.rowImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/plantpal/plantspecific-mockup.jpg" alt="Plant Specific Data" />
          </div>
          <div className={styles.rowText}>
            <div className={styles.divider} />
            <h2>Plant Specific Data</h2>
            <p>
              Tap into any plant for a full profile — common names, care difficulty, sunlight and watering needs,
              toxicity warnings, and native region. Each detail is pulled from a custom-built plant database, with
              more species being added in future updates. Add any plant to your collection, give it a nickname,
              upload your own photo, and log journal entries with notes and health ratings as it grows.
            </p>
          </div>
        </div>

        {/* ── Plant Database & API ── */}
        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.gradientImageWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/plantpal/plantapi.png" alt="Plant API and Database" />
          </div>
          <div className={styles.rowText}>
            <div className={styles.divider} />
            <h2>Plant Database & API</h2>
            <p>
              PlantPal's search and matchmaker run against a custom-built plant database, designed to surface the
              care requirements, growth habits, and toxicity info that actually matter. The database is actively
              growing — more plant species will be added with each future update. Alongside the plant data,
              Open-Meteo provides live local weather so care recommendations adjust to your actual climate rather
              than generic defaults.
            </p>
          </div>
        </div>

        {/* ── Smart Pot Functionality ── */}
        <div className={styles.row}>
          <div className={styles.smartPotWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/plantpal/smartpot.png" alt="PlantPal Smart Pot" className={styles.smartPotImg} />
          </div>
          <div className={styles.rowText}>
            <div className={styles.divider} />
            <h2>Smart Pot Functionality</h2>
            <p>
              PlantPal extends beyond software with a companion smart pot designed and built from scratch.
              The enclosure was 3D modelled in Fusion 360 to house four sensors — soil moisture, ambient light,
              temperature, and humidity — alongside an ESP32-C microcontroller. The ESP32-C was configured using
              Arduino to capture live readings and transmit them directly to the app, giving your dashboard a
              real-time picture of your plant's environment without any manual input.
            </p>
          </div>
        </div>

        {/* ── Behind the Scenes: carousel as image side ── */}
        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.carouselSide}>
            <div className={styles.carousel}>
              <button className={styles.carouselBtn} onClick={prev} aria-label="Previous">&#8249;</button>
              <div className={styles.carouselWindow}>
                <div
                  className={styles.carouselTrack}
                  style={{ transform: `translateX(-${idx * 100}%)` }}
                >
                  {CAROUSEL_IMAGES.map((img, i) => (
                    <div key={i} className={styles.carouselSlide}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </div>
              </div>
              <button className={styles.carouselBtn} onClick={next} aria-label="Next">&#8250;</button>
            </div>
            <div className={styles.carouselDots}>
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className={styles.rowText}>
            <div className={styles.divider} />
            <h2>Behind the Scenes</h2>
            <p>
              A look at the development, hardware assembly, and testing process that brought PlantPal to life —
              from early UI prototypes and Firebase configuration to wiring the ESP32-C, calibrating sensors,
              and fitting everything inside the 3D-printed enclosure.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
