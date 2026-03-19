/** chunk id: 968898 params = (module,exports,require) **/
i.d(t, {
    CS: () => w,
    GQ: () => _,
    O0: () => D,
    Pl: () => y,
    RE: () => V,
    X1: () => N,
    we: () => C
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(311907),
    d = i(827734),
    o = i(990078),
    u = i(397927),
    c = i(391973),
    A = i(684013),
    m = i(964486),
    g = i(555528),
    h = i(810412),
    x = i(302614),
    p = i(395011),
    f = i(119191),
    I = i(581730),
    S = i(481484),
    E = i(985018),
    v = i(335898);

function y(e) {
    let {
        children: t
    } = e;
    return (0, n.jsx)("div", {
        className: v.oB,
        children: (0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}
let N = 7e3;

function V(e, t) {
    return T((0, r.bG)([g.A], () => g.A.getWidget(e), [e]), t)
}

function T(e, t) {
    let i = s.useRef(e?.showExtrasHintTimestamp),
        [n, l] = s.useState(!1),
        a = (0, S.A)(),
        r = s.useRef(void 0);
    return s.useEffect(() => {
        let n = e?.showExtrasHintTimestamp;
        n !== i.current && (i.current = n, l(!0), r.current = setTimeout(() => {
            l(!1)
        }, t))
    }, [t, e?.showExtrasHintTimestamp]), (0, m.Ay)(() => {
        let i = e?.showExtrasHintTimestamp;
        return null != i && Date.now() - i < t && (l(!0), r.current = setTimeout(() => {
            l(!1)
        }, t)), () => {
            null != r.current && clearTimeout(r.current)
        }
    }), n && a
}
let j = 8e3;

function C(e) {
    let {
        children: t,
        widgetId: i
    } = e, s = (0, r.bG)([g.A], () => g.A.getWidget(i), [i]);
    return T(s, j) ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(x.A, {
            className: v.Z,
            children: (0, n.jsx)(u.DUT, {
                className: v.SM,
                onClick: () => {
                    null != s && (A.A.setInputLocked(!1, p.A.getTargetPID()), (0, h.YX)(s.type, {
                        type: h.Z5.KEYBIND_HINT,
                        value: h.IP.OVERLAY_UNLOCKED
                    }))
                },
                children: (0, n.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: (0, f.sI)((0, I.Jn)(), E.t["1XA04X"], E.intl.string(E.t.uZZGzf), {
                        useFlexboxLayout: !0,
                        highlightAdminWarningIfElevated: !1,
                        keybindClassName: v.P
                    })
                })
            })
        }), (0, n.jsx)("div", {
            className: v.Xk
        })]
    }) : (0, n.jsx)("div", {
        className: v.oB,
        children: (0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}

function w(e) {
    let {
        onClick: t
    } = e;
    if ((0, S.A)()) return null;
    let i = E.intl.string(E.t["3D5yo/"]);
    return (0, n.jsx)(o.m, {
        text: i,
        "aria-label": i,
        children: (0, n.jsx)(u.DUT, {
            className: v.x6,
            onClick: t,
            children: (0, n.jsx)(u.Zes, {
                size: "xxs",
                color: d.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function _(e) {
    let {
        widgetId: t,
        showAllStreams: i
    } = e, s = i ? E.intl.string(E.t.q2B3rh) : E.intl.string(E.t.JKGi6o);
    return (0, S.A)() ? null : (0, n.jsx)(o.m, {
        text: s,
        "aria-label": s,
        children: (0, n.jsx)(u.DUT, {
            className: a()(v.x6, i && v.vu),
            onClick: () => {
                (0, c.cC)(t, {
                    showAllStreams: !i
                })
            },
            children: (0, n.jsx)(u.kN9, {
                size: "xxs",
                color: i ? d.A.colors.BACKGROUND_BRAND : d.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function D(e) {
    let {
        id: t,
        pinned: i
    } = e, s = i ? E.intl.string(E.t.cSu80j) : E.intl.string(E.t.cM8Vnm), l = (0, S.A)();
    return (0, n.jsx)(o.m, {
        text: s,
        "aria-label": s,
        asContainer: !0,
        children: (0, n.jsx)(u.DUT, {
            className: a()(v.x6, i && v.vu),
            onClick: () => {
                l || (0, c.v0)(t)
            },
            children: (0, n.jsx)(u.qgw, {
                size: "xxs",
                color: i ? d.A.colors.BACKGROUND_BRAND : d.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}