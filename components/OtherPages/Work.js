import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Work = () => {
    const workData = [
        {
            icon: <FaBriefcase className="text-4xl text-indigo-600" />,
            title: 'Join Our Team',
            description: 'We are always looking for passionate individuals to join our team. If you are enthusiastic about footwear, have a keen eye for design, and enjoy working in a dynamic environment, check out our current job openings and apply today!',
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
        <div className="flex flex-col items-center justify-center pb-36 bg-gray-100 p-8">
            {workData.map((work, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-6  text-center"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-4xl mb-4">{work.icon}</div>
                    <h2 className="text-5xl font-bold text-indigo-600 mb-10">{work.title}</h2>
                    <p className="text-gray-600 max-w-2xl text-2xl">{work.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default Work;