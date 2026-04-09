/** chunk id: 133583 params = (module,exports,require) **/
n.d(t, {
    A: () => Y
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
    h = n(979286),
    x = n(895360),
    p = n(574499),
    f = n(400669),
    A = n(832163),
    _ = n(690946),
    I = n(898616),
    j = n(44724),
    v = n(808247),
    b = n(178213),
    S = n(909536),
    y = n(673843),
    E = n(594832),
    C = n(287809),
    T = n(183555),
    w = n(622543),
    N = n(600761),
    k = n(535089),
    R = n(128988),
    L = n(515054),
    O = n(203647),
    M = n(376932),
    P = n(383430),
    G = n(300131),
    U = n(518477),
    F = n(788868),
    D = n(985018),
    W = n(262657);

function H(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        handleOpenShop: n,
        handleOpenGameShop: a
    } = e;
    return t.length > 0 ? (0, i.jsx)(P.A, {
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

function B(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: n,
        handleOpenShop: a,
        handleOpenGameShop: l,
        handleAddNitroToWishlist: s,
        handleToggleWishlistVisibility: r
    } = e;
    return (0, i.jsxs)("div", {
        className: W.$s,
        children: [t.length > 0 || null != s ? (0, i.jsx)(P.A, {
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
        }), (0, i.jsx)(G.A, {
            isOwner: !0,
            isWishlistPublic: n,
            onToggleVisibility: r
        })]
    })
}

function V(e) {
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

function z(e) {
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
            return null == t ? null : (0, i.jsx)(V, {
                application: t,
                handleOpenGameShop: s,
                handleOpenGameShopMouseDown: r
            })
        }
        return (0, i.jsx)(P.A, {
            title: D.intl.string(D.t.FkjcWY),
            variant: "primary",
            handleOpenGameShop: s,
            socialLayerStorefrontApplicationIds: n
        })
    }, [n, s, o, r]);
    return (0, i.jsxs)("div", {
        className: W.y7,
        children: [(0, i.jsxs)("div", {
            className: W.q6,
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

function X(e) {
    let {
        isOwner: t,
        profileOwner: n,
        wishlist: l,
        socialLayerStorefrontApplicationIds: s,
        handleOpenShop: d,
        handleOpenGameShop: u,
        handleAddNitroToWishlist: g
    } = e, m = l.id, h = (0, o.bG)([w.A], () => w.A.getWishlistSettings(n.id, m)), {
        trackUserProfileWishlistAction: x
    } = (0, T.NJ)(), p = !1 === n.nsfwAllowed, [f, A] = a.useState(!0);
    a.useEffect(() => {
        h?.visibility != null && A(h.visibility === r.a.PUBLIC)
    }, [h?.visibility]);
    let _ = a.useCallback(e => {
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
        I = (0, k.A)({
            wishlistId: m,
            onAction: _,
            productLines: l?.getProductLines() ?? null
        }),
        j = a.useCallback(() => {
            if (null == m) return;
            let e = f ? r.a.PRIVATE : r.a.PUBLIC;
            A(!f), v.A.updateWishlistVisibility(m, e), x({
                wishlistId: m,
                action: f ? U.Mq.WISHLIST_TOGGLE_PRIVATE : U.Mq.WISHLIST_TOGGLE_PUBLIC,
                productLines: l?.getProductLines()
            })
        }, [m, f, x, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [!f && (0, i.jsxs)("div", {
            className: W.lm,
            children: [(0, i.jsx)(c.G3N, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: D.intl.string(D.t.RX7D9h)
            })]
        }), f && p && (0, i.jsxs)("div", {
            className: W.lm,
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
            ref: I,
            className: W.U1,
            children: [(0, i.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: D.intl.format(D.t.r6Y1Lg, {
                    count: l.items.length
                })
            }), t ? (0, i.jsx)(B, {
                socialLayerStorefrontApplicationIds: s,
                isWishlistPublic: f,
                handleOpenShop: d,
                handleOpenGameShop: u,
                handleAddNitroToWishlist: g,
                handleToggleWishlistVisibility: j
            }) : (0, i.jsx)(H, {
                socialLayerStorefrontApplicationIds: s,
                handleOpenShop: d,
                handleOpenGameShop: u
            })]
        })]
    })
}

function Y(e) {
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
    } = (0, o.cf)([w.A, C.default], () => ({
        wishlistId: w.A.getFirstWishlistId(t.id),
        currentUser: C.default.getCurrentUser()
    })), {
        analyticsLocations: c
    } = (0, g.Ay)(), m = r?.id === t.id, {
        wishlist: v,
        wasFetched: T,
        error: k
    } = (0, E.fw)({
        wishlistId: l,
        userId: t.id
    });
    (0, y.A)(v);
    let P = (0, I.A)({
            wishlist: v,
            profileOwner: t,
            currentUser: r
        }),
        G = (0, _.X)({
            location: "user-profile-modal-v2-wishlist"
        }),
        U = (0, b.GG)("user-profile-modal-v2-wishlist"),
        D = (0, S.Gh)("user-profile-modal-v2-wishlist"),
        H = m && (G && P.length > 0 || U),
        B = a.useCallback(() => {
            (0, d.closeAllModals)(), (0, h.Cz)({
                analyticsLocations: c,
                analyticsSource: u.A.USER_PROFILE_WISHLIST
            })
        }, [c]),
        V = a.useCallback(e => {
            let t = A.A.getGuildIdFromApplicationId(e);
            null != t && (0, j.X)({
                guildId: t
            })
        }, []),
        Y = a.useCallback(e => {
            let t = A.A.getGuildIdFromApplicationId(e);
            null != t && ((0, d.closeAllModals)(), (0, j.default)({
                guildId: t
            }))
        }, []),
        {
            handleToggle: q
        } = (0, p.c)({
            userId: r?.id,
            skuId: F.pe.TIER_2,
            nuxGraphic: D ? f.g : void 0,
            onNuxShow: x.D,
            location: u.A.USER_PROFILE_WISHLIST
        });
    if (null == r || null != k) return null;
    let Z = null == v || 0 === v.items.length;
    return (0, i.jsxs)(L.K, {
        scrollerRef: n,
        className: s()({
            [W.XG]: !Z
        }),
        fade: !0,
        children: [Z ? (0, i.jsx)(z, {
            isOwner: m,
            socialLayerStorefrontApplicationIds: P,
            handleOpenShop: B,
            handleOpenGameShop: Y,
            handleOpenGameShopMouseDown: V
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(R.A, {
                scrollerRef: n
            }), (0, i.jsx)(X, {
                isOwner: m,
                profileOwner: t,
                wishlist: v,
                socialLayerStorefrontApplicationIds: P,
                handleOpenShop: B,
                handleOpenGameShop: Y,
                handleAddNitroToWishlist: D && !v.hasSkuId(F.pe.TIER_2) ? q : void 0
            }), (0, i.jsx)(O.A, {
                items: v.items,
                profileOwner: t,
                isOwner: m
            })]
        }), H && (0, i.jsx)(M.A, {
            user: t,
            wishlist: v,
            applicationIds: P,
            hasFetchedWishlist: T,
            analyticsLocations: c,
            className: Z ? W._E : W.HZ
        })]
    })
}