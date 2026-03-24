/** chunk id: 328776 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(287809),
    o = n(562153),
    c = n(215530),
    d = n(168015),
    u = n(454719),
    h = n(10635),
    A = n(318162),
    m = n(762561),
    p = n(985018);

function _(e) {
    let {
        channel: t
    } = e, [n] = t.recipients, _ = (0, l.bG)([r.default], () => r.default.getUser(n)), g = (0, l.bG)([r.default], () => r.default.getCurrentUser()), f = (0, d.A)(), [x, C] = (0, c.A)(n);
    if (s.useEffect(() => {
            (0, u.A)(_ ?? n, {
                type: "sidebar",
                withMutualFriendsCount: _?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id
            })
        }, [_, n, t.id]), null == _ || null == g || !f) return null;
    let E = `user-profile-sidebar-heading-${_.id}`,
        I = o.Ay.getName(null, t.id, _);
    return (0, i.jsx)("aside", {
        "aria-labelledby": E,
        children: (0, i.jsx)(a.Fmo, {
            component: (0, i.jsx)(a.AC4, {
                children: (0, i.jsx)(a.H, {
                    id: E,
                    children: p.intl.format(p.t.KRe1Fk, {
                        name: I
                    })
                })
            }),
            children: x ? (0, i.jsx)(A.A, {
                user: _,
                currentUser: g,
                onHide: C,
                ...e
            }) : _.isNonUserBot() ? (0, i.jsx)(h.A, {
                user: _,
                currentUser: g,
                ...e
            }) : (0, i.jsx)(m.A, {
                user: _,
                currentUser: g,
                ...e
            })
        })
    })
}