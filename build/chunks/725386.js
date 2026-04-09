/** chunk id: 725386 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(64700),
    a = n(540185),
    l = n(417597),
    s = n(382483),
    r = n(385113),
    o = n(369374),
    c = n(395332),
    d = n(253932),
    u = n(287809),
    g = n(403362),
    _ = n(633075),
    m = n(289173),
    f = n(667049),
    x = n(229231);

function p(e) {
    let {
        enabled: t
    } = o.A.useConfig({
        location: e.location
    }), n = d.Q_.useSetting(), p = (0, l.bG)([u.default], () => u.default.getCurrentUser()), I = (0, f.A)(p?.id), A = (0, c.w$)(e), h = (0, l.bG)([r.A], () => r.A.getAllConfigsByApplication());
    return i.useEffect(() => {
        t && ((0, s.Wq)(), n && (0, s.i$)())
    }, [t, n]), i.useMemo(() => {
        let e = new Set(I.filter(e => e instanceof _.R).map(e => e.applicationId)),
            n = new Set(I.map(e => e.type));
        return x.Zc.flatMap(i => i === a.x.APPLICATION ? t ? Object.values(h).map(e => e[0]).filter(g.Vq).filter(t => !e.has(t.application_id)).map(e => new _.R({
            applicationId: e.application_id
        })) : null == A ? [] : A.filter(t => !e.has(t.applicationId)).map(e => new _.R({
            applicationId: e.applicationId
        })) : (0, m.hL)(i) ? n.has(i) ? [] : new m.Yy({
            type: i,
            games: []
        }) : void(0, g.xb)(i))
    }, [t, h, A, I])
}