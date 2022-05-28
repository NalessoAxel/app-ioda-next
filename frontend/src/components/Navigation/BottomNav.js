import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, List, ListItem, keyframes, Link } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useTranslation } from 'react-i18next';

import Container from '../Grid/Container';
import Col from '../Grid/Col';

import FullscreenMenu from './fullscreenMenu';

const slide1 = keyframes`
	0%, 100% {
		transform: translate(0, 0);
	}
	
	50%{
		transform: translate(10px, 0);
	}
`;

const nearestIndex = (
	currentPosition,
	sectionPositionsArr,
	startIndex,
	endIndex
) => {
	if (startIndex === endIndex) {
		return startIndex;
	} else if (startIndex === endIndex - 1) {
		if (
			Math.abs(
				sectionPositionsArr[startIndex].ref.current.offsetTop - currentPosition
			) <
			Math.abs(
				sectionPositionsArr[endIndex].ref.current.offsetTop - currentPosition
			)
		)
			return startIndex;
		else return endIndex;
	} else {
		const nextNearest = ~~((startIndex + endIndex) / 2);
		let a = Math.abs(
			sectionPositionsArr[nextNearest].ref.current.offsetTop - currentPosition
		);
		let b = Math.abs(
			sectionPositionsArr[nextNearest + 1].ref.current.offsetTop -
				currentPosition
		);
		if (a < b) {
			return nearestIndex(
				currentPosition,
				sectionPositionsArr,
				startIndex,
				nextNearest
			);
		} else {
			return nearestIndex(
				currentPosition,
				sectionPositionsArr,
				nextNearest,
				endIndex
			);
		}
	}
};

const BottomNav = () => {
	const { scroll } = useLocomotiveScroll();

	const { t } = useTranslation();

	const [scrollEnd, setScrollEnd] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);

	const homeRef = useRef();
	const aboutRef = useRef();
	const menuRef = useRef();
	const contactRef = useRef();
	const reservationRef = useRef();

	const navBarItem = [
		{ name: t('home'), id: '#home', tab: 'tab 1', ref: homeRef },
		{ name: t('menu'), id: '#menu', tab: 'tab 2', ref: menuRef },
		{
			name: t('reservations'),
			id: '#reservations',
			tab: 'tab 3',
			ref: reservationRef,
		},
		{ name: t('about'), id: '#about', tab: 'tab 4', ref: aboutRef },
		{ name: t('contact'), id: '#contact', tab: 'tab 5', ref: contactRef },
	];

	// useEffect((navBarItem) => {
	// 	const handleScroll = (e) => {
	// 		const index = nearestIndex(
	// 			window.scrollX,
	// 			navBarItem,
	// 			0,
	// 			navBarItem.length - 1
	// 		);
	// 		setActiveIndex(index);
	// 	};
	// 	document.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		document.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	useEffect(() => {
		if (scroll) {
			scroll.on('scroll', ({ limit, scroll }) => {
				let progress = (scroll.x / limit.x) * 100;
				if (progress >= 99) {
					setScrollEnd(1);
				} else {
					setScrollEnd(0);
				}
			});
		}
	}, [scroll]);

	const handleScrollToId = (id) => {
		let elem = document.querySelector(id);

		scroll.scrollTo(elem, {
			duration: 1000,
			easing: [0.25, 0.0, 0.35, 1.0],
		});
	};

	const slideAnimation = `${slide1} 2s ease-in-out infinite`;

	return (
		<>
			<Container
				maxH="62px"
				bgColor="primary"
				w={['100vw', '100%']}
				position={['fixed']}
				bottom={['0']}
			>
				<Col colStart={2} colEnd={26}>
					<Flex
						as={List}
						variant="primary"
						flexDirection="row"
						alignItems="center"
						justifyContent="space-between"
						w="100%"
						display={['none', 'flex']}
					>
						<Flex>
							{navBarItem.map((item, index) => (
								<ListItem
									as={Link}
									key={index + item.tab}
									fontSize="18px"
									color="black"
									textTransform="uppercase"
									cursor="pointer"
									onClick={() => handleScrollToId(`${item.id}`)}
									_hover={{ textDecoration: 'underline' }}
									pr="42px"
									ref={item.ref}
									sx={{
										textDecoration:
											activeIndex === index ? 'underline' : 'none',
									}}
								>
									{item.name}
								</ListItem>
							))}
						</Flex>

						<Box margin="10px" position="relative">
							{scrollEnd === 1 ? (
								<ArrowBackIcon
									w={10}
									h={8}
									color="black"
									animation={slideAnimation}
									style={{
										marginLeft: '8px',
									}}
								/>
							) : (
								<ArrowForwardIcon
									w={10}
									h={8}
									color="black"
									animation={slideAnimation}
									style={{
										marginLeft: '8px',
									}}
								/>
							)}
						</Box>
					</Flex>

					<Flex
						display={['block', 'none']}
						alignItems="center"
						justifyContent="center"
						h="100%"
						w="100%"
					>
						<FullscreenMenu />
					</Flex>
				</Col>
			</Container>
		</>
	);
};

export default BottomNav;
