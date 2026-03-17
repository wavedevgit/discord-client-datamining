/** chunk id: 695413 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => b
});
var n = s(627968),
    r = s(64700),
    l = s(311907),
    a = s(720462),
    i = s(440938),
    o = s(590180),
    c = s(4227),
    d = s(940980),
    u = s(511265),
    _ = s(313276),
    g = s(206077),
    m = s(751304),
    h = s(561769),
    p = s(484469),
    f = s(661623),
    x = s(357704),
    E = s(758836);
let b = e => {
    let t, s, b, {
            isBlockLoading: C = !1,
            heroBlock: A,
            tab: S
        } = e,
        v = (0, d.W)("RewardHeroBlockCards"),
        I = r.useMemo(() => o.A.getCategoryForProduct(A.rewardSkuId), [A.rewardSkuId]),
        L = (0, l.bG)([c.A], () => c.A.getPurchase(A.rewardSkuId)),
        {
            products: j
        } = (t = (0, _.A)(), s = r.useMemo(() => C ? [] : t(A.rankedSkuIds).filter(e => e.skuId !== A.rewardSkuId || null != L), [C, t, A.rankedSkuIds, L, A.rewardSkuId]), b = (0, u.p)()(s), {
            products: (0, g.X)(b)
        }),
        k = r.useMemo(() => !C && 0 !== A.rankedSkuIds.length && !(j.length > 0) && A.rankedSkuIds.every(e => o.A.getProduct(e)?.variantGroupStoreListingId != null), [C, A.rankedSkuIds, j.length]),
        T = C || k,
        {
            readyToClaim: O
        } = (0, x.K)(I, A.rewardSkuId),
        N = null == L && null != A.rewardSkuId && null != I;
    return (0, n.jsx)(a.A, {
        gap: "xl",
        children: T ? (0, n.jsx)(n.Fragment, {
            children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(p.A, {}, t))
        }) : (0, n.jsxs)(n.Fragment, {
            children: [N && O && (0, n.jsx)(i.R9, {
                newValue: {
                    tilePosition: 0,
                    pageSection: "top 4",
                    categoryPosition: 0
                },
                children: (0, n.jsx)(f.A, {
                    category: I,
                    rewardSkuId: A.rewardSkuId
                })
            }, A.rewardSkuId), j.map((e, t) => {
                let s = o.A.getCategoryForProduct(e.skuId);
                return null == e || null == s ? null : (0, n.jsx)(i.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "top 4",
                        categoryPosition: 0
                    },
                    children: (0, n.jsx)(m.A, {
                        skuId: e?.skuId,
                        prioritizedCurrency: S === E.G2.ORBS ? h.Hi.ORBS : v ? h.Hi.FIAT : void 0
                    }, e.skuId)
                }, e?.skuId)
            })]
        })
    })
}