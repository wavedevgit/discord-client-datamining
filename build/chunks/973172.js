/** chunk id: 973172, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(321073);
var l = n(64700),
    a = n(311907),
    i = n(142120),
    r = n(71393),
    s = n(680646);

function o(e) {
    let {
        application: t,
        showMutualGuilds: n = !0
    } = e, o = (0, a.bG)([s.A], () => s.A.getGuildIdsForApplication(t?.id), [t]), d = (0, a.bG)([i.A], () => i.A.isConnected());
    return l.useMemo(() => {
        let e = [];
        if (!d || !n || null == o || null == t) return e;
        for (let t of o) {
            let n = r.A.getGuild(t);
            null != n && e.push(n)
        }
        return e
    }, [d, o, t, n])
}