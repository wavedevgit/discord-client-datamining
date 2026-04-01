/** chunk id: 133583 params = (module,exports,require) **/
n.d(t, {
    A: () => B
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(777480),
    o = n(311907),
    c = n(192308),
    d = n(397927),
    u = n(793574),
    m = n(688810),
    g = n(429913),
    p = n(979286),
    x = n(832163),
    f = n(690946),
    _ = n(898616),
    h = n(44724),
    A = n(808247),
    I = n(178213),
    v = n(909536),
    j = n(594832),
    E = n(287809),
    T = n(183555),
    N = n(622543),
    C = n(600761),
    b = n(535089),
    S = n(128988),
    y = n(515054),
    R = n(203647),
    O = n(376932),
    w = n(383430),
    k = n(300131),
    L = n(518477),
    D = n(788868),
    P = n(985018),
    G = n(262657);

function U(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        handleOpenShop: n,
        handleOpenGameShop: a
    } = e;
    return t.length > 0 ? (0, i.jsx)(w.A, {
        title: P.intl.string(P.t["i/yzHs"]),
        handleOpenCollectiblesShop: n,
        handleOpenGameShop: a,
        socialLayerStorefrontApplicationIds: t
    }) : (0, i.jsx)(d.Button, {
        variant: "secondary",
        size: "sm",
        icon: d.U1X,
        text: P.intl.string(P.t["i/yzHs"]),
        onClick: n
    })
}

function F(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: n,
        handleOpenShop: a,
        handleOpenGameShop: l,
        handleAddNitroToWishlist: s,
        handleToggleWishlistVisibility: r
    } = e;
    return (0, i.jsxs)("div", {
        className: G.$s,
        children: [t.length > 0 || null != s ? (0, i.jsx)(w.A, {
            title: P.intl.string(P.t.SDUwM0),
            handleOpenCollectiblesShop: a,
            handleOpenGameShop: t.length > 0 ? l : void 0,
            handleAddNitroToWishlist: s,
            socialLayerStorefrontApplicationIds: t
        }) : (0, i.jsx)(d.Button, {
            variant: "secondary",
            size: "sm",
            icon: d.j96,
            text: P.intl.string(P.t.SDUwM0),
            onClick: a
        }), (0, i.jsx)(k.A, {
            isOwner: !0,
            isWishlistPublic: n,
            onToggleVisibility: r
        })]
    })
}

function M(e) {
    let {
        application: t,
        handleOpenGameShop: n,
        handleOpenGameShopMouseDown: l
    } = e, s = a.useCallback(() => {
        n(t.id)
    }, [t, n]), r = a.useCallback(() => {
        l(t.id)
    }, [t, l]);
    return (0, i.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        icon: d.U1X,
        text: P.intl.formatToPlainString(P.t["HDT/rg"], {
            applicationName: t.name
        }),
        onClick: s,
        onMouseDown: r
    })
}

function W(e) {
    let {
        isOwner: t,
        socialLayerStorefrontApplicationIds: n,
        handleOpenShop: l,
        handleOpenGameShop: s,
        handleOpenGameShopMouseDown: r
    } = e, o = (0, g.A)(n), c = a.useMemo(() => {
        if (0 === n.length) return null;
        let e = o.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
        if (1 === n.length) {
            let t = e[n[0]];
            return null == t ? null : (0, i.jsx)(M, {
                application: t,
                handleOpenGameShop: s,
                handleOpenGameShopMouseDown: r
            })
        }
        return (0, i.jsx)(w.A, {
            title: P.intl.string(P.t.FkjcWY),
            variant: "primary",
            handleOpenGameShop: s,
            socialLayerStorefrontApplicationIds: n
        })
    }, [n, s, o, r]);
    return (0, i.jsxs)("div", {
        className: G.y7,
        children: [(0, i.jsxs)("div", {
            className: G.q6,
            children: [(0, i.jsx)(d.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: P.intl.string(P.t.HGnLLT)
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: P.intl.string(P.t["/X1ny6"])
            })]
        }), (0, i.jsxs)(d.ButtonGroup, {
            size: "sm",
            children: [t && (0, i.jsx)(d.Button, {
                variant: "primary",
                size: "sm",
                icon: d.U1X,
                text: P.intl.string(P.t.ZbS4QB),
                onClick: l
            }), c]
        })]
    })
}

function H(e) {
    let {
        isOwner: t,
        profileOwner: n,
        wishlist: l,
        socialLayerStorefrontApplicationIds: s,
        handleOpenShop: c,
        handleOpenGameShop: u,
        handleAddNitroToWishlist: m
    } = e, g = l.id, p = (0, o.bG)([N.A], () => N.A.getWishlistSettings(n.id, g)), {
        trackUserProfileWishlistAction: x
    } = (0, T.NJ)(), f = !1 === n.nsfwAllowed, [_, h] = a.useState(!0);
    a.useEffect(() => {
        p?.visibility != null && h(p.visibility === r.a.PUBLIC)
    }, [p?.visibility]);
    let I = a.useCallback(e => {
            let {
                wishlistId: t,
                action: n,
                productLines: i
            } = e;
            null != t && x({
                wishlistId: t,
                action: n,
                productLines: i
            })
        }, [x]),
        v = (0, b.A)({
            wishlistId: g,
            onAction: I,
            productLines: l?.getProductLines() ?? null
        }),
        j = a.useCallback(() => {
            if (null == g) return;
            let e = _ ? r.a.PRIVATE : r.a.PUBLIC;
            h(!_), A.A.updateWishlistVisibility(g, e), x({
                wishlistId: g,
                action: _ ? L.Mq.WISHLIST_TOGGLE_PRIVATE : L.Mq.WISHLIST_TOGGLE_PUBLIC,
                productLines: l?.getProductLines()
            })
        }, [g, _, x, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [!_ && (0, i.jsxs)("div", {
            className: G.lm,
            children: [(0, i.jsx)(d.G3N, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, i.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: P.intl.string(P.t.RX7D9h)
            })]
        }), _ && f && (0, i.jsxs)("div", {
            className: G.lm,
            children: [(0, i.jsx)(d.mir, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, i.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: P.intl.string(P.t.d78ChW)
            })]
        }), (0, i.jsxs)("div", {
            ref: v,
            className: G.U1,
            children: [(0, i.jsx)(d.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: P.intl.format(P.t.r6Y1Lg, {
                    count: l.items.length
                })
            }), t ? (0, i.jsx)(F, {
                socialLayerStorefrontApplicationIds: s,
                isWishlistPublic: _,
                handleOpenShop: c,
                handleOpenGameShop: u,
                handleAddNitroToWishlist: m,
                handleToggleWishlistVisibility: j
            }) : (0, i.jsx)(U, {
                socialLayerStorefrontApplicationIds: s,
                handleOpenShop: c,
                handleOpenGameShop: u
            })]
        })]
    })
}

function B(e) {
    let {
        profileOwner: t
    } = e, n = a.useRef(null);
    (0, C.i)({
        containerRef: n,
        itemType: "WISHLIST_ITEM"
    });
    let {
        wishlistId: l,
        currentUser: r
    } = (0, o.cf)([N.A, E.default], () => ({
        wishlistId: N.A.getFirstWishlistId(t.id),
        currentUser: E.default.getCurrentUser()
    })), {
        analyticsLocations: g
    } = (0, m.Ay)(), T = r?.id === t.id, {
        wishlist: b,
        wasFetched: w,
        error: k
    } = (0, j.fw)({
        wishlistId: l,
        userId: t.id
    }), L = (0, _.A)({
        wishlist: b,
        profileOwner: t,
        currentUser: r
    }), U = (0, f.X)({
        location: "user-profile-modal-v2-wishlist"
    }), F = (0, I.GG)("user-profile-modal-v2-wishlist"), M = (0, v.Gh)("user-profile-modal-v2-wishlist"), B = T && (U && L.length > 0 || F), X = a.useCallback(() => {
        (0, c.closeAllModals)(), (0, p.Cz)({
            analyticsLocations: g,
            analyticsSource: u.A.USER_PROFILE_WISHLIST
        })
    }, [g]), V = a.useCallback(e => {
        let t = x.A.getGuildIdFromApplicationId(e);
        null != t && (0, h.X)({
            guildId: t
        })
    }, []), z = a.useCallback(e => {
        let t = x.A.getGuildIdFromApplicationId(e);
        null != t && ((0, c.closeAllModals)(), (0, h.default)({
            guildId: t
        }))
    }, []), Y = a.useCallback(async () => {
        try {
            await A.A.addSkuToWishlist(D.pe.TIER_2, g)
        } catch {
            (0, d.showToast)((0, d.createToast)(P.intl.string(P.t.F8FvUy), d.ToastType.FAILURE)), d.ORC.announce(P.intl.string(P.t.F8FvUy))
        }
    }, [g]), K = b?.items ?? [];
    if (null != k) return null;
    let q = null == b || 0 === K.length;
    return (0, i.jsxs)(y.K, {
        scrollerRef: n,
        className: s()({
            [G.XG]: !q
        }),
        fade: !0,
        children: [q ? (0, i.jsx)(W, {
            isOwner: T,
            socialLayerStorefrontApplicationIds: L,
            handleOpenShop: X,
            handleOpenGameShop: z,
            handleOpenGameShopMouseDown: V
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(S.A, {
                scrollerRef: n
            }), (0, i.jsx)(H, {
                isOwner: T,
                profileOwner: t,
                wishlist: b,
                socialLayerStorefrontApplicationIds: L,
                handleOpenShop: X,
                handleOpenGameShop: z,
                handleAddNitroToWishlist: M && !b.hasSkuId(D.pe.TIER_2) ? Y : void 0
            }), (0, i.jsx)(R.A, {
                items: K,
                profileOwner: t,
                isOwner: T
            })]
        }), B && (0, i.jsx)(O.A, {
            user: t,
            wishlist: b,
            applicationIds: L,
            hasFetchedWishlist: w,
            analyticsLocations: g,
            className: q ? G._E : G.HZ
        })]
    })
}