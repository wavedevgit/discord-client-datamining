/** chunk id: 911726 params = (module,exports,require) **/
n.d(t, {
    Ay: () => F
});
var i, l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(106778),
    c = n(835245),
    u = n(23339),
    d = n(319060),
    _ = n(397927),
    A = n(21161),
    m = n(943961),
    E = n(513609),
    T = n(928830),
    I = n(567771),
    N = n(780964),
    g = n(858897),
    f = n(473145),
    C = n(763754),
    h = n(888675),
    p = n(921066),
    S = n(652215),
    x = n(985018),
    R = n(905598);
let O = {
    enter: {
        BEG: 0,
        END: 22
    },
    confetti: {
        BEG: 23,
        END: 119
    },
    leaf_peel: {
        BEG: 120,
        END: 160
    },
    leaf_fall: {
        BEG: 161,
        END: 163
    },
    exit: {
        BEG: 164,
        END: 200
    }
};
var M = ((i = {}).TOP_LEFT = "TOP_LEFT", i.TOP_RIGHT = "TOP_RIGHT", i.BOTTOM_LEFT = "BOTTOM_LEFT", i.BOTTOM_RIGHT = "BOTTOM_RIGHT", i);
let D = ["TOP_LEFT", "TOP_RIGHT"],
    L = (0, u.xI)(d.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    U = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    P = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: e => ({
                x: e - 11,
                y: e - 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: 1
            },
            leafPosition: {
                x: 100,
                y: 144
            },
            leafRotationDirection: 1
        },
        TOP_RIGHT: {
            getConfettiPosition: e => ({
                x: 11,
                y: e - 125
            }),
            confettiVelocityDirection: {
                x: -1,
                y: 1
            },
            leafPosition: {
                x: 90,
                y: 144
            },
            leafRotationDirection: -1
        },
        BOTTOM_LEFT: {
            ...U,
            getConfettiPosition: e => ({
                x: e - 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        },
        BOTTOM_RIGHT: {
            ...U,
            getConfettiPosition: e => ({
                x: 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1
            }
        }
    }),
    v = "falling-leaf",
    y = ["#61D5B2"],
    j = n(80705),
    k = n(232460),
    b = [j, k];

function G() {
    return n.e("98150").then(n.t.bind(n, 633343, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    })
}

function H(e) {
    let {
        onAnimationComplete: t,
        onClick: n,
        position: i,
        size: r
    } = e, u = a.useRef(null), [d, m] = a.useState(null), [E] = a.useState(i ?? function() {
        switch (Math.floor(Math.random() * Object.keys(M).length)) {
            case 0:
                return "TOP_LEFT";
            case 2:
                return "TOP_RIGHT";
            case 3:
                return "BOTTOM_LEFT";
            default:
                return "BOTTOM_RIGHT"
        }
    }()), {
        createMultipleConfettiAt: T,
        confettiCanvas: I
    } = a.useContext(A.x), [N, g] = a.useState(null), f = (0, o.f9)(I, N), C = function(e, t) {
        if (null == e) return "enter";
        switch (e) {
            case "enter":
                return "confetti";
            case "confetti":
                if (D.includes(t)) return "leaf_peel";
                return "exit";
            case "leaf_peel":
                return "leaf_fall";
            case "leaf_fall":
                return "exit";
            case "exit":
                return "enter"
        }
    }(d, E), h = D.includes(E), p = h && "exit" === d, S = a.useCallback(e => {
        m(e)
    }, []), x = a.useCallback(() => {
        "exit" === d && t?.()
    }, [t, d]), U = a.useCallback(e => {
        u.current = e
    }, []);
    return a.useEffect(() => {
        if ("confetti" === d) {
            let {
                confettiVelocityDirection: e
            } = P[E], t = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L,
                    i = e?.getBoundingClientRect();
                if (null == i) return {
                    x: 0,
                    y: 0
                };
                let l = P[t].getConfettiPosition(n);
                return {
                    x: i.left + l.x,
                    y: i.top + l.y
                }
            }(u.current, E, r);
            T(t.x, t.y, {
                velocity: {
                    type: "static-random",
                    minValue: {
                        x: 10 * e.x,
                        y: 80 * e.y
                    },
                    maxValue: {
                        x: 80 * e.x,
                        y: 180 * e.y
                    }
                }
            })
        }
    }, [T, E, d, r]), a.useEffect(() => {
        if (h && "leaf_fall" === d) {
            let e = P[E].leafRotationDirection;
            f.createConfetti({
                id: `${v}-${(0,c.A)()}`,
                position: {
                    type: "static",
                    value: function(e, t) {
                        let n = e?.getBoundingClientRect();
                        if (null == n) return {
                            x: 0,
                            y: 0
                        };
                        let i = P[t];
                        return {
                            x: n.left + i.leafPosition.x,
                            y: n.top + i.leafPosition.y
                        }
                    }(u.current, E)
                },
                size: {
                    type: "static",
                    value: 45
                },
                rotation: {
                    type: "linear-random",
                    minValue: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    maxValue: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    minAddValue: {
                        x: 0,
                        y: 0,
                        z: 8 * e
                    },
                    maxAddValue: {
                        x: 0,
                        y: 0,
                        z: 12 * e
                    }
                }
            }, {
                sprite: "TOP_LEFT" === E ? j : k
            })
        }
    }, [h, f, E, d]), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.K_, {
            ref: g,
            sprites: b,
            colors: y,
            spriteWidth: 45,
            spriteHeight: 45
        }), (0, l.jsx)(_.DUT, {
            onClick: n,
            className: s()(R.FT, {
                [R.FZ]: "TOP_LEFT" === E,
                [R.S]: "TOP_RIGHT" === E,
                [R.Re]: "BOTTOM_LEFT" === E,
                [R._t]: "BOTTOM_RIGHT" === E
            }),
            children: (0, l.jsx)(_.tvC, {
                animationRef: U,
                className: s()(R.oQ, {
                    [R.EG]: p
                }),
                nextScene: C,
                sceneSegments: O,
                onScenePlay: S,
                onSceneComplete: x,
                importData: G,
                pauseWhileUnfocused: !1
            })
        })]
    })
}

function w(e) {
    let t, {
            message: n,
            compact: i,
            guild: r,
            usernameHook: s,
            onClickMessage: o
        } = e,
        c = function(e) {
            switch (e.type) {
                case S.lAJ.GUILD_BOOST_TIER_1:
                    return S.TVA.TIER_1;
                case S.lAJ.GUILD_BOOST_TIER_2:
                    return S.TVA.TIER_2;
                case S.lAJ.GUILD_BOOST_TIER_3:
                    return S.TVA.TIER_3
            }
            return null
        }(n),
        u = (0, I.A)(n),
        {
            createMultipleConfettiAt: d,
            addClickListener: m
        } = a.useContext(A.x),
        [p, O] = a.useState(!1),
        M = a.useRef(null),
        {
            reducedMotion: D
        } = a.useContext(_.CZY),
        L = (0, C.Ay)(n),
        U = L.nick,
        P = s(L);
    t = null == c || null == r ? u > 1 ? x.intl.format(x.t.yfC9ds, {
        username: U,
        usernameHook: P,
        numSubscriptions: u
    }) : x.intl.format(x.t["57St/7"], {
        username: U,
        usernameHook: P
    }) : u > 1 ? x.intl.format(x.t.PO9uJD, {
        username: U,
        usernameHook: P,
        numSubscriptions: u,
        guildName: r.name,
        newTierName: (0, f.gb)(c)
    }) : x.intl.format(x.t.cUfTTE, {
        username: U,
        usernameHook: P,
        guildName: r.name,
        newTierName: (0, f.gb)(c)
    });
    let y = a.useCallback(() => {
            if (!D.enabled)
                if (p || 0 !== Math.floor(50 * Math.random())) {
                    let e = M.current?.getBoundingClientRect();
                    if (null == e) return;
                    d(e.left + e.width / 2, e.top + e.height / 2)
                } else O(!0)
        }, [d, D, p]),
        j = a.useCallback(() => {
            O(!1)
        }, []),
        k = a.useCallback(() => {
            (0, T.O9)({
                settingsVisible: !0
            }), (0, g.openUserSettings)(N.X.POGGERMODE_PANEL), O(!1)
        }, []),
        b = a.useCallback((e, t) => {
            t?.id.startsWith(v) && k()
        }, [k]);
    a.useEffect(() => m(b));
    let G = a.useCallback(e => {
            e.target === e.currentTarget && o(e)
        }, [o]),
        w = (0, l.jsx)(_.DUT, {
            className: R.P0,
            innerRef: M,
            onClick: o,
            children: (0, l.jsx)(_._Jp, {
                color: _.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: R.Kk,
                onMouseEnter: y
            })
        });
    return (0, l.jsxs)(h.A, {
        iconNode: w,
        timestamp: n.timestamp,
        compact: i,
        children: [(0, l.jsx)("div", {
            onClick: G,
            className: R.iU,
            children: t
        }), p ? (0, l.jsx)(E.Ay, {
            children: (0, l.jsx)("div", {
                className: R.LK,
                children: (0, l.jsx)(H, {
                    onAnimationComplete: j,
                    onClick: k
                })
            })
        }) : null]
    })
}

function F(e) {
    let {
        message: t,
        compact: n,
        guild: i,
        usernameHook: a
    } = e, {
        enabled: r,
        showCta: s
    } = m.X.useConfig({
        location: "UserPremiumGuildSubscription"
    });
    return t.type === S.lAJ.GUILD_BOOST && r && !n ? (0, l.jsx)(p.A, {
        message: t,
        guild: i,
        usernameHook: a,
        showCta: s
    }) : (0, l.jsx)(w, {
        ...e
    })
}