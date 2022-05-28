import { API_URL } from './urls';

export const getData = async () => {
	const response = await fetch(API_URL);
	const data = await response.json();
	console.log(data);
	return data;
};
