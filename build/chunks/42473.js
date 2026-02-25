/** chunk id: 42473, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => p
});
var s = l(627968),
    n = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(435371),
    u = l(614820),
    o = l(421380),
    c = l(397927),
    d = l(573435),
    m = l(940871);
let A = n.forwardRef(function(e, t) {
        let {
            children: l,
            onContextMenu: n,
            onClick: a,
            onMouseDown: r,
            disabled: u,
            icon: c,
            iconForeground: A,
            innerClassName: p,
            className: x,
            redGlow: E,
            onMouseEnter: f,
            onMouseLeave: h,
            "aria-label": N,
            "aria-checked": S,
            role: T,
            plated: C
        } = e, v = "function" == typeof c ? (0, s.jsx)(c, {
            width: 20,
            height: 20,
            size: "custom",
            colorClass: A ?? "",
            color: "currentColor"
        }) : c;
        return (0, s.jsxs)(o.$n, {
            "data-migration-pending": !0,
            "aria-label": N,
            buttonRef: t,
            look: o.$n.Looks.BLANK,
            size: o.$n.Sizes.NONE,
            disabled: u,
            innerClassName: p,
            wrapperClassName: i()(m.x6, x),
            className: i()(m.x6, x, {
                [m.Xr]: E,
                [m.r9]: u,
                [m.Sn]: !u,
                [m.ZQ]: C,
                [m.OH]: E && C
            }),
            onClick: e => {
                null != a && a(e)
            },
            onMouseDown: r,
            onMouseEnter: f,
            onMouseLeave: h,
            onContextMenu: n,
            role: T,
            "aria-checked": S,
            focusProps: {
                offset: {
                    left: -1,
                    top: -1,
                    right: 1,
                    bottom: 1
                }
            },
            children: [null != l ? (0, s.jsx)(d.Ay, {
                width: 20,
                height: 20,
                mask: d.Ay.Masks.PANEL_BUTTON,
                children: v
            }) : v, l]
        })
    }),
    p = n.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: l,
                tooltipForceOpen: n,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                "aria-label": o,
                ...c
            } = e, d = (0, u.O)(l), m = o ?? d;
            return (0, s.jsx)(r.m_, {
                text: l,
                forceOpen: n,
                shouldShow: a,
                positionKey: i,
                ariaHidden: m === d,
                children: (0, s.jsx)(A, {
                    ...c,
                    "aria-label": m,
                    ref: t
                })
            })
        } {
            let {
                tooltipText: l,
                tooltipForceOpen: n,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                onClick: r,
                onMouseEnter: u,
                onMouseLeave: o,
                onContextMenu: d,
                onFocus: p,
                onBlur: x,
                "aria-label": E,
                ...f
            } = e;
            return (0, s.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: m.RF,
                tooltipContentClassName: m.In,
                "aria-label": E,
                forceOpen: n,
                shouldShow: a,
                color: c.oMw.GREEN,
                positionKeyStemOverride: i,
                text: l,
                children: e => {
                    let {
                        onClick: l,
                        onMouseEnter: n,
                        onMouseLeave: a,
                        onContextMenu: i,
                        onFocus: c,
                        onBlur: m,
                        "aria-label": E
                    } = e;
                    return (0, s.jsx)(A, {
                        onClick: e => {
                            l?.(), r?.(e)
                        },
                        onMouseEnter: () => {
                            n?.(), u?.()
                        },
                        onMouseLeave: () => {
                            a?.(), o?.()
                        },
                        onContextMenu: e => {
                            i?.(), d?.(e)
                        },
                        onFocus: () => {
                            c?.(), p?.()
                        },
                        onBlur: () => {
                            m?.(), x?.()
                        },
                        "aria-label": E,
                        ...f,
                        ref: t
                    })
                }
            })
        }
    })