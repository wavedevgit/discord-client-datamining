/** chunk id: 770983 params = (module,exports,require) **/
n.d(t, {
    A: () => R
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    u = n(688810),
    g = n(429913),
    m = n(576030),
    h = n(713517),
    x = n(492518),
    p = n(260811),
    f = n(366523),
    A = n(287809),
    _ = n(808247),
    I = n(178213),
    j = n(909536),
    v = n(594832),
    b = n(631784),
    S = n(672564),
    y = n(652215),
    E = n(788868),
    C = n(518477),
    T = n(985018),
    w = n(100681);

function N(e) {
    let {
        application: t,
        sku: n,
        handleOpenUserProfileModal: l,
        analyticsLocations: s
    } = e, o = a.useRef(null), {
        analyticsLocations: g
    } = (0, u.Ay)(s ?? []), {
        isHoveringOrFocusing: p
    } = (0, h.A)(o), [A, I] = a.useState(!1), j = a.useCallback(async e => {
        if (e.stopPropagation(), !A) {
            I(!0);
            try {
                await _.A.addSkuToWishlist(n.id, g), l?.({
                    tabSection: C.RP.WISHLIST
                })
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(T.intl.string(T.t.F8FvUy), c.ToastType.FAILURE)), r.ORC.announce(T.intl.string(T.t.F8FvUy))
            } finally {
                I(!1)
            }
        }
    }, [n.id, g, l, A]);
    return (0, i.jsx)(d.un, {
        title: T.intl.string(T.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(m.mW, {
            application: t
        }),
        assetSize: v.Q8,
        children: (0, i.jsxs)(r.sqX, {
            className: w.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: j,
            children: [(0, i.jsx)(f.e, {
                shape: "custom",
                containerClassName: w.Nr,
                foregroundImageClassName: w.wP,
                backgroundImageClassName: w.GC,
                sku: n
            }, n.id), (p || A) && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: w.p0
                }), (0, i.jsx)("div", {
                    className: w.R$,
                    children: A ? (0, i.jsx)(x.k, {}) : (0, i.jsx)(r.pa$, {
                        size: "lg",
                        color: c.LU0.unsafe_rawColors.WHITE_500
                    })
                })]
            })]
        })
    })
}

function k(e) {
    let {
        wishlist: t,
        handleOpenUserProfileModal: n,
        analyticsLocations: l,
        numWishlistItemsToRecommend: r,
        maxWishlistItemsToShow: d = r,
        className: c,
        isLoading: u,
        recommendations: m,
        applicationIds: h
    } = e, f = (0, g.A)(h), _ = (0, o.bG)([A.default], () => A.default.getUser(t?.userId)), v = (0, I.GG)("add_to_wishlist_grid"), b = (0, j.Gh)("add_to_wishlist_grid_suggested_nitro"), C = a.useMemo(() => f.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [f]), k = a.useMemo(() => new Set(t?.items.map(e => e.skuId) ?? []), [t]), R = b && v && !k.has(E.pe.TIER_2), L = a.useMemo(() => R ? new p.A({
        id: E.pe.TIER_2,
        productLine: y.EZt.PREMIUM,
        name: T.intl.string(T.t.lG6a5x),
        features: new Set,
        genres: new Set,
        manifests: [],
        availableRegions: [],
        locales: [],
        bundledSkuIds: [],
        selectedOptions: [],
        eligibleOffers: [],
        prices: {}
    }) : null, [R]), O = m.filter(e => !k.has(e.id)).slice(0, null != L ? Math.max(0, d - 1) : d), M = null != L ? [L, ...O] : O;
    return u ? (0, i.jsx)("div", {
        className: w.g4,
        children: (0, i.jsx)(x.k, {})
    }) : 0 === M.length ? null : (0, i.jsx)("ul", {
        className: s()(w.Vg, c),
        children: M.map(e => v ? (0, i.jsx)(S.J, {
            sku: e,
            wishlistId: t?.id,
            wishlistOwner: _,
            handleOpenUserProfileModal: n,
            analyticsLocations: l
        }, e.id) : null == e.applicationId || null == C[e.applicationId] ? null : (0, i.jsx)(N, {
            application: C[e.applicationId],
            sku: e,
            handleOpenUserProfileModal: n,
            analyticsLocations: l
        }, e.id))
    })
}

function R(e) {
    let {
        userId: t,
        numWishlistItemsToRecommend: n,
        ...a
    } = e, {
        recommendations: l,
        status: s
    } = (0, b.Ul)({
        userId: t,
        numItems: n,
        source: v.B5.USER_PROFILE
    });
    return (0, i.jsx)(k, {
        isLoading: "loading" === s,
        recommendations: l,
        numWishlistItemsToRecommend: n,
        ...a
    })
}