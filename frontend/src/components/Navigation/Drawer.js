import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerFooter,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Flex,
	ListItem,
	List,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const DrawerMobile = ({
	placement = 'right',

	isOpen,
	title = 'Menu',
	onClose,
	btnRef,

	footer,
}) => {
	const p = 15;
	const { t } = useTranslation();
	const navBarItem = [
		{ name: t('home'), id: '#home' },
		{ name: t('menu'), id: '#menu' },
		{ name: t('reservations'), id: '#reservations' },
		{ name: t('about'), id: '#about' },
		{ name: t('contact'), id: '#contact' },
	];
	const { scroll } = useLocomotiveScroll();

	const handleScroll = (id) => {
		let elem = document.querySelector(id);

		scroll.scrollTo(elem, {
			duration: 1000,
			easing: [0.25, 0.0, 0.35, 1.0],
		});
	};

	return (
		<Flex display={{ base: 'flex', md: 'none' }}>
			<Drawer
				isOpen={isOpen}
				placement={placement}
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent alignItems="center">
					<DrawerCloseButton alignSelf="end" mx={p} my={p} />
					<DrawerHeader p={p}>{title}</DrawerHeader>
					<DrawerBody>
						<Flex
							as={List}
							variant="primary"
							flexDirection="column"
							alignItems="center"
							h="100%"
							w="100%"
						>
							{navBarItem.map((item, index) => (
								<ListItem
									key={index}
									fontSize="18px"
									color="Black"
									textTransform="uppercase"
									cursor="pointer"
									onClick={() => handleScroll(`${item.id}`)}
									_hover={{ textDecoration: 'underline' }}
									pr="42px"
									my={['24px', '0']}
								>
									{item.name}
								</ListItem>
							))}
						</Flex>
					</DrawerBody>
					<DrawerFooter>{footer}</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

export default DrawerMobile;
