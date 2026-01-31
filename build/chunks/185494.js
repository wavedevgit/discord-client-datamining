/** chunk id: 185494, original params: e,t,n (module,exports,require) **/
n.d(t, {
    l: () => x
}), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(353709),
    s = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(827343),
    f = n(475743),
    p = n(400492),
    g = n(430452),
    m = n(504292),
    _ = n(774030),
    h = n(494783),
    y = n(985018),
    A = n(515316);
let b = e => 1 - Math.pow(1 - e, 4),
    E = {
        mass: 1,
        friction: 64,
        tension: 1e3,
        clamp: !0
    },
    v = {
        mass: 1,
        friction: 64,
        tension: 1e3
    },
    O = {
        mass: 1,
        friction: 35,
        tension: 1e3
    };

function x(e) {
    var t;
    let {} = e, {
        activeVoice: n
    } = (0, h.f)(), i = (0, f.A)(n), x = (0, _.e)(n), {
        toggleLoopback: S,
        isLoopbackEnabled: C
    } = function() {
        let {
            activeVoice: e
        } = (0, h.f)(), t = (0, s.bG)([g.A], () => g.A.getVoiceFilterPlaybackEnabled()), n = l.useCallback(() => {
            (0, p.Ak)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, m.KM)(!t)
        }, [t]);
        return l.useEffect(() => (d.A.setLoopback("voice_filter_preview", null != e && t), () => {
            d.A.setLoopback("voice_filter_preview", !1)
        }), [t, e]), {
            isLoopbackEnabled: t,
            toggleLoopback: n
        }
    }(), N = C ? u.GOW : u.uik, I = l.useCallback(() => (0, m.OR)(null), []), j = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOWER).hex(), T = (0, u.rdh)(u.LU0.colors.WHITE).hex(), w = l.useRef(0), P = n !== i ? w.current + 1 : w.current;
    l.useEffect(() => {
        w.current = P
    }, [P]);
    let R = null != n,
        D = !R,
        k = R && null != i,
        L = null == n && null != i,
        M = (0, u.zhh)({
            opacity: +!!R,
            height: 72 * !!R,
            pointerEvents: R ? "auto" : "none",
            backgroundColor: null != (t = null == x ? void 0 : x.baseColor) ? t : j,
            config: e => "backgroundColor" === e ? {
                easing: b,
                duration: 200
            } : E,
            delay: 100 * !!k
        }, "respect-motion-settings"),
        U = (0, u.pnh)(null == x ? void 0 : x.id, {
            key: P,
            from: {
                opacity: 0,
                background: null == x ? void 0 : x.splashGradient
            },
            enter: {
                opacity: 1,
                delay: k ? 100 : 50
            },
            leave: {
                opacity: 0,
                delay: k ? 100 : 150
            },
            config: {
                easing: b,
                duration: k ? 250 : 200
            }
        }, "respect-motion-settings"),
        [V] = (0, u.mX6)(2, e => ({
            from: k ? {
                translateY: 0,
                opacity: 1
            } : {
                translateY: 16,
                opacity: 0
            },
            to: null == n ? {
                translateY: 16,
                opacity: 0
            } : k ? null : {
                translateY: 0,
                opacity: 1
            },
            config: e => "opacity" === e ? {
                easing: b,
                duration: 200
            } : v,
            delay: L ? 50 - 50 * e : 200 + 50 * e
        }), "respect-motion-settings", [n]),
        F = (0, u.pnh)(null == x ? void 0 : x.iconURL, {
            key: P,
            from: {
                opacity: 0,
                scale: 80 / 88,
                translateX: k ? -16 : 0
            },
            enter: {
                opacity: 1,
                scale: 1,
                translateX: 0,
                delay: 50
            },
            leave: {
                opacity: 0,
                scale: R ? 80 / 88 : 1,
                translateX: 24 * !!R,
                delay: 150 * !k
            },
            config: e => "opacity" === e ? {
                easing: b,
                duration: 200
            } : R ? E : O
        }, "respect-motion-settings"),
        G = (0, u.pnh)(null == x ? void 0 : x.name, {
            key: P,
            from: {
                opacity: 0,
                scale: k ? .9 : 1,
                translateY: 16 * !k
            },
            enter: {
                opacity: 1,
                scale: 1,
                translateX: 0,
                translateY: 0,
                delay: 150,
                config: e => "opacity" === e ? {
                    easing: b,
                    duration: 200
                } : k ? E : v
            },
            leave: {
                opacity: 0,
                translateX: 24 * (null != n),
                translateY: 16 * (null == n),
                delay: L ? 100 : 50,
                config: e => "opacity" === e ? {
                    easing: b,
                    duration: 200
                } : k ? E : v
            }
        }, "respect-motion-settings"),
        B = y.intl.string(C ? y.t.esVyo6 : y.t.UQqFCF);
    return (0, r.jsxs)(o.animated.div, {
        className: A.TC,
        "aria-hidden": D,
        style: M,
        children: [(0, r.jsx)("div", {
            className: a()([A.ab, A.k])
        }), U(e => (0, r.jsx)(o.animated.div, {
            className: A.ab,
            style: e
        })), (0, r.jsx)("div", {
            className: A.P0,
            children: F((e, t) => (0, r.jsx)(o.animated.img, {
                className: A.w4,
                style: e,
                alt: "",
                src: t
            }, t))
        }), (0, r.jsx)("div", {
            className: A.Wi,
            children: G((e, t) => (0, r.jsxs)(o.animated.div, {
                className: A.h_,
                style: e,
                children: [(0, r.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "always-white",
                    className: A.cf,
                    children: y.intl.string(y.t.WW5DAC)
                }), (0, r.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "always-white",
                    children: null != t ? y.intl.string(t) : ""
                })]
            }))
        }), (0, r.jsxs)("div", {
            className: A._o,
            children: [(0, r.jsx)(c.m_, {
                __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Heading, {
                        variant: "heading-sm/normal",
                        color: "text-strong",
                        className: A.Rg,
                        children: B
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: y.intl.string(C ? y.t.Sg6cfm : y.t.ZKhtw0)
                    })]
                }),
                shouldShow: R,
                ariaHidden: !0,
                children: (0, r.jsx)(o.animated.div, {
                    className: A._o,
                    style: V[0],
                    children: (0, r.jsx)(u.DUT, {
                        className: a()(A.x6, {
                            [A.v3]: C
                        }),
                        "aria-label": B,
                        "aria-hidden": D,
                        focusProps: {
                            enabled: R
                        },
                        tabIndex: R ? 0 : -1,
                        onClick: () => S(),
                        children: (0, r.jsx)(N, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: T
                        })
                    })
                })
            }), (0, r.jsx)(c.m_, {
                shouldShow: R,
                text: y.intl.string(y.t.UvMx7F),
                children: (0, r.jsx)(o.animated.div, {
                    className: A._o,
                    style: V[1],
                    children: (0, r.jsx)(u.DUT, {
                        className: A.x6,
                        "aria-hidden": D,
                        focusProps: {
                            enabled: R
                        },
                        tabIndex: R ? 0 : -1,
                        onClick: I,
                        children: (0, r.jsx)(u.aXh, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: T
                        })
                    })
                })
            })]
        })]
    })
}