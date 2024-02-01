export const notBroken = async (urlParams) => {
  return new Promise((resolve, reject) => {
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
      console.log("callbackFunction()",urlParams,isValid)
      if (isValid) {
        resolve(true);
      } else {
        resolve(false);
      }
    };

    isValidImage(urlParams, callbackFunction);
  });
};

//========== usage goes in here
const response = await notBroken(imgUrl)
