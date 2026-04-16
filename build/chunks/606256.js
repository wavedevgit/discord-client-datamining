/** chunk id: 606256 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(397927),
    d = n(941971),
    c = n(900848),
    u = n(550591),
    h = n(530787);
let A = l.forwardRef(function(e, t) {
    let {
        id: n,
        onClick: s,
        onContextMenu: A,
        icon: _,
        selected: m,
        tooltip: p,
        upperBadge: g,
        lowerBadge: f,
        lowerBadgeSize: E,
        showPill: x = !0,
        className: I,
        "aria-label": C,
        children: N,
        onMouseEnter: T,
        onMouseLeave: S,
        onMouseDown: b
    } = e, y = (0, r.Vd)(n), [v, R] = l.useState(!1), j = "string" == typeof p && null == C ? p : C;
    return (0, i.jsxs)(c.c, {
        children: [x ? (0, i.jsx)("div", {
            className: h.Io,
            children: (0, i.jsx)(d.A, {
                hovered: v,
                selected: m
            })
        }) : null, (0, i.jsx)(u.A, {
            text: p,
            selected: m,
            children: (0, i.jsx)(o.Qk9, {
                selected: !0,
                upperBadge: g,
                lowerBadge: f,
                lowerBadgeSize: E,
                children: (0, i.jsx)(o.DUT, {
                    innerRef: t,
                    onMouseEnter: () => {
                        T?.(), R(!0)
                    },
                    onMouseLeave: () => {
                        S?.(), R(!1)
                    },
                    onMouseDown: b,
                    className: a()(h.oZ, I, {
                        [h.wH]: m || v
                    }),
                    onClick: s,
                    "aria-label": j,
                    "aria-selected": m,
                    onContextMenu: A,
                    focusProps: {
                        enabled: !1
                    },
                    ...y,
                    children: null != _ && (0, i.jsx)(_, {
                        className: h.sF,
                        color: "currentColor"
                    })
                })
            })
        }), N]
    })
})