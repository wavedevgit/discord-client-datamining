/** chunk id: 268959 params = (module,exports,require) **/
r.d(e, {
    A: () => f
});
var i = r(627968);
r(64700);
var l = r(503698),
    n = r.n(l),
    s = r(311907),
    a = r(397927),
    u = r(287809),
    o = r(927578),
    d = r(590180),
    c = r(298072),
    m = r(993408),
    x = r(466459),
    A = r(623373),
    p = r(561769),
    h = r(525723),
    g = r(57020),
    C = r(985018),
    I = r(984241);
let v = t => {
        let {
            product: e,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: c,
            prioritizedCurrency: A
        } = t, {
            isPurchased: v,
            isPartiallyOwnedBundle: f
        } = (0, x.h)(e), j = (0, m.G0)(e), k = (0, s.bG)([d.A], () => d.A.getCategoryForProduct(e.skuId)), y = k?.unpublishedAt != null ? (0, m.WU)(k.unpublishedAt) : null, E = (0, s.bG)([u.default], () => u.default.getCurrentUser()), T = o.Ay.canUseCollectibles(E), _ = (0, h.V_)(e), {
            isOrbExclusive: b
        } = (0, g.F)({
            product: e,
            isPremiumUser: T,
            prioritizedCurrency: A,
            hasDiscountOffer: null != _
        }), N = r;
        if (null == N && (!l && (0, m.HF)(k?.unpublishedAt) ? N = p.AW.LIMITED_TIME : !f && !v && (0, m.aT)(e.skuId) ? N = p.AW.NEW : b ? N = p.AW.ORBS_EXCLUSIVE : j && (N = p.AW.NITRO_EXCLUSIVE)), null == N || N === p.AW.NONE) return null;
        let R = null;
        switch (N) {
            case p.AW.LIMITED_TIME:
                R = null != y ? y > 1 ? C.intl.formatToPlainString(C.t.Io7ozn, {
                    days: y
                }) : C.intl.string(C.t.Bc13HF) : C.intl.string(C.t["h/uBCR"]);
                break;
            case p.AW.NEW:
                R = C.intl.string(C.t.y2b7CA);
                break;
            case p.AW.NITRO_EXCLUSIVE:
                R = C.intl.string(C.t.X3Ekj8);
                break;
            case p.AW.ORBS_EXCLUSIVE:
                R = C.intl.string(C.t["0TmQRG"])
        }
        return (0, i.jsx)(a.LpS, {
            text: R,
            disableColor: !0,
            className: n()(c, I.$)
        })
    },
    f = t => {
        let {
            skuId: e,
            badgeOverride: r,
            className: l,
            prioritizedCurrency: n,
            skipLimitedTimeCheck: s
        } = t, a = (0, p.Vm)(e), u = (0, c.Q)(a);
        if (null == a) return null;
        let o = (0, A.rb)(a, u);
        return (0, i.jsx)(v, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: n
        })
    }