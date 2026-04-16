/** chunk id: 801667 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(932001),
    r = n(153488),
    o = n(197305),
    c = n(498642),
    d = n(71393),
    u = n(320501),
    h = n(576705),
    m = n(927813),
    A = n(661191),
    g = n(302909),
    _ = n(342220),
    p = n(652215);
let f = 90 * m.A.Millis.DAY,
    E = 14 * m.A.Millis.DAY;

function C(e) {
    let t = (0, l.bG)([d.A], () => d.A.getGuild(e.guild_id)),
        n = (0, l.bG)([c.A], () => c.A.getMemberCount(t?.id) ?? 0),
        m = (0, l.bG)([u.A], () => u.A.getLastMessage(e.id)),
        C = (0, l.bG)([h.A], () => null != t && h.A.can(p.xBc.ADMINISTRATOR, t)),
        x = (0, l.bG)([o.A], () => o.A.getGuildAffinity(e.guild_id)?.score),
        S = (0, l.bG)([r.A], () => r.A.hasConsented(p.YAq.PERSONALIZATION)),
        I = (0, _.A)(),
        {
            enabled: T
        } = g.A.useConfig({
            location: "useIsEligibleForFirstBoosterUpsell"
        }),
        [v] = (0, a.Wl)(s.M.FIRST_BOOSTER_UPSELL_OVERSEER, {
            cooldownDurationMs: 0,
            numTimesToRecur: 3
        }),
        N = v === s.M.FIRST_BOOSTER_UPSELL_OVERSEER;
    return i.useMemo(() => !(!T || !N || !S || null == x || x <= 17.06 || e.type !== p.rbe.GUILD_TEXT || null == t || A.default.age(t.id) < f || null == t.premiumSubscriberCount || 0 !== t.premiumSubscriberCount || n < 10 || m?.id == null || A.default.age(m.id) > E) && (C || I), [T, N, S, e.type, t, n, x, m?.id, C, I])
}