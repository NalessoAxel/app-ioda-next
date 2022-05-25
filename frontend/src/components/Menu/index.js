import { Text, Flex, Button, Box, Image, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Container from '../Grid/Container';
import axios from 'axios';
import { I18nContext } from 'react-i18next';

import { API_URL } from '../../Utils/urls';

const Menu = ({ description }) => {
	console.log(description.data[0].attributes.full_text);
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		async function getMenu() {
			try {
				const response = await axios.get(`${API_URL}
			/api/menu-pdf?populate=*`);
				setMenu(response.data.data.attributes.menu.data[0].attributes);
			} catch (error) {
				console.log(error);
			}
		}
		getMenu();
	}, []);

	return (
		<Container
			id="menu"
			data-scroll-section
			minH="calc(100vh - 115px -  62px)"
			w="100vw"
			name="menu"
		>
			<Flex
				h="calc(100% - 115px -  62px)"
				flexDirection={['column', 'row']}
				alignItems="center"
				justifyContent="space-between"
				width="100vw"
			>
				<Box bgColor="primary" />
				<Flex
					flexBasis={['0', '100%']}
					h="100%"
					position="relative"
					alignItems="center"
					w={['100%']}
					_before={{
						content: '" "',
						display: 'block',
						width: '2px',
						height: ['438%;', '531px'],
						// top: [' -230%;%', ' 25%'],
						top: 'calc(50% - 531px / 2)',
						position: 'absolute',
						transform: ['rotate(90deg)', 'rotate(0deg)'],
						left: '0px',
						background: 'black',
					}}
				>
					<Text
						color="black"
						fontSize={['1.75rem']}
						w="100%"
						whiteSpace="normal"
						px="50px"
					>
						{description.data[0].attributes.full_text}
					</Text>
				</Flex>

				<Flex
					flexBasis={['100%']}
					flexDirection="column"
					alignItems="center"
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
					<Image src="./MENU.svg" w="270px" height="70px" />

					<Text fontSize="1rem">
						<a
							href={API_URL + menu.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							FRANCAIS
						</a>
					</Text>

					<Text fontSize="1rem">
						<a
							href={API_URL + menu.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							ANGLAIS
						</a>
					</Text>

					<Text fontSize="1rem">
						<a
							href={API_URL + menu.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							NEDERLANDS
						</a>
					</Text>
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
						HORAIRES D'OUVERTURE
					</Heading>
					<Text color="black" fontSize={['1.75rem']} whiteSpace="normal"></Text>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Menu;
