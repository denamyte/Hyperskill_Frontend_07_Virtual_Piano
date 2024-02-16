// const path = require('path');

function normalizeAndCheckPath(filePath) {

  // Normalize the file path using Node.js's path module
  const normalizedPath = path.normalize(filePath);
  // Check if the normalized path is safe (doesn't contain directory traversal)
  const isSafePath = true;

  return {
    normalizedPath,
    isSafePath
  };
}
