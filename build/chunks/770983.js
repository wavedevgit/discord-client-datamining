/** chunk id: 770983 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(158954),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(688810),
    g = n(429913),
    m = n(576030),
    x = n(713517),
    p = n(492518),
    f = n(366523),
    h = n(287809),
    _ = n(808247),
    A = n(178213),
    I = n(594832),
    j = n(631784),
    v = n(672564),
    T = n(518477),
    E = n(985018),
    b = n(100681);

function C(e) {
    let {
        application: t,
        sku: n,
        handleOpenUserProfileModal: l,
        analyticsLocations: s
    } = e, o = a.useRef(null), {
        analyticsLocations: g
    } = (0, u.Ay)(s ?? []), {
        isHoveringOrFocusing: h
    } = (0, x.A)(o), [A, j] = a.useState(!1), v = a.useCallback(async e => {
        if (e.stopPropagation(), !A) {
            j(!0);
            try {
                await _.A.addSkuToWishlist(n.id, g), l?.({
                    tabSection: T.RP.WISHLIST
                })
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(E.intl.string(E.t.F8FvUy), d.ToastType.FAILURE)), r.ORC.announce(E.intl.string(E.t.F8FvUy))
            } finally {
                j(!1)
            }
        }
    }, [n.id, g, l, A]);
    return (0, i.jsx)(c.un, {
        title: E.intl.string(E.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(m.mW, {
            application: t
        }),
        assetSize: I.Q8,
        children: (0, i.jsxs)(r.sqX, {
            className: b.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: v,
            children: [(0, i.jsx)(f.e, {
                shape: "custom",
                containerClassName: b.Nr,
                foregroundImageClassName: b.wP,
                backgroundImageClassName: b.GC,
                sku: n
            }, n.id), (h || A) && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: b.p0
                }), (0, i.jsx)("div", {
                    className: b.R$,
                    children: A ? (0, i.jsx)(p.k, {}) : (0, i.jsx)(r.pa$, {
                        size: "lg",
                        color: d.LU0.unsafe_rawColors.WHITE_500
                    })
                })]
            })]
        })
    })
}

function N(e) {
    let {
        wishlist: t,
        handleOpenUserProfileModal: n,
        analyticsLocations: l,
        numWishlistItemsToRecommend: r,
        maxWishlistItemsToShow: c = r,
        className: d,
        isLoading: u,
        recommendations: m,
        applicationIds: x
    } = e, f = (0, g.A)(x), _ = (0, o.bG)([h.default], () => h.default.getUser(t?.userId)), I = (0, A.GG)("add_to_wishlist_grid"), j = a.useMemo(() => f.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [f]), T = a.useMemo(() => new Set(t?.items.map(e => e.skuId) ?? []), [t]), E = m.filter(e => !T.has(e.id)).slice(0, c);
    return u ? (0, i.jsx)("div", {
        className: b.g4,
        children: (0, i.jsx)(p.k, {})
    }) : 0 === E.length ? null : (0, i.jsx)("ul", {
        className: s()(b.Vg, d),
        children: E.map(e => I ? (0, i.jsx)(v.J, {
            sku: e,
            wishlistId: t?.id,
            wishlistOwner: _,
            handleOpenUserProfileModal: n,
            analyticsLocations: l
        }, e.id) : null == e.applicationId || null == j[e.applicationId] ? null : (0, i.jsx)(C, {
            application: j[e.applicationId],
            sku: e,
            handleOpenUserProfileModal: n,
            analyticsLocations: l
        }, e.id))
    })
}

function S(e) {
    let {
        userId: t,
        numWishlistItemsToRecommend: n,
        ...a
    } = e, {
        recommendations: l,
        status: s
    } = (0, j.Ul)({
        userId: t,
        numItems: n,
        source: I.B5.USER_PROFILE
    });
    return (0, i.jsx)(N, {
        isLoading: "loading" === s,
        recommendations: l,
        numWishlistItemsToRecommend: n,
        ...a
    })
}