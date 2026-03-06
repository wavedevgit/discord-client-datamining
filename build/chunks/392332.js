/** chunk id: 392332 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    c = n(397927),
    o = n(760459),
    d = n(985018),
    u = n(728528),
    m = n(196408);

function x(e) {
    let {
        entries: t,
        viewId: n,
        officialGuildId: i,
        onClose: x,
        source: h
    } = e, f = t.length > 7, [g, p] = a.useState(!1), _ = a.useMemo(() => t.slice(0, f && !g ? 6 : void 0), [t, f, g]);
    return (0, l.jsxs)("div", {
        children: [(0, l.jsx)(s.DZT, {
            className: u.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.ak8OHk)
        }), 0 === t.length ? (0, l.jsx)(s.EYj, {
            variant: "text-xs/semibold",
            color: "text-strong",
            className: m.p$,
            children: d.intl.string(d.t.R5fYVO)
        }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: r()(m.yz, {
                    [m.T6]: f && !g
                }),
                children: (0, l.jsx)("div", {
                    className: u.fi,
                    children: _.map(e => (0, l.jsx)(o.A, {
                        entry: e,
                        viewId: n,
                        onClose: x,
                        officialGuildId: i,
                        source: h
                    }, e.id))
                })
            }), f && !g && (0, l.jsxs)(c.DUT, {
                className: m.ND,
                onClick: () => p(!0),
                children: [(0, l.jsx)(s.EYj, {
                    variant: "text-xs/semibold",
                    color: "interactive-text-default",
                    children: d.intl.string(d.t.yohc6E)
                }), (0, l.jsx)(c.abt, {
                    size: "xs"
                })]
            })]
        })]
    })
}