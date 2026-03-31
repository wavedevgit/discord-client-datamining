/** chunk id: 133583 params = (module,exports,require) **/
n.d(t, {
    A: () => B
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(777480),
    o = n(311907),
    d = n(192308),
    c = n(397927),
    u = n(793574),
    g = n(688810),
    m = n(429913),
    p = n(979286),
    x = n(832163),
    f = n(690946),
    h = n(898616),
    _ = n(44724),
    A = n(808247),
    I = n(178213),
    j = n(909536),
    E = n(594832),
    v = n(287809),
    T = n(183555),
    b = n(622543),
    C = n(600761),
    S = n(535089),
    N = n(128988),
    y = n(515054),
    R = n(203647),
    O = n(376932),
    k = n(383430),
    L = n(300131),
    w = n(518477),
    P = n(788868),
    D = n(985018),
    G = n(262657);

function F(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        handleOpenShop: n,
        handleOpenGameShop: l
    } = e;
    return t.length > 0 ? (0, i.jsx)(k.A, {
        title: D.intl.string(D.t["i/yzHs"]),
        handleOpenCollectiblesShop: n,
        handleOpenGameShop: l,
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
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleAddNitroToWishlist: s,
        handleToggleWishlistVisibility: r
    } = e;
    return (0, i.jsxs)("div", {
        className: G.$s,
        children: [t.length > 0 || null != s ? (0, i.jsx)(k.A, {
            title: D.intl.string(D.t.SDUwM0),
            handleOpenCollectiblesShop: l,
            handleOpenGameShop: t.length > 0 ? a : void 0,
            handleAddNitroToWishlist: s,
            socialLayerStorefrontApplicationIds: t
        }) : (0, i.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            icon: c.j96,
            text: D.intl.string(D.t.SDUwM0),
            onClick: l
        }), (0, i.jsx)(L.A, {
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
        handleOpenGameShopMouseDown: a
    } = e, s = l.useCallback(() => {
        n(t.id)
    }, [t, n]), r = l.useCallback(() => {
        a(t.id)
    }, [t, a]);
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
        handleOpenShop: a,
        handleOpenGameShop: s,
        handleOpenGameShopMouseDown: r
    } = e, o = (0, m.A)(n), d = l.useMemo(() => {
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
        return (0, i.jsx)(k.A, {
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
                onClick: a
            }), d]
        })]
    })
}

function H(e) {
    let {
        isOwner: t,
        profileOwner: n,
        wishlist: a,
        socialLayerStorefrontApplicationIds: s,
        handleOpenShop: d,
        handleOpenGameShop: u,
        handleAddNitroToWishlist: g
    } = e, m = a.id, p = (0, o.bG)([b.A], () => b.A.getWishlistSettings(n.id, m)), {
        trackUserProfileWishlistAction: x
    } = (0, T.NJ)(), f = !1 === n.nsfwAllowed, [h, _] = l.useState(!0);
    l.useEffect(() => {
        p?.visibility != null && _(p.visibility === r.a.PUBLIC)
    }, [p?.visibility]);
    let I = l.useCallback(e => {
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
        j = (0, S.A)({
            wishlistId: m,
            onAction: I,
            productLines: a?.getProductLines() ?? null
        }),
        E = l.useCallback(() => {
            if (null == m) return;
            let e = h ? r.a.PRIVATE : r.a.PUBLIC;
            _(!h), A.A.updateWishlistVisibility(m, e), x({
                wishlistId: m,
                action: h ? w.Mq.WISHLIST_TOGGLE_PRIVATE : w.Mq.WISHLIST_TOGGLE_PUBLIC,
                productLines: a?.getProductLines()
            })
        }, [m, h, x, a]);
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
                    count: a.items.length
                })
            }), t ? (0, i.jsx)(U, {
                socialLayerStorefrontApplicationIds: s,
                isWishlistPublic: h,
                handleOpenShop: d,
                handleOpenGameShop: u,
                handleAddNitroToWishlist: g,
                handleToggleWishlistVisibility: E
            }) : (0, i.jsx)(F, {
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
    } = e, n = l.useRef(null);
    (0, C.i)({
        containerRef: n,
        itemType: "WISHLIST_ITEM"
    });
    let {
        wishlistId: a,
        currentUser: r
    } = (0, o.cf)([b.A, v.default], () => ({
        wishlistId: b.A.getFirstWishlistId(t.id),
        currentUser: v.default.getCurrentUser()
    })), {
        analyticsLocations: m
    } = (0, g.Ay)(), T = r?.id === t.id, {
        wishlist: S,
        wasFetched: k,
        error: L
    } = (0, E.fw)({
        wishlistId: a,
        userId: t.id
    }), w = (0, h.A)({
        wishlist: S,
        profileOwner: t,
        currentUser: r
    }), F = (0, f.X)({
        location: "user-profile-modal-v2-wishlist"
    }), U = (0, I.GG)("user-profile-modal-v2-wishlist"), M = (0, j.Gh)("user-profile-modal-v2-wishlist"), B = T && (F && w.length > 0 || U), X = l.useCallback(() => {
        (0, d.closeAllModals)(), (0, p.Cz)({
            analyticsLocations: m,
            analyticsSource: u.A.USER_PROFILE_WISHLIST
        })
    }, [m]), V = l.useCallback(e => {
        let t = x.A.getGuildIdFromApplicationId(e);
        null != t && (0, _.X)({
            guildId: t
        })
    }, []), z = l.useCallback(e => {
        let t = x.A.getGuildIdFromApplicationId(e);
        null != t && ((0, d.closeAllModals)(), (0, _.default)({
            guildId: t
        }))
    }, []), Y = l.useCallback(async () => {
        try {
            await A.A.addSkuToWishlist(P.pe.TIER_2, m)
        } catch {
            (0, c.showToast)((0, c.createToast)(D.intl.string(D.t.F8FvUy), c.ToastType.FAILURE)), c.ORC.announce(D.intl.string(D.t.F8FvUy))
        }
    }, [m]), K = S?.items ?? [];
    if (null != L) return null;
    let q = null == S || 0 === K.length;
    return (0, i.jsxs)(y.K, {
        scrollerRef: n,
        className: s()({
            [G.XG]: !q
        }),
        fade: !0,
        children: [q ? (0, i.jsx)(W, {
            isOwner: T,
            socialLayerStorefrontApplicationIds: w,
            handleOpenShop: X,
            handleOpenGameShop: z,
            handleOpenGameShopMouseDown: V
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(N.A, {
                scrollerRef: n
            }), (0, i.jsx)(H, {
                isOwner: T,
                profileOwner: t,
                wishlist: S,
                socialLayerStorefrontApplicationIds: w,
                handleOpenShop: X,
                handleOpenGameShop: z,
                handleAddNitroToWishlist: M && !S.hasSkuId(P.pe.TIER_2) ? Y : void 0
            }), (0, i.jsx)(R.A, {
                items: K,
                profileOwner: t,
                isOwner: T
            })]
        }), B && (0, i.jsx)(O.A, {
            user: t,
            wishlist: S,
            applicationIds: w,
            hasFetchedWishlist: k,
            analyticsLocations: m,
            className: q ? G._E : G.HZ
        })]
    })
}