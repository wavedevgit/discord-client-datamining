/** chunk id: 513265 params = (module,exports,require) **/
n.d(l, {
    A: () => h
});
var t = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(687498),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(606758),
    m = n(518477),
    x = n(985018),
    p = n(439510),
    A = n(886981);
let g = {
        [m.jM.WIDGET_ADDED]: {
            message: x.intl.string(x.t.fFP1Uy),
            icon: (0, t.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_added"
        },
        [m.jM.WIDGET_REMOVED]: {
            message: x.intl.string(x.t.zzsK7h),
            icon: (0, t.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_removed"
        },
        [m.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: x.intl.string(x.t["84MExs"]),
            icon: (0, t.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_save_generic_failure",
            type: d.ToastType.FAILURE
        },
        [m.jM.SOMETHING_WENT_WRONG]: {
            message: x.intl.string(x.t.F8FvUy),
            icon: (0, t.jsx)(d.d$L, {
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
            icon: n,
            type: i
        } = e;
        return (0, t.jsxs)("div", {
            className: a()(A.oR, p.oR),
            "data-type": i,
            children: [(0, t.jsx)("div", {
                className: p.RC,
                children: n
            }), (0, t.jsx)(d.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: l
            })]
        })
    },
    h = e => {
        let {
            className: l
        } = e, n = (0, u.fu)(), s = (0, o.bG)([c.A], () => c.A.useReducedMotion), [m, x] = i.useState(!1), [A, h] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (x(!0), h(g[n]), d.ORC.announce(g[n].message)) : x(!1)
        }, [n]);
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
        }, [m]), (0, t.jsx)(t.Fragment, {
            children: j((e, n) => n && null !== A && (0, t.jsx)(r.animated.div, {
                className: a()(l, p.Jt),
                style: e,
                children: (0, t.jsx)(f, {
                    ...A
                })
            }))
        })
    }