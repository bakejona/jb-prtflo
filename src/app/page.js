import NavBar from './Navigation';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      
      <section id="home" style={{ height: '100vh', padding: '50px' }}>
        <h1>Home Section</h1>
      </section>

      <section id="about" style={{ height: '100vh', padding: '50px', background: '#f4f4f4' }}>
        <h1>About Section</h1>
      </section>

      <section id="projects" style={{ height: '100vh', padding: '50px' }}>
        <h1>Projects Section</h1>
      </section>

      <section id="contact" style={{ height: '100vh', padding: '50px', background: '#f4f4f4' }}>
        <h1>Contact Section</h1>
      </section>
    </div>
  );
}


