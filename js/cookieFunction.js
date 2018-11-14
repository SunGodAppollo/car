//对cookie的操作
//添加
function cookieAdd(key,val){
document.cookie=key+"="+val;
}
//得到
function cookieGet(key){

}
//衍生------------------------------

function cookieUser(val){
console.log(val);
document.cookie="id"+"="+val.id;

}

//
