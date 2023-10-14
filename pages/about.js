import { motion } from 'framer-motion';
import { FaShoePrints } from 'react-icons/fa';

const About = () => {
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

  return (
    <div className="flex flex-col items-center justify-center py-36 bg-gray-100 p-8">
      <motion.div
        className="text-6xl text-indigo-600 mb-8"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <FaShoePrints />
      </motion.div>
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">About Us</h1>
      <p className="max-w-lg text-gray-600 text-center mb-8">
        We are a leading shoe company dedicated to providing high-quality footwear for all occasions. With a passion for design, comfort, and performance, we strive to offer a diverse range of shoes that cater to the unique needs and styles of our customers.
      </p>
      <p className="max-w-lg text-gray-600 text-center mb-8">
        Our team of experienced designers and craftsmen work diligently to create shoes that combine the latest trends with exceptional functionality. From running shoes to dress shoes, our collection is crafted with attention to detail and the finest materials to ensure durability and comfort.
      </p>
      <p className="max-w-lg text-gray-600 text-center mb-8">
        We believe that everyone deserves to wear shoes that make them feel confident and comfortable. That's why we offer a wide range of sizes, styles, and colors to suit various preferences and needs. Whether you're an athlete, a fashion enthusiast, or simply looking for everyday footwear, we have something for you.
      </p>
      <p className="max-w-lg text-gray-600 text-center">
        Thank you for choosing our shoe company. We are committed to providing exceptional products and excellent customer service. Get ready to step into style, comfort, and performance with our footwear collection.
      </p>
    </div>
  );
};

export default About;