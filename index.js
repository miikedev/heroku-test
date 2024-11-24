const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({
    success: true,
    message: 'welcome to heroku test node app'
}))
.listen(3000,() => console.log('server is listerning to port 3000'))