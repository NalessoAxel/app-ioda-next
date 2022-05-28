import { Heading, Flex, Image } from '@chakra-ui/react';
import React from 'react';

import Container from '../Grid/Container';

const Footer = () => {
	return (
		<Container
			minH="calc(100vh - 115px -  62px)"
			w="25vw"
			data-scroll-section
			borderTop="1px solid black"
		>
			<Flex
				minH="calc(100vh - 115px -  62px)"
				justifyContent="center"
				bgColor="white"
				alignItems="center"
				data-scroll
				data-scroll-speed="-5"
				zIndex="-100"
				w="100vw"
				position="absolute"
			>
				<Image src="Logo_eric_footer.svg" />
			</Flex>
		</Container>
	);
};

export default Footer;
