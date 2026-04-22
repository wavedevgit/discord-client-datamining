/** chunk id: 882342 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968);
n(64700);
var r = n(990078),
    i = n(397927),
    s = n(580630),
    l = n(993408),
    c = n(641563),
    o = n(652215),
    d = n(985018),
    u = n(805961);

function m(e) {
    let {
        product: t,
        onTrackClick: n
    } = e, m = (0, l.yt)(t, o.lid.PREMIUM_TIER_2);
    if (null == m) return null;
    let _ = (0, s.RS)(m.amount, m.currency);
    return (0, a.jsxs)("div", {
        className: u.k,
        children: [(0, a.jsx)(r.m, {
            text: d.intl.string(d.t.MPFyJ5),
            "aria-label": d.intl.string(d.t.X3Ekj8),
            children: (0, a.jsx)(i.tvc, {
                size: "md",
                color: "currentColor",
                className: u.o
            })
        }), (0, a.jsx)(i.Text, {
            variant: "text-xs/medium",
            children: d.intl.format(d.t.Sv8iic, {
                price: _,
                subscribeNowHook: e => (0, a.jsx)(c.Z, {
                    text: e,
                    onTrackClick: n
                })
            })
        })]
    })
}