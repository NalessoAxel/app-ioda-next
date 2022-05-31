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
		
		{ name: t('menu'), id: '#menu' },
		{ name: t('reservations'), id: '#reservations' },
		{ name: t('about'), id: '#about' },
		{ name: t('contact'), id: '#contact' },
	];

	return (
		<Flex>
			<Button ref={btnRef} onClick={onOpen} bgColor="body" >
				<HamburgerIcon w={8} h={8} />
			</Button>

			<Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
				<Flex
					as={List}
					variant="primary"
					flexDirection="row"
					alignItems="flex-start"
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
