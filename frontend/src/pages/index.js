import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import useResizeObserver from 'use-resize-observer';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ScrollIndicator from '../Helpers/ScrollIndicator';
import { API_URL } from '../Utils/urls';

import Home from '../Components/Home';
import MenuNav from '../Components/Navigation/index';
import TopBar from '../Components/Navigation/TopBar';
import Menu from '../Components/Menu';
import Reservations from '../Components/Reservations/index';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

import 'locomotive-scroll/dist/locomotive-scroll.css';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function App({
	images,
	marquee,
	locale,
	description,
	aboutText,
	menu,
	openingData,
}) {
	console.log('horraires:', openingData);
	const router = useRouter();

	const { t } = useTranslation('translation');

	const { ref: container, height = 1, width = 1 } = useResizeObserver();

	return (
		<>
			<LocomotiveScrollProvider
				options={{
					smooth: true,
					direction: 'horizontal',
					getDirection: true,
					smartphone: {
						scroll: true,
						direction: 'vertical',
					},
				}}
				watch={[height, width]}
				containerRef={container}
			>
				<TopBar marquee={marquee} locale={locale} />

				<ScrollIndicator />

				<main data-scroll-container ref={container}>
					<Home images={images} />

					<Menu
						description={description}
						menu={menu}
						openingHours={openingData}
					/>

					<Reservations />

					<About aboutText={aboutText} />

					<Contact />

					<Footer />
				</main>

				<MenuNav />
			</LocomotiveScrollProvider>
		</>
	);
}
export default App;

export async function getServerSideProps({ locale }) {
	const images_res = await fetch(
		`${API_URL}/api/home-images?populate[images][populate]=*`
	);
	const images = await images_res.json();

	const marquee_res = await fetch(
		`${API_URL}/api/event-banners?locale=${locale}`
	);

	const { data } = (await marquee_res.json()) || null;

	const menuRes = await fetch(
		`${API_URL}/api/menu-pdf?populate=*&locale=${locale}`
	);

	const menu = await menuRes.json();

	const descriptionRes = await fetch(
		`${API_URL}/api/restaurant-descriptions?populate=*&locale=${locale}`
	);

	const descriptionData = (await descriptionRes.json()) || null;

	const openingRes = await fetch(
		`${API_URL}/api/opening-hours?populate=*&locale=${locale}`
	);

	const openingData = (await openingRes.json()) || null;

	const aboutRes = await fetch(
		`${API_URL}/api/about-texts?populate=*&locale=${locale}`
	);

	const aboutData = (await aboutRes.json()) || null;

	return {
		props: {
			images,
			marquee: data[0],
			description: descriptionData,
			aboutText: aboutData,
			menu,
			openingData,

			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
