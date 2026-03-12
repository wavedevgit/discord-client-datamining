/** chunk id: 444316 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var l = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(417597),
    r = i(397927),
    d = i(966327),
    c = i(287809),
    o = i(985018),
    u = i(290616);

function m(e) {
    let {
        friendMemberIds: t,
        className: i,
        avatarSize: n = r._3J.SIZE_16
    } = e, m = (0, a.yK)([c.default], () => t.slice(0, 3).map(e => c.default.getUser(e)).filter(e => null != e));
    if (0 === m.length) return null;
    let x = m[0],
        _ = {
            count: t.length - 1,
            username: x.username,
            username2: 2 === t.length && m.length >= 2 ? m[1].username : ""
        },
        h = o.intl.format(o.t["5NHEPu"], _);
    return (0, l.jsxs)("div", {
        className: s()(u.kL, i),
        children: [(0, l.jsx)("div", {
            className: u.yA,
            style: {
                maxHeight: `${(0,r.FT9)(n)}px`
            },
            children: m.map((e, t) => (0, l.jsx)("div", {
                className: u.R3,
                style: {
                    zIndex: m.length - t
                },
                children: (0, l.jsx)(d.A, {
                    user: e,
                    size: n
                })
            }, e.id))
        }), (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: h
        })]
    })
}