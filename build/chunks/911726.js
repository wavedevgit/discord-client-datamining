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
    m = n(397927),
    _ = n(21161),
    A = n(513609),
    E = n(928830),
    f = n(567771),
    h = n(780964),
    g = n(840065),
    p = n(473145),
    x = n(763754),
    C = n(888675),
    I = n(652215),
    T = n(985018),
    N = n(811336);
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
var R = ((i = {}).TOP_LEFT = "TOP_LEFT", i.TOP_RIGHT = "TOP_RIGHT", i.BOTTOM_LEFT = "BOTTOM_LEFT", i.BOTTOM_RIGHT = "BOTTOM_RIGHT", i);
let v = ["TOP_LEFT", "TOP_RIGHT"],
    O = (0, d.xI)(u.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    M = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    j = Object.freeze({
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
            ...M,
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
            ...M,
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
    b = "falling-leaf",
    y = ["#61D5B2"],
    L = n(80705),
    D = n(232460),
    U = [L, D];

function P() {
    return n.e("98150").then(n.t.bind(n, 633343, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    })
}

function k(e) {
    let {
        onAnimationComplete: t,
        onClick: n,
        position: i,
        size: r
    } = e, d = a.useRef(null), [u, A] = a.useState(null), [E] = a.useState(i ?? function() {
        switch (Math.floor(Math.random() * Object.keys(R).length)) {
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
        createMultipleConfettiAt: f,
        confettiCanvas: h
    } = a.useContext(_.x), [g, p] = a.useState(null), x = (0, o.f9)(h, g), C = function(e, t) {
        if (null == e) return "enter";
        switch (e) {
            case "enter":
                return "confetti";
            case "confetti":
                if (v.includes(t)) return "leaf_peel";
                return "exit";
            case "leaf_peel":
                return "leaf_fall";
            case "leaf_fall":
                return "exit";
            case "exit":
                return "enter"
        }
    }(u, E), I = v.includes(E), T = I && "exit" === u, M = a.useCallback(e => {
        A(e)
    }, []), k = a.useCallback(() => {
        "exit" === u && t?.()
    }, [t, u]), G = a.useCallback(e => {
        d.current = e
    }, []);
    return a.useEffect(() => {
        if ("confetti" === u) {
            let {
                confettiVelocityDirection: e
            } = j[E], t = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O,
                    i = e?.getBoundingClientRect();
                if (null == i) return {
                    x: 0,
                    y: 0
                };
                let l = j[t].getConfettiPosition(n);
                return {
                    x: i.left + l.x,
                    y: i.top + l.y
                }
            }(d.current, E, r);
            f(t.x, t.y, {
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
    }, [f, E, u, r]), a.useEffect(() => {
        if (I && "leaf_fall" === u) {
            let e = j[E].leafRotationDirection;
            x.createConfetti({
                id: `${b}-${(0,c.A)()}`,
                position: {
                    type: "static",
                    value: function(e, t) {
                        let n = e?.getBoundingClientRect();
                        if (null == n) return {
                            x: 0,
                            y: 0
                        };
                        let i = j[t];
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
                sprite: "TOP_LEFT" === E ? L : D
            })
        }
    }, [I, x, E, u]), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.K_, {
            ref: p,
            sprites: U,
            colors: y,
            spriteWidth: 45,
            spriteHeight: 45
        }), (0, l.jsx)(m.DUT, {
            onClick: n,
            className: s()(N.FT, {
                [N.FZ]: "TOP_LEFT" === E,
                [N.S]: "TOP_RIGHT" === E,
                [N.Re]: "BOTTOM_LEFT" === E,
                [N._t]: "BOTTOM_RIGHT" === E
            }),
            children: (0, l.jsx)(m.tvC, {
                animationRef: G,
                className: s()(N.oQ, {
                    [N.EG]: T
                }),
                nextScene: C,
                sceneSegments: S,
                onScenePlay: M,
                onSceneComplete: k,
                importData: P,
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
                case I.lAJ.GUILD_BOOST_TIER_1:
                    return I.TVA.TIER_1;
                case I.lAJ.GUILD_BOOST_TIER_2:
                    return I.TVA.TIER_2;
                case I.lAJ.GUILD_BOOST_TIER_3:
                    return I.TVA.TIER_3
            }
            return null
        }(n),
        d = (0, f.A)(n),
        {
            createMultipleConfettiAt: u,
            addClickListener: S
        } = a.useContext(_.x),
        [R, v] = a.useState(!1),
        O = a.useRef(null),
        {
            reducedMotion: M
        } = a.useContext(m.CZY),
        j = (0, x.Ay)(n),
        y = j.nick,
        L = s(j);
    t = null == c || null == r ? d > 1 ? T.intl.format(T.t.yfC9ds, {
        username: y,
        usernameHook: L,
        numSubscriptions: d
    }) : T.intl.format(T.t["57St/7"], {
        username: y,
        usernameHook: L
    }) : d > 1 ? T.intl.format(T.t.PO9uJD, {
        username: y,
        usernameHook: L,
        numSubscriptions: d,
        guildName: r.name,
        newTierName: (0, p.gb)(c)
    }) : T.intl.format(T.t.cUfTTE, {
        username: y,
        usernameHook: L,
        guildName: r.name,
        newTierName: (0, p.gb)(c)
    });
    let D = a.useCallback(() => {
            if (!M.enabled)
                if (R || 0 !== Math.floor(50 * Math.random())) {
                    let e = O.current?.getBoundingClientRect();
                    if (null == e) return;
                    u(e.left + e.width / 2, e.top + e.height / 2)
                } else v(!0)
        }, [u, M, R]),
        U = a.useCallback(() => {
            v(!1)
        }, []),
        P = a.useCallback(() => {
            (0, E.O9)({
                settingsVisible: !0
            }), (0, g.openUserSettings)(h.X.POGGERMODE_PANEL, {
                section: I.nc_.POGGERMODE
            }), v(!1)
        }, []),
        G = a.useCallback((e, t) => {
            t?.id.startsWith(b) && P()
        }, [P]);
    a.useEffect(() => S(G));
    let w = a.useCallback(e => {
            e.target === e.currentTarget && o(e)
        }, [o]),
        F = (0, l.jsx)(m.DUT, {
            className: N.P0,
            innerRef: O,
            onClick: o,
            children: (0, l.jsx)(m._Jp, {
                color: m.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: N.Kk,
                onMouseEnter: D
            })
        });
    return (0, l.jsxs)(C.A, {
        iconNode: F,
        timestamp: n.timestamp,
        compact: i,
        children: [(0, l.jsx)("div", {
            onClick: w,
            className: N.iU,
            children: t
        }), R ? (0, l.jsx)(A.Ay, {
            children: (0, l.jsx)("div", {
                className: N.LK,
                children: (0, l.jsx)(k, {
                    onAnimationComplete: U,
                    onClick: P
                })
            })
        }) : null]
    })
}