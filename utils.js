const removeDuplicatesFromArray = (arr) => {
  return [...new Set(
    arr.map(el => JSON.stringify(el))
  )].map(e => JSON.parse(e))
}

const removeDuplicate = (flightObjects) => {
  let flights = []
  flightObjects.forEach(obj => {
    if (obj.flights) {
      flights = flights.concat(obj.flights)
    }
  });
  return removeDuplicatesFromArray(flights)
}

const sortByPrice = (data, order = 'asc') => {
  if(order == 'desc') {
    return data.sort((a,b) => b.price - a.price)
  } else {
    return data.sort((a,b) => a.price - b.price)
  }
}

const formatData = (data) => {
  return {flights: data}
}

module.exports = {
  removeDuplicate,
  sortByPrice,
  formatData
}
