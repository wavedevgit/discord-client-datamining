/** chunk id: 725386 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(64700),
    l = n(540185),
    a = n(417597),
    s = n(382483),
    r = n(385113),
    o = n(369374),
    c = n(395332),
    d = n(253932),
    u = n(287809),
    m = n(403362),
    g = n(633075),
    f = n(289173),
    x = n(667049),
    p = n(229231);

function _(e) {
    let {
        enabled: t
    } = o.A.useConfig({
        location: e.location
    }), n = d.Q_.useSetting(), _ = (0, a.bG)([u.default], () => u.default.getCurrentUser()), I = (0, x.A)(_?.id), h = (0, c.w$)(e), A = (0, a.bG)([r.A], () => r.A.getAllConfigsByApplication());
    return i.useEffect(() => {
        t && ((0, s.Wq)(), n && (0, s.i$)())
    }, [t, n]), i.useMemo(() => {
        let e = new Set(I.filter(e => e instanceof g.R).map(e => e.applicationId)),
            n = new Set(I.map(e => e.type));
        return p.Zc.flatMap(i => i === l.x.APPLICATION ? t ? Object.values(A).map(e => e[0]).filter(m.Vq).filter(t => !e.has(t.application_id)).map(e => new g.R({
            applicationId: e.application_id
        })) : null == h ? [] : h.filter(t => !e.has(t.applicationId)).map(e => new g.R({
            applicationId: e.applicationId
        })) : (0, f.hL)(i) ? n.has(i) ? [] : new f.Yy({
            type: i,
            games: []
        }) : void(0, m.xb)(i))
    }, [t, A, h, I])
}