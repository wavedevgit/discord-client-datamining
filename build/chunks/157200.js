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
    o = r(298072),
    u = r(623373),
    c = r(878112),
    d = r(561769),
    p = r(347722),
    k = r(758836),
    C = r(985018);
let m = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            cardRef: o,
            onClick: u,
            icon: m,
            prioritizedCurrency: x,
            onClickAnalytics: g,
            onTrackClick: A
        } = e, h = (0, a.Mk)(), I = h?.tab, v = (0, s.uM)(), _ = (0, p.X)(t, x), T = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, g);
        return null != u || null != m ? (0, n.jsx)(l.K0, {
            variant: "primary",
            "aria-label": C.intl.string(C.t.SKNnqq),
            icon: m ?? l.bMW,
            onClick: e => {
                e.stopPropagation(), null != u ? u(t.skuId) : (A?.(k.sH.OPEN_DETAILS), T(e))
            }
        }) : _ ? (0, n.jsx)(s.R9, {
            newValue: {
                pageCategory: I === k.G2.HOME ? void 0 : v?.pageCategory
            },
            children: (0, n.jsx)(c.A, {
                primary: !0,
                product: t,
                selectedVariantIndex: r,
                returnRef: o,
                tooltipDelay: 250,
                onTrackClick: A
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
            onClickAnalytics: a,
            onTrackClick: c
        } = e, p = (0, d.Vm)(t), k = (0, o.Q)(p);
        if (null == p) return null;
        let C = (0, u.rb)(p, k);
        return (0, n.jsx)(m, {
            product: C,
            cardRef: r,
            selectedVariantIndex: k,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: c
        })
    }