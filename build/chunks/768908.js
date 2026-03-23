/** chunk id: 768908 params = (module,exports,require) **/
n.d(t, {
    Ay: () => F,
    T: () => H,
    Wx: () => B,
    cH: () => V
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(544420),
    m = n(414079),
    _ = n(29160),
    g = n(15285),
    A = n(843402),
    x = n(496885),
    p = n(227309),
    h = n(847521),
    T = n(760751),
    E = n(189081),
    f = n(954571),
    S = n(583613),
    C = n(723702),
    b = n(544028),
    N = n(790174),
    I = n(652215),
    v = n(650583),
    j = n(985018),
    y = n(900506),
    O = n(976092),
    R = n(20976),
    L = n(473169);
let P = r.Ay.connectStores([b.A], () => ({
        theme: b.A.theme
    }))(c.ppr),
    D = (0, C.isWindows)();

function M(e) {
    let {
        onClose: t
    } = e, n = (0, r.bG)([g.Ay], () => g.Ay.getCandidateGames()), [l, o] = s.useState(null), d = n.map(e => ({
        id: e.pid.toString(),
        value: e,
        label: null != e.name ? e.name : ""
    }));
    return (0, i.jsxs)(c.lGe, {
        className: a()(y.H2, O.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [(0, i.jsx)(c.ZiE, {
            selectionMode: "single",
            placeholder: j.intl.string(j.t.XqMe3N),
            value: l,
            options: d,
            onSelectionChange: function(e) {
                o(e)
            }
        }), (0, i.jsx)(c.cGx, {
            className: a()(L.Ot, L.QB)
        }), (0, i.jsxs)("div", {
            className: a()(y.o1, R.xM),
            children: [(0, i.jsx)(c.QWc, {
                variant: "secondary",
                text: j.intl.string(j.t["ETE/oC"]),
                onClick: t
            }), (0, i.jsx)(c.Button, {
                variant: "primary",
                text: j.intl.string(j.t.GTCx0p),
                disabled: null == l,
                onClick: function() {
                    null != l && (u.A.addGame(l.pid, l.name), t())
                }
            })]
        })]
    })
}

function G(e) {
    let {
        rawGame: t,
        nowPlaying: l = !1,
        isOverride: A,
        subgames: p,
        isSubgame: S = !1,
        parentGame: C
    } = e, b = (0, r.cf)([g.Ay, T.A, E.A], () => (0, g.xU)(t, g.Ay, T.A, E.A)), {
        canToggleDetection: N,
        isCurrentGameDetectionEnabled: O
    } = (0, r.cf)([g.Ay], () => ({
        canToggleDetection: null == C || g.Ay.isDetectionEnabled(C),
        isCurrentGameDetectionEnabled: g.Ay.isDetectionEnabled(b)
    })), L = (0, r.bG)([g.Ay], () => g.Ay.getVisibleGame()), [P, M] = s.useState(!1), k = s.useMemo(() => (0, h.n1)(b) ? S ? b.gameName : j.intl.formatToPlainString(j.t.G6BGdx, {
        subgameName: b.gameName
    }) : b.name, [b, S]), [U, w] = s.useState(k ?? "???"), V = a()(R.tR, {
        [y.LO]: !l,
        [y.Rw]: l,
        [y.FB]: null != b && l,
        [y.xL]: S,
        [y.fG]: null != p && p.length > 0
    });

    function B() {
        null != p && p.length > 0 && O ? (0, c.mMO)(async () => {
            let {
                Modal: e
            } = await Promise.resolve().then(n.bind(n, 158954));
            return t => (0, i.jsx)(e, {
                ...t,
                title: j.intl.formatToPlainString(j.t.PZ4fKc, {
                    platform: k
                }),
                subtitle: j.intl.formatToPlainString(j.t.ZIQbfb, {
                    platform: k
                }),
                actions: [{
                    text: j.intl.string(j.t["ETE/oC"]),
                    onClick: () => t.onClose(),
                    variant: "secondary"
                }, {
                    text: j.intl.string(j.t.Fmjztz),
                    onClick: () => {
                        u.A.toggleDetection(b), t.onClose()
                    },
                    variant: "primary"
                }]
            })
        }) : u.A.toggleDetection(b)
    }
    let H = null != L && (0, g.Es)(b) === (0, g.Es)(L),
        F = null != C && C.id === L?.id || H || null != p && p.some(e => e.id === L?.id);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: V,
            children: [(0, i.jsxs)("div", {
                className: a()(y.$K, R.Vd),
                children: [b.verified && !A ? (0, i.jsxs)("div", {
                    className: y.HS,
                    children: [(0, i.jsx)("div", {
                        className: y.mO,
                        children: k
                    }), (0, i.jsx)(d.m_, {
                        text: j.intl.string(j.t["4PJP5p"]),
                        children: (0, i.jsx)(x.A, {
                            className: y.qf,
                            size: 18,
                            color: o.A.unsafe_rawColors.BRAND_500.css,
                            children: (0, i.jsx)(c.Uzd, {
                                size: "custom",
                                width: 18,
                                height: 18,
                                color: o.A.unsafe_rawColors.WHITE.css
                            })
                        })
                    })]
                }) : (0, i.jsx)("input", {
                    className: a()(y.mO, y.sr),
                    type: "text",
                    maxLength: 128,
                    value: U,
                    onBlur: function() {
                        b.name !== U && u.A.editName(b, U)
                    },
                    onKeyDown: function(e) {
                        e.key === v.dh.ENTER && (e.currentTarget.blur(), e.preventDefault())
                    },
                    onChange: e => w(e.target.value)
                }), function() {
                    let e, {
                        played: t,
                        exePath: n
                    } = b;
                    return l || H ? e = j.intl.string(j.t.VbV5dv) : null != t && "" !== t && (e = j.intl.format(j.t["gGeOE+"], {
                        when: t
                    })), (0, i.jsx)("div", {
                        className: y.GN,
                        children: (0, i.jsx)(_.A, {
                            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                            children: e
                        })
                    })
                }()]
            }), A || P ? null : (0, i.jsx)("div", {
                className: a()(R.tR, R.oA, R.LT, y.E3),
                children: (0, i.jsx)(d.m_, {
                    text: j.intl.string(j.t["y0B+lo"]),
                    children: (0, i.jsx)(c.DUT, {
                        "aria-label": j.intl.string(j.t["y0B+lo"]),
                        className: y.ym,
                        onClick: function() {
                            if (P) return;
                            let e = null != b.id ? T.A.getDetectableGame(b.id) : null;
                            f.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                application_id: e?.id,
                                game_name: (0, h.n1)(b) ? b.gameName : b.name
                            }), M(!0), (0, c.mMO)(async () => {
                                let {
                                    default: t
                                } = await n.e("27495").then(n.bind(n, 651930));
                                return n => (0, i.jsx)(t, {
                                    ...n,
                                    detectedActivity: {
                                        name: b.name ?? "",
                                        application_id: e?.id ?? b.id ?? void 0,
                                        type: I.$pd.PLAYING
                                    },
                                    onSubmitted: () => {}
                                })
                            })
                        },
                        children: (0, i.jsx)(c.iFK, {
                            size: "md",
                            color: "currentColor",
                            className: y.Lj,
                            colorClass: y.GS
                        })
                    })
                })
            }), function() {
                let {
                    detectable: e
                } = b, t = e && N ? (0, i.jsx)(c.bMW, {
                    size: "md",
                    color: "currentColor",
                    className: y.Lj,
                    colorClass: y.GS
                }) : (0, i.jsx)(c.G3N, {
                    size: "md",
                    color: "currentColor",
                    className: N ? y.$V : y.zN,
                    colorClass: y.GS
                });
                return (0, i.jsx)("div", {
                    className: a()(R.tR, R.oA, R.LT, y.E3),
                    children: (0, i.jsx)(d.m_, {
                        text: j.intl.string(j.t.QmitzM),
                        children: N ? (0, i.jsx)(c.DUT, {
                            "aria-label": j.intl.string(j.t.QmitzM),
                            className: y.ym,
                            onClick: B,
                            children: t
                        }) : t
                    })
                })
            }(), function() {
                if (!D || null != C) return null;
                let {
                    overlay: e,
                    overlayWarn: t
                } = b, n = e ? (0, i.jsx)(c.kN9, {
                    size: "md",
                    color: "currentColor",
                    className: y.Lj,
                    colorClass: y.GS
                }) : (0, i.jsx)(c.nkR, {
                    size: "md",
                    color: "currentColor",
                    className: y.$V,
                    colorClass: y.GS
                }), s = t ? (0, i.jsx)(d.m_, {
                    text: j.intl.string(j.t.Vfw2L5),
                    children: (0, i.jsx)("i", {
                        className: y.kb
                    })
                }) : null;
                return (0, i.jsxs)("div", {
                    className: a()(R.tR, R.oA, R.LT, y.E3),
                    children: [s, (0, i.jsx)(d.m_, {
                        text: j.intl.string(j.t["1+O+Tu"]),
                        children: (0, i.jsx)(c.DUT, {
                            "aria-label": j.intl.string(j.t["1+O+Tu"]),
                            className: y.ym,
                            onClick: () => {
                                var t;
                                return t = !e, void u.A.toggleOverlay(b, t, t)
                            },
                            children: n
                        })
                    })]
                })
            }(), l && !A || F ? null : (0, i.jsx)(m.A, {
                className: y.LS,
                onClick: function() {
                    u.A.deleteEntry(b), p?.forEach(e => {
                        u.A.deleteEntry(e)
                    })
                }
            })]
        }), null != p && p.length > 0 && !l && (0, i.jsx)("div", {
            className: y.AQ,
            children: p.map((e, t) => (0, i.jsxs)(s.Fragment, {
                children: [(0, i.jsx)(G, {
                    rawGame: e,
                    isOverride: !1,
                    isSubgame: !0,
                    parentGame: b
                }), t !== p.length - 1 && (0, i.jsx)("div", {
                    className: y.PQ
                })]
            }, (0, g.Es)(e)))
        })]
    })
}

function k() {
    return (0, i.jsx)("div", {
        className: a()(R.tR, y.eS, y.Rw),
        children: (0, i.jsxs)("div", {
            className: a()(y.$K, R.Vd),
            children: [(0, i.jsx)("div", {
                className: y.mO,
                children: j.intl.string(j.t.H68X9x)
            }), (0, i.jsx)("div", {
                className: y.GN,
                children: j.intl.string(j.t.T5Ilmw)
            })]
        })
    })
}

function U(e) {
    let {
        children: t
    } = e;
    return (0, i.jsxs)(P, {
        className: L.eT,
        children: [(0, i.jsx)(c.G8R, {
            darkSrc: n(839628),
            lightSrc: n(446404),
            width: 430,
            height: 250
        }), t]
    })
}
let w = (0, S.L_)(function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map(e => e.exePath))
    }),
    V = () => {
        let e = (0, r.yK)([g.Ay], () => g.Ay.getGamesSeen(!1)),
            {
                runningGame: t,
                overrideExePaths: n
            } = (0, r.cf)([g.Ay], () => ({
                runningGame: g.Ay.getVisibleGame(),
                overrideExePaths: w(...g.Ay.getOverrides())
            }));
        s.useEffect(() => ((0, A.a2)(), A.e0), []);
        let l = s.useMemo(() => e.reduce((e, t) => ((0, h.n1)(t) && e.push(t), e), []), [e]);
        return null != t ? (0, i.jsx)(G, {
            rawGame: t,
            isOverride: n.has(t.exePath),
            nowPlaying: !0,
            subgames: t.id === p.a7 ? l : void 0
        }, (0, g.Es)(t)) : (0, i.jsx)(k, {})
    },
    B = () => {
        let e = s.useRef(null);
        return (0, i.jsxs)("div", {
            className: a()(y.ax, L.Gf),
            children: [(0, i.jsx)("span", {
                children: j.intl.string(j.t.xwhoqM)
            }), (0, i.jsx)(c.YNO, {
                targetElementRef: e,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(M, {
                        onClose: t
                    })
                },
                align: "center",
                position: "bottom",
                children: t => (0, i.jsx)(c.QWc, {
                    ...t,
                    buttonRef: e,
                    variant: "primary",
                    textVariant: "text-sm/medium",
                    text: j.intl.string(j.t.GjgdXe)
                })
            })]
        })
    },
    H = e => {
        let {
            hideHeader: t = !1
        } = e, n = (0, r.yK)([g.Ay], () => g.Ay.getGamesSeen(!1)), l = (0, r.bG)([g.Ay], () => w(...g.Ay.getOverrides()));
        s.useEffect(() => ((0, A.a2)(), A.e0), []);
        let {
            gameHistory: a,
            robloxSubgameHistory: o
        } = s.useMemo(() => n.reduce((e, t) => ((0, h.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
            gameHistory: [],
            robloxSubgameHistory: []
        }), [n]);
        return 0 === a.length ? (0, i.jsx)(U, {
            children: (0, i.jsx)(c.SGT, {
                children: j.intl.string(j.t["1yiJwn"])
            })
        }) : (0, i.jsx)(c.nVY, {
            label: t ? void 0 : j.intl.string(j.t.jCOdvx),
            description: t ? void 0 : j.intl.format(j.t.KPA3m9, {
                igdbLink: "https://www.igdb.com/about"
            }),
            children: (0, i.jsx)("div", {
                children: a.map(e => (0, i.jsx)(G, {
                    rawGame: e,
                    isOverride: l.has(e.exePath),
                    subgames: e.id === p.a7 ? o : void 0
                }, (0, g.Es)(e)))
            })
        })
    },
    F = function(e) {
        let {
            className: t,
            showHeader: n = !0
        } = e;
        return (0, i.jsxs)(N.A, {
            title: n ? j.intl.string(j.t.AVDyEj) : null,
            className: t,
            children: [(0, i.jsx)(V, {}), (0, i.jsx)(B, {}), (0, i.jsx)(c.cGx, {
                gap: 20
            }), (0, i.jsx)(H, {})]
        })
    }