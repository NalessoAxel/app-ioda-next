import { Text, Flex, Image } from '@chakra-ui/react';

import { API_URL } from '../../Utils/urls';

const MenuLinks = ({ menu }) => {
	return (
		<>
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
					minH="410px"
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
							ENGLISH
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
		</>
	);
};

export default MenuLinks;
