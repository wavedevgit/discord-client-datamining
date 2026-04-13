/** chunk id: 33358 params = (module,exports,require) **/
i.d(t, {
    P: () => c
});
var n = i(64700),
    s = i(311907),
    l = i(617617),
    a = i(734057),
    r = i(994500),
    o = i(287809),
    u = i(811602),
    d = i(282108),
    m = i(975214);

function c(e) {
    let t, i, c, h, x, {
        channelId: g,
        authorId: p
    } = null == e ? {} : (0, d.nx)(e);
    return t = (0, d.ku)(), i = (0, s.bG)([o.default], () => o.default.getCurrentUser()), c = (0, s.bG)([a.A, r.A], () => (0, d.c2)(g, p, [a.A, r.A])), h = (0, s.bG)([l.A], () => t.reduce((e, t) => ({
        ...e,
        [t.harmType]: t.getProtoUserSettings(l.A.settings)
    }), {}), [t], m.M), 0 === (x = n.useMemo(() => null == c || p === i?.id || null == i ? [] : t.map(e => {
        let t = h[e.harmType],
            i = null == c ? null : e.getUserSettingsWithDefaults(t)[c];
        return (0, d.f)(i) ? e.harmType : null
    }).filter(e => null != e), [c, t, h, p, i])).length ? u.LO.NONE : (0, d.LE)(x)
}