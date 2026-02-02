/** chunk id: 224394, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(990078),
    d = n(397927),
    u = n(421838),
    g = n(48771),
    m = n(576705),
    p = n(975571),
    f = n(652215),
    h = n(897513),
    b = n(985018),
    x = n(660504),
    j = n(628287),
    _ = n(734673),
    O = n(920852),
    v = n(266332),
    y = n(386528);

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let E = [{
        iconSrc: n(374229),
        name: "Pokemon GO Paris",
        position: [-230, -100]
    }, {
        iconSrc: n(640666),
        name: "Python",
        position: [-180, -100],
        faded: !0,
        rightAlign: !0
    }, {
        iconSrc: v,
        name: "Learn Latin",
        position: [-280, -30],
        faded: !0
    }, {
        iconSrc: y,
        name: "r/leagueoflegends",
        position: [-320, -30],
        rightAlign: !0
    }, {
        iconSrc: n(822984),
        name: "Sneaker Fans",
        position: [-250, 40]
    }, {
        iconSrc: O,
        name: "Hogwarts School",
        position: [-270, 40],
        faded: !0,
        rightAlign: !0
    }],
    N = e => {
        let {
            icon: t,
            color: n,
            size: i = 24,
            header: l,
            body: s
        } = e;
        return (0, r.jsxs)("div", {
            className: x.Vr,
            children: [(0, r.jsx)("div", {
                className: x.AD,
                children: (0, r.jsx)(t, {
                    color: null != n ? n : "currentColor",
                    width: i,
                    height: i,
                    size: "custom"
                })
            }), (0, r.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                className: x.Uh,
                children: l
            }), (0, r.jsx)(d.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: s
            })]
        })
    },
    S = e => {
        let {
            iconSrc: t,
            name: n,
            position: i,
            faded: l,
            rightAlign: a,
            imageCoordinates: o
        } = e, c = {
            [a ? "right" : "left"]: o[0] + i[0],
            top: o[1] + i[1]
        };
        return (0, r.jsxs)("div", {
            className: s()(x.gI, {
                [x.zj]: l
            }),
            style: c,
            children: [(0, r.jsx)("div", {
                className: x.$f,
                children: (0, r.jsx)("img", {
                    alt: "",
                    src: t,
                    width: 24,
                    height: 24
                })
            }), (0, r.jsx)(d.Heading, {
                variant: "heading-deprecated-12/semibold",
                children: n
            })]
        })
    },
    I = e => {
        let {
            guild: t
        } = e, [n, l] = i.useState(0), [s, O] = i.useState(0), [v, y] = i.useState(), I = (0, a.bG)([m.A], () => m.A.can(f.xBc.ADMINISTRATOR, t)), C = null == v ? void 0 : v.offsetWidth, T = null == v ? void 0 : v.offsetHeight;
        return i.useEffect(() => {
            null != C && l(C / 2), null != T && O(T / 2)
        }, [C, T, l, O]), i.useEffect(() => {
            (0, u.sF)(h._.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
        }, []), (0, r.jsxs)("div", {
            className: x.kL,
            children: [(0, r.jsxs)("div", {
                className: x.vK,
                ref: e => y(e),
                children: [E.map(e => {
                    var t, i;
                    return (0, r.jsx)(S, (t = A({}, e), i = i = {
                        imageCoordinates: [n, s]
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }), t), e.name)
                }), (0, r.jsx)("img", {
                    alt: "",
                    src: j,
                    className: x.Sl,
                    width: 256
                }), (0, r.jsx)("img", {
                    alt: "",
                    src: _,
                    className: x._7
                })]
            }), (0, r.jsx)(d.Heading, {
                variant: "heading-xl/semibold",
                children: b.intl.string(b.t["M/gBcA"])
            }), (0, r.jsx)(d.Text, {
                color: "text-default",
                variant: "text-md/normal",
                className: x.rf,
                children: b.intl.format(b.t["52EgsM"], {
                    helpdeskArticle: p.A.getArticleURL(f.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                })
            }), (0, r.jsx)(c.m, {
                text: I ? null : b.intl.string(b.t["pjG+T3"]),
                "aria-label": I ? void 0 : b.intl.string(b.t["pjG+T3"]),
                children: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: x.x6,
                    children: (0, r.jsx)(d.Button, {
                        variant: "primary",
                        text: b.intl.string(b.t.ElKTeb),
                        onClick: () => {
                            g.A.open()
                        },
                        disabled: !I
                    })
                })
            }), (0, r.jsx)("hr", {
                className: x.me
            }), (0, r.jsx)(d.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: b.intl.string(b.t.OzLWLE)
            }), (0, r.jsx)(d.Text, {
                color: "text-default",
                className: x.rf,
                variant: "text-sm/normal",
                children: b.intl.format(b.t.rjhrqC, {
                    helpdeskArticle: p.A.getArticleURL(f.MVz.GUILD_COMMUNITY_FEATURE)
                })
            }), (0, r.jsx)("div", {
                className: x.qT,
                children: [{
                    icon: d.Uy2,
                    color: o.A.unsafe_rawColors.GREEN_360.css,
                    header: b.intl.string(b.t.oVQF2y),
                    body: b.intl.format(b.t.A6G7ak, {
                        featureHook: (e, t) => (0, r.jsx)("strong", {
                            className: x.A3,
                            children: e
                        }, t)
                    })
                }, {
                    icon: d.Uy2,
                    color: o.A.unsafe_rawColors.PARTNER.css,
                    header: b.intl.string(b.t["0rJl9y"]),
                    body: b.intl.format(b.t.XsCNky, {
                        infoHook: () => (0, r.jsx)(c.m, {
                            text: b.intl.string(b.t.kPJlTh),
                            "aria-label": b.intl.string(b.t.kPJlTh),
                            children: (0, r.jsx)(d.mir, {
                                size: "xs",
                                color: "currentColor",
                                className: x.G
                            })
                        }),
                        featureHook: (e, t) => (0, r.jsx)("strong", {
                            className: x.A3,
                            children: e
                        }, t)
                    })
                }, {
                    icon: d.mir,
                    color: o.A.unsafe_rawColors.RED_360.css,
                    header: b.intl.string(b.t.W2kLJC),
                    body: b.intl.string(b.t.hyNkHz)
                }].map((e, t) => (0, r.jsx)(N, A({}, e), t))
            })]
        })
    }