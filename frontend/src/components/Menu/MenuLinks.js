import { Text, Flex, Image, Box } from '@chakra-ui/react';

import { API_URL } from '../../Utils/urls';

const MenuLinks = ({ menu }) => {
	

	return (
		<Flex h="100%" flexDirection={["column", "row"]} w="100%" alignItems={['center']}>
			<Flex alignItems="center" w={["100%", "auto"]} h={["1px", "100%"]} justifyContent="center">
				<Box w={['80%', '1px']} h={["1px", "531px"]} bgColor="black" mb={["24px", "0"]} />
			</Flex>
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-between"
			padding={[ "24px", "0"]}
			pt={["24px"]}
			w={["100%", "384px"]}
			h={["100%", "531px"]}>

				<Image src="./MENU.svg" w="270px" height="77px" />

				<Flex
					flexDirection="column"
					alignItems="center"
					justifyContent={["space-between", "space-evenly"]}
					padding={[ "24px"]}
					pt={["36px", "24px"]}
					pb={["36px", "0"]}
					h="100%"
				>
					<Text fontSize="1rem" pb={[ "24px"]}>
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

					<Text fontSize="1rem" pb={["24px"]}>
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

					<Text fontSize="1rem" pb={[ "24px"]}>
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

				</Flex>

					<Flex pb={["36px", "0px"]}>
						<Text color="black" fontSize="1rem" whiteSpace="normal">
							{menu.data.attributes.menu_explanations}
						</Text>
					</Flex>
				</Flex>
			</Flex>
	);
};

export default MenuLinks;
