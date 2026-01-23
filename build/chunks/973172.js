/** Chunk was on 58652 **/
/** chunk id: 973172, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(321073), n(896048);
var l = n(64700),
    r = n(311907),
    i = n(142120),
    a = n(71393),
    s = n(680646);

function o(e) {
    let {
        application: t,
        showMutualGuilds: n = !0
    } = e, o = (0, r.bG)([s.A], () => s.A.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]), d = (0, r.bG)([i.A], () => i.A.isConnected());
    return l.useMemo(() => {
        let e = [];
        if (!d || !n || null == o || null == t) return e;
        for (let t of o) {
            let n = a.A.getGuild(t);
            null != n && e.push(n)
        }
        return e
    }, [d, o, t, n])
}