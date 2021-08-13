
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://m.jingxi.com/jxbfd/user/ExchangePrize?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1628524747594&ptag=7155.9.47&dwType=3&dwLvl=28&ddwPaperMoney=1000&strPoolName=jxcfd2_exchange_hb_2021&strPgtimestamp=1628524747502&strPhoneID=741667a90b78a45be18722a7e937c0ab9c5086ef&strPgUUNum=07097b7b3e276053a89f960a5b76f9d5&_stk=_cfd_t%2CbizCode%2CddwPaperMoney%2CdwEnv%2CdwLvl%2CdwType%2Cptag%2Csource%2CstrPgUUNum%2CstrPgtimestamp%2CstrPhoneID%2CstrPoolName%2CstrZone&_ste=1&h5st=20210809235907595%3B3231285352820162%3B10032%3Btk01wd68d1cd4a8nVDZZVHNSb2UrsEujxFOtMrLQTezTohiptGRYJjqckT7SL58XI1FxlEwp4QJ3h%2F55ZkXfSHTexuSP%3Bcdc383fc89df9b4455d339dff4197eeb05bc4c359e74edc145e9b49db705d0d6&_=1628524747601&sceneval=2&g_login_type=1&g_ty=ls`;
const method = `GET`;
const headers = {
'Cookie' : `pt_key=xxx; pt_pin=xxx;`,
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`,
'Referer' : `https://st.jingxi.com/fortune_island/index2.html?ptag=7155.9.47`,
'Connection' : `keep-alive`,
'Host' : `m.jingxi.com`,
'User-Agent' : `jdpingou;iPhone;4.13.2;14.6;741667a90b78a45be18722a7e937c0ab9c5086ef;network/wifi;model/iPhone9,2;appBuild/100611;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/118;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    if(response.body.indexOf("ddwPaperMoney") != -1){    $notify("兑换一元成功", "", "请前往京喜财富岛查看")  }else {    $notify("兑换一元", "失败", "原因:奖品已经发完啦，下次早点来哦~")  }
console.log(`兑换日志\n\n 鹏哥，这次的兑换失败，原因是👉:${JSON.parse(response.body).sErrMsg}`);
 if(response.body.indexOf("ddwPaperMoney") != -1){    $console.log("兑换一元成功", "", "请前往京喜财富岛查看")  }else {    $notify("兑换日志", "失败", "鹏哥，这次的兑换原因是👉:奖品已经发完啦，下次早点来哦~")  }

 if(response.body.indexOf("ddwPaperMoney") != -1){    $console.log("兑换一元成功", "", "请前往京喜财富岛查看")  }else {    $notify("兑换日志", "失败", "鹏哥，这次的兑换原因是👉:奖品已经发完啦，下次早点来哦~")  }
 if(response.body.indexOf("ddwPaperMoney") != -1){    $console.log("兑换一元成功", "", "请前往京喜财富岛查看")  }else {    $notify("兑换日志", "失败", "鹏哥，这次的兑换原因是👉:奖品已经发完啦，下次早点来哦~")  }


 if(response.body.indexOf("ddwPaperMoney") != -1){    $console.log("兑换一元成功", "", "请前往京喜财富岛查看")  }else {    $notify("兑换日志", "失败", "鹏哥，这次的兑换原因是👉:奖品已经发完啦，下次早点来哦~")  }

 if(response.body.indexOf("ddwPaperMoney") != -1){    $console.log("兑换一元成功", "", "请前往京喜财富岛查看")  }else {    $notify("兑换日志", "失败", "鹏哥，这次的兑换原因是👉:奖品已经发完啦，下次早点来哦~")  }
    
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
