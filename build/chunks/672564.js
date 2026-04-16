/** chunk id: 672564 params = (module,exports,require) **/
i.d(t, {
    J: () => N
});
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(575593),
    d = i(397927),
    o = i(793574),
    c = i(688810),
    u = i(183555),
    g = i(661492),
    m = i(808247),
    h = i(146423),
    x = i(460442),
    A = i(699976),
    p = i(652215),
    f = i(518477),
    I = i(985018),
    j = i(316587),
    v = i(997990);
let S = A.Z.SIZE_90;

function E(e) {
    let {
        sku: t,
        wishlistOwner: i,
        style: s,
        skuPreviewStyle: r,
        setIsHoveringOrFocusing: d,
        onClick: o,
        "aria-label": c,
        wishlistId: g,
        children: m
    } = e, {
        trackUserProfileWishlistAction: x
    } = (0, u.NJ)(), A = l.useCallback(() => {
        x({
            wishlistId: g,
            action: f.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.id,
            productLines: new Set([t.productLine])
        }), o()
    }, [o, t.id, t.productLine, x, g]);
    return (0, n.jsx)(h.A, {
        sku: t,
        user: i,
        spec: S,
        cardStyle: a()(j.Nr, s),
        skuPreviewStyle: a()(j.ev, r),
        onHoverOrFocusChange: d,
        onClick: A,
        "aria-label": c,
        children: m
    })
}

function b(e) {
    let {
        sku: t,
        analyticsLocations: i,
        isHoveringOrFocusing: s,
        handleOpenUserProfileModal: r,
        skuPreviewStyle: o,
        wishlistOwner: c,
        ...u
    } = e, [h, A] = l.useState(!1), p = l.useCallback(async () => {
        if (!h) {
            A(!0);
            try {
                await m.A.addSkuToWishlist(t.id, i), r?.({
                    tabSection: f.RP.WISHLIST
                })
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(I.intl.string(I.t.F8FvUy), d.ToastType.FAILURE)), d.ORC.announce(I.intl.string(I.t.F8FvUy))
            } finally {
                A(!1)
            }
        }
    }, [t, i, h, r]), v = l.useMemo(() => a()({
        [j.zW]: s || h
    }, o), [s, h, o]);
    return (0, n.jsx)(E, {
        "aria-label": I.intl.formatToPlainString(I.t.xRjJBe, {
            productName: (0, g.TC)(t)
        }),
        sku: t,
        wishlistOwner: c,
        skuPreviewStyle: v,
        onClick: p,
        isHoveringOrFocusing: s,
        ...u,
        children: (0, n.jsx)(x.oU, {
            isHoveringOrFocusing: s,
            loading: h
        })
    })
}

function T(e) {
    let {
        sku: t,
        analyticsLocations: i,
        ...l
    } = e, {
        analyticsLocations: s
    } = (0, c.Ay)(...i ?? [], o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, n.jsx)(b, {
        sku: t,
        analyticsLocations: s,
        ...l
    })
}

function y(e) {
    let {
        sku: t,
        ...i
    } = e, s = l.useMemo(() => {
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
    return (0, n.jsx)(b, {
        sku: t,
        skuPreviewStyle: s,
        ...i
    })
}

function C(e) {
    let {
        sku: t,
        ...i
    } = e;
    return (0, n.jsx)(b, {
        sku: t,
        skuPreviewStyle: v.MO,
        ...i
    })
}

function N(e) {
    let {
        sku: t,
        ...i
    } = e, [s, a] = l.useState(!1);
    switch (t.productLine) {
        case p.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(T, {
                sku: t,
                isHoveringOrFocusing: s,
                setIsHoveringOrFocusing: a,
                ...i
            });
        case p.EZt.COLLECTIBLES:
            return (0, n.jsx)(y, {
                sku: t,
                isHoveringOrFocusing: s,
                setIsHoveringOrFocusing: a,
                ...i
            });
        case p.EZt.PREMIUM:
            return (0, n.jsx)(C, {
                sku: t,
                isHoveringOrFocusing: s,
                setIsHoveringOrFocusing: a,
                ...i
            });
        default:
            return null
    }
}