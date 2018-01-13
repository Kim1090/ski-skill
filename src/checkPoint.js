/**
 * check the value horizontally to find the maximum value.
 * 
 * @pointLeft {*} Left of point  
 * @pointRight {*} Right of point 
 */
const checkPointHorizontal = async(pointLeft, pointRight) => {
  if(pointLeft && pointRight) {
    if(pointLeft > pointRight) {
      return {
        position: 'left',
        point: pointLeft
      };
    } else {
      return {
        position: 'right',
        point: pointRight
      };
    }
  } else if(pointLeft){
    return {
      position: 'left',
      point: pointLeft
    };
  } else if(pointRight) {
    return {
      position: 'right',
      point: pointRight
    };
  } else {
    return {
      position: 'none',
      point: 0
    };
  }
};

/**
 * check the value vertical to find the maximum value.
 * @pointTop {*} Top of point 
 * @pointBelow {*} Below of point 
 */
const checkPointVertical = async(pointTop, pointBelow) => {
  if(pointTop && pointBelow) {
    if(pointTop > pointBelow) {
      return {
        position: 'top',
        point: pointTop
      };
    } else {
      return {
        position: 'below',
        point: pointBelow
      };
    }
  } else if(pointTop){
    return {
      position: 'top',
      point: pointTop
    };
  } else if(pointBelow) {
    return {
      position: 'dow',
      point: pointBelow
    };
  } else {
    return {
      position: 'none',
      point: 0
    };
  }
};

/**
 * check vertical and horizontal values ​​for maximum values.
 * @pointHorizontal {*} point Horizontal 
 * @pointVertical {*} point Vertical 
 */
const checkLastPoint = async(pointHorizontal, pointVertical) => {
  if(pointHorizontal.point && pointVertical.point) {
    if(pointHorizontal.point > pointVertical.point) {
      return pointHorizontal;
    } else {
      return pointVertical;
    }
  } else if(pointHorizontal.point){
    return pointHorizontal
  } else if(pointVertical.point) {
    return pointVertical;
  } else {
    return {
      position: 'none',
      point: 0
    };
  }
};

module.exports = {
  checkPointHorizontal,
  checkPointVertical,
  checkLastPoint
}