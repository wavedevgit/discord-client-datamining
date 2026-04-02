/** chunk id: 999068 params = (module,exports,require) **/
n.d(t, {
    y: () => d
});
var i = n(64700),
    a = n(311907),
    l = n(73153),
    r = n(622543),
    s = n(576622),
    o = n(287809);

function d(e) {
    let t = (0, a.bG)([o.default], () => o.default.getUser(e)),
        n = (0, a.yK)([r.A], () => r.A.getMutualGuilds(e)?.map(e => e.guild) ?? []);
    return i.useEffect(() => {
        0 === n.length && null != t && null == r.A.getMutualGuilds(e) && l.h.wait(() => (0, s.A)(e, void 0, {
            withMutualGuilds: !0
        }))
    }, [n, t, e]), n
}