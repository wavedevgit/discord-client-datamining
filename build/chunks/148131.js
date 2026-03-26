/** chunk id: 148131 params = (module,exports,require) **/
n.d(t, {
    w: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(417597),
    o = n(397927),
    d = n(287809),
    c = n(53719),
    u = n(390370),
    m = n(191627),
    _ = n(842130),
    g = n(985018),
    x = n(967082);

function A(e) {
    let {
        user: t
    } = e, l = (0, r.bG)([d.default], () => d.default.getCurrentUser()), A = s.useCallback(() => {
        a()(void 0 !== l, "User must be logged in to accept a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("43139").then(n.bind(n, 179950));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: l,
                otherUser: t
            })
        })
    }, [l, t]);
    return (0, i.jsxs)("div", {
        className: x.kL,
        children: [(0, i.jsx)("div", {
            className: x.zH,
            children: (0, i.jsx)(u.A, {
                otherUser: t,
                status: m.Ef.ACTIVE
            })
        }), (0, i.jsx)("div", {
            className: x.o1,
            children: (0, i.jsx)(c.A, {
                icon: o.PGe,
                tooltip: g.intl.string(_.default.l20ZZp),
                onClick: A
            })
        })]
    })
}