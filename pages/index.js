import { motion } from 'framer-motion';
import { FaShoePrints } from 'react-icons/fa';
import OurValues from '@/components/OtherPages/Ourvalues';

const Home = () => {
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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-36 bg-gray-100 px-2 md:px-24">
        <div className="flex flex-col items-center justify-center mb-32">
          <motion.h1
            className="text-indigo-600 text-3xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Welcome to Shoe Company
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-600 text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We offer a wide range of stylish and comfortable shoes for every occasion. Discover your perfect pair today!
          </motion.p>
          <motion.button
            className="bg-indigo-600 hover:bg-indigo-700 text-white md:text-3xl text-xl font-bold py-2 px-4 rounded mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Shop Now
          </motion.button>
        </div>

        <motion.div
          className="flex items-center justify-center text-9xl text-indigo-600 md:mb-8"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        >
          <FaShoePrints />
        </motion.div>
      </div>
      <OurValues />
    </>
  );
};

export default Home;