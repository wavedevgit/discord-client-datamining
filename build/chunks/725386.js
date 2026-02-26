/** chunk id: 725386, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(64700),
    l = n(540185),
    a = n(417597),
    s = n(395332),
    r = n(287809),
    o = n(403362),
    c = n(633075),
    d = n(289173),
    u = n(667049),
    m = n(229231);

function g(e) {
    let t = (0, a.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, u.A)(t?.id),
        g = (0, s.DB)(e);
    return i.useMemo(() => {
        let e = new Set(n.filter(e => e instanceof c.R).map(e => e.applicationId)),
            t = new Set(n.map(e => e.type));
        return m.Zc.flatMap(n => n === l.x.APPLICATION ? null == g ? [] : g.filter(t => !e.has(t.applicationId)).map(e => new c.R({
            applicationId: e.applicationId
        })) : (0, d.hL)(n) ? t.has(n) ? [] : new d.Yy({
            type: n,
            games: []
        }) : void(0, o.xb)(n))
    }, [g, n])
}