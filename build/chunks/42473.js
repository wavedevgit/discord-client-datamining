/** chunk id: 42473 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(435371),
    o = n(614820),
    u = n(421380),
    c = n(397927),
    d = n(573435),
    m = n(940871);
let A = s.forwardRef(function(e, t) {
        let {
            children: n,
            onContextMenu: s,
            onClick: a,
            onMouseDown: r,
            disabled: o,
            icon: c,
            iconForeground: A,
            innerClassName: p,
            className: f,
            redGlow: x,
            onMouseEnter: h,
            onMouseLeave: E,
            "aria-label": N,
            "aria-checked": g,
            role: S,
            plated: v
        } = e, T = "function" == typeof c ? (0, l.jsx)(c, {
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
            wrapperClassName: i()(m.x6, f),
            className: i()(m.x6, f, {
                [m.Xr]: x,
                [m.r9]: o,
                [m.Sn]: !o,
                [m.ZQ]: v,
                [m.OH]: x && v
            }),
            onClick: e => {
                null != a && a(e)
            },
            onMouseDown: r,
            onMouseEnter: h,
            onMouseLeave: E,
            onContextMenu: s,
            role: S,
            "aria-checked": g,
            focusProps: {
                offset: {
                    left: -1,
                    top: -1,
                    right: 1,
                    bottom: 1
                }
            },
            children: [null != n ? (0, l.jsx)(d.Ay, {
                width: 20,
                height: 20,
                mask: d.Ay.Masks.PANEL_BUTTON,
                children: T
            }) : T, n]
        })
    }),
    p = s.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                "aria-label": u,
                ...c
            } = e, d = (0, o.O)(n), m = u ?? d;
            return (0, l.jsx)(r.m_, {
                text: n,
                forceOpen: s,
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
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                onClick: r,
                onMouseEnter: o,
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: p,
                onBlur: f,
                "aria-label": x,
                ...h
            } = e;
            return (0, l.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: m.RF,
                tooltipContentClassName: m.In,
                "aria-label": x,
                forceOpen: s,
                shouldShow: a,
                color: c.oMw.GREEN,
                positionKeyStemOverride: i,
                text: n,
                children: e => {
                    let {
                        onClick: n,
                        onMouseEnter: s,
                        onMouseLeave: a,
                        onContextMenu: i,
                        onFocus: c,
                        onBlur: m,
                        "aria-label": x
                    } = e;
                    return (0, l.jsx)(A, {
                        onClick: e => {
                            n?.(), r?.(e)
                        },
                        onMouseEnter: () => {
                            s?.(), o?.()
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
                            m?.(), f?.()
                        },
                        "aria-label": x,
                        ...h,
                        ref: t
                    })
                }
            })
        }
    })