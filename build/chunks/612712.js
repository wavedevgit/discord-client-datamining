/** Chunk was on 78528 **/
/** chunk id: 612712, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(311907),
    l = n(71393),
    i = n(652215);

function s(e) {
    return (0, r.bG)([l.A], () => {
        var t;
        if (null == e) return !1;
        let n = l.A.getGuild(e);
        return null != (t = null == n ? void 0 : n.features.has(i.GuildFeatures.HUB)) && t
    }, [e])
}