window.jQuery = function(){}
window.$ = window.jQuery
window.jQuery.ajax = function({url, method, body, successFn, failFn, headers}){
  let request = new XMLHttpRequest() // 创建
  request.open(method, url, true) // 配置
  for(let key in headers){// 设置请求头
    request.setRequestHeader(key, headers[key])
  }
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        // 调用函数
        successFn(request.responseText)
      } else if(request.status >= 400){
        // 调用函数
        failFn(request.getAllResponseHeaders())
      }
    }
  }
  request.send(body) // 发送
}



myButton.addEventListener('click',function(){
  $.ajax({
    url: '/xxx',
    method: 'GET',
    headers: {
      'Content-type': 'text/json',
      'zero': 18
    },
    successFn: function(responseText){
     console.log("success") 
     console.log('request.responseText', responseText)
    },
    failFn: function(allResponseHeader){
      console.log('fail')
      console.log('allResponseHeader',allResponseHeader)
    }
  })
})