/** Chunk was on 59275 **/
/** chunk id: 695413, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(408238),
    i = n(440938),
    o = n(590180),
    c = n(4227),
    u = n(511265),
    d = n(313276),
    g = n(206077),
    f = n(751304),
    m = n(561769),
    p = n(484469),
    _ = n(661623),
    b = n(940622),
    h = n(357704),
    E = n(758836);
let v = e => {
    let t, n, v, C, {
            isBlockLoading: A = !1,
            heroBlock: S,
            tab: x
        } = e,
        O = (0, i.uM)(),
        y = l.useMemo(() => o.A.getCategoryForProduct(S.rewardSkuId), [S.rewardSkuId]),
        j = (0, s.bG)([c.A], () => c.A.getPurchase(S.rewardSkuId)),
        {
            products: T
        } = (t = (0, d.A)(), n = l.useMemo(() => A ? [] : t(S.rankedSkuIds).filter(e => e.skuId !== S.rewardSkuId || null != j), [A, t, S.rankedSkuIds, j, S.rewardSkuId]), v = (0, u.p)()(n), C = (0, g.X)(v), {
            products: (0, b.od)(C)
        }),
        L = l.useMemo(() => !A && 0 !== S.rankedSkuIds.length && !(T.length > 0) && S.rankedSkuIds.every(e => {
            var t;
            return (null == (t = o.A.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null
        }), [A, S.rankedSkuIds, T.length]),
        I = A || L,
        {
            readyToClaim: k
        } = (0, h.K)(y, S.rewardSkuId),
        N = null == j && null != S.rewardSkuId && null != y;
    return (0, r.jsx)(a.A, {
        gap: "xl",
        children: I ? (0, r.jsx)(r.Fragment, {
            children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(p.A, {}, t))
        }) : (0, r.jsxs)(r.Fragment, {
            children: [N && k && (0, r.jsx)(i.R9, {
                newValue: {
                    tilePosition: 0,
                    pageSection: "top 4",
                    categoryPosition: 0
                },
                children: (0, r.jsx)(_.A, {
                    category: y,
                    rewardSkuId: S.rewardSkuId
                })
            }, S.rewardSkuId), T.map((e, t) => {
                let n = o.A.getCategoryForProduct(e.skuId);
                return null == e || null == n ? null : (0, r.jsx)(i.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "top 4",
                        categoryPosition: 0
                    },
                    children: (0, r.jsx)(f.A, {
                        skuId: null == e ? void 0 : e.skuId,
                        prioritizedCurrency: x === E.G2.ORBS ? m.Hi.ORBS : void 0,
                        onClickAnalytics: (0, m.UU)(e, x, O)
                    }, e.skuId)
                }, null == e ? void 0 : e.skuId)
            })]
        })
    })
}