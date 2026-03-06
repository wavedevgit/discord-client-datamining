/** chunk id: 804870 params = (module,exports,require) **/
n.d(t, {
    Ay: () => y,
    Zu: () => C,
    uz: () => v
});
var s = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    o = n(873263),
    u = n(635358),
    d = n(311907),
    a = n(397927),
    c = n(793574),
    m = n(688810),
    I = n(590180),
    h = n(572595),
    f = n(245068),
    S = n(57020),
    g = n(713517),
    A = n(44120),
    E = n(976860),
    L = n(661492),
    R = n(111085),
    M = n(594832),
    k = n(657331),
    T = n(353157),
    j = n(798048),
    x = n(652215),
    U = n(788868),
    _ = n(985018),
    p = n(975462),
    O = n(476324);
let w = e => {
    let {
        size: t = a._3J.SIZE_80
    } = e;
    return (0, s.jsx)(a.euF, {
        className: p.RH,
        src: O,
        size: t,
        "aria-label": _.intl.string(_.t.lqaIxI)
    })
};

function C(e) {
    let {
        cardSize: t = j.Y.MEDIUM
    } = e, n = r.useRef(null), i = r.useRef(null);
    return (0, s.jsx)("div", {
        ref: n,
        className: p.kL,
        children: (0, s.jsx)("div", {
            ref: i,
            className: l()(p.Nr, p.Yf, {
                [p.IU]: t === j.Y.SMALL,
                [p.D]: t === j.Y.MEDIUM_SQUARE,
                [p.Sd]: t === j.Y.LARGE
            }),
            children: (0, s.jsx)("div", {
                className: p.ho,
                children: (0, s.jsx)("div", {
                    className: p._P,
                    children: (0, s.jsx)(w, {
                        size: a._3J.SIZE_80
                    })
                })
            })
        })
    })
}

function v(e) {
    let {
        item: t,
        cardSize: n = j.Y.SMALL,
        remainingCount: i,
        onClick: o,
        renderItemPreview: u
    } = e, d = r.useRef(null), c = r.useRef(null), {
        isHoveringOrFocusing: m
    } = (0, g.A)(c), I = !0 === t.isOwned;
    return (0, s.jsx)("div", {
        ref: d,
        className: p.kL,
        children: (0, s.jsx)(a.DUT, {
            tag: "div",
            innerRef: c,
            onClick: o,
            className: l()(p.Nr, p.xJ, {
                [p.IU]: n === j.Y.SMALL
            }),
            children: (0, s.jsxs)("div", {
                className: l()(p.ho, p.jP),
                children: [u(!I && m), (0, s.jsx)("div", {
                    className: p.RF,
                    children: (0, s.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: _.intl.format(_.t.F6iMs4, {
                            count: i
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
        showIcons: n = !1,
        source: i = M.uS.WISHLIST,
        giftingOrigin: l = U.vQ.USER_PROFILE_WISHLIST,
        heartColor: O = "red",
        onWishlistItemClick: w,
        cardSize: C = j.Y.MEDIUM,
        analyticsLocations: v,
        isDragging: y = !1,
        ...b
    } = e, {
        item: N,
        isOwner: H
    } = b, {
        analyticsLocations: F
    } = (0, m.Ay)(...v ?? []), P = (0, o.zy)(), W = r.useRef(null), {
        isHoveringOrFocusing: Y
    } = (0, g.A)(W), [D] = (0, d.yK)([R.A], () => [R.A.hasSentGift(N.skuId, t.id)], [N.skuId, t.id]), G = D || !0 === N.isOwned, z = null != N.bundleItems && N.bundleItems.length > 0, B = (0, L.x)(N), V = H || G ? _.intl.string(_.t.FdGl5A) : _.intl.string(_.t.ilhtIa), q = H || G ? void 0 : a.okO, Z = r.useCallback(() => {
        let e = P.pathname.startsWith(x.BVt.COLLECTIBLES_SHOP);
        if (H || G) {
            let t = !H && G;
            if (e) {
                let e = I.A.getProduct(N.skuId),
                    n = I.A.getCategoryForProduct(N.skuId);
                if (null != e && null != n) {
                    t || (0, k.closeUserProfileModal)(), (0, h.t)({
                        product: e,
                        category: n,
                        shouldCheckoutWithOrbs: (0, S.A)({
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
            t || (0, k.closeUserProfileModal)(), (0, E.pX)(`${x.BVt.COLLECTIBLES_SHOP}#itemSkuId=${N.skuId}`)
        } else w?.(), (0, A.A)({
            skuId: N.skuId,
            isGift: !0,
            giftingOrigin: l,
            analyticsLocations: F,
            giftRecipient: t,
            variantsReturnStyle: u.g.VARIANTS_GROUP
        })
    }, [P.pathname, N.skuId, F, H, G, t, l, w]), J = C === j.Y.MEDIUM_SQUARE, Q = r.useCallback(() => {
        if (!n || z && !J) return null;
        if (i === M.uS.WISHLIST) {
            let e = "white" === O ? p.e_ : p.Be;
            return (0, s.jsx)("div", {
                className: p.Fx,
                children: (0, s.jsx)(a.C3E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    colorClass: e
                })
            })
        }
        return i === M.uS.POPULAR ? (0, s.jsx)("div", {
            className: p.Fx,
            children: (0, s.jsx)(a.Y3C, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                colorClass: p.rY
            })
        }) : null
    }, [z, n, i, O, J]), $ = r.useCallback(() => {
        if (z) {
            let e = {
                items: N.bundleItems
            };
            return (0, s.jsx)("div", {
                className: p.hT,
                children: (0, s.jsx)(f.X, {
                    product: e,
                    isHighlighted: Y && !y,
                    user: t
                })
            })
        }
        return (0, s.jsx)(T.A, {
            item: N,
            profileOwner: t,
            isHighlighted: Y && !y,
            cardSize: C
        })
    }, [z, N, t, Y, C, y]);
    return (0, s.jsx)(j.A, {
        ...b,
        cardRef: W,
        accessibleLabel: B,
        onCardClick: Z,
        buttonCTALabel: V,
        buttonIcon: q,
        isOwned: G,
        renderItemPreview: $,
        renderSourceIcon: Q,
        giftingOrigin: l,
        source: i,
        cardSize: C
    })
}