
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
/*
PUT test 1 check that a 200 status code is return when changing a kit
*/
test('should return status of 200 when changing a kit', async () => {
	let statusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		statusCode = data;
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200);
});

test('should return the expected data in the response body', async () => {
	let changingKit;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        const data = await response.json();
// assigning the data to the changint kit variable
		changingKit = data;
	} catch (error) {
		console.error(error);
	}
	// expecting the data to to have a property
	expect(changingKit).toHaveProperty('name', 'My modify kit');
});