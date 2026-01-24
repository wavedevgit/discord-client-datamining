/** Chunk was on web.js **/
/** chunk id: 968898, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    CS: () => R,
    GQ: () => P,
    O0: () => D,
    Pl: () => A,
    RE: () => S,
    X1: () => I,
    we: () => w
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(391973),
    f = n(684013),
    p = n(964486),
    _ = n(555528),
    h = n(810412),
    m = n(302614),
    g = n(395011),
    E = n(119191),
    y = n(581730),
    b = n(481484),
    O = n(985018),
    v = n(859804);

function A(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: v.oB,
        children: (0, r.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}
let I = 7e3;

function S(e, t) {
    return C((0, o.bG)([_.A], () => _.A.getWidget(e), [e]), t)
}
let T = (e, t) => Date.now() - e < t;

function C(e, t) {
    let n = i.useRef(null == e ? void 0 : e.showExtrasHintTimestamp),
        [r, a] = i.useState(!1),
        s = (0, b.A)(),
        o = i.useRef(void 0);
    return i.useEffect(() => {
        let r = null == e ? void 0 : e.showExtrasHintTimestamp;
        r !== n.current && (n.current = r, a(!0), o.current = setTimeout(() => {
            a(!1)
        }, t))
    }, [t, null == e ? void 0 : e.showExtrasHintTimestamp]), (0, p.Ay)(() => {
        let n = null == e ? void 0 : e.showExtrasHintTimestamp;
        return null != n && T(n, t) && (a(!0), o.current = setTimeout(() => {
            a(!1)
        }, t)), () => {
            null != o.current && clearTimeout(o.current)
        }
    }), r && s
}
let N = 8e3;

function w(e) {
    let {
        children: t,
        widgetId: n
    } = e, i = (0, o.bG)([_.A], () => _.A.getWidget(n), [n]), a = C(i, N), s = () => (0, E.sI)((0, y.Jn)(), O.t["1XA04X"], O.intl.string(O.t.uZZGzf), {
        useFlexboxLayout: !0,
        highlightAdminWarningIfElevated: !1,
        keybindClassName: v.P
    });
    return a ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.A, {
            className: v.Z,
            children: (0, r.jsx)(u.DUT, {
                className: v.SM,
                onClick: () => {
                    null != i && (f.A.setInputLocked(!1, g.A.getTargetPID()), (0, h.YX)(i.type, {
                        type: h.Z5.KEYBIND_HINT,
                        value: h.IP.OVERLAY_UNLOCKED
                    }))
                },
                children: (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: s()
                })
            })
        }), (0, r.jsx)("div", {
            className: v.Xk
        })]
    }) : (0, r.jsx)("div", {
        className: v.oB,
        children: (0, r.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}

function R(e) {
    let {
        onClick: t
    } = e;
    if ((0, b.A)()) return null;
    let n = O.intl.string(O.t["3D5yo/"]);
    return (0, r.jsx)(c.m, {
        text: n,
        "aria-label": n,
        children: (0, r.jsx)(u.DUT, {
            className: v.x6,
            onClick: t,
            children: (0, r.jsx)(u.Zes, {
                size: "xxs",
                color: l.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function P(e) {
    let {
        widgetId: t,
        showAllStreams: n
    } = e, i = n ? O.intl.string(O.t.q2B3rh) : O.intl.string(O.t.JKGi6o), a = () => {
        (0, d.cC)(t, {
            showAllStreams: !n
        })
    };
    return (0, b.A)() ? null : (0, r.jsx)(c.m, {
        text: i,
        "aria-label": i,
        children: (0, r.jsx)(u.DUT, {
            className: s()(v.x6, n && v.vu),
            onClick: a,
            children: (0, r.jsx)(u.kN9, {
                size: "xxs",
                color: n ? l.A.colors.BACKGROUND_BRAND : l.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function D(e) {
    let {
        id: t,
        pinned: n
    } = e, i = n ? O.intl.string(O.t.cSu80j) : O.intl.string(O.t.cM8Vnm), a = (0, b.A)();
    return (0, r.jsx)(c.m, {
        text: i,
        "aria-label": i,
        asContainer: !0,
        children: (0, r.jsx)(u.DUT, {
            className: s()(v.x6, n && v.vu),
            onClick: () => {
                a || (0, d.v0)(t)
            },
            children: (0, r.jsx)(u.qgw, {
                size: "xxs",
                color: n ? l.A.colors.BACKGROUND_BRAND : l.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}