import express from 'express'
export const app = express()

app.get('/ping', (_null, res) => {
	res.json('Hello World!')
})
