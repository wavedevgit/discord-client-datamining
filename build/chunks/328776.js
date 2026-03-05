/** chunk id: 328776, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(287809),
    o = n(562153),
    c = n(215530),
    d = n(168015),
    u = n(454719),
    h = n(10635),
    A = n(318162),
    m = n(762561),
    p = n(985018);

function g(e) {
    let {
        channel: t
    } = e, [n] = t.recipients, g = (0, l.bG)([a.default], () => a.default.getUser(n)), _ = (0, l.bG)([a.default], () => a.default.getCurrentUser()), f = (0, d.A)(), [x, C] = (0, c.A)(n);
    if (s.useEffect(() => {
            (0, u.A)(g ?? n, {
                type: "sidebar",
                withMutualFriendsCount: g?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id
            })
        }, [g, n, t.id]), null == g || null == _ || !f) return null;
    let E = `user-profile-sidebar-heading-${g.id}`,
        I = o.Ay.getName(null, t.id, g);
    return (0, i.jsx)("aside", {
        "aria-labelledby": E,
        children: (0, i.jsx)(r.Fmo, {
            component: (0, i.jsx)(r.AC4, {
                children: (0, i.jsx)(r.H, {
                    id: E,
                    children: p.intl.format(p.t.KRe1Fk, {
                        name: I
                    })
                })
            }),
            children: x ? (0, i.jsx)(A.A, {
                user: g,
                currentUser: _,
                onHide: C,
                ...e
            }) : g.isNonUserBot() ? (0, i.jsx)(h.A, {
                user: g,
                currentUser: _,
                ...e
            }) : (0, i.jsx)(m.A, {
                user: g,
                currentUser: _,
                ...e
            })
        })
    })
}