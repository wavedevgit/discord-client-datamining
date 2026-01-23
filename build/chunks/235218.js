/** Chunk was on web.js **/
/** chunk id: 235218, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    c = n(429913),
    u = n(657331),
    d = n(242640),
    f = n(111085),
    p = n(594832),
    _ = n(580630),
    h = n(44724),
    m = n(317560),
    g = n(533406),
    E = n(366523),
    y = n(788868),
    b = n(818348),
    O = n(985018),
    v = n(125908);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            A(e, t, n[t])
        })
    }
    return e
}

function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function T(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function C(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = N(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function N(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let w = 20;

function R(e) {
    let {
        profileOwner: t,
        additionalUserIds: n,
        hideButtonIcon: A = !1,
        showPrice: S = !1,
        showIcons: N = !1,
        source: R = p.uS.WISHLIST,
        analyticsLocations: P
    } = e, D = C(e, ["profileOwner", "additionalUserIds", "hideButtonIcon", "showPrice", "showIcons", "source", "analyticsLocations"]), {
        item: x,
        isOwner: L,
        giftingOrigin: j = y.vQ.USER_PROFILE_WISHLIST
    } = D, M = x.sku, k = M.applicationId, U = (0, c.h)(k), G = i.useRef(null), {
        analyticsLocations: V
    } = (0, l.Ay)(...null != P ? P : [], o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD), F = (0, a.bG)([f.A], () => null != t && f.A.hasSentGift(x.skuId, t.id), [x.skuId, t]), B = F || !0 === x.isOwned, H = x.skuName, {
        buttonCTALabel: Y,
        buttonIcon: W,
        handleCardClick: K
    } = i.useMemo(() => {
        var e, r, i, a, l, c, d, f;
        return L || B ? {
            buttonCTALabel: S ? (0, _.$g)(null != (l = null == (d = M.price) ? void 0 : d.amount) ? l : 0, null != (c = null == (f = M.price) ? void 0 : f.currency) ? c : b.Yr.USD) : O.intl.string(O.t.FdGl5A),
            buttonIcon: void 0,
            handleCardClick: () => {
                (null == U ? void 0 : U.guildId) != null && (L ? ((0, u.closeUserProfileModal)(), (0, h.default)({
                    guildId: U.guildId,
                    skuId: M.id,
                    slug: M.slug
                })) : (0, m.R)({
                    skuId: M.id,
                    applicationId: U.id,
                    guildId: U.guildId,
                    isStorefront: !1,
                    analyticsLocations: V
                }))
            }
        } : {
            buttonCTALabel: S ? (0, _.$g)(null != (e = null == (i = M.price) ? void 0 : i.amount) ? e : 0, null != (r = null == (a = M.price) ? void 0 : a.currency) ? r : b.Yr.USD) : O.intl.string(O.t.ilhtIa),
            buttonIcon: A ? void 0 : s.okO,
            handleCardClick: () => {
                F || (0, g.a)(M, {
                    isGift: !0,
                    giftRecipient: t,
                    additionalUserIds: n,
                    giftingOrigin: j
                }, {
                    analyticsLocations: [...V, o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
                })
            }
        }
    }, [L, B, S, M, A, U, F, t, n, j, V]), z = i.useCallback(() => N ? R === p.uS.WISHLIST ? (0, r.jsx)("div", {
        className: v.Fx,
        children: (0, r.jsx)(s.C3E, {
            size: "custom",
            width: w,
            height: w,
            color: "currentColor",
            colorClass: v.Be
        })
    }) : R === p.uS.POPULAR ? (0, r.jsx)("div", {
        className: v.Fx,
        children: (0, r.jsx)(s.Y3C, {
            size: "custom",
            width: w,
            height: w,
            color: "currentColor",
            colorClass: v.rY
        })
    }) : null : null, [N, R]), q = i.useCallback(() => (0, r.jsx)(E.e, {
        shape: "custom",
        containerClassName: v.Nr,
        backgroundImageClassName: v.GC,
        foregroundImageClassName: v.wP,
        sku: M
    }), [M]);
    return (0, r.jsx)(d.A, T(I({}, D), {
        source: R,
        cardRef: G,
        accessibleLabel: H,
        onCardClick: K,
        buttonCTALabel: Y,
        buttonIcon: W,
        isOwned: B,
        renderItemPreview: q,
        renderSourceIcon: z
    }))
}