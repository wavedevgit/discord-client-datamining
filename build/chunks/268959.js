/** chunk id: 268959 params = (module,exports,require) **/
r.d(t, {
    A: () => b
});
var n = r(627968);
r(64700);
var l = r(503698),
    i = r.n(l),
    a = r(311907),
    s = r(397927),
    u = r(287809),
    o = r(927578),
    c = r(590180),
    d = r(298072),
    h = r(993408),
    m = r(466459),
    f = r(623373),
    x = r(561769),
    A = r(525723),
    p = r(57020),
    v = r(985018),
    g = r(984241);
let C = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: d,
            prioritizedCurrency: f
        } = e, {
            isPurchased: C,
            isPartiallyOwnedBundle: b
        } = (0, m.h)(t), I = (0, h.G0)(t), k = (0, a.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), E = k?.unpublishedAt != null ? (0, h.WU)(k.unpublishedAt) : null, y = (0, a.bG)([u.default], () => u.default.getCurrentUser()), j = o.Ay.canUseCollectibles(y), R = (0, A.V_)(t), {
            isOrbExclusive: _
        } = (0, p.F)({
            product: t,
            isPremiumUser: j,
            prioritizedCurrency: f,
            hasDiscountOffer: null != R
        }), T = r;
        if (null == T && (!l && (0, h.HF)(k?.unpublishedAt) ? T = x.AW.LIMITED_TIME : !b && !C && (0, h.aT)(t.skuId) ? T = x.AW.NEW : _ ? T = x.AW.ORBS_EXCLUSIVE : I && (T = x.AW.NITRO_EXCLUSIVE)), null == T || T === x.AW.NONE) return null;
        let L = null;
        switch (T) {
            case x.AW.LIMITED_TIME:
                L = null != E ? E > 1 ? v.intl.formatToPlainString(v.t.Io7ozn, {
                    days: E
                }) : v.intl.string(v.t.Bc13HF) : v.intl.string(v.t["h/uBCR"]);
                break;
            case x.AW.NEW:
                L = v.intl.string(v.t.y2b7CA);
                break;
            case x.AW.NITRO_EXCLUSIVE:
                L = v.intl.string(v.t.X3Ekj8);
                break;
            case x.AW.ORBS_EXCLUSIVE:
                L = v.intl.string(v.t["0TmQRG"])
        }
        return (0, n.jsx)(s.LpS, {
            text: L,
            disableColor: !0,
            className: i()(d, g.$)
        })
    },
    b = e => {
        let {
            skuId: t,
            badgeOverride: r,
            className: l,
            prioritizedCurrency: i,
            skipLimitedTimeCheck: a
        } = e, s = (0, x.Vm)(t), u = (0, d.Q)(s);
        if (null == s) return null;
        let o = (0, f.rb)(s, u);
        return (0, n.jsx)(C, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: a,
            className: l,
            prioritizedCurrency: i
        })
    }