/** chunk id: 392332 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(158954),
    c = n(397927),
    o = n(760459),
    d = n(985018),
    u = n(282063),
    m = n(495379);

function x(e) {
    let {
        entries: t,
        viewId: n,
        officialGuildId: l,
        onClose: x,
        source: h
    } = e, f = t.length > 7, [g, _] = i.useState(!1), p = i.useMemo(() => t.slice(0, f && !g ? 6 : void 0), [t, f, g]);
    return (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.DZT, {
            className: u.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.ak8OHk)
        }), 0 === t.length ? (0, a.jsx)(s.EYj, {
            variant: "text-xs/semibold",
            color: "text-strong",
            className: m.p$,
            children: d.intl.string(d.t.R5fYVO)
        }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
                className: r()(m.yz, {
                    [m.T6]: f && !g
                }),
                children: (0, a.jsx)("div", {
                    className: u.fi,
                    children: p.map(e => (0, a.jsx)(o.A, {
                        entry: e,
                        viewId: n,
                        onClose: x,
                        officialGuildId: l,
                        source: h
                    }, e.id))
                })
            }), f && !g && (0, a.jsxs)(c.DUT, {
                className: m.ND,
                onClick: () => _(!0),
                children: [(0, a.jsx)(s.EYj, {
                    variant: "text-xs/semibold",
                    color: "interactive-text-default",
                    children: d.intl.string(d.t.yohc6E)
                }), (0, a.jsx)(c.abt, {
                    size: "xs"
                })]
            })]
        })]
    })
}