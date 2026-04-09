/** chunk id: 157200 params = (module,exports,require) **/
r.d(t, {
    A: () => h
});
var n = r(627968);
r(64700);
var l = r(397927),
    i = r(793574),
    s = r(440938),
    a = r(161918),
    u = r(298072),
    o = r(623373),
    d = r(878112),
    c = r(561769),
    p = r(347722),
    m = r(758836),
    x = r(985018);
let g = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: g,
            prioritizedCurrency: h,
            onClickAnalytics: C
        } = e, A = (0, a.Mk)(), k = A?.tab, I = (0, s.uM)(), v = (0, p.X)(t, h), f = (0, c.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, C);
        return null != o || null != g ? (0, n.jsx)(l.K0, {
            variant: "primary",
            "aria-label": x.intl.string(x.t.SKNnqq),
            icon: g ?? l.bMW,
            onClick: e => {
                e.stopPropagation(), null != o ? o(t.skuId) : f(e)
            }
        }) : v ? (0, n.jsx)(s.R9, {
            newValue: {
                pageCategory: k === m.G2.HOME ? void 0 : I?.pageCategory
            },
            children: (0, n.jsx)(d.A, {
                primary: !0,
                product: t,
                selectedVariantIndex: r,
                returnRef: u,
                tooltipDelay: 250
            })
        }) : null
    },
    h = e => {
        let {
            skuId: t,
            cardRef: r,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        } = e, d = (0, c.Vm)(t), p = (0, u.Q)(d);
        if (null == d) return null;
        let m = (0, o.rb)(d, p);
        return (0, n.jsx)(g, {
            product: m,
            cardRef: r,
            selectedVariantIndex: p,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        })
    }