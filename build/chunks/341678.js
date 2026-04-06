/** chunk id: 341678 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(311907),
    l = n(346542),
    s = n(21119),
    r = n(616356);

function a(e) {
    let {
        invite: t,
        message: n,
        voiceStates: a,
        guildId: o,
        channelId: d
    } = e;
    return (0, i.bG)([r.A, s.A], () => {
        if ((0, l.G4)(t) && null != t.target_user) {
            let e = r.A.getStreamForUser(t.target_user.id, o);
            if (null != e && e.channelId === d) return e
        }
        let e = n.author.id;
        if (a.some(t => t.voiceState.userId === e && t.voiceState.selfStream)) {
            let t = r.A.getStreamForUser(e, o);
            if (null != t && t.channelId === d) return t
        }
        let i = a.filter(t => t.voiceState.selfStream && t.voiceState.userId !== e).map(e => e.voiceState.userId);
        if (0 === i.length) return null;
        for (let e of [...i].sort((e, t) => {
                let n = s.A.getUserAffinity(e)?.vcProbability ?? 0;
                return (s.A.getUserAffinity(t)?.vcProbability ?? 0) - n
            })) {
            let t = r.A.getStreamForUser(e, o);
            if (null != t && t.channelId === d) return t
        }
        return null
    }, [t, n, a, o, d])
}