/** chunk id: 804870, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Ay: () => w,
    Zu: () => k,
    uz: () => O
});
var r = i(627968),
    l = i(64700),
    s = i(503698),
    n = i.n(s),
    u = i(873263),
    a = i(635358),
    d = i(311907),
    o = i(397927),
    c = i(793574),
    I = i(688810),
    h = i(590180),
    S = i(572595),
    g = i(245068),
    m = i(57020),
    A = i(713517),
    f = i(44120),
    L = i(976860),
    E = i(661492),
    _ = i(111085),
    x = i(594832),
    M = i(657331),
    R = i(353157),
    U = i(798048),
    v = i(652215),
    p = i(788868),
    j = i(985018),
    T = i(975462),
    C = i(476324);
let P = e => {
    let {
        size: t = o._3J.SIZE_80
    } = e;
    return (0, r.jsx)(o.euF, {
        className: T.RH,
        src: C,
        size: t,
        "aria-label": j.intl.string(j.t.lqaIxI)
    })
};

function k(e) {
    let {
        cardSize: t = U.Y.MEDIUM
    } = e, i = l.useRef(null), s = l.useRef(null);
    return (0, r.jsx)("div", {
        ref: i,
        className: T.kL,
        children: (0, r.jsx)("div", {
            ref: s,
            className: n()(T.Nr, T.Yf, {
                [T.IU]: t === U.Y.SMALL,
                [T.D]: t === U.Y.MEDIUM_SQUARE,
                [T.Sd]: t === U.Y.LARGE
            }),
            children: (0, r.jsx)("div", {
                className: T.ho,
                children: (0, r.jsx)("div", {
                    className: T._P,
                    children: (0, r.jsx)(P, {
                        size: o._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function O(e) {
    let {
        item: t,
        cardSize: i = U.Y.SMALL,
        remainingCount: s,
        onClick: u,
        renderItemPreview: a
    } = e, d = l.useRef(null), c = l.useRef(null), {
        isHoveringOrFocusing: I
    } = (0, A.A)(c), h = !0 === t.isOwned;
    return (0, r.jsx)("div", {
        ref: d,
        className: T.kL,
        children: (0, r.jsx)(o.DUT, {
            tag: "div",
            innerRef: c,
            onClick: u,
            className: n()(T.Nr, T.xJ, {
                [T.IU]: i === U.Y.SMALL
            }),
            children: (0, r.jsxs)("div", {
                className: n()(T.ho, T.jP),
                children: [a(!h && I), (0, r.jsx)("div", {
                    className: T.RF,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: j.intl.format(j.t.F6iMs4, {
                            count: s
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
        showIcons: i = !1,
        source: s = x.uS.WISHLIST,
        giftingOrigin: n = p.vQ.USER_PROFILE_WISHLIST,
        heartColor: C = "red",
        onWishlistItemClick: P,
        cardSize: k = U.Y.MEDIUM,
        analyticsLocations: O,
        isDragging: w = !1,
        ...y
    } = e, {
        item: N,
        isOwner: H
    } = y, {
        analyticsLocations: Y
    } = (0, I.Ay)(...O ?? []), b = (0, u.zy)(), F = l.useRef(null), {
        isHoveringOrFocusing: D
    } = (0, A.A)(F), [z] = (0, d.yK)([_.A], () => [_.A.hasSentGift(N.skuId, t.id)], [N.skuId, t.id]), G = z || !0 === N.isOwned, W = null != N.bundleItems && N.bundleItems.length > 0, B = (0, E.x)(N), Q = H || G ? j.intl.string(j.t.FdGl5A) : j.intl.string(j.t.ilhtIa), V = H || G ? void 0 : o.okO, Z = l.useCallback(() => {
        let e = b.pathname.startsWith(v.BVt.COLLECTIBLES_SHOP);
        if (H || G) {
            let t = !H && G;
            if (e) {
                let e = h.A.getProduct(N.skuId),
                    i = h.A.getCategoryForProduct(N.skuId);
                if (null != e && null != i) {
                    t || (0, M.closeUserProfileModal)(), (0, S.t)({
                        product: e,
                        category: i,
                        shouldCheckoutWithOrbs: (0, m.A)({
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
            t || (0, M.closeUserProfileModal)(), (0, L.pX)(`${v.BVt.COLLECTIBLES_SHOP}#itemSkuId=${N.skuId}`)
        } else P?.(), (0, f.A)({
            skuId: N.skuId,
            isGift: !0,
            giftingOrigin: n,
            analyticsLocations: Y,
            giftRecipient: t,
            variantsReturnStyle: a.g.VARIANTS_GROUP
        })
    }, [b.pathname, N.skuId, Y, H, G, t, n, P]), J = k === U.Y.MEDIUM_SQUARE, q = l.useCallback(() => {
        if (!i || W && !J) return null;
        if (s === x.uS.WISHLIST) {
            let e = "white" === C ? T.e_ : T.Be;
            return (0, r.jsx)("div", {
                className: T.Fx,
                children: (0, r.jsx)(o.C3E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    colorClass: e
                })
            })
        }
        return s === x.uS.POPULAR ? (0, r.jsx)("div", {
            className: T.Fx,
            children: (0, r.jsx)(o.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: T.rY
            })
        }) : null
    }, [W, i, s, C, J]), $ = l.useCallback(() => {
        if (W) {
            let e = {
                items: N.bundleItems
            };
            return (0, r.jsx)("div", {
                className: T.hT,
                children: (0, r.jsx)(g.X, {
                    product: e,
                    isHighlighted: D && !w,
                    user: t
                })
            })
        }
        return (0, r.jsx)(R.A, {
            item: N,
            profileOwner: t,
            isHighlighted: D && !w,
            cardSize: k
        })
    }, [W, N, t, D, k, w]);
    return (0, r.jsx)(U.A, {
        ...y,
        cardRef: F,
        accessibleLabel: B,
        onCardClick: Z,
        buttonCTALabel: Q,
        buttonIcon: V,
        isOwned: G,
        renderItemPreview: $,
        renderSourceIcon: q,
        giftingOrigin: n,
        source: s,
        cardSize: k
    })
}