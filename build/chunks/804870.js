/** chunk id: 804870, original params: e,t,l (module,exports,require) **/
l.d(t, {
    Ay: () => w,
    Zu: () => T,
    uz: () => k
});
var r = l(627968),
    i = l(64700),
    n = l(503698),
    s = l.n(n),
    u = l(873263),
    a = l(635358),
    o = l(311907),
    d = l(397927),
    c = l(793574),
    h = l(688810),
    I = l(590180),
    f = l(572595),
    S = l(245068),
    g = l(57020),
    m = l(713517),
    A = l(44120),
    E = l(976860),
    L = l(661492),
    p = l(111085),
    R = l(594832),
    _ = l(657331),
    C = l(353157),
    M = l(798048),
    v = l(652215),
    P = l(788868),
    x = l(985018),
    O = l(752276),
    U = l(476324);
let y = e => {
    let {
        size: t = d._3J.SIZE_80
    } = e;
    return (0, r.jsx)(d.euF, {
        className: O.RH,
        src: U,
        size: t,
        "aria-label": x.intl.string(x.t.lqaIxI)
    })
};

function T(e) {
    let {
        cardSize: t = M.Y.MEDIUM
    } = e, l = i.useRef(null), n = i.useRef(null);
    return (0, r.jsx)("div", {
        ref: l,
        className: O.kL,
        children: (0, r.jsx)("div", {
            ref: n,
            className: s()(O.Nr, O.Yf, {
                [O.IU]: t === M.Y.SMALL,
                [O.D]: t === M.Y.MEDIUM_SQUARE,
                [O.Sd]: t === M.Y.LARGE
            }),
            children: (0, r.jsx)("div", {
                className: O.ho,
                children: (0, r.jsx)("div", {
                    className: O._P,
                    children: (0, r.jsx)(y, {
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
        cardSize: l = M.Y.SMALL,
        remainingCount: n,
        onClick: u,
        renderItemPreview: a
    } = e, o = i.useRef(null), c = i.useRef(null), {
        isHoveringOrFocusing: h
    } = (0, m.A)(c), I = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: o,
        className: O.kL,
        children: (0, r.jsx)(d.DUT, {
            tag: "div",
            innerRef: c,
            onClick: u,
            className: s()(O.Nr, O.xJ, {
                [O.IU]: l === M.Y.SMALL
            }),
            children: (0, r.jsxs)("div", {
                className: s()(O.ho, O.jP),
                children: [a(!I && h), (0, r.jsx)("div", {
                    className: O.RF,
                    children: (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: x.intl.format(x.t.F6iMs4, {
                            count: n
                        })
                    })
                })]
            })
        })
    })
}

function w(e) {
    let {
        profileOwner: t,
        showIcons: l = !1,
        source: n = R.uS.WISHLIST,
        giftingOrigin: s = P.vQ.USER_PROFILE_WISHLIST,
        heartColor: U = "red",
        onWishlistItemClick: y,
        cardSize: T = M.Y.MEDIUM,
        analyticsLocations: k,
        isDragging: w = !1,
        ...j
    } = e, {
        item: N,
        isOwner: b
    } = j, {
        analyticsLocations: F
    } = (0, h.Ay)(...k ?? []), Y = (0, u.zy)(), H = i.useRef(null), {
        isHoveringOrFocusing: D
    } = (0, m.A)(H), [G] = (0, o.yK)([p.A], () => [p.A.hasSentGift(N.skuId, t.id)], [N.skuId, t.id]), B = G || !0 === N.isOwned, W = null != N.bundleItems && N.bundleItems.length > 0, V = (0, L.x)(N), z = b || B ? x.intl.string(x.t.FdGl5A) : x.intl.string(x.t.ilhtIa), Q = b || B ? void 0 : d.okO, Z = i.useCallback(() => {
        let e = Y.pathname.startsWith(v.BVt.COLLECTIBLES_SHOP);
        if (b || B) {
            let t = !b && B;
            if (e) {
                let e = I.A.getProduct(N.skuId),
                    l = I.A.getCategoryForProduct(N.skuId);
                if (null != e && null != l) {
                    t || (0, _.closeUserProfileModal)(), (0, f.t)({
                        product: e,
                        category: l,
                        shouldCheckoutWithOrbs: (0, g.A)({
                            product: e
                        }),
                        analyticsLocations: F,
                        analyticsSource: c.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, _.closeUserProfileModal)(), (0, E.pX)(`${v.BVt.COLLECTIBLES_SHOP}#itemSkuId=${N.skuId}`)
        } else y?.(), (0, A.A)({
            skuId: N.skuId,
            isGift: !0,
            giftingOrigin: s,
            analyticsLocations: F,
            giftRecipient: t,
            variantsReturnStyle: a.g.VARIANTS_GROUP
        })
    }, [Y.pathname, N.skuId, F, b, B, t, s, y]), q = T === M.Y.MEDIUM_SQUARE, J = i.useCallback(() => {
        if (!l || W && !q) return null;
        if (n === R.uS.WISHLIST) {
            let e = "white" === U ? O.e_ : O.Be;
            return (0, r.jsx)("div", {
                className: O.Fx,
                children: (0, r.jsx)(d.C3E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    colorClass: e
                })
            })
        }
        return n === R.uS.POPULAR ? (0, r.jsx)("div", {
            className: O.Fx,
            children: (0, r.jsx)(d.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: O.rY
            })
        }) : null
    }, [W, l, n, U, q]), $ = i.useCallback(() => {
        if (W) {
            let e = {
                items: N.bundleItems
            };
            return (0, r.jsx)("div", {
                className: O.hT,
                children: (0, r.jsx)(S.X, {
                    product: e,
                    isHighlighted: D && !w,
                    user: t
                })
            })
        }
        return (0, r.jsx)(C.A, {
            item: N,
            profileOwner: t,
            isHighlighted: D && !w,
            cardSize: T
        })
    }, [W, N, t, D, T, w]);
    return (0, r.jsx)(M.A, {
        ...j,
        cardRef: H,
        accessibleLabel: V,
        onCardClick: Z,
        buttonCTALabel: z,
        buttonIcon: Q,
        isOwned: B,
        renderItemPreview: $,
        renderSourceIcon: J,
        giftingOrigin: s,
        source: n,
        cardSize: T
    })
}