import { useContext } from "react";
import { SkillsContext } from "../App";

function SkillsContent() {
  const skills = useContext(SkillsContext);

  return (
    <div className="skills-section">
      {skills.map((skill) => (
        <div key={skill.id} className="skill-logo">
          {skill.logo && (
          <img src={skill.logo.url} alt={skill.altTag} title={skill.altTag} height="50px" width="50px"/>
          )}
        </div>
      ))}
    </div>
  );
}

export default SkillsContent;
