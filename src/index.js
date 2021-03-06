const { calculateRoute } = require('./calculate');
const { checkPointHorizontal, checkPointVertical, checkLastPoint } = require('./checkPoint');

const metrixData = {};
const  map =  [
  [51,39,64, 4,42,15,23,35],
  [20,84,66,91,72,38,19,55],
  [94, 7,28,99,36,69, 8,99],
  [79,98,91,73,11,60,76,61],
  [98,40,65,40,54,88,74,73],
  [71,40,63,43,77,82,97,71],
  [89,24,71,24,93,79,23,71],
  [76,14,43,86,73,19,47,71],
];

// pull values ​​from the left or right sides of the point.
const getPointHorizontal = (indexMaster, indexChild, indexFind) => {
  if (map[indexMaster] && map[indexMaster][indexFind]) {
    if (map[indexMaster][indexChild] > map[indexMaster][indexFind]) {
      return map[indexMaster][indexFind];
    }
    return 0;
  }
};

// pull values ​​from the top or below sides of the point.
const getPointVertical = (indexMaster, indexChild, indexMasterFind) => {
  if (map[indexMasterFind] && map[indexMasterFind][indexChild]) {
    if (map[indexMaster] && (map[indexMaster][indexChild] > map[indexMasterFind][indexChild])) {
      return map[indexMasterFind][indexChild];
    }
    return 0;
  } 
};

const init = (x, y, oldPoint, indexMaster, indexChild) => {
  const indexChildLeft = indexChild-1;
  const pointLeft = getPointHorizontal(indexMaster, indexChild, indexChildLeft);

  const indexChildRight = indexChild+1;
  const pointRight = getPointHorizontal(indexMaster, indexChild, indexChildRight);

  const new_indexMaster = parseInt(indexMaster);
  const pointTop = getPointVertical(new_indexMaster, indexChild, new_indexMaster-1);

  const pointBelow = getPointVertical(new_indexMaster, indexChild, new_indexMaster+1);

  const point1 = checkPointHorizontal(pointLeft, pointRight);
  const point2 = checkPointVertical(pointTop, pointBelow);

  const lastPoint = checkLastPoint(point1, point2);
  
  if(lastPoint && lastPoint.point &&(oldPoint > lastPoint.point)) {
    metrixData[`${x}-${y}`].push(lastPoint.point);
    if(lastPoint.position === 'right') {
      init(x, y, lastPoint.point, indexMaster, indexChildRight);
    }
    if(lastPoint.position === 'left') {
      init(x, y, lastPoint.point, indexMaster, indexChildLeft);
    }
    if(lastPoint.position === 'top') {
      init(x, y, lastPoint.point, new_indexMaster-1, indexChild);
    }
    if(lastPoint.position === 'below') {
      init(x, y, lastPoint.point, new_indexMaster+1, indexChild);
    }
  }
}

const getDirectionsOnTheMap = (length) => {
  for (let indexMaster=0; indexMaster < map.length; indexMaster++) {
    for (let indexChild=0; indexChild < map[indexMaster].length;indexChild++) {
      metrixData[`${indexMaster}-${indexChild}`] = [map[indexMaster][indexChild]];
      init(indexMaster, indexChild, map[indexMaster][indexChild], indexMaster, indexChild);
    };
  };
  const route = calculateRoute(metrixData, length);
  return route;
};

module.exports = {
  getDirectionsOnTheMap
}