const fetch = require('node-fetch');

const fetchWithTimeOut = (url, options, timeout = 1000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), timeout)
    )
  ]);
}

module.exports = { fetchWithTimeOut }