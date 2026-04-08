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
    x = n(979286),
    f = n(895360),
    p = n(574499),
    h = n(400669),
    _ = n(832163),
    A = n(690946),
    I = n(898616),
    j = n(44724),
    v = n(808247),
    E = n(178213),
    T = n(909536),
    b = n(673843),
    C = n(594832),
    S = n(287809),
    N = n(183555),
    y = n(622543),
    R = n(600761),
    k = n(535089),
    O = n(128988),
    w = n(515054),
    L = n(203647),
    P = n(376932),
    D = n(383430),
    G = n(300131),
    M = n(518477),
    U = n(788868),
    F = n(985018),
    W = n(262657);

function H(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        handleOpenShop: n,
        handleOpenGameShop: a
    } = e;
    return t.length > 0 ? (0, i.jsx)(D.A, {
        title: F.intl.string(F.t["i/yzHs"]),
        handleOpenCollectiblesShop: n,
        handleOpenGameShop: a,
        socialLayerStorefrontApplicationIds: t
    }) : (0, i.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        icon: c.U1X,
        text: F.intl.string(F.t["i/yzHs"]),
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
        children: [t.length > 0 || null != s ? (0, i.jsx)(D.A, {
            title: F.intl.string(F.t.SDUwM0),
            handleOpenCollectiblesShop: a,
            handleOpenGameShop: t.length > 0 ? l : void 0,
            handleAddNitroToWishlist: s,
            socialLayerStorefrontApplicationIds: t
        }) : (0, i.jsx)(c.Button, {
            variant: "secondary",
            size: "sm",
            icon: c.j96,
            text: F.intl.string(F.t.SDUwM0),
            onClick: a
        }), (0, i.jsx)(G.A, {
            isOwner: !0,
            isWishlistPublic: n,
            onToggleVisibility: r
        })]
    })
}

function X(e) {
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
        text: F.intl.formatToPlainString(F.t["HDT/rg"], {
            applicationName: t.name
        }),
        onClick: s,
        onMouseDown: r
    })
}

function V(e) {
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
            return null == t ? null : (0, i.jsx)(X, {
                application: t,
                handleOpenGameShop: s,
                handleOpenGameShopMouseDown: r
            })
        }
        return (0, i.jsx)(D.A, {
            title: F.intl.string(F.t.FkjcWY),
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
                children: F.intl.string(F.t.HGnLLT)
            }), (0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: F.intl.string(F.t["/X1ny6"])
            })]
        }), (0, i.jsxs)(c.ButtonGroup, {
            size: "sm",
            children: [t && (0, i.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                icon: c.U1X,
                text: F.intl.string(F.t.ZbS4QB),
                onClick: l
            }), d]
        })]
    })
}

function z(e) {
    let {
        isOwner: t,
        profileOwner: n,
        wishlist: l,
        socialLayerStorefrontApplicationIds: s,
        handleOpenShop: d,
        handleOpenGameShop: u,
        handleAddNitroToWishlist: g
    } = e, m = l.id, x = (0, o.bG)([y.A], () => y.A.getWishlistSettings(n.id, m)), {
        trackUserProfileWishlistAction: f
    } = (0, N.NJ)(), p = !1 === n.nsfwAllowed, [h, _] = a.useState(!0);
    a.useEffect(() => {
        x?.visibility != null && _(x.visibility === r.a.PUBLIC)
    }, [x?.visibility]);
    let A = a.useCallback(e => {
            let {
                wishlistId: t,
                action: n,
                productLines: i
            } = e;
            null != t && f({
                wishlistId: t,
                action: n,
                productLines: i
            })
        }, [f]),
        I = (0, k.A)({
            wishlistId: m,
            onAction: A,
            productLines: l?.getProductLines() ?? null
        }),
        j = a.useCallback(() => {
            if (null == m) return;
            let e = h ? r.a.PRIVATE : r.a.PUBLIC;
            _(!h), v.A.updateWishlistVisibility(m, e), f({
                wishlistId: m,
                action: h ? M.Mq.WISHLIST_TOGGLE_PRIVATE : M.Mq.WISHLIST_TOGGLE_PUBLIC,
                productLines: l?.getProductLines()
            })
        }, [m, h, f, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [!h && (0, i.jsxs)("div", {
            className: W.lm,
            children: [(0, i.jsx)(c.G3N, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: F.intl.string(F.t.RX7D9h)
            })]
        }), h && p && (0, i.jsxs)("div", {
            className: W.lm,
            children: [(0, i.jsx)(c.mir, {
                size: "custom",
                width: 16,
                height: 16
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: F.intl.string(F.t.d78ChW)
            })]
        }), (0, i.jsxs)("div", {
            ref: I,
            className: W.U1,
            children: [(0, i.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: F.intl.format(F.t.r6Y1Lg, {
                    count: l.items.length
                })
            }), t ? (0, i.jsx)(B, {
                socialLayerStorefrontApplicationIds: s,
                isWishlistPublic: h,
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
    (0, R.i)({
        containerRef: n,
        itemType: "WISHLIST_ITEM"
    });
    let {
        wishlistId: l,
        currentUser: r
    } = (0, o.cf)([y.A, S.default], () => ({
        wishlistId: y.A.getFirstWishlistId(t.id),
        currentUser: S.default.getCurrentUser()
    })), {
        analyticsLocations: c
    } = (0, g.Ay)(), m = r?.id === t.id, {
        wishlist: v,
        wasFetched: N,
        error: k
    } = (0, C.fw)({
        wishlistId: l,
        userId: t.id
    });
    (0, b.A)(v);
    let D = (0, I.A)({
            wishlist: v,
            profileOwner: t,
            currentUser: r
        }),
        G = (0, A.X)({
            location: "user-profile-modal-v2-wishlist"
        }),
        M = (0, E.GG)("user-profile-modal-v2-wishlist"),
        F = (0, T.Gh)("user-profile-modal-v2-wishlist"),
        H = m && (G && D.length > 0 || M),
        B = a.useCallback(() => {
            (0, d.closeAllModals)(), (0, x.Cz)({
                analyticsLocations: c,
                analyticsSource: u.A.USER_PROFILE_WISHLIST
            })
        }, [c]),
        X = a.useCallback(e => {
            let t = _.A.getGuildIdFromApplicationId(e);
            null != t && (0, j.X)({
                guildId: t
            })
        }, []),
        Y = a.useCallback(e => {
            let t = _.A.getGuildIdFromApplicationId(e);
            null != t && ((0, d.closeAllModals)(), (0, j.default)({
                guildId: t
            }))
        }, []),
        {
            handleToggle: K
        } = (0, p.c)({
            userId: r?.id,
            skuId: U.pe.TIER_2,
            nuxGraphic: F ? h.g : void 0,
            onNuxShow: f.D,
            location: u.A.USER_PROFILE_WISHLIST
        });
    if (null == r || null != k) return null;
    let q = null == v || 0 === v.items.length;
    return (0, i.jsxs)(w.K, {
        scrollerRef: n,
        className: s()({
            [W.XG]: !q
        }),
        fade: !0,
        children: [q ? (0, i.jsx)(V, {
            isOwner: m,
            socialLayerStorefrontApplicationIds: D,
            handleOpenShop: B,
            handleOpenGameShop: Y,
            handleOpenGameShopMouseDown: X
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(O.A, {
                scrollerRef: n
            }), (0, i.jsx)(z, {
                isOwner: m,
                profileOwner: t,
                wishlist: v,
                socialLayerStorefrontApplicationIds: D,
                handleOpenShop: B,
                handleOpenGameShop: Y,
                handleAddNitroToWishlist: F && !v.hasSkuId(U.pe.TIER_2) ? K : void 0
            }), (0, i.jsx)(L.A, {
                items: v.items,
                profileOwner: t,
                isOwner: m
            })]
        }), H && (0, i.jsx)(P.A, {
            user: t,
            wishlist: v,
            applicationIds: D,
            hasFetchedWishlist: N,
            analyticsLocations: c,
            className: q ? W._E : W.HZ
        })]
    })
}