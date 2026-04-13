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
    o = r(287809),
    u = r(927578),
    c = r(590180),
    d = r(298072),
    p = r(993408),
    k = r(466459),
    C = r(623373),
    m = r(561769),
    x = r(525723),
    g = r(57020),
    A = r(985018),
    h = r(766706);
let I = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: d,
            prioritizedCurrency: C
        } = e, {
            isPurchased: I,
            isPartiallyOwnedBundle: v
        } = (0, k.h)(t), _ = (0, p.G0)(t), T = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), f = T?.unpublishedAt != null ? (0, p.WU)(T.unpublishedAt) : null, E = (0, s.bG)([o.default], () => o.default.getCurrentUser()), y = u.Ay.canUseCollectibles(E), j = (0, x.V_)(t), {
            isOrbExclusive: b
        } = (0, g.F)({
            product: t,
            isPremiumUser: y,
            prioritizedCurrency: C,
            hasDiscountOffer: null != j
        }), R = r;
        if (null == R && (!l && (0, p.HF)(T?.unpublishedAt) ? R = m.AW.LIMITED_TIME : !v && !I && (0, p.aT)(t.skuId) ? R = m.AW.NEW : b ? R = m.AW.ORBS_EXCLUSIVE : _ && (R = m.AW.NITRO_EXCLUSIVE)), null == R || R === m.AW.NONE) return null;
        let P = null;
        switch (R) {
            case m.AW.LIMITED_TIME:
                P = null != f ? f > 1 ? A.intl.formatToPlainString(A.t.Io7ozn, {
                    days: f
                }) : A.intl.string(A.t.Bc13HF) : A.intl.string(A.t["h/uBCR"]);
                break;
            case m.AW.NEW:
                P = A.intl.string(A.t.y2b7CA);
                break;
            case m.AW.NITRO_EXCLUSIVE:
                P = A.intl.string(A.t.X3Ekj8);
                break;
            case m.AW.ORBS_EXCLUSIVE:
                P = A.intl.string(A.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: P,
            disableColor: !0,
            className: i()(d, h.$)
        })
    },
    v = e => {
        let {
            skuId: t,
            badgeOverride: r,
            className: l,
            prioritizedCurrency: i,
            skipLimitedTimeCheck: s
        } = e, a = (0, m.Vm)(t), o = (0, d.Q)(a);
        if (null == a) return null;
        let u = (0, C.rb)(a, o);
        return (0, n.jsx)(I, {
            product: u,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: i
        })
    }