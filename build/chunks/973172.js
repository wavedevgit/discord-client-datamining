/** chunk id: 973172 params = (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(321073);
var l = n(64700),
    a = n(311907),
    r = n(142120),
    i = n(71393),
    s = n(680646);

function d(e) {
    let {
        application: t,
        showMutualGuilds: n = !0
    } = e, d = (0, a.bG)([s.A], () => s.A.getGuildIdsForApplication(t?.id), [t]), o = (0, a.bG)([r.A], () => r.A.isConnected());
    return l.useMemo(() => {
        let e = [];
        if (!o || !n || null == d || null == t) return e;
        for (let t of d) {
            let n = i.A.getGuild(t);
            null != n && e.push(n)
        }
        return e
    }, [o, d, t, n])
}