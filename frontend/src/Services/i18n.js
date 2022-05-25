import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nContext, initReactI18next } from 'react-i18next';
import Locize from 'i18next-locize-backend';
import { API_URL } from '../Utils/urls';

// const loadResources = async () => {
// 	return await fetch(`${API_URL}/api/restaurant-descriptions?populate=*&_locale=`, {params: {lang: locale}})
// 	.then((response) => { return response.json(); })
// 	.then((data) => {
// 		console.log(data);
// 		return data;
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
// };

// const backEndOptions = {
// 	loadPath: '{{lng}} | {{ns}}',
// 	request: () => {
// 		try {
// 			const [lng] = url.split('|');
// 			loadResources(lng).then((data) => {
// 				callback(null, {
// 					data: data,
// 					status: 200,
// 				});
// 		});
// 		} catch(e) {
// 			console.error(e);
// 			callback(null, {
// 				status: 500,
// 				});

// 		}
// 	},
// };

i18next
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: true,
		detection: {
			order: ['queryString', 'cookie'],
			cache: ['cookie'],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18next;
