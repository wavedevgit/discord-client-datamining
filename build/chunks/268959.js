/** chunk id: 268959 params = (module,exports,require) **/
r.d(t, {
    A: () => I
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
    g = r(57020),
    v = r(985018),
    C = r(766706);
let A = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: d,
            prioritizedCurrency: p
        } = e, {
            isPurchased: A,
            isPartiallyOwnedBundle: I
        } = (0, h.h)(t), k = (0, m.G0)(t), b = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), y = b?.unpublishedAt != null ? (0, m.WU)(b.unpublishedAt) : null, E = (0, s.bG)([u.default], () => u.default.getCurrentUser()), j = o.Ay.canUseCollectibles(E), _ = (0, x.V_)(t), {
            isOrbExclusive: R
        } = (0, g.F)({
            product: t,
            isPremiumUser: j,
            prioritizedCurrency: p,
            hasDiscountOffer: null != _
        }), T = r;
        if (null == T && (!l && (0, m.HF)(b?.unpublishedAt) ? T = f.AW.LIMITED_TIME : !I && !A && (0, m.aT)(t.skuId) ? T = f.AW.NEW : R ? T = f.AW.ORBS_EXCLUSIVE : k && (T = f.AW.NITRO_EXCLUSIVE)), null == T || T === f.AW.NONE) return null;
        let L = null;
        switch (T) {
            case f.AW.LIMITED_TIME:
                L = null != y ? y > 1 ? v.intl.formatToPlainString(v.t.Io7ozn, {
                    days: y
                }) : v.intl.string(v.t.Bc13HF) : v.intl.string(v.t["h/uBCR"]);
                break;
            case f.AW.NEW:
                L = v.intl.string(v.t.y2b7CA);
                break;
            case f.AW.NITRO_EXCLUSIVE:
                L = v.intl.string(v.t.X3Ekj8);
                break;
            case f.AW.ORBS_EXCLUSIVE:
                L = v.intl.string(v.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: L,
            disableColor: !0,
            className: i()(d, C.$)
        })
    },
    I = e => {
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