

function maxRequest(url = ``, times = 3) {
  // 闭包
  function autoRetry (url, times) {
    console.log('times', times);
    times --;
    return fetch(url).then(value => {
      console.log(`OK`, value);
      if(value.status === 200) {
        return value;
      } else {
        throw new Error(`❌  http code error: ${value.status }`);
      }
    }).catch((err) => {
      console.log(`❌ Error`, err);
      if (times < 1) {
        throw new Error('💩 max request number');
      } else {
        return autoRetry(url, times);
      }
    });
  }
  return autoRetry(url = ``, times = 3);
}

maxRequest(`https://cdn.xgqfrms.xyz/json/badges.js`);
maxRequest(`https://cdn.xgqfrms.xyz/json/badges.json`);
