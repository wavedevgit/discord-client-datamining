/** chunk id: 688912, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => u
});
var r = n(627968);
n(64700);
var i = n(873298),
    l = n(86689),
    s = n(639383),
    a = n(704724),
    o = n(171316),
    c = n(500470),
    d = n(985018);

function u() {
    let e = (0, c.k)(),
        t = (0, o.xs)(),
        n = [{
            value: i.TO.BLUR,
            label: d.intl.string(d.t.S49Uad)
        }, {
            value: i.TO.BLOCK,
            label: d.intl.string(d.t["D/157Y"])
        }];
    if (null == t || null == e) return null;
    let u = t => {
            (0, a.Jz)(e, t)
        },
        {
            explicitContentFriendDm: _,
            explicitContentNonFriendDm: p
        } = t;
    return (0, r.jsxs)(l.E, {
        description: d.intl.string(d.t.Wnojv1),
        children: [(0, r.jsx)(s.A, {
            title: d.intl.string(d.t["+uI23H"]),
            value: _,
            onChange: e => u({
                explicitContentFriendDm: e
            }),
            options: n
        }), (0, r.jsx)(s.A, {
            title: d.intl.string(d.t["Yh+HX1"]),
            value: p,
            onChange: e => u({
                explicitContentNonFriendDm: e
            }),
            options: n
        })]
    })
}