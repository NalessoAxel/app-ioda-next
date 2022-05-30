import { Text, Flex, Image, Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Container from '../Grid/Container';

const About = ({ aboutText }) => {
	const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

	return (
		<>
			{isLargerThanTablet ? 
		<Container
			display={["flex", "grid"]}
			id="about"
			data-scroll-section
			minH="calc(100vh - 124px -  61px)"
			w="75vw"
			zIndex="100"
			position="relative"
			borderTop="1px solid black"
			bgColor="body"
		>
			<Flex minH="calc(100vh - 124px -  61px)" justifyContent="center" flexDirection={['column', 'row']}>
				<Flex minW="50%" h="auto">
					<Image
						src="cesar.png"
						maxW="100%"
						h="calc(100vh - 124px -  61px)"
						objectFit="contain"
						objectPosition="center"
					/>
				</Flex>

				<Flex
					w="518px"
					flexDir="column"
					alignItems="center"
					justifyContent="center"
					py="98px"
					pl="56px"
					pr="52px"
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
			:
			<Container
			display="flex"
			id="about"
			data-scroll-section
			h="100%"
			zIndex="100"
			position="relative"
			bgColor="body"
		>


			<Flex  justifyContent="center" flexDirection={['column', 'row']}>
				<Flex minW="50%" h="auto">
					<Image
						src="cesar.png"
						maxW="100%"
						objectFit="contain"
						objectPosition="center"
					/>
				</Flex>

				<Flex
					w="100%"
					flexDir="column"
					alignItems="center"
					justifyContent="center"
					pb="36px"
					px="24px"
				>
				<Flex  alignItems="center" justifyContent="center">
					<Box w='80%' h="1px" bgColor="black" mb="24px" />
				</Flex>

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
			}
			</>
	);
};

export default About;
