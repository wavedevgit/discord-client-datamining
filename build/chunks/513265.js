/** Chunk was on 64228 **/
/** chunk id: 513265, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(108531),
    a = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(384377),
    p = n(518477),
    m = n(985018),
    f = n(845913),
    A = n(910200);
let x = {
        [p.jM.WIDGET_ADDED]: {
            message: m.intl.string(m.t.fFP1Uy),
            icon: (0, l.jsx)(c.A9s, {
                size: "sm",
                color: c.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_added"
        },
        [p.jM.WIDGET_REMOVED]: {
            message: m.intl.string(m.t.zzsK7h),
            icon: (0, l.jsx)(c.A9s, {
                size: "sm",
                color: c.LU0.colors.STATUS_POSITIVE.css
            }),
            toast_id: "user_profile_widget_removed"
        },
        [p.jM.WIDGET_SAVE_FAILURE]: {
            message: m.intl.string(m.t["84MExs"]),
            icon: (0, l.jsx)(c.d$L, {
                size: "sm",
                color: c.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_widget_save_failure",
            type: c.ToastType.FAILURE
        },
        [p.jM.SOMETHING_WENT_WRONG]: {
            message: m.intl.string(m.t.F8FvUy),
            icon: (0, l.jsx)(c.d$L, {
                size: "sm",
                color: c.LU0.colors.ICON_FEEDBACK_CRITICAL
            }),
            toast_id: "user_profile_something_went_wrong",
            type: c.ToastType.FAILURE
        }
    },
    j = e => {
        let {
            message: t,
            icon: n,
            type: i
        } = e;
        return (0, l.jsxs)("div", {
            className: s()(A.oR, f.oR),
            "data-type": i,
            children: [(0, l.jsx)("div", {
                className: f.RC,
                children: n
            }), (0, l.jsx)(c.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: t
            })]
        })
    },
    h = e => {
        let {
            className: t,
            onAutoHide: n
        } = e, r = (0, u.fu)(), p = (0, a.bG)([d.A], () => d.A.useReducedMotion), [m, A] = i.useState(!1), [h, g] = i.useState(null);
        i.useEffect(() => {
            null !== r ? (A(!0), g(x[r]), c.ORC.announce(x[r].message)) : A(!1)
        }, [r]);
        let v = (0, c.pnh)(m, {
            from: {
                transform: p ? "translateY(0)" : "translateY(-12px)",
                opacity: 0
            },
            enter: {
                transform: "translateY(0)",
                opacity: 1
            },
            leave: {
                transform: p ? "translateY(0)" : "translateY(-12px)",
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
                    null == n || n()
                }, 2e3);
                return () => clearTimeout(e)
            }
        }, [m, n]), (0, l.jsx)(l.Fragment, {
            children: v((e, n) => n && null !== h && (0, l.jsx)(o.animated.div, {
                className: s()(t, f.Jt),
                style: e,
                children: (0, l.jsx)(j, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), l.forEach(function(t) {
                            var l;
                            l = n[t], t in e ? Object.defineProperty(e, t, {
                                value: l,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = l
                        })
                    }
                    return e
                }({}, h))
            }))
        })
    }