// import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//       Code : "https://github.com/Yugal2003/Crypto-App-React",
//       Demo : "https://crypto-app-react-lovat.vercel.app/"
//     },
//     {
//       id: 2,
//       src: installNode,
//       Code : "https://github.com/Yugal2003/FastEat-Food",
//       Demo : "https://fast-eat-food.vercel.app/"
//     },
//     {
//       id: 3,
//       src: reactParallax,
//       Code : "https://github.com/Yugal2003/Resume-Builder-App---Vanilla-Javascript",
//       Demo : "https://resume-builder-app-vanilla-javascript.vercel.app/"
//     },
//     {
//       id: 4,
//       src: reactWeather,
//       Code : "https://github.com/Yugal2003/DICE_APP_REACT",
//       Demo : "https://dice-app-react.vercel.app/"
//     },
//     {
//       id: 5,
//       src: navbar,
//       Code : "https://github.com/Yugal2003/Emoji-Project",
//       Demo : "https://yugal2003.github.io/Emoji-Project/"
//     },
//     {
//       id: 6,
//       src: reactSmooth,
//       Code : "https://github.com/Yugal2003/Quiz-App-React",
//       Demo : "https://quiz-app-react-pearl-mu.vercel.app/"
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-0">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-3">Check out My Projects :</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src,Code,Demo }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 <a target="_blank" rel="noreferrer" href={Code} className="w-1/2 px-6 pt-3 m-2 duration-200 hover:scale-105 text-center font-bold hover:text-black hover:bg-yellow-500 hover:rounded-lg">
//                   Code
//                 </a>
//                 <a target="_blank" rel="noreferrer" href={Demo} className="w-1/2 px-6 pt-3 m-2 duration-200 hover:scale-105 text-center font-bold hover:text-black hover:bg-red-600 hover:rounded-lg">
//                   Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



//chatgpt code  for responsive




// import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//       Code : "https://github.com/Yugal2003/Crypto-App-React",
//       Demo : "https://crypto-app-react-lovat.vercel.app/"
//     },
//     {
//       id: 2,
//       src: installNode,
//       Code : "https://github.com/Yugal2003/FastEat-Food",
//       Demo : "https://fast-eat-food.vercel.app/"
//     },
//     {
//       id: 3,
//       src: reactParallax,
//       Code : "https://github.com/Yugal2003/Resume-Builder-App---Vanilla-Javascript",
//       Demo : "https://resume-builder-app-vanilla-javascript.vercel.app/"
//     },
//     {
//       id: 4,
//       src: reactWeather,
//       Code : "https://github.com/Yugal2003/DICE_APP_REACT",
//       Demo : "https://dice-app-react.vercel.app/"
//     },
//     {
//       id: 5,
//       src: navbar,
//       Code : "https://github.com/Yugal2003/Emoji-Project",
//       Demo : "https://yugal2003.github.io/Emoji-Project/"
//     },
//     {
//       id: 6,
//       src: reactSmooth,
//       Code : "https://github.com/Yugal2003/Quiz-App-React",
//       Demo : "https://quiz-app-react-pearl-mu.vercel.app/"
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out My Projects :</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
//           {portfolios.map(({ id, src, Code, Demo }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 <a 
//                   target="_blank" 
//                   rel="noreferrer" 
//                   href={Code} 
//                   className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center font-bold hover:text-black hover:bg-yellow-500 hover:rounded-lg"
//                 >
//                   Code
//                 </a>
//                 <a 
//                   target="_blank" 
//                   rel="noreferrer" 
//                   href={Demo} 
//                   className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center font-bold hover:text-black hover:bg-red-600 hover:rounded-lg"
//                 >
//                   Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;





//chatgpt code  for responsive 2




import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      Code: "https://github.com/Yugal2003/Crypto-App-React",
      Demo: "https://crypto-app-react-lovat.vercel.app/"
    },
    {
      id: 2,
      src: installNode,
      Code: "https://github.com/Yugal2003/FastEat-Food",
      Demo: "https://fast-eat-food.vercel.app/"
    },
    {
      id: 3,
      src: reactParallax,
      Code: "https://github.com/Yugal2003/Resume-Builder-App---Vanilla-Javascript",
      Demo: "https://resume-builder-app-vanilla-javascript.vercel.app/"
    },
    {
      id: 4,
      src: reactWeather,
      Code: "https://github.com/Yugal2003/DICE_APP_REACT",
      Demo: "https://dice-app-react.vercel.app/"
    },
    {
      id: 5,
      src: navbar,
      Code: "https://github.com/Yugal2003/Emoji-Project",
      Demo: "https://yugal2003.github.io/Emoji-Project/"
    },
    {
      id: 6,
      src: reactSmooth,
      Code: "https://github.com/Yugal2003/Quiz-App-React",
      Demo: "https://quiz-app-react-pearl-mu.vercel.app/"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20" // Added padding-top
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out My Projects :</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, Code, Demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href={Code} 
                  className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center font-bold hover:text-black hover:bg-yellow-500 hover:rounded-lg"
                >
                  Code
                </a>
                <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href={Demo} 
                  className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center font-bold hover:text-black hover:bg-red-600 hover:rounded-lg"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
