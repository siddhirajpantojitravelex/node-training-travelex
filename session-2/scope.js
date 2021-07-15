
var x = 10
console.log(x)
function abc() {
    var y = 20
    x = 20
    console.log("X=" + x)
    console.log("Y=" + y);
    function pqr() {
        var z = 500
        console.log("Z = " + z)
    }
    pqr()
    //console.log(z)
}
abc()
//pqr()
console.log(x)