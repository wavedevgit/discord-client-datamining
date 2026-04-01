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
    m = n(44120),
    g = n(532794),
    p = n(87719),
    x = n(317560),
    f = n(533406),
    _ = n(183555),
    h = n(606758),
    A = n(287809),
    I = n(474090),
    v = n(661492),
    j = n(111085),
    E = n(146423),
    T = n(121700),
    N = n(460442),
    C = n(662349),
    b = n(479026),
    S = n(699976),
    y = n(652215),
    R = n(788868),
    O = n(518477),
    w = n(985018),
    k = n(480910);
let L = S.Z.SIZE_133;

function D(e) {
    let {
        item: t,
        wishlistOwner: n,
        currentUser: l,
        style: r,
        isDragging: c,
        dragHandle: d,
        skuPreviewStyle: u,
        skuAssetClassName: m,
        isHoveringOrFocusing: g,
        setIsHoveringOrFocusing: p,
        onDetailsClick: x,
        onPurchaseClick: f,
        wishlistId: A,
        isItemOwned: I,
        cardBackdrop: j
    } = e, b = a.useRef(null), S = a.useRef(p);
    a.useEffect(() => {
        S.current = p
    }, [p]), a.useEffect(() => {
        let e = b.current;
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
    } = (0, _.NJ)(), R = a.useCallback(() => {
        null != A && (y({
            wishlistId: A,
            action: O.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), x())
    }, [x, t.sku, A, y]), D = a.useCallback(() => {
        null != A && (y({
            wishlistId: A,
            action: O.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), f())
    }, [f, t.sku, A, y]), P = a.useCallback(() => {
        (0, h.XA)(O.jM.SOMETHING_WENT_WRONG), o.ORC.announce(w.intl.string(w.t.F8FvUy))
    }, []), G = null != d ? (0, i.jsx)("div", {
        ref: b,
        className: k.BU,
        children: d
    }) : null, {
        label: U,
        icon: F,
        isPromptingPurchase: M
    } = (0, C.h)({
        sku: t.sku,
        wishlistOwner: n,
        isOwned: I,
        location: "User Profile Wishlist Item Card"
    });
    return (0, i.jsxs)("div", {
        className: k.kL,
        children: [(0, i.jsxs)(E.A, {
            sku: t.sku,
            user: n,
            spec: L,
            cardStyle: r,
            skuPreviewStyle: s()(k.ev, {
                [k.go]: I && !g
            }, u),
            skuAssetClassName: m,
            disableHoverOrFocus: c,
            onHoverOrFocusChange: p,
            onClick: R,
            "aria-label": w.intl.formatToPlainString(w.t.ZBB4Ty, {
                productName: (0, v.TC)(t.sku)
            }),
            children: [j, (0, i.jsx)(C.A, {
                spec: L,
                onClick: M ? D : R,
                isHoveringOrFocusing: g,
                label: U,
                icon: F
            }), I && (0, i.jsx)(N.gS, {
                isHoveringOrFocusing: g
            }), n.id === l.id && null != A && (0, i.jsx)(T.A, {
                sku: t.sku,
                isCardHovered: g,
                spec: L,
                onError: P,
                location: "UserProfileWishlistItemCardBase",
                skipExperiment: !0
            })]
        }), G]
    })
}

function P(e) {
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

function G(e) {
    let {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        analyticsLocations: o,
        currentUser: c,
        isHoveringOrFocusing: d,
        ...u
    } = e, g = (0, b.e)({
        sku: t.sku,
        giftRecipient: n,
        giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: o
    }), p = a.useMemo(() => () => {
        let e = n.id === c.id;
        (0, m.A)({
            skuId: t.sku.id,
            isGift: !e,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o ?? [],
            giftRecipient: n
        })
    }, [t.sku, n, c.id, o]), x = d && t.sku.productLine === y.EZt.COLLECTIBLES && t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT && t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(D, {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        currentUser: c,
        onDetailsClick: g,
        onPurchaseClick: p,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({
            [k.mn]: x
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
        (0, p.x)()
    }, []), m = a.useCallback(() => {
        (0, g.A)({
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
        onPurchaseClick: m,
        isHoveringOrFocusing: o,
        skuPreviewStyle: k.Fi,
        skuAssetClassName: o ? k.iR : void 0,
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
    } = (0, u.Ay)(...s ?? [], t.sku?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : []), m = (0, c.bG)([A.default], () => A.default.getCurrentUser()), [g, p] = a.useState(!1), x = (0, c.bG)([j.A], () => j.A.hasSentGift(t.skuId, n.id), [n, t.skuId]), f = a.useMemo(() => t.skuProductLine === y.EZt.PREMIUM ? null != m && n.id === m.id && (0, I.ki)(m, R.WN[t.skuId]) : !0 === t.isOwned || x, [t.isOwned, t.skuId, t.skuProductLine, x, m, n.id]);
    if (null == t.sku || null == m) return null;
    switch (t.sku.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(P, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: p,
                currentUser: m,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case y.EZt.COLLECTIBLES:
            return (0, i.jsx)(G, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: p,
                currentUser: m,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case y.EZt.PREMIUM:
            return (0, i.jsx)(U, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: p,
                currentUser: m,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        default:
            return null
    }
}