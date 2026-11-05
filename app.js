
const http = require('http');

function createServer() {
    return http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`
            <h1>Welcome to My DevOps Task 1!</h1>
            <p>Node.js application is running successfully.</p>
            <p>CI/CD Pipeline using GitHub Actions.</p>
        `);
    });
}

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    const server = createServer();

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = createServer;
