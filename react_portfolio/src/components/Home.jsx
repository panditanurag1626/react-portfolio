export default function Home() {
  return (
    <section id="home" className="home">
      <h1>Hi, I’m Anurag Mishra 👋</h1>
      <h2>Frontend Developer</h2>``

      <p>
        I build responsive and user-friendly web applications using
        HTML, CSS, JavaScript, and React.
      </p>

      <div className="home-buttons">
        <a
          href="/Anurag_Mishra3 Resume.pdf"
          download
          className="btn"
        >
          Download Resume
        </a>


        <a
          href="/Anurag_Mishra3 Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
