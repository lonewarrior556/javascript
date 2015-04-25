var makeChange = function(value, coins){
  if (coins.indexOf(value) !== -1){ return [value]; };
  if (coins[coins.length-1]>value){ return ["NC"];}





  var shortestChain = new Array(Math.floor(value/(coins[coins.length-1]))+1);
  var badString = true;

  for (var i=0; i<coins.length; i++){
    if (coins[i]> value){continue;}

    var change = [coins[i]].concat(makeChange(value-coins[i],coins))

    if (change.indexOf("NC") === -1){
      if (change.length < shortestChain.length){
        badString = false;
        shortestChain = change;
      }
    }
  }
  if (badString){
    return ["NC"];
  }
  else{
    console.log(shortestChain);
  return shortestChain;
  }
};

makeChange(99,[25,10,5,2]);
