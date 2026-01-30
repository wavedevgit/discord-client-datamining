/** Chunk was on 1113 **/
/** chunk id: 952790, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => w
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(864605),
    o = n(607399),
    c = n(311907),
    u = n(990078),
    d = n(397927),
    h = n(454938),
    p = n(855687),
    g = n(731091),
    f = n(544028),
    m = n(253932),
    b = n(576705),
    A = n(486020),
    y = n(885631),
    O = n(986268),
    _ = n(652215),
    j = n(349828),
    x = n(985018),
    v = n(668560);

function E(e) {
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

function C(e) {
    var t;
    let {
        guild: n,
        controller: l,
        guildBanner: i,
        animate: c
    } = e, {
        value: u
    } = l.springs;
    return (0, r.jsx)(a.animated.div, {
        className: v.nI,
        style: {
            opacity: u,
            transform: u.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: s()(v._e, {
                [v.fr]: o.Fr
            }),
            style: {
                transform: u.to(e => "translateY(".concat((1 - e) * 90, "px)"))
            },
            children: (0, r.jsx)("img", {
                className: s()(v.Q, {
                    [v.fr]: o.Fr
                }),
                src: null != (t = A.Ay.getGuildBannerURL({
                    id: n.id,
                    banner: i
                }, c)) ? t : "",
                alt: "",
                "aria-hidden": !0
            })
        })
    })
}

function S(e) {
    let {
        guild: t,
        controller: n,
        hasBanner: l,
        hasSubheader: i
    } = e, {
        value: o
    } = n.springs, c = t.features.has(_.GuildFeatures.DISCOVERABLE), h = (0, r.jsx)("div", {
        className: v.WV,
        children: c && (0, r.jsx)(u.m, {
            text: x.intl.string(x.t.O8lDI2),
            position: "right",
            children: (0, r.jsxs)("div", {
                className: v.Pl,
                children: [(0, r.jsx)(d.L_e, {
                    size: "custom",
                    color: "currentColor",
                    width: 12,
                    height: 12,
                    className: v.ju
                }), (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "none",
                    children: x.intl.string(x.t["B/vjCu"])
                })]
            })
        })
    });
    return i ? (0, r.jsx)("div", {
        className: s()(v.pS, v.W$),
        children: h
    }) : (0, r.jsx)(a.animated.div, {
        className: v.pS,
        style: l ? {
            opacity: o
        } : {
            height: o.to(e => "".concat(20 * e, "px"))
        },
        children: h
    })
}

function I() {
    return (0, r.jsx)(d.Gg5, {
        size: "custom",
        color: "currentColor",
        className: v.PA,
        height: 20,
        width: 20
    })
}

function N(e) {
    let {
        guild: t
    } = e;
    return (0, r.jsx)(d.Heading, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: v.UU,
        children: t.name
    })
}
let T = [j.V, _.gNP];

function P(e) {
    var t;
    let {
        bannerVisible: i,
        guild: s,
        onClick: a,
        onContextMenu: o,
        ariaControls: h,
        ariaExpanded: f,
        children: m
    } = e, A = (0, c.bG)([b.A], () => (0, p.K)(b.A, s)), y = l.useCallback(() => {
        A ? (0, d.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
            return t => {
                var n, l;
                return (0, r.jsx)(e, (n = E({}, t), l = l = {
                    guild: s,
                    source: _.PE1.GUILD_HEADER_INVITE_BUTTON
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                }), n))
            }
        }) : (0, d.mMO)(async () => {
            let {
                default: e
            } = await n.e("62751").then(n.bind(n, 132610));
            return t => (0, r.jsx)(e, E({}, t))
        })
    }, [A, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(d.DUT, {
            className: v.Vm,
            "aria-label": x.intl.formatToPlainString(x.t.xMXpl3, {
                guildName: null != (t = null == s ? void 0 : s.name) ? t : ""
            }),
            "aria-controls": h,
            "aria-expanded": f,
            onContextMenu: o,
            onClick: a,
            children: [(0, r.jsxs)("div", {
                className: v.LO,
                children: [(0, r.jsx)(O.A, {
                    guild: s,
                    isBannerVisible: i
                }), s.id === j.V && (0, r.jsx)(I, {}), (0, r.jsx)(N, {
                    guild: s
                })]
            }), (0, r.jsx)("div", {
                className: v.dx,
                children: m
            })]
        }), !T.includes(s.id) && (0, r.jsx)(u.m, {
            text: x.intl.string(x.t.Sd8Ixw),
            position: "bottom",
            asContainer: !0,
            children: (0, r.jsx)(d.DUT, {
                className: v.ak,
                onClick: () => {
                    y()
                },
                children: (0, r.jsx)(d.DpX, {
                    size: "refresh_sm",
                    color: "currentColor"
                })
            })
        }), s.id === _.gNP && (0, r.jsx)(g.g, {})]
    })
}
let w = l.memo(function(e) {
    let {
        ref: t,
        bannerVisible: n,
        controller: i,
        className: a,
        onClick: u,
        onContextMenu: p,
        onMouseDown: g,
        disableBannerAnimation: b,
        "aria-expanded": O,
        "aria-controls": j,
        guild: x,
        guildBanner: E,
        animationOverlayHeight: I,
        children: N,
        headerClassName: T,
        communityInfoVisible: w,
        hasSubheader: D
    } = e, L = x.features.has(_.GuildFeatures.ANIMATED_BANNER), M = (0, h.A)(x), G = !M && (0, y.A)(x), k = !M && w, U = (0, A.VI)(E) && L && !b, [V, B] = l.useState(!1), H = l.useRef(!1), F = l.useRef(null), K = null != t ? t : F, Y = l.useRef(void 0), W = m.kt.getSetting(), z = (0, c.bG)([f.A], () => f.A.theme);
    l.useEffect(() => {
        if (U && n && !H.current && W) return B(!0), Y.current = setTimeout(() => {
            B(!1)
        }, 5e3), () => {
            clearTimeout(Y.current)
        }
    }, [U, n, W]), l.useEffect(() => {
        H.current = n
    }, [n]);
    let q = () => {
        let {
            renderBanner: t,
            guildBanner: n
        } = e;
        return null != n && !t
    };
    return (0, r.jsx)(d.NPJ, {
        theme: z,
        children: e => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                "data-has-banner": q(),
                "data-banner-visible": n,
                ref: K,
                className: s()(a, {
                    [v.kL]: !0,
                    [v.r9]: q(),
                    [v.Pi]: n,
                    [e]: !1,
                    [v.Iv]: k || D && G
                }),
                onMouseDown: g,
                onContextMenu: p,
                children: [(0, r.jsxs)("header", {
                    className: s()(v.wx, T, {
                        [v.jD]: o.Fr
                    }),
                    children: [(0, r.jsx)("div", {
                        className: s()(v.VW, v.Nk),
                        children: (0, r.jsx)(P, {
                            bannerVisible: n,
                            guild: x,
                            onClick: u,
                            onContextMenu: p,
                            ariaControls: j,
                            ariaExpanded: O,
                            children: N
                        })
                    }), G && (0, r.jsx)(S, {
                        guild: x,
                        controller: i,
                        hasBanner: null != E,
                        hasSubheader: null != D && D
                    })]
                }), null != E ? (0, r.jsx)(C, {
                    guild: x,
                    controller: i,
                    guildBanner: E,
                    animate: V
                }) : null, (0, r.jsx)(R, {
                    controller: i
                })]
            }), U && q() ? (0, r.jsx)("div", {
                className: v.rt,
                onMouseEnter: () => {
                    B(!0), clearTimeout(Y.current)
                },
                onMouseLeave: () => B(!1),
                style: {
                    height: I
                }
            }) : null]
        })
    })
});

function R(e) {
    let {
        controller: t
    } = e, {
        theme: n
    } = (0, d.wRf)(), l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.animated.div, {
            className: v.UL,
            style: {
                opacity: l.to(e => .5 * e)
            }
        }), (0, r.jsx)(a.animated.div, {
            className: v.ze,
            style: {
                opacity: l.to(e => e)
            }
        }), (0, r.jsx)(a.animated.div, {
            className: v.iI,
            style: {
                opacity: l.to(e => (1 - e) * 6),
                filter: (0, d.qB1)(n) ? l.to(e => "brightness(".concat(.75 + .25 * e, ")")) : void 0
            }
        })]
    })
}