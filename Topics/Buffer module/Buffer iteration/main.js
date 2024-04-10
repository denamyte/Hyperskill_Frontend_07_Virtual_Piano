const { Buffer } = require('buffer');

const buffer = Buffer.alloc(4, "word", "utf-8");

for (byte of buffer) {
    console.log(byte)
}