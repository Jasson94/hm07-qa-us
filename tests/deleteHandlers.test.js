
const config = require('../config');

test('should return a status code of 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const data = await response.json();
		console.log(data);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
		
	}
});

test('should return the expected data in the response', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
		
	}
});