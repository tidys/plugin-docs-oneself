/*
POST /Username/Username/pages/rebuild HTTP/1.1
Host: gitee.com
Connection: keep-alive
Content-Length: 47
Origin: https://gitee.com
    X-CSRF-Token: ***********************
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Accept:
X-Requested-With: XMLHttpRequest
DNT: 1
Referer: https://gitee.com/Username/Username/pages
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
Cookie: cookies
*/

// POST /tidys/avg-video/pages/rebuild HTTP/1.1
// Accept: */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
// Cookie: user_locale=zh-CN; oschina_new_user=false; remote_way=ssh; tz=Asia%2FShanghai; remember_user_token=BAhbB1sGaQOJDghJIiIkMmEkMTAkLkRTdG9keWRySmkyNXkySFRjbElYLgY6BkVU--b0164dd7ada9db3391929d4b51b239517ddbcd5d; Hm_lvt_24f17767262929947cc3631f99bfd274=1586705692,1586783881,1586784684,1586784717; Hm_lpvt_24f17767262929947cc3631f99bfd274=1586785087; gitee-session-n=BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiJWRjODEwODEyYjA0ZGVhZTRkODI2YWYwOWU2M2YwYjVmBjsAVEkiGXdhcmRlbi51c2VyLnVzZXIua2V5BjsAVFsHWwZpA4kOCEkiIiQyYSQxMCQuRFN0b2R5ZHJKaTI1eTJIVGNsSVguBjsAVEkiHXdhcmRlbi51c2VyLnVzZXIuc2Vzc2lvbgY7AFR7BkkiFGxhc3RfcmVxdWVzdF9hdAY7AFRJdToJVGltZQ2tDR7Ahkx6mAk6CXpvbmVJIghVVEMGOwBGOg1uYW5vX251bWkCcwE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgc3EEkiEF9jc3JmX3Rva2VuBjsARkkiMTA5dHFJVDd6ZXB2RnJxNFFtNDdMTjZnVmV1ZlY5b3k2dldaelVYZkJEd289BjsARg%3D%3D--af91b5b6cc1d5134b726a01a314bc2535208aa20
// Connection: keep-alive
// Content-Length: 48
// Content-Type: application/x-www-form-urlencoded; charset=UTF-8
// Host: gitee.com
// Sec-Fetch-Dest: empty
// X-CSRF-Token: 09tqIT7zepvFrq4Qm47LN6gVeufV9oy6vWZzUXfBDwo=
// X-Requested-With: XMLHttpRequest
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36
// Origin: https://gitee.com
// Sec-Fetch-Site: same-origin
// Sec-Fetch-Mode: cors
// Referer: https://gitee.com/tidys/avg-video/pages


const Http = require('https');
let option = {
    hostname: 'gitee.com',
    path: '/tidys/plugin-docs-oneself/pages/rebuild',
    method: 'POST',
    headers: {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        'Connection': 'keep-alive',
        'Content-Length': '50',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'user_locale=zh-CN; oschina_new_user=false; remote_way=ssh; tz=Asia%2FShanghai; remember_user_token=BAhbB1sGaQOJDghJIiIkMmEkMTAkLkRTdG9keWRySmkyNXkySFRjbElYLgY6BkVU--b0164dd7ada9db3391929d4b51b239517ddbcd5d; Hm_lvt_24f17767262929947cc3631f99bfd274=1586705692,1586783881,1586784684,1586784717; Hm_lpvt_24f17767262929947cc3631f99bfd274=1586791790; gitee-session-n=BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiJWRjODEwODEyYjA0ZGVhZTRkODI2YWYwOWU2M2YwYjVmBjsAVEkiGXdhcmRlbi51c2VyLnVzZXIua2V5BjsAVFsHWwZpA4kOCEkiIiQyYSQxMCQuRFN0b2R5ZHJKaTI1eTJIVGNsSVguBjsAVEkiHXdhcmRlbi51c2VyLnVzZXIuc2Vzc2lvbgY7AFR7BkkiFGxhc3RfcmVxdWVzdF9hdAY7AFRJdToJVGltZQ2vDR7A7nOXdwk6CXpvbmVJIghVVEMGOwBGOg1uYW5vX251bWkC3gM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgaZSSIQX2NzcmZfdG9rZW4GOwBGSSIxMDl0cUlUN3plcHZGcnE0UW00N0xONmdWZXVmVjlveTZ2V1p6VVhmQkR3bz0GOwBG--24f976a34ce8e9d265fed9e47ca7f84c3dc5a53a',
        'Host': 'gitee.com',
        'Origin': 'https://gitee.com',
        'Referer': 'https://gitee.com/tidys/plugin-docs-oneself/pages',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
        'X-CSRF-Token': '09tqIT7zepvFrq4Qm47LN6gVeufV9oy6vWZzUXfBDwo=',
        'X-Requested-With': 'XMLHttpRequest',
    }

}
let req = Http.request(option, (res) => {
    var chunks = [];
    res.on('data', function (chunk) {
        chunks.push(chunk);
    })
    res.on('end', function () {
        // 目前还不知道是如何解码
        let buffer = Buffer.concat(chunks);
        let retData = buffer.toString()
        console.log(`返回的数据[${buffer.length}]：${retData}`);
    })
})
const querystring = require('querystring');
let postData = querystring.stringify({
    branch: 'gh-pages',
    'build_directory': '',
    'force_https': false,
})
req.on('error', e => {
    console.error(`请求遇到问题： ${e.message}`)
})
console.log(`发送的数据：${postData}`)
req.write(postData);
req.end()
