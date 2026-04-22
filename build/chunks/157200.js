/** chunk id: 157200 params = (module,exports,require) **/
r.d(e, {
    A: () => x
});
var n = r(627968);
r(64700);
var i = r(397927),
    l = r(793574),
    s = r(440938),
    a = r(161918),
    u = r(298072),
    o = r(623373),
    c = r(878112),
    d = r(561769),
    k = r(347722),
    p = r(758836),
    C = r(985018);
let m = t => {
        let {
            product: e,
            selectedVariantIndex: r,
            cardRef: u,
            onClick: o,
            icon: m,
            prioritizedCurrency: x,
            onClickAnalytics: I,
            onTrackClick: A
        } = t, g = (0, a.Mk)(), h = g?.tab, _ = (0, s.uM)(), f = (0, k.X)(e, x), T = (0, d.ql)(e, l.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, I);
        return null != o || null != m ? (0, n.jsx)(i.K0, {
            variant: "primary",
            "aria-label": C.intl.string(C.t.SKNnqq),
            icon: m ?? i.bMW,
            onClick: t => {
                t.stopPropagation(), null != o ? o(e.skuId) : (A?.(p.sH.OPEN_DETAILS), T(t))
            }
        }) : f ? (0, n.jsx)(s.R9, {
            newValue: {
                pageCategory: h === p.G2.HOME ? void 0 : _?.pageCategory
            },
            children: (0, n.jsx)(c.A, {
                primary: !0,
                product: e,
                selectedVariantIndex: r,
                returnRef: u,
                tooltipDelay: 250,
                onTrackClick: A
            })
        }) : null
    },
    x = t => {
        let {
            skuId: e,
            cardRef: r,
            onClick: i,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: c
        } = t, k = (0, d.Vm)(e), p = (0, u.Q)(k);
        if (null == k) return null;
        let C = (0, o.rb)(k, p);
        return (0, n.jsx)(m, {
            product: C,
            cardRef: r,
            selectedVariantIndex: p,
            onClick: i,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: c
        })
    }