/** chunk id: 42473, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => p
});
var n = l(627968),
    s = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(435371),
    u = l(614820),
    o = l(421380),
    c = l(397927),
    d = l(573435),
    m = l(310945);
let A = s.forwardRef(function(e, t) {
        let {
            children: l,
            onContextMenu: s,
            onClick: a,
            onMouseDown: r,
            disabled: u,
            icon: c,
            iconForeground: A,
            innerClassName: p,
            className: x,
            redGlow: f,
            onMouseEnter: E,
            onMouseLeave: h,
            "aria-label": N,
            "aria-checked": S,
            role: T,
            plated: C
        } = e, v = "function" == typeof c ? (0, n.jsx)(c, {
            width: 20,
            height: 20,
            size: "custom",
            colorClass: A ?? "",
            color: "currentColor"
        }) : c;
        return (0, n.jsxs)(o.$n, {
            "data-migration-pending": !0,
            "aria-label": N,
            buttonRef: t,
            look: o.$n.Looks.BLANK,
            size: o.$n.Sizes.NONE,
            disabled: u,
            innerClassName: p,
            wrapperClassName: i()(m.x6, x),
            className: i()(m.x6, x, {
                [m.Xr]: f,
                [m.r9]: u,
                [m.Sn]: !u,
                [m.ZQ]: C,
                [m.OH]: f && C
            }),
            onClick: e => {
                null != a && a(e)
            },
            onMouseDown: r,
            onMouseEnter: E,
            onMouseLeave: h,
            onContextMenu: s,
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
            children: [null != l ? (0, n.jsx)(d.Ay, {
                width: 20,
                height: 20,
                mask: d.Ay.Masks.PANEL_BUTTON,
                children: v
            }) : v, l]
        })
    }),
    p = s.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: l,
                tooltipForceOpen: s,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                "aria-label": o,
                ...c
            } = e, d = (0, u.O)(l), m = o ?? d;
            return (0, n.jsx)(r.m_, {
                text: l,
                forceOpen: s,
                shouldShow: a,
                positionKey: i,
                ariaHidden: m === d,
                children: (0, n.jsx)(A, {
                    ...c,
                    "aria-label": m,
                    ref: t
                })
            })
        } {
            let {
                tooltipText: l,
                tooltipForceOpen: s,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                onClick: r,
                onMouseEnter: u,
                onMouseLeave: o,
                onContextMenu: d,
                onFocus: p,
                onBlur: x,
                "aria-label": f,
                ...E
            } = e;
            return (0, n.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: m.RF,
                tooltipContentClassName: m.In,
                "aria-label": f,
                forceOpen: s,
                shouldShow: a,
                color: c.oMw.GREEN,
                positionKeyStemOverride: i,
                text: l,
                children: e => {
                    let {
                        onClick: l,
                        onMouseEnter: s,
                        onMouseLeave: a,
                        onContextMenu: i,
                        onFocus: c,
                        onBlur: m,
                        "aria-label": f
                    } = e;
                    return (0, n.jsx)(A, {
                        onClick: e => {
                            l?.(), r?.(e)
                        },
                        onMouseEnter: () => {
                            s?.(), u?.()
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
                        "aria-label": f,
                        ...E,
                        ref: t
                    })
                }
            })
        }
    })