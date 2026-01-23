/** Chunk was on 13530 **/
/** chunk id: 392332, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(397927),
    c = n(760459),
    u = n(985018),
    d = n(851822),
    m = n(491510);

function f(e) {
    let {
        entries: t,
        viewId: n,
        officialGuildId: i,
        onClose: f
    } = e, g = t.length > 7, [x, p] = r.useState(!1), j = r.useMemo(() => t.slice(0, g && !x ? 6 : void 0), [t, g, x]);
    return (0, l.jsxs)("div", {
        children: [(0, l.jsx)(s.DZT, {
            className: d.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: u.intl.string(u.t.ak8OHk)
        }), 0 === t.length ? (0, l.jsx)(s.EYj, {
            variant: "text-xs/semibold",
            color: "text-strong",
            className: m.p$,
            children: u.intl.string(u.t.R5fYVO)
        }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: a()(m.yz, {
                    [m.T6]: g && !x
                }),
                children: (0, l.jsx)("div", {
                    className: d.fi,
                    children: j.map(e => (0, l.jsx)(c.A, {
                        entry: e,
                        viewId: n,
                        onClose: f,
                        officialGuildId: i
                    }, e.id))
                })
            }), g && !x && (0, l.jsxs)(o.DUT, {
                className: m.ND,
                onClick: () => p(!0),
                children: [(0, l.jsx)(s.EYj, {
                    variant: "text-xs/semibold",
                    color: "interactive-text-default",
                    children: u.intl.string(u.t.yohc6E)
                }), (0, l.jsx)(o.abt, {
                    size: "xs"
                })]
            })]
        })]
    })
}