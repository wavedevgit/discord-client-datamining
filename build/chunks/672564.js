/** chunk id: 672564 params = (module,exports,require) **/
n.d(t, {
    J: () => C
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(575593),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(183555),
    m = n(661492),
    g = n(808247),
    p = n(146423),
    x = n(460442),
    f = n(699976),
    _ = n(652215),
    h = n(518477),
    A = n(985018),
    I = n(227104);
let v = f.Z.SIZE_90;

function j(e) {
    let {
        sku: t,
        wishlistOwner: n,
        style: l,
        skuPreviewStyle: r,
        setIsHoveringOrFocusing: o,
        onClick: c,
        "aria-label": d,
        wishlistId: m,
        children: g
    } = e, {
        trackUserProfileWishlistAction: x
    } = (0, u.NJ)(), f = a.useCallback(() => {
        x({
            wishlistId: m,
            action: h.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.id,
            productLines: new Set([t.productLine])
        }), c()
    }, [c, t.id, t.productLine, x, m]);
    return (0, i.jsx)(p.A, {
        sku: t,
        user: n,
        spec: v,
        cardStyle: s()(I.Nr, l),
        skuPreviewStyle: s()(I.ev, r),
        onHoverOrFocusChange: o,
        onClick: f,
        "aria-label": d,
        children: g
    })
}

function E(e) {
    let {
        sku: t,
        analyticsLocations: n,
        isHoveringOrFocusing: l,
        handleOpenUserProfileModal: r,
        skuPreviewStyle: c,
        wishlistOwner: d,
        ...u
    } = e, [p, f] = a.useState(!1), _ = a.useCallback(async () => {
        if (!p) {
            f(!0);
            try {
                await g.A.addSkuToWishlist(t.id, n), r?.({
                    tabSection: h.RP.WISHLIST
                })
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(A.intl.string(A.t.F8FvUy), o.ToastType.FAILURE)), o.ORC.announce(A.intl.string(A.t.F8FvUy))
            } finally {
                f(!1)
            }
        }
    }, [t, n, p, r]), v = a.useMemo(() => s()({
        [I.zW]: l || p
    }, c), [l, p, c]);
    return (0, i.jsx)(j, {
        "aria-label": A.intl.formatToPlainString(A.t.xRjJBe, {
            productName: (0, m.TC)(t)
        }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: v,
        onClick: _,
        isHoveringOrFocusing: l,
        ...u,
        children: (0, i.jsx)(x.oU, {
            isHoveringOrFocusing: l,
            loading: p
        })
    })
}

function T(e) {
    let {
        sku: t,
        analyticsLocations: n,
        ...a
    } = e, {
        analyticsLocations: l
    } = (0, d.Ay)(...n ?? [], c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(E, {
        sku: t,
        analyticsLocations: l,
        ...a
    })
}

function N(e) {
    let {
        sku: t,
        ...n
    } = e, l = a.useMemo(() => {
        switch (t?.tenantMetadata?.collectibles?.type) {
            case r.R.PROFILE_EFFECT:
            case r.R.NAMEPLATE:
                return;
            case r.R.AVATAR_DECORATION:
                return I.ML;
            default:
                return s()(I.ML, I.ZY)
        }
    }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(E, {
        sku: t,
        skuPreviewStyle: l,
        ...n
    })
}

function C(e) {
    let {
        sku: t,
        ...n
    } = e, [l, s] = a.useState(!1);
    switch (t.productLine) {
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(T, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: s,
                ...n
            });
        case _.EZt.COLLECTIBLES:
            return (0, i.jsx)(N, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: s,
                ...n
            });
        default:
            return null
    }
}