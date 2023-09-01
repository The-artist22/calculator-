var inp = document.getElementById("inp");
console.log(inp.value);
function addvalue(num) {
  console.log(num);
  inp.value += num;
}
function equal() {
  inp.value = eval(inp.value);
}
function onclear() {
  inp.value = "";
}
function back() {
  var a = inp.value.silce(0, -1);
  inp.value = a;
}
