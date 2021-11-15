import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const app = express();


app.use('/api/v:version/:method', (req, res) => {
	res.send({
		method: req.params.method,
		version: req.params.version
	});
});

app.listen(port);

console.log(`Server start at http://localhost:${port}`)