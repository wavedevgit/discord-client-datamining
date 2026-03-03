/** chunk id: 513265, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => I
});
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(475539),
    o = i(311907),
    d = i(397927),
    c = i(775602),
    u = i(384377),
    A = i(518477),
    m = i(985018),
    x = i(845913),
    p = i(910200);
let g = {
        [A.jM.WIDGET_ADDED]: {
            message: m.intl.string(m.t.fFP1Uy),
            icon: (0, l.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_added"
        },
        [A.jM.WIDGET_REMOVED]: {
            message: m.intl.string(m.t.zzsK7h),
            icon: (0, l.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_removed"
        },
        [A.jM.WIDGET_SAVE_FAILURE]: {
            message: m.intl.string(m.t["84MExs"]),
            icon: (0, l.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_widget_save_failure",
            type: d.ToastType.FAILURE
        },
        [A.jM.SOMETHING_WENT_WRONG]: {
            message: m.intl.string(m.t.F8FvUy),
            icon: (0, l.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_something_went_wrong",
            type: d.ToastType.FAILURE
        }
    },
    h = e => {
        let {
            message: t,
            icon: i,
            type: n
        } = e;
        return (0, l.jsxs)("div", {
            className: a()(p.oR, x.oR),
            "data-type": n,
            children: [(0, l.jsx)("div", {
                className: x.RC,
                children: i
            }), (0, l.jsx)(d.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: t
            })]
        })
    },
    I = e => {
        let {
            className: t,
            onAutoHide: i
        } = e, s = (0, u.fu)(), A = (0, o.bG)([c.A], () => c.A.useReducedMotion), [m, p] = n.useState(!1), [I, f] = n.useState(null);
        n.useEffect(() => {
            null !== s ? (p(!0), f(g[s]), d.ORC.announce(g[s].message)) : p(!1)
        }, [s]);
        let j = (0, d.pnh)(m, {
            from: {
                transform: A ? "translateY(0)" : "translateY(-12px)",
                opacity: 0
            },
            enter: {
                transform: "translateY(0)",
                opacity: 1
            },
            leave: {
                transform: A ? "translateY(0)" : "translateY(-12px)",
                opacity: 0
            },
            config: {
                mass: 1,
                tension: 200,
                friction: 18,
                clamp: !0
            }
        }, "animate-always");
        return n.useEffect(() => {
            if (m) {
                let e = setTimeout(() => {
                    i?.()
                }, 2e3);
                return () => clearTimeout(e)
            }
        }, [m, i]), (0, l.jsx)(l.Fragment, {
            children: j((e, i) => i && null !== I && (0, l.jsx)(r.animated.div, {
                className: a()(t, x.Jt),
                style: e,
                children: (0, l.jsx)(h, {
                    ...I
                })
            }))
        })
    }