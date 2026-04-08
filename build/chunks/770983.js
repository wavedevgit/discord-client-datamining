/** chunk id: 770983 params = (module,exports,require) **/
n.d(t, {
    A: () => O
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
    x = n(713517),
    f = n(492518),
    p = n(260811),
    h = n(366523),
    _ = n(287809),
    A = n(808247),
    I = n(178213),
    j = n(909536),
    v = n(594832),
    E = n(631784),
    T = n(672564),
    b = n(652215),
    C = n(788868),
    S = n(518477),
    N = n(985018),
    y = n(978358);

function R(e) {
    let {
        application: t,
        sku: n,
        handleOpenUserProfileModal: l,
        analyticsLocations: s
    } = e, o = a.useRef(null), {
        analyticsLocations: g
    } = (0, u.Ay)(s ?? []), {
        isHoveringOrFocusing: p
    } = (0, x.A)(o), [_, I] = a.useState(!1), j = a.useCallback(async e => {
        if (e.stopPropagation(), !_) {
            I(!0);
            try {
                await A.A.addSkuToWishlist(n.id, g), l?.({
                    tabSection: S.RP.WISHLIST
                })
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(N.intl.string(N.t.F8FvUy), c.ToastType.FAILURE)), r.ORC.announce(N.intl.string(N.t.F8FvUy))
            } finally {
                I(!1)
            }
        }
    }, [n.id, g, l, _]);
    return (0, i.jsx)(d.un, {
        title: N.intl.string(N.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(m.mW, {
            application: t
        }),
        assetSize: v.Q8,
        children: (0, i.jsxs)(r.sqX, {
            className: y.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: j,
            children: [(0, i.jsx)(h.e, {
                shape: "custom",
                containerClassName: y.Nr,
                foregroundImageClassName: y.wP,
                backgroundImageClassName: y.GC,
                sku: n
            }, n.id), (p || _) && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: y.p0
                }), (0, i.jsx)("div", {
                    className: y.R$,
                    children: _ ? (0, i.jsx)(f.k, {}) : (0, i.jsx)(r.pa$, {
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
        applicationIds: x
    } = e, h = (0, g.A)(x), A = (0, o.bG)([_.default], () => _.default.getUser(t?.userId)), v = (0, I.GG)("add_to_wishlist_grid"), E = (0, j.Gh)("add_to_wishlist_grid_suggested_nitro"), S = a.useMemo(() => h.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [h]), k = a.useMemo(() => new Set(t?.items.map(e => e.skuId) ?? []), [t]), O = E && v && !k.has(C.pe.TIER_2), w = a.useMemo(() => O ? new p.A({
        id: C.pe.TIER_2,
        productLine: b.EZt.PREMIUM,
        name: N.intl.string(N.t.lG6a5x),
        features: new Set,
        genres: new Set,
        manifests: [],
        availableRegions: [],
        locales: [],
        bundledSkuIds: [],
        selectedOptions: [],
        eligibleOffers: [],
        prices: {}
    }) : null, [O]), L = m.filter(e => !k.has(e.id)).slice(0, null != w ? Math.max(0, d - 1) : d), P = null != w ? [w, ...L] : L;
    return u ? (0, i.jsx)("div", {
        className: y.g4,
        children: (0, i.jsx)(f.k, {})
    }) : 0 === P.length ? null : (0, i.jsx)("ul", {
        className: s()(y.Vg, c),
        children: P.map(e => v ? (0, i.jsx)(T.J, {
            sku: e,
            wishlistId: t?.id,
            wishlistOwner: A,
            handleOpenUserProfileModal: n,
            analyticsLocations: l
        }, e.id) : null == e.applicationId || null == S[e.applicationId] ? null : (0, i.jsx)(R, {
            application: S[e.applicationId],
            sku: e,
            handleOpenUserProfileModal: n,
            analyticsLocations: l
        }, e.id))
    })
}

function O(e) {
    let {
        userId: t,
        numWishlistItemsToRecommend: n,
        ...a
    } = e, {
        recommendations: l,
        status: s
    } = (0, E.Ul)({
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