/** chunk id: 438874 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(294384),
    i = n(998418),
    l = n(568065);

function s(e, t) {
    let n = (0, i.Ay)(e, t),
        s = n.type !== l.b_.INACTIVE,
        o = n.type === l.b_.TIER_OVERRIDE_ACTIVATED,
        a = (0, r.A)(e, t, "GuildPowerupCardFooterAdmin"),
        d = l.HO;
    return {
        showToggleButton: (s || !a) && !o,
        showConfigureButton: s && d.has(t.skuId),
        isPowerupActive: s
    }
}