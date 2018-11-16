function fib(){
  var x = 1;
  var y = 2;

  console.log(x);

  function nacci(){
    console.log(x);
    var a = x;
    x = y;
    y = y + a;    
  }
  return nacci;
}
var fibcounter = fib();
fibcounter();
fibcounter();
fibcounter();
fibcounter();
fibcounter();

