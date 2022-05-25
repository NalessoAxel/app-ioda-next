import { Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Container from '../Grid/Container';

const Contact = () => {
	return (
		<Container
			id="contact"
			data-scroll-section
			minH="calc(100vh - 115px -  62px)"
			minW="470px"
			zIndex="10"
			position="relative"
			bgColor="white"
		>
			<Flex w="100%" minH="calc(100vh - 115px - 62px)" pt="121px">
				<Image src="map_ioda.png" h="281px" w="334px" />
			</Flex>
		</Container>
	);
};

export default Contact;
