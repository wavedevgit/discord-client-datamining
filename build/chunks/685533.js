/** chunk id: 685533 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => L
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(417597),
    o = s(397927),
    c = s(287809),
    d = s(954571),
    u = s(440938),
    _ = s(590180),
    g = s(940980),
    m = s(511265),
    h = s(365491),
    p = s(856686),
    f = s(100057),
    x = s(751304),
    E = s(561769),
    C = s(484469),
    b = s(998694),
    A = s(438166),
    S = s(652215),
    v = s(695865);
let I = {
    flattenProductVariants: !0
};

function L(e) {
    let {
        isFetchingCategories: t,
        scrollerRef: s,
        tab: l
    } = e, L = (0, u.uM)(), j = L?.sessionId ?? "", {
        noCache: k,
        includeUnpublished: T
    } = (0, b.A)(), O = (0, g.W)("CollectiblesFilterResults"), y = (0, i.bG)([c.default], () => c.default.getCurrentUser()), {
        skus: N,
        currentPage: R,
        totalCount: B,
        isFetchingResults: M
    } = (0, p.S)(), P = (0, i.yK)([_.A], () => _.A.getProductsBySkus(N)), D = r.useCallback(() => {
        s?.current?.scrollToTop({
            animate: !0
        })
    }, [s]), H = N?.join("");
    r.useEffect(() => {
        D()
    }, [H, D]);
    let w = (0, m.p)(),
        U = r.useMemo(() => w(P), [w, P]);
    r.useEffect(() => {
        t || (0, f.z)({
            sessionId: j,
            checkpoint: f.t.SHOP_RENDERED,
            tab: l,
            unpublishedCategoriesShown: T,
            cacheDisabled: k
        })
    }, [j, T, k, t, l]);
    let F = r.useRef(null),
        {
            setQueryPageSize: G,
            setQueryPageOffset: V,
            queryPageSize: K
        } = (0, h.v)(),
        [W, z] = r.useState(!1),
        Y = t || M || null == y;
    r.useEffect(() => {
        Y ? z(!1) : U.length > 0 && z(!0)
    }, [Y, U.length]);
    let $ = K > 0 && !Y && 0 === U.length;
    r.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == F.current || G(Math.floor(5 * getComputedStyle(F.current).gridTemplateColumns.split(/\s+/).length))
        });
        if (null != F.current) return e.observe(F.current), () => e.disconnect()
    }, [G]);
    let Z = r.useCallback(e => {
        d.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: L?.sessionId,
            page_section: L?.pageSection,
            page_category: L?.pageCategory,
            page_index: e,
            page_size: K,
            cta_name: `filter results page ${e}`,
            page_type: "catalog"
        }), V((e - 1) * K)
    }, [L, K, V]);
    return (0, n.jsxs)(E.v3.Provider, {
        value: I,
        children: [(0, n.jsxs)("div", {
            className: a()({
                [v.oE]: $
            }),
            children: [$ && (0, n.jsx)(A.A, {}), (0, n.jsxs)("div", {
                className: a()(v.ZE, {
                    [v.Kp]: W
                }),
                ref: F,
                children: [Y && [...Array(K)].map((e, t) => (0, n.jsx)(C.A, {}, t)), !Y && U.map((e, t) => null == _.A.getCategory(e.categorySkuId) ? null : (0, n.jsx)(u.R9, {
                    newValue: {
                        tilePosition: t
                    },
                    children: (0, n.jsx)(x.A, {
                        skuId: e.skuId,
                        prioritizedCurrency: O ? E.Hi.FIAT : void 0,
                        onClickAnalytics: (0, E.UU)(e, l, L)
                    }, e.skuId)
                }, e.skuId))]
            })]
        }), B > K && (0, n.jsx)("div", {
            className: v.Ej,
            children: (0, n.jsx)("div", {
                children: (0, n.jsx)(o.mgR, {
                    currentPage: R,
                    totalCount: B,
                    pageSize: K,
                    onPageChange: Z,
                    disablePaginationGap: !0
                })
            })
        })]
    })
}