/** chunk id: 42473 params = (module,exports,require) **/
s.d(t, {
    A: () => p
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
    m = s(940871);
let A = n.forwardRef(function(e, t) {
        let {
            children: s,
            onContextMenu: n,
            onClick: a,
            onMouseDown: r,
            disabled: o,
            icon: c,
            iconForeground: A,
            innerClassName: p,
            className: x,
            redGlow: h,
            onMouseEnter: E,
            onMouseLeave: f,
            "aria-label": N,
            "aria-checked": S,
            role: v,
            plated: T
        } = e, g = "function" == typeof c ? (0, l.jsx)(c, {
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
            innerClassName: p,
            wrapperClassName: i()(m.x6, x),
            className: i()(m.x6, x, {
                [m.Xr]: h,
                [m.r9]: o,
                [m.Sn]: !o,
                [m.ZQ]: T,
                [m.OH]: h && T
            }),
            onClick: e => {
                null != a && a(e)
            },
            onMouseDown: r,
            onMouseEnter: E,
            onMouseLeave: f,
            onContextMenu: n,
            role: v,
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
                children: g
            }) : g, s]
        })
    }),
    p = n.forwardRef(function(e, t) {
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
                onFocus: p,
                onBlur: x,
                "aria-label": h,
                ...E
            } = e;
            return (0, l.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: m.RF,
                tooltipContentClassName: m.In,
                "aria-label": h,
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
                        "aria-label": h
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
                            c?.(), p?.()
                        },
                        onBlur: () => {
                            m?.(), x?.()
                        },
                        "aria-label": h,
                        ...E,
                        ref: t
                    })
                }
            })
        }
    })