/** chunk id: 665037 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    G: () => g
});
var i, r = n(64700),
    a = n(311907),
    l = n(285059),
    s = n(82005),
    o = n(508654),
    d = n(221094),
    c = n(320426),
    u = n(915043),
    A = n(788866),
    h = n(992250),
    _ = n(15438),
    m = n(652215),
    g = ((i = {})[i.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", i[i.MAX_MEMBER_COUNT = 1] = "MAX_MEMBER_COUNT", i[i.GUILD_LIVE_CHANNEL = 2] = "GUILD_LIVE_CHANNEL", i[i.GUILD_MFA_WARNING = 3] = "GUILD_MFA_WARNING", i[i.COMMANDS_MIGRATION = 4] = "COMMANDS_MIGRATION", i[i.APPLICATION_SUBSCRIPTION_EXPIRATION = 5] = "APPLICATION_SUBSCRIPTION_EXPIRATION", i[i.HUB_STUDY_ROOM = 6] = "HUB_STUDY_ROOM", i[i.CLAN_UPSELL = 7] = "CLAN_UPSELL", i);

function p(e) {
    let t = e?.id ?? m.dJq,
        n = (0, a.bG)([A.A], () => A.A.isVisible(e)),
        i = (0, a.bG)([_.A], () => _.A.isVisible(e)),
        g = (0, s.C)(t),
        p = (0, a.bG)([h.A], () => h.A.isVisible(e)),
        E = c.A.useShouldShowChannelNotice(t),
        I = (0, u.$s)(e),
        {
            enableStudyGroup: f
        } = (0, d.y)(e),
        C = I.length > 0,
        T = f && !e?.features.has(m.GuildFeatures.HUB),
        N = (0, o.WG)(t);
    if (r.useEffect(() => {
            l.A.getGuildEventsForCurrentUser(t)
        }, [t]), n) return 0;
    if (i) return 1;
    if (g || null != N) return 2;
    if (p) return 3;
    if (E) return 4;
    else if (C) return 5;
    else if (T) return 6;
    return null
}