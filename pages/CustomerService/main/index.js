!(function () {
  var t = function () {
    return (() => {
      var t = {
          6727: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var i = n(a("@app-module/system.router")),
                s = n(a("@app-module/system.storage"))
              function n(t) {
                return t && t.__esModule ? t : {default: t}
              }
              e.default = {
                data: {showEmpty: !1, showFeed: !1, showkefuRen: !1},
                Jumpdetails(t) {
                  i.default.push({
                    uri: "pages/CustomerService/detail",
                    params: {details: t}
                  })
                },
                empty_show() {
                  this.showEmpty = !1
                },
                empty() {
                  this.showEmpty = !0
                },
                feedback() {
                  this.showFeed = !0
                },
                async callKeFu() {
                  ;(this.showEmpty = !1),
                    s.default.clear({
                      success: function (t) {
                        $sdk.utils.showToast("已清空缓存")
                      },
                      fail: function (t, e) {}
                    })
                },
                closeFeedBack() {
                  this.showFeed = !1
                },
                callKeFuRen() {
                  i.default.push({uri: "tel:4006008066"}),
                    (this.showkefuRen = !1)
                },
                empty_showRen() {
                  this.showkefuRen = !1
                },
                kefuRen() {
                  this.showkefuRen = !0
                },
                logOff() {
                  $sdk.ad.reportCustomEvent(this, "user_kefu_ex", "OK"),
                    this.$app.exit()
                }
              }
              const o = e.default || t.exports,
                l = ["public", "protected", "private"]
              if (
                o.data &&
                l.some(function (t) {
                  return o[t]
                })
              )
                throw new Error(
                  '页面VM对象中的属性data不可与"' +
                    l.join(",") +
                    '"同时存在，请使用private替换data名称'
                )
              o.data ||
                ((o.data = {}),
                (o._descriptor = {}),
                l.forEach(function (t) {
                  const e = typeof o[t]
                  if ("object" === e) {
                    o.data = Object.assign(o.data, o[t])
                    for (const e in o[t]) o._descriptor[e] = {access: t}
                  } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                }))
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
          6591: (t) => {
            t.exports = {
              ".kefuBox": {
                width: "100%",
                height: "100%",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#f5f5f5"
              },
              ".kf_list": {
                width: "90%",
                marginTop: "20px",
                paddingBottom: "20px",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "12px",
                backgroundColor: "#ffffff"
              },
              ".kf_list .list_option": {
                width: "100%",
                alignItems: "center",
                paddingTop: "0px",
                paddingRight: "20px",
                paddingBottom: "0px",
                paddingLeft: "20px",
                marginTop: "20px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_list"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "list_option"}
                  ]
                }
              },
              ".kf_list .list_option image": {
                height: "50px",
                marginRight: "20px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_list"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "list_option"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".kf_list .list_option .opt_txt": {
                flex: 1,
                height: "80px",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_list"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "list_option"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "opt_txt"}
                  ]
                }
              },
              ".kf_list .list_option .opt_txt text": {
                fontSize: "35px",
                fontWeight: "600",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_list"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "list_option"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "opt_txt"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".kf_list .list_option .jaintou": {
                marginLeft: "20px",
                fontSize: "40px",
                fontWeight: "900",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kf_list"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "list_option"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "jaintou"}
                  ]
                }
              },
              ".feedback": {
                width: "90%",
                marginTop: "20px",
                height: "100px",
                borderRadius: "20px",
                backgroundColor: "#2564f4",
                textAlign: "center",
                fontSize: "35px",
                color: "#ffffff",
                fontWeight: "900"
              },
              ".empty": {
                width: "90%",
                marginTop: "26px",
                height: "100px",
                borderRadius: "20px",
                textAlign: "center",
                fontSize: "35px",
                color: "#000000",
                fontWeight: "900",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderStyle: "solid",
                borderTopColor: "#2564f4",
                borderRightColor: "#2564f4",
                borderBottomColor: "#2564f4",
                borderLeftColor: "#2564f4"
              },
              ".Mask": {
                position: "absolute",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.6)"
              },
              ".empty_box": {
                width: "80%",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "20px",
                backgroundColor: "#ffffff"
              },
              ".empty_box image": {
                height: "150px",
                marginBottom: "20px",
                marginRight: "2px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_box"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".empty_box .empty_tit": {
                fontSize: "30px",
                fontWeight: "900",
                marginTop: "30px",
                marginRight: "0px",
                marginBottom: "30px",
                marginLeft: "0px",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_tit"}
                  ]
                }
              },
              ".empty_box .empty_con": {
                fontSize: "30px",
                color: "#000000",
                paddingTop: "0px",
                paddingRight: "70px",
                paddingBottom: "0px",
                paddingLeft: "70px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_con"}
                  ]
                }
              },
              ".empty_box .empty_bot": {
                width: "100%",
                height: "100px",
                marginTop: "50px",
                marginBottom: "30px",
                alignItems: "center",
                justifyContent: "space-around",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_bot"}
                  ]
                }
              },
              ".empty_box .empty_bot text": {
                width: "40%",
                height: "80%",
                fontWeight: "900",
                textAlign: "center",
                borderRadius: "20px",
                backgroundColor: "#2a64f4",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_box"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "empty_bot"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".kefuRen": {
                width: "100%",
                height: "180px",
                marginTop: "50px",
                paddingRight: "20px",
                justifyContent: "flex-end"
              },
              ".kefuRen image": {
                height: "100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "kefuRen"},
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
          4420: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["kefuBox"],
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["kf_list"],
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["list_option"],
                      events: {
                        click: function (t) {
                          return this.Jumpdetails("yhys", t)
                        }
                      },
                      children: [
                        {
                          type: "image",
                          attr: {
                            src: "/pages/CustomerService/images/yinsi.webp"
                          }
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["opt_txt"],
                          children: [{type: "text", attr: {value: "用户隐私"}}]
                        },
                        {
                          type: "text",
                          attr: {value: ">"},
                          classList: ["jaintou"]
                        }
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["list_option"],
                      events: {
                        click: function (t) {
                          return this.Jumpdetails("gygg", t)
                        }
                      },
                      children: [
                        {
                          type: "image",
                          attr: {
                            src: "/pages/CustomerService/images/guanggao.webp"
                          }
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["opt_txt"],
                          children: [{type: "text", attr: {value: "关于广告"}}]
                        },
                        {
                          type: "text",
                          attr: {value: ">"},
                          classList: ["jaintou"]
                        }
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["list_option"],
                      events: {click: "logOff"},
                      children: [
                        {
                          type: "image",
                          attr: {
                            src: "/pages/CustomerService/images/zhuxiao.webp"
                          }
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["opt_txt"],
                          children: [
                            {type: "text", attr: {value: "注销账户并退出"}}
                          ]
                        },
                        {
                          type: "text",
                          attr: {value: ">"},
                          classList: ["jaintou"]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "text",
                  attr: {value: "我要反馈"},
                  classList: ["feedback"],
                  events: {click: "feedback"}
                },
                {
                  type: "text",
                  attr: {value: "清空缓存"},
                  classList: ["empty"],
                  events: {click: "empty"}
                },
                {
                  type: "feed-back",
                  attr: {},
                  events: {"close-feed-back": "closeFeedBack"},
                  shown: function () {
                    return this.showFeed
                  }
                },
                {
                  type: "div",
                  attr: {},
                  classList: ["kefuRen"],
                  children: [
                    {
                      type: "image",
                      attr: {src: "/pages/CustomerService/images/kefuren.webp"},
                      events: {click: "kefuRen"}
                    }
                  ]
                },
                {
                  type: "div",
                  attr: {},
                  classList: ["Mask"],
                  shown: function () {
                    return this.showEmpty
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["empty_box"],
                      children: [
                        {
                          type: "text",
                          attr: {value: "确定要清除缓存吗？"},
                          classList: ["empty_tit"]
                        },
                        {
                          type: "image",
                          attr: {
                            src: "/pages/CustomerService/images/dustbin.webp"
                          }
                        },
                        {
                          type: "text",
                          attr: {
                            value:
                              "清除缓存后，您的所有进度将会不可恢复的永久清除"
                          },
                          classList: ["empty_con"]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["empty_bot"],
                          children: [
                            {
                              type: "text",
                              attr: {value: "取消"},
                              style: {
                                backgroundColor: "#ebebeb",
                                color: "#000000"
                              },
                              events: {click: "empty_show"}
                            },
                            {
                              type: "text",
                              attr: {value: "确认"},
                              style: {color: "#ffffff"},
                              events: {click: "callKeFu"}
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
                  classList: ["Mask"],
                  shown: function () {
                    return this.showkefuRen
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["empty_box"],
                      children: [
                        {
                          type: "text",
                          attr: {value: "客服电话"},
                          classList: ["empty_tit"]
                        },
                        {
                          type: "text",
                          attr: {value: " 电话：4006008066 "},
                          classList: ["empty_con"]
                        },
                        {
                          type: "text",
                          attr: {value: "确认要拨打电话嘛？"},
                          classList: ["empty_con"]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["empty_bot"],
                          children: [
                            {
                              type: "text",
                              attr: {value: "取消"},
                              style: {
                                backgroundColor: "#ebebeb",
                                color: "#000000"
                              },
                              events: {click: "empty_showRen"}
                            },
                            {
                              type: "text",
                              attr: {value: "确认"},
                              style: {color: "#ffffff"},
                              events: {click: "callKeFuRen"}
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
          9685: (t, e, a) => {
            var i = a(4039)
            $app_define$("@app-component/feed-back", [], function (t, e, s) {
              i(s, e, t),
                e.__esModule && e.default && (s.exports = e.default),
                (s.exports.template = a(244)),
                (s.exports.style = a(5791))
            })
          }
        },
        e = {}
      function a(i) {
        var s = e[i]
        if (void 0 !== s) return s.exports
        var n = (e[i] = {exports: {}})
        return t[i](n, n.exports, a), n.exports
      }
      ;(() => {
        a(9685)
        var t = a(6727)
        $app_define$("@app-component/index", [], function (e, i, s) {
          t(s, i, e),
            i.__esModule && i.default && (s.exports = i.default),
            (s.exports.template = a(4420)),
            (s.exports.style = a(6591))
        }),
          $app_bootstrap$("@app-component/index", {packagerVersion: "2.0.0"})
      })()
    })()
  }
  if ("undefined" == typeof window) return t()
  window.createPageHandler = t
})()
