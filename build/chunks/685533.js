/** chunk id: 685533, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => I
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(417597),
    o = s(397927),
    c = s(287809),
    d = s(954571),
    u = s(440938),
    _ = s(590180),
    g = s(511265),
    m = s(365491),
    h = s(856686),
    p = s(100057),
    f = s(751304),
    x = s(561769),
    E = s(484469),
    C = s(998694),
    b = s(438166),
    A = s(652215),
    S = s(695865);
let v = {
    flattenProductVariants: !0
};

function I(e) {
    let {
        isFetchingCategories: t,
        scrollerRef: s,
        tab: l
    } = e, I = (0, u.uM)(), L = I?.sessionId ?? "", {
        noCache: j,
        includeUnpublished: k
    } = (0, C.A)(), T = (0, a.bG)([c.default], () => c.default.getCurrentUser()), {
        skus: O,
        currentPage: y,
        totalCount: N,
        isFetchingResults: R
    } = (0, h.S)(), B = (0, a.yK)([_.A], () => _.A.getProductsBySkus(O)), M = r.useCallback(() => {
        s?.current?.scrollToTop({
            animate: !0
        })
    }, [s]), P = O?.join("");
    r.useEffect(() => {
        M()
    }, [P, M]);
    let D = (0, g.p)(),
        w = r.useMemo(() => D(B), [D, B]);
    r.useEffect(() => {
        t || (0, p.z)({
            sessionId: L,
            checkpoint: p.t.SHOP_RENDERED,
            tab: l,
            unpublishedCategoriesShown: k,
            cacheDisabled: j
        })
    }, [L, k, j, t, l]);
    let H = r.useRef(null),
        {
            setQueryPageSize: U,
            setQueryPageOffset: F,
            queryPageSize: G
        } = (0, m.v)(),
        [V, K] = r.useState(!1),
        z = t || R || null == T;
    r.useEffect(() => {
        z ? K(!1) : w.length > 0 && K(!0)
    }, [z, w.length]);
    let W = G > 0 && !z && 0 === w.length;
    r.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == H.current || U(Math.floor(5 * getComputedStyle(H.current).gridTemplateColumns.split(/\s+/).length))
        });
        if (null != H.current) return e.observe(H.current), () => e.disconnect()
    }, [U]);
    let Y = r.useCallback(e => {
        d.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: I?.sessionId,
            page_section: I?.pageSection,
            page_category: I?.pageCategory,
            page_index: e,
            page_size: G,
            cta_name: `filter results page ${e}`,
            page_type: "catalog"
        }), F((e - 1) * G)
    }, [I, G, F]);
    return (0, n.jsxs)(x.v3.Provider, {
        value: v,
        children: [(0, n.jsxs)("div", {
            className: i()({
                [S.oE]: W
            }),
            children: [W && (0, n.jsx)(b.A, {}), (0, n.jsxs)("div", {
                className: i()(S.ZE, {
                    [S.Kp]: V
                }),
                ref: H,
                children: [z && [...Array(G)].map((e, t) => (0, n.jsx)(E.A, {}, t)), !z && w.map((e, t) => null == _.A.getCategory(e.categorySkuId) ? null : (0, n.jsx)(u.R9, {
                    newValue: {
                        tilePosition: t
                    },
                    children: (0, n.jsx)(f.A, {
                        skuId: e.skuId,
                        onClickAnalytics: (0, x.UU)(e, l, I)
                    }, e.skuId)
                }, e.skuId))]
            })]
        }), N > G && (0, n.jsx)("div", {
            className: S.Ej,
            children: (0, n.jsx)("div", {
                children: (0, n.jsx)(o.mgR, {
                    currentPage: y,
                    totalCount: N,
                    pageSize: G,
                    onPageChange: Y,
                    disablePaginationGap: !0
                })
            })
        })]
    })
}