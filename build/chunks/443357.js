/** chunk id: 443357 params = (module,exports,require) **/
n.d(t, {
    q: () => u
});
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(86689),
    a = n(639383),
    r = n(704724),
    o = n(171316),
    d = n(500470),
    c = n(985018);

function u() {
    let e = (0, d.k)(),
        t = (0, o.gr)();
    if (null == t || null == e) return null;
    let {
        goreContentFriendDm: n,
        goreContentNonFriendDm: u
    } = t, _ = t => {
        (0, r.qY)(e, t)
    }, g = [{
        value: s.TO.BLUR,
        label: c.intl.string(c.t.S49Uad)
    }, {
        value: s.TO.BLOCK,
        label: c.intl.string(c.t["D/157Y"])
    }];
    return (0, i.jsxs)(l.E, {
        description: c.intl.string(c.t.XgH9eh),
        children: [(0, i.jsx)(a.A, {
            title: c.intl.string(c.t["+uI23H"]),
            value: n,
            onChange: e => _({
                goreContentFriendDm: e
            }),
            options: g
        }), (0, i.jsx)(a.A, {
            title: c.intl.string(c.t["Yh+HX1"]),
            value: u,
            onChange: e => _({
                goreContentNonFriendDm: e
            }),
            options: g
        })]
    })
}