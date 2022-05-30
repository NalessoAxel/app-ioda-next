import { Text, Flex, Image, Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Container from '../Grid/Container';

const Contact = ({ contact }) => {
	const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
	return (
		<>
			{isLargerThanTablet ? 
		<Container
			display={['flex', 'grid']}
			id="contact"
			data-scroll-section
			minH="calc(100vh - 124px -  61px)"
			minW="470px"
			zIndex="10"
			position="relative"
			bgColor="body"
			borderTop="1px solid black"
		>
			<Flex
				w="100%"
				h="611px"
				pt="121px"
				
				alignItems="center"
				flexDirection={['column']}
				_after={{
					content: '" "',
					display: 'block',
					width: '2px',
					height: [' 273%', '531px'],
					top: 'calc(40% - 531px / 2)',
					position: 'absolute',
					transform: ['rotate(90deg)', 'rotate(0deg)'],
					right: '0',
					background: 'black',
				}}
			>
				<Image src="map_ioda.png" h="281px" w="334px" />

				<Flex flexDirection="column" alignItems="center" pt="36px">
					<Text>{contact.data.attributes.adress}</Text>

					<Text>{contact.data.attributes.email}</Text>

					<Text>{contact.data.attributes.tel}</Text>
				</Flex>
			</Flex>
		</Container>
		:
		<Container
		display={['flex', 'grid']}
		id="contact"
		data-scroll-section
		zIndex="10"
		position="relative"
		bgColor="body"	
		flexDirection="column"	
		>
			<Flex  alignItems="center" justifyContent="center" w="100%">
					<Box w='80%' h="1px" bgColor="black" mb="24px" />
			</Flex>

		<Flex
			w="100%"
			h="100%"
			justifyContent="flex-start"
			alignItems="center"
			flexDirection={['column', 'row']}
		>
				

			<Image src="map_ioda.png" />

			<Flex flexDirection="column" alignItems="center" pt="24px">
				<Text>{contact.data.attributes.adress}</Text>

				<Text>{contact.data.attributes.email}</Text>

				<Text>{contact.data.attributes.tel}</Text>
			</Flex>
		</Flex>
	</Container>
}
		</>
	);
};

export default Contact;
