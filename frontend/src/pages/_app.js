import { ChakraProvider } from '@chakra-ui/react';
import theme from '../Components/Theme/index';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />;
		</ChakraProvider>
	);
}

export default appWithTranslation(MyApp);
