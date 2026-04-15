/** chunk id: 513265 params = (module,exports,require) **/
l.d(n, {
    A: () => h
});
var i = l(627968),
    t = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(407045),
    o = l(311907),
    d = l(397927),
    c = l(775602),
    u = l(606758),
    m = l(518477),
    p = l(985018),
    x = l(439510),
    A = l(886981);
let g = {
        [m.jM.WIDGET_ADDED]: {
            message: p.intl.string(p.t.fFP1Uy),
            icon: (0, i.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_added"
        },
        [m.jM.WIDGET_REMOVED]: {
            message: p.intl.string(p.t.zzsK7h),
            icon: (0, i.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_removed"
        },
        [m.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: p.intl.string(p.t["84MExs"]),
            icon: (0, i.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_save_generic_failure",
            type: d.ToastType.FAILURE
        },
        [m.jM.SOMETHING_WENT_WRONG]: {
            message: p.intl.string(p.t.F8FvUy),
            icon: (0, i.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_something_went_wrong",
            type: d.ToastType.FAILURE
        }
    },
    f = e => {
        let {
            message: n,
            icon: l,
            type: t
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(A.oR, x.oR),
            "data-type": t,
            children: [(0, i.jsx)("div", {
                className: x.RC,
                children: l
            }), (0, i.jsx)(d.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: n
            })]
        })
    },
    h = e => {
        let {
            className: n
        } = e, l = (0, u.fu)(), s = (0, o.bG)([c.A], () => c.A.useReducedMotion), [m, p] = t.useState(!1), [A, h] = t.useState(null);
        t.useEffect(() => {
            null !== l ? (p(!0), h(g[l]), d.ORC.announce(g[l].message)) : p(!1)
        }, [l]);
        let v = (0, d.pnh)(m, {
            from: {
                transform: s ? "translateY(0)" : "translateY(-12px)",
                opacity: 0
            },
            enter: {
                transform: "translateY(0)",
                opacity: 1
            },
            leave: {
                transform: s ? "translateY(0)" : "translateY(-12px)",
                opacity: 0
            },
            config: {
                mass: 1,
                tension: 200,
                friction: 18,
                clamp: !0
            }
        }, "animate-always");
        return t.useEffect(() => () => (0, u.XA)(null), []), t.useEffect(() => {
            if (m) {
                let e = setTimeout(() => {
                    (0, u.XA)(null)
                }, 2e3);
                return () => clearTimeout(e)
            }
        }, [m]), (0, i.jsx)(i.Fragment, {
            children: v((e, l) => l && null !== A && (0, i.jsx)(r.animated.div, {
                className: a()(n, x.Jt),
                style: e,
                children: (0, i.jsx)(f, {
                    ...A
                })
            }))
        })
    }