// const path = require('path');

function buildSecureFilePath(basePath, fileName) {
    const combined = path.join(basePath, fileName);
    if (fileName.includes('..')) {
        // console.log('Error');
        throw new Error();
    } else {
        return /*'Secure File Path: ' + */combined;
    }
}

// buildSecureFilePath('/uploads', '../../etc/passwd');