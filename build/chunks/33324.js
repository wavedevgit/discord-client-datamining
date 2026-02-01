/** chunk id: 33324, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(321073);
var r = n(417597),
    l = n(41200),
    i = n(496767),
    s = n(134413),
    a = n(701785),
    o = n(101611),
    c = n(473529),
    u = n(978165),
    d = n(960253),
    p = n(18905),
    h = n(395504),
    g = n(488803),
    f = n(385160),
    m = n(363487),
    b = n(871123),
    A = n(916023),
    y = n(590877),
    O = n(281405),
    j = n(652215);

function x(e) {
    let t = (0, p.A)(e.id),
        n = (0, i.W)(e.id),
        x = (0, d.vz)(e.id),
        _ = (0, l.r)(e),
        v = (0, b.jz)(e),
        E = (0, A.kt)({
            location: "guild-action-rows"
        }),
        C = (0, c.d)(e.id),
        S = (0, r.bG)([a.h], () => a.h.getNewMemberActions(e.id), [e.id]),
        I = (0, u.A)(e.id),
        N = (0, o.jY)(e.id),
        T = (0, s.fw)(e.id),
        P = [],
        w = e.features.has(j.GuildFeatures.HUB),
        R = e.features.has(j.GuildFeatures.COMMUNITY),
        D = (0, y.w)(!(0, h.WW)(e.id)),
        L = e.features.has(j.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        M = (0, m.A)(e.id);
    (0, f.Ao)("useGuildActionRows");
    let G = (0, g.C$)(e.id, "useGuildActionRows"),
        k = e.features.has(j.GuildFeatures.GAME_SERVERS);
    return w && P.push(O.n.GUILD_HUB_HEADER_OPTIONS), !N && C && I && null != S && S.length > 0 ? P.push(O.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(O.n.GUILD_PREMIUM_PROGRESS_BAR), !w && C && P.push(O.n.GUILD_HOME), t && P.push(O.n.GUILD_SCHEDULED_EVENTS), !w && R && D && P.push(O.n.CHANNELS_AND_ROLES), x && P.push(O.n.GUILD_ROLE_SUBSCRIPTIONS), _ && P.push(O.n.GUILD_SHOP), v && E && P.push(O.n.GUILD_GAME_SHOP), (T && (R || L) || n && e.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && P.push(O.n.GUILD_MOD_DASH_MEMBER_SAFETY), M && P.push(O.n.GUILD_BOOSTS), G && k && P.push(O.n.GAME_SERVERS), P
}