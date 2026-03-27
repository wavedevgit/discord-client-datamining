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
    m = r(993408),
    f = r(466459),
    h = r(623373),
    x = r(561769),
    p = r(525723),
    g = r(57020),
    C = r(985018),
    A = r(645089);
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
        } = (0, f.h)(t), v = (0, m.G0)(t), k = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), E = k?.unpublishedAt != null ? (0, m.WU)(k.unpublishedAt) : null, j = (0, s.bG)([u.default], () => u.default.getCurrentUser()), y = o.Ay.canUseCollectibles(j), R = (0, p.V_)(t), {
            isOrbExclusive: T
        } = (0, g.F)({
            product: t,
            isPremiumUser: y,
            prioritizedCurrency: h,
            hasDiscountOffer: null != R
        }), _ = r;
        if (null == _ && (!l && (0, m.HF)(k?.unpublishedAt) ? _ = x.AW.LIMITED_TIME : !b && !I && (0, m.aT)(t.skuId) ? _ = x.AW.NEW : T ? _ = x.AW.ORBS_EXCLUSIVE : v && (_ = x.AW.NITRO_EXCLUSIVE)), null == _ || _ === x.AW.NONE) return null;
        let L = null;
        switch (_) {
            case x.AW.LIMITED_TIME:
                L = null != E ? E > 1 ? C.intl.formatToPlainString(C.t.Io7ozn, {
                    days: E
                }) : C.intl.string(C.t.Bc13HF) : C.intl.string(C.t["h/uBCR"]);
                break;
            case x.AW.NEW:
                L = C.intl.string(C.t.y2b7CA);
                break;
            case x.AW.NITRO_EXCLUSIVE:
                L = C.intl.string(C.t.X3Ekj8);
                break;
            case x.AW.ORBS_EXCLUSIVE:
                L = C.intl.string(C.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: L,
            disableColor: !0,
            className: i()(d, A.$)
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