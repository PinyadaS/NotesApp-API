const express = require("express");
const app = express();
const db = require('./database/connection');

app.get('/door', (req,res) => {
    res.status(200).send('package')
});

(async () => {try {
    await db.sync()
    console.log('sync success')
} catch (error) {
    console.log('sync error')
}})();

require('./models/user');

app.use("/user", require('./routes/user_route'))

app.listen(3001, () => {
    console.log('Server started')
});