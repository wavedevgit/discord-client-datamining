/** chunk id: 882342 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var n = a(627968);
a(64700);
var r = a(990078),
    i = a(397927),
    s = a(580630),
    l = a(993408),
    o = a(641563),
    c = a(652215),
    d = a(985018),
    u = a(993910);

function m(e) {
    let {
        product: t,
        onTrackClick: a
    } = e, m = (0, l.yt)(t, c.lid.PREMIUM_TIER_2);
    if (null == m) return null;
    let p = (0, s.RS)(m.amount, m.currency);
    return (0, n.jsxs)("div", {
        className: u.k,
        children: [(0, n.jsx)(r.m, {
            text: d.intl.string(d.t.MPFyJ5),
            "aria-label": d.intl.string(d.t.X3Ekj8),
            children: (0, n.jsx)(i.tvc, {
                size: "md",
                color: "currentColor",
                className: u.o
            })
        }), (0, n.jsx)(i.Text, {
            variant: "text-xs/medium",
            children: d.intl.format(d.t.Sv8iic, {
                price: p,
                subscribeNowHook: e => (0, n.jsx)(o.Z, {
                    text: e,
                    onTrackClick: a
                })
            })
        })]
    })
}