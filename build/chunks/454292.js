/** chunk id: 454292, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H
});
var i = n(627968),
    s = n(64700),
    a = n(735438),
    l = n(311907),
    r = n(827734),
    o = n(314116),
    c = n(397927),
    d = n(775602),
    u = n(725951),
    _ = n(400492),
    m = n(12901),
    A = n(115063),
    g = n(414736),
    h = n(927018),
    x = n(928830),
    p = n(3137),
    E = n(301656),
    C = n(224964),
    T = n(31408),
    S = n(985018),
    I = n(988288);
let f = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    N = (0, a.range)(0, 11),
    b = (0, a.range)(0, 2.25, .25),
    j = (0, a.range)(1, 11),
    v = (0, a.range)(1, 26);

function O(e) {
    let {
        disabled: t,
        locations: n,
        settingsLocations: s,
        onChange: a
    } = e, l = n.map(e => (0, i.jsx)(c.dOG, {
        label: e.title,
        description: e.description,
        checked: s[e.location],
        disabled: t,
        onChange: t => a({
            ...s,
            [e.location]: t
        })
    }, e.location));
    return (0, i.jsx)(c.nVY, {
        label: S.intl.string(S.t.bWVN1D),
        children: l
    })
}

function R(e) {
    let {
        children: t
    } = e;
    return (0, i.jsx)(c.Text, {
        className: I.iF,
        variant: "text-sm/normal",
        color: "text-default",
        children: t
    })
}

function y(e) {
    let {
        settings: {
            enabled: t,
            warningSeen: n
        },
        updateSettings: s
    } = e, a = (0, l.bG)([d.A], () => d.A.useReducedMotion);
    return (0, i.jsx)(c.dOG, {
        label: S.intl.string(S.t.vuiXm9),
        description: S.intl.string(S.t.KuYbWN),
        checked: t,
        onChange: e => {
            e || (0, g._)(h.sn.DISABLE_POGGERMODE), e && (!n || a) ? (0, o.A)({
                title: a ? S.intl.string(S.t["FxT+p0"]) : S.intl.string(S.t.TAZ4F9),
                subtitle: a ? S.intl.string(S.t.gmixrx) : S.intl.string(S.t.jN3t3K),
                confirmText: S.intl.string(S.t.JFfins),
                onConfirm: () => s(a ? f : {
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
            confettiSize: a,
            confettiEnabledLocations: l
        },
        updateSettings: r
    } = e, o = !t || !n;
    return (0, i.jsxs)(c.nVY, {
        label: S.intl.string(S.t.mqxwJO),
        children: [(0, i.jsx)(c.dOG, {
            label: S.intl.string(S.t.s0KCgF),
            description: S.intl.string(S.t.O1Vflg),
            checked: n,
            disabled: !t,
            onChange: e => r({
                confettiEnabled: e
            }, 0)
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: o ? "text-muted" : "text-strong",
                className: I.KF,
                children: S.intl.string(S.t.vd0D81)
            }), (0, i.jsx)(R, {
                children: S.intl.string(S.t.a18Sug)
            }), (0, i.jsx)(c.Apm, {
                disabled: o,
                markers: j,
                stickToMarkers: !0,
                minValue: j[0],
                maxValue: j[j.length - 1],
                initialValue: s,
                onValueChange: e => r({
                    confettiCount: e
                }, 0),
                onValueRender: e => `${e}`
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: o ? "text-muted" : "text-strong",
                className: I.KF,
                children: S.intl.string(S.t.sPO3ij)
            }), (0, i.jsx)(R, {
                children: S.intl.string(S.t.xoldVn)
            }), (0, i.jsx)(c.Apm, {
                disabled: o,
                markers: v,
                stickToMarkers: !0,
                minValue: v[0],
                maxValue: v[v.length - 1],
                initialValue: a,
                onValueChange: e => r({
                    confettiSize: e
                }, 0),
                onValueRender: e => `${e}`
            })]
        }), (0, i.jsx)(O, {
            disabled: o,
            locations: [{
                location: T.k.CHAT_INPUT,
                title: S.intl.string(S.t.elTtyz),
                description: S.intl.string(S.t.HtKfMi)
            }, {
                location: T.k.REACTION,
                title: S.intl.string(S.t.Ik4VIa),
                description: S.intl.string(S.t.y4rqK0)
            }, {
                location: T.k.MEMBER_USER,
                title: S.intl.string(S.t.ZXBlAn),
                description: S.intl.string(S.t["m9RD+c"])
            }, {
                location: T.k.CALL_TILE,
                title: S.intl.string(S.t.V66giQ),
                description: S.intl.string(S.t.fiHV7u)
            }],
            settingsLocations: l,
            onChange: e => r({
                confettiEnabledLocations: e
            }, 0)
        })]
    })
}

function L(e) {
    let {
        settings: {
            enabled: t,
            combosEnabled: n,
            comboSoundsEnabled: s,
            combosRequiredCount: a
        },
        updateSettings: l
    } = e, r = !t || !n;
    return (0, i.jsxs)(c.nVY, {
        label: S.intl.string(S.t.Xz0ole),
        children: [(0, i.jsx)(c.dOG, {
            label: S.intl.string(S.t.o3iV7B),
            description: S.intl.string(S.t["31Z8Ee"]),
            checked: n,
            disabled: !t,
            onChange: e => l({
                combosEnabled: e
            })
        }), (0, i.jsx)(c.dOG, {
            label: S.intl.string(S.t["Ax+IoW"]),
            description: S.intl.string(S.t["9rgQEr"]),
            checked: s,
            disabled: !t,
            onChange: e => l({
                comboSoundsEnabled: e
            })
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: r ? "text-muted" : "text-strong",
                className: I.KF,
                children: S.intl.string(S.t.L0oQuh)
            }), (0, i.jsx)(R, {
                children: S.intl.string(S.t["/OOFpL"])
            }), (0, i.jsx)(c.Apm, {
                disabled: r,
                markers: N,
                stickToMarkers: !0,
                minValue: N[0],
                maxValue: N[N.length - 1],
                initialValue: a,
                onValueChange: e => l({
                    combosRequiredCount: e
                }),
                onValueRender: e => `${e}`
            })]
        })]
    })
}

function D(e) {
    let {
        settings: {
            enabled: t,
            screenshakeEnabled: n,
            shakeIntensity: s,
            screenshakeEnabledLocations: a
        },
        updateSettings: r
    } = e, o = (0, l.bG)([d.A], () => d.A.useReducedMotion), u = !t || !n || o;
    return (0, i.jsxs)(c.nVY, {
        label: S.intl.string(S.t.wVS5Sd),
        children: [(0, i.jsx)(c.dOG, {
            label: S.intl.string(S.t.N004zO),
            description: o ? S.intl.string(S.t.GckHGw) : S.intl.string(S.t.Qq5W3v),
            checked: n && !o,
            disabled: !t || o,
            onChange: e => r({
                screenshakeEnabled: e
            }, 1)
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: u ? "text-muted" : "text-strong",
                className: I.KF,
                children: S.intl.string(S.t.UxnnC4)
            }), (0, i.jsx)(R, {
                children: S.intl.string(S.t.CEOEOb)
            }), (0, i.jsx)(c.Apm, {
                disabled: u,
                markers: b,
                equidistant: !0,
                stickToMarkers: !0,
                minValue: b[0],
                maxValue: b[b.length - 1],
                initialValue: s,
                onValueChange: e => {
                    var t;
                    null != (t = {
                        shakeIntensity: e
                    }).shakeIntensity && t.shakeIntensity > s && (0, g._)(h.sn.MORE), r(t, 1)
                },
                onMarkerRender: e => e === b[b.length - 1] ? S.intl.string(S.t["4rbMWc"]) : `${100*e}%`
            })]
        }), (0, i.jsx)(O, {
            disabled: u,
            locations: [{
                location: T.uD.CHAT_INPUT,
                title: S.intl.string(S.t.vUcvPP),
                description: S.intl.string(S.t.y00OrF)
            }, {
                location: T.uD.VOICE_USER,
                title: S.intl.string(S.t.TcRO54),
                description: S.intl.string(S.t.YJCxVY)
            }, {
                location: T.uD.MENTION,
                title: S.intl.string(S.t.oW4shO),
                description: S.intl.string(S.t["mqfw/H"])
            }],
            settingsLocations: a,
            onChange: e => r({
                screenshakeEnabledLocations: e
            }, 1)
        })]
    })
}

function M(e) {
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
                className: I.hw,
                children: (0, i.jsx)(c.Button, {
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
    return (0, i.jsxs)(c.DUT, {
        onClick: () => t(1),
        className: I.Tq,
        children: [(0, i.jsx)("div", {
            className: I.w1,
            children: (0, i.jsx)(c.OR, {
                size: "md",
                color: r.A.unsafe_rawColors.ORANGE_345.css
            })
        }), (0, i.jsxs)("div", {
            className: I.qL,
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
            className: I.nT
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
    } = e, a = (0, l.cf)([p.A], () => p.A.getState()), [r, o] = s.useState({
        x: 0,
        y: 0
    }), d = (0, C.A)(), u = (e, t) => {
        var i, s, l, o, c, u, m, g;
        if (e.enabled && !1 === a.enabled && (n(!0), (0, _.Ak)("poggermode_enabled"), (0, A.fO)({
                duration: 2e3,
                intensity: e.shakeIntensity ?? a.shakeIntensity
            })), (0, x.O9)(e), null == t) return;
        let h = (i = a.confettiEnabled, s = e.confettiEnabled, l = a.enabled, o = e.enabled, (s ?? i) && (o ?? l));
        0 === t && h && d.fire(r.x, r.y, {
            settings: e
        });
        let p = (c = a.screenshakeEnabled, u = e.screenshakeEnabled, m = a.enabled, g = e.enabled, (u ?? c) && (g ?? m));
        1 === t && p && (0, A.fO)({
            duration: 1e3,
            intensity: e.shakeIntensity ?? a.shakeIntensity
        })
    }, m = e => {
        o({
            x: e.clientX,
            y: e.clientY
        })
    };
    return s.useEffect(() => (window.addEventListener("mousemove", m), () => window.removeEventListener("mousemove", m)), []), (0, i.jsxs)(c.BJc, {
        gap: 24,
        children: [(0, i.jsx)(y, {
            settings: a,
            updateSettings: u
        }), (0, i.jsx)(G, {
            onChangePage: t
        }), (0, i.jsx)(L, {
            settings: a,
            updateSettings: u
        }), (0, i.jsx)(D, {
            settings: a,
            updateSettings: u
        }), (0, i.jsx)(P, {
            settings: a,
            updateSettings: u
        }), (0, i.jsx)(M, {
            updateSettings: u
        })]
    })
}
let V = e => 0 === e ? u.f.LEFT : u.f.RIGHT;

function H() {
    let [e, t] = s.useState(0), [n, a] = s.useState(V(e)), [r, o] = s.useState(!1), _ = (0, l.bG)([d.A], () => d.A.useReducedMotion), m = r && !_;
    return s.useEffect(() => {
        let t = setTimeout(() => {
            a(V(e))
        }, 500);
        return () => clearTimeout(t)
    }, [e]), s.useEffect(() => {
        Math.random() > .99 && (0, g._)(h.sn.VISITOR_100)
    }, []), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.A, {
            className: I.l3,
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
                        return (0, i.jsx)(E.A, {
                            onBackClick: s(0)
                        });
                    default:
                        return null
                }
            })(e, t, o)
        }), (0, i.jsx)("div", {
            className: m ? I.Sr : I.IP,
            children: (0, i.jsx)(c.akl, {
                className: I.gT,
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