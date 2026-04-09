/** chunk id: 770983 params = (module,exports,require) **/
i.d(t, {
    A: () => L
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(158954),
    o = i(311907),
    d = i(435371),
    c = i(397927),
    u = i(688810),
    g = i(429913),
    m = i(576030),
    h = i(713517),
    x = i(492518),
    p = i(260811),
    A = i(366523),
    f = i(287809),
    I = i(808247),
    j = i(178213),
    v = i(909536),
    S = i(594832),
    b = i(631784),
    y = i(672564),
    E = i(652215),
    T = i(788868),
    C = i(518477),
    w = i(985018),
    N = i(978358);

function R(e) {
    let {
        application: t,
        sku: i,
        handleOpenUserProfileModal: l,
        analyticsLocations: a
    } = e, o = s.useRef(null), {
        analyticsLocations: g
    } = (0, u.Ay)(a ?? []), {
        isHoveringOrFocusing: p
    } = (0, h.A)(o), [f, j] = s.useState(!1), v = s.useCallback(async e => {
        if (e.stopPropagation(), !f) {
            j(!0);
            try {
                await I.A.addSkuToWishlist(i.id, g), l?.({
                    tabSection: C.RP.WISHLIST
                })
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(w.intl.string(w.t.F8FvUy), c.ToastType.FAILURE)), r.ORC.announce(w.intl.string(w.t.F8FvUy))
            } finally {
                j(!1)
            }
        }
    }, [i.id, g, l, f]);
    return (0, n.jsx)(d.un, {
        title: w.intl.string(w.t["8DkMEQ"]),
        body: i.name,
        asset: (0, n.jsx)(m.mW, {
            application: t
        }),
        assetSize: S.Q8,
        children: (0, n.jsxs)(r.sqX, {
            className: N.Nr,
            ref: o,
            "aria-label": i.name,
            onClick: v,
            children: [(0, n.jsx)(A.e, {
                shape: "custom",
                containerClassName: N.Nr,
                foregroundImageClassName: N.wP,
                backgroundImageClassName: N.GC,
                sku: i
            }, i.id), (p || f) && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("div", {
                    className: N.p0
                }), (0, n.jsx)("div", {
                    className: N.R$,
                    children: f ? (0, n.jsx)(x.k, {}) : (0, n.jsx)(r.pa$, {
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
        handleOpenUserProfileModal: i,
        analyticsLocations: l,
        numWishlistItemsToRecommend: r,
        maxWishlistItemsToShow: d = r,
        className: c,
        isLoading: u,
        recommendations: m,
        applicationIds: h
    } = e, A = (0, g.A)(h), I = (0, o.bG)([f.default], () => f.default.getUser(t?.userId)), S = (0, j.GG)("add_to_wishlist_grid"), b = (0, v.Gh)("add_to_wishlist_grid_suggested_nitro"), C = s.useMemo(() => A.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [A]), k = s.useMemo(() => new Set(t?.items.map(e => e.skuId) ?? []), [t]), L = b && S && !k.has(T.pe.TIER_2), O = s.useMemo(() => L ? new p.A({
        id: T.pe.TIER_2,
        productLine: E.EZt.PREMIUM,
        name: w.intl.string(w.t.lG6a5x),
        features: new Set,
        genres: new Set,
        manifests: [],
        availableRegions: [],
        locales: [],
        bundledSkuIds: [],
        selectedOptions: [],
        eligibleOffers: [],
        prices: {}
    }) : null, [L]), _ = m.filter(e => !k.has(e.id)).slice(0, null != O ? Math.max(0, d - 1) : d), M = null != O ? [O, ..._] : _;
    return u ? (0, n.jsx)("div", {
        className: N.g4,
        children: (0, n.jsx)(x.k, {})
    }) : 0 === M.length ? null : (0, n.jsx)("ul", {
        className: a()(N.Vg, c),
        children: M.map(e => S ? (0, n.jsx)(y.J, {
            sku: e,
            wishlistId: t?.id,
            wishlistOwner: I,
            handleOpenUserProfileModal: i,
            analyticsLocations: l
        }, e.id) : null == e.applicationId || null == C[e.applicationId] ? null : (0, n.jsx)(R, {
            application: C[e.applicationId],
            sku: e,
            handleOpenUserProfileModal: i,
            analyticsLocations: l
        }, e.id))
    })
}

function L(e) {
    let {
        userId: t,
        numWishlistItemsToRecommend: i,
        ...s
    } = e, {
        recommendations: l,
        status: a
    } = (0, b.Ul)({
        userId: t,
        numItems: i,
        source: S.B5.USER_PROFILE
    });
    return (0, n.jsx)(k, {
        isLoading: "loading" === a,
        recommendations: l,
        numWishlistItemsToRecommend: i,
        ...s
    })
}