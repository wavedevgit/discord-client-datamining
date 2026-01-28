/** Chunk was on 5606 **/
/** chunk id: 112469, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Tx: () => a,
    q9: () => o
});
var r = n(311907),
    i = n(71393),
    l = n(612025),
    s = n(652215);
let a = () => (0, l.xk)().selectedGuildId,
    o = () => {
        var e;
        let t = a(),
            n = (0, r.bG)([i.A], () => i.A.getGuild(t));
        return null != (e = null == n ? void 0 : n.features.has(s.GuildFeatures.HUB)) && e
    }