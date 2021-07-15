
function pattern1(n) {
    let str = ""
    for( let row = 1; row<=n; row++){
        for( let column = 1; column <=row ; column++){
            str += "* "
        }
        str += "\n"
    }
    return str
}
function pattern2(n) {
    let str = ""
    for( let row = n; row>=1; row--){
        for( let column = n; column >=1 ; column--){
            if(column > row){
                str+=" "
            }
            else{
                str+=" *"
            }
        }
        str += "\n"
    }
    return str
}

let n = process.argv[2];
console.log(pattern1(n))
console.log(pattern2(n))