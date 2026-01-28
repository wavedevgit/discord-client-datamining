/** Chunk was on 78572 **/
/** chunk id: 968898, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CS: () => E,
    GQ: () => w,
    O0: () => N,
    Pl: () => S,
    RE: () => x,
    X1: () => j,
    we: () => P
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(391973),
    p = n(684013),
    f = n(964486),
    m = n(555528),
    g = n(810412),
    y = n(302614),
    b = n(395011),
    _ = n(119191),
    h = n(581730),
    A = n(481484),
    v = n(985018),
    O = n(859804);

function S(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: O.oB,
        children: (0, r.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}
let j = 7e3;

function x(e, t) {
    return I((0, s.bG)([m.A], () => m.A.getWidget(e), [e]), t)
}

function I(e, t) {
    let n = i.useRef(null == e ? void 0 : e.showExtrasHintTimestamp),
        [r, l] = i.useState(!1),
        a = (0, A.A)(),
        s = i.useRef(void 0);
    return i.useEffect(() => {
        let r = null == e ? void 0 : e.showExtrasHintTimestamp;
        r !== n.current && (n.current = r, l(!0), s.current = setTimeout(() => {
            l(!1)
        }, t))
    }, [t, null == e ? void 0 : e.showExtrasHintTimestamp]), (0, f.Ay)(() => {
        let n = null == e ? void 0 : e.showExtrasHintTimestamp;
        return null != n && Date.now() - n < t && (l(!0), s.current = setTimeout(() => {
            l(!1)
        }, t)), () => {
            null != s.current && clearTimeout(s.current)
        }
    }), r && a
}
let T = 8e3;

function P(e) {
    let {
        children: t,
        widgetId: n
    } = e, i = (0, s.bG)([m.A], () => m.A.getWidget(n), [n]);
    return I(i, T) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(y.A, {
            className: O.Z,
            children: (0, r.jsx)(u.DUT, {
                className: O.SM,
                onClick: () => {
                    null != i && (p.A.setInputLocked(!1, b.A.getTargetPID()), (0, g.YX)(i.type, {
                        type: g.Z5.KEYBIND_HINT,
                        value: g.IP.OVERLAY_UNLOCKED
                    }))
                },
                children: (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: (0, _.sI)((0, h.Jn)(), v.t["1XA04X"], v.intl.string(v.t.uZZGzf), {
                        useFlexboxLayout: !0,
                        highlightAdminWarningIfElevated: !1,
                        keybindClassName: O.P
                    })
                })
            })
        }), (0, r.jsx)("div", {
            className: O.Xk
        })]
    }) : (0, r.jsx)("div", {
        className: O.oB,
        children: (0, r.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}

function E(e) {
    let {
        onClick: t
    } = e;
    if ((0, A.A)()) return null;
    let n = v.intl.string(v.t["3D5yo/"]);
    return (0, r.jsx)(c.m, {
        text: n,
        "aria-label": n,
        children: (0, r.jsx)(u.DUT, {
            className: O.x6,
            onClick: t,
            children: (0, r.jsx)(u.Zes, {
                size: "xxs",
                color: o.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function w(e) {
    let {
        widgetId: t,
        showAllStreams: n
    } = e, i = n ? v.intl.string(v.t.q2B3rh) : v.intl.string(v.t.JKGi6o);
    return (0, A.A)() ? null : (0, r.jsx)(c.m, {
        text: i,
        "aria-label": i,
        children: (0, r.jsx)(u.DUT, {
            className: a()(O.x6, n && O.vu),
            onClick: () => {
                (0, d.cC)(t, {
                    showAllStreams: !n
                })
            },
            children: (0, r.jsx)(u.kN9, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function N(e) {
    let {
        id: t,
        pinned: n
    } = e, i = n ? v.intl.string(v.t.cSu80j) : v.intl.string(v.t.cM8Vnm), l = (0, A.A)();
    return (0, r.jsx)(c.m, {
        text: i,
        "aria-label": i,
        asContainer: !0,
        children: (0, r.jsx)(u.DUT, {
            className: a()(O.x6, n && O.vu),
            onClick: () => {
                l || (0, d.v0)(t)
            },
            children: (0, r.jsx)(u.qgw, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}