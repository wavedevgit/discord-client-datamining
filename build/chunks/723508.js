/** Chunk was on 41727 **/
/** chunk id: 723508, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => s
});
var r = n(64700),
    l = n(496431),
    i = n(592713);

function s(e) {
    let {
        communicationDisabledUntil: t,
        userId: n,
        guildId: s
    } = null != e ? e : {}, a = (0, l.A)(null != t ? Date.parse(t) : Date.now()), o = a.seconds, c = (0, r.useRef)(null);
    return (0, r.useEffect)(() => null == e || null == s || null == n ? void clearTimeout(c.current) : (o <= 0 && null == c.current && (c.current = setTimeout(() => {
        i.A.clearGuildMemberTimeout(s, n)
    }, 1e3)), () => {
        null != c.current && (clearTimeout(c.current), c.current = null)
    }), [s, n, o, t, e]), a
}