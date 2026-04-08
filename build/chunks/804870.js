/** chunk id: 804870 params = (module,exports,require) **/
i.d(t, {
    Ay: () => b,
    Zu: () => y,
    uz: () => _
});
var r = i(627968),
    s = i(64700),
    n = i(503698),
    l = i.n(n),
    u = i(873263),
    o = i(311907),
    a = i(397927),
    d = i(793574),
    c = i(688810),
    I = i(590180),
    h = i(572595),
    m = i(245068),
    S = i(57020),
    g = i(713517),
    L = i(44120),
    f = i(976860),
    A = i(661492),
    E = i(111085),
    x = i(594832),
    k = i(657331),
    M = i(353157),
    v = i(798048),
    C = i(652215),
    j = i(788868),
    p = i(985018),
    w = i(734518),
    R = i(476324);
let O = e => {
    let {
        size: t = a._3J.SIZE_80
    } = e;
    return (0, r.jsx)(a.euF, {
        className: w.RH,
        src: R,
        size: t,
        "aria-label": p.intl.string(p.t.lqaIxI)
    })
};

function y(e) {
    let {
        cardSize: t = v.Y.MEDIUM
    } = e, i = s.useRef(null), n = s.useRef(null);
    return (0, r.jsx)("div", {
        ref: i,
        className: w.kL,
        children: (0, r.jsx)("div", {
            ref: n,
            className: l()(w.Nr, w.Yf, {
                [w.IU]: t === v.Y.SMALL,
                [w.D]: t === v.Y.MEDIUM_SQUARE,
                [w.Sd]: t === v.Y.LARGE
            }),
            children: (0, r.jsx)("div", {
                className: w.ho,
                children: (0, r.jsx)("div", {
                    className: w._P,
                    children: (0, r.jsx)(O, {
                        size: a._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function _(e) {
    let {
        item: t,
        cardSize: i = v.Y.SMALL,
        remainingCount: n,
        onClick: u,
        renderItemPreview: o
    } = e, d = s.useRef(null), c = s.useRef(null), {
        isHoveringOrFocusing: I
    } = (0, g.A)(c), h = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: d,
        className: w.kL,
        children: (0, r.jsx)(a.DUT, {
            tag: "div",
            innerRef: c,
            onClick: u,
            className: l()(w.Nr, w.xJ, {
                [w.IU]: i === v.Y.SMALL
            }),
            children: (0, r.jsxs)("div", {
                className: l()(w.ho, w.jP),
                children: [o(!h && I), (0, r.jsx)("div", {
                    className: w.RF,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: p.intl.format(p.t.F6iMs4, {
                            count: n
                        })
                    })
                })]
            })
        })
    })
}

function b(e) {
    let {
        profileOwner: t,
        showIcons: i = !1,
        source: n = x.uS.WISHLIST,
        giftingOrigin: l = j.vQ.USER_PROFILE_WISHLIST,
        heartColor: R = "red",
        onWishlistItemClick: O,
        cardSize: y = v.Y.MEDIUM,
        analyticsLocations: _,
        isDragging: b = !1,
        ...T
    } = e, {
        item: U,
        isOwner: P
    } = T, {
        analyticsLocations: N
    } = (0, c.Ay)(..._ ?? []), H = (0, u.zy)(), Y = s.useRef(null), {
        isHoveringOrFocusing: F
    } = (0, g.A)(Y), [z] = (0, o.yK)([E.A], () => [E.A.hasSentGift(U.skuId, t.id)], [U.skuId, t.id]), W = z || !0 === U.isOwned, D = null != U.bundleItems && U.bundleItems.length > 0, G = (0, A.x2)(U), B = P || W ? p.intl.string(p.t.FdGl5A) : p.intl.string(p.t.ilhtIa), Z = P || W ? void 0 : a.okO, V = s.useCallback(() => {
        let e = H.pathname.startsWith(C.BVt.COLLECTIBLES_SHOP);
        if (P || W) {
            let t = !P && W;
            if (e) {
                let e = I.A.getProduct(U.skuId),
                    i = I.A.getCategoryForProduct(U.skuId);
                if (null != e && null != i) {
                    t || (0, k.closeUserProfileModal)(), (0, h.t)({
                        product: e,
                        category: i,
                        shouldCheckoutWithOrbs: (0, S.A)({
                            product: e
                        }),
                        analyticsLocations: N,
                        analyticsSource: d.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, k.closeUserProfileModal)(), (0, f.pX)(`${C.BVt.COLLECTIBLES_SHOP}#itemSkuId=${U.skuId}`)
        } else O?.(), (0, L.A)({
            skuId: U.skuId,
            isGift: !0,
            giftingOrigin: l,
            analyticsLocations: N,
            giftRecipient: t
        })
    }, [H.pathname, U.skuId, N, P, W, t, l, O]), q = y === v.Y.MEDIUM_SQUARE, J = s.useCallback(() => {
        if (!i || D && !q) return null;
        if (n === x.uS.WISHLIST) {
            let e = "white" === R ? w.e_ : w.Be;
            return (0, r.jsx)("div", {
                className: w.Fx,
                children: (0, r.jsx)(a.C3E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    colorClass: e
                })
            })
        }
        return n === x.uS.POPULAR ? (0, r.jsx)("div", {
            className: w.Fx,
            children: (0, r.jsx)(a.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: w.rY
            })
        }) : null
    }, [D, i, n, R, q]), Q = s.useCallback(() => {
        if (D) {
            let e = {
                items: U.bundleItems
            };
            return (0, r.jsx)("div", {
                className: w.hT,
                children: (0, r.jsx)(m.X, {
                    product: e,
                    isHighlighted: F && !b,
                    user: t
                })
            })
        }
        return (0, r.jsx)(M.A, {
            item: U,
            profileOwner: t,
            isHighlighted: F && !b,
            cardSize: y
        })
    }, [D, U, t, F, y, b]);
    return (0, r.jsx)(v.A, {
        ...T,
        cardRef: Y,
        accessibleLabel: G,
        onCardClick: V,
        buttonCTALabel: B,
        buttonIcon: Z,
        isOwned: W,
        renderItemPreview: Q,
        renderSourceIcon: J,
        giftingOrigin: l,
        source: n,
        cardSize: y
    })
}