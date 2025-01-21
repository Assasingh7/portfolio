
import '../App.css'; // Ensure this is linked correctly

const SkillSection = () => {
  const skills = ["React", "Node.js", "JavaScript", "TypeScript", "MongoDB", "Monorepo", "Prisma", "Express.js", "Tailwind", "Next.js"];

  return (
    <div className="skills-container">
      <div className="section-title">My Skills</div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
