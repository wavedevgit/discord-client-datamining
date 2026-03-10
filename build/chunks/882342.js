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
    c = a(641563),
    o = a(652215),
    d = a(985018),
    u = a(778052);

function m(e) {
    let {
        product: t
    } = e, a = (0, l.yt)(t, o.lid.PREMIUM_TIER_2);
    if (null == a) return null;
    let m = (0, s.RS)(a.amount, a.currency);
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
                price: m,
                subscribeNowHook: e => (0, n.jsx)(c.Z, {
                    text: e
                })
            })
        })]
    })
}