/** Chunk was on 86142 **/
/** chunk id: 444316, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(417597),
    s = n(397927),
    l = n(966327),
    a = n(287809),
    o = n(985018),
    c = n(36522);

function d(e) {
    let {
        friendMemberIds: t
    } = e, n = (0, i.yK)([a.default], () => t.slice(0, 3).map(e => a.default.getUser(e)).filter(e => null != e));
    if (0 === n.length) return null;
    let d = n[0],
        u = {
            count: t.length - 1,
            username: d.username,
            username2: 2 === t.length && n.length >= 2 ? n[1].username : ""
        },
        h = o.intl.format(o.t["5NHEPu"], u);
    return (0, r.jsxs)("div", {
        className: c.kL,
        children: [(0, r.jsx)("div", {
            className: c.yA,
            children: n.map((e, t) => (0, r.jsx)("div", {
                className: c.R3,
                style: {
                    zIndex: n.length - t
                },
                children: (0, r.jsx)(l.A, {
                    user: e,
                    size: s._3J.SIZE_16
                })
            }, e.id))
        }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: h
        })]
    })
}