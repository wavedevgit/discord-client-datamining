/** chunk id: 695413, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => E
});
var n = s(627968),
    l = s(64700),
    r = s(311907),
    a = s(720462),
    i = s(440938),
    o = s(590180),
    c = s(4227),
    d = s(511265),
    u = s(313276),
    _ = s(206077),
    g = s(751304),
    m = s(561769),
    h = s(484469),
    p = s(661623),
    f = s(357704),
    x = s(758836);
let E = e => {
    let t, s, E, {
            isBlockLoading: C = !1,
            heroBlock: b,
            tab: A
        } = e,
        S = (0, i.uM)(),
        v = l.useMemo(() => o.A.getCategoryForProduct(b.rewardSkuId), [b.rewardSkuId]),
        I = (0, r.bG)([c.A], () => c.A.getPurchase(b.rewardSkuId)),
        {
            products: L
        } = (t = (0, u.A)(), s = l.useMemo(() => C ? [] : t(b.rankedSkuIds).filter(e => e.skuId !== b.rewardSkuId || null != I), [C, t, b.rankedSkuIds, I, b.rewardSkuId]), E = (0, d.p)()(s), {
            products: (0, _.X)(E)
        }),
        j = l.useMemo(() => !C && 0 !== b.rankedSkuIds.length && !(L.length > 0) && b.rankedSkuIds.every(e => o.A.getProduct(e)?.variantGroupStoreListingId != null), [C, b.rankedSkuIds, L.length]),
        k = C || j,
        {
            readyToClaim: T
        } = (0, f.K)(v, b.rewardSkuId),
        O = null == I && null != b.rewardSkuId && null != v;
    return (0, n.jsx)(a.A, {
        gap: "xl",
        children: k ? (0, n.jsx)(n.Fragment, {
            children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(h.A, {}, t))
        }) : (0, n.jsxs)(n.Fragment, {
            children: [O && T && (0, n.jsx)(i.R9, {
                newValue: {
                    tilePosition: 0,
                    pageSection: "top 4",
                    categoryPosition: 0
                },
                children: (0, n.jsx)(p.A, {
                    category: v,
                    rewardSkuId: b.rewardSkuId
                })
            }, b.rewardSkuId), L.map((e, t) => {
                let s = o.A.getCategoryForProduct(e.skuId);
                return null == e || null == s ? null : (0, n.jsx)(i.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "top 4",
                        categoryPosition: 0
                    },
                    children: (0, n.jsx)(g.A, {
                        skuId: e?.skuId,
                        prioritizedCurrency: A === x.G2.ORBS ? m.Hi.ORBS : void 0,
                        onClickAnalytics: (0, m.UU)(e, A, S)
                    }, e.skuId)
                }, e?.skuId)
            })]
        })
    })
}