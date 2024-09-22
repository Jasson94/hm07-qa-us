
const config = require('../config');

test('should return a status code of 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('should return the expected data in the response body', async () => {
	let response;
	try {
	    response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	const listOfWarehouses = data;
	expect(listOfWarehouses).toEqual([
		{
		  name: 'Everything You Need',
		  workingHours: { end: 23, start: 7 }
		},
		{
		  name: 'Fresh Food',
		  workingHours: { end: 23, start: 8 }
		},
		{
		  name: 'Food City',
		  workingHours: { end: 21, start: 8 }
		},
		{
		  name: 'Big World',
		  workingHours: { end: 20, start: 5 }
		}
	  ]);
	const allHaveNameProperty = listOfWarehouses.every(warehouse => warehouse.hasOwnProperty('name', 'working hour', 'start', 'end'));

	expect(allHaveNameProperty).toBe(true);
	
	console.log(listOfWarehouses);

});