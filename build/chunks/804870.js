/** chunk id: 804870, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => C,
    Zu: () => N,
    uz: () => T
}), r(896048);
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    o = r(960488),
    u = r(575593),
    a = r(635358),
    c = r(311907),
    d = r(397927),
    f = r(793574),
    m = r(688810),
    g = r(590180),
    h = r(572595),
    p = r(245068),
    I = r(57020),
    O = r(713517),
    S = r(44120),
    y = r(976860),
    b = r(111085),
    j = r(594832),
    A = r(403362),
    L = r(657331),
    E = r(353157),
    v = r(242640),
    w = r(652215),
    P = r(788868),
    x = r(985018),
    R = r(752276),
    k = r(476324);
let M = e => {
    let {
        size: t = d._3J.SIZE_80
    } = e;
    return (0, n.jsx)(d.euF, {
        className: R.RH,
        src: k,
        size: t,
        "aria-label": x.intl.string(x.t.lqaIxI)
    })
};

function N(e) {
    let {
        cardSize: t = v.Y.MEDIUM
    } = e, r = i.useRef(null), l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: R.kL,
        children: (0, n.jsx)("div", {
            ref: l,
            className: s()(R.Nr, R.Yf, {
                [R.IU]: t === v.Y.SMALL,
                [R.Sd]: t === v.Y.LARGE
            }),
            children: (0, n.jsx)("div", {
                className: R.ho,
                children: (0, n.jsx)("div", {
                    className: R._P,
                    children: (0, n.jsx)(M, {
                        size: d._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function T(e) {
    let {
        item: t,
        cardSize: r = v.Y.SMALL,
        remainingCount: l,
        onClick: o,
        renderItemPreview: u
    } = e, a = i.useRef(null), c = i.useRef(null), {
        isHoveringOrFocusing: f
    } = (0, O.A)(c), m = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: a,
        className: R.kL,
        children: (0, n.jsx)(d.DUT, {
            tag: "div",
            innerRef: c,
            onClick: o,
            className: s()(R.Nr, R.xJ, {
                [R.IU]: r === v.Y.SMALL
            }),
            children: (0, n.jsxs)("div", {
                className: s()(R.ho, R.jP),
                children: [u(!m && f), (0, n.jsx)("div", {
                    className: R.RF,
                    children: (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: x.intl.format(x.t.F6iMs4, {
                            count: l
                        })
                    })
                })]
            })
        })
    })
}

function C(e) {
    var t, r;
    let {
        profileOwner: l,
        showIcons: s = !1,
        source: k = j.uS.WISHLIST,
        giftingOrigin: M = P.vQ.USER_PROFILE_WISHLIST,
        onWishlistItemClick: N,
        cardSize: T = v.Y.MEDIUM,
        analyticsLocations: C,
        isDragging: _ = !1
    } = e, U = function(e, t) {
        if (null == e) return {};
        var r, n, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    l = Object.getOwnPropertyNames(e);
                for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
    }(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick", "cardSize", "analyticsLocations", "isDragging"]), {
        item: H,
        isOwner: F
    } = U, {
        analyticsLocations: z
    } = (0, m.Ay)(...null != C ? C : []), D = (0, o.zy)(), Y = i.useRef(null), {
        isHoveringOrFocusing: G
    } = (0, O.A)(Y), [W] = (0, c.yK)([b.A], () => [b.A.hasSentGift(H.skuId, l.id)], [H.skuId, l.id]), B = W || !0 === H.isOwned, Z = null != H.bundleItems && H.bundleItems.length > 0, V = (() => {
        if (Z) return x.intl.formatToPlainString(x.t["/l2CAE"], {
            itemName: H.skuName
        });
        let e = H.collectiblesItem.type;
        switch (e) {
            case u.R.AVATAR_DECORATION:
                return x.intl.formatToPlainString(x.t.IQQYef, {
                    itemName: H.skuName
                });
            case u.R.PROFILE_EFFECT:
                return x.intl.formatToPlainString(x.t["x/MGWy"], {
                    itemName: H.skuName
                });
            case u.R.NAMEPLATE:
                return x.intl.formatToPlainString(x.t.eVNt6E, {
                    itemName: H.skuName
                });
            default:
                (0, A.xb)(e)
        }
    })(), q = F || B ? x.intl.string(x.t.FdGl5A) : x.intl.string(x.t.ilhtIa), J = F || B ? void 0 : d.okO, K = i.useCallback(() => {
        let e = D.pathname.startsWith(w.BVt.COLLECTIBLES_SHOP);
        if (F || B) {
            let t = !F && B;
            if (e) {
                let e = g.A.getProduct(H.skuId),
                    r = g.A.getCategoryForProduct(H.skuId);
                if (null != e && null != r) {
                    t || (0, L.closeUserProfileModal)(), (0, h.t)({
                        product: e,
                        category: r,
                        shouldCheckoutWithOrbs: (0, I.Ak)({
                            product: e
                        }),
                        analyticsLocations: z,
                        analyticsSource: f.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, L.closeUserProfileModal)(), (0, y.pX)("".concat(w.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(H.skuId))
        } else null == N || N(), (0, S.A)({
            skuId: H.skuId,
            isGift: !0,
            giftingOrigin: M,
            analyticsLocations: z,
            giftRecipient: l,
            variantsReturnStyle: a.g.VARIANTS_GROUP
        })
    }, [D.pathname, H.skuId, z, F, B, l, M, N]), Q = i.useCallback(() => Z || !s ? null : k === j.uS.WISHLIST ? (0, n.jsx)("div", {
        className: R.Fx,
        children: (0, n.jsx)(d.C3E, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            colorClass: R.Be
        })
    }) : k === j.uS.POPULAR ? (0, n.jsx)("div", {
        className: R.Fx,
        children: (0, n.jsx)(d.Y3C, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            colorClass: R.rY
        })
    }) : null, [Z, s, k]), X = i.useCallback(() => {
        if (Z) {
            let e = {
                items: H.bundleItems
            };
            return (0, n.jsx)("div", {
                className: R.hT,
                children: (0, n.jsx)(p.X, {
                    product: e,
                    isHighlighted: G && !_,
                    user: l
                })
            })
        }
        return (0, n.jsx)(E.A, {
            item: H,
            profileOwner: l,
            isHighlighted: G && !_,
            cardSize: T
        })
    }, [Z, H, l, G, T, _]);
    return (0, n.jsx)(v.A, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            })
        }
        return e
    }({}, U), r = r = {
        cardRef: Y,
        accessibleLabel: V,
        onCardClick: K,
        buttonCTALabel: q,
        buttonIcon: J,
        isOwned: B,
        renderItemPreview: X,
        renderSourceIcon: Q,
        giftingOrigin: M,
        source: k,
        cardSize: T
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
}