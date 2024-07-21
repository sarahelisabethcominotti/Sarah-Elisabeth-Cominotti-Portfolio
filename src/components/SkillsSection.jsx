import { useContext } from "react";
import { SkillsContext } from "../App";

function SkillsContent() {
  const skills = useContext(SkillsContext);

  return (
    <section>
      <h2 id="skills">Skills</h2>

      <div className="skills-section">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-logo">
            {skill.logo && (
              <img
                src={skill.logo.url}
                alt={skill.altTag}
                title={skill.altTag}
                height="50px"
                width="50px"
              />
            )}
            <p>{skill.altTag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsContent;
