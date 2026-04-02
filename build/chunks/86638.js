/** chunk id: 86638 params = (module,exports,require) **/
n.d(t, {
    A: () => F
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
    x = n(87719),
    p = n(317560),
    f = n(533406),
    h = n(183555),
    _ = n(606758),
    A = n(287809),
    I = n(474090),
    j = n(661492),
    v = n(111085),
    T = n(146423),
    E = n(121700),
    b = n(460442),
    C = n(662349),
    N = n(479026),
    S = n(699976),
    y = n(652215),
    R = n(788868),
    k = n(518477),
    w = n(985018),
    O = n(480910),
    L = n(538189);
let P = S.Z.SIZE_133;

function D(e) {
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
        setIsHoveringOrFocusing: x,
        onDetailsClick: p,
        onPurchaseClick: f,
        wishlistId: A,
        isItemOwned: I,
        cardBackdrop: v
    } = e, N = a.useRef(null), S = a.useRef(x);
    a.useEffect(() => {
        S.current = x
    }, [x]), a.useEffect(() => {
        let e = N.current;
        if (null == e) return;
        let t = () => {
            S.current(!1)
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
            action: k.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), p())
    }, [p, t.sku, A, y]), L = a.useCallback(() => {
        null != A && (y({
            wishlistId: A,
            action: k.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), f())
    }, [f, t.sku, A, y]), D = a.useCallback(() => {
        (0, _.XA)(k.jM.SOMETHING_WENT_WRONG), o.ORC.announce(w.intl.string(w.t.F8FvUy))
    }, []), G = null != d ? (0, i.jsx)("div", {
        ref: N,
        className: O.BU,
        children: d
    }) : null, {
        label: M,
        icon: U,
        isPromptingPurchase: F
    } = (0, C.h)({
        sku: t.sku,
        wishlistOwner: n,
        isOwned: I,
        location: "User Profile Wishlist Item Card"
    });
    return (0, i.jsxs)("div", {
        className: O.kL,
        children: [(0, i.jsxs)(T.A, {
            sku: t.sku,
            user: n,
            spec: P,
            cardStyle: r,
            skuPreviewStyle: s()(O.ev, {
                [O.go]: I && !m
            }, u),
            skuAssetClassName: g,
            disableHoverOrFocus: c,
            onHoverOrFocusChange: x,
            onClick: R,
            "aria-label": w.intl.formatToPlainString(w.t.ZBB4Ty, {
                productName: (0, j.TC)(t.sku)
            }),
            children: [v, (0, i.jsx)(C.A, {
                spec: P,
                onClick: F ? L : R,
                isHoveringOrFocusing: m,
                label: M,
                icon: U
            }), I && (0, i.jsx)(b.gS, {
                isHoveringOrFocusing: m
            }), n.id === l.id && null != A && (0, i.jsx)(E.A, {
                sku: t.sku,
                isCardHovered: m,
                spec: P,
                onError: D,
                location: "UserProfileWishlistItemCardBase",
                skipExperiment: !0
            })]
        }), G]
    })
}

function G(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: l,
        currentUser: s,
        analyticsLocations: r,
        ...o
    } = e, c = a.useCallback(() => {
        (0, p.R)({
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
    return (0, i.jsx)(D, {
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
    } = e, m = (0, N.e)({
        sku: t.sku,
        giftRecipient: n,
        giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: o
    }), x = a.useMemo(() => () => {
        let e = n.id === c.id;
        (0, g.A)({
            skuId: t.sku.id,
            isGift: !e,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o ?? [],
            giftRecipient: n
        })
    }, [t.sku, n, c.id, o]), p = d && t.sku.productLine === y.EZt.COLLECTIBLES && t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT && t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(D, {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        currentUser: c,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({
            [O.mn]: p
        }),
        analyticsLocations: o,
        ...u
    })
}

function U(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: l,
        currentUser: s,
        analyticsLocations: r,
        isHoveringOrFocusing: o,
        ...c
    } = e, d = l.id === s.id, u = a.useCallback(() => {
        (0, x.x)()
    }, []), g = a.useCallback(() => {
        (0, m.A)({
            isGift: !d,
            giftRecipient: d ? void 0 : l,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
            subscriptionTier: t.skuId,
            analyticsLocations: r
        })
    }, [d, t.skuId, l, r]);
    return (0, i.jsx)(D, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: u,
        onPurchaseClick: g,
        isHoveringOrFocusing: o,
        skuPreviewStyle: L.MO,
        skuAssetClassName: o ? L.iR : void 0,
        analyticsLocations: r,
        ...c
    })
}

function F(e) {
    let {
        item: t,
        wishlistOwner: n,
        wishlistId: l,
        analyticsLocations: s,
        ...r
    } = e, {
        analyticsLocations: o
    } = (0, u.Ay)(...s ?? [], t.sku?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : []), g = (0, c.bG)([A.default], () => A.default.getCurrentUser()), [m, x] = a.useState(!1), p = (0, c.bG)([v.A], () => v.A.hasSentGift(t.skuId, n.id), [n, t.skuId]), f = a.useMemo(() => t.skuProductLine === y.EZt.PREMIUM ? null != g && n.id === g.id && (0, I.ki)(g, R.WN[t.skuId]) : !0 === t.isOwned || p, [t.isOwned, t.skuId, t.skuProductLine, p, g, n.id]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(G, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case y.EZt.COLLECTIBLES:
            return (0, i.jsx)(M, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case y.EZt.PREMIUM:
            return (0, i.jsx)(U, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
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