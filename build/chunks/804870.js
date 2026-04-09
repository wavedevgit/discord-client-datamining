/** chunk id: 804870 params = (module,exports,require) **/
i.d(t, {
    Ay: () => T,
    Zu: () => y,
    uz: () => P
});
var r = i(627968),
    l = i(64700),
    n = i(503698),
    s = i.n(n),
    u = i(873263),
    o = i(311907),
    a = i(397927),
    d = i(793574),
    c = i(688810),
    I = i(590180),
    h = i(572595),
    g = i(245068),
    S = i(57020),
    m = i(713517),
    A = i(44120),
    f = i(976860),
    E = i(661492),
    C = i(111085),
    L = i(594832),
    p = i(657331),
    _ = i(353157),
    v = i(798048),
    M = i(652215),
    x = i(788868),
    O = i(985018),
    R = i(734518),
    k = i(476324);
let U = e => {
    let {
        size: t = a._3J.SIZE_80
    } = e;
    return (0, r.jsx)(a.euF, {
        className: R.RH,
        src: k,
        size: t,
        "aria-label": O.intl.string(O.t.lqaIxI)
    })
};

function y(e) {
    let {
        cardSize: t = v.Y.MEDIUM
    } = e, i = l.useRef(null), n = l.useRef(null);
    return (0, r.jsx)("div", {
        ref: i,
        className: R.kL,
        children: (0, r.jsx)("div", {
            ref: n,
            className: s()(R.Nr, R.Yf, {
                [R.IU]: t === v.Y.SMALL,
                [R.D]: t === v.Y.MEDIUM_SQUARE,
                [R.Sd]: t === v.Y.LARGE
            }),
            children: (0, r.jsx)("div", {
                className: R.ho,
                children: (0, r.jsx)("div", {
                    className: R._P,
                    children: (0, r.jsx)(U, {
                        size: a._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function P(e) {
    let {
        item: t,
        cardSize: i = v.Y.SMALL,
        remainingCount: n,
        onClick: u,
        renderItemPreview: o
    } = e, d = l.useRef(null), c = l.useRef(null), {
        isHoveringOrFocusing: I
    } = (0, m.A)(c), h = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: d,
        className: R.kL,
        children: (0, r.jsx)(a.DUT, {
            tag: "div",
            innerRef: c,
            onClick: u,
            className: s()(R.Nr, R.xJ, {
                [R.IU]: i === v.Y.SMALL
            }),
            children: (0, r.jsxs)("div", {
                className: s()(R.ho, R.jP),
                children: [o(!h && I), (0, r.jsx)("div", {
                    className: R.RF,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: O.intl.format(O.t.F6iMs4, {
                            count: n
                        })
                    })
                })]
            })
        })
    })
}

function T(e) {
    let {
        profileOwner: t,
        showIcons: i = !1,
        source: n = L.uS.WISHLIST,
        giftingOrigin: s = x.vQ.USER_PROFILE_WISHLIST,
        heartColor: k = "red",
        onWishlistItemClick: U,
        cardSize: y = v.Y.MEDIUM,
        analyticsLocations: P,
        isDragging: T = !1,
        ...w
    } = e, {
        item: j,
        isOwner: b
    } = w, {
        analyticsLocations: N
    } = (0, c.Ay)(...P ?? []), H = (0, u.zy)(), Y = l.useRef(null), {
        isHoveringOrFocusing: F
    } = (0, m.A)(Y), [D] = (0, o.yK)([C.A], () => [C.A.hasSentGift(j.skuId, t.id)], [j.skuId, t.id]), z = D || !0 === j.isOwned, B = null != j.bundleItems && j.bundleItems.length > 0, G = (0, E.x2)(j), W = b || z ? O.intl.string(O.t.FdGl5A) : O.intl.string(O.t.ilhtIa), V = b || z ? void 0 : a.okO, Q = l.useCallback(() => {
        let e = H.pathname.startsWith(M.BVt.COLLECTIBLES_SHOP);
        if (b || z) {
            let t = !b && z;
            if (e) {
                let e = I.A.getProduct(j.skuId),
                    i = I.A.getCategoryForProduct(j.skuId);
                if (null != e && null != i) {
                    t || (0, p.closeUserProfileModal)(), (0, h.t)({
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
            t || (0, p.closeUserProfileModal)(), (0, f.pX)(`${M.BVt.COLLECTIBLES_SHOP}#itemSkuId=${j.skuId}`)
        } else U?.(), (0, A.A)({
            skuId: j.skuId,
            isGift: !0,
            giftingOrigin: s,
            analyticsLocations: N,
            giftRecipient: t
        })
    }, [H.pathname, j.skuId, N, b, z, t, s, U]), Z = y === v.Y.MEDIUM_SQUARE, q = l.useCallback(() => {
        if (!i || B && !Z) return null;
        if (n === L.uS.WISHLIST) {
            let e = "white" === k ? R.e_ : R.Be;
            return (0, r.jsx)("div", {
                className: R.Fx,
                children: (0, r.jsx)(a.C3E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    colorClass: e
                })
            })
        }
        return n === L.uS.POPULAR ? (0, r.jsx)("div", {
            className: R.Fx,
            children: (0, r.jsx)(a.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: R.rY
            })
        }) : null
    }, [B, i, n, k, Z]), J = l.useCallback(() => {
        if (B) {
            let e = {
                items: j.bundleItems
            };
            return (0, r.jsx)("div", {
                className: R.hT,
                children: (0, r.jsx)(g.X, {
                    product: e,
                    isHighlighted: F && !T,
                    user: t
                })
            })
        }
        return (0, r.jsx)(_.A, {
            item: j,
            profileOwner: t,
            isHighlighted: F && !T,
            cardSize: y
        })
    }, [B, j, t, F, y, T]);
    return (0, r.jsx)(v.A, {
        ...w,
        cardRef: Y,
        accessibleLabel: G,
        onCardClick: Q,
        buttonCTALabel: W,
        buttonIcon: V,
        isOwned: z,
        renderItemPreview: J,
        renderSourceIcon: q,
        giftingOrigin: s,
        source: n,
        cardSize: y
    })
}