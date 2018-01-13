/**
 * 
 * find the route is maximum slope.
 * 
 * @data {*} metrix data 
 * @length {*} length of point
 * 
 */
const calculateRoute = async(data, length) => {
  let finalPoint = 0;
  let pointWays = [];
  for (const list in data) {
    if(length) {
      data[list].splice(length);
      if(data[list].length === length || data[list].length > length) {
        const sumPoint = data[list].reduce((a,b) => { return a+b;});
        if (sumPoint > finalPoint) {
          finalPoint = sumPoint
          pointWays = data[list];
        }
      }
    } else {
      const sumPoint = data[list].reduce((a,b) => { return a+b;});
      if (data[list].length > pointWays.length && sumPoint > finalPoint) {
        finalPoint = sumPoint
        pointWays = data[list];
      }
    }
  }
  return pointWays;
};

module.exports = {
  calculateRoute
}

