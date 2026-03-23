/** chunk id: 672564 params = (module,exports,require) **/
n.d(t, {
    J: () => b
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(183555),
    m = n(808247),
    g = n(146423),
    x = n(460442),
    p = n(699976),
    f = n(652215),
    h = n(518477),
    _ = n(985018),
    A = n(614094);
let I = p.Z.SIZE_90;

function j(e) {
    let {
        sku: t,
        wishlistOwner: n,
        style: a,
        skuPreviewStyle: r,
        setIsHoveringOrFocusing: o,
        onClick: d,
        wishlistId: c,
        children: m
    } = e, {
        trackUserProfileWishlistAction: x
    } = (0, u.NJ)(), p = l.useCallback(() => {
        x({
            wishlistId: c,
            action: h.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.id,
            productLines: new Set([t.productLine])
        }), d()
    }, [d, t.id, t.productLine, x, c]);
    return (0, i.jsx)(g.A, {
        sku: t,
        user: n,
        spec: I,
        cardStyle: s()(A.Nr, a),
        skuPreviewStyle: s()(A.ev, r),
        onHoverOrFocusChange: o,
        onClick: p,
        children: m
    })
}

function v(e) {
    let {
        sku: t,
        analyticsLocations: n,
        isHoveringOrFocusing: a,
        handleOpenUserProfileModal: r,
        skuPreviewStyle: d,
        wishlistOwner: c,
        ...u
    } = e, [g, p] = l.useState(!1), f = l.useCallback(async () => {
        if (!g) {
            p(!0);
            try {
                await m.A.addSkuToWishlist(t.id, n), r?.({
                    tabSection: h.RP.WISHLIST
                })
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.F8FvUy), o.ToastType.FAILURE)), o.ORC.announce(_.intl.string(_.t.F8FvUy))
            } finally {
                p(!1)
            }
        }
    }, [t, n, g, r]), I = l.useMemo(() => s()({
        [A.zW]: a || g
    }, d), [a, g, d]);
    return (0, i.jsx)(o.sqX, {
        "aria-label": t.name,
        onClick: f,
        children: (0, i.jsx)(j, {
            sku: t,
            wishlistOwner: c,
            skuPreviewStyle: I,
            onClick: f,
            isHoveringOrFocusing: a,
            ...u,
            children: (0, i.jsx)(x.oU, {
                isHoveringOrFocusing: a,
                loading: g
            })
        })
    })
}

function E(e) {
    let {
        sku: t,
        analyticsLocations: n,
        ...l
    } = e, {
        analyticsLocations: a
    } = (0, c.Ay)(...n ?? [], d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(v, {
        sku: t,
        analyticsLocations: a,
        ...l
    })
}

function T(e) {
    let {
        sku: t,
        ...n
    } = e, a = l.useMemo(() => {
        switch (t?.tenantMetadata?.collectibles?.type) {
            case r.R.PROFILE_EFFECT:
            case r.R.NAMEPLATE:
                return;
            case r.R.AVATAR_DECORATION:
                return A.ML;
            default:
                return s()(A.ML, A.ZY)
        }
    }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(v, {
        sku: t,
        skuPreviewStyle: a,
        ...n
    })
}

function b(e) {
    let {
        sku: t,
        ...n
    } = e, [a, s] = l.useState(!1);
    switch (t.productLine) {
        case f.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(E, {
                sku: t,
                isHoveringOrFocusing: a,
                setIsHoveringOrFocusing: s,
                ...n
            });
        case f.EZt.COLLECTIBLES:
            return (0, i.jsx)(T, {
                sku: t,
                isHoveringOrFocusing: a,
                setIsHoveringOrFocusing: s,
                ...n
            });
        default:
            return null
    }
}