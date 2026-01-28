/** Chunk was on 78528 **/
/** chunk id: 438874, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(294384),
    l = n(998418),
    i = n(568065);

function s(e, t) {
    let n = (0, l.Ay)(e, t),
        s = n.type !== i.b_.INACTIVE,
        a = n.type === i.b_.TIER_OVERRIDE_ACTIVATED,
        o = (0, r.A)(e, t, "GuildPowerupCardFooterAdmin"),
        c = i.HO;
    return {
        showToggleButton: (s || !o) && !a,
        showConfigureButton: s && c.has(t.skuId),
        isPowerupActive: s
    }
}