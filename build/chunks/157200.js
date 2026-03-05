/** chunk id: 157200 params = (module,exports,require) **/
r.d(e, {
    A: () => h
});
var i = r(627968);
r(64700);
var l = r(397927),
    n = r(793574),
    s = r(440938),
    a = r(161918),
    u = r(298072),
    o = r(623373),
    d = r(878112),
    c = r(561769),
    m = r(347722),
    A = r(758836),
    x = r(985018);
let p = t => {
        let {
            product: e,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: p,
            prioritizedCurrency: h,
            onClickAnalytics: g
        } = t, C = (0, a.Mk)(), I = C?.tab, v = (0, s.uM)(), f = (0, m.X)(e, h), j = (0, c.ql)(e, n.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, g);
        return null != o || null != p ? (0, i.jsx)(l.K0, {
            variant: "primary",
            "aria-label": x.intl.string(x.t.SKNnqq),
            icon: p ?? l.bMW,
            onClick: t => {
                t.stopPropagation(), null != o ? o(e.skuId) : j(t)
            }
        }) : f ? (0, i.jsx)(s.R9, {
            newValue: {
                pageCategory: I === A.G2.HOME ? void 0 : v?.pageCategory
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
    h = t => {
        let {
            skuId: e,
            cardRef: r,
            onClick: l,
            icon: n,
            prioritizedCurrency: s,
            onClickAnalytics: a
        } = t, d = (0, c.Vm)(e), m = (0, u.Q)(d);
        if (null == d) return null;
        let A = (0, o.rb)(d, m);
        return (0, i.jsx)(p, {
            product: A,
            cardRef: r,
            selectedVariantIndex: m,
            onClick: l,
            icon: n,
            prioritizedCurrency: s,
            onClickAnalytics: a
        })
    }