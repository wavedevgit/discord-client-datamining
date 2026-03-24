/** chunk id: 224394 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(421838),
    m = n(48771),
    g = n(576705),
    x = n(975571),
    h = n(652215),
    _ = n(897513),
    p = n(985018),
    A = n(660504),
    f = n(628287),
    j = n(734673),
    N = n(920852),
    E = n(266332),
    b = n(386528);
let T = [{
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
        iconSrc: E,
        name: "Learn Latin",
        position: [-280, -30],
        faded: !0
    }, {
        iconSrc: b,
        name: "r/leagueoflegends",
        position: [-320, -30],
        rightAlign: !0
    }, {
        iconSrc: n(822984),
        name: "Sneaker Fans",
        position: [-250, 40]
    }, {
        iconSrc: N,
        name: "Hogwarts School",
        position: [-270, 40],
        faded: !0,
        rightAlign: !0
    }],
    C = e => {
        let {
            icon: t,
            color: n,
            size: s = 24,
            header: l,
            body: r
        } = e;
        return (0, i.jsxs)("div", {
            className: A.Vr,
            children: [(0, i.jsx)("div", {
                className: A.AD,
                children: (0, i.jsx)(t, {
                    color: n ?? "currentColor",
                    width: s,
                    height: s,
                    size: "custom"
                })
            }), (0, i.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                className: A.Uh,
                children: l
            }), (0, i.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: r
            })]
        })
    },
    I = e => {
        let {
            iconSrc: t,
            name: n,
            position: s,
            faded: l,
            rightAlign: a,
            imageCoordinates: o
        } = e, d = {
            [a ? "right" : "left"]: o[0] + s[0],
            top: o[1] + s[1]
        };
        return (0, i.jsxs)("div", {
            className: r()(A.gI, {
                [A.zj]: l
            }),
            style: d,
            children: [(0, i.jsx)("div", {
                className: A.$f,
                children: (0, i.jsx)("img", {
                    alt: "",
                    src: t,
                    width: 24,
                    height: 24
                })
            }), (0, i.jsx)(c.Heading, {
                variant: "heading-deprecated-12/semibold",
                children: n
            })]
        })
    },
    v = e => {
        let {
            guild: t
        } = e, [n, l] = s.useState(0), [r, N] = s.useState(0), [E, b] = s.useState(), v = (0, a.bG)([g.A], () => g.A.can(h.xBc.ADMINISTRATOR, t)), S = E?.offsetWidth, y = E?.offsetHeight;
        return s.useEffect(() => {
            null != S && l(S / 2), null != y && N(y / 2)
        }, [S, y, l, N]), s.useEffect(() => {
            (0, u.sF)(_._.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
        }, []), (0, i.jsxs)("div", {
            className: A.kL,
            children: [(0, i.jsxs)("div", {
                className: A.vK,
                ref: e => b(e),
                children: [T.map(e => (0, i.jsx)(I, {
                    ...e,
                    imageCoordinates: [n, r]
                }, e.name)), (0, i.jsx)("img", {
                    alt: "",
                    src: f,
                    className: A.Sl,
                    width: 256
                }), (0, i.jsx)("img", {
                    alt: "",
                    src: j,
                    className: A._7
                })]
            }), (0, i.jsx)(c.Heading, {
                variant: "heading-xl/semibold",
                children: p.intl.string(p.t["M/gBcA"])
            }), (0, i.jsx)(c.Text, {
                color: "text-default",
                variant: "text-md/normal",
                className: A.rf,
                children: p.intl.format(p.t["52EgsM"], {
                    helpdeskArticle: x.A.getArticleURL(h.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                })
            }), (0, i.jsx)(d.m, {
                text: v ? null : p.intl.string(p.t["pjG+T3"]),
                "aria-label": v ? void 0 : p.intl.string(p.t["pjG+T3"]),
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: A.x6,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: p.intl.string(p.t.ElKTeb),
                        onClick: () => {
                            m.A.open()
                        },
                        disabled: !v
                    })
                })
            }), (0, i.jsx)("hr", {
                className: A.me
            }), (0, i.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: p.intl.string(p.t.OzLWLE)
            }), (0, i.jsx)(c.Text, {
                color: "text-default",
                className: A.rf,
                variant: "text-sm/normal",
                children: p.intl.format(p.t.rjhrqC, {
                    helpdeskArticle: x.A.getArticleURL(h.MVz.GUILD_COMMUNITY_FEATURE)
                })
            }), (0, i.jsx)("div", {
                className: A.qT,
                children: [{
                    icon: c.Uy2,
                    color: o.A.unsafe_rawColors.GREEN_360.css,
                    header: p.intl.string(p.t.oVQF2y),
                    body: p.intl.format(p.t.A6G7ak, {
                        featureHook: (e, t) => (0, i.jsx)("strong", {
                            className: A.A3,
                            children: e
                        }, t)
                    })
                }, {
                    icon: c.Uy2,
                    color: o.A.unsafe_rawColors.PARTNER.css,
                    header: p.intl.string(p.t["0rJl9y"]),
                    body: p.intl.format(p.t.XsCNky, {
                        infoHook: () => (0, i.jsx)(d.m, {
                            text: p.intl.string(p.t.kPJlTh),
                            "aria-label": p.intl.string(p.t.kPJlTh),
                            children: (0, i.jsx)(c.mir, {
                                size: "xs",
                                color: "currentColor",
                                className: A.G
                            })
                        }),
                        featureHook: (e, t) => (0, i.jsx)("strong", {
                            className: A.A3,
                            children: e
                        }, t)
                    })
                }, {
                    icon: c.mir,
                    color: o.A.unsafe_rawColors.RED_360.css,
                    header: p.intl.string(p.t.W2kLJC),
                    body: p.intl.string(p.t.hyNkHz)
                }].map((e, t) => (0, i.jsx)(C, {
                    ...e
                }, t))
            })]
        })
    }