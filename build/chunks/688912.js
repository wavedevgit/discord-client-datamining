/** chunk id: 688912 params = (module,exports,require) **/
n.d(t, {
    Z: () => u
});
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(562783),
    r = n(290389),
    a = n(704724),
    o = n(171316),
    d = n(500470),
    c = n(985018);

function u() {
    let e = (0, d.k)(),
        t = (0, o.xs)(),
        n = [{
            value: s.TO.BLUR,
            label: c.intl.string(c.t.S49Uad)
        }, {
            value: s.TO.BLOCK,
            label: c.intl.string(c.t["D/157Y"])
        }];
    if (null == t || null == e) return null;
    let u = t => {
            (0, a.Jz)(e, t)
        },
        {
            explicitContentFriendDm: m,
            explicitContentNonFriendDm: g
        } = t;
    return (0, i.jsxs)(l.E, {
        description: c.intl.string(c.t.Wnojv1),
        children: [(0, i.jsx)(r.A, {
            title: c.intl.string(c.t["+uI23H"]),
            value: m,
            onChange: e => u({
                explicitContentFriendDm: e
            }),
            options: n
        }), (0, i.jsx)(r.A, {
            title: c.intl.string(c.t["Yh+HX1"]),
            value: g,
            onChange: e => u({
                explicitContentNonFriendDm: e
            }),
            options: n
        })]
    })
}