/** chunk id: 420009, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(64700),
    l = n(52133),
    a = n(803306),
    i = n(256587),
    o = n(287809);

function s(e) {
    let {
        entry: t,
        channel: n
    } = e, s = r.useRef([]);
    return r.useEffect(() => {
        (0, l.v)(s.current, t.participants) || (s.current = t.participants, t.participants.filter(e => null == o.default.getUser(e)).forEach(e => {
            null == n.guild_id ? (0, a.wz)(e) : i.A.requestMember(n.guild_id, e)
        }))
    }, [t, n.guild_id]), {}
}