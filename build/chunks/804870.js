/** Chunk was on 13696 **/
/** chunk id: 804870, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => N,
    Zu: () => C,
    uz: () => M
}), r(896048);
var n = r(627968),
    i = r(64700),
    l = r(503698),
    o = r.n(l),
    s = r(960488),
    u = r(575593),
    c = r(635358),
    a = r(311907),
    d = r(397927),
    f = r(793574),
    g = r(688810),
    m = r(590180),
    p = r(572595),
    O = r(245068),
    h = r(57020),
    y = r(713517),
    I = r(44120),
    b = r(976860),
    S = r(111085),
    j = r(594832),
    L = r(403362),
    E = r(657331),
    w = r(353157),
    P = r(242640),
    A = r(652215),
    v = r(788868),
    x = r(985018),
    R = r(752276),
    k = r(476324);
let T = e => {
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

function C(e) {
    let {
        cardSize: t = P.Y.MEDIUM
    } = e, r = i.useRef(null), l = i.useRef(null);
    return (0, n.jsx)("div", {
        ref: r,
        className: R.kL,
        children: (0, n.jsx)("div", {
            ref: l,
            className: o()(R.Nr, R.Yf, {
                [R.IU]: t === P.Y.SMALL,
                [R.Sd]: t === P.Y.LARGE
            }),
            children: (0, n.jsx)("div", {
                className: R.ho,
                children: (0, n.jsx)("div", {
                    className: R._P,
                    children: (0, n.jsx)(T, {
                        size: d._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function M(e) {
    let {
        item: t,
        cardSize: r = P.Y.SMALL,
        remainingCount: l,
        onClick: s,
        renderItemPreview: u
    } = e, c = i.useRef(null), a = i.useRef(null), {
        isHoveringOrFocusing: f
    } = (0, y.A)(a), g = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: c,
        className: R.kL,
        children: (0, n.jsx)(d.DUT, {
            tag: "div",
            innerRef: a,
            onClick: s,
            className: o()(R.Nr, R.xJ, {
                [R.IU]: r === P.Y.SMALL
            }),
            children: (0, n.jsxs)("div", {
                className: o()(R.ho, R.jP),
                children: [u(!g && f), (0, n.jsx)("div", {
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

function N(e) {
    var t, r;
    let {
        profileOwner: l,
        showIcons: o = !1,
        source: k = j.uS.WISHLIST,
        giftingOrigin: T = v.vQ.USER_PROFILE_WISHLIST,
        onWishlistItemClick: C,
        cardSize: M = P.Y.MEDIUM,
        analyticsLocations: N,
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
        analyticsLocations: D
    } = (0, g.Ay)(...null != N ? N : []), Y = (0, s.zy)(), z = i.useRef(null), {
        isHoveringOrFocusing: G
    } = (0, y.A)(z), [W] = (0, a.yK)([S.A], () => [S.A.hasSentGift(H.skuId, l.id)], [H.skuId, l.id]), B = W || !0 === H.isOwned, V = null != H.bundleItems && H.bundleItems.length > 0, Z = (() => {
        if (V) return x.intl.formatToPlainString(x.t["/l2CAE"], {
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
                (0, L.xb)(e)
        }
    })(), q = F || B ? x.intl.string(x.t.FdGl5A) : x.intl.string(x.t.ilhtIa), K = F || B ? void 0 : d.okO, J = i.useCallback(() => {
        let e = Y.pathname.startsWith(A.BVt.COLLECTIBLES_SHOP);
        if (F || B) {
            let t = !F && B;
            if (e) {
                let e = m.A.getProduct(H.skuId),
                    r = m.A.getCategoryForProduct(H.skuId);
                if (null != e && null != r) {
                    t || (0, E.closeUserProfileModal)(), (0, p.t)({
                        product: e,
                        category: r,
                        shouldCheckoutWithOrbs: (0, h.Ak)({
                            product: e
                        }),
                        analyticsLocations: D,
                        analyticsSource: f.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, E.closeUserProfileModal)(), (0, b.pX)("".concat(A.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(H.skuId))
        } else null == C || C(), (0, I.A)({
            skuId: H.skuId,
            isGift: !0,
            giftingOrigin: T,
            analyticsLocations: D,
            giftRecipient: l,
            variantsReturnStyle: c.g.VARIANTS_GROUP
        })
    }, [Y.pathname, H.skuId, D, F, B, l, T, C]), Q = i.useCallback(() => V || !o ? null : k === j.uS.WISHLIST ? (0, n.jsx)("div", {
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
    }) : null, [V, o, k]), X = i.useCallback(() => {
        if (V) {
            let e = {
                items: H.bundleItems
            };
            return (0, n.jsx)("div", {
                className: R.hT,
                children: (0, n.jsx)(O.X, {
                    product: e,
                    isHighlighted: G && !_,
                    user: l
                })
            })
        }
        return (0, n.jsx)(w.A, {
            item: H,
            profileOwner: l,
            isHighlighted: G && !_,
            cardSize: M
        })
    }, [V, H, l, G, M, _]);
    return (0, n.jsx)(P.A, (t = function(e) {
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
        cardRef: z,
        accessibleLabel: Z,
        onCardClick: J,
        buttonCTALabel: q,
        buttonIcon: K,
        isOwned: B,
        renderItemPreview: X,
        renderSourceIcon: Q,
        giftingOrigin: T,
        source: k,
        cardSize: M
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