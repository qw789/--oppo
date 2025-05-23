!(function () {
  var t = function () {
    return (() => {
      var t = {
          8211: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  data: {
                    tabIndex: 0,
                    tabItemList: $config.tabItemList,
                    isShowBanner: !1,
                    hasShowBanner: !1
                  },
                  onInit(t) {
                    t.show &&
                      ((this.isShowBanner = !0), (this.hasShowBanner = !0))
                  },
                  onTabChanged(t) {
                    ;(this.tabIndex = t),
                      0 != t
                        ? (this.isShowBanner = !1)
                        : this.hasShowBanner && (this.isShowBanner = !0),
                      $sdk.data.sendEvent("onTabChanged", {name: "index"})
                  }
                })
              const i = e.default || t.exports,
                n = ["public", "protected", "private"]
              if (
                i.data &&
                n.some(function (t) {
                  return i[t]
                })
              )
                throw new Error(
                  '页面VM对象中的属性data不可与"' +
                    n.join(",") +
                    '"同时存在，请使用private替换data名称'
                )
              i.data ||
                ((i.data = {}),
                (i._descriptor = {}),
                n.forEach(function (t) {
                  const e = typeof i[t]
                  if ("object" === e) {
                    i.data = Object.assign(i.data, i[t])
                    for (const e in i[t]) i._descriptor[e] = {access: t}
                  } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                }))
            }
          },
          316: (t, e, a) => {
            t.exports = function (t, e, i) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var n,
                s = (n = a(9316)) && n.__esModule ? n : {default: n}
              e.default = {
                props: ["dynamicBackground", "positionBanner"],
                data() {
                  return {
                    name: this.$parent().name,
                    isShow1112: !1,
                    isShow1101: $sdk.data.getData("isShow1101", this),
                    adAeraShow: !1,
                    adid: 128,
                    config: null,
                    adData: [{}],
                    isWC: !1,
                    debounce: !1,
                    adStatus: 0,
                    refeshTiming: null,
                    isNative: !1,
                    adParam: "2296053"
                  }
                },
                computed: {
                  bannerStyle() {
                    let t = ""
                    return (
                      (t += `height: 150px; bottom: ${
                        this.positionBanner || 0
                      }px;`),
                      t
                    )
                  },
                  appInfo() {
                    if (!this.adData[0]) return
                    const t = $sdk.ad.getScreenDensity(),
                      e = $sdk.ad.deviceInfo.windowHeight / t - 150,
                      a = this.isWC && !this.adData[0].clicked ? e : 0
                    return {
                      appX: 232 * t,
                      appY: (a + 76) * t,
                      privacyX: 470 * t,
                      privacyY: (a + 105) * t
                    }
                  }
                },
                onInit() {
                  this.reloadAd(),
                    $sdk.data.onEvent(
                      this,
                      "onShow",
                      async ({name: t}) => {
                        t != this.name ||
                          this.isShow1101 ||
                          this.debounce ||
                          (this.adStatus == $sdk.ad.event.SUCCESS &&
                            ($sdk.ad.reportAdEvent(
                              this.adid,
                              this.adData[0].adParam,
                              this.adData[0].adNo,
                              $sdk.ad.event.USERBACK
                            ),
                            await $sdk.helper.delay(400)),
                          (this.isShow1112 = !1),
                          this.reloadAd())
                      },
                      !0
                    ),
                    $sdk.data.onEvent(
                      this,
                      "showModal",
                      ({adid: t}) => {
                        t != this.adid ||
                          this.isShow1112 ||
                          this.debounce ||
                          ((this.isShow1112 = !1), this.reloadAd())
                      },
                      !0
                    )
                },
                async reloadAd() {
                  try {
                    this.isShow1112 = !0
                    let t = new s.default(),
                      e = `128_${new Date().getTime()}`,
                      a = await t.create_Native(
                        {
                          adNo: e,
                          adid: this.adid,
                          adParam: this.adParam,
                          isBidding: !0,
                          adidInfo: {},
                          isBanner: !0
                        },
                        this
                      )
                    a
                      ? ((this.adData = a),
                        (this.isShow1112 = !0),
                        (this.isNative = !0))
                      : ((this.isShow1112 = !1), (this.isNative = !1))
                  } catch (t) {}
                },
                adError(t, e) {
                  1106 != e.errCode && (this.isShow1112 = !1)
                },
                adShow() {
                  let {
                    adid: t,
                    adParam: e,
                    adData: [
                      {adNo: a, sp: i, imgUrlList: n, isBaidu: s, isTopOn: r}
                    ]
                  } = this
                  $sdk.ad.reportAdEvent(
                    t,
                    e,
                    a,
                    $sdk.ad.event.SHOW,
                    i,
                    n && n[0] ? n[0].split("/")[2] : ""
                  )
                },
                adClick() {
                  let {
                    adid: t,
                    adParam: e,
                    adData: [
                      {adNo: a, sp: i, imgUrlList: n, isBaidu: s, isTopOn: r}
                    ]
                  } = this
                  $sdk.ad.reportAdEvent(
                    t,
                    e,
                    a,
                    $sdk.ad.event.CLICK,
                    i,
                    n && n[0] ? n[0].split("/")[2] : ""
                  ),
                    (this.isShow1112 = !1)
                },
                close() {
                  this.isShow1112 = !1
                },
                d_btn_click() {
                  let {
                    adid: t,
                    adParam: e,
                    adData: [
                      {adNo: a, sp: i, imgUrlList: n, isBaidu: s, isTopOn: r}
                    ]
                  } = this
                  $sdk.ad.reportAdEvent(
                    t,
                    e,
                    a,
                    $sdk.ad.event.AUTODOWNLOAD,
                    i,
                    n && n[0] ? n[0].split("/")[2] : ""
                  )
                }
              }
            }
          },
          9694: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var i,
                n =
                  (i = a("@app-module/system.router")) && i.__esModule
                    ? i
                    : {default: i}
              e.default = {
                data: {
                  urlBG: "../images/",
                  Cumulative: "0",
                  best_results: "0",
                  ownRank: "",
                  showCP_160: !1,
                  bannerStyle: {},
                  answerlist: [
                    {
                      title: "自然",
                      img: "ziran",
                      background: "ziranbg",
                      num: 1
                    },
                    {
                      title: "生活",
                      img: "shegnhuo",
                      background: "shegnhuobg",
                      num: 0
                    },
                    {title: "体育", img: "tiyu", background: "tiyubg", num: 4},
                    {
                      title: "艺术",
                      img: "yishu",
                      background: "yishubg",
                      num: 6
                    },
                    {
                      title: "文学",
                      img: "wenhxue",
                      background: "wenxuebg",
                      num: 5
                    },
                    {title: "科学", img: "kexue", background: "kexuebg", num: 2}
                  ]
                },
                qaq(t, e) {
                  $sdk.ad.reportCustomEvent(this, "GAME_CHOOSE_CATEGORY", "OK"),
                    n.default.push({
                      uri: "pages/answer",
                      params: {key: t, titleTop: e}
                    })
                },
                async upDataPage() {
                  $sdk.ad.reportCustomEvent(
                    this,
                    "GAME_CHALLENGE_UPDATAPAGE",
                    "OK"
                  )
                  let t = await $sdk.utils.getStorage("lastTiozhanNUm")
                  this.Cumulative = "" == t ? 0 : t
                  let e = await $sdk.utils.getStorage("bestLianxunNUm")
                  this.best_results = "" == e ? 0 : e
                },
                async onInit() {
                  $sdk.ad.reportCustomEvent(this, "GAME_INIT_CHALLENGE", "OK"),
                    setTimeout(() => {
                      ;(this.showCP_160 = !1), (this.showCP_160 = !0)
                    }, 1e3),
                    this.$on("upDataPage", this.upDataPage),
                    this.getOwnRank()
                },
                start_challenge() {
                  $sdk.ad.reportCustomEvent(this, "GAME_CLICK_CHALLENGE", "OK"),
                    n.default.push({uri: "pages/answer", params: {key: 10}})
                },
                paihang() {
                  $sdk.ad.reportCustomEvent(
                    this,
                    "GAME_TO_RANKING_FROM_CHALLENGE",
                    "OK"
                  ),
                    n.default.push({uri: "pages/rankingList"})
                },
                async getOwnRank() {
                  let t = await $sdk.utils.getOwnRank()
                  this.ownRank = 0 == t ? "未上榜" : t
                }
              }
            }
          },
          2385: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var i = s(a("@app-module/system.router")),
                n =
                  (s(a("@app-module/system.storage")),
                  s(a("@app-module/system.webview")))
              function s(t) {
                return t && t.__esModule ? t : {default: t}
              }
              e.default = {
                data: {
                  title: "我的",
                  localNum: "0",
                  Cumulative: "0",
                  add_Cumulative: "0",
                  best_results: "0",
                  kefuShow: !1,
                  showAD_126: !1,
                  feedback: !1,
                  mainkefu: !1,
                  weixinkefu: !1,
                  bannerStyle: {}
                },
                changeBannerHeight(t) {
                  try {
                    ;(this.bannerHeight = t.detail.height),
                      0 == this.bannerHeight && this.hideBanner()
                  } catch (t) {}
                },
                async upDataPage() {
                  ;(this.add_Cumulative = await $sdk.utils.getStorage(
                    "allAnswerNum"
                  )),
                    (this.best_results = await $sdk.utils.getStorage(
                      "lianXuNum"
                    )),
                    (this.localNum = await $sdk.utils.getStorage("A")),
                    (this.Cumulative = await $sdk.utils.getStorage("B"))
                },
                async onInit() {
                  this.$on("upDataPage", this.upDataPage)
                },
                tool() {
                  i.default.push({uri: "pages/toolbox"})
                },
                le() {
                  i.default.push({uri: "pages/rankingList"})
                },
                dial_kefu() {
                  ;(this.mainkefu = !1),
                    setTimeout(() => {
                      this.mainkefu = !0
                    }, 0),
                    this.$broadcast("dial_kefu", {}),
                    $sdk.utils.customerReport()
                },
                Feedback() {
                  ;(this.feedback = !1),
                    setTimeout(() => {
                      this.feedback = !0
                    }, 0),
                    this.$broadcast("Feedback", {}),
                    $sdk.utils.customerReport()
                },
                kefu_vx() {
                  ;(this.weixinkefu = !1),
                    setTimeout(() => {
                      this.weixinkefu = !0
                    }, 0),
                    this.$broadcast("kefu_vx", {}),
                    $sdk.utils.customerReport()
                },
                ri() {
                  i.default.push({uri: "pages/"})
                },
                yhxy() {
                  n.default.loadUrl({
                    url: `https://mgdown-oss.sdkbalance.com/apk/rawnew/app/${$config.privacyName}/yhxy.html`,
                    showloadingdialog: !0,
                    allowthirdpartycookies: !0,
                    useragent: "用户协议"
                  })
                },
                yszc() {
                  n.default.loadUrl({
                    url: `https://mgdown-oss.sdkbalance.com/apk/rawnew/app/${$config.privacyName}/yszc.html`,
                    showloadingdialog: !0,
                    allowthirdpartycookies: !0,
                    useragent: "隐私政策"
                  })
                }
              }
            }
          },
          2466: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  props: ["left", "bottom", "top", "url"],
                  data() {
                    let t = ""
                    return (
                      (t += `left: ${this.left ? this.left : 0}px;`),
                      null != this.bottom
                        ? (t += `bottom: ${this.bottom ? this.bottom : 0}px;`)
                        : null != this.top &&
                          (t += `top: ${this.top ? this.top : 0}px;`),
                      {channel: $sdk.ad.channel(), style: t}
                    )
                  }
                })
            }
          },
          4039: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  data: {showFeedBack: !0},
                  closeFeedBack() {
                    ;(this.showFeedBack = !1), this.$emit("closeFeedBack", {})
                  },
                  beSure() {
                    $sdk.helper.showToast("已收到您的反馈"),
                      (this.showFeedBack = !1),
                      this.$emit("closeFeedBack", {})
                  }
                })
            }
          },
          9342: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  data: {showKefu: !0, showFeedBack: !1, showWeiXin: !1},
                  closeKeFu() {
                    this.showKefu = !1
                  },
                  copyMsg(t) {
                    $sdk.helper.addCopy(t), $sdk.helper.showToast("复制成功")
                  },
                  callKeFu() {
                    $sdk.helper.callKeFu()
                  },
                  complaint() {
                    ;(this.showFeedBack = !1),
                      setTimeout(() => {
                        this.showFeedBack = !0
                      }, 0)
                  },
                  showWX() {
                    ;(this.showWeiXin = !1),
                      setTimeout(() => {
                        this.showWeiXin = !0
                      }, 0)
                  }
                })
            }
          },
          1785: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var i,
                n =
                  (i = a("@app-module/system.app")) && i.__esModule
                    ? i
                    : {default: i}
              e.default = {
                data: {
                  appName: "",
                  showWeiXin: !0,
                  kefuimg:
                    "https://mgdown-oss.sdkbalance.com/mg/QuickApp/sdk/weixinCode.png"
                },
                onInit() {
                  this.appName = n.default.getInfo().name
                },
                closeWeiXin() {
                  this.showWeiXin = !1
                },
                async savephoto() {
                  ;(await $sdk.helper.downloadPic(this.kefuimg)) &&
                    ($sdk.helper.showToast("已保存到相册"),
                    (this.showWeiXin = !1))
                }
              }
            }
          },
          2414: (t) => {
            t.exports = {
              ".qaui-wrap": {
                background:
                  '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#e4fefa","#ecedff"]}]}',
                flexDirection: "column",
                backgroundRepeat: "no-repeat",
                backgroundSize: "120% 100%",
                backgroundPosition: "-10px -10px"
              },
              ".item-content": {flexDirection: "column"},
              ".item-content text": {
                color: "#FF0000",
                fontSize: "13px",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "item-content"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".tab-content": {width: "100%", height: "100%"},
              ".tab-bar": {
                width: "100%",
                height: "100px",
                backgroundColor: "#ffffff",
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: "#bfbfbf",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              },
              ".tab-bar .item": {
                width: "150px",
                height: "60px",
                borderRadius: "14px",
                backgroundColor: "#ffffff",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "tab-bar"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "item"}
                  ]
                }
              },
              ".tab-bar .item .text": {
                borderRadius: "14px",
                paddingTop: "0px",
                paddingRight: "15px",
                paddingBottom: "0px",
                paddingLeft: "15px",
                textAlign: "center",
                fontSize: "28px",
                lineHeight: "60px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "tab-bar"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "item"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "text"}
                  ]
                }
              },
              ".tab-bar .item .selectedText": {
                color: "#ffffff",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "tab-bar"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "item"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "selectedText"}
                  ]
                }
              },
              ".tab-bar .selectedTab": {
                backgroundColor: "#0081ff",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "tab-bar"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "selectedTab"}
                  ]
                }
              },
              ".item-container": {
                flex: 1,
                flexDirection: "column",
                backgroundColor: "#ffffff"
              },
              ".dialg-div": {
                width: "100%",
                height: "100%",
                backgroundColor: "#a9a9a9",
                position: "fixed",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                zIndex: 9999999
              },
              ".pop_div": {
                width: "100%",
                height: "100%",
                position: "fixed",
                justifyContent: "flex-end",
                backgroundColor: "rgba(0,0,0,0.6)"
              },
              ".dialg-bg": {
                width: "70%",
                height: "50%",
                marginTop: "200px",
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column"
              },
              ".title": {
                width: "70%",
                height: "50px",
                fontSize: "30px",
                color: "#000000",
                marginTop: "10px",
                textAlign: "center"
              },
              ".bt-div": {
                width: "80%",
                height: "100px",
                alignContent: "center"
              },
              ".btn-style": {
                width: "70%",
                height: "60px",
                fontSize: "30px",
                color: "#000000",
                textAlign: "center",
                borderRadius: "20px",
                backgroundColor: "#079bf4"
              },
              ".InterstitialDiv": {
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,0.5)"
              },
              ".tabbar": {
                width: "100%",
                height: "110px",
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "9px",
                position: "fixed",
                bottom: "0px",
                backgroundColor: "#ffffff",
                borderTopWidth: "2px",
                borderTopStyle: "solid",
                borderTopColor: "#808080"
              },
              ".tabbar .tabbar_box": {
                width: "189px",
                height: "100px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "tabbar"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "tabbar_box"}
                  ]
                }
              },
              ".tabbar .tabbar_box .tabbar_img": {
                width: "60px",
                height: "60px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "tabbar"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "tabbar_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "tabbar_img"}
                  ]
                }
              },
              ".tabbar .tabbar_xx": {
                position: "absolute",
                top: "15px",
                left: "344px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "tabbar"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "tabbar_xx"}
                  ]
                }
              },
              ".tabbar_tit": {
                color: "#333333",
                fontSize: "27px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder"
              },
              ".tabbar_wei": {
                color: "#62d39b",
                fontSize: "27px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder"
              }
            }
          },
          3141: (t) => {
            t.exports = {
              ".videoBanner": {
                position: "fixed",
                left: "0px",
                bottom: "0px",
                width: "100%",
                flexDirection: "column"
              },
              ".videoBanner .adNative": {
                width: "100%",
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "videoBanner"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adNative"}
                  ]
                }
              },
              ".adContent": {width: "100%", height: "100%"},
              ".adContent .closeBtn": {
                position: "absolute",
                right: "4px",
                bottom: "4px",
                width: "40px",
                height: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "closeBtn"}
                  ]
                }
              },
              ".adContent .adClickArea": {
                alignItems: "flex-start",
                position: "absolute",
                bottom: "0px",
                width: "100%",
                height: "150px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClickArea"}
                  ]
                }
              },
              ".adContent .adClickArea .left": {
                marginTop: "18px",
                marginRight: "16px",
                marginBottom: "18px",
                marginLeft: "16px",
                width: "201px",
                height: "114px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClickArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "left"}
                  ]
                }
              },
              ".adContent .adClickArea .left .adResource": {
                width: "100%",
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClickArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "left"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adResource"}
                  ]
                }
              },
              ".adContent .adClickArea .center": {
                flexDirection: "column",
                flex: 1,
                height: "114px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClickArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "center"}
                  ]
                }
              },
              ".adContent .adClickArea .center .adTitle text": {
                fontSize: "28px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bold",
                color: "#37342e",
                lines: 1,
                textOverflow: "ellipsis",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClickArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "center"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adTitle"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".adContent .adClickArea .center .adDesc text": {
                fontSize: "22px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#49443b",
                lines: 1,
                textOverflow: "ellipsis",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClickArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "center"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adDesc"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".adContent .adClickArea .right": {
                marginRight: "35px",
                width: "169px",
                height: "114px",
                flexDirection: "column",
                alignItems: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClickArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "right"}
                  ]
                }
              },
              ".adContent .adClickArea .right .textButton": {
                width: "169px",
                height: "64px",
                paddingTop: "0px",
                paddingRight: "26px",
                paddingBottom: "0px",
                paddingLeft: "26px",
                borderRadius: "32px",
                fontSize: "28px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#ffffff",
                backgroundColor: "#fa7053",
                animationName: "animation",
                animationDuration: "800ms",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: -1,
                animationFillMode: "forwards",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClickArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "right"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "textButton"}
                  ]
                }
              },
              ".adContent .mask": {
                position: "absolute",
                width: "100%",
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mask"}
                  ]
                }
              },
              ".adContent .adButton": {
                position: "absolute",
                right: "35px",
                bottom: "86px",
                width: "169px",
                height: "64px",
                paddingTop: "0px",
                paddingRight: "26px",
                paddingBottom: "0px",
                paddingLeft: "26px",
                borderRadius: "32px",
                fontSize: "28px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#ffffff",
                backgroundColor: "#fa7053",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderStyle: "solid",
                borderTopColor: "#fa7053",
                borderRightColor: "#fa7053",
                borderBottomColor: "#fa7053",
                borderLeftColor: "#fa7053",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adButton"}
                  ]
                }
              }
            }
          },
          78: (t) => {
            t.exports = {
              ".wrapper": {
                height: "1400px",
                backgroundRepeat: "no-repeat",
                position: "relative",
                backgroundSize: "cover",
                flexDirection: "column"
              },
              ".wrapper .wrapper_top": {
                width: "100%",
                height: "276px",
                justifyContent: "space-between",
                paddingLeft: "32px",
                paddingRight: "22px",
                alignItems: "center",
                position: "relative",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_top"}
                  ]
                }
              },
              ".wrapper .wrapper_top .right_text": {
                fontSize: "25px",
                color: "#aa69fb",
                position: "absolute",
                top: "167px",
                left: "637px",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "right_text"}
                  ]
                }
              },
              ".wrapper .wrapper_top .right_img": {
                width: "116px",
                height: "129px",
                position: "absolute",
                top: "20px",
                left: "615px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "right_img"}
                  ]
                }
              },
              ".wrapper .wrapper_top .top_text text": {
                color: "#333333",
                fontSize: "40px",
                lineHeight: "40px",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_text"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".wrapper .wrapper_top .top_right": {
                width: "109px",
                height: "109px",
                backgroundImage: "/pages/tabbar/images/rankbg.png",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_right"}
                  ]
                }
              },
              ".wrapper .wrapper_mid": {
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",
                flexDirection: "column",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_answer": {
                width: "694px",
                height: "506px",
                marginLeft: "32px",
                marginRight: "32px",
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "space-between",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_answer"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_answer .answer": {
                width: "343px",
                height: "159px",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_answer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "answer"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_answer .answer .answerBg": {
                position: "absolute",
                width: "100%",
                top: "0px",
                left: "0px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_answer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "answer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "answerBg"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_answer .answer .answer_text": {
                marginLeft: "44px",
                fontSize: "35px",
                color: "#ffffff",
                fontWeight: "bold",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_answer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "answer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "answer_text"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_answer .answer .answer_img": {
                marginRight: "28px",
                marginTop: "19px",
                width: "115px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_answer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "answer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "answer_img"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_fenlei": {
                width: "209px",
                height: "53px",
                backgroundColor: "#e9f1fe",
                borderRadius: "27px",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: "18px",
                paddingRight: "22px",
                marginTop: "47px",
                marginLeft: "15px",
                marginBottom: "80px",
                justifyContent: "space-between",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_fenlei"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_fenlei .fenlei_img": {
                width: "52px",
                height: "29px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_fenlei"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "fenlei_img"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_fenlei text": {
                color: "#333333",
                fontSize: "28px",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_fenlei"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_tiaozhan": {
                width: "209px",
                height: "53px",
                backgroundColor: "#e9f1fe",
                borderRadius: "27px",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: "18px",
                paddingRight: "22px",
                marginTop: "47px",
                marginLeft: "15px",
                marginBottom: "80px",
                justifyContent: "space-between",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "mid_tiaozhan"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_tiaozhan .tiaozhan_img": {
                width: "44px",
                height: "44px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "mid_tiaozhan"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "tiaozhan_img"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .mid_tiaozhan text": {
                color: "#333333",
                fontSize: "28px",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "mid_tiaozhan"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .Start_challenging": {
                width: "100%",
                height: "168px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: "32px",
                paddingRight: "22px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Start_challenging"
                    }
                  ]
                }
              },
              ".wrapper .wrapper_mid .Start_challenging .start_img": {
                width: "129px",
                height: "139px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Start_challenging"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "start_img"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .Start_challenging .con": {
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "104px",
                paddingRight: "80px",
                backgroundImage: "/pages/tabbar/images/msgtiaozhanbg.png",
                backgroundSize: "100% 100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Start_challenging"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con"}
                  ]
                }
              },
              ".wrapper .wrapper_mid .Start_challenging .con .con_text .con_rank":
                {
                  width: "300px",
                  height: "160px",
                  fontSize: "26px",
                  display: "flex",
                  flexDirection: "column",
                  _meta: {
                    ruleDef: [
                      {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                      {t: "d"},
                      {
                        t: "a",
                        n: "class",
                        i: !1,
                        a: "element",
                        v: "wrapper_mid"
                      },
                      {t: "d"},
                      {
                        t: "a",
                        n: "class",
                        i: !1,
                        a: "element",
                        v: "Start_challenging"
                      },
                      {t: "d"},
                      {t: "a", n: "class", i: !1, a: "element", v: "con"},
                      {t: "d"},
                      {t: "a", n: "class", i: !1, a: "element", v: "con_text"},
                      {t: "d"},
                      {t: "a", n: "class", i: !1, a: "element", v: "con_rank"}
                    ]
                  }
                },
              ".wrapper .wrapper_mid .Start_challenging .con .con_text .con_rank text":
                {
                  color: "#473c82",
                  _meta: {
                    ruleDef: [
                      {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                      {t: "d"},
                      {
                        t: "a",
                        n: "class",
                        i: !1,
                        a: "element",
                        v: "wrapper_mid"
                      },
                      {t: "d"},
                      {
                        t: "a",
                        n: "class",
                        i: !1,
                        a: "element",
                        v: "Start_challenging"
                      },
                      {t: "d"},
                      {t: "a", n: "class", i: !1, a: "element", v: "con"},
                      {t: "d"},
                      {t: "a", n: "class", i: !1, a: "element", v: "con_text"},
                      {t: "d"},
                      {t: "a", n: "class", i: !1, a: "element", v: "con_rank"},
                      {t: "d"},
                      {t: "t", n: "text"}
                    ]
                  },
                  width: "300px",
                  height: "60px"
                },
              ".wrapper .wrapper_mid .Start_challenging .con .con_start": {
                width: "249px",
                height: "60px",
                textAlign: "center",
                color: "#ffffff",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "bolder",
                fontSize: "43px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_mid"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Start_challenging"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con_start"}
                  ]
                }
              },
              ".wrapper .master_rank": {
                position: "absolute",
                top: "20px",
                left: "-80px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "master_rank"}
                  ]
                }
              },
              ".achievement": {
                width: "120px",
                height: "120px",
                position: "absolute",
                top: "30px",
                right: "55px",
                borderRadius: "50%"
              },
              ".achievement .img": {
                width: "80px",
                position: "absolute",
                top: "25px",
                left: "20px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "achievement"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "img"}
                  ]
                }
              },
              ".chengjiu": {
                position: "absolute",
                backgroundImage: "/pages/tabbar/images/anniu.png",
                backgroundSize: "100% 100%",
                top: "120px",
                right: "35px",
                fontFamily: "Adobe Heiti Std",
                paddingTop: "6px",
                paddingRight: "30px",
                paddingBottom: "6px",
                paddingLeft: "30px",
                borderRadius: "26px",
                color: "#850404"
              },
              ".Rank": {
                width: "120px",
                height: "120px",
                position: "absolute",
                top: "210px",
                right: "40px",
                borderRadius: "50%"
              },
              ".Rank .img": {
                width: "80px",
                position: "absolute",
                top: "34px",
                left: "20px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "Rank"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "img"}
                  ]
                }
              },
              ".paihang": {
                position: "absolute",
                backgroundImage: "/pages/tabbar/images/anniu.png",
                top: "308px",
                right: "32px",
                paddingTop: "6px",
                paddingRight: "30px",
                paddingBottom: "6px",
                paddingLeft: "30px",
                borderRadius: "26px",
                color: "#850404"
              },
              ".garden": {
                width: "50px",
                height: "50px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                borderTopWidth: "2px",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderLeftWidth: "2px",
                borderStyle: "solid",
                borderTopColor: "#4073e6",
                borderRightColor: "#4073e6",
                borderBottomColor: "#4073e6",
                borderLeftColor: "#4073e6",
                marginRight: "10px",
                marginTop: "6px"
              },
              ".icon_P": {width: "30px"}
            }
          },
          5221: (t) => {
            t.exports = {
              ".wrapper": {
                width: "750px",
                height: "1500px",
                justifyContent: "center"
              },
              ".kuang": {
                width: "750px",
                height: "1400px",
                justifyContent: "center"
              },
              ".con": {
                width: "80%",
                marginTop: "50px",
                flexDirection: "column",
                backgroundColor: "#ffffff",
                borderTopLeftRadius: "31px",
                borderTopRightRadius: "31px"
              },
              ".kefu": {position: "fixed", top: "150px", right: "30px"},
              ".kf": {
                width: "100%",
                height: "100%",
                position: "fixed",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.3)"
              },
              ".kf .kf_box": {
                width: "425px",
                height: "313px",
                backgroundColor: "#ffffff",
                borderRadius: "30px",
                alignItems: "center",
                flexDirection: "column",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"}
                  ]
                }
              },
              ".kf .kf_box .lxkf": {
                width: "100%",
                height: "77px",
                justifyContent: "center",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                backgroundColor: "#fdf7dd",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "lxkf"}
                  ]
                }
              },
              ".kf .kf_box .lxkf image": {
                width: "23px",
                height: "23px",
                position: "absolute",
                top: "20px",
                right: "20px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "lxkf"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".kf .kf_box .lxkf text": {
                fontSize: "28px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#6f6f6f",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "lxkf"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".kf .kf_box .kf_xq": {
                fontSize: "24px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#6f6f6f",
                marginTop: "30px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_xq"}
                  ]
                }
              },
              ".con .myanswer": {
                width: "260px",
                height: "150px",
                position: "relative",
                top: "-74px",
                right: "0px",
                fontSize: "35px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "myanswer"}
                  ]
                }
              },
              ".con .myanswer .myanswer_img": {
                position: "absolute",
                left: "8px",
                top: "90px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "myanswer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "myanswer_img"}
                  ]
                }
              },
              ".con .myanswer text": {
                width: "150px",
                height: "150px",
                fontSize: "35px",
                color: "#ffffff",
                position: "absolute",
                top: "34px",
                left: "62px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "myanswer"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".con .topDiv": {
                flexDirection: "column",
                paddingTop: "0px",
                paddingRight: "50px",
                paddingBottom: "0px",
                paddingLeft: "50px",
                marginBottom: "50px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "topDiv"}
                  ]
                }
              },
              ".topItem": {
                backgroundImage: "/pages/tabbar/images/msgtiaozhanbg.png",
                backgroundSize: "100% 100%",
                width: "100%",
                height: "100px",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "space-around",
                marginBottom: "30px"
              },
              ".top": {
                fontSize: "35px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                color: "#ffffff"
              },
              ".bot": {
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                color: "#ffffff"
              },
              ".topItem_1": {
                backgroundImage: "/pages/tabbar/images/listans.png",
                backgroundSize: "100% 100%",
                width: "100%",
                height: "100px",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "space-around"
              },
              ".topItem_1 .top": {
                fontSize: "35px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                color: "#ffffff",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "topItem_1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top"}
                  ]
                }
              },
              ".topItem_1 .bot": {
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                color: "#ffffff",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "topItem_1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "bot"}
                  ]
                }
              },
              ".achievement": {
                width: "83%",
                height: "49px",
                marginTop: "10px",
                justifyContent: "space-between",
                marginBottom: "20px",
                textAlign: "center",
                alignItems: "center",
                marginLeft: "50px",
                backgroundColor: "#fdf7dd",
                borderRadius: "25px",
                paddingLeft: "23px",
                paddingRight: "15px"
              },
              ".le": {
                fontSize: "24px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                color: "#6f6f6f"
              },
              ".ri": {
                fontSize: "45px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#6f6f6f"
              },
              ".firstItem": {marginTop: "44px"},
              ".yinsi": {marginTop: "86px", backgroundColor: "#ffe9df"},
              ".yonghu": {marginTop: "0px", backgroundColor: "#e6f9fb"}
            }
          },
          2391: (t) => {
            t.exports = {
              ".logo": {position: "absolute", width: "80px", height: "42px"},
              ".logo image": {
                width: "100%",
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "logo"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              }
            }
          },
          5791: (t) => {
            t.exports = {
              ".feedback": {
                position: "fixed",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.6)"
              },
              ".feedback .feedback_box": {
                width: "600px",
                backgroundColor: "#ffffff",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "13px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback_box"}
                  ]
                }
              },
              ".feedback .feedback_box .top": {
                fontSize: "50px",
                marginTop: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top"}
                  ]
                }
              },
              ".feedback .feedback_box .reason": {
                width: "100%",
                marginLeft: "40px",
                fontWeight: "bold",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "reason"}
                  ]
                }
              },
              ".feedback .feedback_box .range": {
                width: "100%",
                marginLeft: "20px",
                marginBottom: "10px",
                flexDirection: "column",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "range"}
                  ]
                }
              },
              ".feedback .feedback_box .range .range_list": {
                alignItems: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "range"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "range_list"}
                  ]
                }
              },
              ".feedback .feedback_box .specific": {
                width: "100%",
                height: "100px",
                paddingLeft: "30px",
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: "#bababa",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "specific"}
                  ]
                }
              },
              ".feedback .feedback_box .specific text": {
                width: "40%",
                color: "#000000",
                fontWeight: "bold",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "specific"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".feedback .feedback_box .specific input": {
                fontSize: "26px",
                color: "#acacac",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "specific"},
                    {t: "d"},
                    {t: "t", n: "input"}
                  ]
                }
              },
              ".feedback .feedback_box .complain": {
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: "#bababa",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "complain"}
                  ]
                }
              },
              ".feedback .feedback_box .complain text": {
                height: "100px",
                marginTop: "20px",
                marginRight: "20px",
                marginBottom: "20px",
                marginLeft: "20px",
                textAlign: "center",
                paddingTop: "6px",
                paddingRight: "80px",
                paddingBottom: "6px",
                paddingLeft: "80px",
                borderRadius: "50px",
                color: "#ffffff",
                backgroundColor: "#FF0000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "feedback"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "feedback_box"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "complain"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              }
            }
          },
          2601: (t) => {
            t.exports = {
              ".dynamic_kefu": {
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,0.6)"
              },
              ".dynamic_kefu image": {
                position: "absolute",
                top: "360px",
                right: "84px",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "dynamic_kefu"
                    },
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".dynamic_kefu ._kefuBox": {
                width: "510px",
                height: "680px",
                marginTop: "auto",
                marginRight: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                alignItems: "center",
                borderRadius: "13px",
                flexDirection: "column",
                backgroundColor: "#ffffff",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "dynamic_kefu"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "_kefuBox"}
                  ]
                }
              },
              ".dynamic_kefu ._kefuBox .title": {
                fontSize: "50px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bold",
                color: "#000000",
                marginTop: "36px",
                marginBottom: "60px",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "dynamic_kefu"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "_kefuBox"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "title"}
                  ]
                }
              },
              ".dynamic_kefu ._kefuBox .kf_xq": {
                width: "100%",
                marginTop: "30px",
                paddingLeft: "70px",
                paddingRight: "30px",
                justifyContent: "space-between",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "dynamic_kefu"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "_kefuBox"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_xq"}
                  ]
                }
              },
              ".dynamic_kefu ._kefuBox .kf_xq text": {
                fontSize: "24px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bold",
                color: "#b04237",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "dynamic_kefu"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "_kefuBox"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_xq"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".dynamic_kefu ._kefuBox input": {
                width: "382px",
                height: "96px",
                marginTop: "50px",
                borderRadius: "13px",
                backgroundColor: "#f87f2e",
                fontSize: "32px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#ffffff",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "dynamic_kefu"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "_kefuBox"},
                    {t: "d"},
                    {t: "t", n: "input"}
                  ]
                }
              },
              ".dynamic_kefu ._kefuBox .kefuEnd": {
                width: "50px",
                height: "50px",
                position: "absolute",
                top: "10px",
                right: "10px",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "dynamic_kefu"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "_kefuBox"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kefuEnd"}
                  ]
                }
              }
            }
          },
          6130: (t) => {
            t.exports = {
              ".kf_vx": {
                width: "100%",
                height: "100%",
                position: "fixed",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.3)"
              },
              ".kf_vx .fMask": {
                position: "absolute",
                width: "560px",
                height: "828px",
                justifyContent: "center",
                alignItems: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "fMask"}
                  ]
                }
              },
              ".kf_vx .fMask .qiu": {
                width: "128px",
                height: "128px",
                position: "absolute",
                top: "0px",
                left: "216px",
                borderRadius: "50%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "fMask"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "qiu"}
                  ]
                }
              },
              ".kf_vx .kf_box": {
                width: "560px",
                height: "700px",
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                alignItems: "center",
                flexDirection: "column",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"}
                  ]
                }
              },
              ".kf_vx .kf_box .huifu": {
                width: "390px",
                height: "22px",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "60px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "huifu"}
                  ]
                }
              },
              ".kf_vx .kf_box .huifu text": {
                fontSize: "22px",
                lineHeight: "22px",
                color: "#606060",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "huifu"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".kf_vx .kf_box .vximg": {
                width: "248px",
                height: "242px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "vximg"}
                  ]
                }
              },
              ".kf_vx .kf_box .savephoto": {
                marginTop: "50px",
                fontSize: "50px",
                height: "90px",
                fontWeight: "bolder",
                paddingTop: "6px",
                paddingRight: "50px",
                paddingBottom: "12px",
                paddingLeft: "50px",
                color: "#ac662a",
                borderTopWidth: "2px",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderLeftWidth: "2px",
                borderStyle: "solid",
                borderTopColor: "#ac662a",
                borderRightColor: "#ac662a",
                borderBottomColor: "#ac662a",
                borderLeftColor: "#ac662a",
                borderRadius: "90px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "savephoto"}
                  ]
                }
              },
              ".kf_vx .kf_box .lxkf": {
                width: "100%",
                height: "40px",
                justifyContent: "center",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                backgroundColor: "#ffffff",
                alignItems: "center",
                marginTop: "76px",
                marginBottom: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "lxkf"}
                  ]
                }
              },
              ".kf_vx .kf_box .lxkf .exclusivekf": {
                marginLeft: "15px",
                width: "120px",
                height: "33px",
                fontSize: "20px",
                paddingTop: "6px",
                paddingRight: "19px",
                paddingBottom: "6px",
                paddingLeft: "15px",
                color: "#e6562f",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderStyle: "solid",
                borderTopColor: "#e6562f",
                borderRightColor: "#e6562f",
                borderBottomColor: "#e6562f",
                borderLeftColor: "#e6562f",
                borderRadius: "33px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "lxkf"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "exclusivekf"}
                  ]
                }
              },
              ".kf_vx .kf_box .lxkf image": {
                width: "23px",
                height: "23px",
                position: "absolute",
                top: "20px",
                right: "20px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "lxkf"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".kf_vx .kf_box .lxkf text": {
                fontSize: "40px",
                fontFamily: "Microsoft YaHei",
                color: "#000000",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "lxkf"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".kf_vx .kf_box .end_kefuvxShow": {
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "40px",
                height: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "end_kefuvxShow"
                    }
                  ]
                }
              },
              ".kf_vx .kf_box .kf_xq": {
                fontSize: "24px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#3584c0",
                marginTop: "30px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_vx"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_xq"}
                  ]
                }
              }
            }
          },
          7693: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["qaui-wrap"],
              children: [
                {
                  type: "block",
                  attr: {},
                  children: [
                    {
                      type: "challenge-page",
                      attr: {},
                      shown: function () {
                        return 0 == this.tabIndex
                      }
                    },
                    {
                      type: "my-page",
                      attr: {},
                      shown: function () {
                        return 1 == this.tabIndex
                      }
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["tabbar"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["tabbar_box"],
                          repeat: function () {
                            return this.tabItemList
                          },
                          events: {
                            click: function (t) {
                              return this.onTabChanged(this.$idx, t)
                            }
                          },
                          children: [
                            {
                              type: "image",
                              attr: {
                                src: function () {
                                  return this.$item.icon_one
                                }
                              },
                              shown: function () {
                                return this.$idx == this.tabIndex
                              },
                              classList: ["tabbar_img"]
                            },
                            {
                              type: "image",
                              attr: {
                                src: function () {
                                  return this.$item.icon_Tow
                                }
                              },
                              shown: function () {
                                return this.$idx != this.tabIndex
                              },
                              classList: ["tabbar_img"]
                            },
                            {
                              type: "text",
                              attr: {
                                value: function () {
                                  return this.$item.title
                                }
                              },
                              style: {
                                left: function () {
                                  return (
                                    (3 == this.tabIndex ? "30px" : "45px") +
                                    " top:30px"
                                  )
                                }
                              },
                              classList: function () {
                                return [
                                  "tabbar_tit",
                                  this.$idx == this.tabIndex ? "tabbar_wei" : ""
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "video-banner2",
                  attr: {positionBanner: "122"},
                  shown: function () {
                    return this.isShowBanner
                  }
                }
              ]
            }
          },
          4114: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "block",
                  attr: {},
                  shown: function () {
                    return this.isShow1112
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["videoBanner"],
                      style: function () {
                        return this.bannerStyle
                      },
                      children: [
                        {
                          type: "ad",
                          attr: {
                            adid: function () {
                              return this.adData[0].adId
                            },
                            type: "native",
                            appInfoAreaX: function () {
                              return this.appInfo.appX
                            },
                            appInfoAreaY: function () {
                              return this.appInfo.appY
                            },
                            appInfoAreaLines: "1",
                            privacyAreaX: function () {
                              return this.appInfo.privacyX
                            },
                            privacyAreaY: function () {
                              return this.appInfo.privacyY
                            },
                            closeBtnPosition: "right-bottom"
                          },
                          shown: function () {
                            return this.isNative
                          },
                          classList: ["adNative"],
                          events: {
                            error: function (t) {
                              return this.adError(this.err, t)
                            },
                            adclick: "adClick",
                            adshow: "adShow",
                            adclose: "close"
                          },
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["adContent"],
                              children: [
                                {
                                  type: "ad-clickable-area",
                                  attr: {type: "click"},
                                  classList: ["adClickArea"],
                                  style: {
                                    backgroundColor: function () {
                                      return this.dynamicBackground
                                    }
                                  },
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["left"],
                                      children: [
                                        {
                                          type: "ad-clickable-area",
                                          attr: {type: "video"},
                                          shown: function () {
                                            return this.adData[0].isNativeVideo
                                          },
                                          classList: ["adResource"]
                                        },
                                        {
                                          type: "image",
                                          attr: {
                                            src: function () {
                                              return (
                                                this.adData[0].imgUrlList &&
                                                this.adData[0].imgUrlList[0]
                                              )
                                            }
                                          },
                                          shown: function () {
                                            return !this.adData[0].isNativeVideo
                                          },
                                          classList: ["adResource"]
                                        }
                                      ]
                                    },
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["center"],
                                      children: [
                                        {
                                          type: "div",
                                          attr: {},
                                          classList: ["adTitle"],
                                          children: [
                                            {
                                              type: "text",
                                              attr: {
                                                value: function () {
                                                  return this.adData[0].title
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          type: "div",
                                          attr: {},
                                          classList: ["adDesc"],
                                          children: [
                                            {
                                              type: "text",
                                              attr: {
                                                value: function () {
                                                  return this.adData[0].desc
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["right"]
                                    }
                                  ]
                                },
                                {
                                  type: "ad-clickable-area",
                                  attr: {type: "button", value: "查看详情"},
                                  classList: ["adButton"],
                                  events: {click: "d_btn_click"}
                                }
                              ]
                            },
                            {type: "adlogo", attr: {left: "0", bottom: "0"}}
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          2573: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["wrapper"],
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["wrapper_top"],
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["top_text"],
                      children: [{type: "text", attr: {value: "知识赢家"}}]
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["top_right"],
                      events: {click: "paihang"}
                    },
                    {
                      type: "text",
                      attr: {value: "排行榜"},
                      classList: ["right_text"],
                      events: {click: "paihang"}
                    },
                    {
                      type: "image",
                      attr: {src: "/pages/tabbar/images/rank.png"},
                      classList: ["right_img"],
                      events: {click: "paihang"}
                    }
                  ]
                },
                {
                  type: "div",
                  attr: {},
                  classList: ["wrapper_mid"],
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["mid_fenlei"],
                      children: [
                        {
                          type: "image",
                          attr: {src: "/pages/tabbar/images/calssdati.png"},
                          classList: ["fenlei_img"]
                        },
                        {type: "text", attr: {value: "学习模式"}}
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["mid_answer"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["answer"],
                          events: {
                            click: function (t) {
                              return this.qaq(
                                this.$item.num,
                                this.$item.title,
                                t
                              )
                            }
                          },
                          repeat: function () {
                            return this.answerlist
                          },
                          children: [
                            {
                              type: "image",
                              attr: {
                                src: function () {
                                  return (
                                    "/pages/tabbar/images/" +
                                    this.$item.background +
                                    ".png"
                                  )
                                }
                              },
                              classList: ["answerBg"]
                            },
                            {
                              type: "text",
                              attr: {
                                value: function () {
                                  return this.$item.title + "知识"
                                }
                              },
                              classList: ["answer_text"]
                            },
                            {
                              type: "image",
                              attr: {
                                src: function () {
                                  return (
                                    "/pages/tabbar/images/" +
                                    this.$item.img +
                                    ".png"
                                  )
                                }
                              },
                              classList: ["answer_img"]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["mid_tiaozhan"],
                      children: [
                        {
                          type: "image",
                          attr: {src: "/pages/tabbar/images/tiaozhan.png"},
                          classList: ["tiaozhan_img"]
                        },
                        {type: "text", attr: {value: "挑战模式"}}
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["Start_challenging"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["con"],
                          events: {click: "start_challenge"},
                          children: [
                            {
                              type: "text",
                              attr: {value: "综合测试"},
                              classList: ["con_start"]
                            },
                            {
                              type: "image",
                              attr: {
                                src: "/pages/tabbar/images/msgtiaozhan.png"
                              },
                              classList: ["start_img"]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          4570: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["wrapper"],
              children: [
                {
                  type: "feed-back",
                  attr: {},
                  shown: function () {
                    return this.feedback
                  }
                },
                {
                  type: "main-kefu",
                  attr: {},
                  shown: function () {
                    return this.mainkefu
                  }
                },
                {
                  type: "weixin-kefu",
                  attr: {},
                  shown: function () {
                    return this.weixinkefu
                  }
                },
                {
                  type: "div",
                  attr: {},
                  classList: ["kuang"],
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["con"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["myanswer"],
                          children: [
                            {
                              type: "image",
                              attr: {src: "/pages/tabbar/images/fanhuijt.png"},
                              classList: ["myanswer_img"]
                            },
                            {type: "text", attr: {value: "我的回答"}}
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["topDiv"],
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["topItem"],
                              children: [
                                {
                                  type: "text",
                                  attr: {value: "最好成绩"},
                                  classList: ["top"]
                                },
                                {
                                  type: "text",
                                  attr: {
                                    value: function () {
                                      return (
                                        "连续答对 " + this.best_results + " 题"
                                      )
                                    }
                                  },
                                  classList: ["bot"]
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["topItem_1"],
                              children: [
                                {
                                  type: "text",
                                  attr: {value: "累计答题"},
                                  classList: ["top"]
                                },
                                {type: "text", attr: {}},
                                {
                                  type: "text",
                                  attr: {
                                    value: function () {
                                      return (
                                        "累计答 " + this.add_Cumulative + " 题"
                                      )
                                    }
                                  },
                                  classList: ["bot"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["achievement"],
                          events: {click: "tool"},
                          children: [
                            {
                              type: "text",
                              attr: {value: "工具广场"},
                              classList: ["le"],
                              style: {color: "rgba(111,111,111,1)"}
                            },
                            {
                              type: "text",
                              attr: {value: ">"},
                              classList: ["ri"],
                              style: {color: "rgba(111,111,111,1)"}
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["achievement"],
                          events: {click: "dial_kefu"},
                          children: [
                            {
                              type: "text",
                              attr: {value: "联系客服"},
                              classList: ["le"],
                              style: {color: "rgba(111,111,111,1)"}
                            },
                            {
                              type: "text",
                              attr: {value: ">"},
                              classList: ["ri"],
                              style: {color: "rgba(111,111,111,1)"}
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["achievement"],
                          events: {click: "Feedback"},
                          children: [
                            {
                              type: "text",
                              attr: {value: "意见反馈"},
                              classList: ["le"],
                              style: {color: "rgba(111,111,111,1)"}
                            },
                            {
                              type: "text",
                              attr: {value: ">"},
                              classList: ["ri"],
                              style: {color: "rgba(111,111,111,1)"}
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["achievement"],
                          events: {click: "kefu_vx"},
                          children: [
                            {
                              type: "text",
                              attr: {value: "客服微信"},
                              classList: ["le"],
                              style: {color: "rgba(111,111,111,1)"}
                            },
                            {
                              type: "text",
                              attr: {value: ">"},
                              classList: ["ri"],
                              style: {color: "rgba(111,111,111,1)"}
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["achievement"],
                          directives: [{name: "yy", value: "tool"}],
                          children: [
                            {
                              type: "text",
                              attr: {value: "工具广场"},
                              classList: ["le"]
                            },
                            {
                              type: "text",
                              attr: {value: ">"},
                              classList: ["ri"],
                              style: {color: "rgba(111,111,111,1)"}
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["achievement", "yinsi"],
                          directives: [{name: "yy", value: "yszc"}],
                          children: [
                            {
                              type: "text",
                              attr: {value: "隐私政策"},
                              classList: ["le"]
                            },
                            {
                              type: "text",
                              attr: {value: ">"},
                              classList: ["ri"],
                              style: {color: "rgba(111,111,111,1)"}
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["achievement", "yonghu"],
                          directives: [{name: "yy", value: "yhxy"}],
                          children: [
                            {
                              type: "text",
                              attr: {value: "用户协议"},
                              classList: ["le"]
                            },
                            {
                              type: "text",
                              attr: {value: ">"},
                              classList: ["ri"],
                              style: {color: "rgba(111,111,111,1)"}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          5972: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["logo"],
              style: function () {
                return this.style
              },
              children: [
                {
                  type: "image",
                  attr: {
                    src: function () {
                      return this.url
                        ? this.url
                        : "../../images/oppo_ad_logo.webp"
                    }
                  },
                  shown: function () {
                    return "OPPO" == this.channel
                  }
                },
                {
                  type: "image",
                  attr: {
                    src: function () {
                      return this.url
                        ? this.url
                        : "../../images/mi_ad_logo.webp"
                    }
                  },
                  shown: function () {
                    return "MI" == this.channel && !("OPPO" == this.channel)
                  }
                },
                {
                  type: "image",
                  attr: {
                    src: function () {
                      return this.url
                        ? this.url
                        : "../../images/vivo_ad_logo.webp"
                    }
                  },
                  shown: function () {
                    return !("OPPO" == this.channel || "MI" == this.channel)
                  }
                }
              ]
            }
          },
          244: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["feedback"],
                  shown: function () {
                    return this.showFeedBack
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["feedback_box"],
                      children: [
                        {
                          type: "text",
                          attr: {value: "我要投诉"},
                          classList: ["top"]
                        },
                        {
                          type: "text",
                          attr: {value: "请选择投诉原因 （必填）"},
                          classList: ["reason"]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["range"],
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["range_list"],
                              children: [
                                {
                                  type: "input",
                                  attr: {
                                    type: "radio",
                                    value: "喜欢",
                                    name: "1",
                                    checked: "true"
                                  }
                                },
                                {
                                  type: "text",
                                  attr: {value: "广告展示频繁，影响体验"}
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["range_list"],
                              children: [
                                {
                                  type: "input",
                                  attr: {
                                    type: "radio",
                                    value: "喜欢",
                                    name: "1"
                                  }
                                },
                                {
                                  type: "text",
                                  attr: {value: "不知为何被打开，无法停用"}
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["range_list"],
                              children: [
                                {
                                  type: "input",
                                  attr: {
                                    type: "radio",
                                    value: "喜欢",
                                    name: "1"
                                  }
                                },
                                {
                                  type: "text",
                                  attr: {value: "未经同意，自动下载其他应用"}
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["range_list"],
                              children: [
                                {
                                  type: "input",
                                  attr: {
                                    type: "radio",
                                    value: "喜欢",
                                    name: "1"
                                  }
                                },
                                {type: "text", attr: {value: "使用功能异常"}}
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["range_list"],
                              children: [
                                {
                                  type: "input",
                                  attr: {
                                    type: "radio",
                                    value: "喜欢",
                                    name: "1"
                                  }
                                },
                                {type: "text", attr: {value: "其他意见或建议"}}
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["specific"],
                          children: [
                            {type: "text", attr: {value: "具体情况说明"}},
                            {
                              type: "input",
                              attr: {
                                type: "text",
                                placeholder: "请补充你的投诉内容"
                              }
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["specific"],
                          children: [
                            {type: "text", attr: {value: "联系方式"}},
                            {
                              type: "input",
                              attr: {
                                type: "text",
                                placeholder: "请填写你的联系方式"
                              }
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["complain"],
                          children: [
                            {
                              type: "text",
                              attr: {value: "关闭"},
                              events: {click: "closeFeedBack"},
                              style: {
                                backgroundColor: "#f5f3f6",
                                color: "#d2d0d1"
                              }
                            },
                            {
                              type: "text",
                              attr: {value: "确定"},
                              events: {click: "beSure"}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          7782: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["dynamic_kefu"],
                  shown: function () {
                    return this.showKefu
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["_kefuBox"],
                      children: [
                        {
                          type: "image",
                          attr: {src: "/sdk/images/close.webp"},
                          events: {click: "closeKeFu"},
                          classList: ["kefuEnd"]
                        },
                        {
                          type: "text",
                          attr: {value: "联系客服"},
                          classList: ["title"]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["kf_xq"],
                          children: [
                            {type: "text", attr: {value: "QQ：2847116575"}},
                            {
                              type: "text",
                              attr: {value: "复制"},
                              events: {
                                click: function (t) {
                                  return this.copyMsg("2847116575", t)
                                }
                              }
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["kf_xq"],
                          children: [
                            {type: "text", attr: {value: "电话：4006008066"}},
                            {
                              type: "text",
                              attr: {value: "复制"},
                              events: {
                                click: function (t) {
                                  return this.copyMsg("4006008066", t)
                                }
                              }
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["kf_xq"],
                          children: [
                            {
                              type: "text",
                              attr: {value: "邮箱：kefu@cyngame.com"}
                            },
                            {
                              type: "text",
                              attr: {value: "复制"},
                              events: {
                                click: function (t) {
                                  return this.copyMsg("kefu@cyngame.com", t)
                                }
                              }
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["kf_xq"],
                          children: [
                            {
                              type: "text",
                              attr: {value: "微信：kefu_sky"},
                              events: {click: "showWX"}
                            },
                            {
                              type: "text",
                              attr: {value: "获取二维码"},
                              events: {click: "showWX"}
                            },
                            {
                              type: "text",
                              attr: {value: "复制"},
                              events: {
                                click: function (t) {
                                  return this.copyMsg("kefu_sky", t)
                                }
                              }
                            }
                          ]
                        },
                        {
                          type: "input",
                          attr: {type: "button", value: "拨打客服热线"},
                          events: {click: "callKeFu"}
                        },
                        {
                          type: "text",
                          attr: {value: "我要投诉"},
                          style: {
                            marginTop: "20px",
                            borderBottomWidth: "2px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "#000000"
                          },
                          events: {click: "complaint"}
                        },
                        {
                          type: "text",
                          attr: {value: "客服在线时间9:00——21:00"},
                          style: {
                            color: "#FF0000",
                            marginTop: "10px",
                            marginBottom: "10px"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "feed-back",
                  attr: {},
                  shown: function () {
                    return this.showFeedBack
                  }
                },
                {
                  type: "weixin-kefu",
                  attr: {},
                  shown: function () {
                    return this.showWeiXin
                  }
                }
              ]
            }
          },
          402: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["kf_vx"],
                  shown: function () {
                    return this.showWeiXin
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["fMask"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["kf_box"],
                          children: [
                            {
                              type: "image",
                              attr: {src: "/sdk/images/close.webp"},
                              events: {click: "closeWeiXin"},
                              classList: ["end_kefuvxShow"]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["lxkf"],
                              children: [
                                {
                                  type: "text",
                                  attr: {
                                    value: function () {
                                      return this.appName + " — VIP"
                                    }
                                  }
                                },
                                {
                                  type: "text",
                                  attr: {value: "专属客服 "},
                                  classList: ["exclusivekf"]
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["huifu"],
                              children: [
                                {type: "text", attr: {value: "极速反馈"}},
                                {type: "text", attr: {value: "专业讲解"}},
                                {type: "text", attr: {value: "快速回复"}}
                              ]
                            },
                            {
                              type: "image",
                              attr: {
                                src: function () {
                                  return this.kefuimg
                                },
                                alt: ""
                              },
                              classList: ["vximg"]
                            },
                            {
                              type: "text",
                              attr: {value: "保存到相册"},
                              classList: ["savephoto"],
                              events: {click: "savephoto"}
                            }
                          ]
                        },
                        {
                          type: "image",
                          attr: {src: "/sdk/images/logo.png", alt: ""},
                          classList: ["qiu"]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          3519: (t, e, a) => {
            a(163)
            var i = a(316)
            $app_define$(
              "@app-component/video-banner2",
              [],
              function (t, e, n) {
                i(n, e, t),
                  e.__esModule && e.default && (n.exports = e.default),
                  (n.exports.template = a(4114)),
                  (n.exports.style = a(3141))
              }
            )
          },
          270: (t, e, a) => {
            var i = a(9694)
            $app_define$(
              "@app-component/challenge-page",
              [],
              function (t, e, n) {
                i(n, e, t),
                  e.__esModule && e.default && (n.exports = e.default),
                  (n.exports.template = a(2573)),
                  (n.exports.style = a(78))
              }
            )
          },
          1507: (t, e, a) => {
            a(9685), a(4708), a(4884)
            var i = a(2385)
            $app_define$("@app-component/my-page", [], function (t, e, n) {
              i(n, e, t),
                e.__esModule && e.default && (n.exports = e.default),
                (n.exports.template = a(4570)),
                (n.exports.style = a(5221))
            })
          },
          163: (t, e, a) => {
            var i = a(2466)
            $app_define$("@app-component/adlogo", [], function (t, e, n) {
              i(n, e, t),
                e.__esModule && e.default && (n.exports = e.default),
                (n.exports.template = a(5972)),
                (n.exports.style = a(2391))
            })
          },
          9685: (t, e, a) => {
            var i = a(4039)
            $app_define$("@app-component/feed-back", [], function (t, e, n) {
              i(n, e, t),
                e.__esModule && e.default && (n.exports = e.default),
                (n.exports.template = a(244)),
                (n.exports.style = a(5791))
            })
          },
          4708: (t, e, a) => {
            a(9685), a(4884)
            var i = a(9342)
            $app_define$("@app-component/main-kefu", [], function (t, e, n) {
              i(n, e, t),
                e.__esModule && e.default && (n.exports = e.default),
                (n.exports.template = a(7782)),
                (n.exports.style = a(2601))
            })
          },
          4884: (t, e, a) => {
            var i = a(1785)
            $app_define$("@app-component/weixin-kefu", [], function (t, e, n) {
              i(n, e, t),
                e.__esModule && e.default && (n.exports = e.default),
                (n.exports.template = a(402)),
                (n.exports.style = a(6130))
            })
          },
          9316: (t, e) => {
            "use strict"
            Object.defineProperty(e, "__esModule", {value: !0}),
              (e.default = void 0)
            var a,
              i =
                (a = $app_require$("@app-module/service.ad")) && a.__esModule
                  ? a
                  : {default: a}
            e.default = class {
              constructor() {
                ;(this.adid = 0),
                  (this.nativeId = ""),
                  (this.adNo = ""),
                  (this.is_time_out = !1)
              }
              async create_Native(t) {
                const {
                  adid: e,
                  adParam: a,
                  adNo: i,
                  loadNum: n,
                  sp: s,
                  isBidding: r,
                  adidInfo: o,
                  isBanner: l
                } = t
                let d = null
                if (l) d = 30
                else {
                  let t = null,
                    e = $sdk.data.getData("appAdInfo").timeout / 1e3
                  "VTO" in o
                    ? ((t = parseInt(o.VTO) / 1e3 || 30), (d = t))
                    : (d = e)
                }
                let p = await Promise.race([
                  this.load_Native(e, a, i, n, s, r),
                  $sdk.helper.requestAd_Timeout(d)
                ])
                return (
                  "TIMEOUT" == p &&
                    ((this.is_time_out = !0),
                    (p = ""),
                    $sdk.ad.reportAdEvent(
                      e,
                      a,
                      i,
                      $sdk.ad.event.REQUESTTIMEOUT,
                      s
                    ),
                    $sdk.ad.reportAdEvent(
                      e,
                      a,
                      i,
                      $sdk.ad.event.ERROR,
                      s,
                      "_code:-66_info:TIMEOUT"
                    )),
                  p
                )
              }
              async load_Native(t, e, a, n, s = 0, r) {
                return new Promise((o) => {
                  try {
                    ;(this.adid = t),
                      (this.nativeId = e),
                      (this.adNo = a),
                      $sdk.ad.reportAdEvent(
                        t,
                        e,
                        a,
                        $sdk.ad.event.REQUESTADPARAM,
                        r ? 0 : s
                      ),
                      i.default.preloadAd({
                        adUnitId: this.nativeId,
                        type: "native",
                        adCount: n && n > 0 ? n : 1,
                        success: (n) => {
                          if (this.is_time_out) this.is_time_out = !1
                          else if (n.adList && n.adList[0]) {
                            const l = n.adList[0].ecpm,
                              d = n.adList[0].adId
                            let p = !0
                            const c =
                              ($sdk.data.getData("appAdInfo") &&
                                $sdk.data.getData("appAdInfo").bdLowPrice) ||
                              -1
                            if (!isNaN(l) && r) {
                              if (((n.adList[0].sp = l), !(l >= c)))
                                return (
                                  i.default.notifyRankLoss({
                                    adid: d,
                                    winPrice: l + 1,
                                    code: 1,
                                    channel: "mob"
                                  }),
                                  o(""),
                                  (p = !1),
                                  void $sdk.ad.reportAdEvent(
                                    t,
                                    e,
                                    a,
                                    $sdk.ad.event.ERROR,
                                    l,
                                    "_code:-8_info:低于限制价格"
                                  )
                                )
                              i.default.notifyRankWin({
                                adid: d,
                                lossPrice: l - 1
                              }),
                                i.default.setBidECPM({adid: d, ecpm: l})
                            }
                            let f = n.adList[0].imgUrlList
                            $sdk.ad.reportAdEvent(
                              t,
                              e,
                              `${a}`,
                              $sdk.ad.event.SUCCESS,
                              r ? l : s,
                              f && f[0] ? f[0].split("/")[2] : ""
                            ),
                              n.adList.forEach((t) => {
                                ;(t.adNo = this.adNo),
                                  (f && f[0]) || (t.imgUrlList = ["https://"])
                              })
                            const m = $sdk.ad.isNativeVideo(n.adList)
                            o(m)
                          } else
                            $sdk.ad.reportAdEvent(
                              t,
                              e,
                              a,
                              $sdk.ad.event.ERROR,
                              0,
                              "_code:-4_info:nodata"
                            ),
                              o("")
                        },
                        fail: (i, n) => {
                          this.is_time_out
                            ? (this.is_time_out = !1)
                            : ($sdk.ad.reportAdEvent(
                                t,
                                e,
                                a,
                                $sdk.ad.event.ERROR,
                                0,
                                `_code:${i.errCode ? i.errCode : n}_info:${
                                  i.errMsg && i.errMsg
                                    ? i.errMsg
                                    : i && i.replace && i.replace(/\|/g, "")
                                }`
                              ),
                              o(""))
                        }
                      })
                  } catch (t) {
                    o("")
                  }
                })
              }
            }
          }
        },
        e = {}
      function a(i) {
        var n = e[i]
        if (void 0 !== n) return n.exports
        var s = (e[i] = {exports: {}})
        return t[i](s, s.exports, a), s.exports
      }
      ;(() => {
        a(270), a(1507), a(3519)
        var t = a(8211)
        $app_define$("@app-component/index", [], function (e, i, n) {
          t(n, i, e),
            i.__esModule && i.default && (n.exports = i.default),
            (n.exports.template = a(7693)),
            (n.exports.style = a(2414))
        }),
          $app_bootstrap$("@app-component/index", {packagerVersion: "2.0.0"})
      })()
    })()
  }
  if ("undefined" == typeof window) return t()
  window.createPageHandler = t
})()
