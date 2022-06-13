import request from 'supertest'
import { app } from './app'

describe('/ping', () => {
	test('GET', async () => {
		const response = await request(app).get('/ping')
		expect(response.statusCode).toBe(200)
		expect(response.body).toBe('Hello World!')
	})

	test(`It shouldn't response others methods than GET`, async () => {
		const postResponse = await request(app).post('/ping')
		const putResponse = await request(app).put('/ping')
		const deleteResponse = await request(app).delete('/ping')

		expect(postResponse.statusCode).toBe(404)
		expect(putResponse.statusCode).toBe(404)
		expect(deleteResponse.statusCode).toBe(404)
	})
})
