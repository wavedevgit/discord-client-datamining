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
    g = n(661492),
    m = n(808247),
    p = n(146423),
    x = n(460442),
    f = n(699976),
    h = n(652215),
    _ = n(518477),
    A = n(985018),
    I = n(227104);
let j = f.Z.SIZE_90;

function E(e) {
    let {
        sku: t,
        wishlistOwner: n,
        style: l,
        skuPreviewStyle: r,
        setIsHoveringOrFocusing: o,
        onClick: c,
        "aria-label": d,
        wishlistId: g,
        children: m
    } = e, {
        trackUserProfileWishlistAction: x
    } = (0, u.NJ)(), f = a.useCallback(() => {
        x({
            wishlistId: g,
            action: _.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.id,
            productLines: new Set([t.productLine])
        }), c()
    }, [c, t.id, t.productLine, x, g]);
    return (0, i.jsx)(p.A, {
        sku: t,
        user: n,
        spec: j,
        cardStyle: s()(I.Nr, l),
        skuPreviewStyle: s()(I.ev, r),
        onHoverOrFocusChange: o,
        onClick: f,
        "aria-label": d,
        children: m
    })
}

function v(e) {
    let {
        sku: t,
        analyticsLocations: n,
        isHoveringOrFocusing: l,
        handleOpenUserProfileModal: r,
        skuPreviewStyle: c,
        wishlistOwner: d,
        ...u
    } = e, [p, f] = a.useState(!1), h = a.useCallback(async () => {
        if (!p) {
            f(!0);
            try {
                await m.A.addSkuToWishlist(t.id, n), r?.({
                    tabSection: _.RP.WISHLIST
                })
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(A.intl.string(A.t.F8FvUy), o.ToastType.FAILURE)), o.ORC.announce(A.intl.string(A.t.F8FvUy))
            } finally {
                f(!1)
            }
        }
    }, [t, n, p, r]), j = a.useMemo(() => s()({
        [I.zW]: l || p
    }, c), [l, p, c]);
    return (0, i.jsx)(E, {
        "aria-label": A.intl.formatToPlainString(A.t.xRjJBe, {
            productName: (0, g.TC)(t)
        }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: j,
        onClick: h,
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
    return (0, i.jsx)(v, {
        sku: t,
        analyticsLocations: l,
        ...a
    })
}

function b(e) {
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
    return (0, i.jsx)(v, {
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
        case h.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(T, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: s,
                ...n
            });
        case h.EZt.COLLECTIBLES:
            return (0, i.jsx)(b, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: s,
                ...n
            });
        default:
            return null
    }
}