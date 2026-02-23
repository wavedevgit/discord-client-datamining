/** chunk id: 845197, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => p
});
var i = n(627968),
    s = n(64700),
    a = n(284009),
    r = n.n(a),
    l = n(417597),
    o = n(397927),
    c = n(287809),
    d = n(438732),
    u = n(834981),
    _ = n(53719),
    m = n(390370),
    A = n(191627),
    g = n(842130),
    h = n(985018),
    x = n(487693);

function p(e) {
    let {
        user: t
    } = e, a = (0, d.A)(), p = (0, u.xr)(), E = (0, l.bG)([c.default], () => c.default.getCurrentUser()), C = s.useCallback(() => {
        r()(void 0 !== E, "User must be logged in to accept a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("31385").then(n.bind(n, 58144));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: E,
                otherUser: t
            })
        })
    }, [E, t]), T = s.useCallback(() => {
        r()(void 0 !== E, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("84811").then(n.bind(n, 389094));
            return n => (0, i.jsx)(e, {
                ...n,
                currentUser: E,
                otherUser: t
            })
        })
    }, [E, t]), S = s.useCallback(() => {
        r()(void 0 !== E, "User must be logged in to decline a link request"), (0, o.mMO)(async () => {
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
        className: x.kL,
        children: [(0, i.jsx)("div", {
            className: x.zH,
            children: (0, i.jsx)(m.A, {
                otherUser: t,
                status: A.Ef.PENDING
            })
        }), (0, i.jsx)("div", {
            className: x.o1,
            children: a ? (0, i.jsx)(_.A, {
                icon: o.PGe,
                tooltip: h.intl.string(g.default.e5iHmZ),
                onClick: S
            }) : (0, i.jsxs)(i.Fragment, {
                children: [p ? null : (0, i.jsx)(_.A, {
                    icon: o.A9s,
                    tooltip: h.intl.string(g.default.krWQZK),
                    onClick: C
                }), (0, i.jsx)(_.A, {
                    icon: o.PGe,
                    tooltip: h.intl.string(g.default.bBDeNI),
                    onClick: T
                })]
            })
        })]
    })
}