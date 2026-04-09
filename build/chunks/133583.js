/** chunk id: 133583 params = (module,exports,require) **/
i.d(t, {
    A: () => Y
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(777480),
    o = i(311907),
    d = i(192308),
    c = i(397927),
    u = i(793574),
    g = i(688810),
    m = i(429913),
    h = i(979286),
    x = i(895360),
    p = i(574499),
    A = i(400669),
    f = i(832163),
    I = i(690946),
    j = i(898616),
    v = i(44724),
    S = i(808247),
    b = i(178213),
    y = i(909536),
    E = i(673843),
    T = i(594832),
    C = i(287809),
    w = i(183555),
    N = i(622543),
    R = i(600761),
    k = i(535089),
    L = i(128988),
    O = i(515054),
    _ = i(203647),
    M = i(376932),
    P = i(383430),
    G = i(300131),
    U = i(518477),
    F = i(788868),
    D = i(985018),
    W = i(426158);

function H(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        handleOpenShop: i,
        handleOpenGameShop: s
    } = e;
    return t.length > 0 ? (0, n.jsx)(P.A, {
        title: D.intl.string(D.t["i/yzHs"]),
        handleOpenCollectiblesShop: i,
        handleOpenGameShop: s,
        socialLayerStorefrontApplicationIds: t
    }) : (0, n.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        icon: c.U1X,
        text: D.intl.string(D.t["i/yzHs"]),
        onClick: i
    })
}

function B(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: i,
        handleOpenShop: s,
        handleOpenGameShop: l,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: r
    } = e;
    return (0, n.jsxs)("div", {
        className: W.$s,
        children: [t.length > 0 || null != a ? (0, n.jsx)(P.A, {
            title: D.intl.string(D.t.SDUwM0),
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: t.length > 0 ? l : void 0,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: t
        }) : (0, n.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            icon: c.j96,
            text: D.intl.string(D.t.SDUwM0),
            onClick: s
        }), (0, n.jsx)(G.A, {
            isOwner: !0,
            isWishlistPublic: i,
            onToggleVisibility: r
        })]
    })
}

function V(e) {
    let {
        application: t,
        handleOpenGameShop: i,
        handleOpenGameShopMouseDown: l
    } = e, a = s.useCallback(() => {
        i(t.id)
    }, [t, i]), r = s.useCallback(() => {
        l(t.id)
    }, [t, l]);
    return (0, n.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        icon: c.U1X,
        text: D.intl.formatToPlainString(D.t["HDT/rg"], {
            applicationName: t.name
        }),
        onClick: a,
        onMouseDown: r
    })
}

function z(e) {
    let {
        isOwner: t,
        socialLayerStorefrontApplicationIds: i,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleOpenGameShopMouseDown: r
    } = e, o = (0, m.A)(i), d = s.useMemo(() => {
        if (0 === i.length) return null;
        let e = o.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
        if (1 === i.length) {
            let t = e[i[0]];
            return null == t ? null : (0, n.jsx)(V, {
                application: t,
                handleOpenGameShop: a,
                handleOpenGameShopMouseDown: r
            })
        }
        return (0, n.jsx)(P.A, {
            title: D.intl.string(D.t.FkjcWY),
            variant: "primary",
            handleOpenGameShop: a,
            socialLayerStorefrontApplicationIds: i
        })
    }, [i, a, o, r]);
    return (0, n.jsxs)("div", {
        className: W.y7,
        children: [(0, n.jsxs)("div", {
            className: W.q6,
            children: [(0, n.jsx)(c.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: D.intl.string(D.t.HGnLLT)
            }), (0, n.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: D.intl.string(D.t["/X1ny6"])
            })]
        }), (0, n.jsxs)(c.ButtonGroup, {
            size: "sm",
            children: [t && (0, n.jsx)(c.Button, {
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
        profileOwner: i,
        wishlist: l,
        socialLayerStorefrontApplicationIds: a,
        handleOpenShop: d,
        handleOpenGameShop: u,
        handleAddNitroToWishlist: g
    } = e, m = l.id, h = (0, o.bG)([N.A], () => N.A.getWishlistSettings(i.id, m)), {
        trackUserProfileWishlistAction: x
    } = (0, w.NJ)(), p = !1 === i.nsfwAllowed, [A, f] = s.useState(!0);
    s.useEffect(() => {
        h?.visibility != null && f(h.visibility === r.a.PUBLIC)
    }, [h?.visibility]);
    let I = s.useCallback(e => {
            let {
                wishlistId: t,
                action: i,
                productLines: n
            } = e;
            null != t && x({
                wishlistId: t,
                action: i,
                productLines: n
            })
        }, [x]),
        j = (0, k.A)({
            wishlistId: m,
            onAction: I,
            productLines: l?.getProductLines() ?? null
        }),
        v = s.useCallback(() => {
            if (null == m) return;
            let e = A ? r.a.PRIVATE : r.a.PUBLIC;
            f(!A), S.A.updateWishlistVisibility(m, e), x({
                wishlistId: m,
                action: A ? U.Mq.WISHLIST_TOGGLE_PRIVATE : U.Mq.WISHLIST_TOGGLE_PUBLIC,
                productLines: l?.getProductLines()
            })
        }, [m, A, x, l]);
    return (0, n.jsxs)(n.Fragment, {
        children: [!A && (0, n.jsxs)("div", {
            className: W.lm,
            children: [(0, n.jsx)(c.G3N, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, n.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: D.intl.string(D.t.RX7D9h)
            })]
        }), A && p && (0, n.jsxs)("div", {
            className: W.lm,
            children: [(0, n.jsx)(c.mir, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, n.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: D.intl.string(D.t.d78ChW)
            })]
        }), (0, n.jsxs)("div", {
            ref: j,
            className: W.U1,
            children: [(0, n.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: D.intl.format(D.t.r6Y1Lg, {
                    count: l.items.length
                })
            }), t ? (0, n.jsx)(B, {
                socialLayerStorefrontApplicationIds: a,
                isWishlistPublic: A,
                handleOpenShop: d,
                handleOpenGameShop: u,
                handleAddNitroToWishlist: g,
                handleToggleWishlistVisibility: v
            }) : (0, n.jsx)(H, {
                socialLayerStorefrontApplicationIds: a,
                handleOpenShop: d,
                handleOpenGameShop: u
            })]
        })]
    })
}

function Y(e) {
    let {
        profileOwner: t
    } = e, i = s.useRef(null);
    (0, R.i)({
        containerRef: i,
        itemType: "WISHLIST_ITEM"
    });
    let {
        wishlistId: l,
        currentUser: r
    } = (0, o.cf)([N.A, C.default], () => ({
        wishlistId: N.A.getFirstWishlistId(t.id),
        currentUser: C.default.getCurrentUser()
    })), {
        analyticsLocations: c
    } = (0, g.Ay)(), m = r?.id === t.id, {
        wishlist: S,
        wasFetched: w,
        error: k
    } = (0, T.fw)({
        wishlistId: l,
        userId: t.id
    });
    (0, E.A)(S);
    let P = (0, j.A)({
            wishlist: S,
            profileOwner: t,
            currentUser: r
        }),
        G = (0, I.X)({
            location: "user-profile-modal-v2-wishlist"
        }),
        U = (0, b.GG)("user-profile-modal-v2-wishlist"),
        D = (0, y.Gh)("user-profile-modal-v2-wishlist"),
        H = m && (G && P.length > 0 || U),
        B = s.useCallback(() => {
            (0, d.closeAllModals)(), (0, h.Cz)({
                analyticsLocations: c,
                analyticsSource: u.A.USER_PROFILE_WISHLIST
            })
        }, [c]),
        V = s.useCallback(e => {
            let t = f.A.getGuildIdFromApplicationId(e);
            null != t && (0, v.X)({
                guildId: t
            })
        }, []),
        Y = s.useCallback(e => {
            let t = f.A.getGuildIdFromApplicationId(e);
            null != t && ((0, d.closeAllModals)(), (0, v.default)({
                guildId: t
            }))
        }, []),
        {
            handleToggle: q
        } = (0, p.c)({
            userId: r?.id,
            skuId: F.pe.TIER_2,
            nuxGraphic: D ? A.g : void 0,
            onNuxShow: x.D,
            location: u.A.USER_PROFILE_WISHLIST
        });
    if (null == r || null != k) return null;
    let Z = null == S || 0 === S.items.length;
    return (0, n.jsxs)(O.K, {
        scrollerRef: i,
        className: a()({
            [W.XG]: !Z
        }),
        fade: !0,
        children: [Z ? (0, n.jsx)(z, {
            isOwner: m,
            socialLayerStorefrontApplicationIds: P,
            handleOpenShop: B,
            handleOpenGameShop: Y,
            handleOpenGameShopMouseDown: V
        }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(L.A, {
                scrollerRef: i
            }), (0, n.jsx)(X, {
                isOwner: m,
                profileOwner: t,
                wishlist: S,
                socialLayerStorefrontApplicationIds: P,
                handleOpenShop: B,
                handleOpenGameShop: Y,
                handleAddNitroToWishlist: D && !S.hasSkuId(F.pe.TIER_2) ? q : void 0
            }), (0, n.jsx)(_.A, {
                items: S.items,
                profileOwner: t,
                isOwner: m
            })]
        }), H && (0, n.jsx)(M.A, {
            user: t,
            wishlist: S,
            applicationIds: P,
            hasFetchedWishlist: w,
            analyticsLocations: c,
            className: Z ? W._E : W.HZ
        })]
    })
}