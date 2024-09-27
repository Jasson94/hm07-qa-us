// eslint-disable-next-line no-undef
const config = require('../config');
/*
GET test 1 check that getting the "fresh food" warehouse return status code of 200
Actual Result: PASSED.
*/
test('should be 200 status code for getting "fresh food" warehouse', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		// assigning the actual response status to the actualResult variable
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	// checking that the actual status is 200
	expect(actualStatus).toBe(200);
});
/* 
GET test 2 checking that the expeceted data is in the response body
*/
test('should return the expected data in the response body', async () => {
	let response;
	try {
	  response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
		console.error(error);
	}
	  const data = await response.json();
// assigning the data to the list of warehouses variable
	  const listOfWarehouses = data;
// checks that the response body are equals
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
	
});