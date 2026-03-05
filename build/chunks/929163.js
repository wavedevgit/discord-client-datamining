/** chunk id: 929163 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    r = n(71393),
    l = n(175650),
    a = n(567305),
    s = n(555325),
    o = n(652215);

function d(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuild(e)),
        n = (0, a._Y)(e),
        d = (0, a.a0)(),
        c = t?.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 && t?.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1,
        u = (0, s.X9)(t);
    return c && d && u && l.ok.trackExposure({
        guildId: e,
        location: "ca30d9_1"
    }), c && d && u && n
}