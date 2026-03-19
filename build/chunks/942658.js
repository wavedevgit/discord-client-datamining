/** chunk id: 942658 params = (module,exports,require) **/
n.d(t, {
    B: () => a
});
var r = n(311907),
    s = n(71393),
    i = n(60175),
    l = n(652215);

function a(e) {
    let {
        guildId: t
    } = e;
    return (0, r.bG)([i.A, s.A], () => {
        let e = i.A.get(t),
            n = e?.guild,
            r = s.A.getGuild(t),
            a = r?.verificationLevel,
            o = n?.verification_level;
        return a ?? o ?? l.PvD.NONE
    }, [t])
}