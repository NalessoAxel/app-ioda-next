import { useState, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Flex } from '@chakra-ui/react';

const ScrollIndicator = () => {
	const { scroll } = useLocomotiveScroll();

	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		if (scroll) {
			scroll.on('scroll', ({ limit, scroll }) => {
				const progress = (scroll.x / limit.x) * 100;

				setScrollTop(progress);
			});
		}
	}, [scroll]);

	return (
		<Flex
			h="8px"
			w="100%"
			bgColor="body"
			position="sticky"
			top="0"
			left="0"
			alignItems="center"
		>
			<Flex h="4px" width={`${scrollTop}%`} bg="primary"></Flex>
		</Flex>
	);
};

export default ScrollIndicator;
