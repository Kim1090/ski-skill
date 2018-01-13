const { expect } = require('chai');
const { getDirectionsOnTheMap } = require('../src');

describe('Find the steepest path. ', () => {
  it('should return the route follow length = 4', (done) => {
    const result = getDirectionsOnTheMap(4);
    result.then((data) => {
      expect(data).to.be.instanceof(Array);
      expect(data).to.have.length(4)
      console.log(data);
      done();
    });
  });

  it('should return the route follow length = 5', (done) => {
    const result = getDirectionsOnTheMap(5);
    result.then((data) => {
      expect(data).to.be.instanceof(Array);
      expect(data).to.have.length(5)
      console.log(data);
      done();
    });
  });

  it('should return the route longest', (done) => {
    const result = getDirectionsOnTheMap();
    result.then((data) => {
      expect(data).to.be.instanceof(Array);
      console.log(data);
      done();
    });
  });
});