/** chunk id: 845197 params = (module,exports,require) **/
n.d(t, {
    M: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(417597),
    o = n(397927),
    d = n(287809),
    c = n(438732),
    u = n(834981),
    m = n(53719),
    _ = n(390370),
    g = n(191627),
    x = n(870236),
    A = n(985018),
    h = n(267507);

function p(e) {
    let {
        user: t
    } = e, l = (0, c.A)(), p = (0, u.xr)(), f = (0, r.bG)([d.default], () => d.default.getCurrentUser()), T = s.useCallback(() => {
        a()(void 0 !== f, "User must be logged in to accept a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("31385").then(n.bind(n, 58144));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: f,
                otherUser: t
            })
        })
    }, [f, t]), S = s.useCallback(() => {
        a()(void 0 !== f, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("84811").then(n.bind(n, 389094));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: f,
                otherUser: t
            })
        })
    }, [f, t]), E = s.useCallback(() => {
        a()(void 0 !== f, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("17219").then(n.bind(n, 187278));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: f,
                otherUser: t
            })
        })
    }, [f, t]);
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [(0, i.jsx)("div", {
            className: h.zH,
            children: (0, i.jsx)(_.A, {
                otherUser: t,
                status: g.Ef.PENDING
            })
        }), (0, i.jsx)("div", {
            className: h.o1,
            children: l ? (0, i.jsx)(m.A, {
                icon: o.PGe,
                tooltip: A.intl.string(x.default.e5iHmZ),
                onClick: E
            }) : (0, i.jsxs)(i.Fragment, {
                children: [p ? null : (0, i.jsx)(m.A, {
                    icon: o.A9s,
                    tooltip: A.intl.string(x.default.krWQZK),
                    onClick: T
                }), (0, i.jsx)(m.A, {
                    icon: o.PGe,
                    tooltip: A.intl.string(x.default.bBDeNI),
                    onClick: S
                })]
            })
        })]
    })
}