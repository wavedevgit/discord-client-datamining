/** chunk id: 42473 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(435371),
    o = n(614820),
    u = n(421380),
    c = n(397927),
    d = n(573435),
    m = n(310945);
let A = l.forwardRef(function(e, t) {
        let {
            children: n,
            onContextMenu: l,
            onClick: a,
            onMouseDown: r,
            disabled: o,
            icon: c,
            iconForeground: A,
            innerClassName: E,
            className: f,
            redGlow: p,
            onMouseEnter: h,
            onMouseLeave: x,
            "aria-label": N,
            "aria-checked": S,
            role: g,
            plated: T
        } = e, _ = "function" == typeof c ? (0, s.jsx)(c, {
            width: 20,
            height: 20,
            size: "custom",
            colorClass: A ?? "",
            color: "currentColor"
        }) : c;
        return (0, s.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": N,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: o,
            innerClassName: E,
            wrapperClassName: i()(m.x6, f),
            className: i()(m.x6, f, {
                [m.Xr]: p,
                [m.r9]: o,
                [m.Sn]: !o,
                [m.ZQ]: T,
                [m.OH]: p && T
            }),
            onClick: e => {
                null != a && a(e)
            },
            onMouseDown: r,
            onMouseEnter: h,
            onMouseLeave: x,
            onContextMenu: l,
            role: g,
            "aria-checked": S,
            focusProps: {
                offset: {
                    left: -1,
                    top: -1,
                    right: 1,
                    bottom: 1
                }
            },
            children: [null != n ? (0, s.jsx)(d.Ay, {
                width: 20,
                height: 20,
                mask: d.Ay.Masks.PANEL_BUTTON,
                children: _
            }) : _, n]
        })
    }),
    E = l.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: n,
                tooltipForceOpen: l,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                "aria-label": u,
                ...c
            } = e, d = (0, o.O)(n), m = u ?? d;
            return (0, s.jsx)(r.m_, {
                text: n,
                forceOpen: l,
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
                tooltipText: n,
                tooltipForceOpen: l,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                onClick: r,
                onMouseEnter: o,
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: E,
                onBlur: f,
                "aria-label": p,
                ...h
            } = e;
            return (0, s.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: m.RF,
                tooltipContentClassName: m.In,
                "aria-label": p,
                forceOpen: l,
                shouldShow: a,
                color: c.oMw.GREEN,
                positionKeyStemOverride: i,
                text: n,
                children: e => {
                    let {
                        onClick: n,
                        onMouseEnter: l,
                        onMouseLeave: a,
                        onContextMenu: i,
                        onFocus: c,
                        onBlur: m,
                        "aria-label": p
                    } = e;
                    return (0, s.jsx)(A, {
                        onClick: e => {
                            n?.(), r?.(e)
                        },
                        onMouseEnter: () => {
                            l?.(), o?.()
                        },
                        onMouseLeave: () => {
                            a?.(), u?.()
                        },
                        onContextMenu: e => {
                            i?.(), d?.(e)
                        },
                        onFocus: () => {
                            c?.(), E?.()
                        },
                        onBlur: () => {
                            m?.(), f?.()
                        },
                        "aria-label": p,
                        ...h,
                        ref: t
                    })
                }
            })
        }
    })