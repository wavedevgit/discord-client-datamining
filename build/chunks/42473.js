/** chunk id: 42473 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(435371),
    u = n(614820),
    o = n(421380),
    c = n(397927),
    d = n(573435),
    m = n(310945);
let A = s.forwardRef(function(e, t) {
        let {
            children: n,
            onContextMenu: s,
            onClick: i,
            onMouseDown: r,
            disabled: u,
            icon: c,
            iconForeground: A,
            innerClassName: E,
            className: p,
            redGlow: f,
            onMouseEnter: h,
            onMouseLeave: S,
            "aria-label": T,
            "aria-checked": x,
            role: _,
            plated: N
        } = e, g = "function" == typeof c ? (0, l.jsx)(c, {
            width: 20,
            height: 20,
            size: "custom",
            colorClass: A ?? "",
            color: "currentColor"
        }) : c;
        return (0, l.jsxs)(o.$n, {
            "data-migration-pending": !0,
            "aria-label": T,
            buttonRef: t,
            look: o.$n.Looks.BLANK,
            size: o.$n.Sizes.NONE,
            disabled: u,
            innerClassName: E,
            wrapperClassName: a()(m.x6, p),
            className: a()(m.x6, p, {
                [m.Xr]: f,
                [m.r9]: u,
                [m.Sn]: !u,
                [m.ZQ]: N,
                [m.OH]: f && N
            }),
            onClick: e => {
                null != i && i(e)
            },
            onMouseDown: r,
            onMouseEnter: h,
            onMouseLeave: S,
            onContextMenu: s,
            role: _,
            "aria-checked": x,
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
                children: g
            }) : g, n]
        })
    }),
    E = s.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: i,
                tooltipPositionKey: a,
                "aria-label": o,
                ...c
            } = e, d = (0, u.O)(n), m = o ?? d;
            return (0, l.jsx)(r.m_, {
                text: n,
                forceOpen: s,
                shouldShow: i,
                positionKey: a,
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
                tooltipShouldShow: i,
                tooltipPositionKey: a,
                onClick: r,
                onMouseEnter: u,
                onMouseLeave: o,
                onContextMenu: d,
                onFocus: E,
                onBlur: p,
                "aria-label": f,
                ...h
            } = e;
            return (0, l.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: m.RF,
                tooltipContentClassName: m.In,
                "aria-label": f,
                forceOpen: s,
                shouldShow: i,
                color: c.oMw.GREEN,
                positionKeyStemOverride: a,
                text: n,
                children: e => {
                    let {
                        onClick: n,
                        onMouseEnter: s,
                        onMouseLeave: i,
                        onContextMenu: a,
                        onFocus: c,
                        onBlur: m,
                        "aria-label": f
                    } = e;
                    return (0, l.jsx)(A, {
                        onClick: e => {
                            n?.(), r?.(e)
                        },
                        onMouseEnter: () => {
                            s?.(), u?.()
                        },
                        onMouseLeave: () => {
                            i?.(), o?.()
                        },
                        onContextMenu: e => {
                            a?.(), d?.(e)
                        },
                        onFocus: () => {
                            c?.(), E?.()
                        },
                        onBlur: () => {
                            m?.(), p?.()
                        },
                        "aria-label": f,
                        ...h,
                        ref: t
                    })
                }
            })
        }
    })