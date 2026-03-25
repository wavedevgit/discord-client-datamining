/** chunk id: 968898 params = (module,exports,require) **/
n.d(t, {
    CS: () => D,
    GQ: () => k,
    O0: () => w,
    Pl: () => y,
    RE: () => j,
    X1: () => E,
    we: () => V
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    c = n(827734),
    o = n(990078),
    d = n(397927),
    u = n(391973),
    A = n(684013),
    g = n(964486),
    h = n(555528),
    x = n(810412),
    m = n(302614),
    p = n(395011),
    f = n(119191),
    T = n(581730),
    I = n(481484),
    S = n(985018),
    v = n(859804);

function y(e) {
    let {
        children: t
    } = e;
    return (0, l.jsx)("div", {
        className: v.oB,
        children: (0, l.jsx)(d.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}
let E = 7e3;

function j(e, t) {
    return C((0, a.bG)([h.A], () => h.A.getWidget(e), [e]), t)
}

function C(e, t) {
    let n = i.useRef(e?.showExtrasHintTimestamp),
        [l, s] = i.useState(!1),
        r = (0, I.A)(),
        a = i.useRef(void 0);
    return i.useEffect(() => {
        let l = e?.showExtrasHintTimestamp;
        l !== n.current && (n.current = l, s(!0), a.current = setTimeout(() => {
            s(!1)
        }, t))
    }, [t, e?.showExtrasHintTimestamp]), (0, g.Ay)(() => {
        let n = e?.showExtrasHintTimestamp;
        return null != n && Date.now() - n < t && (s(!0), a.current = setTimeout(() => {
            s(!1)
        }, t)), () => {
            null != a.current && clearTimeout(a.current)
        }
    }), l && r
}
let N = 8e3;

function V(e) {
    let {
        children: t,
        widgetId: n
    } = e, i = (0, a.bG)([h.A], () => h.A.getWidget(n), [n]);
    return C(i, N) ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(m.A, {
            className: v.Z,
            children: (0, l.jsx)(d.DUT, {
                className: v.SM,
                onClick: () => {
                    null != i && (A.A.setInputLocked(!1, p.A.getTargetPID()), (0, x.YX)(i.type, {
                        type: x.Z5.KEYBIND_HINT,
                        value: x.IP.OVERLAY_UNLOCKED
                    }))
                },
                children: (0, l.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: (0, f.sI)((0, T.Jn)(), S.t["1XA04X"], S.intl.string(S.t.uZZGzf), {
                        useFlexboxLayout: !0,
                        highlightAdminWarningIfElevated: !1,
                        keybindClassName: v.P
                    })
                })
            })
        }), (0, l.jsx)("div", {
            className: v.Xk
        })]
    }) : (0, l.jsx)("div", {
        className: v.oB,
        children: (0, l.jsx)(d.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}

function D(e) {
    let {
        onClick: t
    } = e;
    if ((0, I.A)()) return null;
    let n = S.intl.string(S.t["3D5yo/"]);
    return (0, l.jsx)(o.m, {
        text: n,
        "aria-label": n,
        children: (0, l.jsx)(d.DUT, {
            className: v.x6,
            onClick: t,
            children: (0, l.jsx)(d.Zes, {
                size: "xxs",
                color: c.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function k(e) {
    let {
        widgetId: t,
        showAllStreams: n
    } = e, i = n ? S.intl.string(S.t.q2B3rh) : S.intl.string(S.t.JKGi6o);
    return (0, I.A)() ? null : (0, l.jsx)(o.m, {
        text: i,
        "aria-label": i,
        children: (0, l.jsx)(d.DUT, {
            className: r()(v.x6, n && v.vu),
            onClick: () => {
                (0, u.cC)(t, {
                    showAllStreams: !n
                })
            },
            children: (0, l.jsx)(d.kN9, {
                size: "xxs",
                color: n ? c.A.colors.BACKGROUND_BRAND : c.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function w(e) {
    let {
        id: t,
        pinned: n
    } = e, i = n ? S.intl.string(S.t.cSu80j) : S.intl.string(S.t.cM8Vnm), s = (0, I.A)();
    return (0, l.jsx)(o.m, {
        text: i,
        "aria-label": i,
        asContainer: !0,
        children: (0, l.jsx)(d.DUT, {
            className: r()(v.x6, n && v.vu),
            onClick: () => {
                s || (0, u.v0)(t)
            },
            children: (0, l.jsx)(d.qgw, {
                size: "xxs",
                color: n ? c.A.colors.BACKGROUND_BRAND : c.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}