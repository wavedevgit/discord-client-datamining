/** Chunk was on 39048 **/
/** chunk id: 84763, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(397927),
    s = n(262828),
    a = n(555337),
    o = n(130978),
    c = n(831806),
    d = n(652215),
    u = n(705751);

function g() {
    let e = (0, i.bG)([a.A], () => a.A.getGuild()),
        t = (0, o.w)(null == e ? void 0 : e.id, "guild_product_settings"),
        {
            application: n,
            loading: g
        } = (0, s.A)(null == e ? void 0 : e.id, u.S7.GUILD_ROLE_SUBSCRIPTIONS),
        m = null != n && (null == e ? void 0 : e.features.has(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
    return (0, r.jsx)("main", {
        children: null == e || !t || g ? (0, r.jsx)(l.y$y, {}) : (0, r.jsx)(c.o, {
            guildId: e.id,
            hasValidApplication: m
        })
    })
}