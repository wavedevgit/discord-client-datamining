/** chunk id: 328776 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(287809),
    o = n(562153),
    d = n(215530),
    c = n(168015),
    u = n(454719),
    h = n(10635),
    A = n(318162),
    _ = n(762561),
    m = n(985018);

function p(e) {
    let {
        channel: t
    } = e, [n] = t.recipients, p = (0, s.bG)([r.default], () => r.default.getUser(n)), g = (0, s.bG)([r.default], () => r.default.getCurrentUser()), f = (0, c.A)(), [E, x] = (0, d.A)(n);
    if (l.useEffect(() => {
            (0, u.A)(p ?? n, {
                type: "sidebar",
                withMutualFriendsCount: p?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id
            })
        }, [p, n, t.id]), null == p || null == g || !f) return null;
    let I = `user-profile-sidebar-heading-${p.id}`,
        C = o.Ay.getName(null, t.id, p);
    return (0, i.jsx)("aside", {
        "aria-labelledby": I,
        children: (0, i.jsx)(a.Fmo, {
            component: (0, i.jsx)(a.AC4, {
                children: (0, i.jsx)(a.H, {
                    id: I,
                    children: m.intl.format(m.t.KRe1Fk, {
                        name: C
                    })
                })
            }),
            children: E ? (0, i.jsx)(A.A, {
                user: p,
                currentUser: g,
                onHide: x,
                ...e
            }) : p.isNonUserBot() ? (0, i.jsx)(h.A, {
                user: p,
                currentUser: g,
                ...e
            }) : (0, i.jsx)(_.A, {
                user: p,
                currentUser: g,
                ...e
            })
        })
    })
}