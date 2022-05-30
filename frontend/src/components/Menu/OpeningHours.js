import { Text, Flex, useMediaQuery, Heading, Box } from '@chakra-ui/react';

const OpeningHours = ({ openingHours }) => {
	const [isLargerThanTablet] = useMediaQuery('(min-width: 768px )');

	return (
		<>
		{isLargerThanTablet ? 
		
		<Flex
			alignItems="center"
			flexDirection="column"
			pt="60px"
			maxW="394px"
			h="531px"
			position="relative"
			_before={{
				content: '" "',
				display: 'block',
				width: '1px',
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
				pt='91px'
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

				<Flex flexDirection="column" alignItems="center" pb='96px' px='60px'>
					<Text color="black" fontSize="0.8rem" whiteSpace="normal">
						{openingHours.data[0].attributes.infos_reservations}
					</Text>
				</Flex>
			</Flex>
		</Flex>
		: 
			<Flex
				flexDirection={['column', 'row']}
				alignItems="center"
				maxW="394px"
				pb="164px"
				position="relative" 
			>
			<Flex alignItems="center" w="100%" justifyContent="center">
				<Box w='80%' h="1px" bgColor="black" mb="24px" />
			</Flex>

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

				<Flex flexDirection="column" alignItems="center" py='24px' px='60px'>
					<Text color="black" fontSize="0.8rem" whiteSpace="normal">
						{openingHours.data[0].attributes.infos_reservations}
					</Text>
				</Flex>
			</Flex>
		</Flex>
		
		}
		</>
	);
};

export default OpeningHours;
