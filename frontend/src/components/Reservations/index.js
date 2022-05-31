import React from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';

import Container from '../Grid/Container';

const Reservations = () => {
	
	return (
		<Container
			display={["flex", "grid"]}
			alignItems={["center"]}
			justifyContent={["center"]}
			id="reservations"
			data-scroll-section
			h={["100%", "calc(100vh - 124px -  61px)"]}
			w={['100%', '482px']}
			borderTop={["none", "1px solid black"]}
			bgColor="body"
		>
			<Flex flexDirection={["column", "row"]} w="100%">

				<Flex alignItems="center" w={["100%", "1px"]} h={["auto"]} justifyContent="center">
					<Box w={['80%', '1px']} h={["1px", "531px"]} bgColor="black" mb={["24px", "0"]} />
				</Flex>
			
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection={['column', 'row']}
				height={["100%", "calc(100vh - 124px -  61px)"]}
				w="100%">
				<Flex
					flexDirection="column"
					position="relative"
					h="100%"
					alignItems="center"
					pt={["0px", "72px"]}
					pb={["200px", "0px"]}
					// w={["auto", "100%"]}
				>
					<Box zIndex="100">
						<tbkr-bm-widget
							restaurant-id="53608480"
							source="website"
							use-modal="0"
							lang="fr"
							theme="light"
						></tbkr-bm-widget>
					</Box>
					
					<Box>
						<Image
							src="Eric_pancarte.svg"
							position="absolute"
							bgColor="body"
							top={['270px', '345px']}
							width="340px"
							height="340px"
							left="5"
							zIndex="10"
						/>
					</Box>
				</Flex>
			</Flex>
			</Flex>
		</Container>
	);
};

export default Reservations;
