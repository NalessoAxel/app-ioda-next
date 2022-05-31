import React, { useEffect, useState } from 'react';
import { Grid, Flex, Text } from '@chakra-ui/react';

import { motion, AnimatePresence } from 'framer-motion';

import Container from '../Grid/Container';

import ImageBlock from '../../Helpers/ImageBlock';

import { API_URL } from '../../Utils/urls';

const Home = ({ images }) => {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.6,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, x: '-300%' },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				ease: 'easeInOut',
				duration: 1.9,
			},
		},
		exit: {
			opacity: 0,
			x: '-300%',
			transition: { ease: 'easeInOut', duration: 1.8 },
		},
	};

	return (
		<>
			<Container
				id="home"
				data-scroll-section
				borderTop={["none", "1px solid black"]}
				bgColor="body"
			>
				<AnimatePresence>
					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						exit="exit"
					>
						<Flex
							position="relative"
							justifyContent="space-between"
							flexDir={['column', 'row']}
							w="100vw"
							minH="calc(100vh - 124px -  61px)"
						>
							{/* {isLoading ? (
								<Text>Loading...</Text>
							) : ( */}
							<>
								<Flex justifyContent={['center']} width="100%">
									<ImageBlock
										src={
											API_URL +
											images.data[0].attributes.images.data[0].attributes.url
										}
										alt="ioda"
										variants={item}
									/>
								</Flex>

								<Flex justifyContent={['center']} width="100%">
									<ImageBlock
										src={
											API_URL +
											images.data[1].attributes.images.data[0].attributes.url
										}
										alt="ioda"
										variants={item}
									/>
								</Flex>

								<Flex justifyContent={['center']} width="100%">
									<ImageBlock
										src={
											API_URL +
											images.data[2].attributes.images.data[0].attributes.url
										}
										alt="ioda"
										variants={item}
									/>
								</Flex>
							</>
							{/* )} */}
						</Flex>
					</motion.div>
				</AnimatePresence>
			</Container>
		</>
	);
};

export default Home;
