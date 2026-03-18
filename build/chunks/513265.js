/** chunk id: 513265 params = (module,exports,require) **/
t.d(l, {
    A: () => h
});
var i = t(627968),
    n = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(497766),
    o = t(311907),
    d = t(397927),
    c = t(775602),
    u = t(384377),
    m = t(518477),
    A = t(985018),
    p = t(845913),
    x = t(910200);
let g = {
        [m.jM.WIDGET_ADDED]: {
            message: A.intl.string(A.t.fFP1Uy),
            icon: (0, i.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_added"
        },
        [m.jM.WIDGET_REMOVED]: {
            message: A.intl.string(A.t.zzsK7h),
            icon: (0, i.jsx)(d.A9s, {
                size: "sm",
                color: d.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_removed"
        },
        [m.jM.WIDGET_SAVE_FAILURE]: {
            message: A.intl.string(A.t["84MExs"]),
            icon: (0, i.jsx)(d.d$L, {
                size: "sm",
                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_widget_save_failure",
            type: d.ToastType.FAILURE
        },
        [m.jM.SOMETHING_WENT_WRONG]: {
            message: A.intl.string(A.t.F8FvUy),
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
            message: l,
            icon: t,
            type: n
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(x.oR, p.oR),
            "data-type": n,
            children: [(0, i.jsx)("div", {
                className: p.RC,
                children: t
            }), (0, i.jsx)(d.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: l
            })]
        })
    },
    h = e => {
        let {
            className: l,
            onAutoHide: t
        } = e, s = (0, u.fu)(), m = (0, o.bG)([c.A], () => c.A.useReducedMotion), [A, x] = n.useState(!1), [h, j] = n.useState(null);
        n.useEffect(() => {
            null !== s ? (x(!0), j(g[s]), d.ORC.announce(g[s].message)) : x(!1)
        }, [s]);
        let I = (0, d.pnh)(A, {
            from: {
                transform: m ? "translateY(0)" : "translateY(-12px)",
                opacity: 0
            },
            enter: {
                transform: "translateY(0)",
                opacity: 1
            },
            leave: {
                transform: m ? "translateY(0)" : "translateY(-12px)",
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
            if (A) {
                let e = setTimeout(() => {
                    t?.()
                }, 2e3);
                return () => clearTimeout(e)
            }
        }, [A, t]), (0, i.jsx)(i.Fragment, {
            children: I((e, t) => t && null !== h && (0, i.jsx)(r.animated.div, {
                className: a()(l, p.Jt),
                style: e,
                children: (0, i.jsx)(f, {
                    ...h
                })
            }))
        })
    }