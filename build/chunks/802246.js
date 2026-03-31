/** chunk id: 802246 params = (module,exports,require) **/
t.d(i, {
    s: () => q
});
var r = t(627968),
    n = t(64700),
    a = t(503698),
    s = t.n(a),
    l = t(791282),
    o = t.n(l),
    d = t(172218),
    c = t(311907),
    _ = t(459192),
    m = t(990078),
    u = t(397927),
    f = t(793574),
    p = t(688810),
    h = t(245068),
    g = t(871123),
    I = t(84511),
    b = t(950191),
    C = t(101928),
    S = t(195898),
    x = t(657331),
    w = t(804870),
    T = t(353157),
    L = t(18983),
    j = t(798048),
    A = t(834796),
    k = t(178213),
    O = t(33190),
    v = t(332772),
    H = t(594832),
    N = t(631784),
    M = t(872472),
    y = t(721932),
    R = t(310209),
    B = t(878244),
    P = t(46537),
    G = t(734057),
    E = t(309010),
    W = t(954571),
    D = t(427262),
    F = t(447719),
    Q = t(788868),
    U = t(652215),
    z = t(518477),
    Y = t(985018),
    K = t(673254);

function X(e) {
    let {
        title: i,
        subtitle: t,
        showViewAll: n,
        themeClass: a,
        onOpenWishlist: l
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(K.$R, a),
        children: [(0, r.jsxs)("div", {
            className: K.hy,
            children: [(0, r.jsx)(u.Heading, {
                variant: "heading-lg/bold",
                children: i
            }), null != t && (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: t
            })]
        }), n && (0, r.jsx)("div", {
            className: K.Rb,
            children: (0, r.jsx)(u.QWc, {
                variant: "secondary",
                textVariant: "text-xs/normal",
                text: Y.intl.string(Y.t.y6PSA3),
                onClick: l
            })
        })]
    })
}

function Z(e) {
    let {
        wishlistInDmLength: i
    } = e, t = (0, k.GG)("wishlist_banner_loading_grid");
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.AC4, {
            children: Y.intl.string(Y.t.pfChQr)
        }), (0, r.jsx)("div", {
            className: s()(K.Md, {
                [K.e6]: t
            }),
            children: Array.from({
                length: i
            }, t ? (e, i) => (0, r.jsx)(B.O, {}, `placeholder-${i}`) : (e, i) => (0, r.jsx)(A.A, {
                cardSize: j.Y.SMALL
            }, `placeholder-${i}`))
        })]
    })
}

function $(e) {
    let {
        lastItem: i,
        remainingCount: t,
        giftRecipient: n,
        onOpenWishlist: a
    } = e;
    return null == i ? null : (0, r.jsx)("li", {
        className: K.XI,
        children: (0, r.jsx)(w.uz, {
            item: i.item,
            remainingCount: t,
            onClick: a,
            cardSize: j.Y.SMALL,
            renderItemPreview: e => {
                if ((0, M.L)(i.item)) {
                    if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
                        let t = {
                            items: i.item.bundleItems
                        };
                        return (0, r.jsx)("div", {
                            className: K.Tz,
                            children: (0, r.jsx)(h.X, {
                                product: t,
                                isHighlighted: e,
                                user: n
                            })
                        })
                    }
                    return (0, r.jsx)(T.A, {
                        item: i.item,
                        profileOwner: n,
                        isHighlighted: e,
                        cardSize: j.Y.SMALL
                    })
                }
                return null
            }
        })
    }, `overflow-${i.item.skuId}`)
}

function J(e) {
    let {
        items: i,
        hasOverflow: t,
        overflowItem: a,
        overflowCount: l,
        showIcons: o,
        giftRecipient: d,
        defaultWishlistId: f,
        onOpenWishlist: p,
        onWishlistItemClick: h,
        tooltipConfigs: g,
        analyticsLocations: I,
        includedSources: b
    } = e, C = (0, k.GG)("wishlist_banner"), S = n.useMemo(() => [...i, a].filter(e => null != e), [i, a]), x = (0, c.bG)([E.A, G.A], () => G.A.getChannel(E.A.getChannelId())), w = n.useCallback(() => {
        h?.(), (0, u.s7G)()
    }, [h]);
    return (0, v.T)({
        location: "wishlist_banner"
    }), (0, r.jsx)("ul", {
        className: s()(K.Md, {
            [K.e6]: C
        }),
        children: C ? S.map(e => {
            let {
                item: i,
                source: t
            } = e;
            return null == i || null == i.sku ? null : (0, r.jsx)("li", {
                className: K.XI,
                children: (0, r.jsx)(B.A, {
                    sku: i.sku,
                    wishlistId: f,
                    source: t,
                    wishlistOwner: d,
                    hasMultipleSources: b.size > 1,
                    onOpenWishlist: p,
                    onClick: w,
                    analyticsLocations: I,
                    guildId: x?.guild_id,
                    channelId: x?.id
                })
            }, i.skuId)
        }) : (0, r.jsxs)(r.Fragment, {
            children: [i.map((e, i) => {
                let {
                    item: t,
                    source: n
                } = e;
                return (0, r.jsx)("li", {
                    className: K.XI,
                    children: ((e, i) => {
                        let {
                            item: t,
                            source: n
                        } = e, a = g[i], s = (0, r.jsx)(L.A, {
                            item: t,
                            profileOwner: d,
                            wishlistId: f,
                            isOwner: !1,
                            cardSize: j.Y.SMALL,
                            showOverlayButton: !1,
                            giftingOrigin: Q.vQ.DM_CHANNEL_WISHLIST,
                            source: n,
                            showIcons: o,
                            onWishlistItemClick: w,
                            analyticsLocations: I
                        });
                        return a.shouldShow ? (0, P.Qc)(a) ? (0, r.jsx)(m.m, {
                            text: a.title,
                            position: "top",
                            asContainer: !0,
                            delay: H.Zh,
                            children: s
                        }) : (0, r.jsx)(_.u, {
                            title: a.title,
                            body: a.body ?? "",
                            asset: a.renderIcon?.(t),
                            assetSize: H.Q8,
                            position: "top",
                            asContainer: !0,
                            delay: H.Zh,
                            children: s
                        }) : s
                    })({
                        item: t,
                        source: n
                    }, i)
                }, t.skuId)
            }), t && (0, r.jsx)($, {
                lastItem: a,
                remainingCount: l,
                giftRecipient: d,
                onOpenWishlist: p
            })]
        })
    })
}

function V(e) {
    let {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: a,
        totalUnownedWishlistItemCount: l,
        displayItems: o,
        fetchState: c,
        defaultWishlistId: _,
        footerNotice: m
    } = e, {
        analyticsLocations: h
    } = (0, p.Ay)(f.A.WISHLIST_BANNER), g = (0, k.GG)("wishlist_banner"), I = (0, O.H)("wishlist_banner"), b = (0, H.KQ)(g), {
        theme: w,
        primaryColor: T,
        secondaryColor: L
    } = (0, C.A)({
        user: i,
        displayProfile: a,
        forceUserTheme: g && I
    }), {
        profileThemeStyle: j,
        profileThemeClassName: A
    } = (0, S.A)({
        theme: w,
        themeType: null,
        primaryColor: T,
        secondaryColor: L,
        forceUserTheme: g && I
    }), v = n.useCallback(() => {
        (0, x.openUserProfileModal)({
            userId: i.id,
            tabSection: z.RP.WISHLIST
        })
    }, [i.id]), N = n.useMemo(() => "loading" === c, [c]), M = D.Ay.getName(i), y = (0, F.l7)({
        totalUnownedWishlistItemCount: l,
        wishlistInDmLength: b,
        displayItems: o,
        recipientName: M
    }), R = a?.getBannerURL({
        canAnimate: !1,
        size: 713
    }), B = l > b, G = n.useMemo(() => B ? o.slice(0, b - 1) : o, [o, B, b]), E = (0, P.bc)(G, i), Q = B ? o[b - 1] : null, Y = l - b + 1, [$, V] = n.useState(!1), q = n.useCallback(e => {
        if (e && !N && o.length > 0) {
            let e = o.map(e => {
                let {
                    item: i
                } = e;
                return i.skuId
            });
            W.default.track(U.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                gift_recipient_id: i.id,
                sku_ids: e,
                location_stack: h,
                product_lines: Array.from(new Set(o.map(e => {
                    let {
                        item: i
                    } = e;
                    return i.skuProductLine
                })))
            }), V(!0)
        }
    }, [N, o, i.id, h]), ee = (0, d.K)(q, void 0, !N && !$), ei = n.useMemo(() => new Set(o.map(e => {
        let {
            source: i
        } = e;
        return i
    })), [o]);
    return "error" === c ? null : (0, r.jsx)("div", {
        className: K.v8,
        children: (0, r.jsxs)("div", {
            ref: ee,
            className: s()(K.A1, A),
            style: j,
            children: [null != R && (0, r.jsx)("div", {
                className: K.iL,
                style: {
                    backgroundImage: `url(${R})`
                }
            }), (0, r.jsx)(u.NPJ, {
                disableAdaptiveTheme: !0,
                children: e => (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(X, {
                        title: y.title,
                        subtitle: y.subtitle,
                        showViewAll: l > b && g,
                        themeClass: e,
                        onOpenWishlist: v
                    }), (0, r.jsx)("div", {
                        className: e,
                        children: N || 0 === o.length ? (0, r.jsx)(Z, {
                            wishlistInDmLength: b
                        }) : (0, r.jsx)(J, {
                            items: G,
                            hasOverflow: B,
                            overflowItem: Q,
                            overflowCount: Y,
                            showIcons: y.showIcons,
                            giftRecipient: i,
                            defaultWishlistId: _,
                            onOpenWishlist: v,
                            onWishlistItemClick: t,
                            tooltipConfigs: E,
                            analyticsLocations: h,
                            includedSources: ei
                        })
                    }), null != m && !N && o.length > 0 ? (0, r.jsx)("div", {
                        className: e,
                        children: m
                    }) : null]
                })
            })]
        })
    })
}

function q(e) {
    let {
        giftRecipient: i,
        onWishlistItemClick: t
    } = e, a = (0, k.GG)("wishlist_banner_new_recommendations"), s = (0, b.Ay)(i?.id), {
        wishlistAndRecommendations: l,
        totalUnownedWishlistItemCount: d,
        skusToUserAndReason: c,
        status: _,
        defaultWishlistId: m
    } = (0, N.rg)({
        userId: i.id,
        numItems: (0, H.KQ)(a),
        source: H.B5.USER_PROFILE
    }), u = n.useMemo(() => o()(l.map(e => {
        let t = e.productLine === U.EZt.COLLECTIBLES ? M.A.fromSKU(e) : y.A.fromSKU(e),
            r = null != c[e.id] && c[e.id][i.id] === R.j.WISHLIST ? H.uS.WISHLIST : H.uS.POPULAR;
        return null != t ? {
            item: t,
            source: r
        } : null
    })), [l, i.id, c]), f = n.useMemo(() => u.some(e => {
        let {
            item: i
        } = e;
        return (0, g.bF)(i.sku)
    }), [u]);
    return (0, r.jsx)(V, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: s,
        totalUnownedWishlistItemCount: d,
        fetchState: _,
        displayItems: u,
        defaultWishlistId: m,
        footerNotice: f ? (0, r.jsx)(I.A, {
            location: "dm_gift_modal_wishlist_new_recommendations",
            className: K.jG
        }) : null
    })
}