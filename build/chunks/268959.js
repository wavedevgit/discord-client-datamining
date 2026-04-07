/** chunk id: 268959 params = (module,exports,require) **/
r.d(t, {
    A: () => k
});
var n = r(627968);
r(64700);
var l = r(503698),
    i = r.n(l),
    s = r(311907),
    a = r(397927),
    u = r(287809),
    o = r(927578),
    c = r(590180),
    d = r(298072),
    m = r(993408),
    h = r(466459),
    p = r(623373),
    f = r(561769),
    x = r(525723),
    C = r(57020),
    g = r(985018),
    v = r(766706);
let A = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: d,
            prioritizedCurrency: p
        } = e, {
            isPurchased: A,
            isPartiallyOwnedBundle: k
        } = (0, h.h)(t), I = (0, m.G0)(t), b = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), E = b?.unpublishedAt != null ? (0, m.WU)(b.unpublishedAt) : null, y = (0, s.bG)([u.default], () => u.default.getCurrentUser()), j = o.Ay.canUseCollectibles(y), _ = (0, x.V_)(t), {
            isOrbExclusive: R
        } = (0, C.F)({
            product: t,
            isPremiumUser: j,
            prioritizedCurrency: p,
            hasDiscountOffer: null != _
        }), T = r;
        if (null == T && (!l && (0, m.HF)(b?.unpublishedAt) ? T = f.AW.LIMITED_TIME : !k && !A && (0, m.aT)(t.skuId) ? T = f.AW.NEW : R ? T = f.AW.ORBS_EXCLUSIVE : I && (T = f.AW.NITRO_EXCLUSIVE)), null == T || T === f.AW.NONE) return null;
        let L = null;
        switch (T) {
            case f.AW.LIMITED_TIME:
                L = null != E ? E > 1 ? g.intl.formatToPlainString(g.t.Io7ozn, {
                    days: E
                }) : g.intl.string(g.t.Bc13HF) : g.intl.string(g.t["h/uBCR"]);
                break;
            case f.AW.NEW:
                L = g.intl.string(g.t.y2b7CA);
                break;
            case f.AW.NITRO_EXCLUSIVE:
                L = g.intl.string(g.t.X3Ekj8);
                break;
            case f.AW.ORBS_EXCLUSIVE:
                L = g.intl.string(g.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: L,
            disableColor: !0,
            className: i()(d, v.$)
        })
    },
    k = e => {
        let {
            skuId: t,
            badgeOverride: r,
            className: l,
            prioritizedCurrency: i,
            skipLimitedTimeCheck: s
        } = e, a = (0, f.Vm)(t), u = (0, d.Q)(a);
        if (null == a) return null;
        let o = (0, p.rb)(a, u);
        return (0, n.jsx)(A, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: i
        })
    }