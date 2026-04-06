/** chunk id: 513265 params = (module,exports,require) **/
i.d(l, {
    A: () => h
});
var t = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(687498),
    o = i(311907),
    d = i(397927),
    c = i(775602),
    u = i(606758),
    m = i(518477),
    x = i(985018),
    A = i(439510),
    p = i(886981);
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
        [m.jM.WIDGET_SAVE_FAILURE]: {
            message: x.intl.string(x.t["84MExs"]),
            icon: (0, t.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_widget_save_failure",
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
            icon: i,
            type: n
        } = e;
        return (0, t.jsxs)("div", {
            className: a()(p.oR, A.oR),
            "data-type": n,
            children: [(0, t.jsx)("div", {
                className: A.RC,
                children: i
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
        } = e, i = (0, u.fu)(), s = (0, o.bG)([c.A], () => c.A.useReducedMotion), [m, x] = n.useState(!1), [p, h] = n.useState(null);
        n.useEffect(() => {
            null !== i ? (x(!0), h(g[i]), d.ORC.announce(g[i].message)) : x(!1)
        }, [i]);
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
        return n.useEffect(() => () => (0, u.XA)(null), []), n.useEffect(() => {
            if (m) {
                let e = setTimeout(() => {
                    (0, u.XA)(null)
                }, 2e3);
                return () => clearTimeout(e)
            }
        }, [m]), (0, t.jsx)(t.Fragment, {
            children: j((e, i) => i && null !== p && (0, t.jsx)(r.animated.div, {
                className: a()(l, A.Jt),
                style: e,
                children: (0, t.jsx)(f, {
                    ...p
                })
            }))
        })
    }