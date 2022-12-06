import supertest from 'supertest';
import app from '../index';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import path from 'path'

const request = supertest(app);

describe('Test endpoint responses', () => {
    beforeAll(function () {
         fs.copyFileSync(path.resolve(`${__dirname}/../../../src/tests/assets/300-300-cows_test.jpg`), path.resolve(`${__dirname}/../../thumbs/300-300-cows_test.jpg`))
    });

    afterAll(function () {
        fs.unlinkSync(path.resolve(`${__dirname}/../../thumbs/300-300-cows_test.jpg`))
    });



    it('gets the image convert endpoint', async () => {
        const response = await request.get('/api/images');
        console.log(response.status);
        expect(response.status).toBe(500);
    })

    it('gets the image convert endpoint', async () => {

        const response = await request.get('/api/images').query({
            filename: 'cows_test.jpg',
            width: '300',
            height: '300'
        })
        console.log(response.status);
        expect(response.status).toBe(200);
    })

});
