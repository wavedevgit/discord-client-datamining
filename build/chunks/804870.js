/** chunk id: 804870, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => O,
    Zu: () => w,
    uz: () => T
});
var i = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    u = r(873263),
    o = r(635358),
    d = r(311907),
    a = r(397927),
    c = r(793574),
    I = r(688810),
    h = r(590180),
    m = r(572595),
    S = r(245068),
    g = r(57020),
    f = r(713517),
    L = r(44120),
    A = r(976860),
    x = r(661492),
    E = r(111085),
    p = r(594832),
    M = r(657331),
    j = r(353157),
    v = r(798048),
    _ = r(652215),
    y = r(788868),
    k = r(985018),
    C = r(975462),
    R = r(476324);
let U = e => {
    let {
        size: t = a._3J.SIZE_80
    } = e;
    return (0, i.jsx)(a.euF, {
        className: C.RH,
        src: R,
        size: t,
        "aria-label": k.intl.string(k.t.lqaIxI)
    })
};

function w(e) {
    let {
        cardSize: t = v.Y.MEDIUM
    } = e, r = n.useRef(null), l = n.useRef(null);
    return (0, i.jsx)("div", {
        ref: r,
        className: C.kL,
        children: (0, i.jsx)("div", {
            ref: l,
            className: s()(C.Nr, C.Yf, {
                [C.IU]: t === v.Y.SMALL,
                [C.D]: t === v.Y.MEDIUM_SQUARE,
                [C.Sd]: t === v.Y.LARGE
            }),
            children: (0, i.jsx)("div", {
                className: C.ho,
                children: (0, i.jsx)("div", {
                    className: C._P,
                    children: (0, i.jsx)(U, {
                        size: a._3J.SIZE_80
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
        onClick: u,
        renderItemPreview: o
    } = e, d = n.useRef(null), c = n.useRef(null), {
        isHoveringOrFocusing: I
    } = (0, f.A)(c), h = !0 === t.isOwned;
    return (0, i.jsx)("div", {
        ref: d,
        className: C.kL,
        children: (0, i.jsx)(a.DUT, {
            tag: "div",
            innerRef: c,
            onClick: u,
            className: s()(C.Nr, C.xJ, {
                [C.IU]: r === v.Y.SMALL
            }),
            children: (0, i.jsxs)("div", {
                className: s()(C.ho, C.jP),
                children: [o(!h && I), (0, i.jsx)("div", {
                    className: C.RF,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: k.intl.format(k.t.F6iMs4, {
                            count: l
                        })
                    })
                })]
            })
        })
    })
}

function O(e) {
    let {
        profileOwner: t,
        showIcons: r = !1,
        source: l = p.uS.WISHLIST,
        giftingOrigin: s = y.vQ.USER_PROFILE_WISHLIST,
        heartColor: R = "red",
        onWishlistItemClick: U,
        cardSize: w = v.Y.MEDIUM,
        analyticsLocations: T,
        isDragging: O = !1,
        ...b
    } = e, {
        item: N,
        isOwner: P
    } = b, {
        analyticsLocations: H
    } = (0, I.Ay)(...T ?? []), Y = (0, u.zy)(), F = n.useRef(null), {
        isHoveringOrFocusing: z
    } = (0, f.A)(F), [G] = (0, d.yK)([E.A], () => [E.A.hasSentGift(N.skuId, t.id)], [N.skuId, t.id]), D = G || !0 === N.isOwned, W = null != N.bundleItems && N.bundleItems.length > 0, B = (0, x.x)(N), Z = P || D ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa), V = P || D ? void 0 : a.okO, q = n.useCallback(() => {
        let e = Y.pathname.startsWith(_.BVt.COLLECTIBLES_SHOP);
        if (P || D) {
            let t = !P && D;
            if (e) {
                let e = h.A.getProduct(N.skuId),
                    r = h.A.getCategoryForProduct(N.skuId);
                if (null != e && null != r) {
                    t || (0, M.closeUserProfileModal)(), (0, m.t)({
                        product: e,
                        category: r,
                        shouldCheckoutWithOrbs: (0, g.A)({
                            product: e
                        }),
                        analyticsLocations: H,
                        analyticsSource: c.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, M.closeUserProfileModal)(), (0, A.pX)(`${_.BVt.COLLECTIBLES_SHOP}#itemSkuId=${N.skuId}`)
        } else U?.(), (0, L.A)({
            skuId: N.skuId,
            isGift: !0,
            giftingOrigin: s,
            analyticsLocations: H,
            giftRecipient: t,
            variantsReturnStyle: o.g.VARIANTS_GROUP
        })
    }, [Y.pathname, N.skuId, H, P, D, t, s, U]), J = w === v.Y.MEDIUM_SQUARE, Q = n.useCallback(() => {
        if (!r || W && !J) return null;
        if (l === p.uS.WISHLIST) {
            let e = "white" === R ? C.e_ : C.Be;
            return (0, i.jsx)("div", {
                className: C.Fx,
                children: (0, i.jsx)(a.C3E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    colorClass: e
                })
            })
        }
        return l === p.uS.POPULAR ? (0, i.jsx)("div", {
            className: C.Fx,
            children: (0, i.jsx)(a.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: C.rY
            })
        }) : null
    }, [W, r, l, R, J]), $ = n.useCallback(() => {
        if (W) {
            let e = {
                items: N.bundleItems
            };
            return (0, i.jsx)("div", {
                className: C.hT,
                children: (0, i.jsx)(S.X, {
                    product: e,
                    isHighlighted: z && !O,
                    user: t
                })
            })
        }
        return (0, i.jsx)(j.A, {
            item: N,
            profileOwner: t,
            isHighlighted: z && !O,
            cardSize: w
        })
    }, [W, N, t, z, w, O]);
    return (0, i.jsx)(v.A, {
        ...b,
        cardRef: F,
        accessibleLabel: B,
        onCardClick: q,
        buttonCTALabel: Z,
        buttonIcon: V,
        isOwned: D,
        renderItemPreview: $,
        renderSourceIcon: Q,
        giftingOrigin: s,
        source: l,
        cardSize: w
    })
}