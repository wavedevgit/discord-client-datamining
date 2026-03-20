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
    f = r(347722),
    m = r(758836),
    h = r(985018);
let A = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: A,
            prioritizedCurrency: x,
            onClickAnalytics: p
        } = e, C = (0, a.Mk)(), g = C?.tab, v = (0, s.uM)(), I = (0, f.X)(t, x), b = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, p);
        return null != o || null != A ? (0, n.jsx)(l.K0, {
            variant: "primary",
            "aria-label": h.intl.string(h.t.SKNnqq),
            icon: A ?? l.bMW,
            onClick: e => {
                e.stopPropagation(), null != o ? o(t.skuId) : b(e)
            }
        }) : I ? (0, n.jsx)(s.R9, {
            newValue: {
                pageCategory: g === m.G2.HOME ? void 0 : v?.pageCategory
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
        } = e, c = (0, d.Vm)(t), f = (0, u.Q)(c);
        if (null == c) return null;
        let m = (0, o.rb)(c, f);
        return (0, n.jsx)(A, {
            product: m,
            cardRef: r,
            selectedVariantIndex: f,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        })
    }