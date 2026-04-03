/** chunk id: 42473 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(435371),
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
            onMouseDown: r,
            disabled: o,
            icon: c,
            iconForeground: m,
            innerClassName: E,
            className: _,
            redGlow: N,
            onMouseEnter: f,
            onMouseLeave: T,
            "aria-label": p,
            "aria-checked": h,
            role: S,
            plated: C
        } = e, x = "function" == typeof c ? (0, l.jsx)(c, {
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
            wrapperClassName: a()(A.x6, _),
            className: a()(A.x6, _, {
                [A.Xr]: N,
                [A.r9]: o,
                [A.Sn]: !o,
                [A.ZQ]: C,
                [A.OH]: N && C
            }),
            onClick: e => {
                null != i && i(e)
            },
            onMouseDown: r,
            onMouseEnter: f,
            onMouseLeave: T,
            onContextMenu: s,
            role: S,
            "aria-checked": h,
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
                children: x
            }) : x, n]
        })
    }),
    E = s.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: i,
                tooltipPositionKey: a,
                "aria-label": u,
                ...c
            } = e, d = (0, o.O)(n), A = u ?? d;
            return (0, l.jsx)(r.m_, {
                text: n,
                forceOpen: s,
                shouldShow: i,
                positionKey: a,
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
                tooltipPositionKey: a,
                onClick: r,
                onMouseEnter: o,
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: E,
                onBlur: _,
                "aria-label": N,
                ...f
            } = e;
            return (0, l.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: A.RF,
                tooltipContentClassName: A.In,
                "aria-label": N,
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
                        onBlur: A,
                        "aria-label": N
                    } = e;
                    return (0, l.jsx)(m, {
                        onClick: e => {
                            n?.(), r?.(e)
                        },
                        onMouseEnter: () => {
                            s?.(), o?.()
                        },
                        onMouseLeave: () => {
                            i?.(), u?.()
                        },
                        onContextMenu: e => {
                            a?.(), d?.(e)
                        },
                        onFocus: () => {
                            c?.(), E?.()
                        },
                        onBlur: () => {
                            A?.(), _?.()
                        },
                        "aria-label": N,
                        ...f,
                        ref: t
                    })
                }
            })
        }
    })