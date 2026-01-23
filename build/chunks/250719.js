/** Chunk was on 97492 **/
/** chunk id: 250719, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(311907),
    l = n(734057),
    i = n(607567),
    s = n(181079),
    a = n(652215);

function o(e) {
    return (0, r.cf)([i.Ay, l.A, s.A], () => {
        if (e !== a.YYv) return i.Ay.getVoiceStates(e);
        let t = s.A.getFavoriteChannels(),
            n = {};
        for (let e in t) {
            let t = l.A.getChannel(e);
            null != t && (n[e] = i.Ay.getVoiceStatesForChannel(t))
        }
        return n
    }, [e])
}