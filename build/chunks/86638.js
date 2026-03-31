/** chunk id: 86638 params = (module,exports,require) **/
n.d(t, {
    A: () => U
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
    m = n(532794),
    p = n(87719),
    x = n(317560),
    f = n(533406),
    h = n(183555),
    _ = n(606758),
    A = n(287809),
    I = n(474090),
    j = n(661492),
    E = n(111085),
    v = n(146423),
    T = n(121700),
    b = n(460442),
    C = n(662349),
    S = n(479026),
    N = n(699976),
    y = n(652215),
    R = n(788868),
    O = n(518477),
    k = n(985018),
    L = n(480910);
let w = N.Z.SIZE_133;

function P(e) {
    let {
        item: t,
        wishlistOwner: n,
        currentUser: l,
        style: r,
        isDragging: c,
        dragHandle: d,
        skuPreviewStyle: u,
        skuAssetClassName: g,
        isHoveringOrFocusing: m,
        setIsHoveringOrFocusing: p,
        onDetailsClick: x,
        onPurchaseClick: f,
        wishlistId: A,
        isItemOwned: I,
        cardBackdrop: E
    } = e, S = a.useRef(null), N = a.useRef(p);
    a.useEffect(() => {
        N.current = p
    }, [p]), a.useEffect(() => {
        let e = S.current;
        if (null == e) return;
        let t = () => {
            N.current(!1)
        };
        return e.addEventListener("focusin", t), () => {
            e.removeEventListener("focusin", t)
        }
    }, []);
    let {
        trackUserProfileWishlistAction: y
    } = (0, h.NJ)(), R = a.useCallback(() => {
        null != A && (y({
            wishlistId: A,
            action: O.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), x())
    }, [x, t.sku, A, y]), P = a.useCallback(() => {
        null != A && (y({
            wishlistId: A,
            action: O.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), f())
    }, [f, t.sku, A, y]), D = a.useCallback(() => {
        (0, _.XA)(O.jM.SOMETHING_WENT_WRONG), o.ORC.announce(k.intl.string(k.t.F8FvUy))
    }, []), G = null != d ? (0, i.jsx)("div", {
        ref: S,
        className: L.BU,
        children: d
    }) : null, {
        label: F,
        icon: U,
        isPromptingPurchase: M
    } = (0, C.h)({
        sku: t.sku,
        wishlistOwner: n,
        isOwned: I,
        location: "User Profile Wishlist Item Card"
    });
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [(0, i.jsxs)(v.A, {
            sku: t.sku,
            user: n,
            spec: w,
            cardStyle: r,
            skuPreviewStyle: s()(L.ev, {
                [L.go]: I && !m
            }, u),
            skuAssetClassName: g,
            disableHoverOrFocus: c,
            onHoverOrFocusChange: p,
            onClick: R,
            "aria-label": k.intl.formatToPlainString(k.t.ZBB4Ty, {
                productName: (0, j.TC)(t.sku)
            }),
            children: [E, (0, i.jsx)(C.A, {
                spec: w,
                onClick: M ? P : R,
                isHoveringOrFocusing: m,
                label: F,
                icon: U
            }), I && (0, i.jsx)(b.gS, {
                isHoveringOrFocusing: m
            }), n.id === l.id && null != A && (0, i.jsx)(T.A, {
                sku: t.sku,
                isCardHovered: m,
                spec: w,
                onError: D,
                location: "UserProfileWishlistItemCardBase",
                skipExperiment: !0
            })]
        }), G]
    })
}

function D(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: l,
        currentUser: s,
        analyticsLocations: r,
        ...o
    } = e, c = a.useCallback(() => {
        (0, x.R)({
            skuId: t.sku.id,
            applicationId: t.sku.applicationId,
            isStorefront: !1,
            giftRecipient: l,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: r
        })
    }, [t.sku.id, t.sku.applicationId, l, r]), u = a.useCallback(() => {
        let e = l.id === s.id;
        (0, f.a)(t.sku, {
            isGift: !e,
            giftRecipient: l,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST
        }, {
            analyticsLocations: [...r, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [t.sku, l, s.id, r]);
    return (0, i.jsx)(P, {
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

function G(e) {
    let {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        analyticsLocations: o,
        currentUser: c,
        isHoveringOrFocusing: d,
        ...u
    } = e, m = (0, S.e)({
        sku: t.sku,
        giftRecipient: n,
        giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: o
    }), p = a.useMemo(() => () => {
        let e = n.id === c.id;
        (0, g.A)({
            skuId: t.sku.id,
            isGift: !e,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o ?? [],
            giftRecipient: n
        })
    }, [t.sku, n, c.id, o]), x = d && t.sku.productLine === y.EZt.COLLECTIBLES && t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT && t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(P, {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        currentUser: c,
        onDetailsClick: m,
        onPurchaseClick: p,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({
            [L.mn]: x
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
    } = e, d = l.id === s.id, u = a.useCallback(() => {
        (0, p.x)()
    }, []), g = a.useCallback(() => {
        (0, m.A)({
            isGift: !d,
            giftRecipient: d ? void 0 : l,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
            subscriptionTier: t.skuId,
            analyticsLocations: r
        })
    }, [d, t.skuId, l, r]);
    return (0, i.jsx)(P, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: u,
        onPurchaseClick: g,
        isHoveringOrFocusing: o,
        skuPreviewStyle: L.Fi,
        skuAssetClassName: o ? L.iR : void 0,
        analyticsLocations: r,
        ...c
    })
}

function U(e) {
    let {
        item: t,
        wishlistOwner: n,
        wishlistId: l,
        analyticsLocations: s,
        ...r
    } = e, {
        analyticsLocations: o
    } = (0, u.Ay)(...s ?? [], t.sku?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : []), g = (0, c.bG)([A.default], () => A.default.getCurrentUser()), [m, p] = a.useState(!1), x = (0, c.bG)([E.A], () => E.A.hasSentGift(t.skuId, n.id), [n, t.skuId]), f = a.useMemo(() => t.skuProductLine === y.EZt.PREMIUM ? null != g && n.id === g.id && (0, I.ki)(g, R.WN[t.skuId]) : !0 === t.isOwned || x, [t.isOwned, t.skuId, t.skuProductLine, x, g, n.id]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(D, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: p,
                currentUser: g,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case y.EZt.COLLECTIBLES:
            return (0, i.jsx)(G, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: p,
                currentUser: g,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case y.EZt.PREMIUM:
            return (0, i.jsx)(F, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: p,
                currentUser: g,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        default:
            return null
    }
}