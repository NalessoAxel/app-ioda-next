import { Text, Flex, Image, Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Container from '../Grid/Container';

const Contact = ({ contact }) => {
	

	
	return (

		<Container
			display={['flex', 'grid']}
			id="contact"
			data-scroll-section
			minH={["auto", "calc(100vh - 124px -  61px)"]}
			w={["100%", "470px"]}
			zIndex="10"
			position="relative"
			bgColor="body"
			borderTop={["none", "1px solid black"]}
			justifyContent={["center"]}
		>
			<Flex flexDirection={["column", "row"]}> 
			<Flex
				w="100%"
				h={["100%", "611px"]}
				pt={["0px", "121px"]}
				alignItems="center"
				flexDirection={['column']}>

				<Image src="map_ioda.png" h="281px" w="334px" />

				<Flex flexDirection="column" alignItems="center" pt="36px">
					<Text>{contact.data.attributes.adress}</Text>

					<Text>{contact.data.attributes.email}</Text>

					<Text>{contact.data.attributes.tel}</Text>
				</Flex>
			</Flex>

					<Flex display={["none", "flex"]} alignItems="center" w={["100%", "1px"]} h={["auto"]} justifyContent="center">
						<Box w={['80%', '1px']} h={["1px", "531px"]} bgColor="black" mb={["24px", "0"]} />
					</Flex>	
			</Flex>
		</Container>
		
	// 	<Container
	// 	display={['flex', 'grid']}
	// 	id="contact"
	// 	data-scroll-section
	// 	zIndex="10"
	// 	position="relative"
	// 	bgColor="body"	
	// 	flexDirection="column"	
	// 	>
	// 		<Flex  alignItems="center" justifyContent="center" w="100%">
	// 				<Box w='80%' h="1px" bgColor="black" mb="24px" />
	// 		</Flex>

	// 	<Flex
	// 		w="100%"
	// 		h="100%"
	// 		justifyContent="flex-start"
	// 		alignItems="center"
	// 		flexDirection={['column', 'row']}
	// 	>
				

	// 		<Image src="map_ioda.png" />

	// 		<Flex flexDirection="column" alignItems="center" pt="24px">
	// 			<Text>{contact.data.attributes.adress}</Text>

	// 			<Text>{contact.data.attributes.email}</Text>

	// 			<Text>{contact.data.attributes.tel}</Text>
	// 		</Flex>
	// 	</Flex>
	// </Container>
	);
};

export default Contact;
