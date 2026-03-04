/** chunk id: 392332, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    c = n(397927),
    o = n(760459),
    d = n(985018),
    u = n(851822),
    m = n(491510);

function x(e) {
    let {
        entries: t,
        viewId: n,
        officialGuildId: a,
        onClose: x,
        source: g
    } = e, h = t.length > 7, [f, j] = l.useState(!1), p = l.useMemo(() => t.slice(0, h && !f ? 6 : void 0), [t, h, f]);
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(r.DZT, {
            className: u.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.ak8OHk)
        }), 0 === t.length ? (0, i.jsx)(r.EYj, {
            variant: "text-xs/semibold",
            color: "text-strong",
            className: m.p$,
            children: d.intl.string(d.t.R5fYVO)
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: s()(m.yz, {
                    [m.T6]: h && !f
                }),
                children: (0, i.jsx)("div", {
                    className: u.fi,
                    children: p.map(e => (0, i.jsx)(o.A, {
                        entry: e,
                        viewId: n,
                        onClose: x,
                        officialGuildId: a,
                        source: g
                    }, e.id))
                })
            }), h && !f && (0, i.jsxs)(c.DUT, {
                className: m.ND,
                onClick: () => j(!0),
                children: [(0, i.jsx)(r.EYj, {
                    variant: "text-xs/semibold",
                    color: "interactive-text-default",
                    children: d.intl.string(d.t.yohc6E)
                }), (0, i.jsx)(c.abt, {
                    size: "xs"
                })]
            })]
        })]
    })
}