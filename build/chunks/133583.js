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
    d = n(192308),
    c = n(397927),
    u = n(793574),
    g = n(688810),
    m = n(429913),
    x = n(979286),
    p = n(832163),
    f = n(690946),
    h = n(898616),
    _ = n(44724),
    A = n(808247),
    I = n(178213),
    j = n(909536),
    v = n(594832),
    T = n(287809),
    E = n(183555),
    b = n(622543),
    N = n(600761),
    S = n(535089),
    y = n(128988),
    C = n(515054),
    R = n(203647),
    k = n(376932),
    O = n(383430),
    w = n(300131),
    L = n(518477),
    P = n(788868),
    D = n(985018),
    G = n(426158);

function M(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        handleOpenShop: n,
        handleOpenGameShop: a
    } = e;
    return t.length > 0 ? (0, i.jsx)(O.A, {
        title: D.intl.string(D.t["i/yzHs"]),
        handleOpenCollectiblesShop: n,
        handleOpenGameShop: a,
        socialLayerStorefrontApplicationIds: t
    }) : (0, i.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        icon: c.U1X,
        text: D.intl.string(D.t["i/yzHs"]),
        onClick: n
    })
}

function U(e) {
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
        children: [t.length > 0 || null != s ? (0, i.jsx)(O.A, {
            title: D.intl.string(D.t.SDUwM0),
            handleOpenCollectiblesShop: a,
            handleOpenGameShop: t.length > 0 ? l : void 0,
            handleAddNitroToWishlist: s,
            socialLayerStorefrontApplicationIds: t
        }) : (0, i.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            icon: c.j96,
            text: D.intl.string(D.t.SDUwM0),
            onClick: a
        }), (0, i.jsx)(w.A, {
            isOwner: !0,
            isWishlistPublic: n,
            onToggleVisibility: r
        })]
    })
}

function F(e) {
    let {
        application: t,
        handleOpenGameShop: n,
        handleOpenGameShopMouseDown: l
    } = e, s = a.useCallback(() => {
        n(t.id)
    }, [t, n]), r = a.useCallback(() => {
        l(t.id)
    }, [t, l]);
    return (0, i.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        icon: c.U1X,
        text: D.intl.formatToPlainString(D.t["HDT/rg"], {
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
    } = e, o = (0, m.A)(n), d = a.useMemo(() => {
        if (0 === n.length) return null;
        let e = o.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
        if (1 === n.length) {
            let t = e[n[0]];
            return null == t ? null : (0, i.jsx)(F, {
                application: t,
                handleOpenGameShop: s,
                handleOpenGameShopMouseDown: r
            })
        }
        return (0, i.jsx)(O.A, {
            title: D.intl.string(D.t.FkjcWY),
            variant: "primary",
            handleOpenGameShop: s,
            socialLayerStorefrontApplicationIds: n
        })
    }, [n, s, o, r]);
    return (0, i.jsxs)("div", {
        className: G.y7,
        children: [(0, i.jsxs)("div", {
            className: G.q6,
            children: [(0, i.jsx)(c.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: D.intl.string(D.t.HGnLLT)
            }), (0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: D.intl.string(D.t["/X1ny6"])
            })]
        }), (0, i.jsxs)(c.ButtonGroup, {
            size: "sm",
            children: [t && (0, i.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                icon: c.U1X,
                text: D.intl.string(D.t.ZbS4QB),
                onClick: l
            }), d]
        })]
    })
}

function H(e) {
    let {
        isOwner: t,
        profileOwner: n,
        wishlist: l,
        socialLayerStorefrontApplicationIds: s,
        handleOpenShop: d,
        handleOpenGameShop: u,
        handleAddNitroToWishlist: g
    } = e, m = l.id, x = (0, o.bG)([b.A], () => b.A.getWishlistSettings(n.id, m)), {
        trackUserProfileWishlistAction: p
    } = (0, E.NJ)(), f = !1 === n.nsfwAllowed, [h, _] = a.useState(!0);
    a.useEffect(() => {
        x?.visibility != null && _(x.visibility === r.a.PUBLIC)
    }, [x?.visibility]);
    let I = a.useCallback(e => {
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
        j = (0, S.A)({
            wishlistId: m,
            onAction: I,
            productLines: l?.getProductLines() ?? null
        }),
        v = a.useCallback(() => {
            if (null == m) return;
            let e = h ? r.a.PRIVATE : r.a.PUBLIC;
            _(!h), A.A.updateWishlistVisibility(m, e), p({
                wishlistId: m,
                action: h ? L.Mq.WISHLIST_TOGGLE_PRIVATE : L.Mq.WISHLIST_TOGGLE_PUBLIC,
                productLines: l?.getProductLines()
            })
        }, [m, h, p, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [!h && (0, i.jsxs)("div", {
            className: G.lm,
            children: [(0, i.jsx)(c.G3N, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: D.intl.string(D.t.RX7D9h)
            })]
        }), h && f && (0, i.jsxs)("div", {
            className: G.lm,
            children: [(0, i.jsx)(c.mir, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: D.intl.string(D.t.d78ChW)
            })]
        }), (0, i.jsxs)("div", {
            ref: j,
            className: G.U1,
            children: [(0, i.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: D.intl.format(D.t.r6Y1Lg, {
                    count: l.items.length
                })
            }), t ? (0, i.jsx)(U, {
                socialLayerStorefrontApplicationIds: s,
                isWishlistPublic: h,
                handleOpenShop: d,
                handleOpenGameShop: u,
                handleAddNitroToWishlist: g,
                handleToggleWishlistVisibility: v
            }) : (0, i.jsx)(M, {
                socialLayerStorefrontApplicationIds: s,
                handleOpenShop: d,
                handleOpenGameShop: u
            })]
        })]
    })
}

function B(e) {
    let {
        profileOwner: t
    } = e, n = a.useRef(null);
    (0, N.i)({
        containerRef: n,
        itemType: "WISHLIST_ITEM"
    });
    let {
        wishlistId: l,
        currentUser: r
    } = (0, o.cf)([b.A, T.default], () => ({
        wishlistId: b.A.getFirstWishlistId(t.id),
        currentUser: T.default.getCurrentUser()
    })), {
        analyticsLocations: m
    } = (0, g.Ay)(), E = r?.id === t.id, {
        wishlist: S,
        wasFetched: O,
        error: w
    } = (0, v.fw)({
        wishlistId: l,
        userId: t.id
    }), L = (0, h.A)({
        wishlist: S,
        profileOwner: t,
        currentUser: r
    }), M = (0, f.X)({
        location: "user-profile-modal-v2-wishlist"
    }), U = (0, I.GG)("user-profile-modal-v2-wishlist"), F = (0, j.Gh)("user-profile-modal-v2-wishlist"), B = E && (M && L.length > 0 || U), X = a.useCallback(() => {
        (0, d.closeAllModals)(), (0, x.Cz)({
            analyticsLocations: m,
            analyticsSource: u.A.USER_PROFILE_WISHLIST
        })
    }, [m]), V = a.useCallback(e => {
        let t = p.A.getGuildIdFromApplicationId(e);
        null != t && (0, _.X)({
            guildId: t
        })
    }, []), z = a.useCallback(e => {
        let t = p.A.getGuildIdFromApplicationId(e);
        null != t && ((0, d.closeAllModals)(), (0, _.default)({
            guildId: t
        }))
    }, []), Y = a.useCallback(async () => {
        try {
            await A.A.addSkuToWishlist(P.pe.TIER_2, m)
        } catch {
            (0, c.showToast)((0, c.createToast)(D.intl.string(D.t.F8FvUy), c.ToastType.FAILURE)), c.ORC.announce(D.intl.string(D.t.F8FvUy))
        }
    }, [m]), K = S?.items ?? [];
    if (null != w) return null;
    let q = null == S || 0 === K.length;
    return (0, i.jsxs)(C.K, {
        scrollerRef: n,
        className: s()({
            [G.XG]: !q
        }),
        fade: !0,
        children: [q ? (0, i.jsx)(W, {
            isOwner: E,
            socialLayerStorefrontApplicationIds: L,
            handleOpenShop: X,
            handleOpenGameShop: z,
            handleOpenGameShopMouseDown: V
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(y.A, {
                scrollerRef: n
            }), (0, i.jsx)(H, {
                isOwner: E,
                profileOwner: t,
                wishlist: S,
                socialLayerStorefrontApplicationIds: L,
                handleOpenShop: X,
                handleOpenGameShop: z,
                handleAddNitroToWishlist: F && !S.hasSkuId(P.pe.TIER_2) ? Y : void 0
            }), (0, i.jsx)(R.A, {
                items: K,
                profileOwner: t,
                isOwner: E
            })]
        }), B && (0, i.jsx)(k.A, {
            user: t,
            wishlist: S,
            applicationIds: L,
            hasFetchedWishlist: O,
            analyticsLocations: m,
            className: q ? G._E : G.HZ
        })]
    })
}