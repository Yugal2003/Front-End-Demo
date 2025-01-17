// import React from "react";

// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// import figma from "../assets/figma.png";
// import git from "../assets/git.png";
// import java from "../assets/java.png";
// import tailwind from "../assets/tailwind.png";
// import DSA from '../assets/dsa.png'

// const Experience = () => {
//   const techs = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: reactImage,
//       title: "React",
//       style: "shadow-sky-500",
//     },
//     {
//       id: 5,
//       src: java,
//       title: "Java",
//       style: "shadow-gray-400",
//     },
//     {
//       id: 6,
//       src: DSA,
//       title: "DSA",
//       style: "shadow-green-400",
//     },
//     {
//       id: 7,
//       src: tailwind,
//       title: "Tailwind",
//       style: "shadow-sky-300",
//     },
//     {
//       id: 8,
//       src: git,
//       title: "Git",
//       style: "shadow-orange-700",
//     },
//     {
//       id: 9,
//       src: figma,
//       title: "Figma",
//       style: "shadow-pink-500",
//     }
//   ];

//   return (
//     <div
//       name="experience"
//       className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
//     >
//       <div className="max-w-screen-lg mx-auto pt-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Experience
//           </p>
//           <p className="pt-4">These are the technologies I've worked with</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center pt-8 px-12 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
//             >
//               <img src={src} alt="" className="w-20 mx-auto" />
//               <p className="mt-3">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;




//chatgpt code  for responsive




// import React from "react";

// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// import figma from "../assets/figma.png";
// import git from "../assets/git.png";
// import java from "../assets/java.png";
// import tailwind from "../assets/tailwind.png";
// import DSA from '../assets/dsa.png';

// const Experience = () => {
//   const techs = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: reactImage,
//       title: "React",
//       style: "shadow-sky-500",
//     },
//     {
//       id: 5,
//       src: java,
//       title: "Java",
//       style: "shadow-gray-400",
//     },
//     {
//       id: 6,
//       src: DSA,
//       title: "DSA",
//       style: "shadow-green-400",
//     },
//     {
//       id: 7,
//       src: tailwind,
//       title: "Tailwind",
//       style: "shadow-sky-300",
//     },
//     {
//       id: 8,
//       src: git,
//       title: "Git",
//       style: "shadow-orange-700",
//     },
//     {
//       id: 9,
//       src: figma,
//       title: "Figma",
//       style: "shadow-pink-500",
//     }
//   ];

//   return (
//     <div
//       name="experience"
//       className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
//     >
//       <div className="max-w-screen-lg mx-auto pt-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Experience
//           </p>
//           <p className="pt-4">These are the technologies I've worked with</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
//             >
//               <img src={src} alt={title} className="w-20 mx-auto" />
//               <p className="mt-3">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;



//chatgpt code  for responsive 2




import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import java from "../assets/java.png";
import tailwind from "../assets/tailwind.png";
import DSA from '../assets/dsa.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: java,
      title: "Java",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: DSA,
      title: "DSA",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-orange-700",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "shadow-pink-500",
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="pt-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
