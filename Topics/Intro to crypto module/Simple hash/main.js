const crypto = require('crypto');

const algo = 'blake2s256';
const message = 'No pain, no gain :)';
const encoding = 'base64';

const generatedHash = crypto.createHash(algo);
const updated = generatedHash.update(message);
const hashed = updated.digest(encoding);
