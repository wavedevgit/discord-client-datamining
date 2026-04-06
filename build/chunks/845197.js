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
    g = n(390370),
    _ = n(191627),
    x = n(842130),
    A = n(985018),
    h = n(967082);

function p(e) {
    let {
        user: t
    } = e, l = (0, c.A)(), p = (0, u.xr)(), T = (0, r.bG)([d.default], () => d.default.getCurrentUser()), f = s.useCallback(() => {
        a()(void 0 !== T, "User must be logged in to accept a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("31385").then(n.bind(n, 58144));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: T,
                otherUser: t
            })
        })
    }, [T, t]), S = s.useCallback(() => {
        a()(void 0 !== T, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("84811").then(n.bind(n, 389094));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: T,
                otherUser: t
            })
        })
    }, [T, t]), b = s.useCallback(() => {
        a()(void 0 !== T, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("17219").then(n.bind(n, 187278));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: T,
                otherUser: t
            })
        })
    }, [T, t]);
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [(0, i.jsx)("div", {
            className: h.zH,
            children: (0, i.jsx)(g.A, {
                otherUser: t,
                status: _.Ef.PENDING
            })
        }), (0, i.jsx)("div", {
            className: h.o1,
            children: l ? (0, i.jsx)(m.A, {
                icon: o.PGe,
                tooltip: A.intl.string(x.default.e5iHmZ),
                onClick: b
            }) : (0, i.jsxs)(i.Fragment, {
                children: [p ? null : (0, i.jsx)(m.A, {
                    icon: o.A9s,
                    tooltip: A.intl.string(x.default.krWQZK),
                    onClick: f
                }), (0, i.jsx)(m.A, {
                    icon: o.PGe,
                    tooltip: A.intl.string(x.default.bBDeNI),
                    onClick: S
                })]
            })
        })]
    })
}