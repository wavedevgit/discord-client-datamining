/** Chunk was on 78528 **/
/** chunk id: 33324, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
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
    f = n(488803),
    g = n(385160),
    m = n(363487),
    b = n(871123),
    A = n(916023),
    y = n(590877),
    _ = n(281405),
    O = n(652215);

function j(e) {
    let t = (0, p.A)(e.id),
        n = (0, i.W)(e.id),
        j = (0, d.vz)(e.id),
        v = (0, l.r)(e),
        x = (0, b.jz)(e),
        E = (0, A.kt)({
            location: "guild-action-rows"
        }),
        C = (0, c.d)(e.id),
        S = (0, r.bG)([a.h], () => a.h.getNewMemberActions(e.id), [e.id]),
        I = (0, u.A)(e.id),
        N = (0, o.jY)(e.id),
        T = (0, s.fw)(e.id),
        P = [],
        w = e.features.has(O.GuildFeatures.HUB),
        R = e.features.has(O.GuildFeatures.COMMUNITY),
        D = (0, y.w)(!(0, h.WW)(e.id)),
        M = e.features.has(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        L = (0, m.A)(e.id);
    (0, g.Ao)("useGuildActionRows");
    let k = (0, f.C$)(e.id, "useGuildActionRows"),
        U = e.features.has(O.GuildFeatures.GAME_SERVERS);
    return w && P.push(_.n.GUILD_HUB_HEADER_OPTIONS), !N && C && I && null != S && S.length > 0 ? P.push(_.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(_.n.GUILD_PREMIUM_PROGRESS_BAR), !w && C && P.push(_.n.GUILD_HOME), t && P.push(_.n.GUILD_SCHEDULED_EVENTS), !w && R && D && P.push(_.n.CHANNELS_AND_ROLES), j && P.push(_.n.GUILD_ROLE_SUBSCRIPTIONS), v && P.push(_.n.GUILD_SHOP), x && E && P.push(_.n.GUILD_GAME_SHOP), (T && (R || M) || n && e.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && P.push(_.n.GUILD_MOD_DASH_MEMBER_SAFETY), L && P.push(_.n.GUILD_BOOSTS), k && U && P.push(_.n.GAME_SERVERS), P
}