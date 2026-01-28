/** Chunk was on 5606 **/
/** chunk id: 21316, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(197305),
    o = n(711014),
    c = n(686423),
    d = n(358172),
    u = n(985018),
    p = n(853762);
let _ = function(e) {
    let {
        canAddBoosts: t,
        canApplyBoosts: n
    } = e, _ = (0, l.bG)([a.A], () => a.A.affinities), m = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()), g = i.useMemo(() => {
        let e = _.slice(0, 3).map(e => e.guildId);
        for (let t = 0; t < m.length && !(e.length >= 3); t++) {
            let n = m[t];
            e.includes(n) || e.push(n)
        }
        return e
    }, [_, m]);
    return 0 === g.length ? null : (0, r.jsxs)("div", {
        className: p.iE,
        children: [t && (0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            className: p.wx,
            children: u.intl.string(u.t.r90Wgo)
        }), g.map(e => (0, r.jsx)(d.A, {
            className: p.ZS,
            guildId: e,
            boostingVariant: !0
        }, e)), m.length > 3 && n && (0, r.jsx)(c.A, {})]
    })
}