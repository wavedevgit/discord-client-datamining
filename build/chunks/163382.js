/** Chunk was on 77986 **/
/** chunk id: 163382, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048), n(321073);
var l = n(64700),
    r = n(311907),
    i = n(698441),
    s = n(988794);

function c(e, t) {
    let n = (0, r.yK)([i.Ay], () => Object.values(i.Ay.getUsersForGuildEvent(e, null)), [e]),
        c = (0, r.yK)([i.Ay], () => Object.values(i.Ay.getUsersForGuildEvent(e, t)), [e, t]);
    return (0, l.useMemo)(() => {
        let e = c.reduce((e, t) => (e[t.user_id] = t, e), {}),
            t = n.filter(t => {
                let n = e[t.user_id];
                return null == n || n.response === s.Qi.INTERESTED
            }),
            l = c.filter(e => e.response === s.Qi.INTERESTED),
            r = new Set,
            i = [],
            o = e => {
                r.has(e.user_id) || (i.push(e), r.add(e.user_id))
            };
        return t.forEach(o), l.forEach(o), i
    }, [n, c])
}