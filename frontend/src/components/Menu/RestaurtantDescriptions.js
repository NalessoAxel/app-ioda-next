import { Text, Flex } from '@chakra-ui/react';

const RestaurtantDescriptions = ({ description }) => {
	return (
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
				px={['50px', null, null, null, '50px', '150px']}
			>
				{description.data[0].attributes.full_text}
			</Text>
		</Flex>
	);
};

export default RestaurtantDescriptions;
