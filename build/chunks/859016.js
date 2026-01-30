/** chunk id: 859016, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(262828),
    s = n(327427),
    a = n(857802),
    o = n(705751);
let c = e => {
    let {
        guild: t
    } = e, {
        application: n,
        loading: c
    } = (0, l.A)(t.id, o.S7.GUILD_ROLE_SUBSCRIPTIONS);
    return c ? (0, r.jsx)(i.y$y, {}) : null != n ? (0, r.jsx)(s.A, {
        guildId: t.id,
        application: n
    }) : (0, r.jsx)(a.A, {
        guild: t
    })
}