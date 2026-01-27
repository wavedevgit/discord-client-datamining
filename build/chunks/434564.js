/** Chunk was on web.js **/
/** chunk id: 434564, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l,
    G: () => s
});
var r = n(311907),
    i = n(71393),
    a = n(864310),
    o = n(652215);

function s(e) {
    var t, n;
    let r = (0, a.Z)(e),
        s = null != (t = null == (n = i.A.getGuild(e)) ? void 0 : n.premiumTier) ? t : o.TVA.NONE;
    return o.M2T[s] + r.available
}

function l(e) {
    let t = (0, a.A)(e),
        n = (0, r.bG)([i.A], () => {
            var t, n;
            return null != (t = null == (n = i.A.getGuild(e)) ? void 0 : n.premiumTier) ? t : o.TVA.NONE
        });
    return ((0, r.bG)([i.A], () => {
        var t;
        return (null == (t = i.A.getGuild(e)) ? void 0 : t.features.has(o.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0
    }) ? 0 : o.M2T[n]) + t.available
}