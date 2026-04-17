/** chunk id: 86638 params = (module,exports,require) **/
n.d(t, {
    A: () => W
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(575593),
    o = n(158954),
    c = n(311907),
    d = n(793574),
    u = n(688810),
    g = n(44120),
    _ = n(532794),
    m = n(87719),
    f = n(317560),
    x = n(533406),
    p = n(183555),
    I = n(657331),
    A = n(606758),
    h = n(287809),
    E = n(474090),
    v = n(661492),
    j = n(111085),
    T = n(146423),
    N = n(121700),
    b = n(460442),
    C = n(662349),
    S = n(479026),
    k = n(699976),
    O = n(652215),
    L = n(788868),
    P = n(518477),
    R = n(985018),
    D = n(575581),
    G = n(997990);
let w = k.Z.SIZE_133;

function y(e) {
    let {
        item: t,
        wishlistOwner: n,
        currentUser: l,
        style: r,
        isDragging: c,
        dragHandle: d,
        skuPreviewStyle: u,
        skuAssetClassName: g,
        isHoveringOrFocusing: _,
        setIsHoveringOrFocusing: m,
        onDetailsClick: f,
        onPurchaseClick: x,
        wishlistId: I,
        isItemOwned: h,
        cardBackdrop: E
    } = e, j = a.useRef(null), S = a.useRef(m);
    a.useEffect(() => {
        S.current = m
    }, [m]), a.useEffect(() => {
        let e = j.current;
        if (null == e) return;
        let t = () => {
            S.current(!1)
        };
        return e.addEventListener("focusin", t), () => {
            e.removeEventListener("focusin", t)
        }
    }, []);
    let {
        trackUserProfileWishlistAction: k
    } = (0, p.NJ)(), O = a.useCallback(() => {
        null != I && (k({
            wishlistId: I,
            action: P.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), f())
    }, [f, t.sku, I, k]), L = a.useCallback(() => {
        null != I && (k({
            wishlistId: I,
            action: P.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), x())
    }, [x, t.sku, I, k]), G = a.useCallback(() => {
        (0, A.XA)(P.jM.SOMETHING_WENT_WRONG), o.ORC.announce(R.intl.string(R.t.F8FvUy))
    }, []), y = null != d ? (0, i.jsx)("div", {
        ref: j,
        className: D.BU,
        children: d
    }) : null, {
        label: U,
        icon: M,
        isPromptingPurchase: F
    } = (0, C.h)({
        wishlistOwner: n,
        isOwned: h
    });
    return (0, i.jsxs)("div", {
        className: D.kL,
        children: [(0, i.jsxs)(T.A, {
            sku: t.sku,
            user: n,
            spec: w,
            cardStyle: s()(D.Nr, r),
            skuPreviewStyle: s()(D.ev, {
                [D.go]: h && !_
            }, u),
            skuAssetClassName: g,
            disableHoverOrFocus: c,
            onHoverOrFocusChange: m,
            onClick: O,
            "aria-label": R.intl.formatToPlainString(R.t.ZBB4Ty, {
                productName: (0, v.TC)(t.sku)
            }),
            children: [E, (0, i.jsx)(C.A, {
                spec: w,
                onClick: F ? L : O,
                isHoveringOrFocusing: _,
                label: U,
                icon: M
            }), h && (0, i.jsx)(b.gS, {
                isHoveringOrFocusing: _
            }), n.id === l.id && null != I && (0, i.jsx)(N.A, {
                sku: t.sku,
                isCardHovered: _,
                spec: w,
                onError: G,
                location: "UserProfileWishlistItemCardBase",
                skipExperiment: !0
            })]
        }), y]
    })
}

function U(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: l,
        currentUser: s,
        analyticsLocations: r,
        ...o
    } = e, c = a.useCallback(() => {
        (0, f.R)({
            skuId: t.sku.id,
            applicationId: t.sku.applicationId,
            isStorefront: !1,
            giftRecipient: l,
            giftingOrigin: L.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: r
        })
    }, [t.sku.id, t.sku.applicationId, l, r]), u = a.useCallback(() => {
        let e = l.id === s.id;
        (0, x.a)(t.sku, {
            isGift: !e,
            giftRecipient: l,
            giftingOrigin: L.vQ.USER_PROFILE_WISHLIST
        }, {
            analyticsLocations: [...r, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [t.sku, l, s.id, r]);
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        onDetailsClick: c,
        onPurchaseClick: u,
        analyticsLocations: r,
        currentUser: s,
        ...o
    })
}

function M(e) {
    let {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        analyticsLocations: o,
        currentUser: c,
        isHoveringOrFocusing: d,
        ...u
    } = e, _ = (0, S.e)({
        sku: t.sku,
        giftRecipient: n,
        giftingOrigin: L.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: o
    }), m = a.useMemo(() => () => {
        let e = n.id === c.id;
        (0, g.A)({
            skuId: t.sku.id,
            isGift: !e,
            giftingOrigin: L.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o ?? [],
            giftRecipient: n
        })
    }, [t.sku, n, c.id, o]), f = d && t.sku.productLine === O.EZt.COLLECTIBLES && t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT && t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        currentUser: c,
        onDetailsClick: _,
        onPurchaseClick: m,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({
            [D.mn]: f
        }),
        analyticsLocations: o,
        ...u
    })
}

function F(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: l,
        currentUser: s,
        analyticsLocations: r,
        isHoveringOrFocusing: o,
        ...c
    } = e, d = a.useCallback(() => {
        n ? (0, m.x)(I.closeUserProfileModal) : (0, _.A)({
            isGift: !0,
            giftRecipient: l,
            giftingOrigin: L.vQ.USER_PROFILE_WISHLIST,
            subscriptionTier: t.skuId,
            analyticsLocations: r
        })
    }, [n, t.skuId, l, r]);
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: G.MO,
        skuAssetClassName: o ? G.iR : void 0,
        analyticsLocations: r,
        ...c
    })
}

function W(e) {
    let {
        item: t,
        wishlistOwner: n,
        wishlistId: l,
        analyticsLocations: s,
        ...r
    } = e, {
        analyticsLocations: o
    } = (0, u.Ay)(...s ?? [], t.sku?.productLine === O.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : []), g = (0, c.bG)([h.default], () => h.default.getCurrentUser()), [_, m] = a.useState(!1), f = (0, c.bG)([j.A], () => j.A.hasSentGift(t.skuId, n.id), [n, t.skuId]), x = a.useMemo(() => t.skuProductLine === O.EZt.PREMIUM ? null != g && n.id === g.id && (0, E.ki)(g, L.WN[t.skuId]) : !0 === t.isOwned || f, [t.isOwned, t.skuId, t.skuProductLine, f, g, n.id]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(U, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: _,
                setIsHoveringOrFocusing: m,
                currentUser: g,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case O.EZt.COLLECTIBLES:
            return (0, i.jsx)(M, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: _,
                setIsHoveringOrFocusing: m,
                currentUser: g,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case O.EZt.PREMIUM:
            return (0, i.jsx)(F, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: _,
                setIsHoveringOrFocusing: m,
                currentUser: g,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        default:
            return null
    }
}