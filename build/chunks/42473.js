/** chunk id: 42473 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(435371),
    o = n(614820),
    u = n(421380),
    c = n(397927),
    d = n(573435),
    A = n(690738);
let m = s.forwardRef(function(e, t) {
        let {
            children: n,
            onContextMenu: s,
            onClick: i,
            onMouseDown: a,
            disabled: o,
            icon: c,
            iconForeground: m,
            innerClassName: E,
            className: f,
            redGlow: _,
            onMouseEnter: N,
            onMouseLeave: T,
            "aria-label": p,
            "aria-checked": g,
            role: C,
            plated: h
        } = e, S = "function" == typeof c ? (0, l.jsx)(c, {
            width: 20,
            height: 20,
            size: "custom",
            colorClass: m ?? "",
            color: "currentColor"
        }) : c;
        return (0, l.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": p,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: o,
            innerClassName: E,
            wrapperClassName: r()(A.x6, f),
            className: r()(A.x6, f, {
                [A.Xr]: _,
                [A.r9]: o,
                [A.Sn]: !o,
                [A.ZQ]: h,
                [A.OH]: _ && h
            }),
            onClick: e => {
                null != i && i(e)
            },
            onMouseDown: a,
            onMouseEnter: N,
            onMouseLeave: T,
            onContextMenu: s,
            role: C,
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
                children: S
            }) : S, n]
        })
    }),
    E = s.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: i,
                tooltipPositionKey: r,
                "aria-label": u,
                ...c
            } = e, d = (0, o.O)(n), A = u ?? d;
            return (0, l.jsx)(a.m_, {
                text: n,
                forceOpen: s,
                shouldShow: i,
                positionKey: r,
                ariaHidden: A === d,
                children: (0, l.jsx)(m, {
                    ...c,
                    "aria-label": A,
                    ref: t
                })
            })
        } {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: i,
                tooltipPositionKey: r,
                onClick: a,
                onMouseEnter: o,
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: E,
                onBlur: f,
                "aria-label": _,
                ...N
            } = e;
            return (0, l.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: A.RF,
                tooltipContentClassName: A.In,
                "aria-label": _,
                forceOpen: s,
                shouldShow: i,
                color: c.oMw.GREEN,
                positionKeyStemOverride: r,
                text: n,
                children: e => {
                    let {
                        onClick: n,
                        onMouseEnter: s,
                        onMouseLeave: i,
                        onContextMenu: r,
                        onFocus: c,
                        onBlur: A,
                        "aria-label": _
                    } = e;
                    return (0, l.jsx)(m, {
                        onClick: e => {
                            n?.(), a?.(e)
                        },
                        onMouseEnter: () => {
                            s?.(), o?.()
                        },
                        onMouseLeave: () => {
                            i?.(), u?.()
                        },
                        onContextMenu: e => {
                            r?.(), d?.(e)
                        },
                        onFocus: () => {
                            c?.(), E?.()
                        },
                        onBlur: () => {
                            A?.(), f?.()
                        },
                        "aria-label": _,
                        ...N,
                        ref: t
                    })
                }
            })
        }
    })