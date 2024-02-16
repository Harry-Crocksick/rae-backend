const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());

app.use('/login', (req, res) => {
	res.send({
		token: 'I am Token!'
	});
});

app.listen(
	process.env.PORT, 
	() => console.log(`Express server is running at http://localhost:${process.env.PORT}/login`)
);