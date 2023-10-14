import { motion } from 'framer-motion';
import { FaHeart, FaCheckCircle, FaHandshake } from 'react-icons/fa';

const OurValues = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="flex items-center justify-center text-6xl text-indigo-600 mb-8"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <FaHeart />
      </motion.div>
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our Values
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
          <FaCheckCircle className="text-4xl text-green-500 mr-4" />
          <p className="text-lg text-gray-800">Quality</p>
        </div>
        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
          <FaHandshake className="text-4xl text-blue-500 mr-4" />
          <p className="text-lg text-gray-800">Customer Satisfaction</p>
        </div>
        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
          <FaHeart className="text-4xl text-red-500 mr-4" />
          <p className="text-lg text-gray-800">Passion</p>
        </div>
      </motion.div>
    </div>
  );
};

export default OurValues;