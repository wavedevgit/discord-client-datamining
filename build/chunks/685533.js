/** chunk id: 685533, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => I
});
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(417597),
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
        tab: r
    } = e, I = (0, u.uM)(), L = I?.sessionId ?? "", {
        noCache: j,
        includeUnpublished: k
    } = (0, C.A)(), T = (0, i.bG)([c.default], () => c.default.getCurrentUser()), {
        skus: O,
        currentPage: N,
        totalCount: y,
        isFetchingResults: R
    } = (0, h.S)(), B = (0, i.yK)([_.A], () => _.A.getProductsBySkus(O)), M = l.useCallback(() => {
        s?.current?.scrollToTop({
            animate: !0
        })
    }, [s]), P = O?.join("");
    l.useEffect(() => {
        M()
    }, [P, M]);
    let D = (0, g.p)(),
        w = l.useMemo(() => D(B), [D, B]);
    l.useEffect(() => {
        t || (0, p.z)({
            sessionId: L,
            checkpoint: p.t.SHOP_RENDERED,
            tab: r,
            unpublishedCategoriesShown: k,
            cacheDisabled: j
        })
    }, [L, k, j, t, r]);
    let H = l.useRef(null),
        {
            setQueryPageSize: U,
            setQueryPageOffset: G,
            queryPageSize: F
        } = (0, m.v)(),
        [V, K] = l.useState(!1),
        W = t || R || null == T;
    l.useEffect(() => {
        W ? K(!1) : w.length > 0 && K(!0)
    }, [W, w.length]);
    let z = F > 0 && !W && 0 === w.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == H.current || U(Math.floor(5 * getComputedStyle(H.current).gridTemplateColumns.split(/\s+/).length))
        });
        if (null != H.current) return e.observe(H.current), () => e.disconnect()
    }, [U]);
    let Y = l.useCallback(e => {
        d.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: I?.sessionId,
            page_section: I?.pageSection,
            page_category: I?.pageCategory,
            page_index: e,
            page_size: F,
            cta_name: `filter results page ${e}`,
            page_type: "catalog"
        }), G((e - 1) * F)
    }, [I, F, G]);
    return (0, n.jsxs)(x.v3.Provider, {
        value: v,
        children: [(0, n.jsxs)("div", {
            className: a()({
                [S.oE]: z
            }),
            children: [z && (0, n.jsx)(b.A, {}), (0, n.jsxs)("div", {
                className: a()(S.ZE, {
                    [S.Kp]: V
                }),
                ref: H,
                children: [W && [...Array(F)].map((e, t) => (0, n.jsx)(E.A, {}, t)), !W && w.map((e, t) => null == _.A.getCategory(e.categorySkuId) ? null : (0, n.jsx)(u.R9, {
                    newValue: {
                        tilePosition: t
                    },
                    children: (0, n.jsx)(f.A, {
                        skuId: e.skuId,
                        onClickAnalytics: (0, x.UU)(e, r, I)
                    }, e.skuId)
                }, e.skuId))]
            })]
        }), y > F && (0, n.jsx)("div", {
            className: S.Ej,
            children: (0, n.jsx)("div", {
                children: (0, n.jsx)(o.mgR, {
                    currentPage: N,
                    totalCount: y,
                    pageSize: F,
                    onPageChange: Y,
                    disablePaginationGap: !0
                })
            })
        })]
    })
}