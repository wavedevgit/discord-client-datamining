/** chunk id: 880807 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(197305),
    o = n(711014),
    d = n(785668),
    c = n(400297),
    u = n(985018),
    m = n(142440);
let g = function(e) {
    let {
        canAddBoosts: t,
        canApplyBoosts: n
    } = e, g = (0, l.bG)([r.A], () => r.A.affinities), _ = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()), A = s.useMemo(() => {
        let e = g.slice(0, 3).map(e => e.guildId);
        for (let t = 0; t < _.length && !(e.length >= 3); t++) {
            let n = _[t];
            e.includes(n) || e.push(n)
        }
        return e
    }, [g, _]);
    return 0 === A.length ? null : (0, i.jsxs)("div", {
        className: m.iE,
        children: [t && (0, i.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            className: m.wx,
            children: u.intl.string(u.t.r90Wgo)
        }), A.map(e => (0, i.jsx)(c.A, {
            className: m.ZS,
            guildId: e,
            boostingVariant: !0
        }, e)), _.length > 3 && n && (0, i.jsx)(d.A, {})]
    })
}