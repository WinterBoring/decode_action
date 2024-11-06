//Wed Nov 06 2024 07:05:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
axios.get("http://121.199.77.251:8888/week/text").then(_0xdd7941 => {
  console.log(_0xdd7941.data.replaceAll("<br/>", "\n"));
});
const ckLists = process.env.ckList,
  ksUrl = "https://nebula.kuaishou.com/rest/wd/encourage/unionTask/treasureBox/report",
  kkk = ckLists.split("====");
let ckList = [];
kkk.forEach(_0x1749e3 => {
  translateParam(_0x1749e3);
});
function translateParam(_0x19e214) {
  const _0x8c3a45 = _0x19e214.split("@");
  let _0x3e4f8b = {
    "name": _0x8c3a45[0],
    "sig3": _0x8c3a45[1],
    "cookie": _0x8c3a45[2],
    "agent": _0x8c3a45[3]
  };
  ckList.push(_0x3e4f8b);
}
async function response(_0x2ed738) {
  const {
    name: _0xdabcce,
    sig3: _0x5adf92,
    cookie: _0x416537,
    agent: _0x2697c4
  } = _0x2ed738;
  await axios.post(ksUrl, {}, {
    "params": {
      "__NS_sig3": _0x5adf92,
      "sigCatVer": "1"
    },
    "headers": {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "Content-Length": "2",
      "User-Agent": _0x2697c4,
      "content-type": "application/json",
      "Accept": "*/*",
      "Origin": "https://nebula.kuaishou.com",
      "X-Requested-With": "com.kuaishou.nebula",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://nebula.kuaishou.com/nebula/task/earning?layoutType=4&hyId=nebula_earning&source=bottom_guide_first",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": _0x416537
    }
  }).then(_0x437b47 => {
    const {
        title: _0x3ba343,
        progressBar: _0x4f6069
      } = _0x437b47.data.data,
      {
        text: _0x2d912f,
        rewardCount: _0x194224
      } = _0x3ba343;
    timestampToDate(_0x437b47.data.timestamp);
    console.log(_0xdabcce + " " + _0x2d912f + "：" + _0x194224 + " 金币");
    _0x4f6069.nodes.forEach(_0x2424ec => {
      const {
        desc: _0x42af06,
        rewardCount: _0x1be0b8,
        rewardUnit: _0x46a5c3
      } = _0x2424ec;
      if (_0x42af06 && !_0x1be0b8.includes("?")) {
        console.log(_0xdabcce + " " + _0x42af06 + ",金额:" + _0x1be0b8 + " " + _0x46a5c3);
      }
    });
  });
}
ckList.map(_0x223193 => {
  response(_0x223193);
});
function timestampToDate(_0x8b084d) {
  let _0x4addff = new Date(_0x8b084d),
    _0x516f56 = _0x4addff.getFullYear(),
    _0x3a42e5 = _0x4addff.getMonth() + 1,
    _0x355694 = _0x4addff.getDate(),
    _0x2dcfa4 = _0x4addff.getHours(),
    _0x126285 = _0x4addff.getMinutes(),
    _0x3d3c59 = _0x4addff.getSeconds();
  console.log(_0x516f56 + "-" + _0x3a42e5 + "-" + _0x355694 + " " + _0x2dcfa4 + ":" + _0x126285 + ":" + _0x3d3c59);
}