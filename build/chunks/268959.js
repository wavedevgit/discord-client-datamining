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
    f = r(993408),
    m = r(466459),
    h = r(623373),
    x = r(561769),
    p = r(525723),
    g = r(57020),
    A = r(985018),
    C = r(766706);
let I = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: d,
            prioritizedCurrency: h
        } = e, {
            isPurchased: I,
            isPartiallyOwnedBundle: b
        } = (0, m.h)(t), v = (0, f.G0)(t), k = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), E = k?.unpublishedAt != null ? (0, f.WU)(k.unpublishedAt) : null, j = (0, s.bG)([u.default], () => u.default.getCurrentUser()), y = o.Ay.canUseCollectibles(j), R = (0, p.V_)(t), {
            isOrbExclusive: T
        } = (0, g.F)({
            product: t,
            isPremiumUser: y,
            prioritizedCurrency: h,
            hasDiscountOffer: null != R
        }), _ = r;
        if (null == _ && (!l && (0, f.HF)(k?.unpublishedAt) ? _ = x.AW.LIMITED_TIME : !b && !I && (0, f.aT)(t.skuId) ? _ = x.AW.NEW : T ? _ = x.AW.ORBS_EXCLUSIVE : v && (_ = x.AW.NITRO_EXCLUSIVE)), null == _ || _ === x.AW.NONE) return null;
        let L = null;
        switch (_) {
            case x.AW.LIMITED_TIME:
                L = null != E ? E > 1 ? A.intl.formatToPlainString(A.t.Io7ozn, {
                    days: E
                }) : A.intl.string(A.t.Bc13HF) : A.intl.string(A.t["h/uBCR"]);
                break;
            case x.AW.NEW:
                L = A.intl.string(A.t.y2b7CA);
                break;
            case x.AW.NITRO_EXCLUSIVE:
                L = A.intl.string(A.t.X3Ekj8);
                break;
            case x.AW.ORBS_EXCLUSIVE:
                L = A.intl.string(A.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: L,
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
        } = e, a = (0, x.Vm)(t), u = (0, d.Q)(a);
        if (null == a) return null;
        let o = (0, h.rb)(a, u);
        return (0, n.jsx)(I, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: i
        })
    }