import { promises as fsPromises } from 'fs';
import fs from 'fs';

export default async (filename: string, width: string, height: string): Promise<unknown> => {
    let filepath: string | Error | Buffer = ''
    
    // make thumbs directory if it doesn't already exist:
    if (!fs.existsSync(`${__dirname}/../../thumbs`)) {
        try {
            await fsPromises.mkdir(`${__dirname}/../../thumbs`);
        } catch (err) {
            console.log(`${err}:'there was an error making the thumbs dir 👹`)
        }
    }

    // check thumbs folder for requested image: - if it exists, return the filepath string:
    try {
       await fsPromises.access(`${__dirname}/../../thumbs/${width}-${height}-${filename}`)
       // if check passes:
       filepath = `${__dirname}/../../thumbs/${width}-${height}-${filename}`
    } catch (err) {
        // if check fails:
        console.log(err, `📒 image doesn't exist yet`)
        try {
            // get image buffer from filesystem:
            const contents = await fsPromises.readFile(`${__dirname}/../../full/${filename}`);
            filepath = contents
        } catch (err) {
            if (err instanceof Error) {
                filepath = err
            }
        }
    }
    return filepath
}