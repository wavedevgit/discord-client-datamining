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
    g = s(206077),
    _ = s(751304),
    m = s(561769),
    h = s(484469),
    p = s(661623),
    f = s(357704),
    x = s(758836);
let E = e => {
    let t, s, E, {
            isBlockLoading: C = !1,
            heroBlock: A,
            tab: b
        } = e,
        S = (0, i.uM)(),
        v = l.useMemo(() => o.A.getCategoryForProduct(A.rewardSkuId), [A.rewardSkuId]),
        L = (0, r.bG)([c.A], () => c.A.getPurchase(A.rewardSkuId)),
        {
            products: I
        } = (t = (0, u.A)(), s = l.useMemo(() => C ? [] : t(A.rankedSkuIds).filter(e => e.skuId !== A.rewardSkuId || null != L), [C, t, A.rankedSkuIds, L, A.rewardSkuId]), E = (0, d.p)()(s), {
            products: (0, g.X)(E)
        }),
        j = l.useMemo(() => !C && 0 !== A.rankedSkuIds.length && !(I.length > 0) && A.rankedSkuIds.every(e => o.A.getProduct(e)?.variantGroupStoreListingId != null), [C, A.rankedSkuIds, I.length]),
        k = C || j,
        {
            readyToClaim: T
        } = (0, f.K)(v, A.rewardSkuId),
        O = null == L && null != A.rewardSkuId && null != v;
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
                    rewardSkuId: A.rewardSkuId
                })
            }, A.rewardSkuId), I.map((e, t) => {
                let s = o.A.getCategoryForProduct(e.skuId);
                return null == e || null == s ? null : (0, n.jsx)(i.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "top 4",
                        categoryPosition: 0
                    },
                    children: (0, n.jsx)(_.A, {
                        skuId: e?.skuId,
                        prioritizedCurrency: b === x.G2.ORBS ? m.Hi.ORBS : void 0,
                        onClickAnalytics: (0, m.UU)(e, b, S)
                    }, e.skuId)
                }, e?.skuId)
            })]
        })
    })
}