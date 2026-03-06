/** chunk id: 133583 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(777480),
    o = n(311907),
    d = n(192308),
    c = n(990078),
    u = n(397927),
    m = n(793574),
    g = n(688810),
    x = n(979286),
    f = n(871123),
    p = n(690946),
    h = n(898616),
    _ = n(44724),
    A = n(808247),
    I = n(594832),
    j = n(287809),
    v = n(183555),
    E = n(622543),
    T = n(600761),
    b = n(535089),
    N = n(128988),
    S = n(515054),
    y = n(203647),
    C = n(376932),
    R = n(383430),
    k = n(300131),
    L = n(518477),
    O = n(188275),
    w = n(985018),
    D = n(376721);

function P(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        handleOpenShop: n,
        handleOpenGameShop: l
    } = e;
    return t ? (0, i.jsx)(R.A, {
        title: w.intl.string(w.t["i/yzHs"]),
        handleOpenCollectiblesShop: n,
        handleOpenGameShop: l,
        socialLayerStorefrontApplicationId: O.XR
    }) : (0, i.jsx)(u.Button, {
        variant: "secondary",
        size: "sm",
        icon: u.U1X,
        text: w.intl.string(w.t["i/yzHs"]),
        onClick: n
    })
}

function G(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: s,
        socialLayerStorefrontApplicationId: r
    } = e;
    return (0, i.jsxs)("div", {
        className: D.$s,
        children: [t ? (0, i.jsx)(R.A, {
            title: w.intl.string(w.t.SDUwM0),
            handleOpenCollectiblesShop: l,
            handleOpenGameShop: a,
            socialLayerStorefrontApplicationId: r
        }) : (0, i.jsx)(u.Button, {
            variant: "secondary",
            size: "sm",
            icon: u.j96,
            text: w.intl.string(w.t.SDUwM0),
            onClick: l
        }), (0, i.jsx)(k.A, {
            isOwner: !0,
            isWishlistPublic: n,
            onToggleVisibility: s
        })]
    })
}

function M(e) {
    let {
        isOwner: t,
        socialLayerStorefrontApplicationId: n,
        isEligibleForSocialLayerMarketingInWishlist: l,
        handleOpenShop: a,
        handleOpenGameShop: s,
        handleOpenGameShopMouseDown: r
    } = e;
    return (0, i.jsxs)("div", {
        className: D.y7,
        children: [(0, i.jsxs)("div", {
            className: D.q6,
            children: [(0, i.jsx)(u.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: w.intl.string(w.t.HGnLLT)
            }), (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: w.intl.string(w.t["/X1ny6"])
            })]
        }), (0, i.jsxs)(u.ButtonGroup, {
            size: "sm",
            children: [t && (0, i.jsx)(u.Button, {
                variant: "primary",
                size: "sm",
                icon: u.U1X,
                text: w.intl.string(w.t.ZbS4QB),
                onClick: a
            }), l && (0, i.jsx)(u.Button, {
                variant: "primary",
                size: "sm",
                icon: u.U1X,
                text: n === O.XR ? w.intl.string(w.t["kq/75v"]) : w.intl.string(w.t.apFNLU),
                onMouseDown: r,
                onClick: s
            })]
        })]
    })
}

function U(e) {
    let {
        isOwner: t,
        profileOwner: n,
        wishlist: a,
        socialLayerStorefrontApplicationId: s,
        isEligibleForSocialLayerMarketingInWishlist: d,
        handleOpenShop: m,
        handleOpenGameShop: g
    } = e, x = a.id, f = (0, o.bG)([E.A], () => E.A.getWishlistSettings(n.id, x)), {
        trackUserProfileWishlistAction: p
    } = (0, v.NJ)(), h = !1 === n.nsfwAllowed, [_, I] = l.useState(!0);
    l.useEffect(() => {
        f?.visibility != null && I(f.visibility === r.a.PUBLIC)
    }, [f?.visibility]);
    let j = l.useCallback(e => {
            let {
                wishlistId: t,
                action: n,
                productLines: i
            } = e;
            null != t && p({
                wishlistId: t,
                action: n,
                productLines: i
            })
        }, [p]),
        T = (0, b.A)({
            wishlistId: x,
            onAction: j,
            productLines: a?.getProductLines() ?? null
        }),
        N = l.useCallback(() => {
            if (null == x) return;
            let e = _ ? r.a.PRIVATE : r.a.PUBLIC;
            I(!_), A.A.updateWishlistVisibility(x, e), p({
                wishlistId: x,
                action: _ ? L.Mq.WISHLIST_TOGGLE_PRIVATE : L.Mq.WISHLIST_TOGGLE_PUBLIC,
                productLines: a?.getProductLines()
            })
        }, [x, _, p, a]);
    return (0, i.jsxs)("div", {
        ref: T,
        className: D.U1,
        children: [(0, i.jsxs)("div", {
            className: D.Us,
            children: [(0, i.jsx)(u.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: w.intl.format(w.t.r6Y1Lg, {
                    count: a.items.length
                })
            }), !_ && (0, i.jsx)(c.m, {
                text: w.intl.string(w.t.RX7D9h),
                asContainer: !0,
                children: (0, i.jsx)(u.vN3, {
                    children: (0, i.jsx)("div", {
                        role: "tooltip",
                        tabIndex: 0,
                        children: (0, i.jsx)(u.G3N, {
                            size: "custom",
                            width: 16,
                            height: 16
                        })
                    })
                })
            }), _ && h && (0, i.jsx)(c.m, {
                text: w.intl.string(w.t.d78ChW),
                asContainer: !0,
                children: (0, i.jsx)(u.vN3, {
                    children: (0, i.jsx)("div", {
                        role: "tooltip",
                        tabIndex: 0,
                        children: (0, i.jsx)(u.mir, {
                            size: "custom",
                            width: 16,
                            height: 16
                        })
                    })
                })
            })]
        }), t ? (0, i.jsx)(G, {
            isSocialLayerStorefrontEnabled: d,
            isWishlistPublic: _,
            handleOpenShop: m,
            handleOpenGameShop: g,
            handleToggleWishlistVisibility: N,
            socialLayerStorefrontApplicationId: s
        }) : (0, i.jsx)(P, {
            isSocialLayerStorefrontEnabled: d,
            handleOpenShop: m,
            handleOpenGameShop: g
        })]
    })
}

function F(e) {
    let {
        profileOwner: t
    } = e, n = l.useRef(null);
    (0, T.i)({
        containerRef: n,
        itemType: "WISHLIST_ITEM"
    });
    let {
        wishlistId: a,
        currentUser: r
    } = (0, o.cf)([E.A, j.default], () => ({
        wishlistId: E.A.getFirstWishlistId(t.id),
        currentUser: j.default.getCurrentUser()
    })), {
        analyticsLocations: c
    } = (0, g.Ay)(), u = r?.id === t.id, A = O.XR, {
        wishlist: v,
        wasFetched: b,
        error: R
    } = (0, I.fw)({
        wishlistId: a,
        userId: t.id
    }), k = (0, h.A)({
        wishlist: v,
        profileOwner: t,
        currentUser: r
    }), L = (0, p.X)({
        location: "user-profile-modal-v2-wishlist"
    }), w = u && k && L, P = l.useCallback(() => {
        (0, d.closeAllModals)(), (0, x.Cz)({
            analyticsLocations: c,
            analyticsSource: m.A.USER_PROFILE_WISHLIST
        })
    }, [c]), G = l.useCallback(() => {
        (0, _.X)({
            guildId: (0, f.zf)()
        })
    }, []), F = l.useCallback(() => {
        (0, d.closeAllModals)(), (0, _.default)({
            guildId: (0, f.zf)()
        })
    }, []);
    if (null != R) return null;
    let W = null == v || 0 === v.items.length;
    return (0, i.jsxs)(S.K, {
        scrollerRef: n,
        className: s()({
            [D.XG]: !W
        }),
        fade: !0,
        children: [W ? (0, i.jsx)(M, {
            isOwner: u,
            socialLayerStorefrontApplicationId: A,
            isEligibleForSocialLayerMarketingInWishlist: k,
            handleOpenShop: P,
            handleOpenGameShop: F,
            handleOpenGameShopMouseDown: G
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(N.A, {
                scrollerRef: n
            }), (0, i.jsx)(U, {
                isOwner: u,
                profileOwner: t,
                wishlist: v,
                socialLayerStorefrontApplicationId: A,
                isEligibleForSocialLayerMarketingInWishlist: k,
                handleOpenShop: P,
                handleOpenGameShop: F
            }), (0, i.jsx)(y.A, {
                items: v.items,
                profileOwner: t,
                isOwner: u
            })]
        }), w && (0, i.jsx)(C.A, {
            user: t,
            wishlist: v,
            hasFetchedWishlist: b,
            analyticsLocations: c,
            className: W ? D._E : D.HZ
        })]
    })
}