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
    g = l(245068),
    S = l(57020),
    m = l(713517),
    A = l(44120),
    E = l(976860),
    L = l(661492),
    p = l(111085),
    R = l(594832),
    _ = l(657331),
    M = l(353157),
    v = l(798048),
    x = l(652215),
    C = l(788868),
    P = l(985018),
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
        "aria-label": P.intl.string(P.t.lqaIxI)
    })
};

function T(e) {
    let {
        cardSize: t = v.Y.MEDIUM
    } = e, l = i.useRef(null), n = i.useRef(null);
    return (0, r.jsx)("div", {
        ref: l,
        className: O.kL,
        children: (0, r.jsx)("div", {
            ref: n,
            className: s()(O.Nr, O.Yf, {
                [O.IU]: t === v.Y.SMALL,
                [O.D]: t === v.Y.MEDIUM_SQUARE,
                [O.Sd]: t === v.Y.LARGE
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
        cardSize: l = v.Y.SMALL,
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
                [O.IU]: l === v.Y.SMALL
            }),
            children: (0, r.jsxs)("div", {
                className: s()(O.ho, O.jP),
                children: [a(!I && h), (0, r.jsx)("div", {
                    className: O.RF,
                    children: (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: P.intl.format(P.t.F6iMs4, {
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
        giftingOrigin: s = C.vQ.USER_PROFILE_WISHLIST,
        heartColor: U = "red",
        onWishlistItemClick: y,
        cardSize: T = v.Y.MEDIUM,
        analyticsLocations: k,
        isDragging: w = !1,
        ...j
    } = e, {
        item: N,
        isOwner: b
    } = j, {
        analyticsLocations: Y
    } = (0, h.Ay)(...k ?? []), F = (0, u.zy)(), H = i.useRef(null), {
        isHoveringOrFocusing: D
    } = (0, m.A)(H), [G] = (0, o.yK)([p.A], () => [p.A.hasSentGift(N.skuId, t.id)], [N.skuId, t.id]), B = G || !0 === N.isOwned, W = null != N.bundleItems && N.bundleItems.length > 0, V = (0, L.x)(N), z = b || B ? P.intl.string(P.t.FdGl5A) : P.intl.string(P.t.ilhtIa), Q = b || B ? void 0 : d.okO, Z = i.useCallback(() => {
        let e = F.pathname.startsWith(x.BVt.COLLECTIBLES_SHOP);
        if (b || B) {
            let t = !b && B;
            if (e) {
                let e = I.A.getProduct(N.skuId),
                    l = I.A.getCategoryForProduct(N.skuId);
                if (null != e && null != l) {
                    t || (0, _.closeUserProfileModal)(), (0, f.t)({
                        product: e,
                        category: l,
                        shouldCheckoutWithOrbs: (0, S.A)({
                            product: e
                        }),
                        analyticsLocations: Y,
                        analyticsSource: c.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, _.closeUserProfileModal)(), (0, E.pX)(`${x.BVt.COLLECTIBLES_SHOP}#itemSkuId=${N.skuId}`)
        } else y?.(), (0, A.A)({
            skuId: N.skuId,
            isGift: !0,
            giftingOrigin: s,
            analyticsLocations: Y,
            giftRecipient: t,
            variantsReturnStyle: a.g.VARIANTS_GROUP
        })
    }, [F.pathname, N.skuId, Y, b, B, t, s, y]), q = T === v.Y.MEDIUM_SQUARE, J = i.useCallback(() => {
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
                children: (0, r.jsx)(g.X, {
                    product: e,
                    isHighlighted: D && !w,
                    user: t
                })
            })
        }
        return (0, r.jsx)(M.A, {
            item: N,
            profileOwner: t,
            isHighlighted: D && !w,
            cardSize: T
        })
    }, [W, N, t, D, T, w]);
    return (0, r.jsx)(v.A, {
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