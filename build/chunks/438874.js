/** chunk id: 438874, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var i = n(294384),
    s = n(998418),
    l = n(568065);

function a(e, t) {
    let n = (0, s.Ay)(e, t),
        a = n.type !== l.b_.INACTIVE,
        r = n.type === l.b_.TIER_OVERRIDE_ACTIVATED,
        o = (0, i.A)(e, t, "GuildPowerupCardFooterAdmin"),
        c = l.HO;
    return {
        showToggleButton: (a || !o) && !r,
        showConfigureButton: a && c.has(t.skuId),
        isPowerupActive: a
    }
}