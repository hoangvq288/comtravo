const { getData } = require('../getFlightsService')
const fetchMock = require('fetch-mock');
const expect = require('expect');
describe('Test API Service', () => {
  data = { "flights": [
    {
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
  },
  {
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
  ]}
  it('should return data', async () => {
    fetchMock.get('https://discovery-stub.comtravo.com/source1', data, { delay: 1000 });
    const res = await getData('/source1')
    console.log(res)
    expect(res).toEqual(data)
    fetchMock.restore();
  })

  it('should return empty list if error', async () => {
    fetchMock.get('https://discovery-stub.comtravo.com/source1', 400, {overwriteRoutes: false})
    const res = await getData('/source1')
    expect(res).toEqual([])
    fetchMock.restore();
  })
  
})