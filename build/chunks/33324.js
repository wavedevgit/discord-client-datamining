/** chunk id: 33324 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(321073);
var i = n(417597),
    s = n(554146),
    l = n(41200),
    a = n(932001),
    r = n(903223),
    o = n(496767),
    c = n(134413),
    d = n(701785),
    u = n(101611),
    h = n(473529),
    A = n(978165),
    m = n(960253),
    _ = n(18905),
    g = n(488803),
    p = n(969117),
    f = n(363487),
    x = n(871123),
    E = n(281405),
    C = n(652215);

function I(e) {
    let t = (0, _.A)(e.id),
        n = (0, o.W)(e.id),
        I = (0, m.vz)(e.id),
        N = (0, l.r)(e),
        S = (0, x.jz)(e),
        b = (0, h.d)(e.id),
        T = (0, i.bG)([d.h], () => d.h.getNewMemberActions(e.id), [e.id]),
        v = (0, A.A)(e.id),
        y = (0, u.jY)(e.id),
        j = (0, c.fw)(e.id),
        R = [],
        O = e.features.has(C.GuildFeatures.HUB),
        L = e.features.has(C.GuildFeatures.COMMUNITY),
        M = e.features.has(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        D = (0, f.A)(e.id),
        G = (0, g.C$)(e.id, "useGuildActionRows"),
        U = e.features.has(C.GuildFeatures.GAME_SERVERS),
        P = (0, p.N)("useGuildActionRows"),
        [w] = (0, a.kn)(G && P && !U ? [s.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0),
        k = (0, r.ws)(e, {
            location: "guild-action-rows"
        });
    return O && R.push(E.n.GUILD_HUB_HEADER_OPTIONS), !y && b && v && null != T && T.length > 0 ? R.push(E.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : k && R.push(E.n.GUILD_PREMIUM_PROGRESS_BAR), !O && b && R.push(E.n.GUILD_HOME), t && R.push(E.n.GUILD_SCHEDULED_EVENTS), !O && L && R.push(E.n.CHANNELS_AND_ROLES), I && R.push(E.n.GUILD_ROLE_SUBSCRIPTIONS), N && R.push(E.n.GUILD_SHOP), S && R.push(E.n.GUILD_GAME_SHOP), (j && (L || M) || n && e.features.has(C.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && R.push(E.n.GUILD_MOD_DASH_MEMBER_SAFETY), D && R.push(E.n.GUILD_BOOSTS), G && (U ? R.push(E.n.GAME_SERVERS) : null != w && R.push(E.n.GAME_SERVERS_EMPTY)), R
}