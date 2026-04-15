/** chunk id: 33324 params = (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(321073);
var i = n(417597),
    l = n(554146),
    s = n(41200),
    a = n(932001),
    r = n(496767),
    o = n(134413),
    d = n(701785),
    c = n(101611),
    u = n(473529),
    h = n(978165),
    A = n(960253),
    _ = n(18905),
    m = n(488803),
    p = n(969117),
    g = n(363487),
    f = n(871123),
    E = n(281405),
    x = n(652215);

function I(e) {
    let t = (0, _.A)(e.id),
        n = (0, r.W)(e.id),
        I = (0, A.vz)(e.id),
        C = (0, s.r)(e),
        N = (0, f.jz)(e),
        T = (0, u.d)(e.id),
        S = (0, i.bG)([d.h], () => d.h.getNewMemberActions(e.id), [e.id]),
        b = (0, h.A)(e.id),
        y = (0, c.jY)(e.id),
        v = (0, o.fw)(e.id),
        j = [],
        R = e.features.has(x.GuildFeatures.HUB),
        O = e.features.has(x.GuildFeatures.COMMUNITY),
        L = e.features.has(x.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        M = (0, g.A)(e.id),
        D = (0, m.C$)(e.id, "useGuildActionRows"),
        U = e.features.has(x.GuildFeatures.GAME_SERVERS),
        G = (0, p.N)("useGuildActionRows"),
        [P] = (0, a.kn)(D && G && !U ? [l.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
    return R && j.push(E.n.GUILD_HUB_HEADER_OPTIONS), !y && T && b && null != S && S.length > 0 ? j.push(E.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && j.push(E.n.GUILD_PREMIUM_PROGRESS_BAR), !R && T && j.push(E.n.GUILD_HOME), t && j.push(E.n.GUILD_SCHEDULED_EVENTS), !R && O && j.push(E.n.CHANNELS_AND_ROLES), I && j.push(E.n.GUILD_ROLE_SUBSCRIPTIONS), C && j.push(E.n.GUILD_SHOP), N && j.push(E.n.GUILD_GAME_SHOP), (v && (O || L) || n && e.features.has(x.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && j.push(E.n.GUILD_MOD_DASH_MEMBER_SAFETY), M && j.push(E.n.GUILD_BOOSTS), D && (U ? j.push(E.n.GAME_SERVERS) : null != P && j.push(E.n.GAME_SERVERS_EMPTY)), j
}