/** chunk id: 804870 params = (module,exports,require) **/
i.d(t, {
    Ay: () => b,
    Zu: () => O,
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
    g = i(57020),
    S = i(713517),
    f = i(44120),
    L = i(976860),
    A = i(661492),
    E = i(111085),
    x = i(594832),
    k = i(657331),
    M = i(353157),
    v = i(798048),
    j = i(652215),
    w = i(788868),
    C = i(985018),
    p = i(664281),
    R = i(476324);
let y = e => {
    let {
        size: t = a._3J.SIZE_80
    } = e;
    return (0, r.jsx)(a.euF, {
        className: p.RH,
        src: R,
        size: t,
        "aria-label": C.intl.string(C.t.lqaIxI)
    })
};

function O(e) {
    let {
        cardSize: t = v.Y.MEDIUM
    } = e, i = s.useRef(null), n = s.useRef(null);
    return (0, r.jsx)("div", {
        ref: i,
        className: p.kL,
        children: (0, r.jsx)("div", {
            ref: n,
            className: l()(p.Nr, p.Yf, {
                [p.IU]: t === v.Y.SMALL,
                [p.D]: t === v.Y.MEDIUM_SQUARE,
                [p.Sd]: t === v.Y.LARGE
            }),
            children: (0, r.jsx)("div", {
                className: p.ho,
                children: (0, r.jsx)("div", {
                    className: p._P,
                    children: (0, r.jsx)(y, {
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
    } = (0, S.A)(c), h = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: d,
        className: p.kL,
        children: (0, r.jsx)(a.DUT, {
            tag: "div",
            innerRef: c,
            onClick: u,
            className: l()(p.Nr, p.xJ, {
                [p.IU]: i === v.Y.SMALL
            }),
            children: (0, r.jsxs)("div", {
                className: l()(p.ho, p.jP),
                children: [o(!h && I), (0, r.jsx)("div", {
                    className: p.RF,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: C.intl.format(C.t.F6iMs4, {
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
        giftingOrigin: l = w.vQ.USER_PROFILE_WISHLIST,
        heartColor: R = "red",
        onWishlistItemClick: y,
        cardSize: O = v.Y.MEDIUM,
        analyticsLocations: _,
        isDragging: b = !1,
        ...U
    } = e, {
        item: T,
        isOwner: P
    } = U, {
        analyticsLocations: H
    } = (0, c.Ay)(..._ ?? []), N = (0, u.zy)(), Y = s.useRef(null), {
        isHoveringOrFocusing: F
    } = (0, S.A)(Y), [z] = (0, o.yK)([E.A], () => [E.A.hasSentGift(T.skuId, t.id)], [T.skuId, t.id]), W = z || !0 === T.isOwned, D = null != T.bundleItems && T.bundleItems.length > 0, G = (0, A.x2)(T), B = P || W ? C.intl.string(C.t.FdGl5A) : C.intl.string(C.t.ilhtIa), Z = P || W ? void 0 : a.okO, q = s.useCallback(() => {
        let e = N.pathname.startsWith(j.BVt.COLLECTIBLES_SHOP);
        if (P || W) {
            let t = !P && W;
            if (e) {
                let e = I.A.getProduct(T.skuId),
                    i = I.A.getCategoryForProduct(T.skuId);
                if (null != e && null != i) {
                    t || (0, k.closeUserProfileModal)(), (0, h.t)({
                        product: e,
                        category: i,
                        shouldCheckoutWithOrbs: (0, g.A)({
                            product: e
                        }),
                        analyticsLocations: H,
                        analyticsSource: d.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, k.closeUserProfileModal)(), (0, L.pX)(`${j.BVt.COLLECTIBLES_SHOP}#itemSkuId=${T.skuId}`)
        } else y?.(), (0, f.A)({
            skuId: T.skuId,
            isGift: !0,
            giftingOrigin: l,
            analyticsLocations: H,
            giftRecipient: t
        })
    }, [N.pathname, T.skuId, H, P, W, t, l, y]), J = O === v.Y.MEDIUM_SQUARE, V = s.useCallback(() => {
        if (!i || D && !J) return null;
        if (n === x.uS.WISHLIST) {
            let e = "white" === R ? p.e_ : p.Be;
            return (0, r.jsx)("div", {
                className: p.Fx,
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
            className: p.Fx,
            children: (0, r.jsx)(a.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: p.rY
            })
        }) : null
    }, [D, i, n, R, J]), Q = s.useCallback(() => {
        if (D) {
            let e = {
                items: T.bundleItems
            };
            return (0, r.jsx)("div", {
                className: p.hT,
                children: (0, r.jsx)(m.X, {
                    product: e,
                    isHighlighted: F && !b,
                    user: t
                })
            })
        }
        return (0, r.jsx)(M.A, {
            item: T,
            profileOwner: t,
            isHighlighted: F && !b,
            cardSize: O
        })
    }, [D, T, t, F, O, b]);
    return (0, r.jsx)(v.A, {
        ...U,
        cardRef: Y,
        accessibleLabel: G,
        onCardClick: q,
        buttonCTALabel: B,
        buttonIcon: Z,
        isOwned: W,
        renderItemPreview: Q,
        renderSourceIcon: V,
        giftingOrigin: l,
        source: n,
        cardSize: O
    })
}