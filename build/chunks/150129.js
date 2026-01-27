/** Chunk was on web.js **/
/** chunk id: 150129, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(717125),
    i = n(41200),
    a = n(496767),
    o = n(134413),
    s = n(713125),
    l = n(473529),
    c = n(960253),
    u = n(154325),
    d = n(488803),
    f = n(56595),
    p = n(871123),
    _ = n(353202),
    h = n(734057),
    m = n(317525),
    g = n(71393),
    E = n(403362),
    y = n(376943),
    b = n(652215),
    O = n(746080);
async function v(e) {
    let {
        guildId: t,
        channelId: n
    } = e, v = g.A.getGuild(t), A = m.A.getUnsafeMutableRoles(t);
    if (null == v && t !== b.ME && n !== O.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, O.jq)(n)) switch (n) {
        case O.VV.ROLE_SUBSCRIPTIONS:
            return (0, c.l8)(t, A);
        case O.VV.SERVER_MONETIZATION_ONBOARDING:
            return null != v && (0, u.t)(v);
        case O.VV.GAME_SHOP:
            return (0, p.jz)(null != v ? v : {
                id: t
            });
        case O.VV.GUILD_SHOP:
            return (0, i.K)(v, A);
        case O.VV.MEMBER_APPLICATIONS:
            return (0, a.h)(t);
        case O.VV.GUILD_HOME:
            return (0, l.K)(t);
        case O.VV.CHANNEL_BROWSER:
            return null != v && v.features.has(b.GuildFeatures.COMMUNITY);
        case O.VV.GUILD_ONBOARDING:
            return s.Ay.shouldShowOnboarding(t);
        case O.VV.CUSTOMIZE_COMMUNITY:
            return null != v && v.features.has(b.GuildFeatures.COMMUNITY);
        case O.VV.MEMBER_SAFETY:
            return (0, o.Ml)(t);
        case O.VV.GUILD_BOOSTS:
            return !0;
        case O.VV.REPORT_TO_MOD:
            return null != v && (0, f.A)(v);
        case O.VV.GAME_SERVERS:
            return (0, d.TS)(t, "isAccessibleChannelOrThreadPath") && null != v && v.features.has(b.GuildFeatures.GAME_SERVERS);
        default:
            (0, E.xb)(n)
    }
    let I = h.A.getChannel(n);
    return (null != I || (await _.A.loadThread(n), null != (I = h.A.getChannel(n)))) && ((0, y.nc)(I) || r.A.isChannelGatedAndVisible(t, n))
}