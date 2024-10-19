// TypeScript code to update skills dynamically
const skillsList = document.getElementById("skills-list") as HTMLUListElement;

const newSkill = (skill: string): HTMLLIElement => {
  const li = document.createElement("li");
  li.textContent = skill;
  return li;
};

// Example: Adding a new skill
skillsList.appendChild(newSkill("JavaScript"));
