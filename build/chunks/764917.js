/** chunk id: 764917, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => k
}), n(896048), n(747238), n(591487), n(727858);
var r = n(627968),
    i = n(64700),
    a = n(106778),
    o = n(397927),
    s = n(21161),
    l = n(531301),
    c = n(513609),
    u = n(267102),
    d = n(129185),
    f = n(652215),
    p = n(851110),
    _ = n(409221);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let y = [],
    b = -5,
    O = -40,
    v = -40,
    A = -100,
    I = 11,
    S = 125,
    T = 20,
    C = 12,
    N = 48,
    w = .01,
    R = new Set(["jack_o_lantern", "nose"]),
    P = {
        jack_o_lantern: {
            sprites: (0, l.A)(["chocolate_bar", "lollipop", "candy"])
        },
        nose: {
            sprites: (0, l.A)(["foot"])
        }
    };

function D(e) {
    if (null == e) return null;
    for (let t of R)
        if (null != e.match(new RegExp(":".concat(t, "(_tone[1-9])?")))) return t;
    return null
}
let L = {
    enter: {
        BEG: 0,
        END: 22
    },
    confetti: {
        BEG: 23,
        END: 119
    },
    exit: {
        BEG: 164,
        END: 200
    }
};

function x() {
    return n.e("98150").then(n.t.bind(n, 633343, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    })
}

function M(e) {
    if (null == e) return "enter";
    switch (e) {
        case "enter":
            return "confetti";
        case "confetti":
            return "exit";
        case "exit":
            return "enter"
    }
}
let j = i.forwardRef(function(e, t) {
    let {
        sprites: n
    } = e, [o, l] = i.useState(null), {
        confettiCanvas: c
    } = i.useContext(s.x), u = (0, a.f9)(c, o);
    return i.useImperativeHandle(t, () => ({
        fireConfetti: (e, t) => {
            u.createMultipleConfetti(E(m({}, p.Mw), {
                position: {
                    type: "static",
                    value: {
                        x: e,
                        y: t
                    }
                },
                velocity: {
                    type: "static-random",
                    minValue: {
                        x: b,
                        y: v
                    },
                    maxValue: {
                        x: O,
                        y: A
                    }
                },
                size: {
                    type: "static-random",
                    minValue: C,
                    maxValue: N
                },
                dragCoefficient: {
                    type: "static",
                    value: w
                }
            }), T)
        }
    }), [u]), (0, r.jsx)(a.K_, {
        ref: l,
        colors: y,
        sprites: n,
        spriteWidth: N,
        spriteHeight: N
    })
});

function k(e) {
    let {
        children: t
    } = e, n = i.useRef({}), [a, s] = i.useState(null), l = M(a), p = i.useRef(null), [h, m] = i.useState(!1), g = i.useRef("jack_o_lantern"), E = (0, u.Us)(), y = i.useCallback(e => {
        if (!h) {
            let t = D(e);
            null != t && (g.current = t, m(!0), s(null))
        }
    }, [h]), b = i.useMemo(() => ({
        triggerAnimation: y,
        untriggerAnimation: () => {}
    }), [y]), O = i.useCallback(e => {
        s(e)
    }, []), v = i.useCallback(e => {
        "exit" === e && m(!1)
    }, []), A = i.useCallback(e => {
        p.current = e
    }, []);
    return (i.useEffect(() => {
        if ("confetti" === a) {
            if (null == p.current) return;
            let e = p.current.getBoundingClientRect(),
                t = e.left - I,
                r = e.top + S,
                i = n.current[g.current];
            null == i || i.fireConfetti(t, r)
        }
    }, [a]), E !== f.BRT.APP) ? t : (0, r.jsxs)(d.wE.Provider, {
        value: b,
        children: [t, Object.keys(P).map(e => {
            let t = P[e];
            return (0, r.jsx)(j, {
                ref: t => {
                    null != t ? n.current[e] = t : delete n.current[e]
                },
                sprites: t.sprites
            }, e)
        }), h ? (0, r.jsx)(c.Ay, {
            children: (0, r.jsx)("div", {
                className: _.k,
                children: (0, r.jsx)(o.tvC, {
                    animationRef: A,
                    className: _.I,
                    nextScene: l,
                    sceneSegments: L,
                    onScenePlay: O,
                    onSceneComplete: v,
                    importData: x,
                    pauseWhileUnfocused: !1
                })
            })
        }) : null]
    })
}