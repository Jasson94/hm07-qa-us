// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
	
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
}
/*
POST test 1 verifying that checking the availability of goods return a 200 status code
*/
test('should return a status code of 200 when checking availability of goods', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	    actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200);
});
/* 
POST test 2 checking what is there on each warehouses
*/
test('should return what is there on each warehouse', async () => {
    let availabilityOfGoods;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
// assigning the data to the availability of goods variable
		availabilityOfGoods = data;
	} catch (error) {
		console.error(error);
	}
// checks that the data are equals
	expect(availabilityOfGoods).toEqual([
		{
			"Everything You Need": {
				"Sprite Soft Drink": true,
				"Gourmet Popcorn Kernels": true,
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": false
			},
			"Food City": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
				"Sprite Soft Drink": true,
				"Gourmet Popcorn Kernels": false
			},
			"Big World": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
				"Sprite Soft Drink": false,
				"Gourmet Popcorn Kernels": false
			},
			"Fresh food": {
				"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": true,
				"Sprite Soft Drink": true,
				"Gourmet Popcorn Kernels": false
			}
		}
	]);
});