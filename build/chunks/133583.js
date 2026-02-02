/** chunk id: 133583, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => L
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(777480),
    a = n(311907),
    o = n(192308),
    s = n(990078),
    c = n(397927),
    u = n(793574),
    d = n(688810),
    f = n(979286),
    p = n(871123),
    g = n(690946),
    m = n(898616),
    b = n(44724),
    y = n(531755),
    O = n(808247),
    j = n(594832),
    h = n(287809),
    x = n(183555),
    v = n(622543),
    _ = n(600761),
    I = n(535089),
    w = n(128988),
    A = n(515054),
    P = n(203647),
    E = n(383430),
    S = n(300131),
    T = n(518477),
    C = n(188275),
    N = n(985018),
    k = n(39427);

function R(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        handleOpenShop: n,
        handleOpenGameShop: l
    } = e;
    return t ? (0, r.jsx)(E.A, {
        title: N.intl.string(N.t["i/yzHs"]),
        handleOpenCollectiblesShop: n,
        handleOpenGameShop: l,
        socialLayerStorefrontApplicationId: C.XR
    }) : (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        icon: c.U1X,
        text: N.intl.string(N.t["i/yzHs"]),
        onClick: n
    })
}

function D(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: i,
        handleToggleWishlistVisibility: a,
        socialLayerStorefrontApplicationId: o
    } = e;
    return (0, r.jsxs)("div", {
        className: k.$s,
        children: [t ? (0, r.jsx)(E.A, {
            title: N.intl.string(N.t.SDUwM0),
            handleOpenCollectiblesShop: l,
            handleOpenGameShop: i,
            socialLayerStorefrontApplicationId: o
        }) : (0, r.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            icon: c.j96,
            text: N.intl.string(N.t.SDUwM0),
            onClick: l
        }), (0, r.jsx)(S.A, {
            isOwner: !0,
            isWishlistPublic: n,
            onToggleVisibility: a
        })]
    })
}

function L(e) {
    var t;
    let {
        profileOwner: n
    } = e, E = l.useRef(null);
    (0, _.i)({
        containerRef: E,
        itemType: "WISHLIST_ITEM"
    });
    let {
        wishlistId: S,
        currentUser: L,
        wishlistSettings: G
    } = (0, a.cf)([v.A, h.default], () => {
        let e = v.A.getFirstWishlistId(n.id);
        return {
            wishlistId: e,
            currentUser: h.default.getCurrentUser(),
            wishlistSettings: null != e ? v.A.getWishlistSettings(n.id, e) : null
        }
    }), {
        analyticsLocations: M
    } = (0, d.Ay)(), {
        trackUserProfileWishlistAction: U
    } = (0, x.NJ)(), F = (null == L ? void 0 : L.id) === n.id, W = !1 === n.nsfwAllowed, B = C.XR, [H, X] = l.useState(!0);
    l.useEffect(() => {
        (null == G ? void 0 : G.visibility) != null && X(G.visibility === i.a.PUBLIC)
    }, [null == G ? void 0 : G.visibility]);
    let {
        wishlist: K,
        error: z
    } = (0, j.fw)({
        wishlistId: S,
        userId: n.id
    }), V = (0, m.A)({
        location: "user-profile-modal-v2-wishlist",
        wishlist: K
    }), Y = (0, g.X)({
        location: "user-profile-modal-v2-wishlist"
    }), q = V && Y, J = l.useCallback(e => {
        let {
            wishlistId: t,
            action: n,
            productLines: r
        } = e;
        null != t && U({
            wishlistId: t,
            action: n,
            productLines: r
        })
    }, [U]), Z = (0, I.A)({
        wishlistId: S,
        onAction: J,
        productLines: null != (t = null == K ? void 0 : K.getProductLines()) ? t : null
    }), Q = l.useCallback(() => {
        if (null == S) return;
        let e = H ? i.a.PRIVATE : i.a.PUBLIC;
        X(!H), O.A.updateWishlistVisibility(S, e), U({
            wishlistId: S,
            action: H ? T.Mq.WISHLIST_TOGGLE_PRIVATE : T.Mq.WISHLIST_TOGGLE_PUBLIC,
            productLines: null == K ? void 0 : K.getProductLines()
        })
    }, [S, H, U, K]), $ = l.useCallback(() => {
        (0, o.closeAllModals)(), (0, f.Cz)({
            analyticsLocations: M,
            analyticsSource: u.A.USER_PROFILE_WISHLIST
        })
    }, [M]), ee = l.useCallback(() => {
        (0, b.X)({
            guildId: (0, p.zf)()
        })
    }, []), et = l.useCallback(() => {
        (0, o.closeAllModals)(), (0, b.default)({
            guildId: (0, p.zf)()
        })
    }, []);
    return null != z ? null : null == K || 0 === K.items.length ? (0, r.jsxs)(A.K, {
        fade: !0,
        children: [(0, r.jsxs)("div", {
            className: k.y7,
            children: [(0, r.jsxs)("div", {
                className: k.q6,
                children: [(0, r.jsx)(c.Heading, {
                    variant: "heading-md/medium",
                    color: "text-strong",
                    children: N.intl.string(N.t.HGnLLT)
                }), (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: N.intl.string(N.t["/X1ny6"])
                })]
            }), (0, r.jsxs)(c.ButtonGroup, {
                size: "sm",
                children: [F && (0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    icon: c.U1X,
                    text: N.intl.string(N.t.ZbS4QB),
                    onClick: $
                }), V && (0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    icon: c.U1X,
                    text: B === C.XR ? N.intl.string(N.t["kq/75v"]) : N.intl.string(N.t.apFNLU),
                    onMouseDown: ee,
                    onClick: et
                })]
            })]
        }), q && (0, r.jsx)(y.A, {
            user: n,
            isOwner: F,
            wishlist: K,
            analyticsLocations: M,
            className: k._E
        })]
    }) : (0, r.jsxs)(A.K, {
        scrollerRef: E,
        className: k.XG,
        fade: !0,
        children: [(0, r.jsx)(w.A, {
            scrollerRef: E
        }), (0, r.jsxs)("div", {
            ref: Z,
            className: k.U1,
            children: [(0, r.jsxs)("div", {
                className: k.Us,
                children: [(0, r.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    color: "text-subtle",
                    children: N.intl.format(N.t.r6Y1Lg, {
                        count: K.items.length
                    })
                }), !H && (0, r.jsx)(s.m, {
                    text: N.intl.string(N.t.RX7D9h),
                    asContainer: !0,
                    children: (0, r.jsx)(c.vN3, {
                        children: (0, r.jsx)("div", {
                            role: "tooltip",
                            tabIndex: 0,
                            children: (0, r.jsx)(c.G3N, {
                                size: "custom",
                                width: 16,
                                height: 16
                            })
                        })
                    })
                }), H && W && (0, r.jsx)(s.m, {
                    text: N.intl.string(N.t.d78ChW),
                    asContainer: !0,
                    children: (0, r.jsx)(c.vN3, {
                        children: (0, r.jsx)("div", {
                            role: "tooltip",
                            tabIndex: 0,
                            children: (0, r.jsx)(c.mir, {
                                size: "custom",
                                width: 16,
                                height: 16
                            })
                        })
                    })
                })]
            }), F ? (0, r.jsx)(D, {
                isSocialLayerStorefrontEnabled: V,
                isWishlistPublic: H,
                handleOpenShop: $,
                handleOpenGameShop: et,
                handleToggleWishlistVisibility: Q,
                socialLayerStorefrontApplicationId: B
            }) : (0, r.jsx)(R, {
                isSocialLayerStorefrontEnabled: V,
                handleOpenShop: $,
                handleOpenGameShop: et
            })]
        }), (0, r.jsx)(P.A, {
            items: K.items,
            profileOwner: n,
            isOwner: F
        }), q && (0, r.jsx)(y.A, {
            user: n,
            isOwner: F,
            wishlist: K,
            analyticsLocations: M,
            className: k.HZ
        })]
    })
}