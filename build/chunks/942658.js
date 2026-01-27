/** Chunk was on 20601 **/
/** chunk id: 942658, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => a
});
var r = n(311907),
    l = n(71393),
    i = n(60175),
    s = n(652215);

function a(e) {
    let {
        guildId: t
    } = e;
    return (0, r.bG)([i.A, l.A], () => {
        var e;
        let n = i.A.get(t),
            r = null == n ? void 0 : n.guild,
            a = l.A.getGuild(t),
            o = null == a ? void 0 : a.verificationLevel,
            c = null == r ? void 0 : r.verification_level;
        return null != (e = null != o ? o : c) ? e : s.PvD.NONE
    }, [t])
}