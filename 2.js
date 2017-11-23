/**
 * Created by Gateway on 23.11.2017.
 */
addEventListener("message", function(){
    var arr=[];
    for(var j=0; j<=100000; j++) {
        arr[j] = Math.floor((10-1)*Math.random()+1);

    }
var result=arr.sort(numb);

  postMessage(result);


}, true);
function numb(n, m){

    if(n>=m)return 1;
    if(n<m)return -1;
}

