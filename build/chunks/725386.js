/** Chunk was on 38663 **/
/** chunk id: 725386, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048), n(114821), n(339614);
var r = n(64700),
    l = n(540185),
    i = n(417597),
    a = n(395332),
    o = n(287809),
    s = n(403362),
    c = n(633075),
    u = n(289173),
    d = n(667049),
    f = n(229231);

function p(e) {
    let t = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        n = (0, d.A)(null == t ? void 0 : t.id),
        p = (0, a.DB)(e);
    return r.useMemo(() => {
        let e = new Set(n.filter(e => e instanceof c.R).map(e => e.applicationId)),
            t = new Set(n.map(e => e.type));
        return f.Zc.flatMap(n => n === l.x.APPLICATION ? null == p ? [] : p.filter(t => !e.has(t.applicationId)).map(e => new c.R({
            applicationId: e.applicationId
        })) : (0, u.hL)(n) ? t.has(n) ? [] : new u.Yy({
            type: n,
            games: []
        }) : void(0, s.xb)(n))
    }, [p, n])
}