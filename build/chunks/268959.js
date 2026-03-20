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
    f = r(993408),
    m = r(466459),
    h = r(623373),
    A = r(561769),
    x = r(525723),
    p = r(57020),
    C = r(985018),
    g = r(984241);
let v = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: d,
            prioritizedCurrency: h
        } = e, {
            isPurchased: v,
            isPartiallyOwnedBundle: I
        } = (0, m.h)(t), b = (0, f.G0)(t), k = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), E = k?.unpublishedAt != null ? (0, f.WU)(k.unpublishedAt) : null, j = (0, s.bG)([u.default], () => u.default.getCurrentUser()), y = o.Ay.canUseCollectibles(j), T = (0, x.V_)(t), {
            isOrbExclusive: R
        } = (0, p.F)({
            product: t,
            isPremiumUser: y,
            prioritizedCurrency: h,
            hasDiscountOffer: null != T
        }), _ = r;
        if (null == _ && (!l && (0, f.HF)(k?.unpublishedAt) ? _ = A.AW.LIMITED_TIME : !I && !v && (0, f.aT)(t.skuId) ? _ = A.AW.NEW : R ? _ = A.AW.ORBS_EXCLUSIVE : b && (_ = A.AW.NITRO_EXCLUSIVE)), null == _ || _ === A.AW.NONE) return null;
        let L = null;
        switch (_) {
            case A.AW.LIMITED_TIME:
                L = null != E ? E > 1 ? C.intl.formatToPlainString(C.t.Io7ozn, {
                    days: E
                }) : C.intl.string(C.t.Bc13HF) : C.intl.string(C.t["h/uBCR"]);
                break;
            case A.AW.NEW:
                L = C.intl.string(C.t.y2b7CA);
                break;
            case A.AW.NITRO_EXCLUSIVE:
                L = C.intl.string(C.t.X3Ekj8);
                break;
            case A.AW.ORBS_EXCLUSIVE:
                L = C.intl.string(C.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: L,
            disableColor: !0,
            className: i()(d, g.$)
        })
    },
    I = e => {
        let {
            skuId: t,
            badgeOverride: r,
            className: l,
            prioritizedCurrency: i,
            skipLimitedTimeCheck: s
        } = e, a = (0, A.Vm)(t), u = (0, d.Q)(a);
        if (null == a) return null;
        let o = (0, h.rb)(a, u);
        return (0, n.jsx)(v, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: i
        })
    }