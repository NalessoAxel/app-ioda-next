import { Box } from '@chakra-ui/react';

import BottomNav from './BottomNav';
import FullScreenMenu from './fullscreenMenu';

const Menu = () => {
	return (
		<Box position="fixed" w="100%" zIndex="banner">
			<BottomNav />

			<FullScreenMenu key="fullscreen" />
		</Box>
	);
};

export default Menu;
