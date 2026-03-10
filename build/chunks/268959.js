/** chunk id: 268959 params = (module,exports,require) **/
r.d(e, {
    A: () => k
});
var i = r(627968);
r(64700);
var n = r(503698),
    l = r.n(n),
    s = r(311907),
    a = r(397927),
    u = r(287809),
    o = r(927578),
    d = r(590180),
    c = r(298072),
    A = r(993408),
    m = r(466459),
    x = r(623373),
    p = r(561769),
    g = r(525723),
    C = r(57020),
    h = r(985018),
    I = r(865687);
let f = t => {
        let {
            product: e,
            badgeOverride: r,
            skipLimitedTimeCheck: n,
            className: c,
            prioritizedCurrency: x
        } = t, {
            isPurchased: f,
            isPartiallyOwnedBundle: k
        } = (0, m.h)(e), v = (0, A.G0)(e), j = (0, s.bG)([d.A], () => d.A.getCategoryForProduct(e.skuId)), T = j?.unpublishedAt != null ? (0, A.WU)(j.unpublishedAt) : null, E = (0, s.bG)([u.default], () => u.default.getCurrentUser()), y = o.Ay.canUseCollectibles(E), _ = (0, g.V_)(e), {
            isOrbExclusive: b
        } = (0, C.F)({
            product: e,
            isPremiumUser: y,
            prioritizedCurrency: x,
            hasDiscountOffer: null != _
        }), R = r;
        if (null == R && (!n && (0, A.HF)(j?.unpublishedAt) ? R = p.AW.LIMITED_TIME : !k && !f && (0, A.aT)(e.skuId) ? R = p.AW.NEW : b ? R = p.AW.ORBS_EXCLUSIVE : v && (R = p.AW.NITRO_EXCLUSIVE)), null == R || R === p.AW.NONE) return null;
        let L = null;
        switch (R) {
            case p.AW.LIMITED_TIME:
                L = null != T ? T > 1 ? h.intl.formatToPlainString(h.t.Io7ozn, {
                    days: T
                }) : h.intl.string(h.t.Bc13HF) : h.intl.string(h.t["h/uBCR"]);
                break;
            case p.AW.NEW:
                L = h.intl.string(h.t.y2b7CA);
                break;
            case p.AW.NITRO_EXCLUSIVE:
                L = h.intl.string(h.t.X3Ekj8);
                break;
            case p.AW.ORBS_EXCLUSIVE:
                L = h.intl.string(h.t["0TmQRG"])
        }
        return (0, i.jsx)(a.LpS, {
            text: L,
            disableColor: !0,
            className: l()(c, I.$)
        })
    },
    k = t => {
        let {
            skuId: e,
            badgeOverride: r,
            className: n,
            prioritizedCurrency: l,
            skipLimitedTimeCheck: s
        } = t, a = (0, p.Vm)(e), u = (0, c.Q)(a);
        if (null == a) return null;
        let o = (0, x.rb)(a, u);
        return (0, i.jsx)(f, {
            product: o,
            badgeOverride: r,
            skipLimitedTimeCheck: s,
            className: n,
            prioritizedCurrency: l
        })
    }