/** Chunk was on web.js **/
/** chunk id: 144830, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => W
}), n(896048), n(638769);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(212245),
    f = n(964486),
    p = n(793574),
    _ = n(688810),
    h = n(607470),
    m = n(421838),
    g = n(891540),
    E = n(738011),
    y = n(954571),
    b = n(486020),
    O = n(661191),
    v = n(965162),
    A = n(957153),
    I = n(577718),
    S = n(652215),
    T = n(897513),
    C = n(339984),
    N = n(788868),
    w = n(985018),
    R = n(151e3);

function P(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            P(e, t, n[t])
        })
    }
    return e
}

function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function L(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let j = 25,
    M = 720;

function k() {
    return [{
        name: w.intl.string(w.t["Sp2NF+"]),
        extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
    }]
}

function U(e) {
    let {
        icon: t,
        onClick: n,
        text: i,
        children: a,
        className: o,
        selected: l = !1,
        disabled: u = !1,
        onMouseLeave: d,
        onBlur: f
    } = e;
    return (0, r.jsxs)(c.DUT, {
        className: s()(o, R.gf, {
            [R.JI]: l,
            [R.A7]: u
        }),
        onMouseLeave: d,
        onBlur: f,
        onClick: u ? void 0 : n,
        children: [l ? (0, r.jsx)("div", {
            className: R.SH
        }) : null, (0, r.jsxs)("div", {
            className: R.kV,
            children: [a, (0, r.jsxs)("div", {
                className: R.fP,
                children: [(0, r.jsx)(t, {
                    className: R.ob,
                    color: "currentColor",
                    size: "custom",
                    width: 18,
                    height: 18
                }), (0, r.jsx)(c.Text, {
                    className: R.V7,
                    color: "none",
                    variant: "text-sm/normal",
                    children: i
                })]
            })]
        })]
    })
}

function G(e) {
    let {
        option: t,
        source: n,
        isAnimated: a
    } = e, [s, o] = i.useState(!1);
    if (i.useEffect(() => {
            new Image().src = n
        }, [n]), !a || null == t) return (0, r.jsx)("div", {
        className: R.PQ,
        style: {
            backgroundImage: "url(".concat(n, ")")
        }
    });
    let l = (0, b.Bo)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: M,
        canAnimate: !1
    });
    return (0, r.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: R.PQ,
        src: s ? n : l,
        alt: t.id
    })
}

function V(e) {
    let {
        option: t,
        source: a,
        selected: l = !1,
        onSelectOption: f,
        isAnimatedImage: b,
        isVideo: O,
        hotspotLocation: A
    } = e, I = (0, d.p)(), {
        analyticsLocations: T
    } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_IMAGE_OPTION), C = (0, o.bG)([g.A], () => null != A && g.A.hasHotspot(A)), P = i.useCallback(e => {
        if (!(0, E.u)(e)) throw e
    }, []), x = O ? (0, r.jsx)(h.A, {
        className: R.PQ,
        src: a,
        loop: !0,
        playOnHover: !0,
        muted: !0,
        onPlayError: P
    }) : (0, r.jsx)(G, {
        isAnimated: b,
        option: (0, v.d1)(t) ? t : void 0,
        source: a
    });

    function j() {
        null != A && C && (m.sF(A), y.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
            type: N.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
            location: I.location,
            location_stack: T
        }))
    }
    return (0, r.jsxs)(c.DUT, {
        className: s()(R.gf, {
            [R.JI]: l
        }),
        onClick: () => f(t),
        onContextMenu: e => (0, u.L3)(e, async () => {
            let {
                default: e
            } = await n.e("22305").then(n.bind(n, 5752));
            return n => (0, r.jsx)(e, L(D({}, n), {
                backgroundOption: t,
                optionIsInUse: l
            }))
        }),
        children: [l ? (0, r.jsx)("div", {
            className: R.SH
        }) : null, (0, r.jsx)("div", {
            onFocus: j,
            onMouseEnter: j,
            className: R.kV,
            children: x
        }), O || b ? (0, r.jsx)("div", {
            className: R.uZ,
            children: (0, r.jsx)(c.udU, {
                size: "xxs",
                color: "currentColor"
            })
        }) : null, C && (0, r.jsx)(c.LpS, {
            text: w.intl.string(w.t.y2b7CA),
            className: R.$5
        })]
    })
}

function F() {
    return (0, r.jsxs)("div", {
        className: R.j1,
        children: [(0, r.jsx)(c.tvc, {
            size: "md",
            color: "currentColor",
            className: R.eo
        }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: w.intl.string(w.t["T+yRY3"])
        })]
    })
}

function B(e) {
    let {
        onClick: t,
        tooltipText: n,
        disabled: i = !1
    } = e, a = (0, o.bG)([g.A], () => g.A.hasHotspot(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

    function s() {
        m.sF(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
    }
    let u = a ? w.intl.string(w.t["5TUJOv"]) : n;
    return (0, r.jsx)(l.m, {
        text: u,
        children: (0, r.jsxs)("div", {
            className: R.$g,
            children: [(0, r.jsxs)(U, {
                className: R.__invalid_backgroundOptionBlurred,
                disabled: i,
                icon: c.XGR,
                onClick: t,
                onMouseLeave: s,
                onBlur: s,
                text: (0, r.jsxs)("div", {
                    className: R.Us,
                    children: [(0, r.jsx)(c.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: R.PK
                    }), (0, r.jsx)("div", {
                        className: R.kr,
                        children: w.intl.string(w.t["1t7U8W"])
                    })]
                }),
                children: [(0, r.jsx)("div", {
                    className: R.eD
                }), (0, r.jsx)("div", {
                    className: R.G5
                })]
            }), a && (0, r.jsx)(c.LpS, {
                text: w.intl.string(w.t.y2b7CA),
                className: R.$5
            })]
        })
    })
}

function H(e) {
    let {
        onClick: t
    } = e, n = (0, d.p)(), {
        analyticsLocations: i
    } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (0, f.Ay)(() => {
        y.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
            type: N.e.VIDEO_BACKGROUNDS_INLINE,
            location: n.location,
            location_stack: i
        })
    }), (0, r.jsx)(B, {
        onClick: t,
        tooltipText: w.intl.string(w.t["IqE0T/"])
    })
}

function Y(e) {
    let {
        onAddBackgroundImage: t,
        disabled: i
    } = e, a = (0, c.k34)(), s = i ? w.intl.formatToPlainString(w.t.ykGFeD, {
        maxCustomBackgrounds: j
    }) : w.intl.string(w.t.Qx0tFc), o = k();

    function l() {
        (0, c.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("79149"), n.e("53653"), n.e("92812")]).then(n.bind(n, 551028));
            return n => (0, r.jsx)(e, D({
                maxFileSizeBytes: I.G9,
                onComplete: e => {
                    let {
                        imageUri: n,
                        file: r,
                        isFromTenor: i
                    } = e;
                    return t(n, r, i)
                },
                uploadType: C.HL.VIDEO_BACKGROUND,
                filters: o,
                modalTitle: w.intl.string(w.t.yG2pUi),
                imageSpecifications: w.intl.string(w.t["72OaxN"]),
                uploadOptionTitle: w.intl.string(w.t.xsW8u6),
                showUpsellHeader: !0
            }, n))
        }, {
            contextKey: a
        })
    }
    return (0, r.jsx)(B, {
        disabled: i,
        onClick: l,
        tooltipText: s
    })
}

function W(e) {
    let {
        canUseCustomBackgrounds: t,
        customBackgroundOptions: n,
        selectedOption: a,
        onSelectOption: o,
        onUpsellClick: u,
        onAddBackgroundImage: d,
        responsive: f = !0
    } = e, h = i.useMemo(() => n.sort((e, t) => null == e.last_used || null == t.last_used ? O.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [n]), m = h.length >= j, {
        analyticsLocations: g
    } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_OPTIONS), E = Object.values((0, A.A)()).sort((e, t) => I.sl[e.id] - I.sl[t.id]);
    return (0, r.jsx)(_.f5, {
        value: g,
        children: (0, r.jsxs)("div", {
            className: s()(R.to, !f && R.mK),
            children: [(0, r.jsx)(U, {
                selected: null == a,
                icon: c.KTN,
                onClick: () => o(null),
                text: w.intl.string(w.t.fUdMeO)
            }), (0, r.jsx)(U, {
                selected: "blur" === a,
                icon: c.fBX,
                onClick: () => o("blur"),
                text: w.intl.string(w.t.LhSyL8),
                children: (0, r.jsx)("div", {
                    className: R.LJ
                })
            }), t ? (0, r.jsx)(Y, {
                onAddBackgroundImage: d,
                disabled: m
            }) : (0, r.jsx)(H, {
                onClick: u
            }), h.map(e => {
                let t = (0, b.Bo)({
                    userId: e.user_id,
                    assetId: e.id,
                    assetHash: e.asset,
                    size: M
                });
                return null == t ? null : (0, r.jsx)(l.m, {
                    __unsupportedReactNodeAsText: (0, r.jsx)(F, {}),
                    "aria-label": w.intl.string(w.t["T+yRY3"]),
                    children: (0, r.jsx)(V, {
                        option: e,
                        source: t,
                        selected: (0, v.d1)(a) && a.id === e.id,
                        onSelectOption: o,
                        isVideo: (0, b.q6)(e.asset),
                        isAnimatedImage: (0, b.VI)(e.asset)
                    }, e.id)
                }, e.id)
            }), E.map(e => {
                let t = !0 === e.isVideo;
                return (0, r.jsx)(l.m, {
                    text: e.name,
                    "aria-label": e.name,
                    children: (0, r.jsx)(V, {
                        option: e.id,
                        source: e.source,
                        selected: a === e.id,
                        onSelectOption: o,
                        isVideo: t,
                        isAnimatedImage: !1,
                        hotspotLocation: e.hotspotLocation
                    }, e.id)
                }, e.id)
            })]
        })
    })
}