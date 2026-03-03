/** chunk id: 392332, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => x
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(158954),
    o = i(397927),
    c = i(760459),
    d = i(985018),
    u = i(851822),
    m = i(491510);

function x(e) {
    let {
        entries: t,
        viewId: i,
        officialGuildId: a,
        onClose: x,
        source: g
    } = e, h = t.length > 7, [f, j] = l.useState(!1), v = l.useMemo(() => t.slice(0, h && !f ? 6 : void 0), [t, h, f]);
    return (0, n.jsxs)("div", {
        children: [(0, n.jsx)(r.DZT, {
            className: u.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.ak8OHk)
        }), 0 === t.length ? (0, n.jsx)(r.EYj, {
            variant: "text-xs/semibold",
            color: "text-strong",
            className: m.p$,
            children: d.intl.string(d.t.R5fYVO)
        }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
                className: s()(m.yz, {
                    [m.T6]: h && !f
                }),
                children: (0, n.jsx)("div", {
                    className: u.fi,
                    children: v.map(e => (0, n.jsx)(c.A, {
                        entry: e,
                        viewId: i,
                        onClose: x,
                        officialGuildId: a,
                        source: g
                    }, e.id))
                })
            }), h && !f && (0, n.jsxs)(o.DUT, {
                className: m.ND,
                onClick: () => j(!0),
                children: [(0, n.jsx)(r.EYj, {
                    variant: "text-xs/semibold",
                    color: "interactive-text-default",
                    children: d.intl.string(d.t.yohc6E)
                }), (0, n.jsx)(o.abt, {
                    size: "xs"
                })]
            })]
        })]
    })
}