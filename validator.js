var isValidImage = function (url, callback) {
    var img = new Image();
    img.src = url;

    img.onerror = function () {
        callback(url, false);
    };

    img.onload = function () {
        callback(url, true);
    };
};

var callbackFunction = function (url, isValid) {
    if (isValid) {
        alert(url + ' is valid image');
        // Do whatever logic you want
    } else {
        alert(url + ' is invalid image');
        // Do whatever logic you want
    }
};

isValidImage('http://nonexistentUrl.com/image.png', callbackFunction);
