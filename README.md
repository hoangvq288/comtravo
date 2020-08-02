# 1. Requirements, Approach and Implementation
### - Requirements
* Please plan and implement a service in Node.js which consumes 2 endpoints
(https://discovery-stub.comtravo.com/source1 & https://discovery-stub.comtravo.com/source2)
exposed by discovery-stub service(details see below).
* Your service should get flights from these 2 routes, merge them, remove duplicates and send to the client. As an identity of the flight can be used the combination of flight numbers and dates.
* Note that discovery-stub service is not stable, i.e. it can sometimes fail or reply after couple of seconds. The response time of your service shouldn't take longer than 1 second.
* Please write tests for your implementation.


### - Approach
* Build a simple REST API Service using express framework.
* Using `node-fetch` module to fetch data from provided sources. Since the provided sources is not stable, my solution is to set timeout for each request.
* Using `dotenv` to setup secret username, password for sources authentication.
* Writing unit test and integration test using `supertest`, `expect`, `mocha`.


### - Implementation
* `app.js` : contains routes and instructions to start server
* `getFlightsServices.js`: service provides getFlights method. 
* `fetchWithTimeOut.js`: fetch modification with timeout
* `utils.js`: some utilities methods.
* `test`: test directory

# 2. How to run the app
* folk the repo.
* run `npm install` to setup node modules.
* run `npm run dev` to start server.
* run `npm run test` to test the app.
# 3. Limitations and Future improvements
### Limitations
### Future improvements

# 4. References
- https://discovery-stub.comtravo.com/api-docs/#/default/get_source1
- https://nodejs.org/en/docs/guides/buffer-constructor-deprecation/
- https://dev.to/pixari/what-is-the-best-solution-for-removing-duplicate-objects-from-an-array-4fe1
