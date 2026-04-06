/** chunk id: 513265 params = (module,exports,require) **/
t.d(l, {
    A: () => h
});
var n = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(687498),
    o = t(311907),
    d = t(397927),
    c = t(775602),
    u = t(606758),
    m = t(518477),
    p = t(985018),
    x = t(439510),
    A = t(886981);
let g = {
        [m.jM.WIDGET_ADDED]: {
            message: p.intl.string(p.t.fFP1Uy),
            icon: (0, n.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_added"
        },
        [m.jM.WIDGET_REMOVED]: {
            message: p.intl.string(p.t.zzsK7h),
            icon: (0, n.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_removed"
        },
        [m.jM.WIDGET_SAVE_FAILURE]: {
            message: p.intl.string(p.t["84MExs"]),
            icon: (0, n.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_widget_save_failure",
            type: d.ToastType.FAILURE
        },
        [m.jM.SOMETHING_WENT_WRONG]: {
            message: p.intl.string(p.t.F8FvUy),
            icon: (0, n.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_something_went_wrong",
            type: d.ToastType.FAILURE
        }
    },
    f = e => {
        let {
            message: l,
            icon: t,
            type: i
        } = e;
        return (0, n.jsxs)("div", {
            className: a()(A.oR, x.oR),
            "data-type": i,
            children: [(0, n.jsx)("div", {
                className: x.RC,
                children: t
            }), (0, n.jsx)(d.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: l
            })]
        })
    },
    h = e => {
        let {
            className: l
        } = e, t = (0, u.fu)(), s = (0, o.bG)([c.A], () => c.A.useReducedMotion), [m, p] = i.useState(!1), [A, h] = i.useState(null);
        i.useEffect(() => {
            null !== t ? (p(!0), h(g[t]), d.ORC.announce(g[t].message)) : p(!1)
        }, [t]);
        let j = (0, d.pnh)(m, {
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
        return i.useEffect(() => () => (0, u.XA)(null), []), i.useEffect(() => {
            if (m) {
                let e = setTimeout(() => {
                    (0, u.XA)(null)
                }, 2e3);
                return () => clearTimeout(e)
            }
        }, [m]), (0, n.jsx)(n.Fragment, {
            children: j((e, t) => t && null !== A && (0, n.jsx)(r.animated.div, {
                className: a()(l, x.Jt),
                style: e,
                children: (0, n.jsx)(f, {
                    ...A
                })
            }))
        })
    }