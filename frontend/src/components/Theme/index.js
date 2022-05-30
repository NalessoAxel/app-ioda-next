import { extendTheme } from '@chakra-ui/react';

import Links from './components/Links';
import List from './components/List';
import Heading from './components/Heading';
import Button from './components/Button';

// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {
	heading: 'Merryweather, sans-serif',
	body: 'Merrywetaher, sans-serif',
};

// ? https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = ['576px', '768px', '992px', '1200px', '1440px'];
breakpoints.base = '0px';
breakpoints.sm = '576px';
breakpoints.md = '768px';
breakpoints.lg = '992px';
breakpoints.xl = '1200px';
breakpoints.xxl = '1440px';


// ? https://chakra-ui.com/docs/theming/theme#colors
const colors = {
	primary: '#EDD372',
	body: '#FAF9F1',
};

// ? https://chakra-ui.com/docs/theming/theme#spacing
const space = {};

// ? https://chakra-ui.com/docs/features/color-mode
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	fonts,
	breakpoints,
	colors,
	space,
	config,
	textStyles: {
		xxl: {},
		xl: {},
		lg: {},
		m: {},
		sm: { fontSize: '18px' },
		xs: {},
		xxs: {},
	},

	styles: {
		body: {
			position: 'static',
			backgroundColor: '#FAF9F1',
		},
		'.c-scrollbar': {
			zIndex: 1200,
			display: 'none',
		},
		'.c-scrollbar_thumb': {
			width: '3px',
			borderRadius: 'none',
			opacity: 1,
		},
		'.active': {
			textDecoration: 'underline',
			color: 'red !important',
		},
	},
	components: {
		Links,
		List,
		Heading,
		Button,
	},
});

export default theme;

// ? https://chakra-ui.com/docs/theming/customize-theme
