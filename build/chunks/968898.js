/** chunk id: 968898, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CS: () => T,
    GQ: () => N,
    O0: () => w,
    Pl: () => S,
    RE: () => x,
    X1: () => j,
    we: () => E
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
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
    A = n(581730),
    h = n(481484),
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
    let n = l.useRef(null == e ? void 0 : e.showExtrasHintTimestamp),
        [r, i] = l.useState(!1),
        a = (0, h.A)(),
        s = l.useRef(void 0);
    return l.useEffect(() => {
        let r = null == e ? void 0 : e.showExtrasHintTimestamp;
        r !== n.current && (n.current = r, i(!0), s.current = setTimeout(() => {
            i(!1)
        }, t))
    }, [t, null == e ? void 0 : e.showExtrasHintTimestamp]), (0, f.Ay)(() => {
        let n = null == e ? void 0 : e.showExtrasHintTimestamp;
        return null != n && Date.now() - n < t && (i(!0), s.current = setTimeout(() => {
            i(!1)
        }, t)), () => {
            null != s.current && clearTimeout(s.current)
        }
    }), r && a
}
let P = 8e3;

function E(e) {
    let {
        children: t,
        widgetId: n
    } = e, l = (0, s.bG)([m.A], () => m.A.getWidget(n), [n]);
    return I(l, P) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(y.A, {
            className: O.Z,
            children: (0, r.jsx)(u.DUT, {
                className: O.SM,
                onClick: () => {
                    null != l && (p.A.setInputLocked(!1, b.A.getTargetPID()), (0, g.YX)(l.type, {
                        type: g.Z5.KEYBIND_HINT,
                        value: g.IP.OVERLAY_UNLOCKED
                    }))
                },
                children: (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: (0, _.sI)((0, A.Jn)(), v.t["1XA04X"], v.intl.string(v.t.uZZGzf), {
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

function T(e) {
    let {
        onClick: t
    } = e;
    if ((0, h.A)()) return null;
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

function N(e) {
    let {
        widgetId: t,
        showAllStreams: n
    } = e, l = n ? v.intl.string(v.t.q2B3rh) : v.intl.string(v.t.JKGi6o);
    return (0, h.A)() ? null : (0, r.jsx)(c.m, {
        text: l,
        "aria-label": l,
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

function w(e) {
    let {
        id: t,
        pinned: n
    } = e, l = n ? v.intl.string(v.t.cSu80j) : v.intl.string(v.t.cM8Vnm), i = (0, h.A)();
    return (0, r.jsx)(c.m, {
        text: l,
        "aria-label": l,
        asContainer: !0,
        children: (0, r.jsx)(u.DUT, {
            className: a()(O.x6, n && O.vu),
            onClick: () => {
                i || (0, d.v0)(t)
            },
            children: (0, r.jsx)(u.qgw, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}