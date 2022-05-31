import { Flex } from '@chakra-ui/react';

import Container from '../Grid/Container';

import { useTranslation } from 'react-i18next';

import RestaurantDescriptions from './RestaurantDescriptions';
import MenuLinks from './MenuLinks';
import OpeningHours from './OpeningHours';

const Menu = ({ description, menu, openingHours }) => {
	const { t } = useTranslation();

	return (
		<Container
			display={["flex", "grid"]}
			id="menu"
			data-scroll-section
			h={["100%", "calc(100vh - 124px -  61px)"]}
			w={["100vw","1184px"]}
			name="menu"
			borderTop={["none", "1px solid black"]}
			bgColor="body"
		>
			<Flex
				h={["100%", "calc(100vh - 124px -  61px)"]}
				flexDirection={['column', 'row']}
				alignItems="center"
				justifyContent={["none", "space-between"]}
				
			>
				<RestaurantDescriptions description={description} />

				<MenuLinks menu={menu} />

				<OpeningHours openingHours={openingHours} />
			</Flex>
		</Container>
	);
};

export default Menu;
