/** chunk id: 513265 params = (module,exports,require) **/
i.d(l, {
    A: () => f
});
var n = i(627968),
    t = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(490249),
    o = i(311907),
    d = i(397927),
    c = i(775602),
    u = i(384377),
    A = i(518477),
    m = i(985018),
    p = i(263919),
    x = i(114138);
let g = {
        [A.jM.WIDGET_ADDED]: {
            message: m.intl.string(m.t.fFP1Uy),
            icon: (0, n.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_added"
        },
        [A.jM.WIDGET_REMOVED]: {
            message: m.intl.string(m.t.zzsK7h),
            icon: (0, n.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_removed"
        },
        [A.jM.WIDGET_SAVE_FAILURE]: {
            message: m.intl.string(m.t["84MExs"]),
            icon: (0, n.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_widget_save_failure",
            type: d.ToastType.FAILURE
        },
        [A.jM.SOMETHING_WENT_WRONG]: {
            message: m.intl.string(m.t.F8FvUy),
            icon: (0, n.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_something_went_wrong",
            type: d.ToastType.FAILURE
        }
    },
    h = e => {
        let {
            message: l,
            icon: i,
            type: t
        } = e;
        return (0, n.jsxs)("div", {
            className: a()(x.oR, p.oR),
            "data-type": t,
            children: [(0, n.jsx)("div", {
                className: p.RC,
                children: i
            }), (0, n.jsx)(d.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: l
            })]
        })
    },
    f = e => {
        let {
            className: l,
            onAutoHide: i
        } = e, s = (0, u.fu)(), A = (0, o.bG)([c.A], () => c.A.useReducedMotion), [m, x] = t.useState(!1), [f, j] = t.useState(null);
        t.useEffect(() => {
            null !== s ? (x(!0), j(g[s]), d.ORC.announce(g[s].message)) : x(!1)
        }, [s]);
        let I = (0, d.pnh)(m, {
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
        return t.useEffect(() => {
            if (m) {
                let e = setTimeout(() => {
                    i?.()
                }, 2e3);
                return () => clearTimeout(e)
            }
        }, [m, i]), (0, n.jsx)(n.Fragment, {
            children: I((e, i) => i && null !== f && (0, n.jsx)(r.animated.div, {
                className: a()(l, p.Jt),
                style: e,
                children: (0, n.jsx)(h, {
                    ...f
                })
            }))
        })
    }