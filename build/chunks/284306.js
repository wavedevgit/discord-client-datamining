/** chunk id: 284306 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(64700),
    l = n(311907),
    r = n(734057),
    a = n(287809),
    s = n(180232),
    o = n(157550);

function d() {
    let e = (0, l.bG)([r.A], () => r.A.getPrivateChannelsVersion()),
        t = (0, l.yK)([r.A, o.A], () => {
            let e = r.A.getMutablePrivateChannels(),
                t = Array.from(o.A.getSpamChannelIds()).map(t => e[t]).filter(e => null != e);
            return (0, s.g)(t)
        }, [e]),
        n = (0, l.cf)([a.default], () => {
            let e = {};
            return t.forEach(t => {
                let n = a.default.getUser(t.recipients[0]);
                null != n && (e[t.id] = n)
            }), e
        }, [t]);
    return i.useMemo(() => t.map(e => ({
        channel: e,
        user: n[e.id]
    })), [t, n])
}