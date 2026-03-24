/** chunk id: 341678 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    a = n(346542),
    r = n(21119),
    l = n(616356);

function s(e) {
    let {
        invite: t,
        message: n,
        voiceStates: s,
        guildId: o,
        channelId: d
    } = e;
    return (0, i.bG)([l.A, r.A], () => {
        if ((0, a.G4)(t) && null != t.target_user) {
            let e = l.A.getStreamForUser(t.target_user.id, o);
            if (null != e && e.channelId === d) return e
        }
        let e = n.author.id;
        if (s.some(t => t.voiceState.userId === e && t.voiceState.selfStream)) {
            let t = l.A.getStreamForUser(e, o);
            if (null != t && t.channelId === d) return t
        }
        let i = s.filter(t => t.voiceState.selfStream && t.voiceState.userId !== e).map(e => e.voiceState.userId);
        if (0 === i.length) return null;
        for (let e of [...i].sort((e, t) => {
                let n = r.A.getUserAffinity(e)?.vcProbability ?? 0;
                return (r.A.getUserAffinity(t)?.vcProbability ?? 0) - n
            })) {
            let t = l.A.getStreamForUser(e, o);
            if (null != t && t.channelId === d) return t
        }
        return null
    }, [t, n, s, o, d])
}