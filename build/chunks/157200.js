/** chunk id: 157200 params = (module,exports,require) **/
r.d(t, {
    A: () => p
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
    h = r(347722),
    m = r(758836),
    x = r(985018);
let f = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: f,
            prioritizedCurrency: p,
            onClickAnalytics: g
        } = e, v = (0, a.Mk)(), C = v?.tab, A = (0, s.uM)(), b = (0, h.X)(t, p), k = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, g);
        return null != o || null != f ? (0, n.jsx)(l.K0, {
            variant: "primary",
            "aria-label": x.intl.string(x.t.SKNnqq),
            icon: f ?? l.bMW,
            onClick: e => {
                e.stopPropagation(), null != o ? o(t.skuId) : k(e)
            }
        }) : b ? (0, n.jsx)(s.R9, {
            newValue: {
                pageCategory: C === m.G2.HOME ? void 0 : A?.pageCategory
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
    p = e => {
        let {
            skuId: t,
            cardRef: r,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        } = e, c = (0, d.Vm)(t), h = (0, u.Q)(c);
        if (null == c) return null;
        let m = (0, o.rb)(c, h);
        return (0, n.jsx)(f, {
            product: m,
            cardRef: r,
            selectedVariantIndex: h,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        })
    }