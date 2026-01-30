/** chunk id: 392332, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => x
}), l(896048);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(158954),
    o = l(397927),
    c = l(760459),
    d = l(985018),
    u = l(851822),
    m = l(491510);

function x(e) {
    let {
        entries: t,
        viewId: l,
        officialGuildId: a,
        onClose: x,
        source: f
    } = e, g = t.length > 7, [h, p] = i.useState(!1), j = i.useMemo(() => t.slice(0, g && !h ? 6 : void 0), [t, g, h]);
    return (0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.DZT, {
            className: u.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.ak8OHk)
        }), 0 === t.length ? (0, n.jsx)(s.EYj, {
            variant: "text-xs/semibold",
            color: "text-strong",
            className: m.p$,
            children: d.intl.string(d.t.R5fYVO)
        }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
                className: r()(m.yz, {
                    [m.T6]: g && !h
                }),
                children: (0, n.jsx)("div", {
                    className: u.fi,
                    children: j.map(e => (0, n.jsx)(c.A, {
                        entry: e,
                        viewId: l,
                        onClose: x,
                        officialGuildId: a,
                        source: f
                    }, e.id))
                })
            }), g && !h && (0, n.jsxs)(o.DUT, {
                className: m.ND,
                onClick: () => p(!0),
                children: [(0, n.jsx)(s.EYj, {
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