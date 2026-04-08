/** chunk id: 392332 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(158954),
    o = n(397927),
    c = n(760459),
    d = n(985018),
    u = n(325952),
    m = n(406184);

function x(e) {
    let {
        entries: t,
        viewId: n,
        officialGuildId: l,
        onClose: x,
        source: g
    } = e, h = t.length > 7, [f, p] = i.useState(!1), _ = i.useMemo(() => t.slice(0, h && !f ? 6 : void 0), [t, h, f]);
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
                    [m.T6]: h && !f
                }),
                children: (0, a.jsx)("div", {
                    className: u.fi,
                    children: _.map(e => (0, a.jsx)(c.A, {
                        entry: e,
                        viewId: n,
                        onClose: x,
                        officialGuildId: l,
                        source: g
                    }, e.id))
                })
            }), h && !f && (0, a.jsxs)(o.DUT, {
                className: m.ND,
                onClick: () => p(!0),
                children: [(0, a.jsx)(s.EYj, {
                    variant: "text-xs/semibold",
                    color: "interactive-text-default",
                    children: d.intl.string(d.t.yohc6E)
                }), (0, a.jsx)(o.abt, {
                    size: "xs"
                })]
            })]
        })]
    })
}