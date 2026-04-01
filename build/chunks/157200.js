/** chunk id: 157200 params = (module,exports,require) **/
r.d(t, {
    A: () => x
});
var n = r(627968);
r(64700);
var l = r(397927),
    i = r(793574),
    s = r(440938),
    a = r(161918),
    u = r(298072),
    o = r(623373),
    c = r(878112),
    d = r(561769),
    m = r(347722),
    h = r(758836),
    p = r(985018);
let f = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: f,
            prioritizedCurrency: x,
            onClickAnalytics: g
        } = e, v = (0, a.Mk)(), A = v?.tab, C = (0, s.uM)(), I = (0, m.X)(t, x), k = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, g);
        return null != o || null != f ? (0, n.jsx)(l.K0, {
            variant: "primary",
            "aria-label": p.intl.string(p.t.SKNnqq),
            icon: f ?? l.bMW,
            onClick: e => {
                e.stopPropagation(), null != o ? o(t.skuId) : k(e)
            }
        }) : I ? (0, n.jsx)(s.R9, {
            newValue: {
                pageCategory: A === h.G2.HOME ? void 0 : C?.pageCategory
            },
            children: (0, n.jsx)(c.A, {
                primary: !0,
                product: t,
                selectedVariantIndex: r,
                returnRef: u,
                tooltipDelay: 250
            })
        }) : null
    },
    x = e => {
        let {
            skuId: t,
            cardRef: r,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        } = e, c = (0, d.Vm)(t), m = (0, u.Q)(c);
        if (null == c) return null;
        let h = (0, o.rb)(c, m);
        return (0, n.jsx)(f, {
            product: h,
            cardRef: r,
            selectedVariantIndex: m,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        })
    }