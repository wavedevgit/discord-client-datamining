/** Chunk was on 60449 **/
/** chunk id: 768908, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => z,
    T: () => F,
    Wx: () => Y,
    cH: () => B
}), n(896048), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(544420),
    g = n(414079),
    h = n(29160),
    x = n(15285),
    A = n(843402),
    p = n(496885),
    m = n(227309),
    j = n(847521),
    O = n(760751),
    E = n(189081),
    b = n(954571),
    S = n(583613),
    v = n(723702),
    C = n(544028),
    f = n(790174),
    T = n(652215),
    N = n(650583),
    _ = n(985018),
    I = n(900506),
    y = n(976092),
    D = n(20976),
    G = n(473169);

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function R(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let V = a.Ay.connectStores([C.A], () => ({
        theme: C.A.theme
    }))(d.ppr),
    L = (0, v.isWindows)();

function k(e) {
    let {
        onClose: t
    } = e, n = (0, a.bG)([x.Ay], () => x.Ay.getCandidateGames()), [l, o] = s.useState(null), c = n.map(e => ({
        id: e.pid.toString(),
        value: e,
        label: null != e.name ? e.name : ""
    }));
    return (0, i.jsxs)(d.lGe, {
        className: r()(I.H2, y.Y_),
        "aria-label": _.intl.string(_.t.GTCx0p),
        children: [(0, i.jsx)(d.ZiE, {
            selectionMode: "single",
            placeholder: _.intl.string(_.t.XqMe3N),
            value: l,
            options: c,
            onSelectionChange: function(e) {
                o(e)
            }
        }), (0, i.jsx)(d.cGx, {
            className: r()(G.Ot, G.QB)
        }), (0, i.jsxs)("div", {
            className: r()(I.o1, D.xM),
            children: [(0, i.jsx)(d.QWc, {
                variant: "secondary",
                text: _.intl.string(_.t["ETE/oC"]),
                onClick: t
            }), (0, i.jsx)(d.Button, {
                variant: "primary",
                text: _.intl.string(_.t.GTCx0p),
                disabled: null == l,
                onClick: function() {
                    null != l && (u.A.addGame(l.pid, l.name), t())
                }
            })]
        })]
    })
}

function M(e) {
    let {
        rawGame: t,
        nowPlaying: l = !1,
        isOverride: A,
        subgames: m,
        isSubgame: S = !1,
        parentGame: v
    } = e, C = (0, a.cf)([x.Ay, O.A, E.A], () => (0, x.xU)(t, x.Ay, O.A, E.A)), {
        canToggleDetection: f,
        isCurrentGameDetectionEnabled: y
    } = (0, a.cf)([x.Ay], () => ({
        canToggleDetection: null == v || x.Ay.isDetectionEnabled(v),
        isCurrentGameDetectionEnabled: x.Ay.isDetectionEnabled(C)
    })), G = (0, a.bG)([x.Ay], () => x.Ay.getVisibleGame()), [V, k] = s.useState(!1), w = s.useMemo(() => (0, j.n1)(C) ? S ? C.gameName : _.intl.formatToPlainString(_.t.G6BGdx, {
        subgameName: C.gameName
    }) : C.name, [C, S]), [U, H] = s.useState(null != w ? w : "???"), B = r()(D.tR, {
        [I.LO]: !l,
        [I.Rw]: l,
        [I.FB]: null != C && l,
        [I.xL]: S,
        [I.fG]: null != m && m.length > 0
    });

    function Y() {
        null != m && m.length > 0 && y ? (0, d.mMO)(async () => {
            let {
                Modal: e
            } = await Promise.resolve().then(n.bind(n, 158954));
            return t => (0, i.jsx)(e, R(P({}, t), {
                title: _.intl.formatToPlainString(_.t.PZ4fKc, {
                    platform: w
                }),
                subtitle: _.intl.formatToPlainString(_.t.ZIQbfb, {
                    platform: w
                }),
                actions: [{
                    text: _.intl.string(_.t["ETE/oC"]),
                    onClick: () => t.onClose(),
                    variant: "secondary"
                }, {
                    text: _.intl.string(_.t.Fmjztz),
                    onClick: () => {
                        u.A.toggleDetection(C), t.onClose()
                    },
                    variant: "primary"
                }]
            }))
        }) : u.A.toggleDetection(C)
    }
    let F = null != G && (0, x.Es)(C) === (0, x.Es)(G),
        z = null != v && v.id === (null == G ? void 0 : G.id) || F || null != m && m.some(e => e.id === (null == G ? void 0 : G.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: B,
            children: [(0, i.jsxs)("div", {
                className: r()(I.$K, D.Vd),
                children: [C.verified && !A ? (0, i.jsxs)("div", {
                    className: I.HS,
                    children: [(0, i.jsx)("div", {
                        className: I.mO,
                        children: w
                    }), (0, i.jsx)(c.m_, {
                        text: _.intl.string(_.t["4PJP5p"]),
                        children: (0, i.jsx)(p.A, {
                            className: I.qf,
                            size: 18,
                            color: o.A.unsafe_rawColors.BRAND_500.css,
                            children: (0, i.jsx)(d.Uzd, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: o.A.unsafe_rawColors.WHITE.css
                            })
                        })
                    })]
                }) : (0, i.jsx)("input", {
                    className: r()(I.mO, I.sr),
                    type: "text",
                    maxLength: 128,
                    value: U,
                    onBlur: function() {
                        C.name !== U && u.A.editName(C, U)
                    },
                    onKeyDown: function(e) {
                        e.key === N.dh.ENTER && (e.currentTarget.blur(), e.preventDefault())
                    },
                    onChange: e => H(e.target.value)
                }), function() {
                    let e, {
                        played: t,
                        exePath: n
                    } = C;
                    return l || F ? e = _.intl.string(_.t.VbV5dv) : null != t && "" !== t && (e = _.intl.format(_.t["gGeOE+"], {
                        when: t
                    })), (0, i.jsx)("div", {
                        className: I.GN,
                        children: (0, i.jsx)(h.A, {
                            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                            children: e
                        })
                    })
                }()]
            }), A || V ? null : (0, i.jsx)("div", {
                className: r()(D.tR, D.oA, D.LT, I.E3),
                children: (0, i.jsx)(c.m_, {
                    text: _.intl.string(_.t["y0B+lo"]),
                    children: (0, i.jsx)(d.DUT, {
                        "aria-label": _.intl.string(_.t["y0B+lo"]),
                        className: I.ym,
                        onClick: function() {
                            if (V) return;
                            let e = null != C.id ? O.A.getDetectableGame(C.id) : null;
                            b.default.track(T.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                application_id: null == e ? void 0 : e.id,
                                game_name: (0, j.n1)(C) ? C.gameName : C.name
                            }), k(!0), (0, d.mMO)(async () => {
                                let {
                                    default: t
                                } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
                                return n => {
                                    var s, l, r;
                                    return (0, i.jsx)(t, R(P({}, n), {
                                        detectedActivity: {
                                            name: null != (s = C.name) ? s : "",
                                            application_id: null != (l = null != (r = null == e ? void 0 : e.id) ? r : C.id) ? l : void 0,
                                            type: T.$pd.PLAYING
                                        },
                                        onSubmitted: () => {}
                                    }))
                                }
                            })
                        },
                        children: (0, i.jsx)(d.iFK, {
                            size: "md",
                            color: "currentColor",
                            className: I.Lj,
                            colorClass: I.GS
                        })
                    })
                })
            }), function() {
                let {
                    detectable: e
                } = C, t = e && f ? (0, i.jsx)(d.bMW, {
                    size: "md",
                    color: "currentColor",
                    className: I.Lj,
                    colorClass: I.GS
                }) : (0, i.jsx)(d.G3N, {
                    size: "md",
                    color: "currentColor",
                    className: f ? I.$V : I.zN,
                    colorClass: I.GS
                });
                return (0, i.jsx)("div", {
                    className: r()(D.tR, D.oA, D.LT, I.E3),
                    children: (0, i.jsx)(c.m_, {
                        text: _.intl.string(_.t.QmitzM),
                        children: f ? (0, i.jsx)(d.DUT, {
                            "aria-label": _.intl.string(_.t.QmitzM),
                            className: I.ym,
                            onClick: Y,
                            children: t
                        }) : t
                    })
                })
            }(), function() {
                if (!L || null != v) return null;
                let {
                    overlay: e,
                    overlayWarn: t
                } = C, n = e ? (0, i.jsx)(d.kN9, {
                    size: "md",
                    color: "currentColor",
                    className: I.Lj,
                    colorClass: I.GS
                }) : (0, i.jsx)(d.nkR, {
                    size: "md",
                    color: "currentColor",
                    className: I.$V,
                    colorClass: I.GS
                }), s = t ? (0, i.jsx)(c.m_, {
                    text: _.intl.string(_.t.Vfw2L5),
                    children: (0, i.jsx)("i", {
                        className: I.kb
                    })
                }) : null;
                return (0, i.jsxs)("div", {
                    className: r()(D.tR, D.oA, D.LT, I.E3),
                    children: [s, (0, i.jsx)(c.m_, {
                        text: _.intl.string(_.t["1+O+Tu"]),
                        children: (0, i.jsx)(d.DUT, {
                            "aria-label": _.intl.string(_.t["1+O+Tu"]),
                            className: I.ym,
                            onClick: () => {
                                var t;
                                return t = !e, void u.A.toggleOverlay(C, t, t)
                            },
                            children: n
                        })
                    })]
                })
            }(), l && !A || z ? null : (0, i.jsx)(g.A, {
                className: I.LS,
                onClick: function() {
                    u.A.deleteEntry(C), null == m || m.forEach(e => {
                        u.A.deleteEntry(e)
                    })
                }
            })]
        }), null != m && m.length > 0 && !l && (0, i.jsx)("div", {
            className: I.AQ,
            children: m.map((e, t) => (0, i.jsxs)(s.Fragment, {
                children: [(0, i.jsx)(M, {
                    rawGame: e,
                    isOverride: !1,
                    isSubgame: !0,
                    parentGame: C
                }), t !== m.length - 1 && (0, i.jsx)("div", {
                    className: I.PQ
                })]
            }, (0, x.Es)(e)))
        })]
    })
}

function w() {
    return (0, i.jsx)("div", {
        className: r()(D.tR, I.eS, I.Rw),
        children: (0, i.jsxs)("div", {
            className: r()(I.$K, D.Vd),
            children: [(0, i.jsx)("div", {
                className: I.mO,
                children: _.intl.string(_.t.H68X9x)
            }), (0, i.jsx)("div", {
                className: I.GN,
                children: _.intl.string(_.t.T5Ilmw)
            })]
        })
    })
}

function U(e) {
    let {
        children: t
    } = e;
    return (0, i.jsxs)(V, {
        className: G.eT,
        children: [(0, i.jsx)(d.G8R, {
            darkSrc: n(839628),
            lightSrc: n(446404),
            width: 430,
            height: 250
        }), t]
    })
}
let H = (0, S.L_)(function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map(e => e.exePath))
    }),
    B = () => {
        let e = (0, a.yK)([x.Ay], () => x.Ay.getGamesSeen(!1)),
            {
                runningGame: t,
                overrideExePaths: n
            } = (0, a.cf)([x.Ay], () => ({
                runningGame: x.Ay.getVisibleGame(),
                overrideExePaths: H(...x.Ay.getOverrides())
            }));
        s.useEffect(() => ((0, A.a2)(), A.e0), []);
        let l = s.useMemo(() => e.reduce((e, t) => ((0, j.n1)(t) && e.push(t), e), []), [e]);
        return null != t ? (0, i.jsx)(M, {
            rawGame: t,
            isOverride: n.has(t.exePath),
            nowPlaying: !0,
            subgames: t.id === m.a7 ? l : void 0
        }, (0, x.Es)(t)) : (0, i.jsx)(w, {})
    },
    Y = () => {
        let e = s.useRef(null);
        return (0, i.jsxs)("div", {
            className: r()(I.ax, G.Gf),
            children: [(0, i.jsx)("span", {
                children: _.intl.string(_.t.xwhoqM)
            }), (0, i.jsx)(d.YNO, {
                targetElementRef: e,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(k, {
                        onClose: t
                    })
                },
                align: "center",
                position: "bottom",
                children: t => (0, i.jsx)(d.QWc, R(P({}, t), {
                    buttonRef: e,
                    variant: "primary",
                    textVariant: "text-sm/medium",
                    text: _.intl.string(_.t.GjgdXe)
                }))
            })]
        })
    },
    F = e => {
        let {
            hideHeader: t = !1
        } = e, n = (0, a.yK)([x.Ay], () => x.Ay.getGamesSeen(!1)), l = (0, a.bG)([x.Ay], () => H(...x.Ay.getOverrides()));
        s.useEffect(() => ((0, A.a2)(), A.e0), []);
        let {
            gameHistory: r,
            robloxSubgameHistory: o
        } = s.useMemo(() => n.reduce((e, t) => ((0, j.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
            gameHistory: [],
            robloxSubgameHistory: []
        }), [n]);
        return 0 === r.length ? (0, i.jsx)(U, {
            children: (0, i.jsx)(d.SGT, {
                children: _.intl.string(_.t["1yiJwn"])
            })
        }) : (0, i.jsx)(d.nVY, {
            label: t ? void 0 : _.intl.string(_.t.jCOdvx),
            description: t ? void 0 : _.intl.format(_.t.KPA3m9, {
                igdbLink: "https://www.igdb.com/about"
            }),
            children: (0, i.jsx)("div", {
                children: r.map(e => (0, i.jsx)(M, {
                    rawGame: e,
                    isOverride: l.has(e.exePath),
                    subgames: e.id === m.a7 ? o : void 0
                }, (0, x.Es)(e)))
            })
        })
    },
    z = function(e) {
        let {
            className: t,
            showHeader: n = !0
        } = e;
        return (0, i.jsxs)(f.A, {
            title: n ? _.intl.string(_.t.AVDyEj) : null,
            className: t,
            children: [(0, i.jsx)(B, {}), (0, i.jsx)(Y, {}), (0, i.jsx)(d.cGx, {
                gap: 20
            }), (0, i.jsx)(F, {})]
        })
    }