const fs = require('fs');
const path = require('path');

const source = 'C:\\Users\\jaide\\.gemini\\antigravity\\brain\\ad873b6a-b2ed-468a-8508-b912fa57d2a2\\smart_adviser_logo_transparent_1767329682193.png';
const dest = 'c:\\Users\\jaide\\Desktop\\adviser\\brand_logo.png';

console.log('Starting copy operation...');
console.log('Source:', source);
console.log('Destination:', dest);

try {
    if (!fs.existsSync(source)) {
        console.error('ERROR: Source file does not exist!');
        process.exit(1);
    }
    console.log('Source file exists. Size:', fs.statSync(source).size);

    fs.copyFileSync(source, dest);
    console.log('Copy command executed.');

    if (fs.existsSync(dest)) {
        const size = fs.statSync(dest).size;
        console.log('SUCCESS: Destination file exists. Size:', size);
    } else {
        console.error('FAILURE: Destination file NOT found after copy.');
    }
} catch (err) {
    console.error('EXCEPTION during copy:', err);
}
