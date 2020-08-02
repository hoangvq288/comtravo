const fetch = require('node-fetch');

const {removeDuplicate, sortByPrice, formatData} = require('./utils')
 
const getData = async (path) => {
  try{
    let response = await fetch('https://discovery-stub.comtravo.com' + path, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(process.env.USERNAME + ':' + process.env.PASSWORD).toString('base64')
      } 
    })
    return await response.json();
  } catch(err){
    console.error(err);
    // Handle errors here
    return []
  }
}

const getFlights = async () => {
  const data1 = await getData('/source1')
  const data2 = await getData('/source2')
  const result = removeDuplicate([data1, data2])
  return formatData(sortByPrice(result))
}

module.exports = {
  getFlights
}