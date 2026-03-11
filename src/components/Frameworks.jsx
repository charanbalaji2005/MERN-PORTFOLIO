import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0.svg",
    "blazor.svg",
    "cplusplus.svg",
    "css3.svg",
    "git.svg",
    "github.png",
    "html5.svg",
    "javascript.svg",
    "microsoft.svg",
    "python.png",
    "react.svg",
    "tailwindcss.svg",
    "vitejs.svg",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
