const { test, expect } = require('@playwright/test');

test('GET request response status', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/1');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
});
