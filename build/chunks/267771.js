/** chunk id: 267771, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => a
});
var r = i(64700),
    s = i(568065),
    n = i(652215);

function a(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(n.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : n.M2T[n.TVA.TIER_3],
            i = Object.values(s.sy),
            r = Object.values(s.YV);
        return i.concat(r).forEach(i => {
            null == i.includedInLevel && (i.isEnabled?.(e.id) ?? !0) && (t += i.boostPrice)
        }), t
    }, [e])
}