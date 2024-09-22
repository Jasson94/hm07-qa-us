// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	
	"name": "My modified kit",
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
}

test('should return status code of 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		expect(response.status).toBe(200);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
});


test('should return the expected data in the response body', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        
		const data = await response.json();
		console.log(data);
		expect(response.status).toBe(200);
	    expect(data).toHaveProperty('name', 'productsList');
		expect(data).toHaveProperty('id', 'quantity');
	} catch (error) {
		console.error(error);
	}
});