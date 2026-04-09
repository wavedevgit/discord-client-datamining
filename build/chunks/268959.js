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
    g = r(57020),
    C = r(985018),
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
        } = (0, h.h)(t), b = (0, m.G0)(t), I = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), E = I?.unpublishedAt != null ? (0, m.WU)(I.unpublishedAt) : null, y = (0, s.bG)([u.default], () => u.default.getCurrentUser()), j = o.Ay.canUseCollectibles(y), R = (0, x.V_)(t), {
            isOrbExclusive: _
        } = (0, g.F)({
            product: t,
            isPremiumUser: j,
            prioritizedCurrency: p,
            hasDiscountOffer: null != R
        }), T = r;
        if (null == T && (!l && (0, m.HF)(I?.unpublishedAt) ? T = f.AW.LIMITED_TIME : !k && !A && (0, m.aT)(t.skuId) ? T = f.AW.NEW : _ ? T = f.AW.ORBS_EXCLUSIVE : b && (T = f.AW.NITRO_EXCLUSIVE)), null == T || T === f.AW.NONE) return null;
        let L = null;
        switch (T) {
            case f.AW.LIMITED_TIME:
                L = null != E ? E > 1 ? C.intl.formatToPlainString(C.t.Io7ozn, {
                    days: E
                }) : C.intl.string(C.t.Bc13HF) : C.intl.string(C.t["h/uBCR"]);
                break;
            case f.AW.NEW:
                L = C.intl.string(C.t.y2b7CA);
                break;
            case f.AW.NITRO_EXCLUSIVE:
                L = C.intl.string(C.t.X3Ekj8);
                break;
            case f.AW.ORBS_EXCLUSIVE:
                L = C.intl.string(C.t["0TmQRG"])
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