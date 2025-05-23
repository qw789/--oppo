!(function () {
  var t = function () {
    return (() => {
      var t,
        e = {
          1265: (t) => {
            t.exports = function (t, e, a) {
              "use strict"
              Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = void 0),
                (e.default = {
                  data: {
                    bgImg: "rankBG.png",
                    userData: [],
                    datadata: [],
                    showAD_163: !1
                  },
                  async onInit() {
                    $sdk.ad.reportCustomEvent(this, "GAME_RANKING", "OK"),
                      (this.showAD_163 = !1),
                      (this.showAD_163 = !0),
                      (this.userData = await $sdk.utils.getRankList())
                    let t = this.userData
                    this.datadata = t.splice(0, 3)
                  }
                })
              const n = e.default || t.exports,
                r = ["public", "protected", "private"]
              if (
                n.data &&
                r.some(function (t) {
                  return n[t]
                })
              )
                throw new Error(
                  '页面VM对象中的属性data不可与"' +
                    r.join(",") +
                    '"同时存在，请使用private替换data名称'
                )
              n.data ||
                ((n.data = {}),
                (n._descriptor = {}),
                r.forEach(function (t) {
                  const e = typeof n[t]
                  if ("object" === e) {
                    n.data = Object.assign(n.data, n[t])
                    for (const e in n[t]) n._descriptor[e] = {access: t}
                  } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                }))
            }
          },
          4106: (t) => {
            t.exports = {
              ".wrapper": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "120% 100%",
                backgroundPosition: "-10px -10px",
                position: "relative",
                background:
                  '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#e4fefa","#ecedff"]}]}'
              },
              ".wrapper .wrapper_rank": {
                backgroundPosition: "-70px -500px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "120% 100%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper_rank"}
                  ]
                }
              },
              ".wrapper .rank-wrapper": {
                width: "750px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundRepeat: "no-repeat",
                paddingBottom: "100px",
                position: "relative",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "rank-wrapper"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_oth_text": {
                position: "absolute",
                top: "330px",
                left: "295px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_oth_text"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_oth_text text": {
                color: "#333333",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "top_oth_text"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_oth_two": {
                position: "absolute",
                top: "356px",
                left: "110px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_oth_two"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_oth_two text": {
                color: "#333333",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_oth_two"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_oth_three": {
                position: "absolute",
                top: "365px",
                left: "499px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "top_oth_three"
                    }
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_oth_three text": {
                color: "#333333",
                fontWeight: "bolder",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "top_oth_three"
                    },
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_top": {
                width: "100%",
                height: "244px",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "115px",
                paddingTop: "0px",
                paddingRight: "95px",
                paddingBottom: "0px",
                paddingLeft: "95px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_top"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_top .top_img": {
                width: "194px",
                height: "199px",
                marginBottom: "17px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_img"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_top .top_img_two": {
                width: "143px",
                height: "147px",
                marginTop: "83px",
                marginBottom: "17px",
                marginRight: "58px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_top"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_img_two"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_top .top_img_three": {
                width: "143px",
                height: "147px",
                marginTop: "110px",
                marginBottom: "17px",
                marginLeft: "63px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_top"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "top_img_three"
                    }
                  ]
                }
              },
              ".wrapper .rank-wrapper .top_top text": {
                color: "#333333",
                fontWeight: "bolder",
                fontSize: "29px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_top"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .white": {
                width: "644px",
                height: "52px",
                backgroundColor: "#ffffff",
                position: "absolute",
                top: "569px",
                left: "55px",
                borderTopLeftRadius: "21px",
                borderTopRightRadius: "21px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "white"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .rank_bgimg": {
                position: "absolute",
                top: "409px",
                left: "61px",
                flexDirection: "row",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "rank_bgimg"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .rank_bgimg .bgimg_one": {
                width: "218px",
                height: "211px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "rank_bgimg"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "bgimg_one"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .rank_bgimg .bgimg_two": {
                width: "207px",
                height: "181px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "rank_bgimg"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "bgimg_two"}
                  ]
                }
              },
              ".wrapper .rank-wrapper .rank_bgimg .bgimg_three": {
                width: "207px",
                height: "181px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {
                      t: "a",
                      n: "class",
                      i: !1,
                      a: "element",
                      v: "rank-wrapper"
                    },
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "rank_bgimg"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "bgimg_three"}
                  ]
                }
              },
              ".wrapper .myanswer": {
                width: "260px",
                height: "150px",
                position: "relative",
                top: "0px",
                right: "170px",
                fontSize: "35px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "myanswer"}
                  ]
                }
              },
              ".wrapper .myanswer .myanswer_img": {
                position: "absolute",
                left: "8px",
                top: "90px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "myanswer"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "myanswer_img"}
                  ]
                }
              },
              ".wrapper .myanswer text": {
                width: "150px",
                height: "150px",
                fontSize: "35px",
                color: "#ffffff",
                position: "absolute",
                top: "32px",
                left: "50px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "wrapper"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "myanswer"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".img_div": {
                width: "100%",
                justifyContent: "flex-end",
                position: "absolute",
                top: "0px",
                left: "0px"
              },
              ".con": {
                width: "676px",
                marginTop: "200px",
                backgroundImage: "/pages/rankingList/images/listbg.png",
                backgroundSize: "100% 100%",
                borderTopLeftRadius: "21px",
                borderTopRightRadius: "21px",
                flexDirection: "column",
                paddingTop: "56px",
                paddingRight: "30px",
                paddingBottom: "56px",
                paddingLeft: "30px"
              },
              ".con .con_title": {
                width: "100%",
                height: "66px",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "20px",
                paddingTop: "0px",
                paddingRight: "50px",
                paddingBottom: "0px",
                paddingLeft: "50px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con_title"}
                  ]
                }
              },
              ".con .con_title .rank": {
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#5897ff",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con_title"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "rank"}
                  ]
                }
              },
              ".con .con_title con .name": {
                width: "50%",
                marginLeft: "80px",
                textAlign: "left",
                color: "#5897ff",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con_title"},
                    {t: "d"},
                    {t: "t", n: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "name"}
                  ]
                }
              },
              ".con .con_title .score": {
                width: "30%",
                textAlign: "left",
                color: "#5897ff",
                marginLeft: "40px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con_title"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "score"}
                  ]
                }
              },
              ".con .con_title text": {
                fontSize: "26px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#a3abb3",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con_title"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".con .con_title image": {
                width: "50px",
                height: "50px",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "con_title"},
                    {t: "d"},
                    {t: "t", n: "image"}
                  ]
                }
              },
              ".con .top_list": {
                height: "60px",
                marginTop: "15px",
                marginRight: "0px",
                marginBottom: "15px",
                marginLeft: "0px",
                backgroundColor: "#e6f9fb",
                borderRadius: "25px",
                justifyContent: "space-between",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_list"}
                  ]
                }
              },
              ".con .top_list .name_1": {
                width: "50%",
                marginLeft: "42px",
                textAlign: "left",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_list"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "name_1"}
                  ]
                }
              },
              ".con .top_list .score_1": {
                textAlign: "left",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_list"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "score_1"}
                  ]
                }
              },
              ".con .top_list text": {
                fontSize: "26px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                color: "#6f6f6f",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "20%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "top_list"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".con .toplist": {
                height: "60px",
                marginTop: "15px",
                marginRight: "0px",
                marginBottom: "15px",
                marginLeft: "0px",
                backgroundColor: "#eceefe",
                borderRadius: "25px",
                justifyContent: "space-between",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "toplist"}
                  ]
                }
              },
              ".con .toplist .name_1": {
                width: "50%",
                marginLeft: "42px",
                textAlign: "left",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "toplist"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "name_1"}
                  ]
                }
              },
              ".con .toplist .score_1": {
                textAlign: "left",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "toplist"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "score_1"}
                  ]
                }
              },
              ".con .toplist text": {
                fontSize: "26px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
                color: "#6f6f6f",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "20%",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "toplist"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              },
              ".con .highLight": {
                backgroundColor: "#87cbe0",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "highLight"}
                  ]
                }
              },
              ".con .list text": {
                fontSize: "27px",
                fontFamily: "Microsoft YaHei",
                fontWeight: "400",
                color: "#5d5d5d",
                _meta: {
                  ruleDef: [
                    {t: "a", n: "class", i: !1, a: "element", v: "con"},
                    {t: "d"},
                    {t: "a", n: "class", i: !1, a: "element", v: "list"},
                    {t: "d"},
                    {t: "t", n: "text"}
                  ]
                }
              }
            }
          },
          435: (t) => {
            t.exports = {
              type: "div",
              attr: {},
              classList: ["wrapper"],
              children: [
                {
                  type: "div",
                  attr: {},
                  classList: ["wrapper_rank"],
                  children: [
                    {
                      type: "div",
                      attr: {},
                      classList: ["rank-wrapper"],
                      children: [
                        {
                          type: "div",
                          attr: {},
                          classList: ["top_top"],
                          children: [
                            {
                              type: "image",
                              attr: {src: "/pages/rankingList/images/two.png"},
                              classList: ["top_img_two"]
                            },
                            {
                              type: "image",
                              attr: {src: "/pages/rankingList/images/one.png"},
                              classList: ["top_img"]
                            },
                            {
                              type: "image",
                              attr: {
                                src: "/pages/rankingList/images/three.png"
                              },
                              classList: ["top_img_three"]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["top_oth_text"],
                          repeat: function () {
                            return this.datadata
                          },
                          shown: function () {
                            return 0 == this.$idx
                          },
                          children: [
                            {
                              type: "text",
                              attr: {
                                value: function () {
                                  return this.$item.name
                                }
                              }
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["top_oth_two"],
                          repeat: function () {
                            return this.datadata
                          },
                          shown: function () {
                            return 1 == this.$idx && !(0 == this.$idx)
                          },
                          children: [
                            {
                              type: "text",
                              attr: {
                                value: function () {
                                  return this.$item.name
                                }
                              }
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["top_oth_three"],
                          repeat: function () {
                            return this.datadata
                          },
                          shown: function () {
                            return !(
                              2 != this.$idx ||
                              0 == this.$idx ||
                              1 == this.$idx
                            )
                          },
                          children: [
                            {
                              type: "text",
                              attr: {
                                value: function () {
                                  return this.$item.name
                                }
                              }
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["con"],
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: function () {
                                return [
                                  this.$idx % 2 == 0 ? "top_list" : "toplist"
                                ]
                              },
                              repeat: function () {
                                return this.userData
                              },
                              children: [
                                {
                                  type: "text",
                                  attr: {
                                    value: function () {
                                      return this.$idx + 4
                                    }
                                  },
                                  classList: ["ranknum"]
                                },
                                {
                                  type: "text",
                                  attr: {
                                    value: function () {
                                      return this.$item.name
                                    }
                                  },
                                  classList: ["name_1"]
                                },
                                {
                                  type: "text",
                                  attr: {
                                    value: function () {
                                      return this.$item.score
                                    }
                                  },
                                  classList: ["score_1"]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attr: {},
                          classList: ["rank_bgimg"],
                          children: [
                            {
                              type: "div",
                              attr: {},
                              classList: ["bgimg_two"],
                              style: {
                                backgroundImage:
                                  "/pages/rankingList/images/twobg.png"
                              }
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["bgimg_one"],
                              style: {
                                backgroundImage:
                                  "/pages/rankingList/images/onebg.png"
                              }
                            },
                            {
                              type: "div",
                              attr: {},
                              classList: ["bgimg_three"],
                              style: {
                                backgroundImage:
                                  "/pages/rankingList/images/threebg.png"
                              }
                            }
                          ]
                        },
                        {type: "div", attr: {}, classList: ["white"]}
                      ]
                    }
                  ]
                }
              ]
            }
          }
        },
        a = {}
      function n(t) {
        var r = a[t]
        if (void 0 !== r) return r.exports
        var i = (a[t] = {exports: {}})
        return e[t](i, i.exports, n), i.exports
      }
      ;(t = n(1265)),
        $app_define$("@app-component/index", [], function (e, a, r) {
          t(r, a, e),
            a.__esModule && a.default && (r.exports = a.default),
            (r.exports.template = n(435)),
            (r.exports.style = n(4106))
        }),
        $app_bootstrap$("@app-component/index", {packagerVersion: "2.0.0"})
    })()
  }
  if ("undefined" == typeof window) return t()
  window.createPageHandler = t
})()
