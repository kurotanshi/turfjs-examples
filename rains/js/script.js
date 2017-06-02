(function(){
  var carArr;
  carArr = [];
  d3.csv("/taipei.csv").row(function(d){
    if (carArr.length === 0) {
      return carArr.push(d.CarNo);
    }
  }).get(function(error, rows){});
}).call(this);
