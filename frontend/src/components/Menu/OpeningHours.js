import { Text, Flex, Heading, Box } from '@chakra-ui/react';

const OpeningHours = ({ openingHours }) => {
	

	return (

			<Flex h="100%" flexDirection={["column", "row"]}>
			<Flex alignItems="center" w={["100%", "auto"]} h={["1px", "100%"]} justifyContent="center">
				<Box w={['80%', '1px']} h={["1px", "531px"]} bgColor="black" mb={["24px", "0"]} />
			</Flex>
			
			<Flex
				flexDirection="column"
				alignItems="center"
				pt={["24px", "60px"]}
				pb={["164px", "0"]}
				w={["100%", "394px"]}
				h={["100%", "531px"]}>
			<Heading
				as="h2"
				fontSize="1.5rem"
				fontWeight="300"
				textTransform="uppercase"
			>
				{openingHours.data[0].attributes.opening_hour_title}
			</Heading>

			<Flex
				flexDirection="column"
				alignItems="center"
				pt={['24px', '91px']}
				justifyContent="space-between"
				maxHeight="219px"
			>
				<Flex flexDirection="column" alignItems="center">
					<Text
						color="black"
						fontSize="1rem"
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
						fontSize="1rem"
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
						fontSize="1rem"
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

				<Flex flexDirection="column" alignItems="center" py={['24px', '64px']} px='64px'>
					<Text color="black" fontSize="0.8rem" whiteSpace="normal">
						{openingHours.data[0].attributes.infos_reservations}
					</Text>
				</Flex>
			</Flex>
		</Flex>
		</Flex>
	);
};

export default OpeningHours;
