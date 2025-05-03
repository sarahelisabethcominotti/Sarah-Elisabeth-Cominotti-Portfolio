function HeaderSection() {
  return (
    <section>

      <h2 id="about-me" className="neon-title-text">About Me</h2>

      <div className="about-section">
      <div>
        <img src="../src/assets/sarah-elisabeth-cominotti-profile-picture.png" alt="picture of Sarah Elisabeth Cominotti"></img>
     
          <p>
            I&apos;m a <span className="highlight-word">Junior Developer</span>{" "}
            with a passion for creating dynamic and responsive web applications,
            I bring hands-on experience in{" "}
            <span className="highlight-word">React</span>,{" "}
            <span className="highlight-word">JavaScript</span>,{" "}
            <span className="highlight-word">CSS</span>, and{" "}
            <span className="highlight-word">HTML</span>. Before diving into
            coding, I worked as an e-commerce administrator, where I developed
            strong <span className="highlight-word">communication</span>,{" "}
            <span className="highlight-word">teamwork</span>, and{" "}
            <span className="highlight-word">problem-soliving</span> skills.
            This unique blend of technical and soft skills allows me to
            effectively collaborate with cross-functional teams and tackle
            complex challenges with innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
