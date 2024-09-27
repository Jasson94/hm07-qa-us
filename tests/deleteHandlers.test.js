// eslint-disable-next-line no-undef
const config = require('../config');
/*
DELETE test 1 checks that deleting an existing kit returns a 200 status code
*/ 
test('return a 200 status code when deleting an existing kit', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatus = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
/* DELETE test 2 checks that the existing kit is succesfully deleted
Response: "ok": true
*/
test('should return \"ok\": true, when deleting an existing kit', async () => {
	let deletingKit;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const data = await response.json();
// assigning the data to the deleting kit variable
	    deletingKit = data;
	} catch (error) {
		console.error(error);
	}
	expect(deletingKit).toEqual({
		"ok": true
});
});