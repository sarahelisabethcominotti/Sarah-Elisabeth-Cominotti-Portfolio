import { useContext } from "react";
import { SkillsContext } from "../App";

function SkillsContent() {
  const skills = useContext(SkillsContext);

  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.id} className="skill-logo">
          <img src={skill.logo} alt={skill.altTag} />
        </div>
      ))}
    </div>
  );
}

export default SkillsContent;
