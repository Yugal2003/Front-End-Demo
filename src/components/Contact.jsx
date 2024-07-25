// import React, { useState } from "react";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform form submission
//     fetch("https://getform.io/f/aqonewra", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       body: new URLSearchParams(formData).toString()
//     })
//       .then((response) => {
//         if (response.ok) {
//           toast.success("Form Submit Success !!")
//           setFormData({
//             name: "",
//             email: "",
//             message: ""
//           });
//         } else {
//           console.error("Form submission failed");
//           toast.error("Form Submission Failed !!")
//         }
//       })
//       .catch((error) => {
//         console.error("Form submission error:", error);
//         toast.error("Form Submission Error !!")
//       });
//   };

//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-4 text-white"
//     >
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pt-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>

//         <div className="pt-4 flex justify-center items-center">
//           <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Enter your message"
//               rows="10"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             ></textarea>

//             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Let's talk
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



//chatgpt code  for responsive



// import React, { useState } from "react";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform form submission
//     fetch("https://getform.io/f/aqonewra", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       body: new URLSearchParams(formData).toString()
//     })
//       .then((response) => {
//         if (response.ok) {
//           toast.success("Form Submit Success !!")
//           setFormData({
//             name: "",
//             email: "",
//             message: ""
//           });
//         } else {
//           console.error("Form submission failed");
//           toast.error("Form Submission Failed !!")
//         }
//       })
//       .catch((error) => {
//         console.error("Form submission error:", error);
//         toast.error("Form Submission Error !!")
//       });
//   };

//   return (
//     <div
//       name="contact"
//       className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 pt-4 text-white"
//     >
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pt-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>

//         <div className="pt-4 flex justify-center items-center">
//           <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2 space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Enter your message"
//               rows="10"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             ></textarea>

//             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Let's talk
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




//chatgpt code  for responsive 2



import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission
    fetch("https://getform.io/f/aqonewra", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData).toString()
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Form Submit Success !!");
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        } else {
          console.error("Form submission failed");
          toast.error("Form Submission Failed !!");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast.error("Form Submission Error !!");
      });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 pt-20 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit The Form & Connect With Me</p>
        </div>

        <div className="pt-4 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2 space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
