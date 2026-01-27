/** Chunk was on web.js **/
/** chunk id: 582322, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(397927),
    l = n(942857),
    c = n(77729),
    u = n(313961),
    d = n(267102),
    f = n(85563),
    p = n(130412),
    _ = n(239466),
    h = n(155545),
    m = n(797820),
    g = n(561155),
    E = n(803102),
    y = n(723702),
    b = n(837921),
    O = n(985018),
    v = n(551580);
let A = "#ffffff",
    I = e => b.Ay.close(e),
    S = e => b.Ay.minimize(e),
    T = (e, t) => {
        (0, y.isMac)() && !t.altKey ? b.Ay.fullscreen(e) : b.Ay.maximize(e)
    },
    C = e => {
        let {
            children: t,
            windowKey: n,
            themeOverride: i,
            hasOpenLayer: o
        } = e, l = (0, r.jsx)(s.DUT, {
            className: v.d1,
            onClick: () => I(n),
            "aria-label": O.intl.string(O.t.ZdNUj2),
            tabIndex: -1,
            children: (0, r.jsx)(p.A, {})
        }), c = (0, r.jsx)(s.DUT, {
            className: v.T0,
            onClick: e => T(n, e),
            "aria-label": O.intl.string(O.t.G1u0hK),
            tabIndex: -1,
            children: (0, r.jsx)(h.A, {})
        }), u = (0, r.jsx)(s.DUT, {
            className: v.T0,
            onClick: () => S(n),
            "aria-label": O.intl.string(O.t.CxOC4U),
            tabIndex: -1,
            children: (0, r.jsx)(g.A, {})
        }), d = (0, r.jsxs)(r.Fragment, {
            children: [l, c, u]
        });
        return (0, r.jsx)(s.NPJ, {
            theme: i,
            children: e => (0, r.jsxs)("div", {
                className: a()(v._B, e, {
                    [v.N_]: !o
                }),
                children: [(0, r.jsx)("div", {
                    className: v.X1,
                    children: (0, r.jsx)(f.A, {})
                }), t, d]
            })
        })
    },
    N = e => {
        let {
            focused: t,
            windowKey: n,
            frame: i,
            themeOverride: o,
            hasOpenLayer: l,
            children: u
        } = e;
        return (0, r.jsx)(s.NPJ, {
            theme: o,
            children: e => (0, r.jsxs)(s.DUT, {
                className: a()(i ? v.zY : v.kE, t ? v.in : v.Vn, e, {
                    [v.N_]: !l
                }),
                onDoubleClick: () => b.Ay.maximize(n),
                tabIndex: -1,
                children: [c.A.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? u : (0, r.jsxs)("div", {
                    className: v.lY,
                    children: [(0, r.jsx)(s.DUT, {
                        className: v.gV,
                        onClick: () => I(n),
                        "aria-label": O.intl.string(O.t.ZdNUj2),
                        tabIndex: -1,
                        children: (0, r.jsx)(_.A, {
                            color: "#4c0000"
                        })
                    }), (0, r.jsx)(s.DUT, {
                        className: v.wv,
                        onClick: () => S(n),
                        "aria-label": O.intl.string(O.t.CxOC4U),
                        tabIndex: -1,
                        children: (0, r.jsx)(E.A, {
                            color: "#975500"
                        })
                    }), (0, r.jsx)(s.DUT, {
                        className: v.KH,
                        onClick: e => T(n, e),
                        "aria-label": O.intl.string(O.t["2nM3Pk"]),
                        tabIndex: -1,
                        children: (0, r.jsx)(m.A, {
                            color: "#006500"
                        })
                    })]
                }), i ? (0, r.jsx)("div", {
                    className: v.Th,
                    children: (0, r.jsx)(f.A, {
                        color: A
                    })
                }) : null]
            })
        })
    };

function w(e) {
    let {
        focused: t,
        type: n,
        windowKey: i,
        macOSFrame: a = !1,
        themeOverride: s
    } = e, c = (0, d.Us)(), f = (0, o.bG)([u.A], () => u.A.isFullscreenInContext(c)), p = (0, l.A)();
    if (f) return null;
    switch (n) {
        case y.PlatformTypes.WINDOWS:
            return (0, r.jsx)(C, {
                windowKey: i,
                themeOverride: s,
                hasOpenLayer: p
            });
        case y.PlatformTypes.OSX:
            return (0, r.jsx)(N, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: s,
                hasOpenLayer: p
            });
        default:
            return null
    }
}