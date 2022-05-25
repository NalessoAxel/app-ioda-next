import { API_URL } from '../Utils/urls';

async function findAllImages() {
	const response = await fetch(
		`${API_URL}/api/home-images?populate[images][populate]=*`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		}
	);
	const res = await response.json();
	return console.log(res);
}
export default findAllImages;