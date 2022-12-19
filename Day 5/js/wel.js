import { deleteCookie, allCookieList } from './lib.js';

var cookieArr = allCookieList();
document.getElementById('wel').innerText = "Welcome, " + cookieArr['name']
for (const key in cookieArr) {
    if (key == 'name' || key == 'psw') {
        continue;
    }
    const element = decodeURIComponent(cookieArr[key]);
    console.log('key', key, document.getElementById(key));
    document.getElementById(key).innerText = element;
}

document.getElementById('logout').addEventListener('click', function () {
    console.log("logout");
    deleteCookie('psw');
    location.assign('/Day%205/index.html');
})