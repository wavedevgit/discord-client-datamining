/** Chunk was on web.js **/
/** chunk id: 768908, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => Z,
    T: () => q,
    Wx: () => z,
    cH: () => K
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    c = n(435371),
    u = n(397927),
    d = n(544420),
    f = n(414079),
    p = n(29160),
    _ = n(15285),
    h = n(843402),
    m = n(496885),
    g = n(227309),
    E = n(847521),
    y = n(760751),
    b = n(189081),
    O = n(954571),
    v = n(583613),
    A = n(723702),
    I = n(544028),
    S = n(790174),
    T = n(652215),
    C = n(650583),
    N = n(985018),
    w = n(900506),
    R = n(976092),
    P = n(20976),
    D = n(473169);

function x(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            x(e, t, n[t])
        })
    }
    return e
}

function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function M(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let k = o.Ay.connectStores([I.A], () => ({
        theme: I.A.theme
    }))(u.ppr),
    U = (0, A.isWindows)(),
    G = 18,
    V = "https://www.igdb.com/about";

function F(e) {
    let {
        onClose: t
    } = e, n = (0, o.bG)([_.Ay], () => _.Ay.getCandidateGames()), [a, l] = i.useState(null);

    function c(e) {
        l(e)
    }

    function f() {
        null != a && (d.A.addGame(a.pid, a.name), t())
    }
    let p = n.map(e => ({
        id: e.pid.toString(),
        value: e,
        label: null != e.name ? e.name : ""
    }));
    return (0, r.jsxs)(u.lGe, {
        className: s()(w.H2, R.Y_),
        "aria-label": N.intl.string(N.t.GTCx0p),
        children: [(0, r.jsx)(u.ZiE, {
            selectionMode: "single",
            placeholder: N.intl.string(N.t.XqMe3N),
            value: a,
            options: p,
            onSelectionChange: c
        }), (0, r.jsx)(u.cGx, {
            className: s()(D.Ot, D.QB)
        }), (0, r.jsxs)("div", {
            className: s()(w.o1, P.xM),
            children: [(0, r.jsx)(u.QWc, {
                variant: "secondary",
                text: N.intl.string(N.t["ETE/oC"]),
                onClick: t
            }), (0, r.jsx)(u.Button, {
                variant: "primary",
                text: N.intl.string(N.t.GTCx0p),
                disabled: null == a,
                onClick: f
            })]
        })]
    })
}

function B(e) {
    let {
        rawGame: t,
        nowPlaying: a = !1,
        isOverride: h,
        subgames: g,
        isSubgame: v = !1,
        parentGame: A
    } = e, I = (0, o.cf)([_.Ay, y.A, b.A], () => (0, _.xU)(t, _.Ay, y.A, b.A)), {
        canToggleDetection: S,
        isCurrentGameDetectionEnabled: R
    } = (0, o.cf)([_.Ay], () => ({
        canToggleDetection: null == A || _.Ay.isDetectionEnabled(A),
        isCurrentGameDetectionEnabled: _.Ay.isDetectionEnabled(I)
    })), D = (0, o.bG)([_.Ay], () => _.Ay.getVisibleGame()), [x, j] = i.useState(!1), k = i.useMemo(() => (0, E.n1)(I) ? v ? I.gameName : N.intl.formatToPlainString(N.t.G6BGdx, {
        subgameName: I.gameName
    }) : I.name, [I, v]), [V, F] = i.useState(null != k ? k : "???"), H = s()(P.tR, {
        [w.LO]: !a,
        [w.Rw]: a,
        [w.FB]: null != I && a,
        [w.xL]: v,
        [w.fG]: null != g && g.length > 0
    });

    function Y() {
        d.A.deleteEntry(I), null == g || g.forEach(e => {
            d.A.deleteEntry(e)
        })
    }

    function W() {
        I.name !== V && d.A.editName(I, V)
    }

    function K(e) {
        e.key === C.dh.ENTER && (e.currentTarget.blur(), e.preventDefault())
    }

    function z(e) {
        d.A.toggleOverlay(I, e, e)
    }

    function q() {
        null != g && g.length > 0 && R ? (0, u.mMO)(async () => {
            let {
                Modal: e
            } = await Promise.resolve().then(n.bind(n, 158954));
            return t => (0, r.jsx)(e, M(L({}, t), {
                title: N.intl.formatToPlainString(N.t.PZ4fKc, {
                    platform: k
                }),
                subtitle: N.intl.formatToPlainString(N.t.ZIQbfb, {
                    platform: k
                }),
                actions: [{
                    text: N.intl.string(N.t["ETE/oC"]),
                    onClick: () => t.onClose(),
                    variant: "secondary"
                }, {
                    text: N.intl.string(N.t.Fmjztz),
                    onClick: () => {
                        d.A.toggleDetection(I), t.onClose()
                    },
                    variant: "primary"
                }]
            }))
        }) : d.A.toggleDetection(I)
    }

    function Z() {
        if (x) return;
        let e = null != I.id ? y.A.getDetectableGame(I.id) : null;
        O.default.track(T.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, E.n1)(I) ? I.gameName : I.name
        }), j(!0), (0, u.mMO)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
            return n => {
                var i, a, s;
                return (0, r.jsx)(t, M(L({}, n), {
                    detectedActivity: {
                        name: null != (i = I.name) ? i : "",
                        application_id: null != (a = null != (s = null == e ? void 0 : e.id) ? s : I.id) ? a : void 0,
                        type: T.$pd.PLAYING
                    },
                    onSubmitted: () => {}
                }))
            }
        })
    }

    function X() {
        return I.verified && !h ? (0, r.jsxs)("div", {
            className: w.HS,
            children: [(0, r.jsx)("div", {
                className: w.mO,
                children: k
            }), (0, r.jsx)(c.m_, {
                text: N.intl.string(N.t["4PJP5p"]),
                children: (0, r.jsx)(m.A, {
                    className: w.qf,
                    size: G,
                    color: l.A.unsafe_rawColors.BRAND_500.css,
                    children: (0, r.jsx)(u.Uzd, {
                        size: "custom",
                        width: G,
                        height: G,
                        color: l.A.unsafe_rawColors.WHITE.css
                    })
                })
            })]
        }) : (0, r.jsx)("input", {
            className: s()(w.mO, w.sr),
            type: "text",
            maxLength: 128,
            value: V,
            onBlur: W,
            onKeyDown: K,
            onChange: e => F(e.target.value)
        })
    }

    function Q() {
        let e, {
            played: t,
            exePath: n
        } = I;
        return a || en ? e = N.intl.string(N.t.VbV5dv) : null != t && "" !== t && (e = N.intl.format(N.t["gGeOE+"], {
            when: t
        })), (0, r.jsx)("div", {
            className: w.GN,
            children: (0, r.jsx)(p.A, {
                hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                children: e
            })
        })
    }

    function J() {
        if (!U || null != A) return null;
        let {
            overlay: e,
            overlayWarn: t
        } = I, n = e ? (0, r.jsx)(u.kN9, {
            size: "md",
            color: "currentColor",
            className: w.Lj,
            colorClass: w.GS
        }) : (0, r.jsx)(u.nkR, {
            size: "md",
            color: "currentColor",
            className: w.$V,
            colorClass: w.GS
        }), i = t ? (0, r.jsx)(c.m_, {
            text: N.intl.string(N.t.Vfw2L5),
            children: (0, r.jsx)("i", {
                className: w.kb
            })
        }) : null;
        return (0, r.jsxs)("div", {
            className: s()(P.tR, P.oA, P.LT, w.E3),
            children: [i, (0, r.jsx)(c.m_, {
                text: N.intl.string(N.t["1+O+Tu"]),
                children: (0, r.jsx)(u.DUT, {
                    "aria-label": N.intl.string(N.t["1+O+Tu"]),
                    className: w.ym,
                    onClick: () => z(!e),
                    children: n
                })
            })]
        })
    }

    function $() {
        let {
            detectable: e
        } = I, t = e && S ? (0, r.jsx)(u.bMW, {
            size: "md",
            color: "currentColor",
            className: w.Lj,
            colorClass: w.GS
        }) : (0, r.jsx)(u.G3N, {
            size: "md",
            color: "currentColor",
            className: S ? w.$V : w.zN,
            colorClass: w.GS
        });
        return (0, r.jsx)("div", {
            className: s()(P.tR, P.oA, P.LT, w.E3),
            children: (0, r.jsx)(c.m_, {
                text: N.intl.string(N.t.QmitzM),
                children: S ? (0, r.jsx)(u.DUT, {
                    "aria-label": N.intl.string(N.t.QmitzM),
                    className: w.ym,
                    onClick: q,
                    children: t
                }) : t
            })
        })
    }

    function ee() {
        return x ? null : (0, r.jsx)("div", {
            className: s()(P.tR, P.oA, P.LT, w.E3),
            children: (0, r.jsx)(c.m_, {
                text: N.intl.string(N.t["y0B+lo"]),
                children: (0, r.jsx)(u.DUT, {
                    "aria-label": N.intl.string(N.t["y0B+lo"]),
                    className: w.ym,
                    onClick: Z,
                    children: (0, r.jsx)(u.iFK, {
                        size: "md",
                        color: "currentColor",
                        className: w.Lj,
                        colorClass: w.GS
                    })
                })
            })
        })
    }

    function et() {
        return (0, r.jsx)(f.A, {
            className: w.LS,
            onClick: Y
        })
    }
    let en = null != D && (0, _.Es)(I) === (0, _.Es)(D),
        er = null != A && A.id === (null == D ? void 0 : D.id) || en || null != g && g.some(e => e.id === (null == D ? void 0 : D.id));
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: H,
            children: [(0, r.jsxs)("div", {
                className: s()(w.$K, P.Vd),
                children: [X(), Q()]
            }), h ? null : ee(), $(), J(), a && !h || er ? null : et()]
        }), null != g && g.length > 0 && !a && (0, r.jsx)("div", {
            className: w.AQ,
            children: g.map((e, t) => (0, r.jsxs)(i.Fragment, {
                children: [(0, r.jsx)(B, {
                    rawGame: e,
                    isOverride: !1,
                    isSubgame: !0,
                    parentGame: I
                }), t !== g.length - 1 && (0, r.jsx)("div", {
                    className: w.PQ
                })]
            }, (0, _.Es)(e)))
        })]
    })
}

function H() {
    return (0, r.jsx)("div", {
        className: s()(P.tR, w.eS, w.Rw),
        children: (0, r.jsxs)("div", {
            className: s()(w.$K, P.Vd),
            children: [(0, r.jsx)("div", {
                className: w.mO,
                children: N.intl.string(N.t.H68X9x)
            }), (0, r.jsx)("div", {
                className: w.GN,
                children: N.intl.string(N.t.T5Ilmw)
            })]
        })
    })
}

function Y(e) {
    let {
        children: t
    } = e;
    return (0, r.jsxs)(k, {
        className: D.eT,
        children: [(0, r.jsx)(u.G8R, {
            darkSrc: n(839628),
            lightSrc: n(446404),
            width: 430,
            height: 250
        }), t]
    })
}
let W = (0, v.L_)(function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map(e => e.exePath))
    }),
    K = () => {
        let e = (0, o.yK)([_.Ay], () => _.Ay.getGamesSeen(!1)),
            {
                runningGame: t,
                overrideExePaths: n
            } = (0, o.cf)([_.Ay], () => ({
                runningGame: _.Ay.getVisibleGame(),
                overrideExePaths: W(..._.Ay.getOverrides())
            }));
        i.useEffect(() => ((0, h.a2)(), h.e0), []);
        let a = i.useMemo(() => e.reduce((e, t) => ((0, E.n1)(t) && e.push(t), e), []), [e]);
        return null != t ? (0, r.jsx)(B, {
            rawGame: t,
            isOverride: n.has(t.exePath),
            nowPlaying: !0,
            subgames: t.id === g.a7 ? a : void 0
        }, (0, _.Es)(t)) : (0, r.jsx)(H, {})
    },
    z = () => {
        let e = i.useRef(null);
        return (0, r.jsxs)("div", {
            className: s()(w.ax, D.Gf),
            children: [(0, r.jsx)("span", {
                children: N.intl.string(N.t.xwhoqM)
            }), (0, r.jsx)(u.YNO, {
                targetElementRef: e,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, r.jsx)(F, {
                        onClose: t
                    })
                },
                align: "center",
                position: "bottom",
                children: t => (0, r.jsx)(u.QWc, M(L({}, t), {
                    buttonRef: e,
                    variant: "primary",
                    textVariant: "text-sm/medium",
                    text: N.intl.string(N.t.GjgdXe)
                }))
            })]
        })
    },
    q = e => {
        let {
            hideHeader: t = !1
        } = e, n = (0, o.yK)([_.Ay], () => _.Ay.getGamesSeen(!1)), a = (0, o.bG)([_.Ay], () => W(..._.Ay.getOverrides()));
        i.useEffect(() => ((0, h.a2)(), h.e0), []);
        let {
            gameHistory: s,
            robloxSubgameHistory: l
        } = i.useMemo(() => n.reduce((e, t) => ((0, E.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
            gameHistory: [],
            robloxSubgameHistory: []
        }), [n]);
        return 0 === s.length ? (0, r.jsx)(Y, {
            children: (0, r.jsx)(u.SGT, {
                children: N.intl.string(N.t["1yiJwn"])
            })
        }) : (0, r.jsx)(u.nVY, {
            label: t ? void 0 : N.intl.string(N.t.jCOdvx),
            description: t ? void 0 : N.intl.format(N.t.KPA3m9, {
                igdbLink: V
            }),
            children: (0, r.jsx)("div", {
                children: s.map(e => (0, r.jsx)(B, {
                    rawGame: e,
                    isOverride: a.has(e.exePath),
                    subgames: e.id === g.a7 ? l : void 0
                }, (0, _.Es)(e)))
            })
        })
    },
    Z = function(e) {
        let {
            className: t,
            showHeader: n = !0
        } = e;
        return (0, r.jsxs)(S.A, {
            title: n ? N.intl.string(N.t.AVDyEj) : null,
            className: t,
            children: [(0, r.jsx)(K, {}), (0, r.jsx)(z, {}), (0, r.jsx)(u.cGx, {
                gap: 20
            }), (0, r.jsx)(q, {})]
        })
    }