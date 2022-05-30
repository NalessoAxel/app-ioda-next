import React from 'react';
import { Flex, Text, Box, Image, useMediaQuery } from '@chakra-ui/react';

import Container from '../Grid/Container';

const Reservations = () => {
	const [isLargerThanTablet] = useMediaQuery('(min-width: 768px )');
	return (
		<>
			{isLargerThanTablet ? 
		<Container
			display={["flex", "grid"]}
			id="reservations"
			data-scroll-section
			minH="calc(100vh - 124px -  61px)"
			minW='482px'
			borderTop="1px solid black"
			bgColor="body"
		>
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection={['column', 'row']}
				height="calc(100vh - 124px -  61px)"
				_before={{
					content: '" "',
					display: 'block',
					width: '2px',
					height: [' 273%', '531px'],
					position: 'absolute',
					transform: ['rotate(90deg)', 'rotate(0deg)'],
					left: '0px',
					background: 'black',
				}}
			>
				<Flex
					flexDirection="column"
					position="relative"
					h="100%"
					alignItems="center"
					justifyContent="center"
					pb="80px"
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
							top={['420px']}
							left="5"
							zIndex="10"
						/>
					</Box>
				</Flex>
			</Flex>
		</Container>
		:
		
		<Container
			display={["flex", "grid"]}
			id="reservations"
			data-scroll-section
			h="100%"
			alignItems="center"
			justifyContent="center"
			bgColor="body"
		>
			

			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection={['column', 'row']}
				
			>
				<Flex  alignItems="center" justifyContent="center" w="100%">
					<Box w='100%' h="1px" bgColor="black" mb="24px" />
				</Flex>

				<Flex
					flexDirection="column"
					position="relative"
					h="100%"
					alignItems="center"
					justifyContent="center"
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
					<Box pb="260px">
						<Image
							src="Eric_pancarte.svg"
							position="absolute"
							bgColor="body"
							top="257px"
							left="5"
							zIndex="10"
						/>
					</Box>
				</Flex>
			</Flex>
		</Container>
			}
		</>
	);
};

export default Reservations;
