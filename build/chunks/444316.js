/** chunk id: 444316, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var n = t(627968);
t(64700);
var i = t(417597),
    s = t(397927),
    a = t(966327),
    r = t(287809),
    c = t(985018),
    u = t(290616);

function d(e) {
    let {
        friendMemberIds: l
    } = e, t = (0, i.yK)([r.default], () => l.slice(0, 3).map(e => r.default.getUser(e)).filter(e => null != e));
    if (0 === t.length) return null;
    let d = t[0],
        o = {
            count: l.length - 1,
            username: d.username,
            username2: 2 === l.length && t.length >= 2 ? t[1].username : ""
        },
        m = c.intl.format(c.t["5NHEPu"], o);
    return (0, n.jsxs)("div", {
        className: u.kL,
        children: [(0, n.jsx)("div", {
            className: u.yA,
            children: t.map((e, l) => (0, n.jsx)("div", {
                className: u.R3,
                style: {
                    zIndex: t.length - l
                },
                children: (0, n.jsx)(a.A, {
                    user: e,
                    size: s._3J.SIZE_16
                })
            }, e.id))
        }), (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: m
        })]
    })
}