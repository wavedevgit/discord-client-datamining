/** Chunk was on 74665 **/
/** chunk id: 163382, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => s
}), t(896048), t(321073);
var l = t(64700),
    i = t(311907),
    r = t(698441),
    d = t(988794);

function s(e, n) {
    let t = (0, i.yK)([r.Ay], () => Object.values(r.Ay.getUsersForGuildEvent(e, null)), [e]),
        s = (0, i.yK)([r.Ay], () => Object.values(r.Ay.getUsersForGuildEvent(e, n)), [e, n]);
    return (0, l.useMemo)(() => {
        let e = s.reduce((e, n) => (e[n.user_id] = n, e), {}),
            n = t.filter(n => {
                let t = e[n.user_id];
                return null == t || t.response === d.Qi.INTERESTED
            }),
            l = s.filter(e => e.response === d.Qi.INTERESTED),
            i = new Set,
            r = [],
            a = e => {
                i.has(e.user_id) || (r.push(e), i.add(e.user_id))
            };
        return n.forEach(a), l.forEach(a), r
    }, [t, s])
}