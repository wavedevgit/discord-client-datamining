/** chunk id: 773591, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(575593),
    a = n(417597),
    i = n(582754),
    o = n(397927),
    c = n(736653),
    u = n(287809),
    d = n(954571),
    g = n(440938),
    f = n(590180),
    m = n(511265),
    p = n(206077),
    _ = n(100057),
    b = n(392183),
    h = n(751304),
    E = n(561769),
    v = n(998694),
    C = n(758836),
    A = n(652215),
    x = n(985018),
    S = n(157884),
    O = n(517700),
    y = n(304009),
    j = n(495482),
    T = n(479512),
    L = n(867341),
    I = n(632728),
    k = n(368146),
    N = n(536003);

function R(e) {
    var t;
    let {
        isFetchingCategories: n,
        scrollerRef: R,
        tab: P
    } = e, B = (0, g.uM)(), w = null != (t = null == B ? void 0 : B.sessionId) ? t : "", {
        noCache: D,
        includeUnpublished: M
    } = (0, v.A)(), H = (0, a.bG)([u.default], () => u.default.getCurrentUser()), G = (0, a.bG)([f.A], () => f.A.productsWithVariantsAsGroup), [U, F] = l.useState(1), z = (0, c.DP)(), V = (0, i.qB)(z), [K, W, Y] = l.useMemo(() => {
        switch (P) {
            case C.G2.AVATAR_DECORATIONS:
                return [x.intl.string(x.t.dRZYNE), V ? T.A : j.A, s.R.AVATAR_DECORATION];
            case C.G2.PROFILE_EFFECTS:
                return [x.intl.string(x.t["1cNjtx"]), V ? N.A : k.A, s.R.PROFILE_EFFECT];
            case C.G2.NAMEPLATES:
                return [x.intl.string(x.t.V68Fqz), V ? I.A : L.A, s.R.NAMEPLATE];
            case C.G2.BUNDLES:
                return [x.intl.string(x.t.FYFpps), V ? y.A : O.A, s.R.BUNDLE]
        }
    }, [P, V]), q = (0, m.p)(), Z = l.useMemo(() => q(G.filter(e => {
        var t;
        return (e.type === Y || e.type === s.R.VARIANTS_GROUP && (null == (t = e.variants) ? void 0 : t.some(e => e.type === Y)) === !0) && !C.MS.some(t => {
            let {
                categorySkuId: n
            } = t;
            return n === e.categorySkuId
        })
    })), [G, Y, q]), X = (0, p.X)(Z);
    return (l.useEffect(() => {
        (0, _.z)({
            sessionId: w,
            checkpoint: _.t.SHOP_MOUNTED,
            tab: P,
            unpublishedCategoriesShown: M,
            cacheDisabled: D
        })
    }, []), l.useEffect(() => {
        n || (0, _.z)({
            sessionId: w,
            checkpoint: _.t.SHOP_RENDERED,
            tab: P,
            unpublishedCategoriesShown: M,
            cacheDisabled: D
        })
    }, [w, M, D, n, P]), n || null == H) ? (0, r.jsx)(b.A, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            style: {
                backgroundImage: "url(".concat(W, ")")
            },
            className: S.cI,
            children: (0, r.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                children: K
            })
        }), (0, r.jsx)("div", {
            className: S.ZE,
            children: X.slice(40 * (U - 1), 40 * U).map((e, t) => null == f.A.getCategory(e.categorySkuId) ? null : (0, r.jsx)(g.R9, {
                newValue: {
                    tilePosition: t
                },
                children: (0, r.jsx)(h.A, {
                    skuId: e.skuId,
                    onClickAnalytics: (0, E.UU)(e, P, B)
                }, e.skuId)
            }, e.skuId))
        }), X.length > 40 && (0, r.jsx)("div", {
            className: S.Ej,
            children: (0, r.jsx)("div", {
                children: (0, r.jsx)(o.mgR, {
                    currentPage: U,
                    totalCount: X.length,
                    pageSize: 40,
                    onPageChange: e => {
                        var t;
                        d.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                            page_section: null == B ? void 0 : B.pageSection,
                            page_category: null == B ? void 0 : B.pageCategory,
                            page_index: e,
                            page_size: 40,
                            cta_name: "".concat(P, " page ").concat(e),
                            page_type: P
                        }), F(e), null == R || null == (t = R.current) || t.scrollToTop({
                            animate: !0
                        })
                    },
                    disablePaginationGap: !0
                })
            })
        })]
    })
}