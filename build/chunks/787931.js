/** chunk id: 787931, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(473145),
    i = n(927578),
    a = n(788868);

function o(e, t, n, o) {
    if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
    let s = !1;
    return null != e.quality && (e.quality === a.uP.HIGH_STREAMING_QUALITY ? s = s || i.Ay.canStreamQuality(i.Ay.StreamQuality.HIGH, t) : e.quality === a.uP.MID_STREAMING_QUALITY && (s = s || i.Ay.canStreamQuality(i.Ay.StreamQuality.MID, t))), null != e.guildPremiumTier && (s = s || (0, r.yS)(n, e.guildPremiumTier)), s
}