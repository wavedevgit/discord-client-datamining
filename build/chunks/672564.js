/** chunk id: 672564 params = (module,exports,require) **/
i.d(t, {
    J: () => w
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(575593),
    o = i(397927),
    d = i(793574),
    c = i(688810),
    u = i(183555),
    g = i(661492),
    m = i(808247),
    h = i(146423),
    x = i(460442),
    p = i(699976),
    A = i(652215),
    f = i(518477),
    I = i(985018),
    j = i(227104),
    v = i(538189);
let S = p.Z.SIZE_90;

function b(e) {
    let {
        sku: t,
        wishlistOwner: i,
        style: l,
        skuPreviewStyle: r,
        setIsHoveringOrFocusing: o,
        onClick: d,
        "aria-label": c,
        wishlistId: g,
        children: m
    } = e, {
        trackUserProfileWishlistAction: x
    } = (0, u.NJ)(), p = s.useCallback(() => {
        x({
            wishlistId: g,
            action: f.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.id,
            productLines: new Set([t.productLine])
        }), d()
    }, [d, t.id, t.productLine, x, g]);
    return (0, n.jsx)(h.A, {
        sku: t,
        user: i,
        spec: S,
        cardStyle: a()(j.Nr, l),
        skuPreviewStyle: a()(j.ev, r),
        onHoverOrFocusChange: o,
        onClick: p,
        "aria-label": c,
        children: m
    })
}

function y(e) {
    let {
        sku: t,
        analyticsLocations: i,
        isHoveringOrFocusing: l,
        handleOpenUserProfileModal: r,
        skuPreviewStyle: d,
        wishlistOwner: c,
        ...u
    } = e, [h, p] = s.useState(!1), A = s.useCallback(async () => {
        if (!h) {
            p(!0);
            try {
                await m.A.addSkuToWishlist(t.id, i), r?.({
                    tabSection: f.RP.WISHLIST
                })
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.F8FvUy), o.ToastType.FAILURE)), o.ORC.announce(I.intl.string(I.t.F8FvUy))
            } finally {
                p(!1)
            }
        }
    }, [t, i, h, r]), v = s.useMemo(() => a()({
        [j.zW]: l || h
    }, d), [l, h, d]);
    return (0, n.jsx)(b, {
        "aria-label": I.intl.formatToPlainString(I.t.xRjJBe, {
            productName: (0, g.TC)(t)
        }),
        sku: t,
        wishlistOwner: c,
        skuPreviewStyle: v,
        onClick: A,
        isHoveringOrFocusing: l,
        ...u,
        children: (0, n.jsx)(x.oU, {
            isHoveringOrFocusing: l,
            loading: h
        })
    })
}

function E(e) {
    let {
        sku: t,
        analyticsLocations: i,
        ...s
    } = e, {
        analyticsLocations: l
    } = (0, c.Ay)(...i ?? [], d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, n.jsx)(y, {
        sku: t,
        analyticsLocations: l,
        ...s
    })
}

function T(e) {
    let {
        sku: t,
        ...i
    } = e, l = s.useMemo(() => {
        switch (t?.tenantMetadata?.collectibles?.type) {
            case r.R.PROFILE_EFFECT:
            case r.R.NAMEPLATE:
                return;
            case r.R.AVATAR_DECORATION:
                return j.ML;
            default:
                return a()(j.ML, j.ZY)
        }
    }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, n.jsx)(y, {
        sku: t,
        skuPreviewStyle: l,
        ...i
    })
}

function C(e) {
    let {
        sku: t,
        ...i
    } = e;
    return (0, n.jsx)(y, {
        sku: t,
        skuPreviewStyle: v.MO,
        ...i
    })
}

function w(e) {
    let {
        sku: t,
        ...i
    } = e, [l, a] = s.useState(!1);
    switch (t.productLine) {
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(E, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: a,
                ...i
            });
        case A.EZt.COLLECTIBLES:
            return (0, n.jsx)(T, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: a,
                ...i
            });
        case A.EZt.PREMIUM:
            return (0, n.jsx)(C, {
                sku: t,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: a,
                ...i
            });
        default:
            return null
    }
}