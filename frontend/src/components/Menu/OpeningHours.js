import { Text, Flex, Image, Heading } from '@chakra-ui/react';

const OpeningHours = ({ openingHours }) => {
	return (
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

				<Flex flexDirection="column" alignItems="center" px="130px" py="36px">
					<Text color="black" fontSize="1rem" whiteSpace="normal">
						{openingHours.data[0].attributes.infos_reservations}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default OpeningHours;
