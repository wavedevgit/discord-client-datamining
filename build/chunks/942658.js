/** Chunk was on 20601 **/
/** chunk id: 942658, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => a
});
var l = n(311907),
    r = n(71393),
    i = n(60175),
    s = n(652215);

function a(e) {
    let {
        guildId: t
    } = e;
    return (0, l.bG)([i.A, r.A], () => {
        var e;
        let n = i.A.get(t),
            l = null == n ? void 0 : n.guild,
            a = r.A.getGuild(t),
            o = null == a ? void 0 : a.verificationLevel,
            c = null == l ? void 0 : l.verification_level;
        return null != (e = null != o ? o : c) ? e : s.PvD.NONE
    }, [t])
}