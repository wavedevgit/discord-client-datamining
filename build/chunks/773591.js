/** chunk id: 773591, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => R
});
var n = s(627968),
    l = s(64700),
    r = s(575593),
    a = s(417597),
    i = s(582754),
    o = s(397927),
    c = s(736653),
    d = s(287809),
    u = s(954571),
    _ = s(440938),
    g = s(590180),
    m = s(511265),
    h = s(206077),
    p = s(100057),
    f = s(392183),
    x = s(751304),
    E = s(561769),
    C = s(998694),
    b = s(758836),
    A = s(652215),
    S = s(985018),
    v = s(157884),
    I = s(517700),
    L = s(304009),
    j = s(495482),
    k = s(479512),
    T = s(867341),
    O = s(632728),
    N = s(368146),
    y = s(536003);

function R(e) {
    let {
        isFetchingCategories: t,
        scrollerRef: s,
        tab: R
    } = e, B = (0, _.uM)(), M = B?.sessionId ?? "", {
        noCache: P,
        includeUnpublished: D
    } = (0, C.A)(), w = (0, a.bG)([d.default], () => d.default.getCurrentUser()), H = (0, a.bG)([g.A], () => g.A.productsWithVariantsAsGroup), [U, G] = l.useState(1), F = (0, c.DP)(), V = (0, i.qB)(F), [K, W, z] = l.useMemo(() => {
        switch (R) {
            case b.G2.AVATAR_DECORATIONS:
                return [S.intl.string(S.t.dRZYNE), V ? k.A : j.A, r.R.AVATAR_DECORATION];
            case b.G2.PROFILE_EFFECTS:
                return [S.intl.string(S.t["1cNjtx"]), V ? y.A : N.A, r.R.PROFILE_EFFECT];
            case b.G2.NAMEPLATES:
                return [S.intl.string(S.t.V68Fqz), V ? O.A : T.A, r.R.NAMEPLATE];
            case b.G2.BUNDLES:
                return [S.intl.string(S.t.FYFpps), V ? L.A : I.A, r.R.BUNDLE]
        }
    }, [R, V]), Y = (0, m.p)(), $ = l.useMemo(() => Y(H.filter(e => (e.type === z || e.type === r.R.VARIANTS_GROUP && e.variants?.some(e => e.type === z) === !0) && !b.MS.some(t => {
        let {
            categorySkuId: s
        } = t;
        return s === e.categorySkuId
    }))), [H, z, Y]), Z = (0, h.X)($);
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
    }, [M, D, P, t, R]), t || null == w) ? (0, n.jsx)(f.A, {}) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
            style: {
                backgroundImage: `url(${W})`
            },
            className: v.cI,
            children: (0, n.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                children: K
            })
        }), (0, n.jsx)("div", {
            className: v.ZE,
            children: Z.slice(40 * (U - 1), 40 * U).map((e, t) => null == g.A.getCategory(e.categorySkuId) ? null : (0, n.jsx)(_.R9, {
                newValue: {
                    tilePosition: t
                },
                children: (0, n.jsx)(x.A, {
                    skuId: e.skuId,
                    onClickAnalytics: (0, E.UU)(e, R, B)
                }, e.skuId)
            }, e.skuId))
        }), Z.length > 40 && (0, n.jsx)("div", {
            className: v.Ej,
            children: (0, n.jsx)("div", {
                children: (0, n.jsx)(o.mgR, {
                    currentPage: U,
                    totalCount: Z.length,
                    pageSize: 40,
                    onPageChange: e => {
                        u.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: B?.sessionId,
                            page_section: B?.pageSection,
                            page_category: B?.pageCategory,
                            page_index: e,
                            page_size: 40,
                            cta_name: `${R} page ${e}`,
                            page_type: R
                        }), G(e), s?.current?.scrollToTop({
                            animate: !0
                        })
                    },
                    disablePaginationGap: !0
                })
            })
        })]
    })
}