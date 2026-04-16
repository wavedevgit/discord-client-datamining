/** chunk id: 505136 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(686533),
    d = n(525923),
    c = n(481384);

function u(e) {
    let {
        children: t,
        className: n,
        onExpand: l,
        ...u
    } = e, [m, g] = s.useState(!1);
    return (0, i.jsx)(a.Nt8, {
        className: c.uR,
        collapsibleContent: (0, i.jsx)("div", {
            className: c.oV,
            children: t
        }),
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, i.jsx)(o.A, {
                ...u,
                onClick: e => {
                    var n;
                    g(n = !m), l?.(n), t?.(e)
                },
                className: r()(c.AC, n),
                action: (0, i.jsxs)("div", {
                    className: c.rc,
                    children: [u.action, m ? (0, i.jsx)(a.abt, {
                        size: "custom",
                        width: d.S4,
                        height: d.S4,
                        color: "var(--interactive-text-active)"
                    }) : (0, i.jsx)(a._BQ, {
                        size: "custom",
                        width: d.S4,
                        height: d.S4,
                        color: "var(--interactive-text-active)"
                    })]
                })
            })
        }
    })
}