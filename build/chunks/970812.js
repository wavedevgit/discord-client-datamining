/** chunk id: 970812 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(172218),
    u = n(311907),
    o = n(775602),
    c = n(383501),
    d = n(531685),
    A = n(25639),
    h = n(63727);
let E = "ease-in-out",
    _ = [8, 16, 11, 13, 6],
    g = Array.from({
        length: 5
    }, (e, t) => t),
    m = [2, 2, 5, 2, 2],
    f = [3, 3, 10, 6, 3],
    I = [3, 3, 7, 12, 6],
    N = [3, 3, 5, 10, 16],
    L = [3, 3, 8, 13, 7],
    T = [4, 6, 12, 9, 6],
    C = [6, 10, 9, 16, 8],
    x = 6.67 / 8,
    S = "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    b = `translate(${12.33-15*x}, ${1-15.5*x}) scale(${x})`;

function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
    for (let a = 0; a < 5; a++) {
        let s = n[a],
            r = p(-t, t);
        e[a] = Math.max(i, Math.min(l, s + r))
    }
    return e
}

function p(e, t) {
    return Math.random() * (t - e) + e
}
let y = {
    [A.s.GENTLE_AMBIENT]: {
        firstState: "burst",
        transitionConfig: {
            durationMs: 180,
            timingFunction: E
        },
        states: {
            burst: {
                getHeights: e => D(e, 4),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(3e3, 6e3),
                getNextState: () => "quiet"
            },
            quiet: {
                getHeights: e => D(e, 3),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(1e3, 3e3),
                getNextState: () => "burst"
            }
        }
    },
    [A.s.GENTLE_AMBIENT_WITH_INTRO]: {
        firstState: "introSilent",
        transitionConfig: {
            durationMs: 100,
            timingFunction: E
        },
        states: {
            introSilent: {
                getHeights: e => (function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    for (let i = 0; i < 5; i++) e[i] = n + p(0, t);
                    return e
                })(e),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveBuildCenter"
            },
            waveBuildCenter: {
                getHeights: e => D(e, 3, m),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveBuildRight1"
            },
            waveBuildRight1: {
                getHeights: e => D(e, 4, f, 1),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveBuildRight2"
            },
            waveBuildRight2: {
                getHeights: e => D(e, 4, I, 1),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "wavePeakRight"
            },
            wavePeakRight: {
                getHeights: e => D(e, 4, N, 1),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveReturnLeft1"
            },
            waveReturnLeft1: {
                getHeights: e => D(e, 5, L),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveReturnLeft2"
            },
            waveReturnLeft2: {
                getHeights: e => D(e, 5, T),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "burst"
            },
            burst: {
                getHeights: e => D(e, 4),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(3e3, 6e3),
                getNextState: () => "quiet"
            },
            quiet: {
                getHeights: e => D(e, 3),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(1e3, 3e3),
                getNextState: () => "burst"
            }
        }
    },
    [A.s.HIGH_CONTRAST]: {
        firstState: "burst",
        transitionConfig: {
            durationMs: 120,
            timingFunction: E
        },
        states: {
            burst: {
                getHeights: e => D(e, 7, C),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(3e3, 6e3),
                getNextState: () => "quiet"
            },
            quiet: {
                getHeights: e => D(e, 4, C),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(1e3, 3e3),
                getNextState: () => "burst"
            }
        }
    }
};

function v(e) {
    let {
        iconSize: t = 20,
        locked: n = !1,
        maskId: l
    } = e;
    return n ? (0, i.jsx)("defs", {
        children: (0, i.jsxs)("mask", {
            id: l,
            children: [(0, i.jsx)("rect", {
                width: t,
                height: t,
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: 11.33,
                y: 0,
                width: 8.67,
                height: 9.5,
                fill: "black",
                rx: 1
            })]
        })
    }) : null
}

function G(e) {
    let t, n, a, {
            color: o = "currentColor",
            className: c,
            animationStyle: E = A.s.GENTLE_AMBIENT,
            iconSize: _ = 20,
            locked: m = !1
        } = e,
        f = l.useId(),
        I = (0, u.bG)([d.A], () => d.A.isAppFocused()),
        [N, L] = l.useState(!1),
        T = l.useCallback(e => {
            L(t => t !== e ? e : t)
        }, []),
        C = (0, r.K)(T, .15),
        x = l.useRef([, , , , , ].fill(0)),
        D = y[E],
        p = !I || !N,
        G = (_ - 18) / 2,
        j = p ? 0 : D.transitionConfig.durationMs,
        O = l.useRef(null),
        P = l.useMemo(() => ({
            transitionProperty: "transform",
            transitionDuration: `${j}ms`,
            transitionTimingFunction: D.transitionConfig.timingFunction
        }), [D.transitionConfig.timingFunction, j]),
        M = l.useMemo(() => ({
            ...P,
            width: 2,
            height: 16,
            backgroundColor: o
        }), [P, o]),
        F = l.useMemo(() => ({
            left: G,
            top: (_ - 16) / 2,
            width: 18,
            height: 16,
            columnGap: 2
        }), [_, G, 18]),
        R = l.useCallback(e => {
            let t = O.current;
            if (null == t) return;
            let n = t.children;
            for (let t = 0; t < 5; t++) {
                let i = n.item(t);
                if (null == i) continue;
                let l = e[t],
                    a = Math.max(2, Math.min(16, "number" == typeof l && Number.isFinite(l) ? l : 2)) / 16;
                i.style.transform = `scaleY(${a})`
            }
        }, [O]);
    l.useLayoutEffect(() => {
        p || R(D.states[D.firstState].getHeights(x.current))
    }, [R, D, p]), t = l.useRef(D.firstState), n = l.useRef(null), a = !p, l.useEffect(() => {
        if (!a) return;
        t.current = D.firstState, n.current = null;
        let e = null,
            i = !1;
        n.current = {
            now: Date.now(),
            stateEnterTime: Date.now(),
            stateEndTime: 0
        };
        let l = n.current,
            s = e => {
                l.stateEnterTime = l.now;
                let t = e.getStateDuration();
                l.stateEndTime = t > 0 ? l.now + t : 0
            },
            r = t => {
                u(), i || (e = setTimeout(() => {
                    e = null, i || o()
                }, Math.max(0, t)))
            },
            u = () => {
                null != e && (clearTimeout(e), e = null)
            },
            o = () => {
                if (i) return;
                e = null, l.now = Date.now();
                let n = t.current,
                    a = D.states[n];
                if (null == a) {
                    t.current = D.firstState, r(0);
                    return
                }
                try {
                    let e = a.getHeights(x.current);
                    R(e)
                } catch (e) {
                    i = !0;
                    return
                }
                if (0 === l.stateEndTime || l.now >= l.stateEndTime) {
                    let e = a.getNextState();
                    t.current = e;
                    let n = D.states[e];
                    null != n && s(n)
                }
                r(a.getAnimationDelay())
            },
            c = D.states[t.current];
        return null != c && s(c), r(0), () => {
            i = !0, u()
        }
    }, [R, a, D, x]);
    let k = m ? `url(#${f})` : void 0;
    return (0, i.jsx)("span", {
        ref: C,
        className: s()(c, h.Aj),
        children: (0, i.jsxs)("svg", {
            width: _,
            height: _,
            viewBox: `0 0 ${_} ${_}`,
            fill: "none",
            children: [(0, i.jsx)(v, {
                iconSize: _,
                locked: m,
                maskId: f
            }), (0, i.jsx)("g", {
                mask: k,
                children: (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: _,
                    height: _,
                    children: (0, i.jsx)("div", {
                        className: h.FH,
                        children: (0, i.jsx)("div", {
                            ref: O,
                            className: h.Gb,
                            style: F,
                            children: g.map(e => (0, i.jsx)("div", {
                                className: h.M0,
                                style: M
                            }, e))
                        })
                    })
                })
            }), m && (0, i.jsx)("path", {
                d: S,
                transform: b,
                fill: o,
                fillRule: "evenodd",
                clipRule: "evenodd"
            })]
        })
    })
}

function j(e) {
    let {
        color: t = "currentColor",
        className: n,
        iconSize: a = 20,
        locked: s = !1
    } = e, r = l.useId(), u = (a - 18) / 2, o = s ? `url(#${r})` : void 0;
    return (0, i.jsx)("span", {
        className: n,
        style: {
            display: "inline-flex",
            pointerEvents: "none",
            contain: "strict",
            width: a,
            height: a
        },
        children: (0, i.jsxs)("svg", {
            width: a,
            height: a,
            viewBox: `0 0 ${a} ${a}`,
            fill: "none",
            children: [(0, i.jsx)(v, {
                iconSize: a,
                locked: s,
                maskId: r
            }), (0, i.jsx)("g", {
                mask: o,
                children: _.map((e, n) => {
                    let l = (a - e) / 2;
                    return (0, i.jsx)("rect", {
                        x: u + 4 * n,
                        y: l,
                        width: 2,
                        height: e,
                        rx: 1,
                        fill: t
                    }, n)
                })
            }), s && (0, i.jsx)("path", {
                d: S,
                transform: b,
                fill: t,
                fillRule: "evenodd",
                clipRule: "evenodd"
            })]
        })
    })
}

function O(e) {
    let {
        color: t = "currentColor",
        className: n,
        iconSize: a = 20,
        animationStyle: s = A.s.GENTLE_AMBIENT,
        locked: r = !1
    } = e, d = (0, u.bG)([o.A], () => o.A.useReducedMotion), h = (0, u.bG)([c.A], () => c.A.isConnected()), [E, _] = l.useState(h);
    return (l.useEffect(() => {
        if (h) {
            let e = setTimeout(() => _(!0), 800);
            return () => clearTimeout(e)
        }
        _(!1)
    }, [h]), d || E) ? (0, i.jsx)(j, {
        color: t,
        className: n,
        iconSize: a,
        locked: r
    }) : (0, i.jsx)(G, {
        color: t,
        className: n,
        animationStyle: s,
        iconSize: a,
        locked: r
    })
}