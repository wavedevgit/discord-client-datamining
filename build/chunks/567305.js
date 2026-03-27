/** chunk id: 567305 params = (module,exports,require) **/
n.d(t, {
    TG: () => o,
    _Y: () => d,
    hA: () => s
});
var r = n(417597),
    i = n(71393),
    l = n(652215);
let a = [l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED, l.GuildFeatures.CREATOR_MONETIZABLE, l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL],
    s = e => null != e && a.some(t => e.features.has(t));

function o(e) {
    let t = i.A.getGuild(e);
    return t?.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1
}

function d(e) {
    return (0, r.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return t?.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1
    })
}