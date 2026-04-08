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
    d = n(311907),
    c = n(793574),
    u = n(688810),
    g = n(44120),
    m = n(532794),
    x = n(87719),
    f = n(317560),
    p = n(533406),
    h = n(183555),
    _ = n(657331),
    A = n(606758),
    I = n(287809),
    j = n(474090),
    v = n(661492),
    E = n(111085),
    T = n(146423),
    b = n(121700),
    C = n(460442),
    S = n(662349),
    N = n(479026),
    y = n(699976),
    R = n(652215),
    k = n(788868),
    O = n(518477),
    w = n(985018),
    L = n(480910),
    P = n(538189);
let D = y.Z.SIZE_133;

function G(e) {
    let {
        item: t,
        wishlistOwner: n,
        currentUser: l,
        style: r,
        isDragging: d,
        dragHandle: c,
        skuPreviewStyle: u,
        skuAssetClassName: g,
        isHoveringOrFocusing: m,
        setIsHoveringOrFocusing: x,
        onDetailsClick: f,
        onPurchaseClick: p,
        wishlistId: _,
        isItemOwned: I,
        cardBackdrop: j
    } = e, E = a.useRef(null), N = a.useRef(x);
    a.useEffect(() => {
        N.current = x
    }, [x]), a.useEffect(() => {
        let e = E.current;
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
        null != _ && (y({
            wishlistId: _,
            action: O.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), f())
    }, [f, t.sku, _, y]), k = a.useCallback(() => {
        null != _ && (y({
            wishlistId: _,
            action: O.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), p())
    }, [p, t.sku, _, y]), P = a.useCallback(() => {
        (0, A.XA)(O.jM.SOMETHING_WENT_WRONG), o.ORC.announce(w.intl.string(w.t.F8FvUy))
    }, []), G = null != c ? (0, i.jsx)("div", {
        ref: E,
        className: L.BU,
        children: c
    }) : null, {
        label: M,
        icon: U,
        isPromptingPurchase: F
    } = (0, S.h)({
        sku: t.sku,
        wishlistOwner: n,
        isOwned: I,
        location: "User Profile Wishlist Item Card"
    });
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [(0, i.jsxs)(T.A, {
            sku: t.sku,
            user: n,
            spec: D,
            cardStyle: r,
            skuPreviewStyle: s()(L.ev, {
                [L.go]: I && !m
            }, u),
            skuAssetClassName: g,
            disableHoverOrFocus: d,
            onHoverOrFocusChange: x,
            onClick: R,
            "aria-label": w.intl.formatToPlainString(w.t.ZBB4Ty, {
                productName: (0, v.TC)(t.sku)
            }),
            children: [j, (0, i.jsx)(S.A, {
                spec: D,
                onClick: F ? k : R,
                isHoveringOrFocusing: m,
                label: M,
                icon: U
            }), I && (0, i.jsx)(C.gS, {
                isHoveringOrFocusing: m
            }), n.id === l.id && null != _ && (0, i.jsx)(b.A, {
                sku: t.sku,
                isCardHovered: m,
                spec: D,
                onError: P,
                location: "UserProfileWishlistItemCardBase",
                skipExperiment: !0
            })]
        }), G]
    })
}

function M(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: l,
        currentUser: s,
        analyticsLocations: r,
        ...o
    } = e, d = a.useCallback(() => {
        (0, f.R)({
            skuId: t.sku.id,
            applicationId: t.sku.applicationId,
            isStorefront: !1,
            giftRecipient: l,
            giftingOrigin: k.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: r
        })
    }, [t.sku.id, t.sku.applicationId, l, r]), u = a.useCallback(() => {
        let e = l.id === s.id;
        (0, p.a)(t.sku, {
            isGift: !e,
            giftRecipient: l,
            giftingOrigin: k.vQ.USER_PROFILE_WISHLIST
        }, {
            analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [t.sku, l, s.id, r]);
    return (0, i.jsx)(G, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        onDetailsClick: d,
        onPurchaseClick: u,
        analyticsLocations: r,
        currentUser: s,
        ...o
    })
}

function U(e) {
    let {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        analyticsLocations: o,
        currentUser: d,
        isHoveringOrFocusing: c,
        ...u
    } = e, m = (0, N.e)({
        sku: t.sku,
        giftRecipient: n,
        giftingOrigin: k.vQ.USER_PROFILE_WISHLIST,
        analyticsLocations: o
    }), x = a.useMemo(() => () => {
        let e = n.id === d.id;
        (0, g.A)({
            skuId: t.sku.id,
            isGift: !e,
            giftingOrigin: k.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o ?? [],
            giftRecipient: n
        })
    }, [t.sku, n, d.id, o]), f = c && t.sku.productLine === R.EZt.COLLECTIBLES && t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT && t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(G, {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewStyle: s()({
            [L.mn]: f
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
        ...d
    } = e, c = l.id === s.id, u = a.useCallback(() => {
        (0, x.x)(_.closeUserProfileModal)
    }, []), g = a.useCallback(() => {
        (0, m.A)({
            isGift: !c,
            giftRecipient: c ? void 0 : l,
            giftingOrigin: k.vQ.USER_PROFILE_WISHLIST,
            subscriptionTier: t.skuId,
            analyticsLocations: r
        })
    }, [c, t.skuId, l, r]);
    return (0, i.jsx)(G, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: u,
        onPurchaseClick: g,
        isHoveringOrFocusing: o,
        skuPreviewStyle: P.MO,
        skuAssetClassName: o ? P.iR : void 0,
        analyticsLocations: r,
        ...d
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
    } = (0, u.Ay)(...s ?? [], t.sku?.productLine === R.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : []), g = (0, d.bG)([I.default], () => I.default.getCurrentUser()), [m, x] = a.useState(!1), f = (0, d.bG)([E.A], () => E.A.hasSentGift(t.skuId, n.id), [n, t.skuId]), p = a.useMemo(() => t.skuProductLine === R.EZt.PREMIUM ? null != g && n.id === g.id && (0, j.ki)(g, k.WN[t.skuId]) : !0 === t.isOwned || f, [t.isOwned, t.skuId, t.skuProductLine, f, g, n.id]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(M, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case R.EZt.COLLECTIBLES:
            return (0, i.jsx)(U, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        case R.EZt.PREMIUM:
            return (0, i.jsx)(F, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: l,
                ...r
            });
        default:
            return null
    }
}