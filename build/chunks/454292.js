/** Chunk was on 60449 **/
/** chunk id: 454292, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U
}), n(228524), n(896048);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(311907),
    a = n(827734),
    o = n(314116),
    c = n(397927),
    d = n(775602),
    u = n(725951),
    g = n(400492),
    h = n(12901),
    x = n(115063),
    A = n(414736),
    p = n(927018),
    m = n(928830),
    j = n(3137),
    O = n(301656),
    E = n(224964),
    b = n(31408),
    S = n(985018),
    v = n(829054);
let C = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    f = (0, l.range)(0, 11),
    T = (0, l.range)(0, 2.25, .25),
    N = (0, l.range)(1, 11),
    _ = (0, l.range)(1, 26);

function I(e) {
    let {
        disabled: t,
        locations: n,
        settingsLocations: s,
        onChange: l
    } = e, r = n.map(e => (0, i.jsx)(c.dOG, {
        label: e.title,
        description: e.description,
        checked: s[e.location],
        disabled: t,
        onChange: t => {
            var n, i;
            return l((n = function(e) {
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
            }({}, s), i = i = {
                [e.location]: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n))
        }
    }, e.location));
    return (0, i.jsx)(c.nVY, {
        label: S.intl.string(S.t.bWVN1D),
        children: r
    })
}

function y(e) {
    let {
        children: t
    } = e;
    return (0, i.jsx)(c.Text, {
        className: v.iF,
        variant: "text-sm/normal",
        color: "text-default",
        children: t
    })
}

function D(e) {
    let {
        settings: {
            enabled: t,
            warningSeen: n
        },
        updateSettings: s
    } = e, l = (0, r.bG)([d.A], () => d.A.useReducedMotion);
    return (0, i.jsx)(c.dOG, {
        label: S.intl.string(S.t.vuiXm9),
        description: S.intl.string(S.t.KuYbWN),
        checked: t,
        onChange: e => {
            e || (0, A._)(p.sn.DISABLE_POGGERMODE), e && (!n || l) ? (0, o.A)({
                title: l ? S.intl.string(S.t["FxT+p0"]) : S.intl.string(S.t.TAZ4F9),
                subtitle: l ? S.intl.string(S.t.gmixrx) : S.intl.string(S.t.jN3t3K),
                confirmText: S.intl.string(S.t.JFfins),
                onConfirm: () => s(l ? C : {
                    enabled: !0,
                    warningSeen: !0
                })
            }) : s({
                enabled: e
            })
        }
    })
}

function G(e) {
    let {
        settings: {
            enabled: t,
            confettiEnabled: n,
            confettiCount: s,
            confettiSize: l,
            confettiEnabledLocations: r
        },
        updateSettings: a
    } = e, o = !t || !n;
    return (0, i.jsxs)(c.nVY, {
        label: S.intl.string(S.t.mqxwJO),
        children: [(0, i.jsx)(c.dOG, {
            label: S.intl.string(S.t.s0KCgF),
            description: S.intl.string(S.t.O1Vflg),
            checked: n,
            disabled: !t,
            onChange: e => a({
                confettiEnabled: e
            }, 0)
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: o ? "text-muted" : "text-strong",
                className: v.KF,
                children: S.intl.string(S.t.vd0D81)
            }), (0, i.jsx)(y, {
                children: S.intl.string(S.t.a18Sug)
            }), (0, i.jsx)(c.Apm, {
                disabled: o,
                markers: N,
                stickToMarkers: !0,
                minValue: N[0],
                maxValue: N[N.length - 1],
                initialValue: s,
                onValueChange: e => a({
                    confettiCount: e
                }, 0),
                onValueRender: e => "".concat(e)
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: o ? "text-muted" : "text-strong",
                className: v.KF,
                children: S.intl.string(S.t.sPO3ij)
            }), (0, i.jsx)(y, {
                children: S.intl.string(S.t.xoldVn)
            }), (0, i.jsx)(c.Apm, {
                disabled: o,
                markers: _,
                stickToMarkers: !0,
                minValue: _[0],
                maxValue: _[_.length - 1],
                initialValue: l,
                onValueChange: e => a({
                    confettiSize: e
                }, 0),
                onValueRender: e => "".concat(e)
            })]
        }), (0, i.jsx)(I, {
            disabled: o,
            locations: [{
                location: b.k.CHAT_INPUT,
                title: S.intl.string(S.t.elTtyz),
                description: S.intl.string(S.t.HtKfMi)
            }, {
                location: b.k.REACTION,
                title: S.intl.string(S.t.Ik4VIa),
                description: S.intl.string(S.t.y4rqK0)
            }, {
                location: b.k.MEMBER_USER,
                title: S.intl.string(S.t.ZXBlAn),
                description: S.intl.string(S.t["m9RD+c"])
            }, {
                location: b.k.CALL_TILE,
                title: S.intl.string(S.t.V66giQ),
                description: S.intl.string(S.t.fiHV7u)
            }],
            settingsLocations: r,
            onChange: e => a({
                confettiEnabledLocations: e
            }, 0)
        })]
    })
}

function P(e) {
    let {
        settings: {
            enabled: t,
            combosEnabled: n,
            comboSoundsEnabled: s,
            combosRequiredCount: l
        },
        updateSettings: r
    } = e, a = !t || !n;
    return (0, i.jsxs)(c.nVY, {
        label: S.intl.string(S.t.Xz0ole),
        children: [(0, i.jsx)(c.dOG, {
            label: S.intl.string(S.t.o3iV7B),
            description: S.intl.string(S.t["31Z8Ee"]),
            checked: n,
            disabled: !t,
            onChange: e => r({
                combosEnabled: e
            })
        }), (0, i.jsx)(c.dOG, {
            label: S.intl.string(S.t["Ax+IoW"]),
            description: S.intl.string(S.t["9rgQEr"]),
            checked: s,
            disabled: !t,
            onChange: e => r({
                comboSoundsEnabled: e
            })
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: a ? "text-muted" : "text-strong",
                className: v.KF,
                children: S.intl.string(S.t.L0oQuh)
            }), (0, i.jsx)(y, {
                children: S.intl.string(S.t["/OOFpL"])
            }), (0, i.jsx)(c.Apm, {
                disabled: a,
                markers: f,
                stickToMarkers: !0,
                minValue: f[0],
                maxValue: f[f.length - 1],
                initialValue: l,
                onValueChange: e => r({
                    combosRequiredCount: e
                }),
                onValueRender: e => "".concat(e)
            })]
        })]
    })
}

function R(e) {
    let {
        settings: {
            enabled: t,
            screenshakeEnabled: n,
            shakeIntensity: s,
            screenshakeEnabledLocations: l
        },
        updateSettings: a
    } = e, o = (0, r.bG)([d.A], () => d.A.useReducedMotion), u = !t || !n || o;
    return (0, i.jsxs)(c.nVY, {
        label: S.intl.string(S.t.wVS5Sd),
        children: [(0, i.jsx)(c.dOG, {
            label: S.intl.string(S.t.N004zO),
            description: o ? S.intl.string(S.t.GckHGw) : S.intl.string(S.t.Qq5W3v),
            checked: n && !o,
            disabled: !t || o,
            onChange: e => a({
                screenshakeEnabled: e
            }, 1)
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: u ? "text-muted" : "text-strong",
                className: v.KF,
                children: S.intl.string(S.t.UxnnC4)
            }), (0, i.jsx)(y, {
                children: S.intl.string(S.t.CEOEOb)
            }), (0, i.jsx)(c.Apm, {
                disabled: u,
                markers: T,
                equidistant: !0,
                stickToMarkers: !0,
                minValue: T[0],
                maxValue: T[T.length - 1],
                initialValue: s,
                onValueChange: e => {
                    var t;
                    null != (t = {
                        shakeIntensity: e
                    }).shakeIntensity && t.shakeIntensity > s && (0, A._)(p.sn.MORE), a(t, 1)
                },
                onMarkerRender: e => e === T[T.length - 1] ? S.intl.string(S.t["4rbMWc"]) : "".concat(100 * e, "%")
            })]
        }), (0, i.jsx)(I, {
            disabled: u,
            locations: [{
                location: b.uD.CHAT_INPUT,
                title: S.intl.string(S.t.vUcvPP),
                description: S.intl.string(S.t.y00OrF)
            }, {
                location: b.uD.VOICE_USER,
                title: S.intl.string(S.t.TcRO54),
                description: S.intl.string(S.t.YJCxVY)
            }, {
                location: b.uD.MENTION,
                title: S.intl.string(S.t.oW4shO),
                description: S.intl.string(S.t["mqfw/H"])
            }],
            settingsLocations: l,
            onChange: e => a({
                screenshakeEnabledLocations: e
            }, 1)
        })]
    })
}

function V(e) {
    let {
        updateSettings: t
    } = e;
    return (0, i.jsx)(c.nVY, {
        label: S.intl.string(S.t.EuXv2q),
        children: (0, i.jsxs)(c.BJc, {
            gap: 16,
            children: [(0, i.jsx)("div", {
                children: S.intl.string(S.t["1SLnki"])
            }), (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: v.hw,
                children: (0, i.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    text: S.intl.string(S.t.qz65yY),
                    onClick: () => {
                        t({
                            enabled: !1,
                            settingsVisible: !1
                        }), (0, h.default)()
                    }
                })
            })]
        })
    })
}

function L(e) {
    let {
        onChangePage: t
    } = e;
    return (0, i.jsxs)(c.DUT, {
        onClick: () => t(1),
        className: v.Tq,
        children: [(0, i.jsx)("div", {
            className: v.w1,
            children: (0, i.jsx)(c.OR, {
                size: "md",
                color: a.A.unsafe_rawColors.ORANGE_345.css
            })
        }), (0, i.jsxs)("div", {
            className: v.qL,
            children: [(0, i.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: S.intl.string(S.t["6jI0hd"])
            }), (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: S.intl.string(S.t.GuUItX)
            })]
        }), (0, i.jsx)(c._BQ, {
            size: "custom",
            color: "currentColor",
            width: 16,
            className: v.nT
        })]
    })
}
let k = () => n.e("4660").then(n.t.bind(n, 662336, 19)).then(e => {
    let {
        default: t
    } = e;
    return t
});

function M(e) {
    let {
        onChangePage: t,
        setShowEnableAnimation: n
    } = e, l = (0, r.cf)([j.A], () => j.A.getState()), [a, o] = s.useState({
        x: 0,
        y: 0
    }), d = (0, E.A)();

    function u(e, t, n, i) {
        return (null != t ? t : e) && (null != i ? i : n)
    }
    let h = (e, t) => {
            var i, s;
            if (e.enabled && !1 === l.enabled && (n(!0), (0, g.Ak)("poggermode_enabled"), (0, x.fO)({
                    duration: 2e3,
                    intensity: null != (i = e.shakeIntensity) ? i : l.shakeIntensity
                })), (0, m.O9)(e), null == t) return;
            let r = u(l.confettiEnabled, e.confettiEnabled, l.enabled, e.enabled);
            0 === t && r && d.fire(a.x, a.y, {
                settings: e
            });
            let o = u(l.screenshakeEnabled, e.screenshakeEnabled, l.enabled, e.enabled);
            1 === t && o && (0, x.fO)({
                duration: 1e3,
                intensity: null != (s = e.shakeIntensity) ? s : l.shakeIntensity
            })
        },
        A = e => {
            o({
                x: e.clientX,
                y: e.clientY
            })
        };
    return s.useEffect(() => (window.addEventListener("mousemove", A), () => window.removeEventListener("mousemove", A)), []), (0, i.jsxs)(c.BJc, {
        gap: 24,
        children: [(0, i.jsx)(D, {
            settings: l,
            updateSettings: h
        }), (0, i.jsx)(L, {
            onChangePage: t
        }), (0, i.jsx)(P, {
            settings: l,
            updateSettings: h
        }), (0, i.jsx)(R, {
            settings: l,
            updateSettings: h
        }), (0, i.jsx)(G, {
            settings: l,
            updateSettings: h
        }), (0, i.jsx)(V, {
            updateSettings: h
        })]
    })
}
let w = e => 0 === e ? u.f.LEFT : u.f.RIGHT;

function U() {
    let [e, t] = s.useState(0), [n, l] = s.useState(w(e)), [a, o] = s.useState(!1), g = (0, r.bG)([d.A], () => d.A.useReducedMotion), h = a && !g;
    return s.useEffect(() => {
        let t = setTimeout(() => {
            l(w(e))
        }, 500);
        return () => clearTimeout(t)
    }, [e]), s.useEffect(() => {
        Math.random() > .99 && (0, A._)(p.sn.VISITOR_100)
    }, []), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.A, {
            className: v.l3,
            step: e,
            direction: n,
            children: ((e, t, n) => {
                let s = e => () => {
                    t(e)
                };
                switch (e) {
                    case 0:
                        return (0, i.jsx)(M, {
                            onChangePage: s(1),
                            setShowEnableAnimation: n
                        });
                    case 1:
                        return (0, i.jsx)(O.A, {
                            onBackClick: s(0)
                        });
                    default:
                        return null
                }
            })(e, t, o)
        }), (0, i.jsx)("div", {
            className: h ? v.Sr : v.IP,
            children: (0, i.jsx)(c.akl, {
                className: v.gT,
                importData: k,
                shouldAnimate: h,
                autoplay: !1,
                resetOnPlay: !0,
                loop: !1,
                onComplete: () => o(!1)
            })
        })]
    })
}