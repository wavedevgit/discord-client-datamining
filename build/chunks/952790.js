/** chunk id: 952790, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => O
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(475539),
    o = n(607399),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    h = n(454938),
    A = n(855687),
    p = n(731091),
    m = n(544028),
    g = n(253932),
    _ = n(576705),
    f = n(486020),
    x = n(885631),
    C = n(986268),
    E = n(652215),
    I = n(349828),
    N = n(985018),
    b = n(668560);

function S(e) {
    let {
        guild: t,
        controller: n,
        guildBanner: s,
        animate: l
    } = e, {
        value: c
    } = n.springs;
    return (0, i.jsx)(r.animated.div, {
        className: b.nI,
        style: {
            opacity: c,
            transform: c.to(e => `translateY(-${(1-e)*90}px)`)
        },
        children: (0, i.jsx)(r.animated.div, {
            className: a()(b._e, {
                [b.fr]: o.Fr
            }),
            style: {
                transform: c.to(e => `translateY(${(1-e)*90}px)`)
            },
            children: (0, i.jsx)("img", {
                className: a()(b.Q, {
                    [b.fr]: o.Fr
                }),
                src: f.Ay.getGuildBannerURL({
                    id: t.id,
                    banner: s
                }, l) ?? "",
                alt: "",
                "aria-hidden": !0
            })
        })
    })
}

function T(e) {
    let {
        guild: t,
        controller: n,
        hasBanner: s,
        hasSubheader: l
    } = e, {
        value: o
    } = n.springs, c = t.features.has(E.GuildFeatures.DISCOVERABLE), h = (0, i.jsx)("div", {
        className: b.WV,
        children: c && (0, i.jsx)(d.m, {
            text: N.intl.string(N.t.O8lDI2),
            position: "right",
            children: (0, i.jsxs)("div", {
                className: b.Pl,
                children: [(0, i.jsx)(u.L_e, {
                    size: "custom",
                    color: "currentColor",
                    width: 12,
                    height: 12,
                    className: b.ju
                }), (0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "none",
                    children: N.intl.string(N.t["B/vjCu"])
                })]
            })
        })
    });
    return l ? (0, i.jsx)("div", {
        className: a()(b.pS, b.W$),
        children: h
    }) : (0, i.jsx)(r.animated.div, {
        className: b.pS,
        style: s ? {
            opacity: o
        } : {
            height: o.to(e => `${20*e}px`)
        },
        children: h
    })
}

function y() {
    return (0, i.jsx)(u.Gg5, {
        size: "custom",
        color: "currentColor",
        className: b.PA,
        height: 20,
        width: 20
    })
}

function v(e) {
    let {
        guild: t
    } = e;
    return (0, i.jsx)(u.Heading, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: b.UU,
        children: t.name
    })
}
let j = [I.Vc, E.gNP];

function R(e) {
    let {
        bannerVisible: t,
        guild: l,
        onClick: a,
        onContextMenu: r,
        ariaControls: o,
        ariaExpanded: h,
        children: m
    } = e, g = (0, c.bG)([_.A], () => (0, A.K)(_.A, l)), f = s.useCallback(() => {
        g ? (0, u.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("43600"), n.e("52537")]).then(n.bind(n, 234355));
            return t => (0, i.jsx)(e, {
                ...t,
                guild: l,
                source: E.PE1.GUILD_HEADER_INVITE_BUTTON
            })
        }) : (0, u.mMO)(async () => {
            let {
                default: e
            } = await n.e("62751").then(n.bind(n, 132610));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }, [g, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.DUT, {
            className: b.Vm,
            "aria-label": N.intl.formatToPlainString(N.t.xMXpl3, {
                guildName: l?.name ?? ""
            }),
            "aria-controls": o,
            "aria-expanded": h,
            onContextMenu: r,
            onClick: a,
            children: [(0, i.jsxs)("div", {
                className: b.LO,
                children: [(0, i.jsx)(C.A, {
                    guild: l,
                    isBannerVisible: t
                }), l.id === I.Vc && (0, i.jsx)(y, {}), (0, i.jsx)(v, {
                    guild: l
                })]
            }), (0, i.jsx)("div", {
                className: b.dx,
                children: m
            })]
        }), !j.includes(l.id) && (0, i.jsx)(d.m, {
            text: N.intl.string(N.t.Sd8Ixw),
            position: "bottom",
            asContainer: !0,
            children: (0, i.jsx)(u.DUT, {
                className: b.ak,
                onClick: () => {
                    f()
                },
                children: (0, i.jsx)(u.DpX, {
                    size: "refresh_sm",
                    color: "currentColor"
                })
            })
        }), l.id === E.gNP && (0, i.jsx)(p.g, {})]
    })
}
let O = s.memo(function(e) {
    let {
        ref: t,
        bannerVisible: n,
        controller: l,
        className: r,
        onClick: d,
        onContextMenu: A,
        onMouseDown: p,
        disableBannerAnimation: _,
        "aria-expanded": C,
        "aria-controls": I,
        guild: N,
        guildBanner: y,
        animationOverlayHeight: v,
        children: j,
        headerClassName: O,
        communityInfoVisible: M,
        hasSubheader: D
    } = e, G = N.features.has(E.GuildFeatures.ANIMATED_BANNER), U = (0, h.A)(N), P = !U && (0, x.A)(N), w = !U && M, k = (0, f.VI)(y) && G && !_, [V, B] = s.useState(!1), H = s.useRef(!1), F = s.useRef(null), K = t ?? F, W = s.useRef(void 0), Y = g.kt.getSetting(), z = (0, c.bG)([m.A], () => m.A.theme);
    s.useEffect(() => {
        if (k && n && !H.current && Y) return B(!0), W.current = setTimeout(() => {
            B(!1)
        }, 5e3), () => {
            clearTimeout(W.current)
        }
    }, [k, n, Y]), s.useEffect(() => {
        H.current = n
    }, [n]);
    let X = () => {
        let {
            renderBanner: t,
            guildBanner: n
        } = e;
        return null != n && !t
    };
    return (0, i.jsx)(u.NPJ, {
        theme: z,
        children: e => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                "data-has-banner": X(),
                "data-banner-visible": n,
                ref: K,
                className: a()(r, {
                    [b.kL]: !0,
                    [b.r9]: X(),
                    [b.Pi]: n,
                    [e]: !1,
                    [b.Iv]: w || D && P
                }),
                onMouseDown: p,
                onContextMenu: A,
                children: [(0, i.jsxs)("header", {
                    className: a()(b.wx, O, {
                        [b.jD]: o.Fr
                    }),
                    children: [(0, i.jsx)("div", {
                        className: a()(b.VW, b.Nk),
                        children: (0, i.jsx)(R, {
                            bannerVisible: n,
                            guild: N,
                            onClick: d,
                            onContextMenu: A,
                            ariaControls: I,
                            ariaExpanded: C,
                            children: j
                        })
                    }), P && (0, i.jsx)(T, {
                        guild: N,
                        controller: l,
                        hasBanner: null != y,
                        hasSubheader: D ?? !1
                    })]
                }), null != y ? (0, i.jsx)(S, {
                    guild: N,
                    controller: l,
                    guildBanner: y,
                    animate: V
                }) : null, (0, i.jsx)(L, {
                    controller: l
                })]
            }), k && X() ? (0, i.jsx)("div", {
                className: b.rt,
                onMouseEnter: () => {
                    B(!0), clearTimeout(W.current)
                },
                onMouseLeave: () => B(!1),
                style: {
                    height: v
                }
            }) : null]
        })
    })
});

function L(e) {
    let {
        controller: t
    } = e, {
        theme: n
    } = (0, u.wRf)(), s = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.animated.div, {
            className: b.UL,
            style: {
                opacity: s.to(e => .5 * e)
            }
        }), (0, i.jsx)(r.animated.div, {
            className: b.ze,
            style: {
                opacity: s.to(e => e)
            }
        }), (0, i.jsx)(r.animated.div, {
            className: b.iI,
            style: {
                opacity: s.to(e => (1 - e) * 6),
                filter: (0, u.qB1)(n) ? s.to(e => `brightness(${.75+.25*e})`) : void 0
            }
        })]
    })
}