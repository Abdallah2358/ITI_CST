
export function getCookie(cookieName) {
    return (allCookieList()[cookieName]);
}

export function setCookie(cookieName, cookieValue, expiryDate) {
    document.cookie = cookieName + '=' + encodeURIComponent(cookieValue) + ';expires=' + expiryDate.toUTCString();
}
export function hasCookie(cookieName) {
    return getCookie(cookieName) ? true : false;
}

export function deleteCookie(cookieName) {
    if (hasCookie(cookieName)) {
        var date = new Date();
        date.setDate(date.getDay() - 1);
        setCookie(cookieName, 'deleted', date)
    }

}

export function allCookieList() {
    var cookieStrArr = document.cookie.split(/; */g);
    var cookieArr = [];
    for (const iterator of cookieStrArr) {
        cookieArr[iterator.split('=')[0]] = iterator.split('=')[1];
    }
    return cookieArr;
}

