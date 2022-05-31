import { Text, Flex } from '@chakra-ui/react';

const RestaurantDescriptions = ({ description }) => {
	return (
		<Flex
			flexBasis={['0', '100%']}
			h="100%"
			position="relative"
			flexDirection={['column', 'row']}	
			alignItems="center"
			justifyContent="center"
			maxW={['auto', "408px"]}
		>
			<Text
				color="black"
				fontSize={['1.3125em']}
				w="100%"
				whiteSpace="normal"
				px={['50px', null, null, null, '53px']}
				py={['24px', null, null, null, '24px']}
			>
				{description.data[0].attributes.full_text}
			</Text>
		</Flex>
	);
};

export default RestaurantDescriptions;
