/** Chunk was on web.js **/
/** chunk id: 3648, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k,
    Z: () => M
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(554146),
    s = n(192308),
    l = n(342494),
    c = n(397927),
    u = n(793574),
    d = n(627363),
    f = n(576030),
    p = n(379848),
    _ = n(957785),
    h = n(594832),
    m = n(186111),
    g = n(916023),
    E = n(533406),
    y = n(366523),
    b = n(188275),
    O = n(49999),
    v = n(788868),
    A = n(985018),
    I = n(407494),
    S = n(101616),
    T = n(585048);

function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            C(e, t, n[t])
        })
    }
    return e
}

function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function R(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function P(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = D(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function D(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function L(e) {
    let {
        targetElementRef: t,
        onRequestClose: n,
        onActionClick: i
    } = e;
    return (0, r.jsx)(l.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: {
            align: "center"
        },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{
            text: A.intl.string(A.t.uB4Gax),
            variant: "primary",
            onClick: i
        }],
        targetElementRef: t,
        title: A.intl.string(A.t.qh9t5c),
        body: A.intl.string(A.t.iM6fxV),
        graphic: {
            type: "image",
            src: T.A
        }
    })
}

function x(e) {
    let {
        showPopover: t,
        onViewWishlist: n,
        onCardClick: l
    } = e, c = P(e, ["showPopover", "onViewWishlist", "onCardClick"]), u = i.useRef(null), d = (0, s.useHasAnyModalOpen)(), f = (0, a.bG)([m.A], () => m.A.hasLayers()), h = (0, g.Jw)({
        location: "wishlist-card"
    }), [E, y] = (0, p.kn)(h ? [o.M.GAME_SHOP_WISHLIST_POPOVER] : [], O.m.SIDEBAR, !0), b = i.useCallback(() => {
        y(O.i.USER_DISMISS), l()
    }, [l, y]), v = i.useCallback(() => {
        y(O.i.USER_DISMISS)
    }, [y]), A = i.useCallback(() => {
        y(O.i.USER_DISMISS), n()
    }, [n, y]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.A, R(N({}, c), {
            onCardClick: b,
            ref: u
        })), t && E === o.M.GAME_SHOP_WISHLIST_POPOVER && !d && !f && (0, r.jsx)(L, {
            targetElementRef: u,
            onRequestClose: v,
            onActionClick: A
        })]
    })
}

function M(e, t) {
    let {
        index: n,
        moreCount: i,
        onViewWishlist: a,
        isSingleCard: o = !1,
        profileOwner: s,
        wishlistId: l,
        cardSize: c,
        analyticsLocations: d,
        itemSource: p
    } = t, _ = null != i && i > 0, m = p === h.uS.POPULAR ? A.intl.string(A.t.Ig6VDH) : A.intl.string(A.t.ilhtIa), g = {
        title: _ ? A.intl.string(A.t.TxBQzD) : A.intl.string(A.t["4yiU7x"]),
        body: _ ? void 0 : m,
        renderIcon: _ ? void 0 : f.GM,
        shouldShow: !0
    }, O = () => {
        _ ? a() : (0, E.a)(e.sku, {
            isGift: !0,
            giftRecipient: s,
            giftingOrigin: v.vQ.USER_PROFILE_WISHLIST
        }, {
            analyticsLocations: [...d, u.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, S = () => (0, r.jsx)(y.e, {
        containerClassName: I.Nr,
        backgroundImageClassName: I.GC,
        foregroundImageClassName: I.wP,
        sku: e.sku,
        shape: "custom"
    });
    return (0, r.jsx)(x, {
        wishlistItem: e,
        onCardClick: O,
        tooltipConfig: g,
        shouldScalePreview: !1,
        renderPreview: S,
        moreCount: i,
        isSingleCard: o,
        wishlistId: l,
        showPopover: 0 === n && e.sku.applicationId === b.XR,
        onViewWishlist: a,
        cardSize: c,
        itemSource: p
    }, e.skuId)
}

function j(e) {
    let {
        item: t,
        card: n,
        analyticsLocations: i,
        profileOwner: a
    } = e, {
        data: o
    } = (0, d.YY)(t.sku.applicationId), s = () => {
        (0, E.a)(t.sku, {
            isGift: !0,
            giftRecipient: a,
            giftingOrigin: v.vQ.USER_PROFILE_WISHLIST
        }, {
            analyticsLocations: [...i, u.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    };
    return (0, r.jsxs)("div", {
        className: S.D5,
        children: [n, (0, r.jsx)("div", {
            className: S.S7,
            children: (0, r.jsxs)(c.DUT, {
                onClick: s,
                className: S.Hh,
                "aria-label": A.intl.string(A.t.pLPjsb),
                children: [(0, r.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: t.skuName
                }), (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: A.intl.format(A.t["CqpEC+"], {
                        applicationName: null == o ? void 0 : o.name
                    })
                })]
            })
        })]
    })
}

function k(e, t) {
    let {
        profileOwner: n,
        analyticsLocations: i,
        wishlistId: a,
        onViewWishlist: o
    } = t, s = M(e, {
        index: 0,
        profileOwner: n,
        analyticsLocations: i,
        onViewWishlist: o,
        isSingleCard: !0,
        wishlistId: a
    });
    return (0, r.jsx)(j, {
        item: e,
        card: s,
        profileOwner: n,
        analyticsLocations: i
    })
}