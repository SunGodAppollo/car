//对cookie的操作
//添加
function cookieAdd(key,val){
document.cookie=key+"="+val;
}
//得到
function cookieGet(key){

}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    {
    c_start=c_start + c_name.length+1
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    }
  }
return ""
}

//衍生------------------------------

function cookieUser(val){
console.log(val);
document.cookie="id"+"="+val.id;//id
document.cookie="nickName"+"="+val.nickName;//昵称
document.cookie="image"+"="+val.image;//头像图片地址
document.cookie="phone"+"="+val.phone;//电话
document.cookie="carNumber"+"="+val.carNumber;//车牌号
document.cookie="balance"+"="+val.balance;//余额
document.cookie="integral"+"="+val.integral;//积分
document.cookie="deposit"+"="+val.deposit;//押金
document.cookie="registDate"+"="+val.registDate;//登记日期


}

//
