!(function () {
  var t = function () {
    return (() => {
      var t,
        e = {
          5843: (t) => {
            t.exports = function (t, e, i) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                a(i("@app-module/system.storage"))
              var s = a(i("@app-module/system.router"))
              function a(t) {
                return t && t.__esModule ? t : {default: t}
              }
              e.default = {
                private: {
                  show_161: !1,
                  num: "1",
                  suiji: "",
                  visible: !1,
                  dianji: "",
                  ceshi: [],
                  answer: "",
                  key: "",
                  titleTop: "",
                  GoOn: !1,
                  next_question: !1,
                  view_answers: "0",
                  times_exhausted: !1,
                  kong: [],
                  flag: !0,
                  fl: !0,
                  localNum: "",
                  cumulativeNum: "0",
                  chakan: "",
                  cityInfo: "",
                  iscuo: !1,
                  resurrection: "0",
                  latest_time: "",
                  user_dianji: "",
                  lianxu_state: 0,
                  state: !0,
                  Challenge_achievements_good: "",
                  bannerHeight: 0,
                  isShowInterstitialAd: !1
                },
                adMessageType(t) {
                  0 == parseInt(t.detail.type)
                    ? (this.isShowInterstitialAd = !1)
                    : 1 == parseInt(t.detail.type) ||
                      (2 == parseInt(t.detail.type) &&
                        ((this.showOpenAd = !1), (this.showTabs = !0)))
                },
                back() {
                  s.default.back()
                },
                async saveCorrectNum(t) {
                  let e = await $sdk.utils.getStorage("correctNum")
                  if ("" == e) await $sdk.utils.setStorage("correctNum", t)
                  else {
                    let i = parseInt(e) + parseInt(t)
                    await $sdk.utils.setStorage("correctNum", i)
                  }
                },
                async saveAllNum(t) {
                  let e = await $sdk.utils.getStorage("allAnswerNum")
                  if ("" == e) await $sdk.utils.setStorage("allAnswerNum", 1)
                  else {
                    let t = parseInt(e) + 1
                    await $sdk.utils.setStorage("allAnswerNum", t)
                  }
                },
                async saveLianxuNumn(t) {
                  let e = await $sdk.utils.getStorage("lianXuNum")
                  "" == e
                    ? await $sdk.utils.setStorage("lianXuNum", t)
                    : parseInt(t) > parseInt(e) &&
                      (await $sdk.utils.setStorage("lianXuNum", t),
                      10 == this.key &&
                        (await $sdk.utils.setStorage("lastTiozhanNUm", e)))
                },
                async choice(t) {
                  this.saveAllNum()
                  let e = this
                  if (this.flag) {
                    this.answer = this.ceshi[0].answer
                    let i = this.ceshi[0].answer
                    if (
                      ((this.dianji = t), (this.next_question = !0), i == t)
                    ) {
                      if (
                        (this.cumulativeNum++,
                        this.saveCorrectNum(this.cumulativeNum),
                        this.lianxu_state++,
                        10 == this.key && this.state)
                      ) {
                        let t = await $sdk.utils.getStorage("bestLianxunNUm")
                        "" == t
                          ? (await $sdk.utils.setStorage(
                              "bestLianxunNUm",
                              this.lianxu_state
                            ),
                            await $sdk.utils.setStorage(
                              "lastTiozhanNUm",
                              this.lianxu_state
                            ))
                          : (parseInt(t) < parseInt(this.lianxu_state) &&
                              (await $sdk.utils.setStorage(
                                "bestLianxunNUm",
                                this.lianxu_state
                              )),
                            await $sdk.utils.setStorage(
                              "lastTiozhanNUm",
                              this.lianxu_state
                            ))
                        let e = await $sdk.utils.getStorage("C")
                        "" == e
                          ? await $sdk.utils.setStorage("C", 1)
                          : await $sdk.utils.setStorage("C", 1 + parseInt(e))
                      }
                    } else
                      10 != this.key &&
                        ($sdk.ad.reportCustomEvent(
                          this,
                          "GAME_SHOW_CHAPING_WHEN_WRONG",
                          "OK"
                        ),
                        this.initNavInterstitialAd(180)),
                        (this.user_dianji = this.answer),
                        (this.state = !1),
                        10 == this.key
                          ? (0 == this.lianxu_state &&
                              (await $sdk.utils.setStorage(
                                "lastTiozhanNUm",
                                this.lianxu_state
                              )),
                            (e.resurrection = await $sdk.utils.getStorage(
                              "fuhuo"
                            )),
                            (this.iscuo = !0))
                          : (this.lianxu_state = 0),
                        this.saveLianxuNumn(this.lianxu_state)
                    this.flag = !1
                  }
                },
                async mask() {
                  if (
                    ($sdk.ad.reportCustomEvent(
                      this,
                      "GAME_CLICK_CHALLENGE_SEEANSWER",
                      "OK"
                    ),
                    this.fl)
                  ) {
                    if (
                      ((this.answer = this.ceshi[0].answer),
                      (this.chakan = this.answer),
                      (this.flag = !1),
                      (this.next_question = !0),
                      (this.visible = !0),
                      this.view_answers++,
                      this.cumulativeNum++,
                      this.view_answers > 3)
                    )
                      (this.view_answers = 3),
                        (this.times_exhausted = !0),
                        (this.visible = !1),
                        (this.next_question = !1),
                        (this.visible = !1),
                        (this.chakan = "")
                    else {
                      this.lianxu_state++,
                        this.saveAllNum(),
                        this.saveLianxuNumn(this.lianxu_state)
                      let t = await $sdk.utils.getStorage("bestLianxunNUm")
                      "" == t
                        ? (await $sdk.utils.setStorage(
                            "bestLianxunNUm",
                            this.lianxu_state
                          ),
                          await $sdk.utils.setStorage(
                            "lastTiozhanNUm",
                            this.lianxu_state
                          ))
                        : (await $sdk.utils.setStorage(
                            "lastTiozhanNUm",
                            this.lianxu_state
                          ),
                          parseInt(t) < parseInt(this.lianxu_state) &&
                            (await $sdk.utils.setStorage(
                              "bestLianxunNUm",
                              this.lianxu_state
                            )))
                    }
                    this.fl = !1
                  }
                  this.times_exhausted && (this.flag = !0)
                },
                mask_1() {
                  $sdk.ad.reportCustomEvent(
                    this,
                    "GAME_CLICK_NORMAL_SEEANSWER",
                    "OK"
                  ),
                    this.initNavInterstitialAd(180),
                    (this.answer = this.ceshi[0].answer),
                    (this.chakan = this.answer),
                    (this.flag = !1),
                    this.fl &&
                      ((this.next_question = !0),
                      (this.visible = !0),
                      (this.visible = !1),
                      this.cumulativeNum++,
                      this.lianxu_state++,
                      this.saveAllNum(),
                      this.saveLianxuNumn(this.lianxu_state),
                      (this.fl = !1))
                },
                async initNavInterstitialAd(t) {
                  $sdk.ad.reportCustomEvent(
                    this,
                    "GAME_NAV_INIT_CHAPING_" + t,
                    "OK"
                  )
                  try {
                    const e = this
                    let i = await $sdk.ad.getADConfig(t)
                    "" != i &&
                      "" != i.IDS &&
                      i.IDS.length > 0 &&
                      e.getAdType(i, 0, t)
                  } catch (e) {
                    $sdk.ad.reportCustomEvent(
                      this,
                      "GAME_NAV_INIT_CHAPING_ERROR_" + t,
                      e
                    )
                  }
                },
                async getAdType(t, e, i) {
                  $sdk.ad.reportCustomEvent(
                    this,
                    "GAME_NAV_GETADTYPE_" + i + "_" + e,
                    "OK"
                  )
                  try {
                    const s = this
                    let a = t.IDS[e]
                    if (43 == a.AP || 10 == a.AP || 11 == a.AP) {
                      let a = await this.initNative(t, e, i)
                      ;(e = parseInt(e) + 1),
                        0 == a
                          ? ($sdk.ad.reportCustomEvent(
                              this,
                              "GAME_NAV_GETADTYPE_" +
                                i +
                                "_" +
                                e +
                                "_NATIVE_ERROR",
                              "OK"
                            ),
                            parseInt(e) < t.IDS.length && s.getAdType(t, e, i))
                          : $sdk.ad.reportCustomEvent(
                              this,
                              "GAME_NAV_GETADTYPE_" +
                                i +
                                "_" +
                                e +
                                "_NATIVE_SUCCESS",
                              "OK"
                            )
                    } else if (14 == a.AP || 1 == a.AP || 2 == a.AP) {
                      let a = await $sdk.ad.showLSNInterstitial(i, t.IDS[e].ID)
                      ;(e = parseInt(e) + 1),
                        1 == a
                          ? $sdk.ad.reportCustomEvent(
                              this,
                              "GAME_NAV_GETADTYPE_" +
                                i +
                                "_" +
                                e +
                                "_CHAPING_SUCCESS",
                              "OK"
                            )
                          : ($sdk.ad.reportCustomEvent(
                              this,
                              "GAME_NAV_GETADTYPE_" +
                                i +
                                "_" +
                                e +
                                "_CHAPING_ERROR",
                              "OK"
                            ),
                            parseInt(e) < t.IDS.length && s.getAdType(t, e))
                    }
                  } catch (t) {
                    $sdk.ad.reportCustomEvent(
                      this,
                      "GAME_NAV_GETADTYPE_" + i + "_" + e + "_ERROR",
                      t
                    )
                  }
                },
                async initNative(t, e, i) {
                  try {
                    const s = this
                    let a = new Native(),
                      n = await a.create_Native(i, t.IDS[e].ID)
                    return "" != n
                      ? ((s.isShowInterstitialAd = !0),
                        s.$broadcast("updataIntersAd", {
                          adconfig: t,
                          adList: n,
                          native: a
                        }),
                        1)
                      : 0
                  } catch (t) {
                    return 0
                  }
                },
                async jixu() {
                  10 == this.key
                    ? $sdk.ad.reportCustomEvent(
                        this,
                        "GAME_CLICK_CHALLENGE_NEXT",
                        "OK"
                      )
                    : $sdk.ad.reportCustomEvent(
                        this,
                        "GAME_CLICK_NORMAL_NEXT",
                        "OK"
                      ),
                    (this.next_question = !1),
                    (this.dianji = ""),
                    (this.chakan = ""),
                    (this.user_dianji = ""),
                    (this.visible = !1),
                    (this.flag = !0),
                    (this.fl = !0)
                  let t = this.suijishu()
                  ;(this.ceshi = []),
                    this.random(t),
                    this.num++,
                    this.key,
                    $sdk.utils.setStorage("A", this.num),
                    $sdk.utils.setStorage("B", this.cumulativeNum)
                  let e = await $sdk.utils.getStorage("E")
                  "" == e
                    ? await $sdk.utils.setStorage("E", 1)
                    : await $sdk.utils.setStorage("E", 1 + parseInt(e))
                },
                async onInit() {
                  ;(this.show_161 = !1),
                    (this.show_161 = !0),
                    $sdk.ad.reportCustomEvent(this, "GAME_INIT_ANSWER", "OK"),
                    this.$on("adMessageType", this.adMessageType),
                    (this.Challenge_achievements_good =
                      await $sdk.utils.getStorage(
                        "Challenge_achievements_good"
                      )),
                    (this.key = this.$page.query.key),
                    (this.titleTop = this.$page.query.titleTop),
                    (this.cityInfo = await $sdk.utils.apis.maxsuiji()),
                    (this.suiji = this.suijishu()),
                    this.random(this.suiji)
                  let t = await $sdk.utils.getStorage("fuhuo")
                  this.resurrection = "" == t ? 0 : t
                },
                suijishu() {
                  return 0 == this.key
                    ? ($sdk.ad.reportCustomEvent(this, "GAME_SHENGHUO", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.shenghuo - 1e3 + 1)
                      ) + 1e3)
                    : 1 == this.key
                    ? ($sdk.ad.reportCustomEvent(this, "GAME_ZR", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.ziran - 1e3 + 1)
                      ) + 1e3)
                    : 2 == this.key
                    ? ($sdk.ad.reportCustomEvent(this, "GAME_KX", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.kexue - 1e3 + 1)
                      ) + 1e3)
                    : 3 == this.key
                    ? ($sdk.ad.reportCustomEvent(this, "GAME_LS", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.lishi - 1e3 + 1)
                      ) + 1e3)
                    : 4 == this.key
                    ? ($sdk.ad.reportCustomEvent(this, "GAME_TY", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.tiyu - 1e3 + 1)
                      ) + 1e3)
                    : 5 == this.key
                    ? ($sdk.ad.reportCustomEvent(this, "GAME_WX", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.wenxue - 1e3 + 1)
                      ) + 1e3)
                    : 6 == this.key
                    ? ($sdk.ad.reportCustomEvent(this, "GAME_YX", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.yishu - 1e3 + 1)
                      ) + 1e3)
                    : 7 == this.key
                    ? ($sdk.ad.reportCustomEvent(this, "GAME_DL", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.dili - 1e3 + 1)
                      ) + 1e3)
                    : ($sdk.ad.reportCustomEvent(this, "GAME_ZH", "OK"),
                      Math.floor(
                        Math.random() * (this.cityInfo.zonghe - 1e3 + 1)
                      ) + 1e3)
                },
                async random(t) {
                  if (0 == this.key) {
                    let e = await $sdk.utils.apis.getRandomQuestions(t)
                    if (-1 != this.kong.indexOf(t)) {
                      let e = await $sdk.utils.apis.getRandomQuestions(t)
                      this.ceshi.push(e)
                    } else this.ceshi.push(e)
                    this.kong.push(t)
                  } else if (1 == this.key) {
                    let e = await $sdk.utils.apis.getnatural(t)
                    if (-1 != this.kong.indexOf(t)) {
                      let e = await $sdk.utils.apis.getnatural(t)
                      this.ceshi.push(e)
                    } else this.ceshi.push(e)
                    this.kong.push(t)
                  } else if (2 == this.key) {
                    let e = await $sdk.utils.apis.getscience(t)
                    if (-1 != this.kong.indexOf(t)) {
                      let e = await $sdk.utils.apis.getscience(t)
                      this.ceshi.push(e)
                    } else this.ceshi.push(e)
                    this.kong.push(t)
                  } else if (3 == this.key) {
                    let e = await $sdk.utils.apis.gethistory(t)
                    if (-1 != this.kong.indexOf(t)) {
                      let e = await $sdk.utils.apis.gethistory(t)
                      this.ceshi.push(e)
                    } else this.ceshi.push(e)
                    this.kong.push(t)
                  } else if (4 == this.key) {
                    let e = await $sdk.utils.apis.getsports(t)
                    if (-1 != this.kong.indexOf(t)) {
                      let e = await $sdk.utils.apis.getsports(t)
                      this.ceshi.push(e)
                    } else this.ceshi.push(e)
                    this.kong.push(t)
                  } else if (5 == this.key) {
                    let e = await $sdk.utils.apis.getliterature(t)
                    if (-1 != this.kong.indexOf(t)) {
                      let e = await $sdk.utils.apis.getliterature(t)
                      this.ceshi.push(e)
                    } else this.ceshi.push(e)
                    this.kong.push(t)
                  } else if (6 == this.key) {
                    let e = await $sdk.utils.apis.getArt(t)
                    if (-1 != this.kong.indexOf(t)) {
                      let e = await $sdk.utils.apis.getArt(t)
                      this.ceshi.push(e)
                    } else this.ceshi.push(e)
                    this.kong.push(t)
                  } else if (7 == this.key) {
                    let e = await $sdk.utils.apis.getGeography(t)
                    if (e) {
                      if (
                        (this.ceshi.push(e),
                        -1 != this.kong.indexOf(t) || this.kong == [])
                      ) {
                        let e = await $sdk.utils.apis.getGeography(t)
                        this.ceshi.push(e)
                      }
                      this.kong.push(t)
                    }
                  } else {
                    let e = await $sdk.utils.apis.getComprehensive(t)
                    if ((this.ceshi.push(e), -1 != this.kong.indexOf(t))) {
                      let e = await $sdk.utils.apis.getComprehensive(t)
                      this.ceshi.push(e)
                    }
                    this.kong.push(t)
                  }
                },
                con() {
                  $sdk.ad.reportCustomEvent(this, "GAME_GOON_ANSWER", "OK"),
                    (this.GoOn = !1)
                },
                bot() {
                  $sdk.ad.reportCustomEvent(this, "GAME_END_ANSWER", "OK"),
                    this.$broadcast("upDataPage", {}),
                    s.default.back(),
                    (this.times_exhausted = !1)
                  try {
                    Banner.getInstance().hide()
                  } catch (t) {}
                },
                onBackPress() {
                  return (
                    $sdk.ad.reportCustomEvent(this, "GAME_ANSWER_EXIT", "OK"),
                    (this.GoOn = !0),
                    !0
                  )
                },
                async restart() {
                  $sdk.ad.reportCustomEvent(
                    this,
                    "GAME_RESTART_CHALLENGE",
                    "OK"
                  ),
                    await $sdk.utils.setStorage(
                      "lastTiozhanNUm",
                      this.lianxu_state
                    ),
                    s.default.push({
                      uri: "pages/answer",
                      params: {key: this.key}
                    })
                },
                async fuhuo() {
                  let t = await $sdk.utils.getStorage("fuhuo")
                  if (0 == t);
                  else {
                    this.lianxu_state++,
                      (this.state = !0),
                      this.saveAllNum(),
                      this.saveLianxuNumn(this.lianxu_state)
                    let e = await $sdk.utils.getStorage("bestLianxunNUm")
                    "" == e
                      ? (await $sdk.utils.setStorage(
                          "bestLianxunNUm",
                          this.lianxu_state
                        ),
                        await $sdk.utils.setStorage(
                          "lastTiozhanNUm",
                          this.lianxu_state
                        ))
                      : (await $sdk.utils.setStorage(
                          "lastTiozhanNUm",
                          this.lianxu_state
                        ),
                        parseInt(e) < parseInt(this.lianxu_state) &&
                          (await $sdk.utils.setStorage(
                            "bestLianxunNUm",
                            this.lianxu_state
                          )))
                    let i = parseInt(t) - 1
                    await $sdk.utils.setStorage("fuhuo", i), (this.iscuo = !1)
                  }
                },
                bot_2() {
                  $sdk.ad.reportCustomEvent(
                    this,
                    "GAME_CLOSE_SEEANSWERDIALOG",
                    "OK"
                  ),
                    (this.times_exhausted = !1)
                },
                changeBannerHeight(t) {
                  try {
                    this.bannerHeight = t.detail.height
                  } catch (t) {}
                }
              }
              const n = e.default || t.exports,
                o = ["public", "protected", "private"]
              if (
                n.data &&
                o.some(function (t) {
                  return n[t]
                })
              )
                throw new Error(
                  '页面VM对象中的属性data不可与"' +
                    o.join(",") +
                    '"同时存在，请使用private替换data名称'
                )
              n.data ||
                ((n.data = {}),
                (n._descriptor = {}),
                o.forEach(function (t) {
                  const e = typeof n[t]
                  if ("object" === e) {
                    n.data = Object.assign(n.data, n[t])
                    for (const e in n[t]) n._descriptor[e] = {access: t}
                  } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                }))
            }
          },
          634: (t) => {
            t.exports = {
              ".option .option_top .dui": {
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderStyle: "solid",
                borderTopColor: "#87d15b",
                borderRightColor: "#87d15b",
                borderBottomColor: "#87d15b",
                borderLeftColor: "#87d15b",
                color: "#ffffff",
                fontSize: "30px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "option"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "option_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "dui"}
                  ]
                },
                backgroundColor: "#87d15b"
              },
              ".option .option_top .cuo": {
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderStyle: "solid",
                borderTopColor: "#f96f5e",
                borderRightColor: "#f96f5e",
                borderBottomColor: "#f96f5e",
                borderLeftColor: "#f96f5e",
                color: "#ffffff",
                fontSize: "30px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "option"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "option_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cuo"}
                  ]
                },
                backgroundColor: "#f96f5e"
              },
              ".wrapper": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                background:
                  '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#e4fefa","#ecedff"]}]}'
              },
              ".wrapper_wangge": {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                marginTop: "107px",
                backgroundColor: "#ffffff",
                alignItems: "center",
                position: "relative"
              },
              ".wrapper_kuang": {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "0px",
                paddingRight: "43px",
                paddingBottom: "0px",
                paddingLeft: "43px",
                alignItems: "center",
                position: "relative",
                background:
                  '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#e4fefa","#ecedff"]}]}'
              },
              ".wrapper_kuang .white": {
                width: "59px",
                height: "1230px",
                backgroundColor: "#ffffff",
                position: "absolute",
                top: "137px",
                left: "0px",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "wrapper_kuang"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "white"}
                  ]
                }
              },
              ".wrapper_kuang .white_two": {
                width: "59px",
                height: "1230px",
                backgroundColor: "#ffffff",
                position: "absolute",
                top: "137px",
                right: "0px",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "wrapper_kuang"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "white_two"}
                  ]
                }
              },
              ".cover": {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                alignContent: "center",
                justifyContent: "center"
              },
              ".cover_img": {
                width: "400px",
                position: "fixed",
                top: "251px",
                left: "180px"
              },
              ".cover_img_fdj": {
                width: "203px",
                height: "176px",
                position: "absolute",
                top: "135px",
                left: "181px"
              },
              ".cover .cover_top": {
                width: "550px",
                height: "597px",
                marginTop: "240px",
                backgroundColor: "#ffffff",
                borderRadius: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"}
                  ]
                }
              },
              ".cover .cover_top .ccn": {
                textAlign: "center",
                marginTop: "60px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "ccn"}
                  ]
                }
              },
              ".cover .cover_top .top": {
                fontSize: "50px",
                color: "#171717",
                fontWeight: "400",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top"}
                  ]
                }
              },
              ".cover .cover_top .con": {
                width: "330px",
                height: "91px",
                borderRadius: "30px",
                backgroundColor: "#3db3c7",
                fontSize: "42px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#ffffff",
                textAlign: "center",
                marginTop: "15px",
                paddingTop: "0px",
                paddingRight: "50px",
                paddingBottom: "0px",
                paddingLeft: "50px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con"}
                  ]
                }
              },
              ".cover .cover_top .bot": {
                width: "330px",
                height: "91px",
                borderRadius: "30px",
                fontSize: "42px",
                fontFamily: "Microsoft YaHei",
                backgroundColor: "#87d15b",
                fontWeight: "400",
                color: "#ffffff",
                textAlign: "center",
                marginTop: "-80px",
                paddingTop: "0px",
                paddingRight: "50px",
                paddingBottom: "0px",
                paddingLeft: "50px",
                marginBottom: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "bot"}
                  ]
                }
              },
              ".cover .cover_top .sorry": {
                fontSize: "34px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "sorry"}
                  ]
                }
              },
              ".cover .cover_top .top_1": {
                width: "100%",
                height: "52px",
                fontSize: "52px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#000000",
                textAlign: "center",
                marginTop: "60px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_1"}
                  ]
                }
              },
              ".cover .cover_top .con_1": {
                width: "458px",
                height: "91px",
                paddingTop: "20px",
                paddingRight: "0px",
                paddingBottom: "20px",
                paddingLeft: "0px",
                fontSize: "42px",
                fontFamily: "Microsoft YaHei",
                backgroundColor: "#62d39b",
                borderRadius: "30px",
                fontWeight: "400",
                color: "#ffffff",
                textAlign: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con_1"}
                  ]
                }
              },
              ".cover .cover_top .again_1": {
                width: "458px",
                height: "91px",
                paddingTop: "20px",
                paddingRight: "0px",
                paddingBottom: "20px",
                paddingLeft: "0px",
                backgroundColor: "#3fb5c9",
                borderRadius: "30px",
                fontSize: "42px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#ffffff",
                textAlign: "center",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "again_1"}
                  ]
                }
              },
              ".cover .cover_top .cover_img": {
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "240px",
                left: "12px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_img"}
                  ]
                }
              },
              ".cover .cover_top .bot_1": {
                width: "458px",
                height: "91px",
                paddingTop: "20px",
                paddingRight: "0px",
                paddingBottom: "20px",
                paddingLeft: "0px",
                backgroundColor: "#87d15b",
                borderRadius: "30px",
                fontSize: "42px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#ffffff",
                textAlign: "center",
                marginBottom: "60px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "cover"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "cover_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "bot_1"}
                  ]
                }
              },
              ".again": {
                fontSize: "42px",
                color: "#ffffff",
                backgroundColor: "#ffbb45",
                paddingTop: "10px",
                paddingRight: "80px",
                paddingBottom: "10px",
                paddingLeft: "80px",
                borderRadius: "16px"
              },
              ".content": {
                width: "100%",
                height: "1300px",
                backgroundImage: "/pages/answer/images/bg.png",
                backgroundSize: "100% 100%",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "30px"
              },
              ".content_back": {
                position: "absolute",
                top: "20px",
                left: "40px",
                alignItems: "center"
              },
              ".content_back image": {
                width: "40px",
                height: "30px",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "content_back"
                    },
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".content_back text": {
                color: "#ffffff",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "content_back"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".content .content_timu": {
                width: "90%",
                height: "59%",
                display: "flex",
                flexDirection: "column",
                marginTop: "85px",
                marginLeft: "32px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "content"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "content_timu"}
                  ]
                }
              },
              ".content .content_top": {
                marginTop: "60px",
                paddingTop: "0px",
                paddingRight: "30px",
                paddingBottom: "0px",
                paddingLeft: "30px",
                justifyContent: "space-between",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "content"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "content_top"}
                  ]
                }
              },
              ".content_top_le": {
                paddingTop: "0px",
                paddingRight: "20px",
                paddingBottom: "0px",
                paddingLeft: "20px"
              },
              ".content_top_le text": {
                paddingLeft: "10px",
                fontWeight: "bolder",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "content_top_le"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".content_top_ri text": {
                color: "#000000",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "content_top_ri"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".subject": {
                paddingTop: "60px",
                paddingRight: "10px",
                paddingBottom: "60px",
                paddingLeft: "10px"
              },
              ".subject text": {
                fontSize: "32px",
                paddingLeft: "10px",
                fontWeight: "bolder",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "subject"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".option": {display: "flex", flexDirection: "column"},
              ".option .option_top": {
                height: "65px",
                marginTop: "10px",
                marginRight: "40px",
                marginBottom: "10px",
                marginLeft: "40px",
                position: "relative",
                backgroundImage: "/pages/answer/images/timu.png",
                backgroundSize: "100% 100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "option"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "option_top"}
                  ]
                }
              },
              ".option .option_top_top": {
                width: "100%",
                height: "65px",
                borderRadius: "36px",
                paddingLeft: "26px",
                paddingRight: "26px",
                color: "#000000",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "option"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "option_top_top"
                    }
                  ]
                }
              },
              ".option .option_top .x": {
                position: "absolute",
                top: "5px",
                right: "30px",
                color: "#ffffff",
                fontSize: "35px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "option"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "option_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "x"}
                  ]
                }
              },
              ".option .option_top .correct_dui": {
                position: "absolute",
                top: "10px",
                right: "30px",
                color: "#ffffff",
                fontSize: "35px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "option"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "option_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "correct_dui"}
                  ]
                }
              },
              ".analysis": {
                position: "absolute",
                flexDirection: "column",
                alignItems: "center",
                top: "0px",
                left: "0px"
              },
              ".dingzhu": {
                width: "565px",
                height: "183px",
                marginLeft: "32px",
                paddingTop: "50px",
                paddingLeft: "170px"
              },
              ".answer": {
                width: "565px",
                height: "183px",
                justifyContent: "center",
                marginLeft: "32px",
                position: "relative"
              },
              ".answer text": {
                width: "220px",
                height: "75px",
                textAlign: "center",
                lineHeight: "75px",
                backgroundColor: "#42bfff",
                borderRadius: "42px",
                color: "#ffffff",
                alignItems: "center",
                fontWeight: "bolder",
                position: "absolute",
                top: "75px",
                left: "170px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "answer"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".answer_1": {
                width: "600px",
                height: "357px",
                justifyContent: "center",
                marginLeft: "32px",
                position: "relative"
              },
              ".answer_1 .ckbf": {
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "85px",
                left: "50px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "answer_1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "ckbf"}
                  ]
                }
              },
              ".answer_1 .lookAnswer": {
                width: "300px",
                height: "75px",
                textAlign: "center",
                lineHeight: "75px",
                backgroundColor: "#42bfff",
                color: "#ffffff",
                fontWeight: "bolder",
                position: "absolute",
                top: "250px",
                left: "136px",
                borderRadius: "42px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "answer_1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "lookAnswer"}
                  ]
                }
              },
              ".answer_1 .problem": {
                width: "600px",
                height: "142px",
                position: "absolute",
                paddingBottom: "99px",
                paddingLeft: "99px",
                flexWrap: "wrap",
                backgroundImage: "/pages/answer/images/dati.png",
                backgroundSize: "100% 100%",
                left: "0px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "answer_1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "problem"}
                  ]
                }
              },
              ".answer_1 .problem .duilookAnswer": {
                color: "#333333",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "answer_1"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "problem"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "duilookAnswer"
                    }
                  ]
                }
              },
              ".continue": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              },
              ".continue text": {
                lineHeight: "60px",
                backgroundColor: "#42bfff",
                paddingTop: "0px",
                paddingRight: "65px",
                paddingBottom: "0px",
                paddingLeft: "65px",
                borderRadius: "42px",
                color: "#ffffff",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "continue"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".banner": {width: "90%", position: "absolute", bottom: "20px"},
              ".InterstitialDiv": {
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,0.5)"
              }
            }
          },
          3880: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["wrapper"],
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["wrapper_wangge"],
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["wrapper_kuang"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["cover"],
                          shown: function () {
                            return this.times_exhausted
                          },
                          children: [
                            {
                              type: "image",
                              attr: {src: "/sdk/components/ad.ux"}
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["cover_top"],
                              children: [
                                {
                                  type: "image",
                                  attr: {
                                    src: "/pages/answer/images/fangdajing.png"
                                  },
                                  classList: ["cover_img_fdj"]
                                },
                                {
                                  type: "text",
                                  attr: {value: "查看答案机会用尽"},
                                  classList: ["top"]
                                },
                                {
                                  type: "text",
                                  attr: {
                                    value: "非常抱歉您的查看机会已经全部用完"
                                  },
                                  classList: ["ccn"]
                                },
                                {
                                  type: "text",
                                  attr: {value: "确定"},
                                  classList: ["bot"],
                                  events: {click: "bot_2"}
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["cover"],
                          shown: function () {
                            return this.iscuo
                          },
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["cover_top"],
                              children: [
                                {
                                  type: "text",
                                  attr: {value: "是否结束答题"},
                                  classList: ["top_1"]
                                },
                                {
                                  type: "text",
                                  attr: {
                                    value: "非常抱歉您选错了答案，挑战失败"
                                  },
                                  classList: ["sorry"]
                                },
                                {
                                  type: "text",
                                  attr: {
                                    value: function () {
                                      return (
                                        "复活继续挑战（" +
                                        this.resurrection +
                                        "/5）"
                                      )
                                    }
                                  },
                                  classList: ["con_1"],
                                  events: {click: "fuhuo"}
                                },
                                {
                                  type: "text",
                                  attr: {value: "重新开始挑战"},
                                  classList: ["again_1"],
                                  events: {click: "restart"}
                                },
                                {
                                  type: "text",
                                  attr: {value: "返回首页"},
                                  classList: ["bot_1"],
                                  events: {click: "bot"}
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["cover"],
                          shown: function () {
                            return this.GoOn
                          },
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["cover_top"],
                              children: [
                                {
                                  type: "text",
                                  attr: {value: "是否结束答题"},
                                  classList: ["top", "top_top"]
                                },
                                {
                                  type: "text",
                                  attr: {value: "继续答题"},
                                  classList: ["con"],
                                  events: {click: "con"}
                                },
                                {
                                  type: "text",
                                  attr: {value: "结束答题"},
                                  classList: ["bot"],
                                  events: {click: "bot"}
                                }
                              ]
                            }
                          ]
                        },
                        {type: "div", attr: {}, classList: ["white"]},
                        {type: "div", attr: {}, classList: ["white_two"]},
                        {
                          type: "div",
                          attr: {},
                          classList: ["content"],
                          repeat: function () {
                            return this.ceshi
                          },
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["content_back"],
                              events: {click: "back"},
                              children: [
                                {
                                  type: "image",
                                  attr: {
                                    src: "/pages/answer/images/fanhuijt.png",
                                    alt: ""
                                  }
                                },
                                {type: "text", attr: {value: "返回"}}
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["content_timu"],
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["content_top"],
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["content_top_le"],
                                      children: [
                                        {
                                          type: "image",
                                          attr: {
                                            src: "/pages/answer/images/shu.png"
                                          }
                                        },
                                        {
                                          type: "text",
                                          attr: {
                                            value: function () {
                                              return "第" + this.num + "题"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["content_top_ri"],
                                      children: [
                                        {
                                          type: "text",
                                          attr: {
                                            value: function () {
                                              return (
                                                "累计答对 " +
                                                this.cumulativeNum +
                                                " 题"
                                              )
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
                                  classList: ["subject"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {
                                        value: function () {
                                          return this.$item.subject
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["option"],
                                  repeat: function () {
                                    return this.$item.options
                                  },
                                  children: [
                                    {
                                      type: "div",
                                      attr: {},
                                      classList: ["option_top"],
                                      events: {
                                        click: function (t) {
                                          return this.choice(
                                            this.$item.index,
                                            t
                                          )
                                        }
                                      },
                                      shown: function () {
                                        return "" !== this.$item.content
                                      },
                                      children: [
                                        {
                                          type: "text",
                                          attr: {
                                            value: function () {
                                              return (
                                                this.$item.index +
                                                "、" +
                                                this.$item.content
                                              )
                                            }
                                          },
                                          classList: function () {
                                            return [
                                              "option_top_top",
                                              this.answer == this.$item.index &&
                                              this.dianji == this.$item.index
                                                ? "dui"
                                                : "",
                                              this.answer != this.$item.index &&
                                              this.dianji == this.$item.index
                                                ? "cuo"
                                                : this.answer ==
                                                    this.$item.index &&
                                                  this.user_dianji ==
                                                    this.$item.index
                                                ? "dui"
                                                : "",
                                              this.chakan == this.$item.index
                                                ? "dui"
                                                : ""
                                            ]
                                          }
                                        },
                                        {
                                          type: "text",
                                          attr: {value: "√"},
                                          classList: ["correct_dui"],
                                          shown: function () {
                                            return (
                                              (this.answer ==
                                                this.$item.index &&
                                                this.dianji ==
                                                  this.$item.index) ||
                                              this.chakan == this.$item.index ||
                                              this.user_dianji ==
                                                this.$item.index
                                            )
                                          }
                                        },
                                        {
                                          type: "text",
                                          attr: {value: "x"},
                                          classList: ["x"],
                                          shown: function () {
                                            return (
                                              this.answer != this.$item.index &&
                                              this.dianji == this.$item.index
                                            )
                                          }
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
                              classList: ["dingzhu"],
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  classList: ["continue"],
                                  shown: function () {
                                    return this.next_question
                                  },
                                  children: [
                                    {
                                      type: "text",
                                      attr: {value: "下一题"},
                                      events: {click: "jixu"}
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["answer"],
                              shown: function () {
                                return 10 != this.key
                              },
                              children: [
                                {
                                  type: "text",
                                  attr: {value: "查看答案"},
                                  events: {click: "mask_1"}
                                }
                              ]
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["answer_1"],
                              shown: function () {
                                return !(10 != this.key)
                              },
                              children: [
                                {
                                  type: "div",
                                  attr: {},
                                  shown: function () {
                                    return this.visible
                                  },
                                  classList: ["problem"],
                                  children: [
                                    {
                                      type: "text",
                                      attr: {
                                        value: function () {
                                          return (
                                            "正确答案:" +
                                            this.$item.options[
                                              this.$item.answer - 1
                                            ].content
                                          )
                                        }
                                      },
                                      classList: ["duilookAnswer"]
                                    }
                                  ]
                                },
                                {
                                  type: "text",
                                  attr: {
                                    value: function () {
                                      return (
                                        "查看答案（" +
                                        this.view_answers +
                                        "/3）"
                                      )
                                    }
                                  },
                                  classList: ["lookAnswer"],
                                  events: {click: "mask"}
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
          }
        },
        i = {}
      function s(t) {
        var a = i[t]
        if (void 0 !== a) return a.exports
        var n = (i[t] = {exports: {}})
        return e[t](n, n.exports, s), n.exports
      }
      ;(t = s(5843)),
        $app_define$("@app-component/index", [], function (e, i, a) {
          t(a, i, e),
            i.__esModule && i.default && (a.exports = i.default),
            (a.exports.template = s(3880)),
            (a.exports.style = s(634))
        }),
        $app_bootstrap$("@app-component/index", {packagerVersion: "2.0.0"})
    })()
  }
  if ("undefined" == typeof window) return t()
  window.createPageHandler = t
})()
