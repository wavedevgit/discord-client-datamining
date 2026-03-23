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
    m = r(347722),
    f = r(758836),
    h = r(985018);
let x = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: x,
            prioritizedCurrency: p,
            onClickAnalytics: g
        } = e, C = (0, a.Mk)(), A = C?.tab, I = (0, s.uM)(), b = (0, m.X)(t, p), v = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, g);
        return null != o || null != x ? (0, n.jsx)(l.K0, {
            variant: "primary",
            "aria-label": h.intl.string(h.t.SKNnqq),
            icon: x ?? l.bMW,
            onClick: e => {
                e.stopPropagation(), null != o ? o(t.skuId) : v(e)
            }
        }) : b ? (0, n.jsx)(s.R9, {
            newValue: {
                pageCategory: A === f.G2.HOME ? void 0 : I?.pageCategory
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
        } = e, c = (0, d.Vm)(t), m = (0, u.Q)(c);
        if (null == c) return null;
        let f = (0, o.rb)(c, m);
        return (0, n.jsx)(x, {
            product: f,
            cardRef: r,
            selectedVariantIndex: m,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        })
    }