/** Chunk was on 60667 **/
/** chunk id: 443357, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => u
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
        t = (0, o.gr)();
    if (null == t || null == e) return null;
    let {
        goreContentFriendDm: n,
        goreContentNonFriendDm: u
    } = t, _ = t => {
        (0, a.qY)(e, t)
    }, p = [{
        value: i.TO.BLUR,
        label: d.intl.string(d.t.S49Uad)
    }, {
        value: i.TO.BLOCK,
        label: d.intl.string(d.t["D/157Y"])
    }];
    return (0, r.jsxs)(l.E, {
        description: d.intl.string(d.t.XgH9eh),
        children: [(0, r.jsx)(s.A, {
            title: d.intl.string(d.t["+uI23H"]),
            value: n,
            onChange: e => _({
                goreContentFriendDm: e
            }),
            options: p
        }), (0, r.jsx)(s.A, {
            title: d.intl.string(d.t["Yh+HX1"]),
            value: u,
            onChange: e => _({
                goreContentNonFriendDm: e
            }),
            options: p
        })]
    })
}