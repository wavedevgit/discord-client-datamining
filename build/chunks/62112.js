/** chunk id: 62112 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(64700),
    a = n(311907),
    r = n(734057),
    l = n(287809),
    s = n(380335),
    o = n(180232);

function d() {
    let e = (0, a.bG)([r.A], () => r.A.getPrivateChannelsVersion()),
        t = (0, a.yK)([r.A, s.A], () => {
            let e = r.A.getMutablePrivateChannels(),
                t = Array.from(s.A.getMessageRequestChannelIds()).map(t => e[t]).filter(e => null != e);
            return (0, o.g)(t)
        }, [e]),
        n = (0, a.cf)([l.default], () => {
            let e = {};
            return t.forEach(t => {
                let n = l.default.getUser(t.recipients[0]);
                null != n && (e[t.id] = n)
            }), e
        }, [t]);
    return i.useMemo(() => t.map(e => ({
        channel: e,
        user: n[e.id]
    })), [t, n])
}