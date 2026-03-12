/** chunk id: 86638 params = (module,exports,require) **/
n.d(t, {
    A: () => L
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(311907),
    c = n(793574),
    d = n(688810),
    u = n(429913),
    m = n(44120),
    g = n(317560),
    x = n(533406),
    f = n(183555),
    p = n(287809),
    h = n(111085),
    _ = n(146423),
    A = n(121547),
    I = n(460442),
    j = n(662349),
    v = n(479026),
    E = n(699976),
    T = n(652215),
    b = n(788868),
    N = n(518477),
    S = n(738878);
let y = E.Z.SIZE_133;

function C(e) {
    let {
        item: t,
        wishlistOwner: n,
        currentUser: a,
        style: r,
        isDragging: o,
        dragHandle: c,
        skuPreviewStyle: d,
        isHoveringOrFocusing: u,
        setIsHoveringOrFocusing: m,
        onDetailsClick: g,
        onPurchaseClick: x,
        wishlistId: p,
        analyticsLocations: h,
        isItemOwned: v
    } = e, E = l.useRef(null), T = l.useRef(m), [b, C] = l.useState(!1);
    l.useEffect(() => {
        T.current = m
    }, [m]), l.useEffect(() => {
        let e = E.current;
        if (null == e) return;
        let t = () => {
            T.current(!1)
        };
        return e.addEventListener("focusin", t), () => {
            e.removeEventListener("focusin", t)
        }
    }, []);
    let {
        trackUserProfileWishlistAction: R
    } = (0, f.NJ)(), k = l.useCallback(() => {
        null != p && (R({
            wishlistId: p,
            action: N.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), g())
    }, [g, t.sku, p, R]), L = l.useCallback(() => {
        null != p && (R({
            wishlistId: p,
            action: N.Mq.WISHLIST_ITEM_CLICKED,
            skuId: t.sku.id,
            productLines: new Set([t.sku.productLine])
        }), x())
    }, [x, t.sku, p, R]), w = null != c ? (0, i.jsx)("div", {
        ref: E,
        className: S.BU,
        children: c
    }) : null, {
        label: O,
        icon: P,
        isPromptingPurchase: D
    } = (0, j.hB)({
        sku: t.sku,
        wishlistOwner: n,
        isOwned: v,
        location: "User Profile Wishlist Item Card"
    });
    return (0, i.jsxs)("div", {
        className: S.kL,
        children: [(0, i.jsx)("div", {
            className: b ? S.B8 : void 0,
            children: (0, i.jsxs)(_.A, {
                sku: t.sku,
                user: n,
                spec: y,
                cardStyle: r,
                skuPreviewStyle: s()(S.ev, {
                    [S.go]: v && !u
                }, d),
                disableHoverOrFocus: o,
                onHoverOrFocusChange: m,
                onClick: k,
                children: [(0, i.jsx)(j.AJ, {
                    spec: y,
                    onClick: D ? L : k,
                    isHoveringOrFocusing: u,
                    label: O,
                    icon: P
                }), v && (0, i.jsx)(I.gS, {
                    isHoveringOrFocusing: u
                })]
            })
        }), w, n.id === a.id && null != p && (0, i.jsx)(A.A, {
            wishlistId: p,
            sku: t.sku,
            spec: y,
            analyticsLocations: h,
            isHoveringOrFocusing: u,
            onHoverOrFocusChange: C
        })]
    })
}

function R(e) {
    let {
        item: t,
        isItemOwned: n,
        wishlistOwner: a,
        currentUser: s,
        analyticsLocations: r,
        ...o
    } = e, d = (0, u.h)(t.sku?.applicationId), m = l.useCallback(() => {
        d?.guildId != null && (0, g.R)({
            skuId: t.sku.id,
            applicationId: t.sku.applicationId,
            guildId: d?.guildId,
            isStorefront: !1,
            analyticsLocations: r
        })
    }, [t.sku.id, t.sku.applicationId, d?.guildId, r]), f = l.useCallback(() => {
        let e = a.id === s.id;
        (0, x.a)(t.sku, {
            isGift: !e,
            giftRecipient: a,
            giftingOrigin: b.vQ.USER_PROFILE_WISHLIST
        }, {
            analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [t.sku, a, s.id, r]);
    return (0, i.jsx)(C, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        onDetailsClick: m,
        onPurchaseClick: f,
        analyticsLocations: r,
        currentUser: s,
        ...o
    })
}

function k(e) {
    let {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        analyticsLocations: o,
        currentUser: c,
        isHoveringOrFocusing: d,
        ...u
    } = e, g = (0, v.e)({
        sku: t.sku,
        analyticsLocations: o
    }), x = l.useMemo(() => () => {
        let e = n.id === c.id;
        (0, m.A)({
            skuId: t.sku.id,
            isGift: !e,
            giftingOrigin: b.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o ?? [],
            giftRecipient: n
        })
    }, [t.sku, n, c.id, o]), f = d && t.sku.productLine === T.EZt.COLLECTIBLES && t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT && t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(C, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: c,
        onDetailsClick: g,
        onPurchaseClick: x,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({
            [S.mn]: f
        }),
        analyticsLocations: o,
        ...u
    })
}

function L(e) {
    let {
        item: t,
        wishlistOwner: n,
        wishlistId: a,
        analyticsLocations: s,
        ...r
    } = e, {
        analyticsLocations: u
    } = (0, d.Ay)(...s ?? [], t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : []), m = (0, o.bG)([p.default], () => p.default.getCurrentUser()), [g, x] = l.useState(!1), f = (0, o.bG)([h.A], () => h.A.hasSentGift(t.skuId, n.id), [n, t.skuId]), _ = l.useMemo(() => !0 === t.isOwned || f, [t.isOwned, f]);
    if (null == t.sku || null == m) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(R, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: x,
                currentUser: m,
                isItemOwned: _,
                wishlistOwner: n,
                wishlistId: a,
                ...r
            });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(k, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: x,
                currentUser: m,
                isItemOwned: _,
                wishlistOwner: n,
                wishlistId: a,
                ...r
            });
        default:
            return null
    }
}