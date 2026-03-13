/** chunk id: 751394 params = (module,exports,require) **/
i.d(t, {
    q: () => G
});
var n = i(64700),
    l = i(311907),
    s = i(217238),
    a = i(641411),
    r = i(594792),
    d = i(576705),
    o = i(985018);
let u = {
        "server-subscriptions-onboarding": r.A,
        "server-subscriptions-finish-setting-up": a.A,
        "server-subscriptions-create-tier-from-template": s.A
    },
    c = {
        title: () => o.intl.string(o.t.V42OaH),
        description: () => o.intl.string(o.t["7dJ16X"]),
        selectGuildCta: () => o.intl.string(o.t.LhlgY9),
        createGuildDescription: () => o.intl.string(o.t.anOisx),
        createGuildCta: () => o.intl.string(o.t.B44MTm),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.bG)([d.A], () => e => d.A.canAccessGuildSettings(e), [], l.My)
    };

function G(e) {
    let [t] = n.useState(null == e ? void 0 : u[e]), i = c.useIsGuildSupported(), l = t?.useIsGuildSupported?.(), s = {
        ...c,
        ...t ?? {}
    };
    return {
        title: s.title(),
        description: s.description(),
        selectGuildCta: s.selectGuildCta(),
        createGuildDescription: s.createGuildDescription(),
        createGuildCta: s.createGuildCta(),
        canCreateGuild: s.canCreateGuild,
        isGuildSupported: (e, t) => i(e, t) && l?.(e, t) !== !1
    }
}