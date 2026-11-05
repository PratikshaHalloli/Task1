
const { test } = require('node:test');
const assert = require('node:assert');
const createServer = require('./app');

test('Application should return successful response', async () => {
    const server = createServer();

    await new Promise((resolve) => {
        server.listen(0, resolve);
    });

    try {
        const port = server.address().port;
        const response = await fetch(`http://localhost:${port}`);

        assert.strictEqual(response.status, 200);

        const body = await response.text();

        assert.ok(body.includes('Welcome to My DevOps Task 1!'));

    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});
