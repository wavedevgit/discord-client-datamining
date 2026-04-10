/** chunk id: 968898 params = (module,exports,require) **/
n.d(t, {
    CS: () => R,
    GQ: () => D,
    O0: () => b,
    Pl: () => T,
    RE: () => C,
    X1: () => N,
    we: () => M
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(827734),
    u = n(990078),
    d = n(397927),
    c = n(391973),
    h = n(684013),
    g = n(964486),
    m = n(555528),
    f = n(810412),
    A = n(302614),
    I = n(395011),
    E = n(119191),
    p = n(581730),
    _ = n(481484),
    S = n(985018),
    x = n(784003);

function T(e) {
    let {
        children: t
    } = e;
    return (0, i.jsx)("div", {
        className: x.oB,
        children: (0, i.jsx)(d.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t
        })
    })
}
let N = 7e3;

function C(e, t) {
    return v((0, a.bG)([m.A], () => m.A.getWidget(e), [e]), t)
}

function v(e, t) {
    let n = l.useRef(e?.showExtrasHintTimestamp),
        [i, r] = l.useState(!1),
        s = (0, _.A)(),
        a = l.useRef(void 0);
    return l.useEffect(() => {
        let i = e?.showExtrasHintTimestamp;
        i !== n.current && (n.current = i, r(!0), a.current = setTimeout(() => {
            r(!1)
        }, t))
    }, [t, e?.showExtrasHintTimestamp]), (0, g.Ay)(() => {
        let n = e?.showExtrasHintTimestamp;
        return null != n && Date.now() - n < t && (r(!0), a.current = setTimeout(() => {
            r(!1)
        }, t)), () => {
            null != a.current && clearTimeout(a.current)
        }
    }), i && s
}
let y = 8e3;

function M(e) {
    let {
        children: t,
        widgetId: n
    } = e, l = (0, a.bG)([m.A], () => m.A.getWidget(n), [n]);
    return v(l, y) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(A.A, {
            className: x.Z,
            children: (0, i.jsx)(d.DUT, {
                className: x.SM,
                onClick: () => {
                    null != l && (h.A.setInputLocked(!1, I.A.getTargetPID()), (0, f.YX)(l.type, {
                        type: f.Z5.KEYBIND_HINT,
                        value: f.IP.OVERLAY_UNLOCKED
                    }))
                },
                children: (0, i.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: (0, E.sI)((0, p.Jn)(), S.t["1XA04X"], {
                        useFlexboxLayout: !0,
                        highlightAdminWarningIfElevated: !1,
                        keybindClassName: x.P
                    })
                })
            })
        }), (0, i.jsx)("div", {
            className: x.Xk
        })]
    }) : (0, i.jsx)("div", {
        className: x.oB,
        children: (0, i.jsx)(d.Text, {
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
    if ((0, _.A)()) return null;
    let n = S.intl.string(S.t["3D5yo/"]);
    return (0, i.jsx)(u.m, {
        text: n,
        "aria-label": n,
        children: (0, i.jsx)(d.DUT, {
            className: x.x6,
            onClick: t,
            children: (0, i.jsx)(d.Zes, {
                size: "xxs",
                color: o.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function D(e) {
    let {
        widgetId: t,
        showAllStreams: n
    } = e, l = n ? S.intl.string(S.t.q2B3rh) : S.intl.string(S.t.JKGi6o);
    return (0, _.A)() ? null : (0, i.jsx)(u.m, {
        text: l,
        "aria-label": l,
        children: (0, i.jsx)(d.DUT, {
            className: s()(x.x6, n && x.vu),
            onClick: () => {
                (0, c.cC)(t, {
                    showAllStreams: !n
                })
            },
            children: (0, i.jsx)(d.kN9, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}

function b(e) {
    let {
        id: t,
        pinned: n
    } = e, l = n ? S.intl.string(S.t.cSu80j) : S.intl.string(S.t.cM8Vnm), r = (0, _.A)();
    return (0, i.jsx)(u.m, {
        text: l,
        "aria-label": l,
        asContainer: !0,
        children: (0, i.jsx)(d.DUT, {
            className: s()(x.x6, n && x.vu),
            onClick: () => {
                r || (0, c.v0)(t)
            },
            children: (0, i.jsx)(d.qgw, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE
            })
        })
    })
}