/** chunk id: 42473, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => x
});
var l = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(435371),
    o = s(614820),
    u = s(421380),
    c = s(397927),
    d = s(573435),
    m = s(310945);
let A = n.forwardRef(function(e, t) {
        let {
            children: s,
            onContextMenu: n,
            onClick: a,
            onMouseDown: r,
            disabled: o,
            icon: c,
            iconForeground: A,
            innerClassName: x,
            className: h,
            redGlow: p,
            onMouseEnter: f,
            onMouseLeave: E,
            "aria-label": N,
            "aria-checked": S,
            role: T,
            plated: g
        } = e, v = "function" == typeof c ? (0, l.jsx)(c, {
            width: 20,
            height: 20,
            size: "custom",
            colorClass: A ?? "",
            color: "currentColor"
        }) : c;
        return (0, l.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": N,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: o,
            innerClassName: x,
            wrapperClassName: i()(m.x6, h),
            className: i()(m.x6, h, {
                [m.Xr]: p,
                [m.r9]: o,
                [m.Sn]: !o,
                [m.ZQ]: g,
                [m.OH]: p && g
            }),
            onClick: e => {
                null != a && a(e)
            },
            onMouseDown: r,
            onMouseEnter: f,
            onMouseLeave: E,
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
            children: [null != s ? (0, l.jsx)(d.Ay, {
                width: 20,
                height: 20,
                mask: d.Ay.Masks.PANEL_BUTTON,
                children: v
            }) : v, s]
        })
    }),
    x = n.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: s,
                tooltipForceOpen: n,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                "aria-label": u,
                ...c
            } = e, d = (0, o.O)(s), m = u ?? d;
            return (0, l.jsx)(r.m_, {
                text: s,
                forceOpen: n,
                shouldShow: a,
                positionKey: i,
                ariaHidden: m === d,
                children: (0, l.jsx)(A, {
                    ...c,
                    "aria-label": m,
                    ref: t
                })
            })
        } {
            let {
                tooltipText: s,
                tooltipForceOpen: n,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                onClick: r,
                onMouseEnter: o,
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: x,
                onBlur: h,
                "aria-label": p,
                ...f
            } = e;
            return (0, l.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: m.RF,
                tooltipContentClassName: m.In,
                "aria-label": p,
                forceOpen: n,
                shouldShow: a,
                color: c.oMw.GREEN,
                positionKeyStemOverride: i,
                text: s,
                children: e => {
                    let {
                        onClick: s,
                        onMouseEnter: n,
                        onMouseLeave: a,
                        onContextMenu: i,
                        onFocus: c,
                        onBlur: m,
                        "aria-label": p
                    } = e;
                    return (0, l.jsx)(A, {
                        onClick: e => {
                            s?.(), r?.(e)
                        },
                        onMouseEnter: () => {
                            n?.(), o?.()
                        },
                        onMouseLeave: () => {
                            a?.(), u?.()
                        },
                        onContextMenu: e => {
                            i?.(), d?.(e)
                        },
                        onFocus: () => {
                            c?.(), x?.()
                        },
                        onBlur: () => {
                            m?.(), h?.()
                        },
                        "aria-label": p,
                        ...f,
                        ref: t
                    })
                }
            })
        }
    })