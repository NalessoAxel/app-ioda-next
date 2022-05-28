import { Flex } from '@chakra-ui/react';

import Container from '../Grid/Container';

import { useTranslation } from 'react-i18next';

import RestaurtantDescriptions from './RestaurtantDescriptions';
import MenuLinks from './MenuLinks';
import OpeningHours from './OpeningHours';

const Menu = ({ description, menu, openingHours }) => {
	const { t } = useTranslation();

	return (
		<Container
			id="menu"
			data-scroll-section
			minH="calc(100vh - 115px -  62px)"
			w="100vw"
			name="menu"
			borderTop="1px solid black"
			bgColor="body"
		>
			<Flex
				h="calc(100% - 115px -  62px)"
				flexDirection={['column', 'row']}
				alignItems="center"
				justifyContent="space-between"
				width="100vw"
			>
				<RestaurtantDescriptions description={description} />

				<MenuLinks menu={menu} />

				<OpeningHours openingHours={openingHours} />
			</Flex>
		</Container>
	);
};

export default Menu;
