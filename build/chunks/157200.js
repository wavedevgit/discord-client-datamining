/** chunk id: 157200 params = (module,exports,require) **/
r.d(e, {
    A: () => g
});
var i = r(627968);
r(64700);
var n = r(397927),
    l = r(793574),
    s = r(440938),
    a = r(161918),
    u = r(298072),
    o = r(623373),
    d = r(878112),
    c = r(561769),
    A = r(347722),
    m = r(758836),
    x = r(985018);
let p = t => {
        let {
            product: e,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: p,
            prioritizedCurrency: g,
            onClickAnalytics: C
        } = t, h = (0, a.Mk)(), I = h?.tab, f = (0, s.uM)(), k = (0, A.X)(e, g), v = (0, c.ql)(e, l.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, C);
        return null != o || null != p ? (0, i.jsx)(n.K0, {
            variant: "primary",
            "aria-label": x.intl.string(x.t.SKNnqq),
            icon: p ?? n.bMW,
            onClick: t => {
                t.stopPropagation(), null != o ? o(e.skuId) : v(t)
            }
        }) : k ? (0, i.jsx)(s.R9, {
            newValue: {
                pageCategory: I === m.G2.HOME ? void 0 : f?.pageCategory
            },
            children: (0, i.jsx)(d.A, {
                primary: !0,
                product: e,
                selectedVariantIndex: r,
                returnRef: u,
                tooltipDelay: 250
            })
        }) : null
    },
    g = t => {
        let {
            skuId: e,
            cardRef: r,
            onClick: n,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: a
        } = t, d = (0, c.Vm)(e), A = (0, u.Q)(d);
        if (null == d) return null;
        let m = (0, o.rb)(d, A);
        return (0, i.jsx)(p, {
            product: m,
            cardRef: r,
            selectedVariantIndex: A,
            onClick: n,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: a
        })
    }