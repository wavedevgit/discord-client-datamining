/** chunk id: 284306, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(64700),
    r = n(311907),
    l = n(734057),
    a = n(287809),
    s = n(180232),
    o = n(157550);

function d() {
    let e = (0, r.bG)([l.A], () => l.A.getPrivateChannelsVersion()),
        t = (0, r.yK)([l.A, o.A], () => {
            let e = l.A.getMutablePrivateChannels(),
                t = Array.from(o.A.getSpamChannelIds()).map(t => e[t]).filter(e => null != e);
            return (0, s.g)(t)
        }, [e]),
        n = (0, r.cf)([a.default], () => {
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