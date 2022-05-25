import { Flex, List, ListItem, useDisclosure, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import Drawer from './Drawer';

const FullscreenMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	const { scroll } = useLocomotiveScroll();

	const { t } = useTranslation();

	const handleScroll = (id) => {
		let elem = document.querySelector(id);

		scroll.scrollTo(elem, {
			duration: 1000,
			easing: [0.25, 0.0, 0.35, 1.0],
		});
	};

	const navBarItem = [
		{ name: t('home'), id: '#home' },
		{ name: t('menu'), id: '#menu' },
		{ name: t('reservations'), id: '#reservations' },
		{ name: t('about'), id: '#about' },
		{ name: t('contact'), id: '#contact' },
	];

	return (
		<Flex
			bgColor="primary"
			justifyContent="flex-end"
			alignItems="center"
			w="100vw"
			h="62px"
		>
			<Button ref={btnRef} onClick={onOpen}>
				<HamburgerIcon />
			</Button>

			<Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
				<Flex
					as={List}
					variant="primary"
					flexDirection="row"
					alignItems="center"
					h="100%"
					w="100%"
				>
					{navBarItem.map((item, index) => (
						<ListItem
							key={index}
							fontSize="18px"
							color="white"
							textTransform="uppercase"
							cursor="pointer"
							onClick={() => handleScroll(`${item.id}`)}
							_hover={{ textDecoration: 'underline' }}
							pr="42px"
						>
							{item.name}
						</ListItem>
					))}
				</Flex>
			</Drawer>
		</Flex>
	);
};

export default FullscreenMenu;
