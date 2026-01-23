/** Chunk was on 88615 **/
/** chunk id: 71478, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(311907),
    l = n(71393),
    i = n(652215),
    o = n(333354),
    s = n(985018);

function a(e) {
    return (0, r.bG)([l.A], () => {
        var t;
        return (null == (t = l.A.getGuild(e)) ? void 0 : t.features.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0
    }) ? {
        shouldShow: !0,
        text: s.intl.string(o.default.l9n4QZ)
    } : {
        shouldShow: !1,
        text: ""
    }
}