/** chunk id: 929163 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    r = n(71393),
    l = n(567305),
    a = n(555325),
    s = n(652215);

function o(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuild(e)),
        n = (0, l._Y)(e),
        o = t?.features.has(s.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 && t?.features.has(s.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1,
        d = (0, a.X9)(t);
    return o && d && n
}