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
    C = t(950191),
    S = t(101928),
    x = t(195898),
    b = t(657331),
    w = t(804870),
    T = t(353157),
    A = t(18983),
    j = t(798048),
    L = t(834796),
    O = t(178213),
    v = t(33190),
    H = t(332772),
    N = t(594832),
    k = t(631784),
    M = t(872472),
    y = t(721932),
    P = t(310209),
    R = t(878244),
    B = t(46537),
    G = t(734057),
    E = t(309010),
    W = t(954571),
    D = t(427262),
    F = t(447719),
    Q = t(788868),
    U = t(652215),
    z = t(518477),
    K = t(985018),
    X = t(195416);

function Y(e) {
    let {
        title: i,
        subtitle: t,
        showViewAll: n,
        themeClass: a,
        onOpenWishlist: l
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(X.$R, a),
        children: [(0, r.jsxs)("div", {
            className: X.hy,
            children: [(0, r.jsx)(u.Heading, {
                variant: "heading-lg/bold",
                children: i
            }), null != t && (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: t
            })]
        }), n && (0, r.jsx)("div", {
            className: X.Rb,
            children: (0, r.jsx)(u.QWc, {
                variant: "secondary",
                textVariant: "text-xs/normal",
                text: K.intl.string(K.t.y6PSA3),
                onClick: l
            })
        })]
    })
}

function Z(e) {
    let {
        wishlistInDmLength: i
    } = e, t = (0, O.GG)("wishlist_banner_loading_grid");
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.AC4, {
            children: K.intl.string(K.t.pfChQr)
        }), (0, r.jsx)("div", {
            className: s()(X.Md, {
                [X.e6]: t
            }),
            children: Array.from({
                length: i
            }, t ? (e, i) => (0, r.jsx)(R.O, {}, `placeholder-${i}`) : (e, i) => (0, r.jsx)(L.A, {
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
        className: X.XI,
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
                            className: X.Tz,
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
        includedSources: C
    } = e, S = (0, O.GG)("wishlist_banner"), x = n.useMemo(() => [...i, a].filter(e => null != e), [i, a]), b = (0, c.bG)([E.A, G.A], () => G.A.getChannel(E.A.getChannelId())), w = n.useCallback(() => {
        h?.(), (0, u.s7G)()
    }, [h]);
    return (0, H.T)({
        location: "wishlist_banner"
    }), (0, r.jsx)("ul", {
        className: s()(X.Md, {
            [X.e6]: S
        }),
        children: S ? x.map(e => {
            let {
                item: i,
                source: t
            } = e;
            return null == i || null == i.sku ? null : (0, r.jsx)("li", {
                className: X.XI,
                children: (0, r.jsx)(R.A, {
                    sku: i.sku,
                    wishlistId: f,
                    source: t,
                    wishlistOwner: d,
                    hasMultipleSources: C.size > 1,
                    onOpenWishlist: p,
                    onClick: w,
                    analyticsLocations: I,
                    guildId: b?.guild_id,
                    channelId: b?.id
                })
            }, i.skuId)
        }) : (0, r.jsxs)(r.Fragment, {
            children: [i.map((e, i) => {
                let {
                    item: t,
                    source: n
                } = e;
                return (0, r.jsx)("li", {
                    className: X.XI,
                    children: ((e, i) => {
                        let {
                            item: t,
                            source: n
                        } = e, a = g[i], s = (0, r.jsx)(A.A, {
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
                        return a.shouldShow ? (0, B.Qc)(a) ? (0, r.jsx)(m.m, {
                            text: a.title,
                            position: "top",
                            asContainer: !0,
                            delay: N.Zh,
                            children: s
                        }) : (0, r.jsx)(_.u, {
                            title: a.title,
                            body: a.body ?? "",
                            asset: a.renderIcon?.(t),
                            assetSize: N.Q8,
                            position: "top",
                            asContainer: !0,
                            delay: N.Zh,
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
    } = (0, p.Ay)(f.A.WISHLIST_BANNER), g = (0, O.GG)("wishlist_banner"), I = (0, v.H)("wishlist_banner"), C = (0, N.KQ)(g), {
        theme: w,
        primaryColor: T,
        secondaryColor: A
    } = (0, S.A)({
        user: i,
        displayProfile: a,
        forceUserTheme: g && I
    }), {
        profileThemeStyle: j,
        profileThemeClassName: L
    } = (0, x.A)({
        theme: w,
        themeType: null,
        primaryColor: T,
        secondaryColor: A,
        forceUserTheme: g && I
    }), H = n.useCallback(() => {
        (0, b.openUserProfileModal)({
            userId: i.id,
            tabSection: z.RP.WISHLIST
        })
    }, [i.id]), k = n.useMemo(() => "loading" === c, [c]), M = D.Ay.getName(i), y = (0, F.l7)({
        totalUnownedWishlistItemCount: l,
        wishlistInDmLength: C,
        displayItems: o,
        recipientName: M
    }), P = a?.getBannerURL({
        canAnimate: !1,
        size: 713
    }), R = l > C, G = n.useMemo(() => R ? o.slice(0, C - 1) : o, [o, R, C]), E = (0, B.bc)(G, i), Q = R ? o[C - 1] : null, K = l - C + 1, [$, V] = n.useState(!1), q = n.useCallback(e => {
        if (e && !k && o.length > 0) {
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
    }, [k, o, i.id, h]), ee = (0, d.K)(q, void 0, !k && !$), ei = n.useMemo(() => new Set(o.map(e => {
        let {
            source: i
        } = e;
        return i
    })), [o]);
    return "error" === c ? null : (0, r.jsx)("div", {
        className: X.v8,
        children: (0, r.jsxs)("div", {
            ref: ee,
            className: s()(X.A1, L),
            style: j,
            children: [null != P && (0, r.jsx)("div", {
                className: X.iL,
                style: {
                    backgroundImage: `url(${P})`
                }
            }), (0, r.jsx)(u.NPJ, {
                disableAdaptiveTheme: !0,
                children: e => (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Y, {
                        title: y.title,
                        subtitle: y.subtitle,
                        showViewAll: l > C && g,
                        themeClass: e,
                        onOpenWishlist: H
                    }), (0, r.jsx)("div", {
                        className: e,
                        children: k || 0 === o.length ? (0, r.jsx)(Z, {
                            wishlistInDmLength: C
                        }) : (0, r.jsx)(J, {
                            items: G,
                            hasOverflow: R,
                            overflowItem: Q,
                            overflowCount: K,
                            showIcons: y.showIcons,
                            giftRecipient: i,
                            defaultWishlistId: _,
                            onOpenWishlist: H,
                            onWishlistItemClick: t,
                            tooltipConfigs: E,
                            analyticsLocations: h,
                            includedSources: ei
                        })
                    }), null != m && !k && o.length > 0 ? (0, r.jsx)("div", {
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
    } = e, a = (0, O.GG)("wishlist_banner_new_recommendations"), s = (0, C.Ay)(i?.id), {
        wishlistAndRecommendations: l,
        totalUnownedWishlistItemCount: d,
        skusToUserAndReason: c,
        status: _,
        defaultWishlistId: m
    } = (0, k.rg)({
        userId: i.id,
        numItems: (0, N.KQ)(a),
        source: N.B5.USER_PROFILE
    }), u = n.useMemo(() => o()(l.map(e => {
        let t = e.productLine === U.EZt.COLLECTIBLES ? M.A.fromSKU(e) : y.A.fromSKU(e),
            r = null != c[e.id] && c[e.id][i.id] === P.j.WISHLIST ? N.uS.WISHLIST : N.uS.POPULAR;
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
            className: X.jG
        }) : null
    })
}