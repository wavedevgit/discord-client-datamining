/** chunk id: 513265 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(490249),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(384377),
    A = n(518477),
    m = n(985018),
    p = n(263919),
    x = n(114138);
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
            icon: n,
            type: i
        } = e;
        return (0, l.jsxs)("div", {
            className: a()(x.oR, p.oR),
            "data-type": i,
            children: [(0, l.jsx)("div", {
                className: p.RC,
                children: n
            }), (0, l.jsx)(d.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: t
            })]
        })
    },
    f = e => {
        let {
            className: t,
            onAutoHide: n
        } = e, s = (0, u.fu)(), A = (0, o.bG)([c.A], () => c.A.useReducedMotion), [m, x] = i.useState(!1), [f, I] = i.useState(null);
        i.useEffect(() => {
            null !== s ? (x(!0), I(g[s]), d.ORC.announce(g[s].message)) : x(!1)
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
        return i.useEffect(() => {
            if (m) {
                let e = setTimeout(() => {
                    n?.()
                }, 2e3);
                return () => clearTimeout(e)
            }
        }, [m, n]), (0, l.jsx)(l.Fragment, {
            children: j((e, n) => n && null !== f && (0, l.jsx)(r.animated.div, {
                className: a()(t, p.Jt),
                style: e,
                children: (0, l.jsx)(h, {
                    ...f
                })
            }))
        })
    }