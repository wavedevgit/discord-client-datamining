/** chunk id: 268959 params = (module,exports,require) **/
r.d(t, {
    A: () => b
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
    h = r(993408),
    m = r(466459),
    x = r(623373),
    f = r(561769),
    p = r(525723),
    g = r(57020),
    v = r(985018),
    C = r(645089);
let A = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: d,
            prioritizedCurrency: x
        } = e, {
            isPurchased: A,
            isPartiallyOwnedBundle: b
        } = (0, m.h)(t), k = (0, h.G0)(t), I = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), y = I?.unpublishedAt != null ? (0, h.WU)(I.unpublishedAt) : null, E = (0, s.bG)([u.default], () => u.default.getCurrentUser()), j = o.Ay.canUseCollectibles(E), R = (0, p.V_)(t), {
            isOrbExclusive: _
        } = (0, g.F)({
            product: t,
            isPremiumUser: j,
            prioritizedCurrency: x,
            hasDiscountOffer: null != R
        }), L = r;
        if (null == L && (!l && (0, h.HF)(I?.unpublishedAt) ? L = f.AW.LIMITED_TIME : !b && !A && (0, h.aT)(t.skuId) ? L = f.AW.NEW : _ ? L = f.AW.ORBS_EXCLUSIVE : k && (L = f.AW.NITRO_EXCLUSIVE)), null == L || L === f.AW.NONE) return null;
        let T = null;
        switch (L) {
            case f.AW.LIMITED_TIME:
                T = null != y ? y > 1 ? v.intl.formatToPlainString(v.t.Io7ozn, {
                    days: y
                }) : v.intl.string(v.t.Bc13HF) : v.intl.string(v.t["h/uBCR"]);
                break;
            case f.AW.NEW:
                T = v.intl.string(v.t.y2b7CA);
                break;
            case f.AW.NITRO_EXCLUSIVE:
                T = v.intl.string(v.t.X3Ekj8);
                break;
            case f.AW.ORBS_EXCLUSIVE:
                T = v.intl.string(v.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: T,
            disableColor: !0,
            className: i()(d, C.$)
        })
    },
    b = e => {
        let {
            skuId: t,
            badgeOverride: r,
            className: l,
            prioritizedCurrency: i,
            skipLimitedTimeCheck: s
        } = e, a = (0, f.Vm)(t), u = (0, d.Q)(a);
        if (null == a) return null;
        let o = (0, x.rb)(a, u);
        return (0, n.jsx)(A, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: i
        })
    }