!(function () {
  var t = function () {
    return (() => {
      var t,
        e = {
          6933: (t, e, i) => {
            t.exports = function (t, e, n) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0)
              var a,
                o = (a = i(9374)) && a.__esModule ? a : {default: a}
              e.default = {
                data: {details: ""},
                onInit() {
                  "yhys" == this.details
                    ? (this.details = o.default.yhys)
                    : "gygg" == this.details
                    ? (this.details = o.default.gygg)
                    : "zxzh" == this.details && (this.details = o.default.zxzh)
                }
              }
              const r = e.default || t.exports,
                s = ["public", "protected", "private"]
              if (
                r.data &&
                s.some(function (t) {
                  return r[t]
                })
              )
                throw new Error(
                  '页面VM对象中的属性data不可与"' +
                    s.join(",") +
                    '"同时存在，请使用private替换data名称'
                )
              r.data ||
                ((r.data = {}),
                (r._descriptor = {}),
                s.forEach(function (t) {
                  const e = typeof r[t]
                  if ("object" === e) {
                    r.data = Object.assign(r.data, r[t])
                    for (const e in r[t]) r._descriptor[e] = {access: t}
                  } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                }))
            }
          },
          6068: (t) => {
            t.exports = {
              ".kefuBox": {
                width: "100%",
                height: "100%",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#f5f5f5"
              },
              ".title_top": {
                width: "90%",
                height: "120px",
                paddingTop: "0px",
                paddingRight: "20px",
                paddingBottom: "0px",
                paddingLeft: "20px",
                marginTop: "30px",
                borderRadius: "20px",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#ffffff"
              },
              ".title_top image": {
                width: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "title_top"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".title_top text": {
                color: "#000000",
                fontWeight: "900",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "title_top"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".title_top .jaintou": {
                fontSize: "60px",
                transform: '{"rotate":"90deg"}',
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "title_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "jaintou"}
                  ]
                }
              },
              ".content": {
                width: "80%",
                marginTop: "20px",
                paddingTop: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                paddingLeft: "20px",
                borderRadius: "20px",
                backgroundColor: "#ffffff"
              },
              ".content text": {
                fontSize: "30px",
                fontWeight: "700",
                color: "#000000",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "content"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              }
            }
          },
          2162: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["kefuBox"],
              children: [
                {
                  type: "block",
                  attr: {},
                  repeat: function () {
                    return this.details
                  },
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["title_top"],
                      children: [
                        {
                          type: "text",
                          attr: {
                            value: function () {
                              return this.$item.title
                            }
                          }
                        },
                        {
                          type: "image",
                          attr: {
                            src: "/pages/CustomerService/images/jiantouxia.webp"
                          }
                        }
                      ]
                    },
                    {
                      type: "div",
                      attr: {},
                      classList: ["content"],
                      children: [
                        {
                          type: "text",
                          attr: {
                            value: function () {
                              return this.$item.content
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          9374: (t) => {
            "use strict"
            t.exports = JSON.parse(
              '{"yhys":[{"title":"平台会收集我的信息吗？","content":"亲亲，您可以放心呢，当您使用产品时，我们会访问您的网络权限。实现应用联网。用于数据的处理与同步。除以上权限，快应用本身未申请任何权限，未收集数据。"},{"title":"平台会泄露我的信息吗","content":"亲亲，您可以放心哦，平台一直致力保护用户的权益，且泄露数据是违规行为。"}],"gygg":[{"title":"点击广告会泄露我的信息吗？","content":"亲亲，不会的呢。我们不会在未经用户合法 授权的情况下，公开、编辑或透露用户的信息，除非有下列情况需要：1依照国家有关法律、法规规定；2执行适合的服务条款(包括调查可能勋在的违规的情况)；3查找、预防或者处理欺诈、安全或技术方面的问题：如您有发现任何违规行为可以在【我的】->【客服】界面发邮件给我们。"},{"title":"点击广告会泄露我的信息吗？","content":"亲亲，不会的呢。我们不会在未经用户合法 授权的情况下，公开、编辑或透露用户的信息，除非有下列情况需要：1依照国家有关法律、法规规定；2执行适合的服务条款(包括调查可能勋在的违规的情况)；3查找、预防或者处理欺诈、安全或技术方面的问题：如您有发现任何违规行为可以在【我的】->【客服】界面发邮件给我们。"}],"zxzh":[{"title":"如何注销账号","content":"亲亲，如果您执意放弃账户内数据如：金币等数据，您可以：点击【帮助】进入帮助中心点击【清空缓存】按钮即可。"}]}'
            )
          }
        },
        i = {}
      function n(t) {
        var a = i[t]
        if (void 0 !== a) return a.exports
        var o = (i[t] = {exports: {}})
        return e[t](o, o.exports, n), o.exports
      }
      ;(t = n(6933)),
        $app_define$("@app-component/index", [], function (e, i, a) {
          t(a, i, e),
            i.__esModule && i.default && (a.exports = i.default),
            (a.exports.template = n(2162)),
            (a.exports.style = n(6068))
        }),
        $app_bootstrap$("@app-component/index", {packagerVersion: "2.0.0"})
    })()
  }
  if ("undefined" == typeof window) return t()
  window.createPageHandler = t
})()
