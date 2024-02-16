const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8088;

app.use(cors());

app.use('/login', (req, res) => {
	res.send({
		token: 'I am Token!'
	});
});

app.listen(
	PORT, 
	() => console.log(`Express server is running at http://localhost:${PORT}/login`)
);