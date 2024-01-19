const decryptedMessages = [];
encryptedMessages.map(message => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const updatedDecipher = decipher.update(message, 'hex', 'utf-8');
    decryptedMessages.push(updatedDecipher + decipher.final('utf-8'));
});