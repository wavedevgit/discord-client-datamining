/** Chunk was on 77870 **/
/** chunk id: 267771, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(64700),
    l = n(568065),
    i = n(652215);

function s(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = (null == e ? void 0 : e.features.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0 ? 0 : i.M2T[i.TVA.TIER_3],
            n = Object.values(l.sy),
            r = Object.values(l.YV);
        return n.concat(r).forEach(n => {
            var r, l;
            null == n.includedInLevel && (null == (r = null == (l = n.isEnabled) ? void 0 : l.call(n, e.id)) || r) && (t += n.boostPrice)
        }), t
    }, [e])
}