/** chunk id: 268959 params = (module,exports,require) **/
r.d(t, {
    A: () => v
});
var n = r(627968);
r(64700);
var l = r(503698),
    i = r.n(l),
    s = r(311907),
    a = r(397927),
    u = r(287809),
    o = r(927578),
    d = r(590180),
    c = r(298072),
    p = r(993408),
    m = r(466459),
    x = r(623373),
    g = r(561769),
    h = r(525723),
    C = r(57020),
    A = r(985018),
    k = r(766706);
let I = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: c,
            prioritizedCurrency: x
        } = e, {
            isPurchased: I,
            isPartiallyOwnedBundle: v
        } = (0, m.h)(t), f = (0, p.G0)(t), y = (0, s.bG)([d.A], () => d.A.getCategoryForProduct(t.skuId)), _ = y?.unpublishedAt != null ? (0, p.WU)(y.unpublishedAt) : null, E = (0, s.bG)([u.default], () => u.default.getCurrentUser()), j = o.Ay.canUseCollectibles(E), b = (0, h.V_)(t), {
            isOrbExclusive: R
        } = (0, C.F)({
            product: t,
            isPremiumUser: j,
            prioritizedCurrency: x,
            hasDiscountOffer: null != b
        }), T = r;
        if (null == T && (!l && (0, p.HF)(y?.unpublishedAt) ? T = g.AW.LIMITED_TIME : !v && !I && (0, p.aT)(t.skuId) ? T = g.AW.NEW : R ? T = g.AW.ORBS_EXCLUSIVE : f && (T = g.AW.NITRO_EXCLUSIVE)), null == T || T === g.AW.NONE) return null;
        let P = null;
        switch (T) {
            case g.AW.LIMITED_TIME:
                P = null != _ ? _ > 1 ? A.intl.formatToPlainString(A.t.Io7ozn, {
                    days: _
                }) : A.intl.string(A.t.Bc13HF) : A.intl.string(A.t["h/uBCR"]);
                break;
            case g.AW.NEW:
                P = A.intl.string(A.t.y2b7CA);
                break;
            case g.AW.NITRO_EXCLUSIVE:
                P = A.intl.string(A.t.X3Ekj8);
                break;
            case g.AW.ORBS_EXCLUSIVE:
                P = A.intl.string(A.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: P,
            disableColor: !0,
            className: i()(c, k.$)
        })
    },
    v = e => {
        let {
            skuId: t,
            badgeOverride: r,
            className: l,
            prioritizedCurrency: i,
            skipLimitedTimeCheck: s
        } = e, a = (0, g.Vm)(t), u = (0, c.Q)(a);
        if (null == a) return null;
        let o = (0, x.rb)(a, u);
        return (0, n.jsx)(I, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: i
        })
    }