/** chunk id: 157200 params = (module,exports,require) **/
r.d(t, {
    A: () => A
});
var n = r(627968);
r(64700);
var l = r(397927),
    i = r(793574),
    a = r(440938),
    s = r(161918),
    u = r(298072),
    o = r(623373),
    c = r(878112),
    d = r(561769),
    h = r(347722),
    m = r(758836),
    f = r(985018);
let x = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: x,
            prioritizedCurrency: A,
            onClickAnalytics: p
        } = e, v = (0, s.Mk)(), g = v?.tab, C = (0, a.uM)(), b = (0, h.X)(t, A), I = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, p);
        return null != o || null != x ? (0, n.jsx)(l.K0, {
            variant: "primary",
            "aria-label": f.intl.string(f.t.SKNnqq),
            icon: x ?? l.bMW,
            onClick: e => {
                e.stopPropagation(), null != o ? o(t.skuId) : I(e)
            }
        }) : b ? (0, n.jsx)(a.R9, {
            newValue: {
                pageCategory: g === m.G2.HOME ? void 0 : C?.pageCategory
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
    A = e => {
        let {
            skuId: t,
            cardRef: r,
            onClick: l,
            icon: i,
            prioritizedCurrency: a,
            onClickAnalytics: s
        } = e, c = (0, d.Vm)(t), h = (0, u.Q)(c);
        if (null == c) return null;
        let m = (0, o.rb)(c, h);
        return (0, n.jsx)(x, {
            product: m,
            cardRef: r,
            selectedVariantIndex: h,
            onClick: l,
            icon: i,
            prioritizedCurrency: a,
            onClickAnalytics: s
        })
    }