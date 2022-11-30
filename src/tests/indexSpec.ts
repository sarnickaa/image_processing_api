import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the image convert endpoint', async () => {
        const response = await request.get('/api/images');
        console.log(response.status);
        expect(response.status).toBe(200);
    }
)});
