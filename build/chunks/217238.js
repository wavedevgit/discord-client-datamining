/** chunk id: 217238 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(311907),
    l = i(49463),
    s = i(576705),
    a = i(567305),
    r = i(652215),
    d = i(985018);
let o = {
    title: () => d.intl.string(d.t.aTFQKh),
    description: () => d.intl.string(d.t.oTbFQg),
    canCreateGuild: !1,
    useIsGuildSupported: () => (0, n.bG)([l.A, s.A], () => e => e.features.has(r.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && !e.features.has(r.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && s.A.can(r.xBc.ADMINISTRATOR, e) && (0, a.D3)() && (0, a.TG)(e.id), [])
}