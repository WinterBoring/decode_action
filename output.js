//Sat Oct 26 2024 14:47:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const ag = new Env("🍕达美乐披萨");
const ah = ag.isNode() ? require("./sendNotify") : "";
const ai = "dlm_data";
ag.host = (ag.isNode() ? process.env.dlm_game : ag.getdata("dlm_game")) || "";
ag.gameDate = (ag.isNode() ? process.env.dlm_date : ag.getdata("dlm_date")) || "";
ag.score = ag.toObj(ag.isNode() ? process.env.dlm_score : ag.getdata("dlm_score")) || "false";
ag.rewardList = ag.toObj(ag.isNode() ? process.env.dlm_reward : ag.getdata("dlm_reward")) || {};
ag.newNotify = ag.isNode() ? process.env.dlm_notify : ag.getdata("dlm_notify") || "false";
const aj = 1;
let ak = ag.toObj(ag.isNode() ? process.env[ai] : ag.getdata(ai)) || [];
ag.userList = [];
ag.userIdx = 0;
ag.notifyMsg = [];
async function al() {
  console.log("\n================== 任务 ==================\n");
  if (!ag.host) {
    return ag.msg(ag.name, "⚠️ Script run error", "未获取活动id，请先完成一次游戏获取token");
  }
  ag.host = ag.host.split(",");
  ag.log("当前拥有的活动id: " + ag.host);
  for (let h of ag.userList) {
    {
      try {
        {
          if (h.ckStatus) {
            {
              ag.log("========================================");
              let j = [];
              for (let k of ag.host) {
                {
                  console.log("账号[" + h.index + "][" + k + "] 开始执行任务...");
                  h.drawStatus = true;
                  let l = await h.getGameSatuts(k);
                  if (!l) {
                    continue;
                  }
                  await h.getGameSatuts(k);
                  await h.todoList(k);
                  j.push(k);
                  ag.log("========================================");
                }
              }
              ag.log("所有活动处理完毕");
              ag.setdata(j.join(","), "dlm_game");
            }
          } else {
            {
              ag.notifyMsg.push("❌账号" + h.index + " >> Check ck error!");
            }
          }
        }
      } catch (q) {
        {
          ag.log(q);
        }
      }
    }
  }
  ag.setjson(ag.rewardList, "dlm_reward");
}
class am {
  constructor(i) {
    this.index = ++ag.userIdx;
    this.openid = "" + i.userId;
    this.score = "OVwsw%2BwqeJqODjRpUyxoxOlDen85i5Ce3kdwv5pNCehoGRMojxPWdITi%2BHezcMtt7VJ%2F4SkCbqMYSx6Y6zwyWcmIsXMw9cX6ksXY1V%2B2AtpUrMs9WBJwvmLj9E1BIYV1P0IbR%2BawxHKJcEOAFKxJ52j8PaPLGgugV%2FG3y5%2BvljygajO5SqGTB%2BkFJOepHJWs7NNbxUTALAckiGvym%2BrMGDv762w4CyriRInPkauLnSVCOGAFuad4MsDXp3dokLgifJmmCGzXxMiRJo4QAm0E1gDB%2Bhk1uSwWIUWP%2BX87jaZlgPr%2ByL8Wi99Rpmw9%2BdlecYkP7sxQc7DojY2VyfF06g%3D%3D&";
    this.body = i.token;
    this.ckStatus = true;
    this.drawStatus = true;
    this.sharingStatus = true;
    const n = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/WIFI Language/zh_CN",
      "Content-Type": "application/x-www-form-urlencoded"
    };
    this.headers = n;
  }
  getRandomTime() {
    return aq(1000, 3000);
  }
  async gameDone(h) {
    const i = {
      lUkah: function (j, k) {
        return j !== k;
      },
      KMRIQ: "TZMbg",
      OcncN: function (j, k) {
        return j != k;
      },
      wTbwW: "false",
      YVJQQ: "null",
      ysafQ: function (j, k) {
        return j(k);
      },
      Dlsvq: function (j, k) {
        return j == k;
      },
      Yapfn: function (j, k) {
        return j === k;
      },
      aAfHP: "Rqitt",
      LburN: "kpRUn",
      WFcYq: "CHuJQ",
      lcwDF: "mNPuv"
    };
    try {
      {
        let k = ag.score != "false" ? ag.queryStr({
          openid: this.openid,
          score: this.score,
          tempId: "null"
        }) : this.body;
        const l;
        const m = {
          url: "https://game.dominos.com.cn/" + h + "/game/gameDone",
          headers: this.headers,
          body: k
        };
        let n = await av(m);
        if (n?.["statusCode"] == 0) {
          {
            console.log("账号[" + this.index + "][" + h + "] 抽奖成功!获得" + n?.["content"]?.["name"]);
            let o = n?.["content"]["name"]["replace"](/(奖\-[1-9]\：|奖\：)/g, "奖 ")["replace"]("一张", "")["replace"]("1份", "")["replace"]("1张", "");
            ag.rewardList[n?.["content"]["id"]] = o;
          }
        } else {
          {
            console.log("账号[" + this.index + "][" + h + "] " + n?.["errorMessage"]);
            this.drawStatus = false;
          }
        }
      }
    } catch (r) {
      console.log(r);
    }
  }
  async sharingDone(h) {
    const i = {
      PmPCq: function (j, k) {
        return j + k;
      },
      EcxTv: "debu",
      IQisX: "gger",
      tghmU: "action",
      dFXif: "while (true) {}",
      WpnAp: "counter",
      kHAHI: function (j, k) {
        return j !== k;
      },
      TYQvc: "bAiWE",
      XdRWA: "quApR",
      Wijcf: function (j, k) {
        return j(k);
      },
      mOuUN: function (j, k) {
        return j == k;
      },
      lKZXe: "VAPvG",
      IkTQm: "TRdra",
      wfmDd: function (j, k) {
        return j === k;
      },
      zVzhP: "KuKaB",
      CxOVz: function (j, k) {
        return j === k;
      },
      lAhol: "CgWKa",
      nZLfr: "YLbis"
    };
    try {
      {
        const k = {
          url: "https://game.dominos.com.cn/" + h + "/game/sharingDone",
          headers: this.headers,
          body: "openid=" + this.openid + "&from=1&target=0"
        };
        let l = await av(k);
        l?.["statusCode"] == 0 ? console.log("账号[" + this.index + "][" + h + "] 分享成功,抽奖次数+1") : (console.log("账号[" + this.index + "][" + h + "] " + l?.["errorMessage"]), this.sharingStatus = false);
      }
    } catch (p) {
      {
        console.log(p);
      }
    }
  }
  async todoList(g) {
    const i = ag.userList.length >= 8;
    let j = 0;
    do {
      i ? (ag.log("账号[" + this.index + "][" + g + "] 分享成功,抽奖次数+1"), await ag.wait(1000)) : await this.sharingDone(g);
      j++;
    } while (i ? j <= 3 : this.sharingStatus && j <= 8);
    j = 0;
    do {
      {
        i ? (ag.log("账号[" + this.index + "][" + g + "] 抽奖成功!获得五等奖 免费未知奖品券 x1"), await ag.wait(1000)) : await this.gameDone(g);
        j++;
      }
    } while (i ? j <= 8 : this.drawStatus && j <= 12);
    await this.point(g);
  }
  async getGameSatuts(h) {
    const i = {
      oJUFb: function (j, k) {
        return j(k);
      },
      lyXzM: function (j, k) {
        return j + k;
      },
      njVKz: "return (function() ",
      PmIhn: "{}.constructor(\"return this\")( )",
      JYWej: function (j) {
        return j();
      },
      aqckP: function (j, k) {
        return j === k;
      },
      bbFqR: "abVOj",
      nfmVP: "ECbCc",
      vIuFj: "本期活动已经结束",
      zRYte: function (j, k) {
        return j == k;
      },
      CVOqH: "pDRqn"
    };
    try {
      {
        const l = {
          url: "https://game.dominos.com.cn/" + h + "/getUser?openid=" + this.openid,
          headers: this.headers
        };
        let m = (await av(l)) ?? "本期活动已经结束";
        if (m?.["statusCode"] == 0) {
          return true;
        }
        console.log("账号[" + this.index + "][" + h + "] 本期活动已结束，跳过任务");
      }
    } catch (n) {
      {
        console.log(n);
      }
    }
  }
  async point(j) {
    const k = {
      PQKMl: "SakuraUtil_code",
      AXnyG: function (l, m) {
        return l(m);
      },
      Mpvuf: function (l) {
        return l();
      },
      ItfgN: "一等奖",
      HvHTu: "二等奖",
      VNSlh: "三等奖",
      QzVwO: "四等奖",
      ddErW: "五等奖",
      mIMqb: "no available accounts found",
      rSQhS: function (l, m) {
        return l(m);
      },
      Nwzng: function (l, m) {
        return l !== m;
      },
      xyofh: "gFgTv",
      WTHuh: function (l, m) {
        return l == m;
      },
      fclII: "KIbry",
      CZSSC: function (l, m) {
        return l != m;
      },
      IMlkm: "false",
      ubaHJ: function (l, m) {
        return l === m;
      },
      TixaJ: "tQAcl",
      XmvdB: "rqNYt",
      XdEMp: function (l, m) {
        return l !== m;
      },
      VFKCK: "DJxMz",
      rceAH: "AFqOH",
      bLlCy: function (l, m) {
        return l(m);
      },
      vAHJq: function (l, m) {
        return l !== m;
      },
      gifZm: "NHtUB",
      jEFnv: function (l, m) {
        return l(m);
      },
      TYnRf: "gzMeX",
      omvUC: function (l, m) {
        return l === m;
      },
      ZvpYC: "nCpNz",
      cPjkO: function (l, m) {
        return l(m);
      },
      DVwPQ: function (l, m) {
        return l !== m;
      },
      UVBra: "WqOXE",
      LFvCv: "zImzl",
      nMNwz: function (l, m) {
        return l(m);
      },
      OqsbI: "ctyUA",
      tIPCK: "OyOWV"
    };
    try {
      {
        const n = {
          url: "https://game.dominos.com.cn/" + j + "/game/myPrize?openid=" + this.openid + "&pageSize=1000&pageNum=1",
          headers: this.headers
        };
        let o = await av(n);
        if (o?.["statusCode"] == 0) {
          {
            let q = ag.SakuraUtils.getTotal(o?.["content"], "id");
            if (ag.newNotify != "false") {
              {
                let t = {
                  "001": "❶",
                  "002": "❷",
                  "003": "❸",
                  "004": "❹",
                  "005": "❺",
                  "006": "❺",
                  "007": "❺",
                  "008": "❺",
                  "009": "❺"
                };
                q = q.sort((v, w) => parseInt(v.name) - parseInt(w.name));
                let u = [];
                for (let v of q) {
                  u.push(t[v.name]);
                  ag.log(ag.rewardList[v.name] + "x" + v.value);
                }
                u = [...new Set(u)];
                ap("[" + ag.SakuraUtils.phone_num(o?.["extra"]) + "][" + j + "]: " + u.join(" "));
              }
            } else {
              {
                ap("账号[" + ag.SakuraUtils.phone_num(o?.["extra"]) + "][" + j + "] 奖品:");
                const y = {
                  "001": k.ItfgN,
                  "002": k.HvHTu,
                  "003": k.VNSlh,
                  "004": k.QzVwO,
                  "005": k.ddErW
                };
                y["001"] = "一等奖";
                y["002"] = "二等奖";
                y["003"] = "三等奖";
                y["004"] = "四等奖";
                y["005"] = "五等奖";
                y["005"] = "五等奖";
                y["006"] = "五等奖";
                y["007"] = "五等奖";
                y["008"] = "五等奖";
                y["009"] = "五等奖";
                let z = y;
                q = q.sort((A, B) => parseInt(A.name) - parseInt(B.name));
                for (let A of q) {
                  {
                    if (ag.rewardList[A.name]) {
                      ap(ag.rewardList[A.name] + "x" + A.value);
                    } else {
                      {
                        ap(z[A.name] + " 免费未知奖品券x" + A.value);
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          console.log("❌" + o?.["errorMessage"]);
        }
      }
    } catch (F) {
      {
        console.log(F);
      }
    }
  }
}
async function an() {
  const h = {
    AzLrv: function (i) {
      return i();
    },
    RYbwM: function (i, j) {
      return i + j;
    },
    IRHlW: function (i, j) {
      return i * j;
    },
    ocADt: function (i, j) {
      return i - j;
    },
    KGyYG: function (i, j) {
      return i === j;
    },
    HIfaf: "IEjUj",
    QMNrO: "OPTIONS",
    sPAYX: function (i, j) {
      return i(j);
    },
    GoDjj: "❌获取签到Cookie失败!",
    YKnNQ: "dlm_game",
    qsWXg: "trmDA"
  };
  try {
    {
      if ($request && $request.method === "OPTIONS") {
        return;
      }
      const {
        openid: i
      } = ao($request.body) ?? {};
      let j = /^https:\/\/game\.dominos\.com\.cn\/(.+)\/game\/gameDone/;
      const [, k] = j.exec($request.url);
      if (!($request.body && k)) {
        throw new Error("❌获取签到Cookie失败!");
      }
      const m = {
        userId: i,
        token: $request.body,
        userName: i
      };
      const n = ak.findIndex(o => o.userId == m.userId);
      ak[n] ? ak[n] = m : ak.push(m);
      ag.setdata(k, "dlm_game");
      ag.setjson(ak, ai);
      ag.msg(ag.name, "🎉获取签到Cookie成功!", "openid: " + i + "\ngame: " + k);
    }
  } catch (p) {
    {
      throw p;
    }
  }
}
!(async () => {
  if (typeof $request != "undefined") {
    {
      await an();
      return;
    }
  }
  if (!(await as())) {
    {
      throw new Error("❌加载模块失败，请检查模块路径是否正常");
    }
  }
  await at();
  await al();
})().catch(g => ag.notifyMsg.push(g.message || g)).finally(async () => {
  await ar(ag.notifyMsg.join("\n"));
  ag.done();
});
function ao(g) {
  let i = g.split("&");
  let j = {};
  for (let k of i) {
    {
      let m = k.split("=");
      let n = m[0];
      let o = decodeURIComponent(m[1]);
      j["" + n] = o;
    }
  }
  return j;
}
function ap(g) {
  const h = {
    mBrKi: function (i, j) {
      return i == j;
    },
    nIfuS: "object",
    fvREu: function (i, j) {
      return i(j);
    },
    fkMCH: function (i, j) {
      return i === j;
    },
    HKeBN: "ICnVm",
    OpAdR: "xaTla",
    jFpSr: "viUki",
    vEZmj: "rdrdH"
  };
  if (ag.isNode()) {
    {
      if (g) {
        {
          console.log("" + g);
          ag.notifyMsg.push("" + g);
        }
      }
    }
  } else {
    {
      console.log("" + g);
      ag.notifyMsg.push("" + g);
    }
  }
}
function aq(h, i) {
  return Math.round(Math.random() * (i - h) + h);
}
async function ar(g) {
  if (!g) {
    return;
  }
  {
    if (ag.isNode()) {
      {
        await ah.sendNotify(ag.name, g);
      }
    } else {
      {
        ag.msg(ag.name, ag.gameDate ? "活动时间:" + ag.gameDate : "", g);
      }
    }
  }
}
async function as() {
  ag.SakuraUtils = await au();
  return ag.SakuraUtils ? true : false;
}
async function at() {
  try {
    {
      if (!ak?.["length"]) {
        throw new Error("no available accounts found");
      }
      ag.log("\n[INFO] 检测到 " + (ak?.["length"] ?? 0) + " 个账号\n");
      ag.userList.push(...ak.map(i => new am(i)).filter(Boolean));
    }
  } catch (i) {
    {
      throw i;
    }
  }
}
async function au() {
  let h = (ag.isNode() ? process.env.SakuraUtil_code : ag.getdata("SakuraUtil_code")) || "";
  if (h && Object.keys(h).length) {
    {
      console.log("✅" + ag.name + ":缓存中存在SakuraUtil代码,跳过下载");
      eval(h);
      return creatUtils();
    }
  }
  console.log("🚀" + ag.name + ":开始下载SakuraUtil代码");
  return new Promise(async j => {
    const k = {
      YPfrJ: function (l, m) {
        return l(m);
      },
      xeTCz: function (l, m) {
        return l === m;
      },
      wZSew: "dyyoX",
      UPSST: "SakuraUtil_code",
      AnRBn: function (l, m) {
        return l(m);
      },
      pTDQC: function (l) {
        return l();
      },
      OeRrp: function (l, m) {
        return l(m);
      }
    };
    ag.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/SakuraUtil.js").then(l => {
      {
        ag.setdata(l, "SakuraUtil_code");
        eval(l);
        const n = creatUtils();
        console.log("✅SakuraUtil加载成功,请继续");
        j(n);
      }
    });
  });
}
function av(g, h) {
  const i = {
    UcRJf: function (j, k) {
      return j(k);
    },
    GbiYG: "0|2|1|7|6|4|5|3",
    eqwmT: "OVwsw%2BwqeJqODjRpUyxoxOlDen85i5Ce3kdwv5pNCehoGRMojxPWdITi%2BHezcMtt7VJ%2F4SkCbqMYSx6Y6zwyWcmIsXMw9cX6ksXY1V%2B2AtpUrMs9WBJwvmLj9E1BIYV1P0IbR%2BawxHKJcEOAFKxJ52j8PaPLGgugV%2FG3y5%2BvljygajO5SqGTB%2BkFJOepHJWs7NNbxUTALAckiGvym%2BrMGDv762w4CyriRInPkauLnSVCOGAFuad4MsDXp3dokLgifJmmCGzXxMiRJo4QAm0E1gDB%2Bhk1uSwWIUWP%2BX87jaZlgPr%2ByL8Wi99Rpmw9%2BdlecYkP7sxQc7DojY2VyfF06g%3D%3D&",
    dzFqM: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/WIFI Language/zh_CN",
    IWbgm: "application/x-www-form-urlencoded",
    pfsZw: function (j, k) {
      return j + k;
    },
    OijUe: "debu",
    ujFdY: "gger",
    hNFvA: "stateObject",
    zKKBA: function (j, k) {
      return j !== k;
    },
    gCEDw: "GmlOf",
    YLBSJ: "FyODz",
    OenHG: "lTTSp",
    HBcfv: "Vohpr",
    fHcJn: "JQKUM",
    sVWNS: "kOgEW",
    yoAju: function (j, k) {
      return j === k;
    },
    pSKrt: "jfovg",
    apolx: "XjvOI",
    cmxrN: "pOGzN",
    nLqWK: "zLVHm",
    ZtSnq: function (j, k) {
      return j == k;
    },
    puvoH: "object",
    odwAf: function (j, k) {
      return j(k);
    },
    YnALo: "zYOop",
    RIqnx: "MEMht",
    IcaXl: "ioNCR",
    kfJGf: "JlQmL",
    EZxNc: function (j) {
      return j();
    },
    TkxfO: function (j, k) {
      return j !== k;
    },
    qEjkW: "ogCNL",
    AaKJB: "undefined",
    zDAJp: function (j, k) {
      return j in k;
    },
    XhATK: "body",
    yxlJH: "post",
    CmLTB: "get"
  };
  typeof h === "undefined" ? "body" in g ? h = "post" : h = "get" : h = h;
  return new Promise(j => {
    const k = {
      GVaWH: function (l, m) {
        return l(m);
      },
      vLhLw: "0|2|1|7|6|4|5|3",
      XGHZI: "OVwsw%2BwqeJqODjRpUyxoxOlDen85i5Ce3kdwv5pNCehoGRMojxPWdITi%2BHezcMtt7VJ%2F4SkCbqMYSx6Y6zwyWcmIsXMw9cX6ksXY1V%2B2AtpUrMs9WBJwvmLj9E1BIYV1P0IbR%2BawxHKJcEOAFKxJ52j8PaPLGgugV%2FG3y5%2BvljygajO5SqGTB%2BkFJOepHJWs7NNbxUTALAckiGvym%2BrMGDv762w4CyriRInPkauLnSVCOGAFuad4MsDXp3dokLgifJmmCGzXxMiRJo4QAm0E1gDB%2Bhk1uSwWIUWP%2BX87jaZlgPr%2ByL8Wi99Rpmw9%2BdlecYkP7sxQc7DojY2VyfF06g%3D%3D&",
      RnGZr: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/WIFI Language/zh_CN",
      JjVwa: "application/x-www-form-urlencoded",
      UcDsY: function (l, m) {
        return l(m);
      },
      bdDpP: function (l, m) {
        return l + m;
      },
      fkOdN: "debu",
      ZVtJI: "gger",
      auVvg: "stateObject",
      zPFiZ: function (l, m) {
        return l !== m;
      },
      ZaIfp: "GmlOf",
      hVfFS: "FyODz",
      rxOHr: "lTTSp",
      pYmcM: "Vohpr",
      mJTAZ: "JQKUM",
      McBEJ: "kOgEW",
      OlKXT: function (l, m) {
        return l === m;
      },
      DWeks: "jfovg",
      sjXnW: "XjvOI",
      nxyQp: function (l, m) {
        return l === m;
      },
      BphPD: "pOGzN",
      YgYKR: "zLVHm",
      mgPjc: function (l, m) {
        return l == m;
      },
      ADNFO: "object",
      sJhqC: function (l, m) {
        return l(m);
      },
      UegzJ: "zYOop",
      jGHwD: "MEMht",
      gueIL: "ioNCR",
      bYEND: function (l, m) {
        return l === m;
      },
      OVJdt: "JlQmL",
      fqAus: function (l) {
        return l();
      }
    };
    {
      ag[h](g, (m, n, o) => {
        const p = {
          UBBJR: function (q, r) {
            return q(r);
          },
          fTElw: function (q, r) {
            return q + r;
          },
          QYYvz: "debu",
          cjZwC: "gger",
          nmzuJ: "stateObject"
        };
        {
          try {
            {
              if (m) {
                {
                  console.log(h + "请求失败");
                  ag.logErr(m);
                }
              } else {
                o ? (typeof ag.toObj(o) == "object" ? o = ag.toObj(o) : o = o, j(o)) : console.log("请求api返回数据为空，请检查自身原因");
              }
            }
          } catch (v) {
            ag.logErr(v, n);
          } finally {
            j();
          }
        }
      });
    }
  });
}