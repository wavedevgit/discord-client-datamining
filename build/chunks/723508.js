/** chunk id: 723508, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => a
});
var i = n(64700),
    l = n(496431),
    s = n(592713);

function a(e) {
    let {
        communicationDisabledUntil: t,
        userId: n,
        guildId: a
    } = e ?? {}, r = (0, l.A)(null != t ? Date.parse(t) : Date.now()), o = r.seconds, c = (0, i.useRef)(null);
    return (0, i.useEffect)(() => null == e || null == a || null == n ? void clearTimeout(c.current) : (o <= 0 && null == c.current && (c.current = setTimeout(() => {
        s.A.clearGuildMemberTimeout(a, n)
    }, 1e3)), () => {
        null != c.current && (clearTimeout(c.current), c.current = null)
    }), [a, n, o, t, e]), r
}