import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaFlag } from 'react-icons/fa';

const CompaniesInfo = () => {
    const infoData = [
        {
            icon: <FaBullseye className="text-4xl text-indigo-600" />,
            title: 'Our Mission',
            description: 'To provide the best quality shoes that exceed customer expectations. We are dedicated to crafting footwear that combines comfort, style, and durability, ensuring our customers feel confident and satisfied with each step they take.',
        },
        {
            icon: <FaEye className="text-4xl text-purple-600" />,
            title: 'Our Vision',
            description: 'To become a globally recognized brand known for innovative and stylish footwear. We aim to inspire individuals to express their unique personalities through our exceptional designs, setting new trends in the fashion industry.',
        },
        {
            icon: <FaFlag className="text-4xl text-green-600" />,
            title: 'Our Objective',
            description: 'To continuously improve and meet the ever-evolving needs of our customers. We strive to stay ahead of the curve by embracing technological advancements, sustainable practices, and consumer feedback, ensuring our products and services remain unparalleled.',
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
            },
        },
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center pb-36 bg-gray-100 p-8">
            {infoData.map((info, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-4xl mb-4">{info.icon}</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{info.title}</h2>
                    <p className="text-gray-600 text-xl text-center">{info.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default CompaniesInfo;