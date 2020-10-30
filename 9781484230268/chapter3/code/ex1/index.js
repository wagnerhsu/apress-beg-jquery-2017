
console.log(getCurrentDateTime());

function PrependZero(num) {
    if (num < 10) {
        return '0' + num;
    }
    else
        return num.toString();
}

function getCurrentDateTime() {
    let dt = new Date();
    let month = PrependZero(dt.getMonth());
    let day = PrependZero(dt.getDay());
    let hour = PrependZero(dt.getHours());
    let minute = PrependZero(dt.getMinutes());
    let sec = PrependZero(dt.getSeconds());
    var s = `${dt.getFullYear()}年${month}月${day}日 ${hour}:${minute}:${sec}`;
    return s;
}