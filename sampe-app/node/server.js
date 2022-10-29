const server = require('express')();
server.listen(3000, async () => { });
server.get("/service-request", async (_, res) => {
    console.log('Request Received for dockerpractice');
    res.json({ "name": "Hello Docker" });
});