import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const iconVariants = {
        hidden: { rotate: 0 },
        visible: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
            },
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="flex flex-col items-center justify-center py-10 bg-gray-100 p-8">
            <motion.div
                className="text-6xl text-indigo-600 mb-8"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
            >
                <FaEnvelope />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
            <p className="max-w-lg text-gray-600 text-center mb-8">
                We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us using the contact information provided below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
                <div className="text-gray-600">
                    <p>
                        <span className="font-bold">Email:</span> info@shoecompany.com
                    </p>
                    <p>
                        <span className="font-bold">Phone:</span> +1 123-456-7890
                    </p>
                    <p>
                        <span className="font-bold">Address:</span> 123 Shoe Street, City, Country
                    </p>
                    <p>
                        <span className="font-bold">Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM
                    </p>
                </div>
                <form className="w-full md:col-span-2" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-800 text-lg font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-800 text-lg font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-800 text-lg font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;








// import { motion } from 'framer-motion';
// import { FaEnvelope } from 'react-icons/fa';

// const Contact = () => {
//   const iconVariants = {
//     hidden: { rotate: 0 },
//     visible: {
//       rotate: 360,
//       transition: {
//         duration: 1,
//         repeat: Infinity,
//       },
//     },
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-36 bg-gray-100 p-8">
//       <motion.div
//         className="text-6xl text-indigo-600 mb-8"
//         variants={iconVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <FaEnvelope />
//       </motion.div>
//       <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
//       <p className="max-w-lg text-gray-600 text-center mb-8">
//         Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
//       </p>
//       <form className="max-w-lg w-full" onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <label htmlFor="name" className="block text-gray-800 text-lg font-bold mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block text-gray-800 text-lg font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="message" className="block text-gray-800 text-lg font-bold mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="6"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
//             required
//           ></textarea>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;