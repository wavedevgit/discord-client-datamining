/** chunk id: 454292 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(311907),
    a = n(827734),
    o = n(314116),
    d = n(397927),
    c = n(775602),
    u = n(725951),
    _ = n(400492),
    m = n(12901),
    g = n(115063),
    A = n(414736),
    h = n(927018),
    x = n(928830),
    p = n(3137),
    T = n(301656),
    E = n(224964),
    C = n(31408),
    S = n(985018),
    f = n(988288);
let N = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    b = (0, l.range)(0, 11),
    I = (0, l.range)(0, 2.25, .25),
    v = (0, l.range)(1, 11),
    j = (0, l.range)(1, 26);

function O(e) {
    let {
        disabled: t,
        locations: n,
        settingsLocations: s,
        onChange: l
    } = e, r = n.map(e => (0, i.jsx)(d.dOG, {
        label: e.title,
        description: e.description,
        checked: s[e.location],
        disabled: t,
        onChange: t => l({
            ...s,
            [e.location]: t
        })
    }, e.location));
    return (0, i.jsx)(d.nVY, {
        label: S.intl.string(S.t.bWVN1D),
        children: r
    })
}

function y(e) {
    let {
        children: t
    } = e;
    return (0, i.jsx)(d.Text, {
        className: f.iF,
        variant: "text-sm/normal",
        color: "text-default",
        children: t
    })
}

function R(e) {
    let {
        settings: {
            enabled: t,
            warningSeen: n
        },
        updateSettings: s
    } = e, l = (0, r.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsx)(d.dOG, {
        label: S.intl.string(S.t.vuiXm9),
        description: S.intl.string(S.t.KuYbWN),
        checked: t,
        onChange: e => {
            e || (0, A._)(h.sn.DISABLE_POGGERMODE), e && (!n || l) ? (0, o.A)({
                title: l ? S.intl.string(S.t["FxT+p0"]) : S.intl.string(S.t.TAZ4F9),
                subtitle: l ? S.intl.string(S.t.gmixrx) : S.intl.string(S.t.jN3t3K),
                confirmText: S.intl.string(S.t.JFfins),
                onConfirm: () => s(l ? N : {
                    enabled: !0,
                    warningSeen: !0
                })
            }) : s({
                enabled: e
            })
        }
    })
}

function P(e) {
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
    return (0, i.jsxs)(d.nVY, {
        label: S.intl.string(S.t.mqxwJO),
        children: [(0, i.jsx)(d.dOG, {
            label: S.intl.string(S.t.s0KCgF),
            description: S.intl.string(S.t.O1Vflg),
            checked: n,
            disabled: !t,
            onChange: e => a({
                confettiEnabled: e
            }, 0)
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                variant: "text-md/semibold",
                color: o ? "text-muted" : "text-strong",
                className: f.KF,
                children: S.intl.string(S.t.vd0D81)
            }), (0, i.jsx)(y, {
                children: S.intl.string(S.t.a18Sug)
            }), (0, i.jsx)(d.Apm, {
                disabled: o,
                markers: v,
                stickToMarkers: !0,
                minValue: v[0],
                maxValue: v[v.length - 1],
                initialValue: s,
                onValueChange: e => a({
                    confettiCount: e
                }, 0),
                onValueRender: e => `${e}`
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                variant: "text-md/semibold",
                color: o ? "text-muted" : "text-strong",
                className: f.KF,
                children: S.intl.string(S.t.sPO3ij)
            }), (0, i.jsx)(y, {
                children: S.intl.string(S.t.xoldVn)
            }), (0, i.jsx)(d.Apm, {
                disabled: o,
                markers: j,
                stickToMarkers: !0,
                minValue: j[0],
                maxValue: j[j.length - 1],
                initialValue: l,
                onValueChange: e => a({
                    confettiSize: e
                }, 0),
                onValueRender: e => `${e}`
            })]
        }), (0, i.jsx)(O, {
            disabled: o,
            locations: [{
                location: C.k.CHAT_INPUT,
                title: S.intl.string(S.t.elTtyz),
                description: S.intl.string(S.t.HtKfMi)
            }, {
                location: C.k.REACTION,
                title: S.intl.string(S.t.Ik4VIa),
                description: S.intl.string(S.t.y4rqK0)
            }, {
                location: C.k.MEMBER_USER,
                title: S.intl.string(S.t.ZXBlAn),
                description: S.intl.string(S.t["m9RD+c"])
            }, {
                location: C.k.CALL_TILE,
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

function D(e) {
    let {
        settings: {
            enabled: t,
            combosEnabled: n,
            comboSoundsEnabled: s,
            combosRequiredCount: l
        },
        updateSettings: r
    } = e, a = !t || !n;
    return (0, i.jsxs)(d.nVY, {
        label: S.intl.string(S.t.Xz0ole),
        children: [(0, i.jsx)(d.dOG, {
            label: S.intl.string(S.t.o3iV7B),
            description: S.intl.string(S.t["31Z8Ee"]),
            checked: n,
            disabled: !t,
            onChange: e => r({
                combosEnabled: e
            })
        }), (0, i.jsx)(d.dOG, {
            label: S.intl.string(S.t["Ax+IoW"]),
            description: S.intl.string(S.t["9rgQEr"]),
            checked: s,
            disabled: !t,
            onChange: e => r({
                comboSoundsEnabled: e
            })
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                variant: "text-md/semibold",
                color: a ? "text-muted" : "text-strong",
                className: f.KF,
                children: S.intl.string(S.t.L0oQuh)
            }), (0, i.jsx)(y, {
                children: S.intl.string(S.t["/OOFpL"])
            }), (0, i.jsx)(d.Apm, {
                disabled: a,
                markers: b,
                stickToMarkers: !0,
                minValue: b[0],
                maxValue: b[b.length - 1],
                initialValue: l,
                onValueChange: e => r({
                    combosRequiredCount: e
                }),
                onValueRender: e => `${e}`
            })]
        })]
    })
}

function L(e) {
    let {
        settings: {
            enabled: t,
            screenshakeEnabled: n,
            shakeIntensity: s,
            screenshakeEnabledLocations: l
        },
        updateSettings: a
    } = e, o = (0, r.bG)([c.A], () => c.A.useReducedMotion), u = !t || !n || o;
    return (0, i.jsxs)(d.nVY, {
        label: S.intl.string(S.t.wVS5Sd),
        children: [(0, i.jsx)(d.dOG, {
            label: S.intl.string(S.t.N004zO),
            description: o ? S.intl.string(S.t.GckHGw) : S.intl.string(S.t.Qq5W3v),
            checked: n && !o,
            disabled: !t || o,
            onChange: e => a({
                screenshakeEnabled: e
            }, 1)
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                variant: "text-md/semibold",
                color: u ? "text-muted" : "text-strong",
                className: f.KF,
                children: S.intl.string(S.t.UxnnC4)
            }), (0, i.jsx)(y, {
                children: S.intl.string(S.t.CEOEOb)
            }), (0, i.jsx)(d.Apm, {
                disabled: u,
                markers: I,
                equidistant: !0,
                stickToMarkers: !0,
                minValue: I[0],
                maxValue: I[I.length - 1],
                initialValue: s,
                onValueChange: e => {
                    var t;
                    null != (t = {
                        shakeIntensity: e
                    }).shakeIntensity && t.shakeIntensity > s && (0, A._)(h.sn.MORE), a(t, 1)
                },
                onMarkerRender: e => e === I[I.length - 1] ? S.intl.string(S.t["4rbMWc"]) : `${100*e}%`
            })]
        }), (0, i.jsx)(O, {
            disabled: u,
            locations: [{
                location: C.uD.CHAT_INPUT,
                title: S.intl.string(S.t.vUcvPP),
                description: S.intl.string(S.t.y00OrF)
            }, {
                location: C.uD.VOICE_USER,
                title: S.intl.string(S.t.TcRO54),
                description: S.intl.string(S.t.YJCxVY)
            }, {
                location: C.uD.MENTION,
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

function M(e) {
    let {
        updateSettings: t
    } = e;
    return (0, i.jsx)(d.nVY, {
        label: S.intl.string(S.t.EuXv2q),
        children: (0, i.jsxs)(d.BJc, {
            gap: 16,
            children: [(0, i.jsx)("div", {
                children: S.intl.string(S.t["1SLnki"])
            }), (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: f.hw,
                children: (0, i.jsx)(d.Button, {
                    variant: "primary",
                    size: "sm",
                    text: S.intl.string(S.t.qz65yY),
                    onClick: () => {
                        t({
                            enabled: !1,
                            settingsVisible: !1
                        }), (0, m.default)()
                    }
                })
            })]
        })
    })
}

function G(e) {
    let {
        onChangePage: t
    } = e;
    return (0, i.jsxs)(d.DUT, {
        onClick: () => t(1),
        className: f.Tq,
        children: [(0, i.jsx)("div", {
            className: f.w1,
            children: (0, i.jsx)(d.OR, {
                size: "md",
                color: a.A.unsafe_rawColors.ORANGE_345.css
            })
        }), (0, i.jsxs)("div", {
            className: f.qL,
            children: [(0, i.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: S.intl.string(S.t["6jI0hd"])
            }), (0, i.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: S.intl.string(S.t.GuUItX)
            })]
        }), (0, i.jsx)(d._BQ, {
            size: "custom",
            color: "currentColor",
            width: 16,
            className: f.nT
        })]
    })
}
let U = () => n.e("4660").then(n.t.bind(n, 662336, 19)).then(e => {
    let {
        default: t
    } = e;
    return t
});

function k(e) {
    let {
        onChangePage: t,
        setShowEnableAnimation: n
    } = e, l = (0, r.cf)([p.A], () => p.A.getState()), [a, o] = s.useState({
        x: 0,
        y: 0
    }), c = (0, E.A)(), u = (e, t) => {
        var i, s, r, o, d, u, m, A;
        if (e.enabled && !1 === l.enabled && (n(!0), (0, _.Ak)("poggermode_enabled"), (0, g.fO)({
                duration: 2e3,
                intensity: e.shakeIntensity ?? l.shakeIntensity
            })), (0, x.O9)(e), null == t) return;
        let h = (i = l.confettiEnabled, s = e.confettiEnabled, r = l.enabled, o = e.enabled, (s ?? i) && (o ?? r));
        0 === t && h && c.fire(a.x, a.y, {
            settings: e
        });
        let p = (d = l.screenshakeEnabled, u = e.screenshakeEnabled, m = l.enabled, A = e.enabled, (u ?? d) && (A ?? m));
        1 === t && p && (0, g.fO)({
            duration: 1e3,
            intensity: e.shakeIntensity ?? l.shakeIntensity
        })
    }, m = e => {
        o({
            x: e.clientX,
            y: e.clientY
        })
    };
    return s.useEffect(() => (window.addEventListener("mousemove", m), () => window.removeEventListener("mousemove", m)), []), (0, i.jsxs)(d.BJc, {
        gap: 24,
        children: [(0, i.jsx)(R, {
            settings: l,
            updateSettings: u
        }), (0, i.jsx)(G, {
            onChangePage: t
        }), (0, i.jsx)(D, {
            settings: l,
            updateSettings: u
        }), (0, i.jsx)(L, {
            settings: l,
            updateSettings: u
        }), (0, i.jsx)(P, {
            settings: l,
            updateSettings: u
        }), (0, i.jsx)(M, {
            updateSettings: u
        })]
    })
}
let V = e => 0 === e ? u.f.LEFT : u.f.RIGHT;

function w() {
    let [e, t] = s.useState(0), [n, l] = s.useState(V(e)), [a, o] = s.useState(!1), _ = (0, r.bG)([c.A], () => c.A.useReducedMotion), m = a && !_;
    return s.useEffect(() => {
        let t = setTimeout(() => {
            l(V(e))
        }, 500);
        return () => clearTimeout(t)
    }, [e]), s.useEffect(() => {
        Math.random() > .99 && (0, A._)(h.sn.VISITOR_100)
    }, []), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.A, {
            className: f.l3,
            step: e,
            direction: n,
            children: ((e, t, n) => {
                let s = e => () => {
                    t(e)
                };
                switch (e) {
                    case 0:
                        return (0, i.jsx)(k, {
                            onChangePage: s(1),
                            setShowEnableAnimation: n
                        });
                    case 1:
                        return (0, i.jsx)(T.A, {
                            onBackClick: s(0)
                        });
                    default:
                        return null
                }
            })(e, t, o)
        }), (0, i.jsx)("div", {
            className: m ? f.Sr : f.IP,
            children: (0, i.jsx)(d.akl, {
                className: f.gT,
                importData: U,
                shouldAnimate: m,
                autoplay: !1,
                resetOnPlay: !0,
                loop: !1,
                onComplete: () => o(!1)
            })
        })]
    })
}