/** chunk id: 423183 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    l = n(469993),
    a = n(260509),
    r = n(71393),
    s = n(287809),
    o = n(652215);

function d(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuild(e)),
        n = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        d = null != t && (0, a.bM)(t, n),
        c = (0, l.oS)();
    return d && (t?.features.has(o.GuildFeatures.COMMUNITY) ?? !1) && c && !(t?.features.has(o.GuildFeatures.CREATOR_MONETIZABLE) || t?.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) || t?.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_DISABLED))
}