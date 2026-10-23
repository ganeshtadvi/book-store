import { Link } from "react-router-dom";
import "./About.css";

const features = [
  {
    icon: "⌕",
    title: "Explore Books",
    description:
      "Discover books across different categories and explore new interests.",
  },
  {
    icon: "♡",
    title: "Find Your Next Read",
    description:
      "Browse book details and find something that matches your interests.",
  },
  {
    icon: "🛒",
    title: "Easy Shopping",
    description: "Add books to your cart and keep your selections organized.",
  },
];

function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">ABOUT OUR BOOKSTORE</span>

          <h1>
            Every book opens
            <span> a new world.</span>
          </h1>

          <p>
            Welcome to BookStore, a place to explore books, discover new ideas,
            and find your next great read. We aim to make browsing books simple
            and enjoyable.
          </p>

          <Link to="/books" className="about-btn">
            Explore Books <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="about-hero-art" aria-hidden="true">
          <div className="about-circle circle-one" />
          <div className="about-circle circle-two" />

          <div className="about-book book-back">
            <span>KNOWLEDGE</span>
          </div>

          <div className="about-book book-front">
            <span className="book-symbol">✦</span>
            <strong>
              YOUR NEXT
              <br />
              CHAPTER
            </strong>
            <small>STARTS HERE</small>
          </div>

          <div className="about-floating-note">
            <span>✦</span> Discover something new
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="about-section-label">
          <span /> OUR STORY
        </div>

        <h2>More than just a place to browse books.</h2>

        <p>
          We believe books can introduce us to new ideas, different
          perspectives, and exciting possibilities. That is why we created
          BookStore: to provide a simple online experience where readers can
          explore books and learn more about the titles that interest them.
        </p>

        <p>
          Whether you enjoy learning something new or simply love exploring
          different stories, BookStore is designed to make your book discovery
          journey easier.
        </p>
      </section>

      {/* Features */}
      <section className="about-features">
        <div className="about-section-label">
          <span /> WHAT YOU CAN DO
        </div>

        <h2>A simple experience for every reader.</h2>

        <p className="about-section-description">
          Explore the features designed to make your book browsing experience
          easier.
        </p>

        <div className="about-feature-grid">
          {features.map((feature) => (
            <article className="about-feature-card" key={feature.title}>
              <div className="about-feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="about-cta">
        <div>
          <span>YOUR NEXT CHAPTER AWAITS</span>
          <h2>Ready to discover your next book?</h2>
          <p>Start exploring and find a book that catches your interest.</p>
        </div>

        <Link to="/books" className="about-btn about-btn-light">
          Browse Books <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}

export default About;
