/** chunk id: 804870 params = (module,exports,require) **/
i.d(t, {
    Ay: () => y,
    Zu: () => O,
    uz: () => w
});
var r = i(627968),
    l = i(64700),
    n = i(503698),
    s = i.n(n),
    u = i(873263),
    a = i(311907),
    o = i(397927),
    d = i(793574),
    c = i(688810),
    h = i(590180),
    I = i(572595),
    S = i(245068),
    m = i(57020),
    A = i(713517),
    g = i(44120),
    E = i(976860),
    f = i(661492),
    L = i(111085),
    M = i(594832),
    p = i(657331),
    C = i(353157),
    _ = i(798048),
    x = i(652215),
    v = i(788868),
    U = i(985018),
    R = i(752276),
    j = i(476324);
let k = e => {
    let {
        size: t = o._3J.SIZE_80
    } = e;
    return (0, r.jsx)(o.euF, {
        className: R.RH,
        src: j,
        size: t,
        "aria-label": U.intl.string(U.t.lqaIxI)
    })
};

function O(e) {
    let {
        cardSize: t = _.Y.MEDIUM
    } = e, i = l.useRef(null), n = l.useRef(null);
    return (0, r.jsx)("div", {
        ref: i,
        className: R.kL,
        children: (0, r.jsx)("div", {
            ref: n,
            className: s()(R.Nr, R.Yf, {
                [R.IU]: t === _.Y.SMALL,
                [R.D]: t === _.Y.MEDIUM_SQUARE,
                [R.Sd]: t === _.Y.LARGE
            }),
            children: (0, r.jsx)("div", {
                className: R.ho,
                children: (0, r.jsx)("div", {
                    className: R._P,
                    children: (0, r.jsx)(k, {
                        size: o._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function w(e) {
    let {
        item: t,
        cardSize: i = _.Y.SMALL,
        remainingCount: n,
        onClick: u,
        renderItemPreview: a
    } = e, d = l.useRef(null), c = l.useRef(null), {
        isHoveringOrFocusing: h
    } = (0, A.A)(c), I = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: d,
        className: R.kL,
        children: (0, r.jsx)(o.DUT, {
            tag: "div",
            innerRef: c,
            onClick: u,
            className: s()(R.Nr, R.xJ, {
                [R.IU]: i === _.Y.SMALL
            }),
            children: (0, r.jsxs)("div", {
                className: s()(R.ho, R.jP),
                children: [a(!I && h), (0, r.jsx)("div", {
                    className: R.RF,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: U.intl.format(U.t.F6iMs4, {
                            count: n
                        })
                    })
                })]
            })
        })
    })
}

function y(e) {
    let {
        profileOwner: t,
        showIcons: i = !1,
        source: n = M.uS.WISHLIST,
        giftingOrigin: s = v.vQ.USER_PROFILE_WISHLIST,
        heartColor: j = "red",
        onWishlistItemClick: k,
        cardSize: O = _.Y.MEDIUM,
        analyticsLocations: w,
        isDragging: y = !1,
        ...T
    } = e, {
        item: P,
        isOwner: N
    } = T, {
        analyticsLocations: b
    } = (0, c.Ay)(...w ?? []), Y = (0, u.zy)(), H = l.useRef(null), {
        isHoveringOrFocusing: F
    } = (0, A.A)(H), [D] = (0, a.yK)([L.A], () => [L.A.hasSentGift(P.skuId, t.id)], [P.skuId, t.id]), z = D || !0 === P.isOwned, W = null != P.bundleItems && P.bundleItems.length > 0, G = (0, f.x)(P), B = N || z ? U.intl.string(U.t.FdGl5A) : U.intl.string(U.t.ilhtIa), Q = N || z ? void 0 : o.okO, Z = l.useCallback(() => {
        let e = Y.pathname.startsWith(x.BVt.COLLECTIBLES_SHOP);
        if (N || z) {
            let t = !N && z;
            if (e) {
                let e = h.A.getProduct(P.skuId),
                    i = h.A.getCategoryForProduct(P.skuId);
                if (null != e && null != i) {
                    t || (0, p.closeUserProfileModal)(), (0, I.t)({
                        product: e,
                        category: i,
                        shouldCheckoutWithOrbs: (0, m.A)({
                            product: e
                        }),
                        analyticsLocations: b,
                        analyticsSource: d.A.USER_PROFILE_WISHLIST,
                        returnRef: void 0,
                        tab: void 0
                    });
                    return
                }
            }
            t || (0, p.closeUserProfileModal)(), (0, E.pX)(`${x.BVt.COLLECTIBLES_SHOP}#itemSkuId=${P.skuId}`)
        } else k?.(), (0, g.A)({
            skuId: P.skuId,
            isGift: !0,
            giftingOrigin: s,
            analyticsLocations: b,
            giftRecipient: t
        })
    }, [Y.pathname, P.skuId, b, N, z, t, s, k]), V = O === _.Y.MEDIUM_SQUARE, q = l.useCallback(() => {
        if (!i || W && !V) return null;
        if (n === M.uS.WISHLIST) {
            let e = "white" === j ? R.e_ : R.Be;
            return (0, r.jsx)("div", {
                className: R.Fx,
                children: (0, r.jsx)(o.C3E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    colorClass: e
                })
            })
        }
        return n === M.uS.POPULAR ? (0, r.jsx)("div", {
            className: R.Fx,
            children: (0, r.jsx)(o.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: R.rY
            })
        }) : null
    }, [W, i, n, j, V]), J = l.useCallback(() => {
        if (W) {
            let e = {
                items: P.bundleItems
            };
            return (0, r.jsx)("div", {
                className: R.hT,
                children: (0, r.jsx)(S.X, {
                    product: e,
                    isHighlighted: F && !y,
                    user: t
                })
            })
        }
        return (0, r.jsx)(C.A, {
            item: P,
            profileOwner: t,
            isHighlighted: F && !y,
            cardSize: O
        })
    }, [W, P, t, F, O, y]);
    return (0, r.jsx)(_.A, {
        ...T,
        cardRef: H,
        accessibleLabel: G,
        onCardClick: Z,
        buttonCTALabel: B,
        buttonIcon: Q,
        isOwned: z,
        renderItemPreview: J,
        renderSourceIcon: q,
        giftingOrigin: s,
        source: n,
        cardSize: O
    })
}