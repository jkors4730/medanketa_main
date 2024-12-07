import fs from 'fs';

export const getFiles = ( path: string, folder: string ) => {
    const arr: string[] = [];

    try {
        const files = fs.readdirSync(path);

        files.forEach(file => {
            arr.push(folder + file);
        });

        return arr;
    }
    catch (err) {
        console.log(err);
        return arr;
    }
}
