/** chunk id: 725386 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(64700),
    a = n(540185),
    l = n(417597),
    s = n(382483),
    r = n(385113),
    o = n(369374),
    d = n(395332),
    c = n(253932),
    u = n(287809),
    g = n(403362),
    m = n(633075),
    x = n(289173),
    f = n(667049),
    p = n(229231);

function h(e) {
    let {
        enabled: t
    } = o.A.useConfig({
        location: e.location
    }), n = c.Q_.useSetting(), h = (0, l.bG)([u.default], () => u.default.getCurrentUser()), _ = (0, f.A)(h?.id), A = (0, d.w$)(e), I = (0, l.bG)([r.A], () => r.A.getAllConfigsByApplication());
    return i.useEffect(() => {
        t && ((0, s.Wq)(), n && (0, s.i$)())
    }, [t, n]), i.useMemo(() => {
        let e = new Set(_.filter(e => e instanceof m.R).map(e => e.applicationId)),
            n = new Set(_.map(e => e.type));
        return p.Zc.flatMap(i => i === a.x.APPLICATION ? t ? Object.values(I).map(e => e[0]).filter(g.Vq).filter(t => !e.has(t.application_id)).map(e => new m.R({
            applicationId: e.application_id
        })) : null == A ? [] : A.filter(t => !e.has(t.applicationId)).map(e => new m.R({
            applicationId: e.applicationId
        })) : (0, x.hL)(i) ? n.has(i) ? [] : new x.Yy({
            type: i,
            games: []
        }) : void(0, g.xb)(i))
    }, [t, I, A, _])
}