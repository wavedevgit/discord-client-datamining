/** chunk id: 804870, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => _,
    Zu: () => N,
    uz: () => k
}), r(896048);
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(960488),
    u = r(575593),
    o = r(635358),
    c = r(311907),
    d = r(397927),
    f = r(793574),
    h = r(688810),
    m = r(590180),
    g = r(572595),
    I = r(245068),
    p = r(57020),
    S = r(713517),
    O = r(44120),
    E = r(976860),
    j = r(111085),
    A = r(594832),
    y = r(403362),
    b = r(657331),
    L = r(353157),
    v = r(242640),
    x = r(652215),
    w = r(788868),
    P = r(985018),
    R = r(752276),
    T = r(476324);
let C = e => {
    let {
        size: t = d._3J.SIZE_80
    } = e;
    return (0, n.jsx)(d.euF, {
        className: R.RH,
        src: T,
        size: t,
        "aria-label": P.intl.string(P.t.lqaIxI)
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
                    children: (0, n.jsx)(C, {
                        size: d._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function k(e) {
    let {
        item: t,
        cardSize: r = v.Y.SMALL,
        remainingCount: l,
        onClick: a,
        renderItemPreview: u
    } = e, o = i.useRef(null), c = i.useRef(null), {
        isHoveringOrFocusing: f
    } = (0, S.A)(c), h = !0 === t.isOwned;
    return (0, n.jsx)("div", {
        ref: o,
        className: R.kL,
        children: (0, n.jsx)(d.DUT, {
            tag: "div",
            innerRef: c,
            onClick: a,
            className: s()(R.Nr, R.xJ, {
                [R.IU]: r === v.Y.SMALL
            }),
            children: (0, n.jsxs)("div", {
                className: s()(R.ho, R.jP),
                children: [u(!h && f), (0, n.jsx)("div", {
                    className: R.RF,
                    children: (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: P.intl.format(P.t.F6iMs4, {
                            count: l
                        })
                    })
                })]
            })
        })
    })
}

function _(e) {
    var t, r;
    let {
        profileOwner: l,
        showIcons: s = !1,
        source: T = A.uS.WISHLIST,
        giftingOrigin: C = w.vQ.USER_PROFILE_WISHLIST,
        onWishlistItemClick: N,
        cardSize: k = v.Y.MEDIUM,
        analyticsLocations: _,
        isDragging: M = !1
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
        item: F,
        isOwner: H
    } = U, {
        analyticsLocations: D
    } = (0, h.Ay)(...null != _ ? _ : []), Y = (0, a.zy)(), z = i.useRef(null), {
        isHoveringOrFocusing: G
    } = (0, S.A)(z), [B] = (0, c.yK)([j.A], () => [j.A.hasSentGift(F.skuId, l.id)], [F.skuId, l.id]), Z = B || !0 === F.isOwned, W = null != F.bundleItems && F.bundleItems.length > 0, V = (() => {
        if (W) return P.intl.formatToPlainString(P.t["/l2CAE"], {
            itemName: F.skuName
        });
        let e = F.collectiblesItem.type;
        switch (e) {
            case u.R.AVATAR_DECORATION:
                return P.intl.formatToPlainString(P.t.IQQYef, {
                    itemName: F.skuName
                });
            case u.R.PROFILE_EFFECT:
                return P.intl.formatToPlainString(P.t["x/MGWy"], {
                    itemName: F.skuName
                });
            case u.R.NAMEPLATE:
                return P.intl.formatToPlainString(P.t.eVNt6E, {
                    itemName: F.skuName
                });
            default:
                (0, y.xb)(e)
        }
    })(), J = H || Z ? P.intl.string(P.t.FdGl5A) : P.intl.string(P.t.ilhtIa), q = H || Z ? void 0 : d.okO, K = i.useCallback(() => {
        let e = Y.pathname.startsWith(x.BVt.COLLECTIBLES_SHOP);
        if (H || Z) {
            let t = !H && Z;
            if (e) {
                let e = m.A.getProduct(F.skuId),
                    r = m.A.getCategoryForProduct(F.skuId);
                if (null != e && null != r) {
                    t || (0, b.closeUserProfileModal)(), (0, g.t)({
                        product: e,
                        category: r,
                        shouldCheckoutWithOrbs: (0, p.Ak)({
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
            t || (0, b.closeUserProfileModal)(), (0, E.pX)("".concat(x.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId))
        } else null == N || N(), (0, O.A)({
            skuId: F.skuId,
            isGift: !0,
            giftingOrigin: C,
            analyticsLocations: D,
            giftRecipient: l,
            variantsReturnStyle: o.g.VARIANTS_GROUP
        })
    }, [Y.pathname, F.skuId, D, H, Z, l, C, N]), Q = i.useCallback(() => W || !s ? null : T === A.uS.WISHLIST ? (0, n.jsx)("div", {
        className: R.Fx,
        children: (0, n.jsx)(d.C3E, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            colorClass: R.Be
        })
    }) : T === A.uS.POPULAR ? (0, n.jsx)("div", {
        className: R.Fx,
        children: (0, n.jsx)(d.Y3C, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            colorClass: R.rY
        })
    }) : null, [W, s, T]), X = i.useCallback(() => {
        if (W) {
            let e = {
                items: F.bundleItems
            };
            return (0, n.jsx)("div", {
                className: R.hT,
                children: (0, n.jsx)(I.X, {
                    product: e,
                    isHighlighted: G && !M,
                    user: l
                })
            })
        }
        return (0, n.jsx)(L.A, {
            item: F,
            profileOwner: l,
            isHighlighted: G && !M,
            cardSize: k
        })
    }, [W, F, l, G, k, M]);
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
        cardRef: z,
        accessibleLabel: V,
        onCardClick: K,
        buttonCTALabel: J,
        buttonIcon: q,
        isOwned: Z,
        renderItemPreview: X,
        renderSourceIcon: Q,
        giftingOrigin: C,
        source: T,
        cardSize: k
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