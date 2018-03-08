/***如果是原生JQ+Primise那么这里***/
window.jQuery = function(){}
window.$ = window.jQuery
window.jQuery.ajax = function({ url, method, body, headers }) {
  return new Promise(function(resolve, reject) { // 重点在这里
    let request = new XMLHttpRequest() // 创建
    request.open(method, url, true) // 配置
    for (let key in headers) { // 设置请求头
      request.setRequestHeader(key, headers[key])
    }
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          // 调用函数
          resolve.call(undefined, request.responseText)
        } else if (request.status >= 400) {
          // 调用函数
          reject.call(undefined, request.getAllResponseHeaders())
        }
      }
    }
    request.send(body) // 发送
  })
}
/***到这里删除***/
/**下面的代码既可以运行自己写ajax也符合原生jq的语法**/
function success() {
      console.log("success")
    }
function fail() {
      console.log('fail')
    }

myButton.addEventListener('click', function() {
  $.ajax({
    url: '/xxx',
    method: 'GET',
    headers: {
      'Content-type': 'text/json',
      'zero': 18
    }
  }).then(success, fail)
  .then(
    (responseText)=>{console.log('request.responseText', responseText)},
    (allResponseHeader)=>{console.log('allResponseHeader', allResponseHeader)}
  )
})