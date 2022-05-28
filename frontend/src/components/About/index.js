import { Text, Flex, Image, Box } from '@chakra-ui/react';
import React from 'react';
import Container from '../Grid/Container';

const About = ({ aboutText }) => {
	console.log(aboutText);
	return (
		<Container
			id="about"
			data-scroll-section
			minH="calc(100vh - 115px -  62px)"
			w="75vw"
			bgColor="white"
			zIndex="100"
			position="relative"
			borderTop="1px solid black"
		>
			<Flex
				minH="calc(100vh - 115px - 62px)"
				bgColor="white"
				justifyContent="center"
			>
				<Flex minW="50%" h="auto">
					<Image
						src="cesar.png"
						maxW="100%"
						h="calc(100vh - 115px - 62px)"
						objectFit="contain"
						objectPosition="center"
						flexGrow="2"
					/>
				</Flex>

				<Flex
					w="518px"
					flexDir="column"
					alignItems="center"
					justifyContent="center"
					bgColor="white"
					py="98px"
					pl="56px"
					pr="52px"
					h="100%"
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
					<Box>
						<Text
							textAlign="center"
							color="black"
							letterSpacing="0.15px"
							fontSize="14.5px"
							lineHeight="22.5px"
							w="100%"
							whiteSpace="normal"
						>
							{aboutText.data[0].attributes.about_text_top}
						</Text>
					</Box>
					<Box pt="24px">
						<Text
							textAlign="center"
							color="black"
							letterSpacing="0.15px"
							fontSize="14.5px"
							lineHeight="22.5px"
							w="100%"
							whiteSpace="normal"
						>
							{aboutText.data[0].attributes.about_text_bottom}
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Container>
	);
};

export default About;
