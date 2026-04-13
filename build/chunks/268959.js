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
    C = r(466459),
    k = r(623373),
    m = r(561769),
    x = r(525723),
    g = r(57020),
    h = r(985018),
    I = r(766706);
let A = e => {
        let {
            product: t,
            badgeOverride: r,
            skipLimitedTimeCheck: l,
            className: d,
            prioritizedCurrency: k
        } = e, {
            isPurchased: A,
            isPartiallyOwnedBundle: v
        } = (0, C.h)(t), f = (0, p.G0)(t), _ = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(t.skuId)), T = _?.unpublishedAt != null ? (0, p.WU)(_.unpublishedAt) : null, E = (0, s.bG)([o.default], () => o.default.getCurrentUser()), y = u.Ay.canUseCollectibles(E), j = (0, x.V_)(t), {
            isOrbExclusive: b
        } = (0, g.F)({
            product: t,
            isPremiumUser: y,
            prioritizedCurrency: k,
            hasDiscountOffer: null != j
        }), R = r;
        if (null == R && (!l && (0, p.HF)(_?.unpublishedAt) ? R = m.AW.LIMITED_TIME : !v && !A && (0, p.aT)(t.skuId) ? R = m.AW.NEW : b ? R = m.AW.ORBS_EXCLUSIVE : f && (R = m.AW.NITRO_EXCLUSIVE)), null == R || R === m.AW.NONE) return null;
        let P = null;
        switch (R) {
            case m.AW.LIMITED_TIME:
                P = null != T ? T > 1 ? h.intl.formatToPlainString(h.t.Io7ozn, {
                    days: T
                }) : h.intl.string(h.t.Bc13HF) : h.intl.string(h.t["h/uBCR"]);
                break;
            case m.AW.NEW:
                P = h.intl.string(h.t.y2b7CA);
                break;
            case m.AW.NITRO_EXCLUSIVE:
                P = h.intl.string(h.t.X3Ekj8);
                break;
            case m.AW.ORBS_EXCLUSIVE:
                P = h.intl.string(h.t["0TmQRG"])
        }
        return (0, n.jsx)(a.LpS, {
            text: P,
            disableColor: !0,
            className: i()(d, I.$)
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
        let u = (0, k.rb)(a, o);
        return (0, n.jsx)(A, {
            product: u,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: i
        })
    }