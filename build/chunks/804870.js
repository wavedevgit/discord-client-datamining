/** chunk id: 804870 params = (module,exports,require) **/
n.d(t, {
    Ay: () => w,
    Zu: () => v,
    uz: () => j
});
var s = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(873263),
    u = n(311907),
    a = n(397927),
    d = n(793574),
    c = n(688810),
    h = n(590180),
    m = n(572595),
    I = n(245068),
    f = n(57020),
    S = n(713517),
    A = n(44120),
    g = n(976860),
    E = n(661492),
    L = n(111085),
    M = n(594832),
    R = n(657331),
    _ = n(353157),
    C = n(798048),
    p = n(652215),
    U = n(788868),
    T = n(985018),
    k = n(752276),
    x = n(476324);
let O = e => {
    let {
        size: t = a._3J.SIZE_80
    } = e;
    return (0, s.jsx)(a.euF, {
        className: k.RH,
        src: x,
        size: t,
        "aria-label": T.intl.string(T.t.lqaIxI)
    })
};

function v(e) {
    let {
        cardSize: t = C.Y.MEDIUM
    } = e, n = i.useRef(null), l = i.useRef(null);
    return (0, s.jsx)("div", {
        ref: n,
        className: k.kL,
        children: (0, s.jsx)("div", {
            ref: l,
            className: r()(k.Nr, k.Yf, {
                [k.IU]: t === C.Y.SMALL,
                [k.D]: t === C.Y.MEDIUM_SQUARE,
                [k.Sd]: t === C.Y.LARGE
            }),
            children: (0, s.jsx)("div", {
                className: k.ho,
                children: (0, s.jsx)("div", {
                    className: k._P,
                    children: (0, s.jsx)(O, {
                        size: a._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function j(e) {
    let {
        item: t,
        cardSize: n = C.Y.SMALL,
        remainingCount: l,
        onClick: o,
        renderItemPreview: u
    } = e, d = i.useRef(null), c = i.useRef(null), {
        isHoveringOrFocusing: h
    } = (0, S.A)(c), m = !0 === t.isOwned;
    return (0, s.jsx)("div", {
        ref: d,
        className: k.kL,
        children: (0, s.jsx)(a.DUT, {
            tag: "div",
            innerRef: c,
            onClick: o,
            className: r()(k.Nr, k.xJ, {
                [k.IU]: n === C.Y.SMALL
            }),
            children: (0, s.jsxs)("div", {
                className: r()(k.ho, k.jP),
                children: [u(!m && h), (0, s.jsx)("div", {
                    className: k.RF,
                    children: (0, s.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: T.intl.format(T.t.F6iMs4, {
                            count: l
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
        showIcons: n = !1,
        source: l = M.uS.WISHLIST,
        giftingOrigin: r = U.vQ.USER_PROFILE_WISHLIST,
        heartColor: x = "red",
        onWishlistItemClick: O,
        cardSize: v = C.Y.MEDIUM,
        analyticsLocations: j,
        isDragging: w = !1,
        ...y
    } = e, {
        item: N,
        isOwner: b
    } = y, {
        analyticsLocations: P
    } = (0, c.Ay)(...j ?? []), F = (0, o.zy)(), H = i.useRef(null), {
        isHoveringOrFocusing: Y
    } = (0, S.A)(H), [D] = (0, u.yK)([L.A], () => [L.A.hasSentGift(N.skuId, t.id)], [N.skuId, t.id]), W = D || !0 === N.isOwned, z = null != N.bundleItems && N.bundleItems.length > 0, B = (0, E.x)(N), G = b || W ? T.intl.string(T.t.FdGl5A) : T.intl.string(T.t.ilhtIa), V = b || W ? void 0 : a.okO, q = i.useCallback(() => {
        let e = F.pathname.startsWith(p.BVt.COLLECTIBLES_SHOP);
        if (b || W) {
            let t = !b && W;
            if (e) {
                let e = h.A.getProduct(N.skuId),
                    n = h.A.getCategoryForProduct(N.skuId);
                if (null != e && null != n) {
                    t || (0, R.closeUserProfileModal)(), (0, m.t)({
                        product: e,
                        category: n,
                        shouldCheckoutWithOrbs: (0, f.A)({
                            product: e
                        }),
                        analyticsLocations: P,
                        analyticsSource: d.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, R.closeUserProfileModal)(), (0, g.pX)(`${p.BVt.COLLECTIBLES_SHOP}#itemSkuId=${N.skuId}`)
        } else O?.(), (0, A.A)({
            skuId: N.skuId,
            isGift: !0,
            giftingOrigin: r,
            analyticsLocations: P,
            giftRecipient: t
        })
    }, [F.pathname, N.skuId, P, b, W, t, r, O]), Q = v === C.Y.MEDIUM_SQUARE, Z = i.useCallback(() => {
        if (!n || z && !Q) return null;
        if (l === M.uS.WISHLIST) {
            let e = "white" === x ? k.e_ : k.Be;
            return (0, s.jsx)("div", {
                className: k.Fx,
                children: (0, s.jsx)(a.C3E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    colorClass: e
                })
            })
        }
        return l === M.uS.POPULAR ? (0, s.jsx)("div", {
            className: k.Fx,
            children: (0, s.jsx)(a.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: k.rY
            })
        }) : null
    }, [z, n, l, x, Q]), J = i.useCallback(() => {
        if (z) {
            let e = {
                items: N.bundleItems
            };
            return (0, s.jsx)("div", {
                className: k.hT,
                children: (0, s.jsx)(I.X, {
                    product: e,
                    isHighlighted: Y && !w,
                    user: t
                })
            })
        }
        return (0, s.jsx)(_.A, {
            item: N,
            profileOwner: t,
            isHighlighted: Y && !w,
            cardSize: v
        })
    }, [z, N, t, Y, v, w]);
    return (0, s.jsx)(C.A, {
        ...y,
        cardRef: H,
        accessibleLabel: B,
        onCardClick: q,
        buttonCTALabel: G,
        buttonIcon: V,
        isOwned: W,
        renderItemPreview: J,
        renderSourceIcon: Z,
        giftingOrigin: r,
        source: l,
        cardSize: v
    })
}