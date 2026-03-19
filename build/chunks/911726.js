/** chunk id: 911726 params = (module,exports,require) **/
n.d(t, {
    Ay: () => G
});
var i, l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(106778),
    c = n(835245),
    d = n(23339),
    u = n(319060),
    _ = n(397927),
    m = n(21161),
    A = n(513609),
    E = n(928830),
    I = n(567771),
    T = n(780964),
    N = n(840065),
    f = n(473145),
    C = n(763754),
    g = n(888675),
    h = n(652215),
    p = n(985018),
    R = n(754830);
let S = {
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
var x = ((i = {}).TOP_LEFT = "TOP_LEFT", i.TOP_RIGHT = "TOP_RIGHT", i.BOTTOM_LEFT = "BOTTOM_LEFT", i.BOTTOM_RIGHT = "BOTTOM_RIGHT", i);
let O = ["TOP_LEFT", "TOP_RIGHT"],
    M = (0, d.xI)(u.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    D = {
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
            ...D,
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
            ...D,
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
    U = "falling-leaf",
    v = ["#61D5B2"],
    L = n(80705),
    j = n(232460),
    y = [L, j];

function k() {
    return n.e("98150").then(n.t.bind(n, 633343, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    })
}

function b(e) {
    let {
        onAnimationComplete: t,
        onClick: n,
        position: i,
        size: r
    } = e, d = a.useRef(null), [u, A] = a.useState(null), [E] = a.useState(i ?? function() {
        switch (Math.floor(Math.random() * Object.keys(x).length)) {
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
        createMultipleConfettiAt: I,
        confettiCanvas: T
    } = a.useContext(m.x), [N, f] = a.useState(null), C = (0, o.f9)(T, N), g = function(e, t) {
        if (null == e) return "enter";
        switch (e) {
            case "enter":
                return "confetti";
            case "confetti":
                if (O.includes(t)) return "leaf_peel";
                return "exit";
            case "leaf_peel":
                return "leaf_fall";
            case "leaf_fall":
                return "exit";
            case "exit":
                return "enter"
        }
    }(u, E), h = O.includes(E), p = h && "exit" === u, D = a.useCallback(e => {
        A(e)
    }, []), b = a.useCallback(() => {
        "exit" === u && t?.()
    }, [t, u]), G = a.useCallback(e => {
        d.current = e
    }, []);
    return a.useEffect(() => {
        if ("confetti" === u) {
            let {
                confettiVelocityDirection: e
            } = P[E], t = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : M,
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
            }(d.current, E, r);
            I(t.x, t.y, {
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
    }, [I, E, u, r]), a.useEffect(() => {
        if (h && "leaf_fall" === u) {
            let e = P[E].leafRotationDirection;
            C.createConfetti({
                id: `${U}-${(0,c.A)()}`,
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
                    }(d.current, E)
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
                sprite: "TOP_LEFT" === E ? L : j
            })
        }
    }, [h, C, E, u]), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.K_, {
            ref: f,
            sprites: y,
            colors: v,
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
                animationRef: G,
                className: s()(R.oQ, {
                    [R.EG]: p
                }),
                nextScene: g,
                sceneSegments: S,
                onScenePlay: D,
                onSceneComplete: b,
                importData: k,
                pauseWhileUnfocused: !1
            })
        })]
    })
}

function G(e) {
    let t, {
            message: n,
            compact: i,
            guild: r,
            usernameHook: s,
            onClickMessage: o
        } = e,
        c = function(e) {
            switch (e.type) {
                case h.lAJ.GUILD_BOOST_TIER_1:
                    return h.TVA.TIER_1;
                case h.lAJ.GUILD_BOOST_TIER_2:
                    return h.TVA.TIER_2;
                case h.lAJ.GUILD_BOOST_TIER_3:
                    return h.TVA.TIER_3
            }
            return null
        }(n),
        d = (0, I.A)(n),
        {
            createMultipleConfettiAt: u,
            addClickListener: S
        } = a.useContext(m.x),
        [x, O] = a.useState(!1),
        M = a.useRef(null),
        {
            reducedMotion: D
        } = a.useContext(_.CZY),
        P = (0, C.Ay)(n),
        v = P.nick,
        L = s(P);
    t = null == c || null == r ? d > 1 ? p.intl.format(p.t.yfC9ds, {
        username: v,
        usernameHook: L,
        numSubscriptions: d
    }) : p.intl.format(p.t["57St/7"], {
        username: v,
        usernameHook: L
    }) : d > 1 ? p.intl.format(p.t.PO9uJD, {
        username: v,
        usernameHook: L,
        numSubscriptions: d,
        guildName: r.name,
        newTierName: (0, f.gb)(c)
    }) : p.intl.format(p.t.cUfTTE, {
        username: v,
        usernameHook: L,
        guildName: r.name,
        newTierName: (0, f.gb)(c)
    });
    let j = a.useCallback(() => {
            if (!D.enabled)
                if (x || 0 !== Math.floor(50 * Math.random())) {
                    let e = M.current?.getBoundingClientRect();
                    if (null == e) return;
                    u(e.left + e.width / 2, e.top + e.height / 2)
                } else O(!0)
        }, [u, D, x]),
        y = a.useCallback(() => {
            O(!1)
        }, []),
        k = a.useCallback(() => {
            (0, E.O9)({
                settingsVisible: !0
            }), (0, N.openUserSettings)(T.X.POGGERMODE_PANEL), O(!1)
        }, []),
        G = a.useCallback((e, t) => {
            t?.id.startsWith(U) && k()
        }, [k]);
    a.useEffect(() => S(G));
    let F = a.useCallback(e => {
            e.target === e.currentTarget && o(e)
        }, [o]),
        B = (0, l.jsx)(_.DUT, {
            className: R.P0,
            innerRef: M,
            onClick: o,
            children: (0, l.jsx)(_._Jp, {
                color: _.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: R.Kk,
                onMouseEnter: j
            })
        });
    return (0, l.jsxs)(g.A, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: i,
        children: [(0, l.jsx)("div", {
            onClick: F,
            className: R.iU,
            children: t
        }), x ? (0, l.jsx)(A.Ay, {
            children: (0, l.jsx)("div", {
                className: R.LK,
                children: (0, l.jsx)(b, {
                    onAnimationComplete: y,
                    onClick: k
                })
            })
        }) : null]
    })
}