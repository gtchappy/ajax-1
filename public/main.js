getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '2.js')
    request.onreadystatechange = () => {
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建script标签
                const script = document.createElement('script')
                //填写script内容
                script.innerHTML = request.response
                //插到身体里
                document.body.appendChild(script)
            }
            else {
                alert('加载css失败')
            }
        }
    }
    request.send()
}


getCSS.onclick = () => {
    // 创建 HttpRequest 对象（全称是 XMLHttpRequest）
    const request = new XMLHttpRequest();
    request.open('GET', '2.css');
    // 监听对象成功与否
    request.onload = () => {
        // console.log('request.response')
        // console.log(request.response)
        console.log('css成功了');

        //创建style标签
        const style = document.createElement('style')
        //填写style内容
        style.innerHTML = request.response
        //插到头里面
        document.head.appendChild(style)
    };
    request.onerror = () => {
        console.log('失败了');
    };
    // 发送请求
    request.send();
};

// 加载html
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.html')
    request.onload = () => {
        // console.log(request.response)
        // 创建div
        const div = document.createElement('div')
        // 填写div内容
        div.innerHTML = request.response
        // 插入到身体
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('加载2.html失败啦');
    }
    request.send()
}


getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.xml')
    request.onreadystatechange = () => {
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
            else {
                alert('加载xml失败啦')
            }
        }
    }
    request.send();
}


getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.json')
    request.onreadystatechange = () => {
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                // JSON.parse 将符合JSON语法的字符串变成对应的对象或者是其他东西
                const object = JSON.parse(request.response)
                myName.textContent = object.name
                console.log(object)
            }
            else {
                alert('加载2.json失败啦')
            }
        }
    }
    request.send();
}

let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
            }
            else {
                alert('加载失败啦')
            }
            n += 1
        }
    }
    request.send();
}



