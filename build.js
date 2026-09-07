const fs = require('fs');
const path = require('path');

console.log('Starting application build validation...');

const requiredFiles = [
    'public/index.html',
    'app.js',
    'package.json',
    'build.js'
];

for (const file of requiredFiles) {
    const filePath = path.join(__dirname, file);

    if (!fs.existsSync(filePath)) {
        console.error(`Build Failed: ${file} not found`);
        process.exit(1);
    }
}

console.log('Application files validated successfully.');
console.log('Build completed successfully.');
