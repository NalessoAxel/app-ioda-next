import React from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';

import Container from '../Grid/Container';

const Reservations = () => {
	return (
		<Container
			id="reservations"
			data-scroll-section
			minH="calc(100vh - 115px -  62px)"
			minWidth="33vw"
			borderTop="1px solid black"
		>
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection={['column', 'row']}
				height="calc(100vh - 115px -  62px)"
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
							src="eric_menu.svg"
							position="absolute"
							top="505"
							left="5"
							zIndex="10"
						/>
					</Box>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Reservations;
