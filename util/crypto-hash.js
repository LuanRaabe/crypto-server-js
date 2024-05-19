const crypto = require('crypto');
const hexToBinary = require('hex-to-binary');

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash('sha256');

  const data = inputs.map(input => JSON.stringify(input)).sort().join(' ')
  hash.update(data);

  return hexToBinary(hash.digest('hex'));
};

module.exports = cryptoHash;