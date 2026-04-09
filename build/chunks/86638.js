/** chunk id: 86638 params = (module,exports,require) **/
n.d(t, {
    A: () => W
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(158954),
    c = n(311907),
    d = n(793574),
    u = n(688810),
    m = n(44120),
    g = n(532794),
    f = n(87719),
    x = n(317560),
    p = n(533406),
    _ = n(183555),
    I = n(657331),
    h = n(606758),
    A = n(287809),
    E = n(474090),
    T = n(661492),
    v = n(111085),
    j = n(146423),
    C = n(121700),
    N = n(460442),
    y = n(662349),
    b = n(479026),
    R = n(699976),
    O = n(652215),
    S = n(788868),
    k = n(518477),
    D = n(985018),
    P = n(480910),
    L = n(538189);
let G = R.Z.SIZE_133;

function w(e) {
    let {
        item: t,
        wishlistOwner: n,
        currentUser: a,
        style: r,
        isDragging: c,
        dragHandle: d,
        skuPreviewStyle: u,
        skuAssetClassName: m,
        isHoveringOrFocusing: g,
        setIsHoveringOrFocusing: f,
        onDetailsClick: x,
        onPurchaseClick: p,
        wishlistId: I,
        isItemOwned: A,
        cardBackdrop: E
    } = e, v = l.useRef(null), b = l.useRef(f);
    l.useEffect(() => {
        b.current = f
    }, [f]), l.useEffect(() => {
        let e = v.current;
        if (null == e) return;
        let t = () => {
            b.current(!1)
        };
        return e.addEventListener("focusin", t), () => {
            e.removeEventListener("focusin", t)
        }
    }, []);
    let {
        trackUserProfileWishlistAction: R
    } = (0, _.NJ)(), O = l.useCallback(() => {
        null != I && (R({
            wishlistId: I,
            action: k.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), x())
    }, [x, t.sku, I, R]), S = l.useCallback(() => {
        null != I && (R({
            wishlistId: I,
            action: k.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), p())
    }, [p, t.sku, I, R]), L = l.useCallback(() => {
        (0, h.XA)(k.jM.SOMETHING_WENT_WRONG), o.ORC.announce(D.intl.string(D.t.F8FvUy))
    }, []), w = null != d ? (0, i.jsx)("div", {
        ref: v,
        className: P.BU,
        children: d
    }) : null, {
        label: U,
        icon: M,
        isPromptingPurchase: F
    } = (0, y.h)({
        sku: t.sku,
        wishlistOwner: n,
        isOwned: A,
        location: "User Profile Wishlist Item Card"
    });
    return (0, i.jsxs)("div", {
        className: P.kL,
        children: [(0, i.jsxs)(j.A, {
            sku: t.sku,
            user: n,
            spec: G,
            cardStyle: r,
            skuPreviewStyle: s()(P.ev, {
                [P.go]: A && !g
            }, u),
            skuAssetClassName: m,
            disableHoverOrFocus: c,
            onHoverOrFocusChange: f,
            onClick: O,
            "aria-label": D.intl.formatToPlainString(D.t.ZBB4Ty, {
                productName: (0, T.TC)(t.sku)
            }),
            children: [E, (0, i.jsx)(y.A, {
                spec: G,
                onClick: F ? S : O,
                isHoveringOrFocusing: g,
                label: U,
                icon: M
            }), A && (0, i.jsx)(N.gS, {
                isHoveringOrFocusing: g
            }), n.id === a.id && null != I && (0, i.jsx)(C.A, {
                sku: t.sku,
                isCardHovered: g,
                spec: G,
                onError: L,
                location: "UserProfileWishlistItemCardBase",
                skipExperiment: !0
            })]
        }), w]
    })
}

function U(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: a,
        currentUser: s,
        analyticsLocations: r,
        ...o
    } = e, c = l.useCallback(() => {
        (0, x.R)({
            skuId: t.sku.id,
            applicationId: t.sku.applicationId,
            isStorefront: !1,
            giftRecipient: a,
            giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: r
        })
    }, [t.sku.id, t.sku.applicationId, a, r]), u = l.useCallback(() => {
        let e = a.id === s.id;
        (0, p.a)(t.sku, {
            isGift: !e,
            giftRecipient: a,
            giftingOrigin: S.vQ.USER_PROFILE_WISHLIST
        }, {
            analyticsLocations: [...r, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [t.sku, a, s.id, r]);
    return (0, i.jsx)(w, {
        item: t,
        wishlistOwner: a,
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
        isItemOwned: a,
        analyticsLocations: o,
        currentUser: c,
        isHoveringOrFocusing: d,
        ...u
    } = e, g = (0, b.e)({
        sku: t.sku,
        giftRecipient: n,
        giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: o
    }), f = l.useMemo(() => () => {
        let e = n.id === c.id;
        (0, m.A)({
            skuId: t.sku.id,
            isGift: !e,
            giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o ?? [],
            giftRecipient: n
        })
    }, [t.sku, n, c.id, o]), x = d && t.sku.productLine === O.EZt.COLLECTIBLES && t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT && t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(w, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: c,
        onDetailsClick: g,
        onPurchaseClick: f,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({
            [P.mn]: x
        }),
        analyticsLocations: o,
        ...u
    })
}

function F(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: a,
        currentUser: s,
        analyticsLocations: r,
        isHoveringOrFocusing: o,
        ...c
    } = e, d = a.id === s.id, u = l.useCallback(() => {
        (0, f.x)(I.closeUserProfileModal)
    }, []), m = l.useCallback(() => {
        (0, g.A)({
            isGift: !d,
            giftRecipient: d ? void 0 : a,
            giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
            subscriptionTier: t.skuId,
            analyticsLocations: r
        })
    }, [d, t.skuId, a, r]);
    return (0, i.jsx)(w, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: u,
        onPurchaseClick: m,
        isHoveringOrFocusing: o,
        skuPreviewStyle: L.MO,
        skuAssetClassName: o ? L.iR : void 0,
        analyticsLocations: r,
        ...c
    })
}

function W(e) {
    let {
        item: t,
        wishlistOwner: n,
        wishlistId: a,
        analyticsLocations: s,
        ...r
    } = e, {
        analyticsLocations: o
    } = (0, u.Ay)(...s ?? [], t.sku?.productLine === O.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : []), m = (0, c.bG)([A.default], () => A.default.getCurrentUser()), [g, f] = l.useState(!1), x = (0, c.bG)([v.A], () => v.A.hasSentGift(t.skuId, n.id), [n, t.skuId]), p = l.useMemo(() => t.skuProductLine === O.EZt.PREMIUM ? null != m && n.id === m.id && (0, E.ki)(m, S.WN[t.skuId]) : !0 === t.isOwned || x, [t.isOwned, t.skuId, t.skuProductLine, x, m, n.id]);
    if (null == t.sku || null == m) return null;
    switch (t.sku.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(U, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: m,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: a,
                ...r
            });
        case O.EZt.COLLECTIBLES:
            return (0, i.jsx)(M, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: m,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: a,
                ...r
            });
        case O.EZt.PREMIUM:
            return (0, i.jsx)(F, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: m,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: a,
                ...r
            });
        default:
            return null
    }
}