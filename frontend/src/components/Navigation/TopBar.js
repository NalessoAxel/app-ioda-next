import { Flex, Image, Button, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Marquee from 'react-fast-marquee';

import Col from '../Grid/Col';
import Container from '../Grid/Container';


import Link from 'next/link';
import { useRouter } from 'next/router';

const TopBar = ({ marquee }) => {
	const router = useRouter();
	const bottomBar = useRef();

	return (
		<Container
			maxH="117px"
			ref={bottomBar}
			position="sticky"
			top="0"
			right="0"
			zIndex="100"
			bgColor="white"
		>
			<Col colStart={2} colEnd={26}>
				<Flex w={['100%']}>
					<Marquee gradientColor="false" speed="20" pauseOnHover="true">
						<Text fontSize={['1.25rem']}>
							{marquee.attributes.event_banner}
						</Text>
						<Text fontSize={['1.25rem']}>
							{marquee.attributes.event_banner}
						</Text>
					</Marquee>
				</Flex>

				<Flex alignItems="center" justifyContent="space-between">
					<Image
						src="/logo.svg"
						alt="logo"
						h={['30px', '88px']}
						w="219px"
						objectFit="cover"
						objectPosition="center"
						mb="14px"
					/>

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
			</Col>
		</Container>
	);
};

export default TopBar;
