import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

import Container from '../Grid/Container';

const Footer = () => {
	return (
		<Container
			minH={["auto", "calc(100vh - 124px -  61px)"]}
			w={["100%", "25vw"]}
			data-scroll-section
			borderTop={["none", "1px solid black"]}
			bgColor="body"
			flexDirection={['column', 'row']}
			display={['flex', 'grid']}
		>
			<Flex
				minH={["auto", "calc(100vh - 124px -  61px)"]}
				justifyContent="center"
				flexDirection={['column', 'row']}
				alignItems="center"
				data-scroll
				data-scroll-speed="-5"
				zIndex="-100"
				w={[ "100%", "100vw"]}
				position="absolute"
				bgColor="body"
				pt={["24px", "0px"]}
			>
				<Flex alignItems="center" w="100%" justifyContent="center">
					<Box w='80%' h="1px" bgColor="black" mb="24px" />
				</Flex>

				<Image src="Logo_eric_footer.svg" w="200px" h="200px" />
			</Flex>
		</Container>
	);
};

export default Footer;
