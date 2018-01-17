const { expect } = require('chai');
const { getDirectionsOnTheMap } = require('../src');

describe('Find the steepest path. ', () => {
  it('should return the route follow length = 4', (done) => {
    const result = getDirectionsOnTheMap(4);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(4)
    console.log(result);
    done();
  });

  it('should return the route follow length = 5', (done) => {
    const result = getDirectionsOnTheMap(5);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(5)
    console.log(result);
    done();
  });

  it('should return the route longest', (done) => {
    const result = getDirectionsOnTheMap();
    expect(result).to.be.instanceof(Array);
    console.log(result);
    done();
  });
});