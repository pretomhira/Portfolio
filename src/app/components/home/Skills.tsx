import { getSkillsInfoData } from "@/app/api/data";

type Value = {
  id: string;
  key: string;
};

type Skill = {
  id: string;
  key: string;
  value: Array<Value>;
};

type Skills = [Skill];

export default async function Skills() {
  const skills: Skills = await getSkillsInfoData();
  console.log(skills);
  return (
    <div className="card-1 group">
      <div className="flex flex-col gap-5">
        <div className="title-2">Skills</div>
        <div className="flex flex-col gap-2">
          {skills.map((skill: Skill) => (
            <div key={skill.id} className="flex flex-col sm:flex-row gap-3">
              <div className="title-4 !w-72">{skill.key}</div>
              <div className="hidden sm:block secondary-color">-</div>
              <div className="title-5 cursor-copy flex flex-row">
                {skill.value.map((value) => (
                  <div key={value.id}>{value.key}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
