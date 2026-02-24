/** chunk id: 773591, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
});
var s = n(627968),
    l = n(64700),
    r = n(575593),
    a = n(417597),
    i = n(582754),
    o = n(397927),
    c = n(736653),
    d = n(287809),
    u = n(954571),
    g = n(440938),
    _ = n(590180),
    m = n(511265),
    h = n(206077),
    p = n(100057),
    f = n(392183),
    x = n(751304),
    E = n(561769),
    C = n(998694),
    A = n(758836),
    b = n(652215),
    S = n(985018),
    v = n(892766),
    L = n(517700),
    I = n(304009),
    j = n(495482),
    k = n(479512),
    T = n(867341),
    O = n(632728),
    N = n(368146),
    y = n(536003);

function R(e) {
    let {
        isFetchingCategories: t,
        scrollerRef: n,
        tab: R
    } = e, B = (0, g.uM)(), M = B?.sessionId ?? "", {
        noCache: P,
        includeUnpublished: D
    } = (0, C.A)(), H = (0, a.bG)([d.default], () => d.default.getCurrentUser()), w = (0, a.bG)([_.A], () => _.A.productsWithVariantsAsGroup), [U, G] = l.useState(1), F = (0, c.DP)(), V = (0, i.qB)(F), [K, W, z] = l.useMemo(() => {
        switch (R) {
            case A.G2.AVATAR_DECORATIONS:
                return [S.intl.string(S.t.dRZYNE), V ? k.A : j.A, r.R.AVATAR_DECORATION];
            case A.G2.PROFILE_EFFECTS:
                return [S.intl.string(S.t["1cNjtx"]), V ? y.A : N.A, r.R.PROFILE_EFFECT];
            case A.G2.NAMEPLATES:
                return [S.intl.string(S.t.V68Fqz), V ? O.A : T.A, r.R.NAMEPLATE];
            case A.G2.BUNDLES:
                return [S.intl.string(S.t.FYFpps), V ? I.A : L.A, r.R.BUNDLE]
        }
    }, [R, V]), Y = (0, m.p)(), $ = l.useMemo(() => Y(w.filter(e => (e.type === z || e.type === r.R.VARIANTS_GROUP && e.variants?.some(e => e.type === z) === !0) && !A.MS.some(t => {
        let {
            categorySkuId: n
        } = t;
        return n === e.categorySkuId
    }))), [w, z, Y]), Z = (0, h.X)($);
    return (l.useEffect(() => {
        (0, p.z)({
            sessionId: M,
            checkpoint: p.t.SHOP_MOUNTED,
            tab: R,
            unpublishedCategoriesShown: D,
            cacheDisabled: P
        })
    }, []), l.useEffect(() => {
        t || (0, p.z)({
            sessionId: M,
            checkpoint: p.t.SHOP_RENDERED,
            tab: R,
            unpublishedCategoriesShown: D,
            cacheDisabled: P
        })
    }, [M, D, P, t, R]), t || null == H) ? (0, s.jsx)(f.A, {}) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
            style: {
                backgroundImage: `url(${W})`
            },
            className: v.cI,
            children: (0, s.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                children: K
            })
        }), (0, s.jsx)("div", {
            className: v.ZE,
            children: Z.slice(40 * (U - 1), 40 * U).map((e, t) => null == _.A.getCategory(e.categorySkuId) ? null : (0, s.jsx)(g.R9, {
                newValue: {
                    tilePosition: t
                },
                children: (0, s.jsx)(x.A, {
                    skuId: e.skuId,
                    onClickAnalytics: (0, E.UU)(e, R, B)
                }, e.skuId)
            }, e.skuId))
        }), Z.length > 40 && (0, s.jsx)("div", {
            className: v.Ej,
            children: (0, s.jsx)("div", {
                children: (0, s.jsx)(o.mgR, {
                    currentPage: U,
                    totalCount: Z.length,
                    pageSize: 40,
                    onPageChange: e => {
                        u.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: B?.sessionId,
                            page_section: B?.pageSection,
                            page_category: B?.pageCategory,
                            page_index: e,
                            page_size: 40,
                            cta_name: `${R} page ${e}`,
                            page_type: R
                        }), G(e), n?.current?.scrollToTop({
                            animate: !0
                        })
                    },
                    disablePaginationGap: !0
                })
            })
        })]
    })
}