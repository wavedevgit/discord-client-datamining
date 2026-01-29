/** Chunk was on 1113 **/
/** chunk id: 649247, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(311907),
    l = n(181079),
    i = n(734057),
    s = n(607567),
    a = n(403362),
    o = n(996439),
    c = n(661191),
    u = n(63995),
    d = n(69407),
    h = n(652215);

function p(e) {
    let {
        voiceState: t,
        userNick: n,
        user: r
    } = e, l = (0, s.hz)(t, n);
    return {
        user: r,
        voiceState: t,
        nick: n,
        comparator: l
    }
}

function g(e) {
    let [t] = (0, r.bG)([u.A, i.A, l.A], () => {
        let t;
        return [(t = e === h.YYv ? c.default.keys(l.A.getFavoriteChannels()).map(e => i.A.getChannel(e)).filter(a.Vq).filter(e => e.isGuildStageVoice()) : u.A.getChannels(e)).reduce((e, t) => {
            let n = u.A.getMutableParticipants(t.id, d.ip.SPEAKER);
            return e[t.id] = n.filter(e => e.type === d.wY.VOICE).map(p), e
        }, {}), t.reduce((e, t) => {
            let {
                id: n
            } = t;
            return e + u.A.getParticipantsVersion(n)
        }, 0)]
    }, [e], o.D);
    return t
}