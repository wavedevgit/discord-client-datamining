/** chunk id: 661685 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var r = a(64700),
    n = a(512750),
    s = a(311907),
    i = a(386784),
    l = a(498642),
    o = a(317525),
    c = a(71393),
    d = a(840120),
    u = a(333354),
    k = a(985018);

function m(e, t) {
    let a = (0, s.bG)([l.A], () => l.A.getMemberCount(e)),
        m = (0, i.A)(e),
        b = (0, s.bG)([c.A], () => c.A.getGuild(e)?.vanityURLCode != null),
        f = (0, d.M5)(e, "Powerup Deactivate Modal"),
        p = (0, s.bG)([o.A], () => t.skuId !== n.aN || null == m ? 0 : o.A.getSortedRoles(e).reduce((e, t) => t.colorStrings?.secondaryColor == null ? e : e + (m[t.id] ?? 0), 0), [e, t.skuId, m]);
    return r.useMemo(() => {
        let e;
        switch (t.skuId) {
            case n.aN:
                e = p > 0 ? k.intl.formatToPlainString(u.default["4jSvr1"], {
                    perk: t.title,
                    memberCount: p
                }) : k.intl.formatToPlainString(u.default.cavtEo, {
                    perk: t.title
                });
                break;
            case n.FB:
                e = b ? k.intl.string(u.default.hN75yb) : k.intl.string(u.default.Du91Rb);
                break;
            case n.OJ:
            case n.jF:
                e = k.intl.string(u.default.Vf2ZcR);
                break;
            default:
                e = k.intl.formatToPlainString(u.default["4jSvr1"], {
                    perk: t.title,
                    memberCount: a ?? 0
                })
        }
        let r = null;
        return b && t.skuId === n.YG && (r = f ? k.intl.string(u.default.TkNA7b) : k.intl.string(u.default.M4XL5n)), {
            warningText: e,
            vanityUrlWarning: r
        }
    }, [t, p, a, b, f])
}