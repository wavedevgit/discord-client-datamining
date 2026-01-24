/** Chunk was on 77313 **/
/** chunk id: 882342, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(990078),
    i = n(397927),
    a = n(580630),
    s = n(993408),
    o = n(641563),
    c = n(652215),
    u = n(985018),
    d = n(778052);

function m(e) {
    let {
        product: t
    } = e, n = (0, s.yt)(t, c.lid.PREMIUM_TIER_2);
    if (null == n) return null;
    let m = (0, a.RS)(n.amount, n.currency);
    return (0, r.jsxs)("div", {
        className: d.k,
        children: [(0, r.jsx)(l.m, {
            text: u.intl.string(u.t.MPFyJ5),
            "aria-label": u.intl.string(u.t.X3Ekj8),
            children: (0, r.jsx)(i.tvc, {
                size: "md",
                color: "currentColor",
                className: d.o
            })
        }), (0, r.jsx)(i.Text, {
            variant: "text-xs/medium",
            children: u.intl.format(u.t.Sv8iic, {
                price: m,
                subscribeNowHook: e => (0, r.jsx)(o.Z, {
                    text: e
                })
            })
        })]
    })
}