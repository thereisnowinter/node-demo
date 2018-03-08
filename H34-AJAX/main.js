myButton.addEventListener('click',function(){
  let request = new XMLHttpRequest() // 创建
  request.open('GET', '/xxx', true) // 配置
  request.send() // 发送
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      // 请求响应都完毕了
      console.log('request.readyState', request.readyState)
      
      if(request.status >= 200 && request.status < 300){
        // 请求成功
        console.log('request.status', request.status)
        
        let string = request.responseText
        let obj = window.JSON.parse(string)
        console.log('statusText', request.statusText)
        console.log('typeof request.reponseText', typeof request.responseText)
        console.log('typeof JSON.parse(request.responseText)', typeof obj)
        console.log('request.responseText', string)
        console.log('JSON.parse(request.responseText)', obj)
      } else if(request.status >= 400){
        console.log('请求失败')
      }
    }
  }
})