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
    m = n(429913),
    g = n(576030),
    p = n(713517),
    x = n(492518),
    f = n(366523),
    _ = n(287809),
    h = n(808247),
    A = n(178213),
    I = n(594832),
    v = n(631784),
    j = n(672564),
    E = n(518477),
    T = n(985018),
    N = n(100681);

function C(e) {
    let {
        application: t,
        sku: n,
        handleOpenUserProfileModal: l,
        analyticsLocations: s
    } = e, o = a.useRef(null), {
        analyticsLocations: m
    } = (0, u.Ay)(s ?? []), {
        isHoveringOrFocusing: _
    } = (0, p.A)(o), [A, v] = a.useState(!1), j = a.useCallback(async e => {
        if (e.stopPropagation(), !A) {
            v(!0);
            try {
                await h.A.addSkuToWishlist(n.id, m), l?.({
                    tabSection: E.RP.WISHLIST
                })
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(T.intl.string(T.t.F8FvUy), d.ToastType.FAILURE)), r.ORC.announce(T.intl.string(T.t.F8FvUy))
            } finally {
                v(!1)
            }
        }
    }, [n.id, m, l, A]);
    return (0, i.jsx)(c.un, {
        title: T.intl.string(T.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(g.mW, {
            application: t
        }),
        assetSize: I.Q8,
        children: (0, i.jsxs)(r.sqX, {
            className: N.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: j,
            children: [(0, i.jsx)(f.e, {
                shape: "custom",
                containerClassName: N.Nr,
                foregroundImageClassName: N.wP,
                backgroundImageClassName: N.GC,
                sku: n
            }, n.id), (_ || A) && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: N.p0
                }), (0, i.jsx)("div", {
                    className: N.R$,
                    children: A ? (0, i.jsx)(x.k, {}) : (0, i.jsx)(r.pa$, {
                        size: "lg",
                        color: d.LU0.unsafe_rawColors.WHITE_500
                    })
                })]
            })]
        })
    })
}

function b(e) {
    let {
        wishlist: t,
        handleOpenUserProfileModal: n,
        analyticsLocations: l,
        numWishlistItemsToRecommend: r,
        maxWishlistItemsToShow: c = r,
        className: d,
        isLoading: u,
        recommendations: g,
        applicationIds: p
    } = e, f = (0, m.A)(p), h = (0, o.bG)([_.default], () => _.default.getUser(t?.userId)), I = (0, A.GG)("add_to_wishlist_grid"), v = a.useMemo(() => f.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [f]), E = a.useMemo(() => new Set(t?.items.map(e => e.skuId) ?? []), [t]), T = g.filter(e => !E.has(e.id)).slice(0, c);
    return u ? (0, i.jsx)("div", {
        className: N.g4,
        children: (0, i.jsx)(x.k, {})
    }) : 0 === T.length ? null : (0, i.jsx)("ul", {
        className: s()(N.Vg, d),
        children: T.map(e => I ? (0, i.jsx)(j.J, {
            sku: e,
            wishlistId: t?.id,
            wishlistOwner: h,
            handleOpenUserProfileModal: n,
            analyticsLocations: l
        }, e.id) : null == e.applicationId || null == v[e.applicationId] ? null : (0, i.jsx)(C, {
            application: v[e.applicationId],
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
    } = (0, v.Ul)({
        userId: t,
        numItems: n,
        source: I.B5.USER_PROFILE
    });
    return (0, i.jsx)(b, {
        isLoading: "loading" === s,
        recommendations: l,
        numWishlistItemsToRecommend: n,
        ...a
    })
}