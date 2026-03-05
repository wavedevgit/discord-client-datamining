/** chunk id: 845197, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => x
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
    _ = n(53719),
    g = n(390370),
    m = n(191627),
    A = n(870236),
    h = n(985018),
    p = n(386787);

function x(e) {
    let {
        user: t
    } = e, l = (0, c.A)(), x = (0, u.xr)(), E = (0, r.bG)([d.default], () => d.default.getCurrentUser()), T = s.useCallback(() => {
        a()(void 0 !== E, "User must be logged in to accept a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("31385").then(n.bind(n, 58144));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: E,
                otherUser: t
            })
        })
    }, [E, t]), S = s.useCallback(() => {
        a()(void 0 !== E, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("84811").then(n.bind(n, 389094));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: E,
                otherUser: t
            })
        })
    }, [E, t]), C = s.useCallback(() => {
        a()(void 0 !== E, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("17219").then(n.bind(n, 187278));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: E,
                otherUser: t
            })
        })
    }, [E, t]);
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [(0, i.jsx)("div", {
            className: p.zH,
            children: (0, i.jsx)(g.A, {
                otherUser: t,
                status: m.Ef.PENDING
            })
        }), (0, i.jsx)("div", {
            className: p.o1,
            children: l ? (0, i.jsx)(_.A, {
                icon: o.PGe,
                tooltip: h.intl.string(A.default.e5iHmZ),
                onClick: C
            }) : (0, i.jsxs)(i.Fragment, {
                children: [x ? null : (0, i.jsx)(_.A, {
                    icon: o.A9s,
                    tooltip: h.intl.string(A.default.krWQZK),
                    onClick: T
                }), (0, i.jsx)(_.A, {
                    icon: o.PGe,
                    tooltip: h.intl.string(A.default.bBDeNI),
                    onClick: S
                })]
            })
        })]
    })
}