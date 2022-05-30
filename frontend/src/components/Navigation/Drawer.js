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
	Button,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRouter } from 'next/router';
import Link from 'next/link';

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

	const router = useRouter();

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
					{/* <DrawerHeader alignItems="flex-start" p={p}>{title}</DrawerHeader> */}
					<DrawerBody>
						<Flex
							as={List}
							variant="primary"
							flexDirection="column"
							alignItems="flex-start"
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
							<Flex justifyContent="flex-end" h="100%" alignItems="center">
							<Link href="/" locale={router.locale === 'fr-BE' ? 'en' : 'fr-BE'}>
								<Button
									variant="primary"
									textDecoration="none"
									color="currentColor"
									backgroundImage="linear-gradient(#000, #000)"
									bgPos="100% 100%"
									bgRepeat="no-repeat"
									bgSize="0% 2px"
									fontFamily="body"
									transition="background-size .4s"
									cursor="pointer"
									borderRadius="0px"
									_hover={{
										backgroundPosition: '0% 100%',
										backgroundSize: '100% 2px',
									}}
									marginRight="8px"
								>
									FR
								</Button>
							</Link>

							<Link href="/" locale={router.locale === 'fr-BE' ? 'en' : 'fr-BE'}>
								<Button
									variant="primary"
									textDecoration="none"
									color="currentColor"
									backgroundImage="linear-gradient(#000, #000)"
									bgPos="100% 100%"
									bgRepeat="no-repeat"
									bgSize="0% 2px"
									fontFamily="body"
									transition="background-size .4s"
									cursor="pointer"
									borderRadius="0px"
									_hover={{
										backgroundPosition: '0% 100%',
										backgroundSize: '100% 2px',
									}}
								>
									EN
								</Button>
							</Link>
						</Flex>

						</Flex>
					</DrawerBody>
					<DrawerFooter>{footer}</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

export default DrawerMobile;
