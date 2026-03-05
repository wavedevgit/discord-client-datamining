/** chunk id: 148131, original params: e,t,n (module,exports,require) **/
n.d(t, {
    w: () => h
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
    _ = n(191627),
    g = n(842130),
    m = n(985018),
    A = n(487693);

function h(e) {
    let {
        user: t
    } = e, l = (0, r.bG)([d.default], () => d.default.getCurrentUser()), h = s.useCallback(() => {
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
        className: A.kL,
        children: [(0, i.jsx)("div", {
            className: A.zH,
            children: (0, i.jsx)(u.A, {
                otherUser: t,
                status: _.Ef.ACTIVE
            })
        }), (0, i.jsx)("div", {
            className: A.o1,
            children: (0, i.jsx)(c.A, {
                icon: o.PGe,
                tooltip: m.intl.string(g.default.l20ZZp),
                onClick: h
            })
        })]
    })
}