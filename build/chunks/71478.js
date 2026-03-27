/** chunk id: 71478 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(311907),
    i = n(71393),
    s = n(652215),
    l = n(136708),
    o = n(985018);

function a(e) {
    return (0, r.bG)([i.A], () => i.A.getGuild(e)?.features.has(s.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0) ? {
        shouldShow: !0,
        text: o.intl.string(l.default.l9n4QZ)
    } : {
        shouldShow: !1,
        text: ""
    }
}