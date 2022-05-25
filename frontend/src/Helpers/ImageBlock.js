import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ImageBlock = ({ src, variants }) => {
	return (
		<motion.div variants={variants}>
			<Image
				src={src}
				width="100%"
				objectFit="cover"
				minH="100%"
				objectPosition="center"
			/>
		</motion.div>
	);
};

export default ImageBlock;
