import { Text, Flex, Button, Box, Image, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Container from '../Grid/Container';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { API_URL } from '../../Utils/urls';


const Menu = ({ description, menu, openingHours }) => {
	console.log('menu:', menu);
	const { t } = useTranslation();

	return (
		<Container
			id="menu"
			data-scroll-section
			minH="calc(100vh - 115px -  62px)"
			w="100vw"
			name="menu"
			borderTop="1px solid black"
			bgColor="body"
		>
			<Flex
				h="calc(100% - 115px -  62px)"
				flexDirection={['column', 'row']}
				alignItems="center"
				justifyContent="space-between"
				width="100vw"
			>
				<Flex
					flexBasis={['0', '100%']}
					h="100%"
					position="relative"
					alignItems="center"
					// w="408px"
				>
					<Text
						color="black"
						fontSize={['1.3125em']}
						w="100%"
						whiteSpace="normal"
						px={['50px', null, null, null, '150px']}
					>
						{description.data[0].attributes.full_text}
					</Text>
				</Flex>

				<Flex
					flexBasis={['100%']}
					flexDirection="column"
					alignItems="center"
					pt="108px"
					h="100%"
					position="relative"
					_before={{
						content: '" "',
						display: 'block',
						width: '2px',
						height: [' 273%', '531px'],
						top: 'calc(50% - 531px / 2)',
						position: 'absolute',
						transform: ['rotate(90deg)', 'rotate(0deg)'],
						left: '0px',
						background: 'black',
					}}
				>
					<Image src="./MENU.svg" w="270px" height="70px" />

					<Flex
						flexDirection="column"
						alignItems="center"
						pt="96px"
						minH="440px"
						justifyContent="space-between"
					>
						<Text fontSize="1rem">
							<a
								href={
									API_URL + menu.data.attributes.menu_fr.data[0].attributes.url
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								FRANCAIS
							</a>
						</Text>

						<Text fontSize="1rem">
							<a
								href={
									API_URL + menu.data.attributes.menu_en.data[0].attributes.url
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								ANGLAIS
							</a>
						</Text>

						<Text fontSize="1rem">
							<a
								href={
									API_URL + menu.data.attributes.menu_nl.data[0].attributes.url
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								NEDERLANDS
							</a>
						</Text>

						<Text color="black" fontSize="1rem" whiteSpace="normal">
							{menu.data.attributes.menu_explanations}
						</Text>
					</Flex>
				</Flex>

				<Flex
					flexBasis={['100%']}
					flexDirection="column"
					alignItems="center"
					justifyContent="flex-start"
					pt="101px"
					h="100%"
					position="relative"
					_before={{
						content: '" "',
						display: 'block',
						width: '2px',
						height: [' 273%', '531px'],
						top: 'calc(50% - 531px / 2)',
						position: 'absolute',
						transform: ['rotate(90deg)', 'rotate(0deg)'],
						left: '0px',
						background: 'black',
					}}
				>
					<Heading as="h2" fontSize="1.5rem" fontWeight="bold">
						{openingHours.data[0].attributes.opening_hour_title}
					</Heading>
					<Flex
						flexDirection="column"
						alignItems="center"
						pt="96px"
						justifyContent="space-between"
						minHeight="219px"
					>
						<Flex flexDirection="column" alignItems="center">
							<Text
								color="black"
								fontSize="1.5rem"
								whiteSpace="normal"
								textTransform="uppercase"
							>
								{openingHours.data[0].attributes.openingHour[0].title}
							</Text>

							<Text color="black" fontSize="1rem" whiteSpace="normal">
								{openingHours.data[0].attributes.openingHour[0].days}
							</Text>

							<Text color="black" fontSize="0.9rem" whiteSpace="normal">
								{openingHours.data[0].attributes.openingHour[0].hours}
							</Text>
						</Flex>

						<Flex flexDirection="column" alignItems="center">
							<Text
								color="black"
								fontSize="1.5rem"
								whiteSpace="normal"
								textTransform="uppercase"
								pt="24px"
							>
								{openingHours.data[0].attributes.openingHour[1].title}
							</Text>

							<Text color="black" fontSize="1rem" whiteSpace="normal">
								{openingHours.data[0].attributes.openingHour[1].days}
							</Text>

							<Text color="black" fontSize="0.9rem" whiteSpace="normal">
								{openingHours.data[0].attributes.openingHour[1].hours}
							</Text>
						</Flex>

						<Flex flexDirection="column" alignItems="center">
							<Text
								color="black"
								fontSize="1.5rem"
								whiteSpace="normal"
								textTransform="uppercase"
								pt="24px"
							>
								{openingHours.data[0].attributes.openingHour[2].title}
							</Text>

							<Text color="black" fontSize="1rem" whiteSpace="normal">
								{openingHours.data[0].attributes.openingHour[2].days}
							</Text>

							<Text color="black" fontSize="0.9rem" whiteSpace="normal">
								{openingHours.data[0].attributes.openingHour[2].hours}
							</Text>
						</Flex>

						<Flex
							flexDirection="column"
							alignItems="center"
							px="130px"
							py="36px"
						>
							<Text color="black" fontSize="1rem" whiteSpace="normal">
								{openingHours.data[0].attributes.infos_reservations}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Menu;
