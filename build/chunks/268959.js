/** chunk id: 268959 params = (module,exports,require) **/
r.d(e, {
    A: () => _
});
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    s = r(311907),
    a = r(397927),
    u = r(287809),
    o = r(927578),
    c = r(590180),
    d = r(298072),
    k = r(993408),
    p = r(466459),
    C = r(623373),
    m = r(561769),
    x = r(525723),
    I = r(57020),
    A = r(985018),
    g = r(512514);
let h = t => {
        let {
            product: e,
            badgeOverride: r,
            skipLimitedTimeCheck: i,
            className: d,
            prioritizedCurrency: C
        } = t, {
            isPurchased: h,
            isPartiallyOwnedBundle: _
        } = (0, p.h)(e), f = (0, k.G0)(e), T = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)), v = T?.unpublishedAt != null ? (0, k.WU)(T.unpublishedAt) : null, E = (0, s.bG)([u.default], () => u.default.getCurrentUser()), j = o.Ay.canUseCollectibles(E), y = (0, x.V_)(e), {
            isOrbExclusive: P
        } = (0, I.F)({
            product: e,
            isPremiumUser: j,
            prioritizedCurrency: C,
            hasDiscountOffer: null != y
        }), b = r;
        if (null == b && (!i && (0, k.HF)(T?.unpublishedAt) ? b = m.AW.LIMITED_TIME : !_ && !h && (0, k.aT)(e.skuId) ? b = m.AW.NEW : P ? b = m.AW.ORBS_EXCLUSIVE : f && (b = m.AW.NITRO_EXCLUSIVE)), null == b || b === m.AW.NONE) return null;
        let R = null;
        switch (b) {
            case m.AW.LIMITED_TIME:
                R = null != v ? v > 1 ? A.intl.formatToPlainString(A.t.Io7ozn, {
                    days: v
                }) : A.intl.string(A.t.Bc13HF) : A.intl.string(A.t["h/uBCR"]);
                break;
            case m.AW.NEW:
                R = A.intl.string(A.t.y2b7CA);
                break;
            case m.AW.NITRO_EXCLUSIVE:
                R = A.intl.string(A.t.X3Ekj8);
                break;
            case m.AW.ORBS_EXCLUSIVE:
                R = A.intl.string(A.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: R,
            disableColor: !0,
            className: l()(d, g.$)
        })
    },
    _ = t => {
        let {
            skuId: e,
            badgeOverride: r,
            className: i,
            prioritizedCurrency: l,
            skipLimitedTimeCheck: s
        } = t, a = (0, m.Vm)(e), u = (0, d.Q)(a);
        if (null == a) return null;
        let o = (0, C.rb)(a, u);
        return (0, n.jsx)(h, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: i,
            prioritizedCurrency: l
        })
    }