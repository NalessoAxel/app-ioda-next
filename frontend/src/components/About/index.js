import { Text, Flex, Image, Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Container from '../Grid/Container';

const About = ({ aboutText }) => {

	return (
		<Container
			display={["flex", "grid"]}
			id="about"
			data-scroll-section
			minH="calc(100vh - 124px -  61px)"
			w={["100%", "75vw"]}
			zIndex="100"
			position="relative"
			borderTop={["none", "1px solid black"]}
			bgColor="body"
		>
			<Flex minH="calc(100vh - 124px -  61px)" width={["100%", "auto"]} justifyContent={["center", "space-between"]} flexDirection={['column', 'row']}>
				<Flex w={["100%", "50%"]} h="auto">
					<Image
						src="cesar.png"
						maxW="100%"
						h={["100%", "calc(100vh - 124px -  54px)"]}
						objectFit="contain"
						objectPosition="center"
					/>
				</Flex>

				<Flex
					w={["100%", "518px"]}
					flexDir="column"
					alignItems="center"
					justifyContent="center"
					py={["36px", "98px"]}
					pl={[ "56px", "0px"]}
					pr="52px"
					width={["100%", "50%"]}>
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

					<Flex alignItems="center" w={["100%", "1px"]} h={["auto"]} justifyContent="center">
						<Box w={['80%', '1px']} h={["1px", "531px"]} bgColor="black" mb={["24px", "0"]} />
					</Flex>				
			</Flex>
		</Container>
	);
};

export default About;
