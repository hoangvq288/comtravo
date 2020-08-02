const {sortByPrice, formatData, removeDuplicate} = require('../utils')
const expect = require('expect')

describe('Utils Test', () => {
  const flight1 = {
    "slices": [
      {
        "origin_name": "Schonefeld",
        "destination_name": "Stansted",
        "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
        "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
        "flight_number": "8545",
        "duration": 120
      },
      {
        "origin_name": "Stansted",
        "destination_name": "Schonefeld",
        "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
        "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
        "flight_number": "8544",
        "duration": 120
      }
    ],
    "price": 117.01
  }
  const flight2 = {
    "slices": [
      {
        "origin_name": "Schonefeld",
        "destination_name": "Stansted",
        "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
        "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
        "flight_number": "144",
        "duration": 115
      },
      {
        "origin_name": "Stansted",
        "destination_name": "Schonefeld",
        "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
        "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
        "flight_number": "145",
        "duration": 110
      }
    ],
    "price": 129
  }
  describe('#sortByPrice', () => {
    it('should return empty list if there is no data', () => {
      data = sortByPrice([])
      expect(data.length).toBe(0)
    })

    it('should return data if data is array of 1 element', () => {
      data = sortByPrice([flight1])
      expect(data.length).toBe(1)
      expect(data[0]).toEqual(flight1)
    })
  
    it('should return list flights in asc order', () => {
      data = sortByPrice([flight1, flight2])
      expect(data[0]).toEqual(flight1)
      expect(data[1]).toEqual(flight2)
    })
  
    it('should return list flights in desc order', () => {
      data = sortByPrice([flight1, flight2], 'desc')
      expect(data[0]).toEqual(flight2)
      expect(data[1]).toEqual(flight1)
    })
  })

  describe('#formatData', () => {
    it('should return object with key is flights, value is empty array if there is no data', () => {
      response = formatData([])
      expect(response).toHaveProperty('flights', []);
    })

    it('should return object with key is flights, value is array of flights if there is data', () => {
      response = formatData([flight1])
      expect(response).toHaveProperty('flights', [flight1]);
    })
  })

  describe('#removeDuplicate', () => {
    it('should return empty list if there is no data', () => {
      data = removeDuplicate([])
      expect(data.length).toEqual(0)
    })

    describe('should remove duplicate data', () => {
      
    })

    it('should remove duplicate if data sources are similar', () => {
      let dataSource1 = {flights: [flight1]}
      let dataSource2 = {flights: [flight1]}
      let expected = [flight1]
      data = removeDuplicate([dataSource1, dataSource2])
      expect(data.length).toEqual(1)
      expect.arrayContaining(expected)
    })
    
    it('should remove duplicate if data sources are overlapped', () => {
      let dataSource1 = {flights: [flight1, flight2]}
      let dataSource2 = {flights: [flight2]}
      let expected = [flight1, flight2]
      data = removeDuplicate([dataSource1, dataSource2])
      expect(data.length).toEqual(2)
      expect.arrayContaining(expected)
    })

    it('should concat data if data sources are not overlapped', () => {
      let dataSource1 = {flights: [flight1]}
      let dataSource2 = {flights: [flight2]}
      let expected = [flight1, flight2]
      data = removeDuplicate([dataSource1, dataSource2])
      expect(data.length).toEqual(2)
      expect.arrayContaining(expected)
    })
  })
})
