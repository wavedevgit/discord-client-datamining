/** Chunk was on 20941 **/
/** chunk id: 420009, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(64700),
    l = n(52133),
    a = n(803306),
    i = n(256587),
    s = n(287809);

function o(e) {
    let {
        entry: t,
        channel: n
    } = e, o = r.useRef([]);
    return r.useEffect(() => {
        (0, l.v)(o.current, t.participants) || (o.current = t.participants, t.participants.filter(e => null == s.default.getUser(e)).forEach(e => {
            null == n.guild_id ? (0, a.wz)(e) : i.A.requestMember(n.guild_id, e)
        }))
    }, [t, n.guild_id]), {}
}