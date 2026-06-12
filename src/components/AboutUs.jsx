import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Paradise Nursery</h1>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Paradise Nursery was founded in 2010 by a group of passionate plant lovers who believed
          that every home deserves a touch of nature. What started as a small local greenhouse has
          grown into a beloved online destination for plant enthusiasts across the country.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to bring the beauty and calm of nature into every living space.
          We carefully curate our collection to include only the healthiest, most vibrant houseplants,
          each chosen for its ability to thrive indoors and bring joy to its caretaker.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🌿 Hand-picked selection of premium houseplants</li>
          <li>📦 Careful packaging to ensure safe delivery</li>
          <li>💚 Expert care guides with every purchase</li>
          <li>🌍 Sustainably sourced from eco-friendly growers</li>
          <li>🤝 Dedicated customer support team</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>Email: hello@paradisenursery.com</p>
        <p>Phone: (800) 555-PLANTS</p>
        <p>Hours: Monday–Saturday, 9am–6pm EST</p>
      </section>
    </div>
  );
}

export default AboutUs;
