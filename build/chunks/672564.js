/** chunk id: 672564 params = (module,exports,require) **/
n.d(t, {
    J: () => T
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(575593),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(183555),
    g = n(661492),
    m = n(808247),
    h = n(146423),
    x = n(460442),
    p = n(699976),
    f = n(652215),
    A = n(518477),
    _ = n(985018),
    I = n(227104),
    j = n(538189);
let v = p.Z.SIZE_90;

function b(e) {
    let {
        sku: t,
        wishlistOwner: n,
        style: l,
        skuPreviewStyle: r,
        setIsHoveringOrFocusing: o,
        onClick: d,
        "aria-label": c,
        wishlistId: g,
        children: m
    } = e, {
        trackUserProfileWishlistAction: x
    } = (0, u.NJ)(), p = a.useCallback(() => {
        x({
            wishlistId: g,
            action: A.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.id,
            productLines: new Set([t.productLine])
        }), d()
    }, [d, t.id, t.productLine, x, g]);
    return (0, i.jsx)(h.A, {
        sku: t,
        user: n,
        spec: v,
        cardStyle: s()(I.Nr, l),
        skuPreviewStyle: s()(I.ev, r),
        onHoverOrFocusChange: o,
        onClick: p,
        "aria-label": c,
        children: m
    })
}

function S(e) {
    let {
        sku: t,
        analyticsLocations: n,
        isHoveringOrFocusing: l,
        handleOpenUserProfileModal: r,
        skuPreviewStyle: d,
        wishlistOwner: c,
        ...u
    } = e, [h, p] = a.useState(!1), f = a.useCallback(async () => {
        if (!h) {
            p(!0);
            try {
                await m.A.addSkuToWishlist(t.id, n), r?.({
                    tabSection: A.RP.WISHLIST
                })
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.F8FvUy), o.ToastType.FAILURE)), o.ORC.announce(_.intl.string(_.t.F8FvUy))
            } finally {
                p(!1)
            }
        }
    }, [t, n, h, r]), j = a.useMemo(() => s()({
        [I.zW]: l || h
    }, d), [l, h, d]);
    return (0, i.jsx)(b, {
        "aria-label": _.intl.formatToPlainString(_.t.xRjJBe, {
            productName: (0, g.TC)(t)
        }),
        sku: t,
        wishlistOwner: c,
        skuPreviewStyle: j,
        onClick: f,
        isHoveringOrFocusing: l,
        ...u,
        children: (0, i.jsx)(x.oU, {
            isHoveringOrFocusing: l,
            loading: h
        })
    })
}

function y(e) {
    let {
        sku: t,
        analyticsLocations: n,
        ...a
    } = e, {
        analyticsLocations: l
    } = (0, c.Ay)(...n ?? [], d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(S, {
        sku: t,
        analyticsLocations: l,
        ...a
    })
}

function E(e) {
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
    return (0, i.jsx)(S, {
        sku: t,
        skuPreviewStyle: l,
        ...n
    })
}

function C(e) {
    let {
        sku: t,
        ...n
    } = e;
    return (0, i.jsx)(S, {
        sku: t,
        skuPreviewStyle: j.MO,
        ...n
    })
}

function T(e) {
    let {
        sku: t,
        ...n
    } = e, [l, s] = a.useState(!1);
    switch (t.productLine) {
        case f.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(y, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: s,
                ...n
            });
        case f.EZt.COLLECTIBLES:
            return (0, i.jsx)(E, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: s,
                ...n
            });
        case f.EZt.PREMIUM:
            return (0, i.jsx)(C, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: s,
                ...n
            });
        default:
            return null
    }
}