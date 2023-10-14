import { motion } from 'framer-motion';
import { FaShoePrints } from 'react-icons/fa';

const Products = () => {
    const productData = [
        {
            icon: <FaShoePrints className="text-4xl text-indigo-600" />,
            title: 'Running Shoes',
            description: 'Experience the perfect blend of cushioning and responsiveness with our premium running shoes. Designed to enhance your performance and provide maximum comfort, our running shoes will help you achieve your fitness goals. Available in a variety of colors and sizes to suit your style and needs.',
        },
        {
            icon: <FaShoePrints className="text-4xl text-purple-600" />,
            title: 'Casual Shoes',
            description: 'Step out in style and comfort with our collection of casual shoes. From sleek and minimalist designs to trendy and fashion-forward styles, our casual shoes are perfect for everyday wear and will elevate your outfit. Choose from a wide range of materials and colors to suit your personal preference.',
        },
        {
            icon: <FaShoePrints className="text-4xl text-green-600" />,
            title: 'Sports Shoes',
            description: 'Get ready to dominate the field with our high-performance sports shoes. Engineered with advanced technologies and durable materials, our sports shoes provide exceptional support and traction for various sports activities. Whether you\'re into running, basketball, or soccer, we have the perfect pair for you.',
        },
        {
            icon: <FaShoePrints className="text-4xl text-red-600" />,
            title: 'Hiking Boots',
            description: 'Conquer the great outdoors with our rugged and durable hiking boots. Designed to withstand tough terrains and provide excellent ankle support, our hiking boots are perfect for exploring trails and mountains. Stay comfortable and protected on your next adventure.',
        },
        {
            icon: <FaShoePrints className="text-4xl text-yellow-600" />,
            title: 'Sandals',
            description: 'Enjoy the warm weather with our stylish and comfortable sandals. Whether you\'re strolling on the beach or running errands in the city, our sandals offer a perfect blend of fashion and functionality. Experience all-day comfort and keep your feet cool.',
        },
        {
            icon: <FaShoePrints className="text-4xl text-blue-600" />,
            title: 'Dress Shoes',
            description: 'Elevate your formal attire with our sophisticated dress shoes. From classic oxfords to stylish loafers, our dress shoes are crafted with attention to detail and finest materials. Make a lasting impression at any formal event or business meeting.',
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
        <div className="flex flex-col items-center justify-center py-36 bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-gray-800 ">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center bg-gray-100 p-8">
                {productData.map((product, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="text-4xl mb-4">{product.icon}</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
                        <p className="text-gray-600 text-center">{product.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Products;