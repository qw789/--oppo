;(function () {
  var createPageHandler = function () {
    return (() => {
      var __webpack_modules__ = {
          3513: (t, e, a) => {
            t.exports = function (t, e, i) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var s = o(a(5736)),
                n = o(a(8718)),
                d = o(a(7960))
              function o(t) {
                return t && t.__esModule ? t : {default: t}
              }
              e.default = {
                data: () => ({
                  name: "index",
                  tabHeight: $config.tabHeight,
                  tabIndex: 0,
                  adPageID: null,
                  adPageIndex: 99,
                  tabItemList: $config.tabItemList,
                  tp: "",
                  avid: "",
                  cid: "",
                  oaid: "",
                  uuid: "",
                  ve: "",
                  ts: "",
                  trackcode: "",
                  sc: "",
                  close: "",
                  ct: "",
                  source: "",
                  j: 0,
                  direct: "",
                  jpd: 0,
                  cj: 0
                }),
                onInit(t) {
                  "fku" == t.by && $sdk.data.setData("isTest", !0),
                    t.source && $sdk.ad.checkInstall()
                  const e = Object.keys(t)
                    .map((e) => `&${e}=${t[e]}`)
                    .join("")
                  $sdk.data.setData("query", e),
                    $sdk.data.setData("queryParams", t),
                    (this.jpd = 9800),
                    $sdk.ad.reportCustomEvent(
                      this,
                      "sdk2_entry_oninit_init",
                      Date.now() - $sdk.ad.createTimestamp
                    )
                  try {
                    this.handle_deepLink(t)
                  } catch (t) {}
                  try {
                    this.load_novel()
                  } catch (t) {
                    $sdk.ad.reportCustomEvent(
                      this,
                      "sdk2_entry_loadnovel_error",
                      JSON.stringify(t)
                    )
                  }
                },
                onRefresh(t) {
                  let e = ""
                  Object.keys(t).forEach((a) => {
                    e += `${a}:${t[a]}|`
                  }),
                    $sdk.ad.getNowUUID(e),
                    $sdk.ad.reportCustomEvent(this, "sdk2_single_onrefresh_", e)
                },
                onTabChanged(t) {
                  ;(this.tabIndex = t),
                    $sdk.data.sendEvent("onTabChanged", {name: this.name})
                },
                onBackPress() {
                  const t = $sdk.data.getData("userInfo")
                  return (
                    t.onBackPress++,
                    $sdk.data.setData("userInfo", t),
                    $sdk.ad.reportCustomEvent(
                      this,
                      "user2_entry_onbackpress_",
                      `${t.onBackPress}`
                    ),
                    $sdk.data.sendEvent("onBackPress", {name: this.name}),
                    !0
                  )
                },
                onShow() {
                  $sdk.data.setData("visible", !0),
                    $sdk.pool.reportAdRefresh(),
                    $sdk.ad.clearTimer(),
                    $sdk.ad.pushParam.isPush,
                    ($sdk.ad.pushParam.type = null),
                    ($sdk.ad.pushParam.isPush = !1),
                    ($sdk.ad.pushParam.adid = !1),
                    $sdk.ad.reportCustomEvent(this, "sdk2_entry_onshow_", "OK"),
                    $sdk.data.sendEvent("onShow", {name: this.name})
                },
                onHide() {
                  3 == $sdk.data.getData("reportAdRefreshStatus")
                    ? $sdk.data.setData("reportAdRefreshStatus", 0)
                    : 1 == $sdk.data.getData("reportAdRefreshStatus") ||
                      $sdk.data.setData("reportAdRefreshStatus", 2),
                    $sdk.data.setData("visible", !1)
                  try {
                    $sdk.data.getData("isPendingVideo") || $sdk.ad.pushFun()
                  } catch (t) {}
                  $sdk.ad.reportCustomEvent(this, "sdk2_entry_onhide_", "OK"),
                    $sdk.data.sendEvent("onHide", {name: this.name})
                },
                async load_novel() {
                  if (
                    ($sdk.data.setData("ylhSdk", this.$app.$def.ylh_sdk),
                    $sdk.data.setData("locConfApp", d.default),
                    this.jpd > 0)
                  ) {
                    $sdk.ad.reportCustomEvent(
                      this,
                      "sdk2_entry_loadnovel_",
                      "OK"
                    )
                    const t = await Promise.all([
                      n.default.EulogizeBookPOST("getBookInfo", {
                        book_id: this.jpd,
                        vs: 1
                      })
                    ])
                    $sdk.ad.bookArr = t[0]
                  }
                  $config.isNovel &&
                    n.default.novelInit().then((t) => {
                      t && (this.showHome = !0)
                    })
                },
                handle_deepLink(t) {
                  this.source &&
                    ($sdk.ad.reportCustomEvent(this, "sdk2_dp_first_", "OK"),
                    ($sdk.ad.isfromdp = !0)),
                    ($sdk.ad.direct = this.direct),
                    ($sdk.ad.jpd = this.jpd),
                    s.default.checkParams(t)
                  let e = s.default.resetChannel(t, this.source)
                  $sdk.ad.changeCPID(s.default.handleSource(e), this.j)
                  try {
                    1 == this.close &&
                      this.ct > 0 &&
                      setTimeout(() => {
                        $sdk.ad.reportCustomEvent(
                          this,
                          "sdk2_dp_ex_",
                          `${this.cid}|${this.avid}|${this.close}|${this.ct}`
                        ),
                          setTimeout(() => {
                            this.$app.exit()
                          }, 2e3)
                      }, 1e3 * parseInt(this.ct))
                  } catch (t) {
                    $sdk.ad.reportCustomEvent(this, "sdk2_dp_err_", t)
                  }
                  if (this.source) {
                    $sdk.ad.reportCustomEvent(this, "sdk2_dp_init_", "OK")
                    try {
                      let e = `tp:${this.tp}|avid:${this.avid}|cid:${
                        this.cid
                      }|oaid:${this.oaid}|uuid:${this.uuid}|ve:${this.ve}|ts:${
                        this.ts
                      }|trackcode:${this.trackcode}|sc:${this.sc}|close:${
                        this.close
                      }|ct:${this.ct}${s.default.getDynamicParams(t)}`
                      $sdk.ad.getNowUUID(e),
                        $sdk.ad.reportCustomEvent(this, "quick_deeplink", e)
                    } catch (t) {
                      $sdk.ad.reportCustomEvent(this, "sdk2_dp_err_", t)
                    }
                  }
                }
              }
              const r = e.default || t.exports,
                l = ["public", "protected", "private"]
              if (
                r.data &&
                l.some(function (t) {
                  return r[t]
                })
              )
                throw new Error(
                  '页面VM对象中的属性data不可与"' +
                    l.join(",") +
                    '"同时存在，请使用private替换data名称'
                )
              r.data ||
                ((r.data = {}),
                (r._descriptor = {}),
                l.forEach(function (t) {
                  const e = typeof r[t]
                  if ("object" === e) {
                    r.data = Object.assign(r.data, r[t])
                    for (const e in r[t]) r._descriptor[e] = {access: t}
                  } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                }))
            }
          },
          8318: (t, e, a) => {
            t.exports = function (t, e, i) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var s,
                n = (s = a(9316)) && s.__esModule ? s : {default: s}
              e.default = {
                props: ["dynamicBackground", "positionBanner"],
                data() {
                  return {
                    name: this.$parent().name,
                    isShow1112: !1,
                    isShow1101: $sdk.data.getData("isShow1101", this),
                    adAeraShow: !1,
                    adid: 400,
                    config: null,
                    adData: [{}],
                    isWC: !1,
                    debounce: !1,
                    adStatus: 0,
                    refeshTiming: null,
                    isNative: !1,
                    adParam: "2296055",
                    failNum: 0
                  }
                },
                computed: {
                  bannerStyle() {
                    let t = ""
                    return (
                      (t += `height: 1px; bottom: ${
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
                    ;(this.isShow1112 = !0), (this.debounce = !0)
                    let t = new n.default(),
                      e = `400_${new Date().getTime()}`,
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
                    this.debounce = !1
                    let i = `400_${new Date().getTime()}`
                    if (
                      ($sdk.ad.reportAdEvent(
                        400,
                        "",
                        i,
                        $sdk.ad.event.REQUESTAD
                      ),
                      a)
                    ) {
                      let {
                        adid: t,
                        adParam: e,
                        adData: [
                          {
                            adNo: s,
                            sp: n,
                            imgUrlList: d,
                            isBaidu: o,
                            isTopOn: r
                          }
                        ]
                      } = this
                      $sdk.ad.reportAdEvent(
                        400,
                        e,
                        i,
                        $sdk.ad.event.BDSUCCESS,
                        n,
                        d && d[0] ? d[0].split("/")[2] : ""
                      ),
                        (this.adData = a),
                        (this.isShow1112 = !0),
                        (this.isNative = !0)
                    } else
                      $sdk.ad.reportAdEvent(400, "", i, $sdk.ad.event.BDFAIL),
                        (this.isShow1112 = !1),
                        (this.isNative = !1),
                        this.failNum++,
                        this.failNum < 3 &&
                          (await $sdk.helper.delay(5e3), this.reloadAd())
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
                      {adNo: a, sp: i, imgUrlList: s, isBaidu: n, isTopOn: d}
                    ]
                  } = this
                  $sdk.ad.reportAdEvent(
                    t,
                    e,
                    a,
                    $sdk.ad.event.SHOW,
                    i,
                    s && s[0] ? s[0].split("/")[2] : ""
                  ),
                    setTimeout(() => {
                      this.isShow1112 = !1
                    }, 5e3)
                },
                adClick() {
                  let {
                    adid: t,
                    adParam: e,
                    adData: [
                      {adNo: a, sp: i, imgUrlList: s, isBaidu: n, isTopOn: d}
                    ]
                  } = this
                  $sdk.ad.reportAdEvent(
                    t,
                    e,
                    a,
                    $sdk.ad.event.CLICK,
                    i,
                    s && s[0] ? s[0].split("/")[2] : ""
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
                      {adNo: a, sp: i, imgUrlList: s, isBaidu: n, isTopOn: d}
                    ]
                  } = this
                  $sdk.ad.reportAdEvent(
                    t,
                    e,
                    a,
                    $sdk.ad.event.AUTODOWNLOAD,
                    i,
                    s && s[0] ? s[0].split("/")[2] : ""
                  )
                }
              }
            }
          },
          4288: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  props: [],
                  data: () => ({showLoading: !0}),
                  async onInit() {
                    try {
                      if (
                        ($sdk.ad.reportCustomEvent(
                          this,
                          "sdk2_opsc_oninit_",
                          Date.now() - $sdk.ad.createTimestamp
                        ),
                        $sdk.ad.times.push(Date.now()),
                        352 != (await $sdk.ad.init()) ||
                          $sdk.ad.isDev() ||
                          ($sdk.ad.reportCustomEvent(
                            this,
                            "sdk2_opsc_oninit_352",
                            "OK"
                          ),
                          this.$app.exit()),
                        this.closePage(),
                        $sdk.data.getData("appAdInfo"))
                      ) {
                        const t = $sdk.data.getData("appAdInfo").lifeTime
                        t &&
                          ($sdk.ad.reportCustomEvent(
                            this,
                            "sdk2_sdk_oninit_lifeTime",
                            t
                          ),
                          setTimeout(() => {
                            $sdk.ad.reportCustomEvent(
                              this,
                              "sdk2_sdk_onsuccess_lifeTime",
                              t
                            ),
                              this.$app.exit()
                          }, 1e3 * t))
                        const e = $sdk.data.getData("appAdInfo").configTime
                        e &&
                          ($sdk.ad.reportCustomEvent(
                            this,
                            "sdk2_sdk_oninit_configTime",
                            e
                          ),
                          setTimeout(() => {
                            $sdk.ad.reportCustomEvent(
                              this,
                              "sdk2_sdk_onsuccess_configTime",
                              e
                            ),
                              $sdk.data.setData("noConfig", !0)
                          }, 1e3 * e))
                      }
                    } catch (t) {
                      $sdk.ad.reportCustomEvent(
                        this,
                        "sdk2_opsc_oninit_err",
                        JSON.stringify(t)
                      ),
                        this.closePage()
                    }
                  },
                  closePage() {
                    $sdk.ad.reportCustomEvent(this, "sdk2_opsc_close_", "OK"),
                      (this.showLoading = !1),
                      this.$emit("closeOpenscreen")
                  }
                })
            }
          },
          5074: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  data: () => ({isVIVO: "VIVO" == $sdk.ad.channel()}),
                  closeOpenscreen(t) {
                    this.$emit("closeOpenscreen", t)
                  }
                })
            }
          },
          6139: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {data: {}, props: ["positionBanner"], onInit() {}})
            }
          },
          5609: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var i,
                s =
                  (i = a("@app-module/system.router")) && i.__esModule
                    ? i
                    : {default: i}
              e.default = {
                data() {
                  return {
                    name: this.$parent().$parent().name,
                    isShow1101: $sdk.data.getData("isShow1101", this),
                    adAeraShow: !0,
                    adid: 1101,
                    config: null,
                    adData: [{}],
                    isWC: !1,
                    is_ex_dbtn: !1,
                    isDTW: !1,
                    debounce: !1,
                    isNative: !1,
                    openSource: null,
                    reqStatus: !0,
                    adStatus: 0,
                    isTopOn: !1,
                    placementId: "",
                    downLoadStatus: "",
                    downLoadReqStatus: "",
                    appid: $config.baiduAppid,
                    adIndex: 0
                  }
                },
                computed: {
                  getInfoPosition() {
                    let t = {}
                    const e = $sdk.ad.deviceInfo.windowWidth / 750
                    return (
                      this.isWC,
                      (t = {
                        appInfoAreaX: 85 * e,
                        appInfoAreaY: 930 * e,
                        privacyAreaX: 354 * e,
                        privacyAreaY: 960 * e
                      }),
                      t
                    )
                  },
                  d_btn_style() {
                    let t = $sdk.data.getData("isTest")
                      ? "background-color: rgba(0, 255, 0, 1); opacity: 0.4;"
                      : "opacity: 0.01;"
                    return (
                      this.isDTW &&
                        (t +=
                          "top: 335px; width: 675px; height: 100px; transform: scaleY(7.7) translateY(347px);"),
                      (t += this.is_ex_dbtn
                        ? "top: 0px; right: 0; width: 750px; height: 200px; transform: scaleY(9) translateY(800px);"
                        : ""),
                      t
                    )
                  },
                  delEl: () => "transform: scaleY(0.8);",
                  baiduClickMaskStyle() {
                    let t = $sdk.data.getData("isTest")
                      ? "background-color: rgba(255, 0, 0, 1); opacity: 0.4;"
                      : "opacity: 0.01;"
                    return (
                      (this.isWC
                        ? "top: 0px; bottom: 0px;"
                        : "top: 450px; bottom: 450px;") + t
                    )
                  },
                  clickMaskStyle: () =>
                    $sdk.data.getData("isTest")
                      ? "background-color: rgba(255, 0, 0, 1); opacity: 0.4;"
                      : "opacity: 0.01;",
                  topStyle() {
                    let t = $sdk.data.getData("isTest")
                      ? "background-color: rgba(255, 0, 0, 1); opacity: 0.4;"
                      : "opacity: 0.01;"
                    return (
                      (this.isWC
                        ? "width: 750px; height: 100%;top:0px;"
                        : "width: 750px; height: 500px;top:500px;") + t
                    )
                  }
                },
                onInit() {
                  $sdk.data.onEvent(
                    this,
                    "onShow",
                    async ({name: t}) => {
                      t != this.name ||
                        this.debounce ||
                        (this.adStatus == $sdk.ad.event.SUCCESS &&
                          ($sdk.ad.reportAdEvent(
                            $sdk.pool.getAdid(this.adid),
                            this.adData[0].adParam,
                            this.adData[0].adNo,
                            $sdk.ad.event.USERBACK
                          ),
                          await $sdk.helper.delay(400)),
                        ($sdk.data.getData("reportAdRefreshStatus") &&
                          ($sdk.data.setData("reportAdRefreshStatus", 0),
                          !$sdk.data.getData("canRefreshAd"))) ||
                          ($sdk.data.setData("isShow1101", !1),
                          this.reloadAd()))
                    },
                    !0
                  ),
                    $sdk.data.onEvent(
                      this,
                      "showModal",
                      async ({adid: t, openSource: e}) => {
                        t == this.adid &&
                          ((this.reqStatus = !0),
                          $sdk.data.setData("isShow1101", !0),
                          (this.openSource = e),
                          this.reloadAd())
                      }
                    )
                },
                async reloadAd() {
                  try {
                    this.downLoadReqStatus = ""
                    const t = await $sdk.pool.showAd(this, 3)
                    if (((this.reqStatus = !1), t)) {
                      const t = this.$parent().$parent().reloadKeFu
                      t &&
                        t instanceof Function &&
                        this.$parent().$parent().reloadKeFu()
                    } else
                      (this.config = !1),
                        (this.isNative = !1),
                        (this.adAeraShow = !1),
                        $sdk.data.setData("isShow1101", !0)
                  } catch (t) {}
                },
                adError(t, e) {
                  $sdk.pool.reportEr(this, t, e)
                },
                adShow() {
                  $sdk.pool.reportSw(this)
                },
                adClick() {
                  $sdk.pool.reportCk(this), this.clickFn()
                },
                adClose() {
                  $sdk.pool.reportCl(this)
                },
                clickFn() {
                  $sdk.data.setData("reportAdRefreshStatus", 1),
                    this.adData[0].isBaidu
                      ? setTimeout(() => {
                          this.clickFn2(!0)
                        }, 50)
                      : this.clickFn2(!1)
                },
                clickFn2(t) {
                  ;(this.$parent().$parent().isShow110 = !1),
                    $sdk.data.setData("isShow1101", !1)
                  let e =
                    this.adData[0].isYlh &&
                    0 == this.downLoadStatus &&
                    this.adData[0].isApp
                  e && this.d_btn_click(),
                    setTimeout(() => {
                      ;(t || e) &&
                        this.$visible &&
                        ($sdk.pool.reportAdRefresh(),
                        $sdk.data.sendEvent("ck_recom_child_Ad", {adid: 110}))
                    }, 100)
                },
                d_btn_click() {
                  $sdk.pool.report_Btn_Ck(this)
                },
                close() {
                  ;(this.adAeraShow = !1),
                    (this.$parent().$parent().isShow110 = !1),
                    $sdk.data.setData("isShow1101", !1)
                },
                clikReq() {
                  $sdk.ad.reportCustomEvent(
                    this,
                    "user2_reqExit_onclick_",
                    "OK"
                  )
                },
                onAppStatusChange(t) {
                  const {status: e, progress: a} = t.detail
                  ;(this.downLoadStatus = e),
                    "" === this.downLoadReqStatus &&
                      ((this.downLoadReqStatus = e),
                      $sdk.ad.reportCustomEvent(
                        this,
                        "sdk2_ylhad_downloadstatus_",
                        `${$sdk.pool.getAdid(this.adid)}_${e}`
                      ))
                },
                endPage(t) {
                  try {
                    $sdk.data.setData("isShow1101", !1),
                      (this.$parent().$parent().isShow110 = !1),
                      (this.$parent().$parent().isShow111 = !1),
                      "jpd" == this.openSource
                        ? ($sdk.data.setData("isShowBookDetails", !1),
                          this.$page.exitFullscreen(),
                          $sdk.data.sendEvent("onTabChanged"),
                          s.default.back())
                        : ($sdk.data.setData("isJumpTwoPage", !0),
                          s.default.back())
                  } catch (t) {}
                }
              }
            }
          },
          7309: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              var i
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (i = a("@app-module/system.router")) && i.__esModule,
                (e.default = {
                  props: ["positionBanner"],
                  data() {
                    return {
                      name: this.$parent().$parent().name,
                      isShow1102: !1,
                      adAeraShow: !1,
                      adid: 1102,
                      config: null,
                      adData: [{}],
                      isWC: !1,
                      debounce: !1,
                      adStatus: 0,
                      refeshTiming: null,
                      isNative: !1,
                      is_ex_dbtn: !1,
                      isTopOn: !1,
                      placementId: "",
                      appid: $config.baiduAppid,
                      adIndex: 1
                    }
                  },
                  computed: {
                    bannerStyle() {
                      let t = "",
                        e = this.positionBanner || 0
                      return (
                        this.isTopOn
                          ? (t += "height: 150px; bottom: 0px;")
                          : (t += `height: 1px; bottom: ${e}px;`),
                        t
                      )
                    },
                    topStyle() {
                      return (
                        this.isWC || this.is_ex_dbtn,
                        "width: 750px; height: 100%;top:0px;opacity: 0;"
                      )
                    }
                  },
                  onInit() {
                    $sdk.data.onEvent(
                      this,
                      "onShow",
                      async ({name: t}) => {
                        t != this.name ||
                          this.debounce ||
                          (this.adStatus == $sdk.ad.event.SUCCESS &&
                            ($sdk.ad.reportAdEvent(
                              $sdk.pool.getAdid(this.adid),
                              this.adData[0].adParam,
                              this.adData[0].adNo,
                              $sdk.ad.event.USERBACK
                            ),
                            await $sdk.helper.delay(400)),
                          ($sdk.data.getData("isShow1101") &&
                            !$sdk.data.getData("canRefreshAd")) ||
                            ((this.isShow1102 = !1), this.reloadAd()))
                      },
                      !0
                    ),
                      $sdk.data.onEvent(
                        this,
                        "showModal",
                        ({adid: t}) => {
                          t == this.adid &&
                            ((this.isShow1102 = !1), this.reloadAd())
                        },
                        !0
                      )
                  },
                  async refeshBanner() {
                    try {
                      let t = await $sdk.ad.getADConfig(this.adid)
                      if ((t && t.TI && t.TI < 1) || this.refeshTiming) return
                      const e = Number(t.TI)
                      this.refeshTiming = setTimeout(() => {
                        ;(this.isShow1102 = !1),
                          this.reloadAd(),
                          (this.refeshTiming = null)
                      }, 1e3 * e)
                    } catch (t) {}
                  },
                  async reloadAd() {
                    try {
                      ;(await $sdk.pool.showAd(this, 3)) ||
                        (this.isShow1102 = !1)
                    } catch (t) {}
                  },
                  adError(t, e) {
                    ;(this.isShow1102 = !1), $sdk.pool.reportEr(this, t, e)
                  },
                  adShow() {
                    $sdk.pool.reportSw(this)
                  },
                  adClick() {
                    $sdk.pool.reportCk(this),
                      (this.isShow1102 = !1),
                      (this.$parent().$parent().isShow110 = !1),
                      $sdk.data.setData("isShow1101", !1)
                  },
                  adClose() {
                    $sdk.pool.reportCl(this)
                  },
                  close() {
                    this.isShow1102 = !1
                  }
                })
            }
          },
          666: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  data() {
                    return {
                      name: this.$parent().$parent().name,
                      adid: 1103,
                      isShow1103: !1,
                      config: null,
                      isNative: !1,
                      adData: [{}],
                      adStatus: 0,
                      is_ex_dbtn: !1,
                      isTopOn: !1,
                      placementId: "",
                      isWC: !1,
                      appid: $config.baiduAppid,
                      adIndex: 2
                    }
                  },
                  computed: {
                    topStyle() {
                      return this.isWC || this.is_ex_dbtn
                        ? "width: 100%; height: 100%;top:0px;opacity: 0;"
                        : "width: 750px; height: 100%;top:0px;opacity: 0;"
                    }
                  },
                  onInit() {
                    $sdk.data.onEvent(
                      this,
                      "onShow",
                      async ({name: t}) => {
                        t != this.name ||
                          this.debounce ||
                          (this.adStatus == $sdk.ad.event.SUCCESS &&
                            ($sdk.ad.reportAdEvent(
                              $sdk.pool.getAdid(this.adid),
                              this.adData[0].adParam,
                              this.adData[0].adNo,
                              $sdk.ad.event.USERBACK
                            ),
                            await $sdk.helper.delay(400)),
                          ($sdk.data.getData("isShow1101") &&
                            !$sdk.data.getData("canRefreshAd")) ||
                            ((this.isShow1103 = !1), this.reloadAd()))
                      },
                      !0
                    ),
                      $sdk.data.onEvent(
                        this,
                        "showModal",
                        ({adid: t}) => {
                          t == this.adid && this.reloadAd()
                        },
                        !0
                      )
                  },
                  async reloadAd() {
                    try {
                      ;(this.isShow1103 = !1), await $sdk.pool.showAd(this, 3)
                    } catch (t) {}
                  },
                  adError(t, e) {
                    ;(this.config = null), $sdk.pool.reportEr(this, t, e)
                  },
                  adShow() {
                    $sdk.pool.reportSw(this)
                  },
                  adClick() {
                    $sdk.pool.reportCk(this), (this.isShow1103 = !1)
                  },
                  adClose() {
                    $dk.pool.reportCl(this)
                  }
                })
            }
          },
          8196: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              function i(t) {
                return t && t.__esModule ? t : {default: t}
              }
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                i(a("@app-module/system.router")),
                i(a("@app-module/system.fetch")),
                (e.default = {
                  data() {
                    return {
                      adQuantityNum: $sdk.pool.adQuantityNum,
                      name: this.$parent().name,
                      isShow1111: $sdk.data.getData("isShow1111", this),
                      popContent: $sdk.data.getData("popContent", this),
                      popContentPool: {},
                      adStatus: 0,
                      backClassName: "back",
                      adClass: "",
                      debounce: !0,
                      showToolBox: !1,
                      showWeb: !1
                    }
                  },
                  computed: {
                    hb_style() {
                      return (
                        "margin:0px;" +
                        this.popContent.list[0].children[0].css +
                        `background-image:url(${this.popContent.list[0].children[0].text});`
                      )
                    },
                    hb_btn_style() {
                      return (
                        this.popContent.list[0].children[1].css +
                        `background-image:url(${this.popContent.list[0].children[1].text});`
                      )
                    },
                    closeStyle() {
                      return this.popContent.list[0].children[2]
                        ? "width:50px;height:50px;bottom:380px;" +
                            this.popContent.list[0].children[2].css
                        : ""
                    },
                    menuFun() {
                      let t = null
                      return (
                        this.popContent &&
                          "{}" != JSON.stringify(this.popContent) &&
                          this.popContent.menuList.length > 0 &&
                          (t = this.popContent.menuList[0].children[0].css),
                        t
                      )
                    },
                    backFun() {
                      let t = null
                      return (
                        this.popContent &&
                          "{}" != JSON.stringify(this.popContent) &&
                          this.popContent.backList.length > 0 &&
                          (t = this.popContent.backList[0].children[0].css),
                        t
                      )
                    },
                    backUrl() {
                      let t = null
                      return (
                        this.popContent &&
                          "{}" != JSON.stringify(this.popContent) &&
                          this.popContent.backList.length > 0 &&
                          (t = this.popContent.backList[0].children[0].text),
                        t
                      )
                    },
                    menuUrl() {
                      let t = null
                      return (
                        this.popContent &&
                          "{}" != JSON.stringify(this.popContent) &&
                          this.popContent.menuList.length > 0 &&
                          (t = this.popContent.menuList[0].children[0].text),
                        t
                      )
                    }
                  },
                  onInit() {
                    this.popContentPool = $sdk.data.getData("popfixedContent")
                    let {cj: t, mr: e} = $sdk.data.getData("queryParams")
                    const a = ["2001", "3001", "4001", "5001", "6001", "7001"]
                    ;(t && a.includes(t)) || (e && a.includes(e))
                      ? ((this.showToolBox = !0),
                        this.$element("web")
                          ? this.$element("web").postMessage({message: t || e})
                          : setTimeout(() => {
                              this.$element("web").postMessage({
                                message: t || e
                              })
                            }, 200))
                      : (this.showToolBox = !1),
                      this.$watch("showWeb", this.postMessage),
                      (this.popContent = JSON.parse(
                        JSON.stringify(this.popContentPool)
                      )),
                      setTimeout(() => {
                        this.backClassName = "back-anima"
                      }, 3e3),
                      $sdk.data.onEvent(
                        this,
                        "onShow",
                        async ({name: t}) => {
                          t != this.name ||
                            $sdk.ad.book <= 0 ||
                            !$sdk.ad.bookArr ||
                            ($sdk.data.getData("reportAdRefreshStatus") &&
                              ($sdk.data.setData("reportAdRefreshStatus", 0),
                              !$sdk.data.getData("canRefreshAd"))) ||
                            (1 == this.popContent.list.length
                              ? (this.popContent = JSON.parse(
                                  JSON.stringify(this.popContentPool)
                                ))
                              : this.popContent.list.shift(),
                            this.reloadAd({prepare: !0}))
                        },
                        !0
                      ),
                      $sdk.data.onEvent(
                        this,
                        "ck_recom_child_Ad",
                        ({adid: t, isBaidu: e}) => {
                          if (110 == t) {
                            if (
                              $sdk.data.getData("reportAdRefreshStatus") &&
                              ($sdk.data.setData("reportAdRefreshStatus", 0),
                              !$sdk.data.getData("canRefreshAd"))
                            )
                              return
                            this.closeRecom()
                          }
                        },
                        !0
                      )
                  },
                  onReady() {
                    this.reloadAd({prepare: !1})
                  },
                  postMessage(t) {
                    let {cj: e, mr: a} = $sdk.data.getData("queryParams")
                    setTimeout(() => {
                      this.$element("web").postMessage({message: e || a})
                    }, 200)
                  },
                  async reloadAd(t) {
                    for (let t = 0; t <= Number($sdk.pool.adQuantityNum); t++)
                      $sdk.data.sendEvent("showModal", {adid: 1111 + t})
                    $sdk.data.sendEvent("clickClear", t),
                      t.prepare ||
                        (this.popContent.list.shift(), (this.debounce = !0))
                  },
                  closeRecom() {
                    ;($sdk.pool.showAds = []), this.reloadAd({prepare: !1})
                  }
                })
            }
          },
          6340: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  data: () => ({boxShow: !0}),
                  async onInit() {
                    $sdk.data.onEvent(this, "onShow", this.myShow, !0)
                  },
                  onReady() {
                    this.show()
                  },
                  myShow() {
                    this.show()
                  },
                  async show() {
                    $sdk.data.getData("isExa") ||
                      (this.boxShow && (this.boxShow = !1),
                      (this.boxShow = !0),
                      this.$element("box").requestFullscreen({
                        screenOrientation: "portrait"
                      }))
                  }
                })
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
          6374: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  data: {projectName: "", isShow: !1},
                  async onInit() {
                    try {
                      $sdk.ad.reportCustomEvent(this, "sdk2_priv_init", "OK"),
                        (this.projectName = this.$app.$def.manifest.name)
                      let t = $sdk.data.getData("adInfo")
                      t ||
                        (t = await $sdk.ad.getAllADConfig(
                          "initUserPrivacy_getCacheEmpty"
                        ))
                      let e = !t
                      1 == (t && t.CONF ? t.CONF.ISASYS : e ? 1 : 0)
                        ? ((this.isShow = !0),
                          $sdk.ad.reportCustomEvent(this, "sdk2_priv_sw", "OK"))
                        : 0 == (t && t.CONF ? t.CONF.ISYS : 0)
                        ? this.show_Ysxy()
                        : ($sdk.ad.reportCustomEvent(
                            this,
                            "sdk2_priv_ag2",
                            "OK"
                          ),
                          this.jumpHome())
                    } catch (t) {
                      $sdk.ad.reportCustomEvent(
                        this,
                        "sdk2_priv_err",
                        JSON.stringify(t)
                      )
                    }
                  },
                  async show_Ysxy() {
                    ;(await $sdk.helper.getStorage("userAgreeState"))
                      ? ($sdk.ad.reportCustomEvent(this, "sdk2_priv_agd", "OK"),
                        this.jumpHome())
                      : ((this.isShow = !0),
                        $sdk.ad.reportCustomEvent(this, "sdk2_priv_sw", "OK"))
                  },
                  exit() {
                    $sdk.ad.reportCustomEvent(this, "user2_priv_dag", "OK"),
                      this.$app.exit()
                  },
                  agree() {
                    $sdk.ad.reportCustomEvent(this, "user2_priv_ag", "OK"),
                      $sdk.helper.setStorage("userAgreeState", !0),
                      this.jumpHome()
                  },
                  jumpHome() {
                    try {
                      this.$emit("userAgree")
                    } catch (t) {
                      $sdk.ad.reportCustomEvent(this, "sdk2_priv_err", t)
                    }
                  },
                  yhxy() {
                    $sdk.yhxy.yhxy()
                  },
                  yszc() {
                    $sdk.yhxy.yszc()
                  }
                })
            }
          },
          5235: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  props: ["adid", "adIndex", "popContent"],
                  data() {
                    const t = this.adid
                    return {
                      adType: "adNative",
                      name: this.$parent().name,
                      [`isShow${t}`]: $sdk.data.getData(`isShow${t}`, this),
                      isShow1101: $sdk.data.getData("isShow1101", this),
                      config: null,
                      debounce: !1,
                      isNative: !1,
                      adData: [{}],
                      adStatus: 735799,
                      isWC: !1,
                      is_ex_dbtn: !1,
                      isDTW: !1,
                      appid: $config.baiduAppid,
                      isTopOn: !1,
                      placementId: "",
                      appid: $config.baiduAppid,
                      isYlh: !1,
                      downLoadStatus: "",
                      downLoadReqStatus: ""
                    }
                  },
                  computed: {
                    treStyle() {
                      let t = "flex: 0;"
                      return (
                        this[`isShow${this.adid}`] &&
                          this.isNative &&
                          this.config &&
                          this.adIndex < 5 &&
                          (t = "flex: 1;"),
                        t
                      )
                    },
                    adInfoPosition: () => ($sdk.ad.deviceInfo.windowWidth, {}),
                    d_btn_style() {
                      let t = $sdk.data.getData("isTest")
                        ? "background-color: rgba(0, 255, 0, 1); opacity: 0.4;"
                        : "opacity: 0.01;"
                      return (
                        this.is_ex_dbtn
                          ? (t +=
                              "top: 0px; left: 0px; width: 750px; height: 100%;")
                          : 2 == this.adIndex
                          ? (t +=
                              "top: 0px; left: 0px; width: 750px; height: 150px;")
                          : (t +=
                              "bottom: 0px; left: 0px; width: 750px; height: 150px;"),
                        t
                      )
                    },
                    isView() {
                      return this.isShow1101
                        ? "transform: translateX(-999999px);"
                        : "transform: translateX(0px);"
                    },
                    bdNativeStyle() {
                      let t = $sdk.data.getData("isTest")
                        ? "background-color: rgba(255, 0, 0, 1); opacity: 0.4;"
                        : "opacity: 0.01;"
                      return "width: 750px; height: 100%;" + this.isView + t
                    },
                    adNativeStyle() {
                      let t = $sdk.data.getData("isTest")
                        ? "background-color: rgba(255, 0, 0, 1); opacity: 0.4;"
                        : "opacity: 0.01;"
                      return "width: 750px; height: 100%;" + this.isView + t
                    },
                    clickMaskStyle: () =>
                      "position: absolute; top: 0px; bottom: 0px; width: 100%;"
                  },
                  onInit() {
                    $sdk.data.onEvent(
                      this,
                      "showModal",
                      async ({adid: t}) => {
                        t != this.adid ||
                          this.debounce ||
                          (this.adStatus == $sdk.ad.event.SUCCESS &&
                            ($sdk.ad.reportAdEvent(
                              $sdk.pool.getAdid(this.adid),
                              this.adData[0].adParam,
                              this.adData[0].adNo,
                              $sdk.ad.event.USERBACK
                            ),
                            await $sdk.helper.delay(400)),
                          $sdk.data.setData(`isShow${this.adid}`, !1),
                          this.reloadAd())
                      },
                      !0
                    )
                  },
                  async reloadAd() {
                    try {
                      $sdk.data.setData(`isShow${this.adid}`, !1),
                        (await $sdk.pool.showAd(this, void 0))
                          ? $sdk.data.setData(`isShow${this.adid}`, !0)
                          : ($sdk.data.setData(`isShow${this.adid}`, !1),
                            0 == this.adIndex && (this.$parent().debounce = !1))
                    } catch (t) {}
                  },
                  adError(t, e) {
                    $sdk.pool.reportEr(this, t, e),
                      1106 != e.errCode && (this.config = null)
                  },
                  adShow() {
                    ;(this.$parent().showWeb = !0),
                      $sdk.pool.reportSw(this),
                      0 == this.adIndex &&
                        $sdk.ad.reportCustomEvent(
                          this,
                          "sdk2_sw_pop_",
                          `${this.popContent.list[0].scene}_${
                            this.popContent.list[0].materialInfoId
                          }_${$sdk.ad.disChannel()}`
                        )
                  },
                  adClick() {
                    $sdk.pool.reportCk(this),
                      $sdk.ad.reportCustomEvent(
                        this,
                        "user2_ck_pop_",
                        `${this.popContent.list[0].scene}_${
                          this.popContent.list[0].materialInfoId
                        }_${$sdk.ad.disChannel()}`
                      ),
                      this.clickFn(),
                      (this.$parent().debounce = !0),
                      (this.$parent().showWeb = !1)
                  },
                  d_btn_click(t) {
                    $sdk.pool.report_Btn_Ck(this)
                  },
                  clickFn() {
                    $sdk.data.setData("reportAdRefreshStatus", 3),
                      this.adData[0].isBaidu
                        ? setTimeout(() => {
                            this.clickFn2(!0)
                          }, 50)
                        : this.clickFn2(!1)
                  },
                  clickFn2(t) {
                    for (let t = 0; t <= Number($sdk.pool.adQuantityNum); t++)
                      $sdk.data.setData(`isShow${1111 + t}`, !1)
                    let e =
                      this.adData[0].isYlh &&
                      0 == this.downLoadStatus &&
                      this.adData[0].isApp
                    e && this.d_btn_click(),
                      setTimeout(() => {
                        ;(t || e) &&
                          this.$visible &&
                          ($sdk.data.setData("reportAdRefreshStatus", 0),
                          this.closeRecom())
                      }, 100)
                  },
                  closeRecom() {
                    for (let t = 0; t <= Number($sdk.pool.adQuantityNum); t++)
                      $sdk.data.setData(`isShow${1111 + t}`, !1)
                    ;($sdk.pool.showAds = []), this.$parent().reloadAd()
                  },
                  onAppStatusChange(t) {
                    const {status: e, progress: a} = t.detail
                    ;(this.downLoadStatus = e),
                      "" === this.downLoadReqStatus &&
                        ((this.downLoadReqStatus = e),
                        $sdk.ad.reportCustomEvent(
                          this,
                          "sdk2_ylhad_downloadstatus_",
                          `${$sdk.pool.getAdid(this.adid)}_${e}`
                        ))
                  }
                })
            }
          },
          4490: (t, e, a) => {
            t.exports = function (t, e, i) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var s = n(i("@app-module/system.router"))
              function n(t) {
                return t && t.__esModule ? t : {default: t}
              }
              n(a(8718)),
                (e.default = {
                  props: ["positionBanner"],
                  data() {
                    let t = `https://dplink.xsgame.net/QuickApp/oppo/iframe.html?packageName=${
                      $sdk.ad.package
                    }${$sdk.data.getData("query")}`
                    try {
                      t = `https://dplink.xsgame.net/QuickApp/oppo/iframe.html?packageName=${
                        $sdk.ad.package
                      }${Object.keys($sdk.data.getData("queryParams"))
                        .map((t) =>
                          "lk" == t
                            ? `&${t}=${encodeURIComponent(
                                $sdk.data.getData("queryParams")[t]
                              )}`
                            : `&${t}=${$sdk.data.getData("queryParams")[t]}`
                        )
                        .join("")}`
                    } catch (t) {}
                    return {
                      name: "index",
                      showPrivacy: !1,
                      showOpeenScreen: !0,
                      showJiaZhuo: !1,
                      userAgreed: !1,
                      startTime: 0,
                      isFullscreen: !1,
                      isShow109: !1,
                      isShow110: !1,
                      isShowBookDetails: $sdk.data.getData(
                        "isShowBookDetails",
                        this
                      ),
                      isShow111: !1,
                      adPopConfig: null,
                      webSrc: t,
                      webShow: !1
                    }
                  },
                  pagefinish() {},
                  message(t) {
                    setTimeout(() => {
                      ;(this.webShow = !1),
                        setTimeout(() => {
                          this.webShow = !0
                        }, 100)
                    }, 1e3)
                  },
                  onInit() {
                    $sdk.ad.reportCustomEvent(
                      this,
                      "sdk2_navslot_oninit_",
                      Date.now() - $sdk.ad.createTimestamp
                    ),
                      (this.startTime = Date.now()),
                      $sdk.data.onEvent(
                        this,
                        "onTabChanged",
                        this.myTabChanged,
                        !0
                      ),
                      $sdk.data.onEvent(this, "onBackPress", ({name: t}) => {
                        t == this.name && this.myBackPress()
                      }),
                      $sdk.data.onEvent(
                        this,
                        "onShow",
                        ({name: t}) => {
                          t == this.name &&
                            (this.isFullscreen ||
                              (this.$element("fvideo").requestFullscreen(),
                              (this.isFullscreen = !0)))
                        },
                        !0
                      ),
                      $sdk.data.onEvent(
                        this,
                        "onHide",
                        ({name: t}) => {
                          t == this.name &&
                            ((this.isFullscreen = !1), this.myHide())
                        },
                        !0
                      ),
                      $sdk.data.onEvent(
                        this,
                        "web",
                        () => {
                          this.$element("web").postMessage({message: "1"})
                        },
                        !0
                      )
                  },
                  onReady() {
                    this.$element("fvideo").requestFullscreen(),
                      (this.isFullscreen = !0)
                  },
                  fullscreenChange(t) {},
                  async userAgree() {
                    try {
                      $sdk.ad.reportCustomEvent(
                        this,
                        "sdk2_navslot_useragree_",
                        "OK"
                      ),
                        (this.userAgreed = !0)
                      const t = await $sdk.helper.getAdSwitch(111)
                      $sdk.ad.jpd > 0 &&
                      $sdk.ad.bookArr &&
                      $sdk.ad.is_jump_bookdetail() &&
                      t
                        ? (this.getFinImgList(),
                          $sdk.ad.reportCustomEvent(
                            this,
                            "user2_get_json_",
                            this.adPopConfig.localJson ? "local" : "online"
                          ),
                          $sdk.data.setData("isShowBookDetails", !0),
                          (this.isShow111 = !0))
                        : ($sdk.ad.reportCustomEvent(
                            this,
                            "sdk2_bookdetail_not_111",
                            "ok"
                          ),
                          $sdk.data.setData("isExa", !0),
                          this.$page.exitFullscreen(),
                          s.default.replace({uri: "pages/Nav"})),
                        (this.showPrivacy = !1)
                    } catch (t) {
                      $sdk.ad.reportCustomEvent(
                        this,
                        "sdk2_navslot_useragree_err",
                        JSON.stringify(t)
                      )
                    }
                  },
                  async myTabChanged() {},
                  async myBackPress() {
                    const t = $sdk.data.getData("isPendingVideo")
                    if (
                      this.showPrivacy ||
                      t ||
                      this.showOpeenScreen ||
                      this.isShow110
                    )
                      return
                    let e
                    ;(e = this.isShowBookDetails ? "jpd" : "index"),
                      (this.isShow109 = !1),
                      (await $sdk.ad.getADConfig(110))
                        ? ((this.isShow110 = !0),
                          await $sdk.pool.getAd(110),
                          $sdk.data.sendEvent("showModal", {
                            adid: 1101,
                            openSource: e
                          }),
                          $sdk.data.sendEvent("showModal", {adid: 1102}),
                          $sdk.data.sendEvent("showModal", {adid: 1103}))
                        : ($sdk.data.setData("isJumpTwoPage", !0),
                          s.default.back())
                  },
                  myHide() {
                    try {
                      if (
                        (($sdk.pool.showAds = []),
                        $sdk.data.getData("isPendingVideo"))
                      )
                        return
                      const t = $sdk.data.getData("isTouchNative"),
                        e = $sdk.data.getData("isJumpTwoPage")
                      t
                        ? ($sdk.videoPool.showVideo(51),
                          $sdk.ad.reportCustomEvent(
                            this,
                            "sdk2_hide_native_",
                            `${Date.now()}`
                          ))
                        : e
                        ? ($sdk.videoPool.showVideo(51),
                          $sdk.ad.reportCustomEvent(
                            this,
                            "sdk2_hide_jump_",
                            `${Date.now()}`
                          ))
                        : ($sdk.videoPool.showVideo(52),
                          $sdk.ad.reportCustomEvent(
                            this,
                            "sdk2_hide_home_",
                            `${Date.now()}`
                          )),
                        $sdk.data.setData("isTouchNative", !1),
                        $sdk.data.setData("isJumpTwoPage", !1)
                    } catch (t) {}
                    $sdk.data.setData("isTouchNative", !1),
                      $sdk.data.setData("isJumpTwoPage", !1)
                  },
                  closeOpenscreen() {
                    ;(this.showOpeenScreen = !1),
                      (this.showPrivacy = !0),
                      (this.webShow = !0)
                  },
                  getFinImgList() {
                    try {
                      let t = $sdk.data.getData("locConfApp"),
                        e = null
                      if (
                        $sdk.data.getData("adInfo") &&
                        $sdk.data.getData("adInfo").MLC &&
                        "{}" != JSON.stringify($sdk.data.getData("adInfo").MLC)
                      ) {
                        $sdk.data.setData(
                          "onConfApp",
                          $sdk.data.getData("adInfo").MLC
                        ),
                          (e = JSON.parse(
                            JSON.stringify($sdk.data.getData("onConfApp"))
                          )),
                          e.length <= 3 &&
                            (e = e.concat(
                              JSON.parse(JSON.stringify(t.children))
                            ))
                        try {
                          if (!e.some((t) => 31 == Number(t.materialInfoId))) {
                            const a = JSON.parse(
                              JSON.stringify(t.children)
                            ).find((t) => 31 == Number(t.materialInfoId))
                            a && e.push(a)
                          }
                        } catch (t) {}
                      } else e = JSON.parse(JSON.stringify(t))
                      this.adPopConfig = e
                      let a = {}
                      a.list = $sdk.data.getData("onConfApp")
                        ? this.adPopConfig
                        : this.adPopConfig.children
                      const i = [29, 30, 34, 35, 80],
                        s = [33, 31]
                      let n = a.list.filter((t) =>
                          i.includes(t.materialInfoId)
                        ),
                        d = a.list.filter((t) => s.includes(t.materialInfoId))
                      ;(a.menuList = n),
                        (a.backList = d),
                        (a.list = a.list.filter(
                          (t) => !i.concat(s).includes(t.materialInfoId)
                        ))
                      const o = JSON.parse(JSON.stringify(a.list))
                      for (let t = 0; t < 500; t++)
                        a.list.push(...this.filterImg(o))
                      $sdk.data.setData(
                        "popContent",
                        JSON.parse(JSON.stringify(a))
                      ),
                        $sdk.data.setData("popfixedContent", a)
                    } catch (t) {}
                  },
                  filterImg(t) {
                    try {
                      let e = [],
                        a = Math.floor(Math.random() * t.length)
                      return e.push(t[a]), e
                    } catch (t) {}
                  }
                })
            }
          },
          2115: (t) => {
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
          7913: (t) => {
            t.exports = {".Nav": {flexDirection: "column"}}
          },
          7209: (t) => {
            t.exports = {
              ".openScreen": {
                position: "fixed",
                width: "100%",
                height: "100%",
                display: "flex",
                backgroundImage: "/assets/images/loading.webp",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              ".openScreen .loading": {
                position: "absolute",
                top: "300px",
                width: "230px",
                height: "230px",
                borderRadius: "25px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "openScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "loading"}
                  ]
                }
              }
            }
          },
          6791: (t) => {
            t.exports = {}
          },
          693: (t) => {
            t.exports = {
              ".Native_QuitApp_Ver2": {
                position: "fixed",
                width: "100%",
                height: "100%",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.7)"
              },
              ".Native_QuitApp_Ver2 .adNative": {
                width: "100%",
                height: "100%",
                transform: '{"scaleY":1.25}',
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Native_QuitApp_Ver2"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adNative"}
                  ]
                }
              },
              ".fullScreen": {
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: "center"
              },
              ".fullScreen .adArea": {
                width: "675px",
                height: "773px",
                marginTop: "347px",
                borderRadius: "15px",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage: "/sdk/images/exitBG.webp",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"}
                  ]
                }
              },
              ".fullScreen .adArea .Digging_top": {
                position: "absolute",
                top: "50px",
                width: "100%",
                height: "100px",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: "40px",
                borderTopRightRadius: "40px",
                marginBottom: "20px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "Digging_top"}
                  ]
                }
              },
              ".fullScreen .adArea .Digging_top image": {
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "30px",
                right: "26px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "Digging_top"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".fullScreen .adArea .Digging_top text": {
                fontSize: "39px",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "normal",
                color: "#292929",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "Digging_top"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent": {
                position: "absolute",
                top: "150px",
                width: "100%",
                height: "380px",
                marginTop: "40px",
                marginRight: "0px",
                marginBottom: "40px",
                marginLeft: "0px",
                backgroundColor: "#ffffff",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .adVideo": {
                width: "100%",
                height: "380px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adVideo"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .ad_img": {
                width: "100%",
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "ad_img"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .adClose": {
                position: "absolute",
                top: "4px",
                left: "4px",
                width: "40px",
                height: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClose"}
                  ]
                }
              },
              ".fullScreen .adArea .Digging_bot": {
                position: "absolute",
                top: "650px",
                width: "100%",
                height: "129px",
                justifyContent: "space-around",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "Digging_bot"}
                  ]
                }
              },
              ".fullScreen .adArea .Digging_bot text": {
                width: "247px",
                height: "67px",
                fontSize: "28px",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "500",
                color: "#292929",
                textAlign: "center",
                lineHeight: "67px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "Digging_bot"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".fullScreen .adArea .Digging_bot .ok": {
                position: "absolute",
                top: "0px",
                left: "40px",
                width: "247px",
                height: "67px",
                borderRadius: "50px",
                borderTopWidth: "2px",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderLeftWidth: "2px",
                borderStyle: "solid",
                borderTopColor: "#fae163",
                borderRightColor: "#fae163",
                borderBottomColor: "#fae163",
                borderLeftColor: "#fae163",
                fontSize: "30px",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "normal",
                color: "#292929",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "Digging_bot"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "ok"}
                  ]
                }
              },
              ".fullScreen .adLogo": {
                position: "absolute",
                left: "10px",
                bottom: "10px",
                width: "80px",
                height: "80px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adLogo"}
                  ]
                }
              },
              ".dakai": {
                position: "absolute",
                top: "0px",
                left: "383px",
                width: "247px",
                height: "67px",
                borderRadius: "50px",
                backgroundColor: "#fae163",
                fontSize: "30px",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "normal",
                color: "#292929"
              },
              ".dakai1": {
                width: "247px",
                height: "67px",
                borderRadius: "50px",
                backgroundColor: "#fae163",
                fontSize: "30px",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "normal",
                color: "#292929"
              },
              ".fullScreen1": {
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              },
              ".fullScreen1 .adArea1": {
                width: "675px",
                borderRadius: "15px",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage: "/sdk/images/exitBG.webp",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea1"}
                  ]
                }
              },
              ".fullScreen1 .adArea1 .Digging_top1": {
                width: "100%",
                height: "129px",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: "40px",
                borderTopRightRadius: "40px",
                marginBottom: "20px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "Digging_top1"}
                  ]
                }
              },
              ".fullScreen1 .adArea1 .Digging_top1 image": {
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "30px",
                right: "26px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea1"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Digging_top1"
                    },
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".fullScreen1 .adArea1 .Digging_top1 text": {
                fontSize: "39px",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "normal",
                color: "#292929",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea1"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Digging_top1"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".fullScreen1 .adArea1 .Digging_bot1": {
                width: "100%",
                height: "129px",
                justifyContent: "space-around",
                marginTop: "35px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "Digging_bot1"}
                  ]
                }
              },
              ".fullScreen1 .adArea1 .Digging_bot1 text": {
                width: "247px",
                height: "67px",
                fontSize: "28px",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "500",
                color: "#292929",
                textAlign: "center",
                lineHeight: "67px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea1"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Digging_bot1"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".fullScreen1 .adArea1 .Digging_bot1 .ok": {
                width: "247px",
                height: "67px",
                borderRadius: "50px",
                borderTopWidth: "2px",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderLeftWidth: "2px",
                borderStyle: "solid",
                borderTopColor: "#fae163",
                borderRightColor: "#fae163",
                borderBottomColor: "#fae163",
                borderLeftColor: "#fae163",
                fontSize: "30px",
                fontFamily: "Adobe Heiti Std",
                fontWeight: "normal",
                color: "#292929",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea1"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "Digging_bot1"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "ok"}
                  ]
                }
              },
              ".fullScreen1 .adLogo": {
                position: "absolute",
                left: "10px",
                bottom: "10px",
                width: "80px",
                height: "80px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adLogo"}
                  ]
                }
              },
              ".d_btn": {
                position: "absolute",
                borderRadius: "0%",
                opacity: 0.01
              },
              ".hh": {transform: '{"translateX":"-999999px"}'}
            }
          },
          9331: (t) => {
            t.exports = {
              ".videoBanner": {
                position: "fixed",
                left: "0px",
                bottom: "0px",
                width: "750px",
                flexDirection: "column"
              },
              ".videoBanner .adContainer": {
                width: "750px",
                height: "100%",
                flexDirection: "column",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "videoBanner"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContainer"}
                  ]
                }
              },
              ".videoBanner .adContainer .adNative": {
                width: "100%",
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "videoBanner"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContainer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adNative"}
                  ]
                }
              },
              ".fullScreen": {
                width: "100%",
                height: "100%",
                backgroundColor: "#FFC0CB"
              },
              ".fullScreen .adArea": {
                position: "absolute",
                bottom: "0px",
                width: "100%",
                height: "150px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent": {
                width: "100%",
                height: "100%",
                backgroundColor: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .left": {
                flex: 30,
                position: "relative",
                alignSelf: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "left"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .left image": {
                borderRadius: "22px",
                height: "140px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "left"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .center": {
                flex: 50,
                flexDirection: "column",
                paddingTop: "0px",
                paddingRight: "3px",
                paddingBottom: "0px",
                paddingLeft: "3px",
                backgroundColor: "#000000",
                marginTop: "10px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "center"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .center .adTitle text": {
                color: "#ffffff",
                paddingTop: "5px",
                paddingRight: "0px",
                paddingBottom: "5px",
                paddingLeft: "0px",
                fontSize: "30px",
                fontWeight: "bold",
                lines: 1,
                textOverflow: "ellipsis",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "center"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adTitle"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .center .adDesc text": {
                color: "#ffffff",
                lines: 2,
                textOverflow: "ellipsis",
                fontSize: "25px",
                fontWeight: "bold",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "center"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adDesc"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .right": {
                flex: 20,
                backgroundColor: "#000000",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "right"}
                  ]
                }
              },
              ".fullScreen .adArea .adContent .right text": {
                paddingTop: "0px",
                paddingRight: "6px",
                paddingBottom: "0px",
                paddingLeft: "6px",
                borderRadius: "22px",
                color: "#FFFFFF",
                fontWeight: "bold",
                backgroundColor: "#ffa500",
                animationName: "bigger",
                animationDuration: "1000ms",
                animationIterationCount: -1,
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adContent"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "right"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              "@KEYFRAMES": {
                bigger: [
                  {transform: '{"scaleX":1,"scaleY":1,"scaleZ":1}', time: 0},
                  {
                    transform: '{"scaleX":0.8,"scaleY":0.8,"scaleZ":0.8}',
                    time: 50
                  },
                  {transform: '{"scaleX":1,"scaleY":1,"scaleZ":1}', time: 100}
                ]
              },
              ".fullScreen .adArea .adClose": {
                position: "absolute",
                top: "5px",
                right: "5px",
                width: "40px",
                height: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adArea"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adClose"}
                  ]
                }
              },
              ".fullScreen .clickMask": {
                position: "absolute",
                width: "100%",
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "clickMask"}
                  ]
                }
              },
              ".fullScreen .adLogo": {
                position: "absolute",
                left: "5px",
                bottom: "5px",
                width: "40px",
                height: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "adLogo"}
                  ]
                }
              },
              ".fullScreen .topOnStyle": {
                position: "absolute",
                bottom: "0px",
                width: "100%",
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "fullScreen"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "topOnStyle"}
                  ]
                }
              }
            }
          },
          3411: (t) => {
            t.exports = {
              ".knowledegPopUp": {
                position: "fixed",
                top: "0px",
                left: "0px",
                width: "750px",
                height: "1px"
              },
              ".adNative": {width: "750px", height: "100%"},
              ".clickButton": {
                position: "absolute",
                width: "300px",
                height: "169px",
                top: "0px",
                opacity: 0
              }
            }
          },
          1799: (t) => {
            t.exports = {
              ".popUp": {
                width: "100%",
                height: "100%",
                flexDirection: "column"
              },
              ".fullScreen": {
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px"
              },
              ".toolBox": {
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px"
              },
              ".toolBox2": {
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px"
              },
              ".close-img": {width: "100%", height: "100%"},
              ".close-pop": {
                position: "absolute",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%"
              },
              ".hongbao": {
                backgroundImage: "/sdk/ads/popUp_111/hb/hb-b1.webp",
                backgroundSize: "100% 100%"
              },
              ".hongbao .hb_btn": {
                position: "absolute",
                top: "500px",
                left: "73px",
                width: "400px",
                height: "100px",
                backgroundImage: "/sdk/ads/popUp_111/hb/hb-b2.webp",
                backgroundSize: "100% 100%",
                animationName: "bigger",
                animationDuration: "1s",
                animationIterationCount: -1,
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "hongbao"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "hb_btn"}
                  ]
                }
              },
              "@KEYFRAMES": {
                bigger: [
                  {transform: '{"scaleX":1,"scaleY":1,"scaleZ":1}', time: 0},
                  {
                    transform: '{"scaleX":1.1,"scaleY":1.1,"scaleZ":1.1}',
                    time: 50
                  },
                  {transform: '{"scaleX":1,"scaleY":1,"scaleZ":1}', time: 100}
                ],
                backer: [
                  {backgroundColor: "#000000", time: 0},
                  {backgroundColor: "rgba(0,0,0,0.95)", time: 25},
                  {backgroundColor: "rgba(0,0,0,0.9)", time: 50},
                  {backgroundColor: "rgba(0,0,0,0.85)", time: 75},
                  {backgroundColor: "rgba(0,0,0,0.8)", time: 100}
                ]
              },
              ".back": {
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "#000000"
              },
              ".back-anima": {
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "rgba(0,0,0,0.8)",
                animationName: "backer",
                animationDuration: "1s",
                animationIterationCount: 1
              },
              "._tomy": {
                position: "absolute",
                left: "0px",
                bottom: "420px",
                width: "57px",
                height: "189px"
              },
              ".ad-list": {
                flexDirection: "column",
                position: "absolute",
                top: "0px",
                left: "0px",
                bottom: "0px",
                right: "0px"
              }
            }
          },
          117: (t) => {
            t.exports = {}
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
          2423: (t) => {
            t.exports = {
              ".User_Privacy": {
                position: "fixed",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#a9a9a9"
              },
              ".User_Privacy .card": {
                width: "700px",
                paddingTop: "40px",
                paddingRight: "20px",
                paddingBottom: "40px",
                paddingLeft: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "User_Privacy"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "card"}
                  ]
                }
              },
              ".User_Privacy .card .title": {
                height: "50px",
                fontSize: "35px",
                fontWeight: "bold",
                color: "#000000",
                textAlign: "center",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "User_Privacy"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "card"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "title"}
                  ]
                }
              },
              ".User_Privacy .card .content": {
                marginTop: "30px",
                marginRight: "0px",
                marginBottom: "30px",
                marginLeft: "0px",
                textIndent: "65px",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "User_Privacy"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "card"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "content"}
                  ]
                }
              },
              ".User_Privacy .card .content a": {
                color: "#079bf4",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "User_Privacy"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "card"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "content"},
                    {t: "d"},
                    {t: "t", n: "a"}
                  ]
                }
              },
              ".User_Privacy .card .buttons": {
                width: "700px",
                height: "100px",
                justifyContent: "center",
                alignContent: "center",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "User_Privacy"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "card"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "buttons"}
                  ]
                }
              },
              ".User_Privacy .card .buttons .yes": {
                width: "350px",
                height: "100px",
                justifyContent: "center",
                alignItems: "center",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "User_Privacy"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "card"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "buttons"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "yes"}
                  ]
                }
              },
              ".User_Privacy .card .buttons .yes text": {
                width: "80%",
                height: "60px",
                fontSize: "30px",
                color: "#ffffff",
                textAlign: "center",
                borderRadius: "20px",
                backgroundColor: "#079bf4",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "User_Privacy"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "card"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "buttons"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "yes"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              }
            }
          },
          1304: (t) => {
            t.exports = {
              ".adNative": {width: "750px"},
              ".adBox": {width: "750px", height: "100%"},
              ".ad_inner": {
                position: "absolute",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: "center"
              },
              ".d_btn": {
                position: "absolute",
                borderRadius: "0%",
                flexDirection: "column"
              },
              ".d_btn .btn": {
                opacity: 0.01,
                width: "750px",
                flex: 1,
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "d_btn"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "btn"}
                  ]
                }
              },
              ".topStyle": {position: "absolute"}
            }
          },
          3309: (t) => {
            t.exports = {
              ".navSlot": {width: "100%", flexDirection: "column"},
              ".f_video": {
                width: "1px",
                height: "1px",
                position: "absolute",
                left: "0px",
                top: "0px",
                opacity: 0
              },
              ".wrap_video": {
                width: "100%",
                height: "100%",
                flexDirection: "column"
              }
            }
          },
          7856: (t) => {
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
          9646: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["Nav"],
              children: [
                {
                  type: "nav-slot",
                  attr: {
                    positionBanner: function () {
                      return this.tabHeight
                    }
                  }
                },
                {type: "video-banner3", attr: {}}
              ]
            }
          },
          8976: (t) => {
            t.exports = {
              type: "stack",
              attr: {},
              classList: ["wrapper"],
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["wrapper"],
                  children: [
                    {
                      type: "web",
                      attr: {
                        id: "web",
                        src: "https://dplink.dlhaoyuekj.cn/toolbox/index.html"
                      },
                      id: "web",
                      style: {width: "100%", height: "100%"}
                    }
                  ]
                }
              ]
            }
          },
          164: (t) => {
            t.exports = {
              type: "div",
              attr: {
                show: function () {
                  return this.showLoading
                }
              },
              classList: ["openScreen"],
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["loading"],
                  children: [
                    {type: "image", attr: {src: "/assets/images/logo.webp"}}
                  ]
                }
              ]
            }
          },
          537: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "oppo-open",
                  attr: {},
                  events: {"close-openscreen": "closeOpenscreen"}
                }
              ]
            }
          },
          260: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {type: "popup-1101", attr: {}},
                {
                  type: "popup-1102",
                  attr: {
                    positionBanner: function () {
                      return this.positionBanner
                    }
                  }
                },
                {type: "popup-1103", attr: {}}
              ]
            }
          },
          2003: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "block",
                  attr: {},
                  shown: function () {
                    return this.isShow1101
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["Native_QuitApp_Ver2"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["fullScreen1"],
                          shown: function () {
                            return this.reqStatus && !this.isTopOn
                          },
                          events: {click: "clikReq"},
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["adArea1"],
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["Digging_top1"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "确认退出吗？"}
                                    }
                                  ]
                                },
                                {
                                  type: "div",
                                  attr: {},
                                  style: {width: "100%", height: "473px"}
                                },
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["Digging_bot1"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "确定"},
                                      classList: ["ok"]
                                    },
                                    {
                                      type: "text",
                                      attr: {value: "立即打开"},
                                      classList: ["dakai1"]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          style: {height: "100%", position: "fixed"},
                          shown: function () {
                            return this.isNative
                          },
                          children: [
                            {
                              type: "div",
                              attr: {},
                              shown: function () {
                                return this.adData[0].isYueDong
                              },
                              classList: ["fullScreen1"],
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["adArea1"],
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["Digging_top1"],
                                      children: [
                                        {
                                          type: "text",
                                          attr: {value: "确认退出吗？"}
                                        }
                                      ]
                                    },
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["Digging_bot1"],
                                      children: [
                                        {
                                          type: "text",
                                          attr: {value: "确定"},
                                          events: {click: "endPage"},
                                          classList: ["ok"],
                                          style: {width: "50%"}
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  type: "yd-ad",
                                  attr: {
                                    customStyle: function () {
                                      return (
                                        this.baiduClickMaskStyle +
                                        "position: absolute; width: 100%;"
                                      )
                                    },
                                    adId: function () {
                                      return this.adData[0].adId
                                    }
                                  },
                                  shown: function () {
                                    return this.adData[0].adParam
                                  },
                                  events: {
                                    "-ad-click": "adClick",
                                    "-ad-expose": "adShow"
                                  },
                                  children: [
                                    {
                                      type: "yd-ad-clickable-area",
                                      attr: {
                                        adId: function () {
                                          return this.adData[0].adId
                                        },
                                        customStyle:
                                          "position: absolute; width: 100%; height: 100%;",
                                        type: "click"
                                      },
                                      children: [
                                        {
                                          type: "image",
                                          attr: {
                                            src: function () {
                                              return this.adData[0].img
                                            }
                                          },
                                          style: {opacity: 0}
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              shown: function () {
                                return (
                                  this.adData[0].isBaidu &&
                                  !this.adData[0].isYueDong
                                )
                              },
                              classList: ["fullScreen1"],
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["adArea1"],
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["Digging_top1"],
                                      children: [
                                        {
                                          type: "text",
                                          attr: {value: "确认退出吗？"}
                                        }
                                      ]
                                    },
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["Digging_bot1"],
                                      children: [
                                        {
                                          type: "text",
                                          attr: {value: "确定"},
                                          events: {click: "endPage"},
                                          classList: ["ok"],
                                          style: {width: "50%"}
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  type: "div",
                                  attr: {},
                                  shown: function () {
                                    return this.adData[0].adParam
                                  },
                                  style: function () {
                                    return (
                                      this.baiduClickMaskStyle +
                                      "position: absolute; width: 100%;"
                                    )
                                  },
                                  children: [
                                    {
                                      type: "mobads-ad",
                                      attr: {
                                        apid: function () {
                                          return this.adData[0].adParam
                                        },
                                        appid: function () {
                                          return this.appid
                                        },
                                        type: "feed"
                                      },
                                      events: {
                                        "ad-show": "adShow",
                                        "ad-click": "adClick",
                                        "ad-error": "adError"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              shown: function () {
                                return (
                                  this.isNative &&
                                  this.adData[0].isYlh &&
                                  !this.adData[0].isYueDong &&
                                  !this.adData[0].isBaidu
                                )
                              },
                              classList: ["adNative"],
                              children: [
                                {
                                  type: "ylh-ad",
                                  attr: {
                                    adId: function () {
                                      return this.adData[0].adId
                                    }
                                  },
                                  events: {
                                    "-ad-click": "adClick",
                                    "-ad-expose": "adShow",
                                    "-app-status-change": "onAppStatusChange"
                                  },
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["fullScreen"],
                                      style: function () {
                                        return this.delEl
                                      },
                                      children: [
                                        {
                                          type: "div",
                                          attr: {},
                                          classList: ["adArea"],
                                          children: [
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["Digging_top"],
                                              children: [
                                                {
                                                  type: "text",
                                                  attr: {value: "确认退出吗？"}
                                                }
                                              ]
                                            },
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["adContent"],
                                              shown: function () {
                                                return this.adAeraShow
                                              },
                                              children: [
                                                {
                                                  type: "div",
                                                  attr: {},
                                                  classList: ["adVideo"],
                                                  shown: function () {
                                                    return this.adData[0]
                                                      .isNativeVideo
                                                  },
                                                  children: [
                                                    {
                                                      type: "ylh-ad-video",
                                                      attr: {
                                                        adId: function () {
                                                          return this.adData[0]
                                                            .adId
                                                        }
                                                      }
                                                    },
                                                    {
                                                      type: "div",
                                                      attr: {},
                                                      style: {
                                                        width: "100%",
                                                        height: "100%",
                                                        position: "absolute"
                                                      },
                                                      children: [
                                                        {
                                                          type: "ylh-ad-clickable-area",
                                                          attr: {
                                                            adId: function () {
                                                              return this
                                                                .adData[0].adId
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  type: "ylh-ad-clickable-area",
                                                  attr: {
                                                    adId: function () {
                                                      return this.adData[0].adId
                                                    }
                                                  },
                                                  shown: function () {
                                                    return !this.adData[0]
                                                      .isNativeVideo
                                                  },
                                                  children: [
                                                    {
                                                      type: "image",
                                                      attr: {
                                                        src: function () {
                                                          return (
                                                            this.adData[0]
                                                              .img &&
                                                            this.adData[0].img
                                                          )
                                                        },
                                                        id: "Native_QuitApp_Ver2"
                                                      },
                                                      id: "Native_QuitApp_Ver2",
                                                      classList: ["ad_img"]
                                                    }
                                                  ]
                                                },
                                                {
                                                  type: "adlogo",
                                                  attr: {
                                                    left: "10",
                                                    bottom: "10",
                                                    url: function () {
                                                      return this.adData[0]
                                                        .adLogo
                                                    }
                                                  }
                                                },
                                                {
                                                  type: "div",
                                                  attr: {},
                                                  classList: ["adClose"],
                                                  children: [
                                                    {
                                                      type: "ad-close",
                                                      attr: {
                                                        adShow: "adAeraShow"
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["Digging_bot"],
                                              children: [
                                                {
                                                  type: "text",
                                                  attr: {value: "确定"},
                                                  events: {
                                                    click: function (t) {
                                                      return (
                                                        !this.debounce &&
                                                        this.endPage(t)
                                                      )
                                                    }
                                                  },
                                                  classList: ["ok"]
                                                },
                                                {
                                                  type: "text",
                                                  attr: {
                                                    value: function () {
                                                      return this.adData[0]
                                                        .clickBtnTxt
                                                    }
                                                  },
                                                  shown: function () {
                                                    return this.adAeraShow
                                                  },
                                                  classList: ["dakai"]
                                                },
                                                {
                                                  type: "div",
                                                  attr: {},
                                                  shown: function () {
                                                    return (
                                                      this.adAeraShow &&
                                                      !this.isWC &&
                                                      !this.is_ex_dbtn
                                                    )
                                                  },
                                                  classList: ["dakai"],
                                                  children: [
                                                    {
                                                      type: "ylh-ad-clickable-area",
                                                      attr: {
                                                        adId: function () {
                                                          return this.adData[0]
                                                            .adId
                                                        }
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  type: "text",
                                                  attr: {value: "立即打开"},
                                                  shown: function () {
                                                    return !(
                                                      this.adAeraShow &&
                                                      !this.isWC &&
                                                      !this.is_ex_dbtn
                                                    )
                                                  },
                                                  events: {
                                                    click: function (t) {
                                                      return (
                                                        !this.debounce &&
                                                        this.close(t)
                                                      )
                                                    }
                                                  },
                                                  classList: ["dakai"]
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          type: "div",
                                          attr: {},
                                          shown: function () {
                                            return this.isWC
                                          },
                                          style: function () {
                                            return (
                                              this.clickMaskStyle +
                                              "position: absolute; width: 100%; height: 100%;"
                                            )
                                          },
                                          children: [
                                            {
                                              type: "ylh-ad-clickable-area",
                                              attr: {
                                                adId: function () {
                                                  return this.adData[0].adId
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "ad",
                              attr: {
                                adid: function () {
                                  return this.adData[0].adId
                                },
                                type: "native"
                              },
                              shown: function () {
                                return !(
                                  this.adData[0].isYueDong ||
                                  this.adData[0].isBaidu ||
                                  (this.isNative && this.adData[0].isYlh)
                                )
                              },
                              classList: ["adNative"],
                              events: {
                                error: function (t) {
                                  return this.adError(this.err, t)
                                },
                                adclick: "adClick",
                                adshow: "adShow"
                              },
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["fullScreen"],
                                  style: function () {
                                    return this.delEl
                                  },
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["adArea"],
                                      children: [
                                        {
                                          type: "div",
                                          attr: {},
                                          classList: ["Digging_top"],
                                          children: [
                                            {
                                              type: "text",
                                              attr: {value: "确认退出吗？"}
                                            }
                                          ]
                                        },
                                        {
                                          type: "div",
                                          attr: {},
                                          classList: ["adContent"],
                                          shown: function () {
                                            return this.adAeraShow
                                          },
                                          children: [
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["adVideo"],
                                              children: [
                                                {
                                                  type: "ad-clickable-area",
                                                  attr: {type: "video"},
                                                  shown: function () {
                                                    return this.adData[0]
                                                      .isNativeVideo
                                                  }
                                                },
                                                {
                                                  type: "image",
                                                  attr: {
                                                    src: function () {
                                                      return (
                                                        this.adData[0]
                                                          .imgUrlList &&
                                                        this.adData[0]
                                                          .imgUrlList[0]
                                                      )
                                                    },
                                                    id: "Native_QuitApp_Ver2"
                                                  },
                                                  shown: function () {
                                                    return !this.adData[0]
                                                      .isNativeVideo
                                                  },
                                                  id: "Native_QuitApp_Ver2",
                                                  classList: ["ad_img"]
                                                },
                                                {
                                                  type: "ad-clickable-area",
                                                  attr: {type: "click"},
                                                  style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    position: "absolute"
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              type: "adlogo",
                                              attr: {left: "10", bottom: "10"}
                                            },
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["adClose"],
                                              children: [
                                                {
                                                  type: "ad-close",
                                                  attr: {adShow: "adAeraShow"}
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          type: "div",
                                          attr: {},
                                          classList: ["Digging_bot"],
                                          children: [
                                            {
                                              type: "text",
                                              attr: {value: "确定"},
                                              events: {
                                                click: function (t) {
                                                  return (
                                                    !this.debounce &&
                                                    this.endPage(t)
                                                  )
                                                }
                                              },
                                              classList: ["ok"]
                                            },
                                            {
                                              type: "text",
                                              attr: {
                                                value: function () {
                                                  return this.adData[0]
                                                    .clickBtnTxt
                                                }
                                              },
                                              shown: function () {
                                                return this.adAeraShow
                                              },
                                              classList: ["dakai"]
                                            },
                                            {
                                              type: "ad-clickable-area",
                                              attr: {type: "button"},
                                              shown: function () {
                                                return (
                                                  this.adAeraShow &&
                                                  !this.isWC &&
                                                  !this.is_ex_dbtn
                                                )
                                              },
                                              classList: ["dakai"],
                                              events: {click: "d_btn_click"}
                                            },
                                            {
                                              type: "text",
                                              attr: {value: "立即打开"},
                                              shown: function () {
                                                return !(
                                                  this.adAeraShow &&
                                                  !this.isWC &&
                                                  !this.is_ex_dbtn
                                                )
                                              },
                                              events: {
                                                click: function (t) {
                                                  return (
                                                    !this.debounce &&
                                                    this.close(t)
                                                  )
                                                }
                                              },
                                              classList: ["dakai"]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      type: "ad-clickable-area",
                                      attr: {type: "click"},
                                      shown: function () {
                                        return this.isWC
                                      },
                                      style: function () {
                                        return (
                                          this.clickMaskStyle +
                                          "position: absolute; width: 100%; height: 100%;"
                                        )
                                      }
                                    },
                                    {
                                      type: "ad-clickable-area",
                                      attr: {type: "button"},
                                      shown: function () {
                                        return !this.is_ex_dbtn
                                      },
                                      classList: ["d_btn", "hh"],
                                      events: {click: "d_btn_click"}
                                    },
                                    {
                                      type: "ad-clickable-area",
                                      attr: {type: "button"},
                                      shown: function () {
                                        return this.is_ex_dbtn
                                      },
                                      classList: ["d_btn"],
                                      style: function () {
                                        return this.d_btn_style
                                      },
                                      events: {click: "d_btn_click"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          shown: function () {
                            return this.isTopOn
                          },
                          classList: ["fullScreen1"],
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["adArea1"],
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["Digging_top1"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "确认退出吗？"}
                                    }
                                  ]
                                },
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["Digging_bot1"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "确定"},
                                      events: {click: "endPage"},
                                      classList: ["ok"],
                                      style: {width: "50%"}
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["topStyle"],
                              style: function () {
                                return this.topStyle
                              },
                              children: [
                                {
                                  type: "top-on",
                                  attr: {
                                    adid: function () {
                                      return this.adid
                                    },
                                    placementId: function () {
                                      return this.placementId
                                    },
                                    isBtn: function () {
                                      return this.is_ex_dbtn
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
                          shown: function () {
                            return (
                              !this.config && !this.reqStatus && !this.isTopOn
                            )
                          },
                          classList: ["fullScreen1"],
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["adArea1"],
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["Digging_top1"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "确认退出吗？"}
                                    }
                                  ]
                                },
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["Digging_bot1"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "确定"},
                                      events: {click: "endPage"},
                                      classList: ["ok"],
                                      style: {width: "50%"}
                                    }
                                  ]
                                }
                              ]
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
          1736: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "block",
                  attr: {},
                  shown: function () {
                    return this.isShow1102
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
                          type: "div",
                          attr: {},
                          shown: function () {
                            return this.isNative
                          },
                          classList: ["adContainer"],
                          children: [
                            {
                              type: "yd-ad",
                              attr: {
                                customStyle: "opacity: 0",
                                adId: function () {
                                  return this.adData[0].adId
                                }
                              },
                              shown: function () {
                                return this.adData[0].isYueDong
                              },
                              events: {
                                "-ad-click": "adClick",
                                "-ad-expose": "adShow"
                              },
                              children: [
                                {
                                  type: "yd-ad-clickable-area",
                                  attr: {
                                    adId: function () {
                                      return this.adData[0].adId
                                    },
                                    type: "click"
                                  },
                                  children: [
                                    {
                                      type: "image",
                                      attr: {
                                        src: function () {
                                          return this.adData[0].img
                                        }
                                      },
                                      style: {opacity: 0}
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              shown: function () {
                                return (
                                  this.adData[0].isBaidu &&
                                  !this.adData[0].isYueDong
                                )
                              },
                              style: {opacity: 0},
                              children: [
                                {
                                  type: "mobads-ad",
                                  attr: {
                                    apid: function () {
                                      return this.adData[0].adParam
                                    },
                                    appid: function () {
                                      return this.appid
                                    },
                                    type: "feed"
                                  },
                                  events: {
                                    "ad-show": "adShow",
                                    "ad-click": "adClick",
                                    "ad-error": "adError"
                                  }
                                }
                              ]
                            },
                            {
                              type: "ylh-ad",
                              attr: {
                                adId: function () {
                                  return this.adData[0].adId
                                }
                              },
                              shown: function () {
                                return (
                                  this.adData[0].isYlh &&
                                  !this.adData[0].isYueDong &&
                                  !this.adData[0].isBaidu
                                )
                              },
                              classList: ["adNative"],
                              events: {
                                "-ad-click": "adClick",
                                "-ad-expose": "adShow"
                              },
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["fullScreen"],
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["adArea"],
                                      children: [
                                        {
                                          type: "ylh-ad-clickable-area",
                                          attr: {
                                            adId: function () {
                                              return this.adData[0].adId
                                            }
                                          },
                                          classList: ["adContent"],
                                          children: [
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["left"],
                                              shown: function () {
                                                return this.adData[0]
                                                  .isNativeVideo
                                              },
                                              children: [
                                                {
                                                  type: "ylh-ad-video",
                                                  attr: {
                                                    adId: function () {
                                                      return this.adData[0].adId
                                                    }
                                                  },
                                                  style: {height: "140px"}
                                                }
                                              ]
                                            },
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["left"],
                                              shown: function () {
                                                return !this.adData[0]
                                                  .isNativeVideo
                                              },
                                              children: [
                                                {
                                                  type: "image",
                                                  attr: {
                                                    src: function () {
                                                      return (
                                                        this.adData[0].img &&
                                                        this.adData[0].img
                                                      )
                                                    },
                                                    id: "videoBanner"
                                                  },
                                                  id: "videoBanner"
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
                                                          return this.adData[0]
                                                            .title
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
                                                          return this.adData[0]
                                                            .desc
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
                                              classList: ["right"],
                                              children: [
                                                {
                                                  type: "text",
                                                  attr: {
                                                    value: function () {
                                                      return this.adData[0]
                                                        .clickBtnTxt
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          type: "adlogo",
                                          attr: {left: "0", bottom: "0"}
                                        },
                                        {
                                          type: "div",
                                          attr: {},
                                          classList: ["adClose"],
                                          children: [
                                            {
                                              type: "ad-close",
                                              attr: {adShow: "isShow1102"}
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "ad",
                              attr: {
                                adid: function () {
                                  return this.adData[0].adId
                                },
                                type: "native"
                              },
                              shown: function () {
                                return (
                                  !this.adData[0].isYueDong &&
                                  !this.adData[0].isBaidu &&
                                  !this.adData[0].isYlh
                                )
                              },
                              classList: ["adNative"],
                              events: {
                                error: function (t) {
                                  return this.adError(this.err, t)
                                },
                                adclick: "adClick",
                                adshow: "adShow"
                              },
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["fullScreen"],
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["adArea"],
                                      children: [
                                        {
                                          type: "ad-clickable-area",
                                          attr: {},
                                          classList: ["adContent"],
                                          children: [
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["left"],
                                              shown: function () {
                                                return this.adData[0]
                                                  .isNativeVideo
                                              },
                                              children: [
                                                {
                                                  type: "ad-clickable-area",
                                                  attr: {type: "video"},
                                                  style: {height: "140px"}
                                                }
                                              ]
                                            },
                                            {
                                              type: "div",
                                              attr: {},
                                              classList: ["left"],
                                              shown: function () {
                                                return !this.adData[0]
                                                  .isNativeVideo
                                              },
                                              children: [
                                                {
                                                  type: "image",
                                                  attr: {
                                                    src: function () {
                                                      return (
                                                        this.adData[0]
                                                          .imgUrlList &&
                                                        this.adData[0]
                                                          .imgUrlList[0]
                                                      )
                                                    },
                                                    id: "videoBanner"
                                                  },
                                                  id: "videoBanner"
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
                                                          return this.adData[0]
                                                            .title
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
                                                          return this.adData[0]
                                                            .desc
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
                                              classList: ["right"],
                                              children: [
                                                {
                                                  type: "text",
                                                  attr: {
                                                    value: function () {
                                                      return this.adData[0]
                                                        .clickBtnTxt
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          type: "ad-clickable-area",
                                          attr: {type: "button"},
                                          style: {
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            opacity: 0
                                          }
                                        },
                                        {
                                          type: "adlogo",
                                          attr: {left: "0", bottom: "0"}
                                        },
                                        {
                                          type: "div",
                                          attr: {},
                                          classList: ["adClose"],
                                          children: [
                                            {
                                              type: "ad-close",
                                              attr: {adShow: "isShow1102"}
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["topStyle"],
                          shown: function () {
                            return this.isTopOn
                          },
                          style: function () {
                            return this.topStyle
                          },
                          children: [
                            {
                              type: "top-on",
                              attr: {
                                adid: function () {
                                  return this.adid
                                },
                                placementId: function () {
                                  return this.placementId
                                },
                                isBtn: function () {
                                  return this.is_ex_dbtn
                                }
                              }
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
          5811: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "block",
                  attr: {},
                  shown: function () {
                    return this.isShow1103
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["knowledegPopUp"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["adNative"],
                          shown: function () {
                            return this.isNative && this.config
                          },
                          children: [
                            {
                              type: "yd-ad",
                              attr: {
                                customStyle: "opacity: 0",
                                adId: function () {
                                  return this.adData[0].adId
                                }
                              },
                              shown: function () {
                                return this.adData[0].isYueDong
                              },
                              events: {
                                "-ad-click": "adClick",
                                "-ad-expose": "adShow"
                              },
                              children: [
                                {
                                  type: "yd-ad-clickable-area",
                                  attr: {
                                    adId: function () {
                                      return this.adData[0].adId
                                    },
                                    type: "click"
                                  },
                                  children: [
                                    {
                                      type: "image",
                                      attr: {
                                        src: function () {
                                          return this.adData[0].img
                                        }
                                      },
                                      style: {opacity: 0}
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              shown: function () {
                                return (
                                  this.adData[0].isBaidu &&
                                  !this.adData[0].isYueDong
                                )
                              },
                              style: {opacity: 0},
                              children: [
                                {
                                  type: "mobads-ad",
                                  attr: {
                                    apid: function () {
                                      return this.adData[0].adParam
                                    },
                                    appid: function () {
                                      return this.appid
                                    },
                                    type: "feed"
                                  },
                                  events: {
                                    "ad-show": "adShow",
                                    "ad-click": "adClick",
                                    "ad-error": "adError"
                                  }
                                }
                              ]
                            },
                            {
                              type: "ylh-ad",
                              attr: {
                                adId: function () {
                                  return this.adData[0].adId
                                }
                              },
                              shown: function () {
                                return (
                                  this.adData[0].isYlh &&
                                  !this.adData[0].isYueDong &&
                                  !this.adData[0].isBaidu
                                )
                              },
                              classList: ["adNative"],
                              events: {
                                "-ad-click": "adClick",
                                "-ad-expose": "adShow"
                              },
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["adNative"],
                                  shown: function () {
                                    return this.adData[0].isNativeVideo
                                  },
                                  children: [
                                    {
                                      type: "ylh-ad-video",
                                      attr: {
                                        adId: function () {
                                          return this.adData[0].adId
                                        }
                                      },
                                      classList: ["adNative"]
                                    },
                                    {
                                      type: "ylh-ad-clickable-area",
                                      attr: {
                                        adId: function () {
                                          return this.adData[0].adId
                                        }
                                      },
                                      classList: ["clickButton"]
                                    }
                                  ]
                                },
                                {
                                  type: "ylh-ad-clickable-area",
                                  attr: {
                                    adId: function () {
                                      return this.adData[0].adId
                                    }
                                  },
                                  classList: ["adNative"],
                                  shown: function () {
                                    return !this.adData[0].isNativeVideo
                                  },
                                  children: [
                                    {
                                      type: "image",
                                      attr: {
                                        src: function () {
                                          return (
                                            this.adData[0].img &&
                                            this.adData[0].img
                                          )
                                        }
                                      },
                                      classList: ["adNative"]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "ad",
                              attr: {
                                adid: function () {
                                  return this.adData[0].adId
                                },
                                type: "native"
                              },
                              shown: function () {
                                return (
                                  !this.adData[0].isYueDong &&
                                  !this.adData[0].isBaidu &&
                                  !this.adData[0].isYlh
                                )
                              },
                              classList: ["adNative"],
                              events: {
                                error: function (t) {
                                  return this.adError(this.err, t)
                                },
                                adclick: "adClick",
                                adshow: "adShow"
                              },
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["adNative"],
                                  shown: function () {
                                    return this.adData[0].isNativeVideo
                                  },
                                  children: [
                                    {
                                      type: "ad-clickable-area",
                                      attr: {type: "video"},
                                      classList: ["adNative"]
                                    },
                                    {
                                      type: "ad-clickable-area",
                                      attr: {type: "button"},
                                      classList: ["clickButton"]
                                    }
                                  ]
                                },
                                {
                                  type: "ad-clickable-area",
                                  attr: {type: "click"},
                                  classList: ["adNative"],
                                  shown: function () {
                                    return !this.adData[0].isNativeVideo
                                  },
                                  children: [
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
                                      classList: ["adNative"]
                                    },
                                    {
                                      type: "ad-clickable-area",
                                      attr: {type: "button"},
                                      classList: ["clickButton"]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["topStyle"],
                          shown: function () {
                            return this.isTopOn
                          },
                          style: function () {
                            return this.topStyle
                          },
                          children: [
                            {
                              type: "top-on",
                              attr: {
                                adid: function () {
                                  return this.adid
                                },
                                placementId: function () {
                                  return this.placementId
                                },
                                isBtn: function () {
                                  return this.is_ex_dbtn
                                }
                              }
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
          1413: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["popUp"],
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["fullScreen"],
                  style: function () {
                    return "position: absolute;" + this.isView
                  },
                  events: {
                    click: function (t) {
                      return !this.debounce && this.reloadAd({prepare: !1}, t)
                    }
                  },
                  shown: function () {
                    return !this.showToolBox
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: function () {
                        return [this.backClassName]
                      }
                    },
                    {
                      type: "div",
                      attr: {},
                      events: {
                        click: function (t) {
                          return (
                            !this.debounce && this.reloadAd({prepare: !1}, t)
                          )
                        }
                      },
                      classList: ["hongbao"],
                      style: function () {
                        return this.hb_style
                      },
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["hb_btn"],
                          style: function () {
                            return this.hb_btn_style
                          }
                        }
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["close-pop"],
                      style: function () {
                        return this.closeStyle
                      },
                      events: {
                        click: function (t) {
                          return (
                            !this.debounce && this.reloadAd({prepare: !1}, t)
                          )
                        }
                      },
                      children: [
                        {
                          type: "image",
                          attr: {
                            src: function () {
                              return (
                                this.popContent.list[0].children[2] &&
                                this.popContent.list[0].children[2].text
                              )
                            }
                          },
                          classList: ["close-img"]
                        }
                      ]
                    },
                    {
                      type: "image",
                      attr: {
                        src: "https://mgdown-oss.sdkbalance.com/mg/QuickSdk/images/kefuRen.webp"
                      },
                      classList: ["_tomy"]
                    },
                    {
                      type: "image",
                      attr: {
                        src: function () {
                          return this.menuUrl
                        }
                      },
                      style: function () {
                        return this.menuFun
                      },
                      shown: function () {
                        return this.menuFun
                      }
                    },
                    {
                      type: "image",
                      attr: {
                        src: function () {
                          return this.backUrl
                        }
                      },
                      style: function () {
                        return this.backFun
                      },
                      shown: function () {
                        return this.backFun
                      }
                    }
                  ]
                },
                {
                  type: "web",
                  attr: {
                    id: "web",
                    src: "https://dplink.dlhaoyuekj.cn/toolbox/index.html"
                  },
                  shown: function () {
                    return this.showToolBox && this.showWeb
                  },
                  id: "web",
                  classList: ["toolBox"],
                  events: {
                    click: function (t) {
                      return (
                        !this.debounce &&
                        this.reloadAd({prepare: !1, isClick: !0}, t)
                      )
                    }
                  }
                },
                {
                  type: "div",
                  attr: {},
                  classList: ["ad-list"],
                  events: {
                    click: function (t) {
                      return (
                        !this.debounce &&
                        this.reloadAd({prepare: !1, isClick: !0}, t)
                      )
                    }
                  },
                  children: [
                    {
                      type: "block",
                      attr: {},
                      shown: function () {
                        return this.adQuantityNum > 2
                      },
                      children: [
                        {
                          type: "ad-native",
                          attr: {
                            adid: function () {
                              return 1113
                            },
                            popContent: function () {
                              return this.popContent
                            },
                            adIndex: "2"
                          }
                        }
                      ]
                    },
                    {
                      type: "block",
                      attr: {},
                      shown: function () {
                        return this.adQuantityNum > 4
                      },
                      children: [
                        {
                          type: "ad-native",
                          attr: {
                            adid: function () {
                              return 1115
                            },
                            popContent: function () {
                              return this.popContent
                            },
                            adIndex: "4"
                          }
                        }
                      ]
                    },
                    {
                      type: "block",
                      attr: {},
                      shown: function () {
                        return this.adQuantityNum > 0
                      },
                      children: [
                        {
                          type: "ad-native",
                          attr: {
                            adid: function () {
                              return 1111
                            },
                            popContent: function () {
                              return this.popContent
                            },
                            adIndex: "0"
                          }
                        }
                      ]
                    },
                    {
                      type: "block",
                      attr: {},
                      shown: function () {
                        return this.adQuantityNum > 3
                      },
                      children: [
                        {
                          type: "ad-native",
                          attr: {
                            adid: function () {
                              return 1114
                            },
                            popContent: function () {
                              return this.popContent
                            },
                            adIndex: "3"
                          }
                        }
                      ]
                    },
                    {
                      type: "block",
                      attr: {},
                      shown: function () {
                        return this.adQuantityNum > 1
                      },
                      children: [
                        {
                          type: "ad-native",
                          attr: {
                            adid: function () {
                              return 1112
                            },
                            popContent: function () {
                              return this.popContent
                            },
                            adIndex: "1"
                          }
                        }
                      ]
                    },
                    {
                      type: "block",
                      attr: {},
                      shown: function () {
                        return this.adQuantityNum > 5
                      },
                      children: [
                        {
                          type: "ad-native",
                          attr: {
                            adid: function () {
                              return 1111 + this.$idx + 5
                            },
                            adIndex: function () {
                              return this.$idx + 5
                            }
                          },
                          repeat: function () {
                            return this.adQuantityNum - 5
                          }
                        }
                      ]
                    },
                    {
                      type: "web",
                      attr: {
                        id: "web",
                        src: "https://dplink.dlhaoyuekj.cn/toolbox/index.html"
                      },
                      shown: function () {
                        return this.showToolBox && !this.showWeb
                      },
                      id: "web",
                      classList: ["toolBox2"],
                      events: {
                        click: function (t) {
                          return (
                            !this.debounce &&
                            this.reloadAd({prepare: !1, isClick: !0}, t)
                          )
                        }
                      }
                    }
                  ]
                }
              ]
            }
          },
          6759: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "stack",
                  attr: {id: "box"},
                  shown: function () {
                    return this.boxShow
                  },
                  id: "box"
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
          6485: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              children: [
                {
                  type: "block",
                  attr: {},
                  shown: function () {
                    return this.isShow
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["User_Privacy"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["card"],
                          children: [
                            {
                              type: "text",
                              attr: {
                                value: function () {
                                  return this.projectName + "使用隐私条款说明"
                                }
                              },
                              classList: ["title"]
                            },
                            {
                              type: "text",
                              attr: {},
                              classList: ["content"],
                              children: [
                                {
                                  type: "span",
                                  attr: {
                                    value: function () {
                                      return (
                                        "为了向您提供更好的服务和用户体验，需要向您获得一些权限受权，具体如下，当您在使用" +
                                        this.projectName +
                                        "的时候，需要一些关于收集个人隐私信息、使用、删除等具体说明，详情可阅读"
                                      )
                                    }
                                  }
                                },
                                {
                                  type: "a",
                                  attr: {value: "《隐私政策》"},
                                  events: {click: "yszc"}
                                },
                                {type: "span", attr: {value: " 和 "}},
                                {
                                  type: "a",
                                  attr: {value: "《用户协议》"},
                                  events: {click: "yhxy"}
                                },
                                {
                                  type: "span",
                                  attr: {
                                    value:
                                      " ，使用前请认真阅读，点击“同意”，视为您同意《隐私条款》的内容，点击“拒绝”,则退出本应用。 "
                                  }
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["buttons"],
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["yes"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "拒绝"},
                                      events: {click: "exit"}
                                    }
                                  ]
                                },
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["yes"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "同意"},
                                      events: {click: "agree"}
                                    }
                                  ]
                                }
                              ]
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
          9002: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["adNative"],
              style: function () {
                return this.treStyle
              },
              children: [
                {
                  type: "block",
                  attr: {},
                  shown: function () {
                    return `isShow${this.adid}` && this.isNative && this.config
                  },
                  children: [
                    {
                      type: "yd-ad",
                      attr: {
                        customStyle: function () {
                          return (
                            this.adNativeStyle +
                            "position: absolute; width: 100%;"
                          )
                        },
                        adId: function () {
                          return this.adData[0].adId
                        }
                      },
                      shown: function () {
                        return this.adData[0].isYueDong
                      },
                      events: {"-ad-click": "adClick", "-ad-expose": "adShow"},
                      children: [
                        {
                          type: "yd-ad-clickable-area",
                          attr: {
                            adId: function () {
                              return this.adData[0].adId
                            },
                            customStyle: function () {
                              return (
                                this.clickMaskStyle +
                                "position: absolute; width: 100%;"
                              )
                            },
                            type: "click"
                          },
                          children: [
                            {
                              type: "image",
                              attr: {
                                src: function () {
                                  return this.adData[0].img
                                }
                              },
                              style: {opacity: 0}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      shown: function () {
                        return (
                          this.adData[0].isBaidu && !this.adData[0].isYueDong
                        )
                      },
                      style: function () {
                        return this.bdNativeStyle
                      },
                      children: [
                        {
                          type: "mobads-ad",
                          attr: {
                            apid: function () {
                              return this.adData[0].adParam
                            },
                            appid: function () {
                              return this.appid
                            },
                            type: "feed"
                          },
                          events: {
                            "ad-show": "adShow",
                            "ad-click": "adClick",
                            "ad-error": "adError"
                          }
                        }
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      shown: function () {
                        return (
                          this.adData[0].isYlh &&
                          !this.adData[0].isYueDong &&
                          !this.adData[0].isBaidu
                        )
                      },
                      style: function () {
                        return (
                          this.adNativeStyle +
                          "position: absolute; width: 100%;"
                        )
                      },
                      children: [
                        {
                          type: "ylh-ad",
                          attr: {
                            adId: function () {
                              return this.adData[0].adId
                            }
                          },
                          events: {
                            "-ad-click": "adClick",
                            "-ad-expose": "adShow",
                            "-app-status-change": "onAppStatusChange"
                          },
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["ad_inner"],
                              style: function () {
                                return this.isView + "position: absolute;"
                              },
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  style: function () {
                                    return (
                                      this.clickMaskStyle +
                                      "position: absolute; width: 100%;"
                                    )
                                  },
                                  children: [
                                    {
                                      type: "ylh-ad-clickable-area",
                                      attr: {
                                        adId: function () {
                                          return this.adData[0].adId
                                        },
                                        type: "click"
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "ad",
                      attr: {
                        adid: function () {
                          return this.adData[0].adId
                        },
                        type: "native",
                        appInfoAreaX: function () {
                          return this.adInfoPosition.appInfoAreaX
                        },
                        appInfoAreaY: function () {
                          return this.adInfoPosition.appInfoAreaY
                        },
                        appInfoAreaLines: "2",
                        privacyAreaX: function () {
                          return this.adInfoPosition.privacyAreaX
                        },
                        privacyAreaY: function () {
                          return this.adInfoPosition.privacyAreaY
                        },
                        closeBtnPosition: "left-bottom"
                      },
                      shown: function () {
                        return !(
                          this.isTopOn ||
                          this.adData[0].isYueDong ||
                          this.adData[0].isBaidu ||
                          this.adData[0].isYlh
                        )
                      },
                      events: {
                        error: function (t) {
                          return this.adError(this.err, t)
                        },
                        adclick: "adClick",
                        adshow: "adShow"
                      },
                      style: function () {
                        return this.adNativeStyle
                      },
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["ad_inner"],
                          style: function () {
                            return this.isView
                          },
                          children: [
                            {
                              type: "ad-clickable-area",
                              attr: {type: "video"},
                              shown: function () {
                                return this.adData[0].isNativeVideo
                              },
                              style: {
                                width: "400px",
                                height: "225px",
                                left: "175px",
                                bottom: "-300px",
                                position: "absolute"
                              }
                            },
                            {
                              type: "ad-clickable-area",
                              attr: {type: "click"},
                              style: function () {
                                return this.clickMaskStyle
                              }
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["d_btn"],
                              style: function () {
                                return this.d_btn_style
                              },
                              children: [
                                {
                                  type: "ad-clickable-area",
                                  attr: {type: "button"},
                                  classList: ["btn"],
                                  events: {click: "d_btn_click"}
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "block",
                      attr: {},
                      shown: function () {
                        return !(
                          this.adData[0].isYueDong ||
                          this.adData[0].isBaidu ||
                          this.adData[0].isYlh ||
                          !this.isTopOn
                        )
                      },
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["topStyle"],
                          style: function () {
                            return this.topStyle
                          },
                          children: [
                            {
                              type: "top-on",
                              attr: {
                                adid: function () {
                                  return this.adid
                                },
                                placementId: function () {
                                  return this.placementId
                                },
                                isBtn: function () {
                                  return this.is_ex_dbtn
                                }
                              }
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
          3165: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["navSlot"],
              children: [
                {
                  type: "stack",
                  attr: {id: "fvideo", enablevideofullscreencontainer: "true"},
                  id: "fvideo",
                  children: [
                    {
                      type: "web",
                      attr: {
                        id: "web",
                        src: function () {
                          return this.webSrc
                        }
                      },
                      shown: function () {
                        return this.webShow
                      },
                      id: "web",
                      style: {opacity: 0},
                      events: {pagefinish: "pagefinish", message: "message"}
                    },
                    {
                      type: "open-screen",
                      attr: {},
                      events: {"close-openscreen": "closeOpenscreen"}
                    },
                    {
                      type: "block",
                      attr: {},
                      shown: function () {
                        return !this.showOpeenScreen
                      },
                      children: [
                        {
                          type: "privacy-com",
                          attr: {},
                          shown: function () {
                            return this.showPrivacy
                          },
                          events: {"user-agree": "userAgree"}
                        },
                        {
                          type: "popup-111",
                          attr: {
                            positionBanner: function () {
                              return this.positionBanner
                            }
                          },
                          shown: function () {
                            return this.isShow111
                          }
                        }
                      ]
                    },
                    {
                      type: "popup-110",
                      attr: {
                        positionBanner: function () {
                          return this.positionBanner
                        }
                      },
                      shown: function () {
                        return this.isShow110
                      }
                    }
                  ]
                }
              ]
            }
          },
          5050: (t, e, a) => {
            a(163)
            var i = a(8318)
            $app_define$(
              "@app-component/video-banner3",
              [],
              function (t, e, s) {
                i(s, e, t),
                  e.__esModule && e.default && (s.exports = e.default),
                  (s.exports.template = a(7856)),
                  (s.exports.style = a(2115))
              }
            )
          },
          6693: (t, e, a) => {
            $app_define$("@app-component/tool-box", [], function (t, e, i) {
              i.exports.template = a(8976)
            })
          },
          3178: (t, e, a) => {
            var i = a(4288)
            $app_define$("@app-component/oppo-open", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(164)),
                (s.exports.style = a(7209))
            })
          },
          2379: (t, e, a) => {
            a(3178)
            var i = a(5074)
            $app_define$("@app-component/open-screen", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(537))
            })
          },
          3370: (t, e, a) => {
            a(7847), a(2723), a(5051)
            var i = a(6139)
            $app_define$("@app-component/popup-110", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(260)),
                (s.exports.style = a(6791))
            })
          },
          7847: (t, e, a) => {
            var i = a(5609)
            $app_define$("@app-component/popup-1101", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(2003)),
                (s.exports.style = a(693))
            })
          },
          2723: (t, e, a) => {
            var i = a(7309)
            $app_define$("@app-component/popup-1102", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(1736)),
                (s.exports.style = a(9331))
            })
          },
          5051: (t, e, a) => {
            var i = a(666)
            $app_define$("@app-component/popup-1103", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(5811)),
                (s.exports.style = a(3411))
            })
          },
          3642: (t, e, a) => {
            a(5706), a(6693)
            var i = a(8196)
            $app_define$("@app-component/popup-111", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(1413)),
                (s.exports.style = a(1799))
            })
          },
          1006: (t, e, a) => {
            var i = a(6340)
            $app_define$("@app-component/book-details", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(6759)),
                (s.exports.style = a(117))
            })
          },
          163: (t, e, a) => {
            var i = a(2466)
            $app_define$("@app-component/adlogo", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(5972)),
                (s.exports.style = a(2391))
            })
          },
          4416: (t, e, a) => {
            var i = a(6374)
            $app_define$("@app-component/privacy-com", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(6485)),
                (s.exports.style = a(2423))
            })
          },
          5706: (t, e, a) => {
            var i = a(5235)
            $app_define$("@app-component/ad-native", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(9002)),
                (s.exports.style = a(1304))
            })
          },
          9261: (t, e, a) => {
            a(4416), a(2379), a(3370), a(3642), a(1006)
            var i = a(4490)
            $app_define$("@app-component/nav-slot", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(3165)),
                (s.exports.style = a(3309))
            })
          },
          6888: (t, e) => {
            "use strict"
            Object.defineProperty(e, "__esModule", {value: !0}),
              (e.default = void 0)
            var a,
              i =
                (a = $app_require$("@app-module/system.fetch")) && a.__esModule
                  ? a
                  : {default: a}
            function s(t) {
              return new Promise((e, a) => {
                i.default.fetch({
                  url: t.url,
                  method: t.method,
                  data: t.data,
                  header: {"Content-Type": "application/json"},
                  success: (t) => {
                    e(t)
                  },
                  fail: (t, e) => {
                    a(t)
                  },
                  complete: (t) => {
                    a(t)
                  }
                })
              })
            }
            e.default = {
              post: function (t, e) {
                return s({method: "post", url: t, data: e})
              },
              get: function (t, e = {}) {
                return s({method: "get", url: t, data: e})
              }
            }
          },
          3562: (t, e) => {
            "use strict"
            Object.defineProperty(e, "__esModule", {value: !0}),
              (e.chapterList = e.bookInfo = void 0),
              (e.bookInfo = {
                cover:
                  "https://mgdown-oss.sdkbalance.com/book-image/16774839410186e61505a6ccd4032ac074686d51e0921.jpeg",
                keywords: "",
                author: "杰哥",
                words: 1054970,
                total_chapters: 350,
                description:
                  "上古时期，炎帝误服断肠草而逝，族人无不伤心，帝魂飘荡神州大地，七七四十九日期至，是夜月明如昼，族人叩首祭拜。",
                book_id: 9800,
                book_name: "斗破之再逆苍天",
                channel_id: 1,
                cid: 5,
                status: 2
              }),
              (e.chapterList = [
                {
                  update_time: 1605644031,
                  is_vip: 1,
                  words: 2175,
                  display_order: 1,
                  chapter_title: "第1章　转世异域",
                  chapter_id: 1610480,
                  book_id: 9800
                },
                {
                  update_time: 1605644032,
                  is_vip: 1,
                  words: 2506,
                  display_order: 2,
                  chapter_title: "第2章　灵根测试",
                  chapter_id: 1610481,
                  book_id: 9800
                },
                {
                  update_time: 1605644032,
                  is_vip: 1,
                  words: 2440,
                  display_order: 3,
                  chapter_title: "第3章　炼气三层",
                  chapter_id: 1610482,
                  book_id: 9800
                },
                {
                  update_time: 1605644032,
                  is_vip: 1,
                  words: 3493,
                  display_order: 4,
                  chapter_title: "第4章　出神入化",
                  chapter_id: 1610483,
                  book_id: 9800
                },
                {
                  update_time: 1605644032,
                  is_vip: 1,
                  words: 2191,
                  display_order: 5,
                  chapter_title: "第5章　蛮荒森林",
                  chapter_id: 1610484,
                  book_id: 9800
                },
                {
                  update_time: 1605644032,
                  is_vip: 1,
                  words: 4504,
                  display_order: 6,
                  chapter_title: "第6章　九死一生",
                  chapter_id: 1610485,
                  book_id: 9800
                },
                {
                  update_time: 1605644033,
                  is_vip: 1,
                  words: 4410,
                  display_order: 7,
                  chapter_title: "第7章　龙血炼体",
                  chapter_id: 1610486,
                  book_id: 9800
                },
                {
                  update_time: 1605644033,
                  is_vip: 1,
                  words: 2292,
                  display_order: 8,
                  chapter_title: "第8章　五行法术",
                  chapter_id: 1610487,
                  book_id: 9800
                },
                {
                  update_time: 1605644033,
                  is_vip: 1,
                  words: 3564,
                  display_order: 9,
                  chapter_title: "第9章　大力蛮猿",
                  chapter_id: 1610488,
                  book_id: 9800
                },
                {
                  update_time: 1605644033,
                  is_vip: 1,
                  words: 2955,
                  display_order: 10,
                  chapter_title: "第10章　冰火晶洞",
                  chapter_id: 1610489,
                  book_id: 9800
                },
                {
                  update_time: 1605644033,
                  is_vip: 1,
                  words: 2006,
                  display_order: 11,
                  chapter_title: "第11章　猎杀狼王",
                  chapter_id: 1610490,
                  book_id: 9800
                },
                {
                  update_time: 1605644033,
                  is_vip: 1,
                  words: 3418,
                  display_order: 12,
                  chapter_title: "第12章　古神旧事",
                  chapter_id: 1610491,
                  book_id: 9800
                },
                {
                  update_time: 1605644034,
                  is_vip: 1,
                  words: 1953,
                  display_order: 13,
                  chapter_title: "第13章　平等契约",
                  chapter_id: 1610492,
                  book_id: 9800
                },
                {
                  update_time: 1605644034,
                  is_vip: 1,
                  words: 3803,
                  display_order: 14,
                  chapter_title: "第14章　游龙步法",
                  chapter_id: 1610493,
                  book_id: 9800
                },
                {
                  update_time: 1605644034,
                  is_vip: 1,
                  words: 3401,
                  display_order: 15,
                  chapter_title: "第15章　丹药基础",
                  chapter_id: 1610494,
                  book_id: 9800
                },
                {
                  update_time: 1605644034,
                  is_vip: 1,
                  words: 4647,
                  display_order: 16,
                  chapter_title: "第16章　吴记衣甲",
                  chapter_id: 1610495,
                  book_id: 9800
                },
                {
                  update_time: 1605644034,
                  is_vip: 1,
                  words: 2150,
                  display_order: 17,
                  chapter_title: "第17章　青阳镇劫杀",
                  chapter_id: 1610496,
                  book_id: 9800
                },
                {
                  update_time: 1605644035,
                  is_vip: 1,
                  words: 2154,
                  display_order: 18,
                  chapter_title: "第18章　梦回华夏",
                  chapter_id: 1610497,
                  book_id: 9800
                },
                {
                  update_time: 1605644035,
                  is_vip: 1,
                  words: 2138,
                  display_order: 19,
                  chapter_title: "第19章　青鸾峰灵洞",
                  chapter_id: 1610498,
                  book_id: 9800
                },
                {
                  update_time: 1605644035,
                  is_vip: 1,
                  words: 3864,
                  display_order: 20,
                  chapter_title: "第20章　青鸾峰灵田",
                  chapter_id: 1610499,
                  book_id: 9800
                },
                {
                  update_time: 1605644035,
                  is_vip: 1,
                  words: 3325,
                  display_order: 21,
                  chapter_title: "第21章　混沌魔珠",
                  chapter_id: 1610500,
                  book_id: 9800
                },
                {
                  update_time: 1605644035,
                  is_vip: 1,
                  words: 3405,
                  display_order: 22,
                  chapter_title: "第22章　蛮虎幼崽",
                  chapter_id: 1610501,
                  book_id: 9800
                },
                {
                  update_time: 1605644036,
                  is_vip: 1,
                  words: 4233,
                  display_order: 23,
                  chapter_title: "第23章　炼制筑基丹",
                  chapter_id: 1610502,
                  book_id: 9800
                },
                {
                  update_time: 1605644036,
                  is_vip: 1,
                  words: 2096,
                  display_order: 24,
                  chapter_title: "第24章　练气八层",
                  chapter_id: 1610503,
                  book_id: 9800
                },
                {
                  update_time: 1605644036,
                  is_vip: 1,
                  words: 3112,
                  display_order: 25,
                  chapter_title: "第25章　百变枪法",
                  chapter_id: 1610504,
                  book_id: 9800
                },
                {
                  update_time: 1605644036,
                  is_vip: 1,
                  words: 6108,
                  display_order: 26,
                  chapter_title: "第26章　宗门择徒",
                  chapter_id: 1610505,
                  book_id: 9800
                },
                {
                  update_time: 1605644036,
                  is_vip: 1,
                  words: 6436,
                  display_order: 27,
                  chapter_title: "第27章　进入宗门",
                  chapter_id: 1610506,
                  book_id: 9800
                },
                {
                  update_time: 1605644037,
                  is_vip: 1,
                  words: 2333,
                  display_order: 28,
                  chapter_title: "第28章　外院纷争",
                  chapter_id: 1610507,
                  book_id: 9800
                },
                {
                  update_time: 1605644037,
                  is_vip: 1,
                  words: 2750,
                  display_order: 29,
                  chapter_title: "第29章　三级丹药",
                  chapter_id: 1610508,
                  book_id: 9800
                },
                {
                  update_time: 1605644037,
                  is_vip: 1,
                  words: 3066,
                  display_order: 30,
                  chapter_title: "第30章　狂炼结金丹",
                  chapter_id: 1610509,
                  book_id: 9800
                },
                {
                  update_time: 1605644037,
                  is_vip: 1,
                  words: 6504,
                  display_order: 31,
                  chapter_title: "第31章　青龙王城",
                  chapter_id: 1610510,
                  book_id: 9800
                },
                {
                  update_time: 1605644037,
                  is_vip: 1,
                  words: 4374,
                  display_order: 32,
                  chapter_title: "第32章　混沌珠异变",
                  chapter_id: 1610511,
                  book_id: 9800
                },
                {
                  update_time: 1605644038,
                  is_vip: 1,
                  words: 7565,
                  display_order: 33,
                  chapter_title: "第33章　狂赚灵石",
                  chapter_id: 1610512,
                  book_id: 9800
                },
                {
                  update_time: 1605644038,
                  is_vip: 1,
                  words: 6440,
                  display_order: 34,
                  chapter_title: "第34章　小比获胜",
                  chapter_id: 1610513,
                  book_id: 9800
                },
                {
                  update_time: 1605644038,
                  is_vip: 1,
                  words: 3233,
                  display_order: 35,
                  chapter_title: "第35章　灭魂枪",
                  chapter_id: 1610514,
                  book_id: 9800
                },
                {
                  update_time: 1605644038,
                  is_vip: 1,
                  words: 3746,
                  display_order: 36,
                  chapter_title: "第36章　魔族祸患",
                  chapter_id: 1610515,
                  book_id: 9800
                },
                {
                  update_time: 1605644038,
                  is_vip: 1,
                  words: 4026,
                  display_order: 37,
                  chapter_title: "第37章　强化土墙",
                  chapter_id: 1610516,
                  book_id: 9800
                },
                {
                  update_time: 1605644039,
                  is_vip: 1,
                  words: 4341,
                  display_order: 38,
                  chapter_title: "第38章　内门大比",
                  chapter_id: 1610517,
                  book_id: 9800
                },
                {
                  update_time: 1605644039,
                  is_vip: 1,
                  words: 3638,
                  display_order: 39,
                  chapter_title: "第39章　大比获胜",
                  chapter_id: 1610518,
                  book_id: 9800
                },
                {
                  update_time: 1605644039,
                  is_vip: 1,
                  words: 3314,
                  display_order: 40,
                  chapter_title: "第40章　遮天掌",
                  chapter_id: 1610519,
                  book_id: 9800
                },
                {
                  update_time: 1605644039,
                  is_vip: 1,
                  words: 2219,
                  display_order: 41,
                  chapter_title: "第41章　洞金指",
                  chapter_id: 1610520,
                  book_id: 9800
                },
                {
                  update_time: 1605644039,
                  is_vip: 1,
                  words: 3857,
                  display_order: 42,
                  chapter_title: "第42章　铁翅雷鹏",
                  chapter_id: 1610521,
                  book_id: 9800
                },
                {
                  update_time: 1605644039,
                  is_vip: 1,
                  words: 2625,
                  display_order: 43,
                  chapter_title: "第43章　摄魂瓶",
                  chapter_id: 1610522,
                  book_id: 9800
                },
                {
                  update_time: 1605644040,
                  is_vip: 1,
                  words: 3316,
                  display_order: 44,
                  chapter_title: "第44章　秘境灭魔",
                  chapter_id: 1610523,
                  book_id: 9800
                },
                {
                  update_time: 1605644040,
                  is_vip: 1,
                  words: 2301,
                  display_order: 45,
                  chapter_title: "第45章　离开秘境",
                  chapter_id: 1610524,
                  book_id: 9800
                },
                {
                  update_time: 1605644040,
                  is_vip: 1,
                  words: 3717,
                  display_order: 46,
                  chapter_title: "第46章　白虎城",
                  chapter_id: 1610525,
                  book_id: 9800
                },
                {
                  update_time: 1605644040,
                  is_vip: 1,
                  words: 2175,
                  display_order: 47,
                  chapter_title: "第47章　青龙驿馆",
                  chapter_id: 1610526,
                  book_id: 9800
                },
                {
                  update_time: 1605644040,
                  is_vip: 1,
                  words: 2163,
                  display_order: 48,
                  chapter_title: "第48章　帝宝魔枪",
                  chapter_id: 1610527,
                  book_id: 9800
                },
                {
                  update_time: 1605644041,
                  is_vip: 1,
                  words: 3667,
                  display_order: 49,
                  chapter_title: "第49章　灵器飞剑",
                  chapter_id: 1610528,
                  book_id: 9800
                },
                {
                  update_time: 1605644041,
                  is_vip: 1,
                  words: 4255,
                  display_order: 50,
                  chapter_title: "第50章　雷鸟魂魄",
                  chapter_id: 1610529,
                  book_id: 9800
                }
              ])
          },
          8718: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict"
            Object.defineProperty(exports, "__esModule", {value: !0}),
              (exports.default = void 0)
            var _ajaxNovel = _interopRequireDefault(__webpack_require__(6888)),
              _MyBase = _interopRequireDefault(__webpack_require__(1055)),
              _system = _interopRequireDefault(
                $app_require$("@app-module/system.app")
              ),
              _system2 = _interopRequireDefault(
                $app_require$("@app-module/system.router")
              ),
              _data = __webpack_require__(3562)
            function _interopRequireDefault(t) {
              return t && t.__esModule ? t : {default: t}
            }
            async function getUK() {
              let t = await $sdk.ad.getUUID(),
                e = await $sdk.ad.getOAID(),
                a = _system.default.getInfo().versionName,
                i = `${$config.cpid}_${$config.appid}_${a}_${t}_${e}`
              return _MyBase.default.encode(i)
            }
            async function EulogizeBookPOST(CS, _par = {}) {
              let par = _par
              if (
                (par.vs || (par.vs = "1"),
                "getBookInfo" == CS && 9800 == par.book_id)
              )
                return _data.bookInfo
              if ("getChapterList" == CS && 9800 == par.book_id)
                return _data.chapterList
              const UK = await getUK(),
                url = `https://mg.sdkbalance.com/mg_pt/api/songshu_${CS}?uk=${UK}`,
                data = (await _ajaxNovel.default.post(url, par)).data
              let data_ = eval("(" + data + ")")
              return 0 == data_.code ? data_.data : data_
            }
            async function EulogizeBookGET(CS, par) {
              const UK = await getUK(),
                url = `https://mg.sdkbalance.com/mg_pt/api/songshu_${CS}?uk=${UK}`,
                data = (await _ajaxNovel.default.get(url, par)).data
              let data_ = eval("(" + data + ")")
              return 0 == data_.code ? data_.data : data_
            }
            async function getNovel_id(t) {
              try {
                const e = await $sdk.ad.getADConfig(t)
                return e && e.IDS && e.IDS[0].ID
              } catch (t) {
                return !1
              }
            }
            async function addReadingRecords(t) {
              try {
                let e = await $sdk.helper.getStorage("readingRecordsBD")
                if (
                  ((e = e ? JSON.parse(e) : []),
                  e.some((e) => JSON.stringify(e) === JSON.stringify(t)))
                )
                  return
                e.unshift(t),
                  await $sdk.helper.setStorage("readingRecordsBD", e)
              } catch (t) {}
            }
            function novelInit() {
              return new Promise(async (t, e) => {
                try {
                  if (await $sdk.helper.getStorage("NAN_BOOKS_DET"))
                    return void t(!0)
                  Date.now()
                  let [e, a, i] = await Promise.all([
                    EulogizeBookPOST("getBookList", {channel_id: 1, vs: 1}),
                    EulogizeBookPOST("getBookList", {channel_id: 2, vs: 1}),
                    EulogizeBookPOST("getCategoryList", {})
                  ])
                  Date.now()
                  const s = e.concat(a)
                  await $sdk.helper.setStorage("NAN_BOOKS_DET", e),
                    await $sdk.helper.setStorage("NV_BOOKS_DET", a),
                    await $sdk.helper.setStorage("BOOK_DET_ALL", s),
                    await $sdk.helper.setStorage("CATEGORYLIST", i),
                    t(!0)
                } catch (t) {
                  e(!1)
                }
              })
            }
            function takeNDistinctElements(t, e) {
              const a = t.length
              return a <= e ? t : getRandomIndices(a, e).map((e) => t[e])
            }
            function getRandomIndices(t, e) {
              let a = []
              for (; a.length < e; ) {
                let e = Math.floor(Math.random() * t)
                a.includes(e) || a.push(e)
              }
              return a
            }
            function getBoundingClientRectPromise(t) {
              return new Promise((e, a) => {
                t.getBoundingClientRect({
                  success: function (t) {
                    const {
                      top: a,
                      bottom: i,
                      left: s,
                      right: n,
                      width: d,
                      height: o
                    } = t
                    e({
                      top: a,
                      bottom: i,
                      left: s,
                      right: n,
                      width: d,
                      height: o
                    })
                  },
                  fail: function (t, e) {
                    a({errorData: t, errorCode: e})
                  },
                  complete: function () {}
                })
              })
            }
            var _default = (exports.default = {
              EulogizeBookPOST,
              EulogizeBookGET,
              getNovel_id,
              addReadingRecords,
              novelInit,
              takeNDistinctElements,
              getBoundingClientRectPromise
            })
          },
          5736: (t, e, a) => {
            "use strict"
            Object.defineProperty(e, "__esModule", {value: !0}),
              (e.default = void 0)
            var i = n(a(8361)),
              s = n(a(1055))
            function n(t) {
              return t && t.__esModule ? t : {default: t}
            }
            function d(t, e) {
              var a = Object.keys(t)
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t)
                e &&
                  (i = i.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  })),
                  a.push.apply(a, i)
              }
              return a
            }
            function o(t, e, a) {
              return (
                (e = (function (t) {
                  var e = (function (t) {
                    if ("object" != typeof t || !t) return t
                    var e = t[Symbol.toPrimitive]
                    if (void 0 !== e) {
                      var a = e.call(t, "string")
                      if ("object" != typeof a) return a
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      )
                    }
                    return String(t)
                  })(t)
                  return "symbol" == typeof e ? e : e + ""
                })(e)) in t
                  ? Object.defineProperty(t, e, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (t[e] = a),
                t
              )
            }
            function r(t) {
              try {
                let e = ""
                return (
                  (e =
                    isNaN(t) && 11 == t.length
                      ? s.default.decode(s.default.decode(t + "="))
                      : t),
                  (isNaN(e) || 0 == e.length || parseInt(e) < 9483) &&
                    (e = "errorchannel"),
                  e
                )
              } catch (t) {
                return "unknownchannel"
              }
            }
            e.default = {
              resetChannel: function (t, e) {
                return "OPPO" == $sdk.ad.channel()
                  ? t.oo
                    ? t.oo
                    : e
                  : "VIVO" == $sdk.ad.channel()
                  ? t.vv
                    ? t.vv
                    : e
                  : "MI" == $sdk.ad.channel()
                  ? t.mi
                    ? t.mi
                    : e
                  : "HUAWEI" == $sdk.ad.channel()
                  ? t.hw
                    ? t.hw
                    : e
                  : void 0
              },
              getDynamicParams: function (t) {
                try {
                  let e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var a = null != arguments[e] ? arguments[e] : {}
                      e % 2
                        ? d(Object(a), !0).forEach(function (e) {
                            o(t, e, a[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(a)
                          )
                        : d(Object(a)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(a, e)
                            )
                          })
                    }
                    return t
                  })({}, t)
                  delete e.tp,
                    delete e.avid,
                    delete e.cid,
                    delete e.oaid,
                    delete e.uuid,
                    delete e.ve,
                    delete e.ts,
                    delete e.trackcode,
                    delete e.sc,
                    delete e.close,
                    delete e.ct
                  let a = []
                  for (let t in e) {
                    let i = e[t]
                    "source" == t && (i = r(e[t])),
                      a.push(`|${t}:${encodeURIComponent(i)}`)
                  }
                  return a.join("")
                } catch (t) {
                  return ""
                }
              },
              checkParams: function (t) {
                try {
                  let e = (function (t) {
                    try {
                      let e = []
                      for (const a in t) e.push(`${a}=${t[a]}`)
                      return e.join("&")
                    } catch (t) {
                      return ""
                    }
                  })(t)
                  if (!e) return
                  e += `&mcf=${$sdk.ad.disChannel()}&mop=${$config.copId}`
                  let a =
                    e +
                    "&cmp=" +
                    (function (t) {
                      try {
                        return new i.default().hex_md5(t)
                      } catch (t) {
                        return ""
                      }
                    })(e)
                  $sdk.ad.zap = encodeURIComponent(a)
                } catch (t) {}
              },
              handleSource: r
            }
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
                  loadNum: s,
                  sp: n,
                  isBidding: d,
                  adidInfo: o,
                  isBanner: r
                } = t
                let l = null
                if (r) l = 30
                else {
                  let t = null,
                    e = $sdk.data.getData("appAdInfo").timeout / 1e3
                  "VTO" in o
                    ? ((t = parseInt(o.VTO) / 1e3 || 30), (l = t))
                    : (l = e)
                }
                let c = await Promise.race([
                  this.load_Native(e, a, i, s, n, d),
                  $sdk.helper.requestAd_Timeout(l)
                ])
                return (
                  "TIMEOUT" == c &&
                    ((this.is_time_out = !0),
                    (c = ""),
                    $sdk.ad.reportAdEvent(
                      e,
                      a,
                      i,
                      $sdk.ad.event.REQUESTTIMEOUT,
                      n
                    ),
                    $sdk.ad.reportAdEvent(
                      e,
                      a,
                      i,
                      $sdk.ad.event.ERROR,
                      n,
                      "_code:-66_info:TIMEOUT"
                    )),
                  c
                )
              }
              async load_Native(t, e, a, s, n = 0, d) {
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
                        d ? 0 : n
                      ),
                      i.default.preloadAd({
                        adUnitId: this.nativeId,
                        type: "native",
                        adCount: s && s > 0 ? s : 1,
                        success: (s) => {
                          if (this.is_time_out) this.is_time_out = !1
                          else if (s.adList && s.adList[0]) {
                            const r = s.adList[0].ecpm,
                              l = s.adList[0].adId
                            let c = !0
                            const p =
                              ($sdk.data.getData("appAdInfo") &&
                                $sdk.data.getData("appAdInfo").bdLowPrice) ||
                              -1
                            if (!isNaN(r) && d) {
                              if (((s.adList[0].sp = r), !(r >= p)))
                                return (
                                  i.default.notifyRankLoss({
                                    adid: l,
                                    winPrice: r + 1,
                                    code: 1,
                                    channel: "mob"
                                  }),
                                  o(""),
                                  (c = !1),
                                  void $sdk.ad.reportAdEvent(
                                    t,
                                    e,
                                    a,
                                    $sdk.ad.event.ERROR,
                                    r,
                                    "_code:-8_info:低于限制价格"
                                  )
                                )
                              i.default.notifyRankWin({
                                adid: l,
                                lossPrice: r - 1
                              }),
                                i.default.setBidECPM({adid: l, ecpm: r})
                            }
                            let h = s.adList[0].imgUrlList
                            $sdk.ad.reportAdEvent(
                              t,
                              e,
                              `${a}`,
                              $sdk.ad.event.SUCCESS,
                              d ? r : n,
                              h && h[0] ? h[0].split("/")[2] : ""
                            ),
                              s.adList.forEach((t) => {
                                ;(t.adNo = this.adNo),
                                  (h && h[0]) || (t.imgUrlList = ["https://"])
                              })
                            const u = $sdk.ad.isNativeVideo(s.adList)
                            o(u)
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
                        fail: (i, s) => {
                          this.is_time_out
                            ? (this.is_time_out = !1)
                            : ($sdk.ad.reportAdEvent(
                                t,
                                e,
                                a,
                                $sdk.ad.event.ERROR,
                                0,
                                `_code:${i.errCode ? i.errCode : s}_info:${
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
          },
          1055: (t, e) => {
            "use strict"
            var a, i
            void 0 ===
              (i =
                "function" ==
                typeof (a = function () {
                  function t() {
                    this._keyStr =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz+/="
                  }
                  return (
                    (t.prototype.encode = function (t) {
                      var e,
                        a,
                        i,
                        s,
                        n,
                        d,
                        o,
                        r = "",
                        l = 0
                      for (t = this._utf8_encode(t); l < t.length; )
                        (s = (e = t.charCodeAt(l++)) >> 2),
                          (n = ((3 & e) << 4) | ((a = t.charCodeAt(l++)) >> 4)),
                          (d =
                            ((15 & a) << 2) | ((i = t.charCodeAt(l++)) >> 6)),
                          (o = 63 & i),
                          isNaN(a) ? (d = o = 64) : isNaN(i) && (o = 64),
                          (r =
                            r +
                            this._keyStr.charAt(s) +
                            this._keyStr.charAt(n) +
                            this._keyStr.charAt(d) +
                            this._keyStr.charAt(o))
                      return r
                    }),
                    (t.prototype.decode = function (t) {
                      var e,
                        a,
                        i,
                        s,
                        n,
                        d,
                        o = "",
                        r = 0
                      for (
                        t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                        r < t.length;

                      )
                        (e =
                          (this._keyStr.indexOf(t.charAt(r++)) << 2) |
                          ((s = this._keyStr.indexOf(t.charAt(r++))) >> 4)),
                          (a =
                            ((15 & s) << 4) |
                            ((n = this._keyStr.indexOf(t.charAt(r++))) >> 2)),
                          (i =
                            ((3 & n) << 6) |
                            (d = this._keyStr.indexOf(t.charAt(r++)))),
                          (o += String.fromCharCode(e)),
                          64 != n && (o += String.fromCharCode(a)),
                          64 != d && (o += String.fromCharCode(i))
                      return this._utf8_decode(o)
                    }),
                    (t.prototype._utf8_encode = function (t) {
                      t = t.replace(/\r\n/g, "\n")
                      for (var e = "", a = 0; a < t.length; a++) {
                        var i = t.charCodeAt(a)
                        i < 128
                          ? (e += String.fromCharCode(i))
                          : i > 127 && i < 2048
                          ? ((e += String.fromCharCode((i >> 6) | 192)),
                            (e += String.fromCharCode((63 & i) | 128)))
                          : ((e += String.fromCharCode((i >> 12) | 224)),
                            (e += String.fromCharCode(((i >> 6) & 63) | 128)),
                            (e += String.fromCharCode((63 & i) | 128)))
                      }
                      return e
                    }),
                    (t.prototype._utf8_decode = function (t) {
                      for (
                        var e = "", a = 0, i = 0, s = 0, n = 0;
                        a < t.length;

                      )
                        (i = t.charCodeAt(a)) < 128
                          ? ((e += String.fromCharCode(i)), a++)
                          : i > 191 && i < 224
                          ? ((s = t.charCodeAt(a + 1)),
                            (e += String.fromCharCode(
                              ((31 & i) << 6) | (63 & s)
                            )),
                            (a += 2))
                          : ((s = t.charCodeAt(a + 1)),
                            (n = t.charCodeAt(a + 2)),
                            (e += String.fromCharCode(
                              ((15 & i) << 12) | ((63 & s) << 6) | (63 & n)
                            )),
                            (a += 3))
                      return e
                    }),
                    new t()
                  )
                })
                  ? a.apply(e, [])
                  : a) || (t.exports = i)
          },
          8361: (t, e) => {
            "use strict"
            function a(t, e, a) {
              return (
                (e = (function (t) {
                  var e = (function (t) {
                    if ("object" != typeof t || !t) return t
                    var e = t[Symbol.toPrimitive]
                    if (void 0 !== e) {
                      var a = e.call(t, "string")
                      if ("object" != typeof a) return a
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      )
                    }
                    return String(t)
                  })(t)
                  return "symbol" == typeof e ? e : e + ""
                })(e)) in t
                  ? Object.defineProperty(t, e, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (t[e] = a),
                t
              )
            }
            Object.defineProperty(e, "__esModule", {value: !0}),
              (e.default = void 0),
              (e.default = class {
                constructor() {
                  a(this, "hexcase", 0),
                    a(this, "b64pad", ""),
                    a(this, "chrsz", 8)
                }
                hex_md5(t) {
                  return this.binl2hex(
                    this.core_md5(this.str2binl(t), t.length * this.chrsz)
                  )
                }
                b64_md5(t) {
                  return this.binl2b64(
                    this.core_md5(this.str2binl(t), t.length * this.chrsz)
                  )
                }
                str_md5(t) {
                  return this.binl2str(
                    this.core_md5(this.str2binl(t), t.length * this.chrsz)
                  )
                }
                hex_hmac_md5(t, e) {
                  return this.binl2hex(this.core_hmac_md5(t, e))
                }
                b64_hmac_md5(t, e) {
                  return this.binl2b64(this.core_hmac_md5(t, e))
                }
                str_hmac_md5(t, e) {
                  return this.binl2str(this.core_hmac_md5(t, e))
                }
                md5_vm_test() {
                  return (
                    "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc")
                  )
                }
                core_md5(t, e) {
                  ;(t[e >> 5] |= 128 << e % 32),
                    (t[14 + (((e + 64) >>> 9) << 4)] = e)
                  for (
                    var a = 1732584193,
                      i = -271733879,
                      s = -1732584194,
                      n = 271733878,
                      d = 0;
                    d < t.length;
                    d += 16
                  ) {
                    var o = a,
                      r = i,
                      l = s,
                      c = n
                    ;(a = this.md5_ff(a, i, s, n, t[d + 0], 7, -680876936)),
                      (n = this.md5_ff(n, a, i, s, t[d + 1], 12, -389564586)),
                      (s = this.md5_ff(s, n, a, i, t[d + 2], 17, 606105819)),
                      (i = this.md5_ff(i, s, n, a, t[d + 3], 22, -1044525330)),
                      (a = this.md5_ff(a, i, s, n, t[d + 4], 7, -176418897)),
                      (n = this.md5_ff(n, a, i, s, t[d + 5], 12, 1200080426)),
                      (s = this.md5_ff(s, n, a, i, t[d + 6], 17, -1473231341)),
                      (i = this.md5_ff(i, s, n, a, t[d + 7], 22, -45705983)),
                      (a = this.md5_ff(a, i, s, n, t[d + 8], 7, 1770035416)),
                      (n = this.md5_ff(n, a, i, s, t[d + 9], 12, -1958414417)),
                      (s = this.md5_ff(s, n, a, i, t[d + 10], 17, -42063)),
                      (i = this.md5_ff(i, s, n, a, t[d + 11], 22, -1990404162)),
                      (a = this.md5_ff(a, i, s, n, t[d + 12], 7, 1804603682)),
                      (n = this.md5_ff(n, a, i, s, t[d + 13], 12, -40341101)),
                      (s = this.md5_ff(s, n, a, i, t[d + 14], 17, -1502002290)),
                      (i = this.md5_ff(i, s, n, a, t[d + 15], 22, 1236535329)),
                      (a = this.md5_gg(a, i, s, n, t[d + 1], 5, -165796510)),
                      (n = this.md5_gg(n, a, i, s, t[d + 6], 9, -1069501632)),
                      (s = this.md5_gg(s, n, a, i, t[d + 11], 14, 643717713)),
                      (i = this.md5_gg(i, s, n, a, t[d + 0], 20, -373897302)),
                      (a = this.md5_gg(a, i, s, n, t[d + 5], 5, -701558691)),
                      (n = this.md5_gg(n, a, i, s, t[d + 10], 9, 38016083)),
                      (s = this.md5_gg(s, n, a, i, t[d + 15], 14, -660478335)),
                      (i = this.md5_gg(i, s, n, a, t[d + 4], 20, -405537848)),
                      (a = this.md5_gg(a, i, s, n, t[d + 9], 5, 568446438)),
                      (n = this.md5_gg(n, a, i, s, t[d + 14], 9, -1019803690)),
                      (s = this.md5_gg(s, n, a, i, t[d + 3], 14, -187363961)),
                      (i = this.md5_gg(i, s, n, a, t[d + 8], 20, 1163531501)),
                      (a = this.md5_gg(a, i, s, n, t[d + 13], 5, -1444681467)),
                      (n = this.md5_gg(n, a, i, s, t[d + 2], 9, -51403784)),
                      (s = this.md5_gg(s, n, a, i, t[d + 7], 14, 1735328473)),
                      (i = this.md5_gg(i, s, n, a, t[d + 12], 20, -1926607734)),
                      (a = this.md5_hh(a, i, s, n, t[d + 5], 4, -378558)),
                      (n = this.md5_hh(n, a, i, s, t[d + 8], 11, -2022574463)),
                      (s = this.md5_hh(s, n, a, i, t[d + 11], 16, 1839030562)),
                      (i = this.md5_hh(i, s, n, a, t[d + 14], 23, -35309556)),
                      (a = this.md5_hh(a, i, s, n, t[d + 1], 4, -1530992060)),
                      (n = this.md5_hh(n, a, i, s, t[d + 4], 11, 1272893353)),
                      (s = this.md5_hh(s, n, a, i, t[d + 7], 16, -155497632)),
                      (i = this.md5_hh(i, s, n, a, t[d + 10], 23, -1094730640)),
                      (a = this.md5_hh(a, i, s, n, t[d + 13], 4, 681279174)),
                      (n = this.md5_hh(n, a, i, s, t[d + 0], 11, -358537222)),
                      (s = this.md5_hh(s, n, a, i, t[d + 3], 16, -722521979)),
                      (i = this.md5_hh(i, s, n, a, t[d + 6], 23, 76029189)),
                      (a = this.md5_hh(a, i, s, n, t[d + 9], 4, -640364487)),
                      (n = this.md5_hh(n, a, i, s, t[d + 12], 11, -421815835)),
                      (s = this.md5_hh(s, n, a, i, t[d + 15], 16, 530742520)),
                      (i = this.md5_hh(i, s, n, a, t[d + 2], 23, -995338651)),
                      (a = this.md5_ii(a, i, s, n, t[d + 0], 6, -198630844)),
                      (n = this.md5_ii(n, a, i, s, t[d + 7], 10, 1126891415)),
                      (s = this.md5_ii(s, n, a, i, t[d + 14], 15, -1416354905)),
                      (i = this.md5_ii(i, s, n, a, t[d + 5], 21, -57434055)),
                      (a = this.md5_ii(a, i, s, n, t[d + 12], 6, 1700485571)),
                      (n = this.md5_ii(n, a, i, s, t[d + 3], 10, -1894986606)),
                      (s = this.md5_ii(s, n, a, i, t[d + 10], 15, -1051523)),
                      (i = this.md5_ii(i, s, n, a, t[d + 1], 21, -2054922799)),
                      (a = this.md5_ii(a, i, s, n, t[d + 8], 6, 1873313359)),
                      (n = this.md5_ii(n, a, i, s, t[d + 15], 10, -30611744)),
                      (s = this.md5_ii(s, n, a, i, t[d + 6], 15, -1560198380)),
                      (i = this.md5_ii(i, s, n, a, t[d + 13], 21, 1309151649)),
                      (a = this.md5_ii(a, i, s, n, t[d + 4], 6, -145523070)),
                      (n = this.md5_ii(n, a, i, s, t[d + 11], 10, -1120210379)),
                      (s = this.md5_ii(s, n, a, i, t[d + 2], 15, 718787259)),
                      (i = this.md5_ii(i, s, n, a, t[d + 9], 21, -343485551)),
                      (a = this.safe_add(a, o)),
                      (i = this.safe_add(i, r)),
                      (s = this.safe_add(s, l)),
                      (n = this.safe_add(n, c))
                  }
                  return Array(a, i, s, n)
                }
                md5_cmn(t, e, a, i, s, n) {
                  return this.safe_add(
                    this.bit_rol(
                      this.safe_add(this.safe_add(e, t), this.safe_add(i, n)),
                      s
                    ),
                    a
                  )
                }
                md5_ff(t, e, a, i, s, n, d) {
                  return this.md5_cmn((e & a) | (~e & i), t, e, s, n, d)
                }
                md5_gg(t, e, a, i, s, n, d) {
                  return this.md5_cmn((e & i) | (a & ~i), t, e, s, n, d)
                }
                md5_hh(t, e, a, i, s, n, d) {
                  return this.md5_cmn(e ^ a ^ i, t, e, s, n, d)
                }
                md5_ii(t, e, a, i, s, n, d) {
                  return this.md5_cmn(a ^ (e | ~i), t, e, s, n, d)
                }
                core_hmac_md5(t, e) {
                  var a = this.str2binl(t)
                  a.length > 16 && (a = this.core_md5(a, t.length * this.chrsz))
                  for (var i = Array(16), s = Array(16), n = 0; n < 16; n++)
                    (i[n] = 909522486 ^ a[n]), (s[n] = 1549556828 ^ a[n])
                  var d = this.core_md5(
                    i.concat(this.str2binl(e)),
                    512 + e.length * this.chrsz
                  )
                  return this.core_md5(s.concat(d), 640)
                }
                safe_add(t, e) {
                  var a = (65535 & t) + (65535 & e)
                  return (
                    (((t >> 16) + (e >> 16) + (a >> 16)) << 16) | (65535 & a)
                  )
                }
                bit_rol(t, e) {
                  return (t << e) | (t >>> (32 - e))
                }
                str2binl(t) {
                  for (
                    var e = Array(), a = (1 << this.chrsz) - 1, i = 0;
                    i < t.length * this.chrsz;
                    i += this.chrsz
                  )
                    e[i >> 5] |= (t.charCodeAt(i / this.chrsz) & a) << i % 32
                  return e
                }
                binl2str(t) {
                  for (
                    var e = "", a = (1 << this.chrsz) - 1, i = 0;
                    i < 32 * t.length;
                    i += this.chrsz
                  )
                    e += String.fromCharCode((t[i >> 5] >>> i % 32) & a)
                  return e
                }
                binl2hex(t) {
                  for (
                    var e = this.hexcase
                        ? "0123456789ABCDEF"
                        : "0123456789abcdef",
                      a = "",
                      i = 0;
                    i < 4 * t.length;
                    i++
                  )
                    a +=
                      e.charAt((t[i >> 2] >> ((i % 4) * 8 + 4)) & 15) +
                      e.charAt((t[i >> 2] >> ((i % 4) * 8)) & 15)
                  return a
                }
                binl2b64(t) {
                  for (var e = "", a = 0; a < 4 * t.length; a += 3)
                    for (
                      var i =
                          (((t[a >> 2] >> ((a % 4) * 8)) & 255) << 16) |
                          (((t[(a + 1) >> 2] >> (((a + 1) % 4) * 8)) & 255) <<
                            8) |
                          ((t[(a + 2) >> 2] >> (((a + 2) % 4) * 8)) & 255),
                        s = 0;
                      s < 4;
                      s++
                    )
                      8 * a + 6 * s > 32 * t.length
                        ? (e += this.b64pad)
                        : (e +=
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                              (i >> (6 * (3 - s))) & 63
                            ))
                  return e
                }
              })
          },
          7960: (t) => {
            "use strict"
            t.exports = JSON.parse(
              '{"key":"scene","localJson":true,"children":[{"materialInfoId":5,"scene":"7001","children":[{"text":"https://cdn-oss.yswyyds.com/upload/material/1_1711524964908.webp","css":"width:550px;height:587px;margin-top:350px;margin-bottom:45px;"},{"text":"https://cdn-oss.yswyyds.com/upload/material/hb-b2_1711525004530.webp","css":"width:380px;height:73px;top:470px;left:85px;"},{"text":"https://cdn-oss.yswyyds.com/upload/material/closer_1711538278722.webp","css":"margin-top:20px;margin-bottom:25px;"}]},{"materialInfoId":7,"scene":"4001","children":[{"text":"https://cdn-oss.yswyyds.com/upload/material/2_1711508903487.webp","css":"width:546px;height:700px;margin-top:350px;margin-bottom:45px;"},{"text":"https://cdn-oss.yswyyds.com/upload/material/btn-up_1711525023345.webp","css":"width:400px;height:100px;top:550px;left:73px;"},{"text":"https://cdn-oss.yswyyds.com/upload/material/closer_1711538301328.webp","css":"bottom:355px;position:absolute;"}]},{"materialInfoId":8,"scene":"7001","children":[{"text":"https://cdn-oss.yswyyds.com/upload/material/4_1711508607770.webp","css":"width:546px;height:700px;margin-top:350px;margin-bottom:45px;"},{"text":"https://cdn-oss.yswyyds.com/upload/material/hb-a2_1711525056565.webp","css":"width:400px;height:100px;top:500px;left:73px;"},{"text":"https://cdn-oss.yswyyds.com/upload/material/closer_1711538339875.webp","css":"bottom:360px;position:absolute;"}]},{"materialInfoId":31,"scene":"7001","children":[{"text":"https://cdn-oss.yswyyds.com/upload/material/图片1_1719300912642.webp","css":"width:750px;height:90px;position:absolute;bottom:0;"}]}]}'
            )
          }
        },
        __webpack_module_cache__ = {}
      function __webpack_require__(t) {
        var e = __webpack_module_cache__[t]
        if (void 0 !== e) return e.exports
        var a = (__webpack_module_cache__[t] = {exports: {}})
        return (
          __webpack_modules__[t](a, a.exports, __webpack_require__), a.exports
        )
      }
      var __webpack_exports__ = {}
      ;(() => {
        __webpack_require__(9261), __webpack_require__(5050)
        var t = __webpack_require__(3513)
        $app_define$("@app-component/index", [], function (e, a, i) {
          t(i, a, e),
            a.__esModule && a.default && (i.exports = a.default),
            (i.exports.template = __webpack_require__(9646)),
            (i.exports.style = __webpack_require__(7913))
        }),
          $app_bootstrap$("@app-component/index", {packagerVersion: "2.0.0"})
      })()
    })()
  }
  if ("undefined" == typeof window) return createPageHandler()
  window.createPageHandler = createPageHandler
})()
