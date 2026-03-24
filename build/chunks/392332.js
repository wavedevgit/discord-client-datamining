/** chunk id: 392332 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    o = n(397927),
    c = n(760459),
    d = n(985018),
    u = n(851822),
    m = n(491510);

function x(e) {
    let {
        entries: t,
        viewId: n,
        officialGuildId: i,
        onClose: x,
        source: _
    } = e, f = t.length > 7, [g, h] = l.useState(!1), p = l.useMemo(() => t.slice(0, f && !g ? 6 : void 0), [t, f, g]);
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
                    children: p.map(e => (0, a.jsx)(c.A, {
                        entry: e,
                        viewId: n,
                        onClose: x,
                        officialGuildId: i,
                        source: _
                    }, e.id))
                })
            }), f && !g && (0, a.jsxs)(o.DUT, {
                className: m.ND,
                onClick: () => h(!0),
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