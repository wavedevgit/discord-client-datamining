/** chunk id: 929163 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    a = n(71393),
    l = n(175650),
    r = n(567305),
    s = n(555325),
    o = n(652215);

function d(e) {
    let t = (0, i.bG)([a.A], () => a.A.getGuild(e)),
        n = (0, r._Y)(e),
        d = (0, r.a0)(),
        c = t?.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 && t?.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1,
        u = (0, s.X9)(t);
    return c && d && u && l.ok.trackExposure({
        guildId: e,
        location: "ca30d9_1"
    }), c && d && u && n
}