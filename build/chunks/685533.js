/** chunk id: 685533, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(896048), n(747238);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(417597),
    o = n(397927),
    c = n(287809),
    u = n(954571),
    d = n(440938),
    g = n(590180),
    f = n(511265),
    m = n(365491),
    p = n(856686),
    _ = n(100057),
    b = n(751304),
    h = n(561769),
    E = n(484469),
    v = n(998694),
    C = n(438166),
    A = n(652215),
    S = n(695865);
let x = {
    flattenProductVariants: !0
};

function O(e) {
    var t;
    let {
        isFetchingCategories: n,
        scrollerRef: s,
        tab: O
    } = e, y = (0, d.uM)(), j = null != (t = null == y ? void 0 : y.sessionId) ? t : "", {
        noCache: T,
        includeUnpublished: L
    } = (0, v.A)(), I = (0, i.bG)([c.default], () => c.default.getCurrentUser()), {
        skus: k,
        currentPage: N,
        totalCount: R,
        isFetchingResults: P
    } = (0, p.S)(), B = (0, i.yK)([g.A], () => g.A.getProductsBySkus(k)), w = l.useCallback(() => {
        var e;
        null == s || null == (e = s.current) || e.scrollToTop({
            animate: !0
        })
    }, [s]), D = null == k ? void 0 : k.join("");
    l.useEffect(() => {
        w()
    }, [D, w]);
    let M = (0, f.p)(),
        H = l.useMemo(() => M(B), [M, B]);
    l.useEffect(() => {
        n || (0, _.z)({
            sessionId: j,
            checkpoint: _.t.SHOP_RENDERED,
            tab: O,
            unpublishedCategoriesShown: L,
            cacheDisabled: T
        })
    }, [j, L, T, n, O]);
    let G = l.useRef(null),
        {
            setQueryPageSize: U,
            setQueryPageOffset: F,
            queryPageSize: z
        } = (0, m.v)(),
        [V, K] = l.useState(!1),
        W = n || P || null == I;
    l.useEffect(() => {
        W ? K(!1) : H.length > 0 && K(!0)
    }, [W, H.length]);
    let Y = z > 0 && !W && 0 === H.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == G.current || U(Math.floor(5 * getComputedStyle(G.current).gridTemplateColumns.split(/\s+/).length))
        });
        if (null != G.current) return e.observe(G.current), () => e.disconnect()
    }, [U]);
    let q = l.useCallback(e => {
        u.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
            page_section: null == y ? void 0 : y.pageSection,
            page_category: null == y ? void 0 : y.pageCategory,
            page_index: e,
            page_size: z,
            cta_name: "filter results page ".concat(e),
            page_type: "catalog"
        }), F((e - 1) * z)
    }, [y, z, F]);
    return (0, r.jsxs)(h.v3.Provider, {
        value: x,
        children: [(0, r.jsxs)("div", {
            className: a()({
                [S.oE]: Y
            }),
            children: [Y && (0, r.jsx)(C.A, {}), (0, r.jsxs)("div", {
                className: a()(S.ZE, {
                    [S.Kp]: V
                }),
                ref: G,
                children: [W && [...Array(z)].map((e, t) => (0, r.jsx)(E.A, {}, t)), !W && H.map((e, t) => null == g.A.getCategory(e.categorySkuId) ? null : (0, r.jsx)(d.R9, {
                    newValue: {
                        tilePosition: t
                    },
                    children: (0, r.jsx)(b.A, {
                        skuId: e.skuId,
                        onClickAnalytics: (0, h.UU)(e, O, y)
                    }, e.skuId)
                }, e.skuId))]
            })]
        }), R > z && (0, r.jsx)("div", {
            className: S.Ej,
            children: (0, r.jsx)("div", {
                children: (0, r.jsx)(o.mgR, {
                    currentPage: N,
                    totalCount: R,
                    pageSize: z,
                    onPageChange: q,
                    disablePaginationGap: !0
                })
            })
        })]
    })
}