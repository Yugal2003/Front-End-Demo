// import React from "react";

// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white border-2 border-white"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-8 md:mt-0">
//             About
//           </p>
//         </div>

//         <p className="text-2xl mt-20 font-fam">
//         Hi, I’m Yugal, a passionate Frontend Developer with a knack for creating Dynamic and User-friendly web Applications. With a strong foundation in HTML, CSS, and JavaScript & React, I specialize in building Responsive and Interactive web interfaces using React and Redux. I have experience working on various projects, including a FastEat Project, Crypto Currency App and a Restaurants Clone, where I utilized Firebase authentication and integrated APIs.
//         </p>

//         <br />

//         <p className="text-2xl font-fam">
//         I believe in writing clean, maintainable code and focusing on creating user-centric designs. My approach to frontend development is grounded in continuous learning, attention to detail, and a commitment to delivering high-quality digital experiences.My goal is to create intuitive and visually appealing websites that provide a seamless experience across devices. 
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;



//chatgpt code  for responsive


// import React from "react";

// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-8 md:mt-0">
//             About
//           </p>
//         </div>

//         <p className="text-xl sm:text-2xl mt-10 sm:mt-20 font-fam">
//           Hi, I’m Yugal, a passionate Frontend Developer with a knack for creating Dynamic and User-friendly web Applications. With a strong foundation in HTML, CSS, and JavaScript & React, I specialize in building Responsive and Interactive web interfaces using React and Redux. I have experience working on various projects, including a FastEat Project, Crypto Currency App and a Restaurants Clone, where I utilized Firebase authentication and integrated APIs.
//         </p>

//         <br />

//         <p className="text-xl sm:text-2xl font-fam">
//           I believe in writing clean, maintainable code and focusing on creating user-centric designs. My approach to frontend development is grounded in continuous learning, attention to detail, and a commitment to delivering high-quality digital experiences. My goal is to create intuitive and visually appealing websites that provide a seamless experience across devices.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;



//chatgpt code  for responsive 2



import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      style={{ paddingTop: '4rem' }} // Adjust this value based on the height of your fixed navbar
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-2xl sm:text-2xl mt-10 sm:mt-20 font-fam">
          Hi, I’m Yugal, a passionate Frontend Developer with a knack for creating Dynamic and User-friendly web Applications. With a strong foundation in HTML, CSS, and JavaScript & React, I specialize in building Responsive and Interactive web interfaces using React and Redux. I have experience working on various projects, including a FastEat Project, Crypto Currency App and a Restaurants Clone, where I utilized & develop my skills.
        </p>

        <br />

        <p className="text-2xl sm:text-2xl font-fam">
          I believe in writing clean, maintainable code and focusing on creating user-centric designs. My approach to frontend development is grounded in continuous learning, attention to detail, and a commitment to delivering high-quality digital experiences. My goal is to create intuitive and visually appealing websites that provide a seamless experience across devices.
        </p>
      </div>
    </div>
  );
};

export default About;
