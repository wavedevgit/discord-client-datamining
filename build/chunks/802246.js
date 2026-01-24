/** Chunk was on 55926 **/
/** chunk id: 802246, original params: i,e,t (module,exports,require) **/
t.d(e, {
    A: () => D
}), t(896048);
var n = t(627968),
    s = t(64700),
    l = t(503698),
    r = t.n(l),
    a = t(172218),
    o = t(459192),
    c = t(990078),
    d = t(397927),
    u = t(793574),
    m = t(688810),
    h = t(245068),
    p = t(950191),
    g = t(101928),
    I = t(195898),
    f = t(657331),
    j = t(804870),
    x = t(353157),
    _ = t(18983),
    S = t(242640),
    N = t(834796),
    T = t(594832),
    A = t(996353),
    C = t(872472),
    L = t(721932),
    O = t(46537),
    b = t(954571),
    y = t(427262),
    w = t(788868),
    v = t(652215),
    k = t(518477),
    E = t(985018),
    R = t(195416);
let M = {
    FULL_WISHLIST: {
        title: E.intl.string(E.t["7lZ31J"]),
        getSubtitle: i => E.intl.formatToPlainString(E.t.BjEX38, {
            username: i
        }),
        showIcons: !1
    },
    MIXED: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: i => E.intl.formatToPlainString(E.t.dIDKgi, {
            username: i
        }),
        showIcons: !0
    },
    SHOP_ONLY: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: i => E.intl.formatToPlainString(E.t.wyMp1j, {
            username: i
        }),
        showIcons: !1
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: E.intl.string(E.t.BCi1gT),
        getSubtitle: i => E.intl.formatToPlainString(E.t.BjEX38, {
            username: i
        }),
        showIcons: !1
    }
};

function H(i) {
    let {
        title: e,
        subtitle: t,
        themeClass: s
    } = i;
    return (0, n.jsx)("div", {
        className: r()(R.$R, s),
        children: (0, n.jsxs)("div", {
            className: R.hy,
            children: [(0, n.jsx)(d.Heading, {
                variant: "heading-lg/bold",
                children: e
            }), (0, n.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: t
            })]
        })
    })
}

function P() {
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.AC4, {
            children: E.intl.string(E.t.pfChQr)
        }), (0, n.jsx)("div", {
            className: R.Md,
            children: Array.from({
                length: T.pl
            }, (i, e) => (0, n.jsx)(N.A, {
                cardSize: S.Y.SMALL
            }, "placeholder-".concat(e)))
        })]
    })
}

function B(i) {
    let {
        lastItem: e,
        remainingCount: t,
        giftRecipient: s,
        onOpenWishlist: l
    } = i;
    return null == e ? null : (0, n.jsx)("li", {
        className: R.XI,
        children: (0, n.jsx)(j.uz, {
            item: e.item,
            remainingCount: t,
            onClick: l,
            cardSize: S.Y.SMALL,
            renderItemPreview: i => {
                if ((0, C.L)(e.item)) {
                    if (null != e.item.bundleItems && e.item.bundleItems.length > 0) {
                        let t = {
                            items: e.item.bundleItems
                        };
                        return (0, n.jsx)("div", {
                            className: R.Tz,
                            children: (0, n.jsx)(h.X, {
                                product: t,
                                isHighlighted: i,
                                user: s
                            })
                        })
                    }
                    return (0, n.jsx)(x.A, {
                        item: e.item,
                        profileOwner: s,
                        isHighlighted: i,
                        cardSize: S.Y.SMALL
                    })
                }
                return null
            }
        })
    }, "overflow-".concat(e.item.skuId))
}

function G(i) {
    let {
        items: e,
        hasOverflow: t,
        overflowItem: s,
        overflowCount: l,
        showIcons: r,
        giftRecipient: a,
        defaultWishlistId: d,
        onOpenWishlist: u,
        onWishlistItemClick: m,
        tooltipConfigs: h,
        analyticsLocations: p
    } = i;
    return (0, n.jsxs)("ul", {
        className: R.Md,
        children: [e.map((i, e) => {
            let {
                item: t,
                source: s
            } = i;
            return (0, n.jsx)("li", {
                className: R.XI,
                children: ((i, e) => {
                    var t, s;
                    let {
                        item: l,
                        source: u
                    } = i, g = h[e], I = (0, n.jsx)(_.A, {
                        item: l,
                        profileOwner: a,
                        wishlistId: d,
                        isOwner: !1,
                        cardSize: S.Y.SMALL,
                        showOverlayButton: !1,
                        giftingOrigin: w.vQ.DM_CHANNEL_WISHLIST,
                        source: u,
                        showIcons: r,
                        onWishlistItemClick: m,
                        analyticsLocations: p
                    });
                    return g.shouldShow ? null != g.title && null == g.body && null == g.renderIcon ? (0, n.jsx)(c.m, {
                        text: g.title,
                        position: "top",
                        asContainer: !0,
                        delay: T.Zh,
                        children: I
                    }) : (0, n.jsx)(o.u, {
                        title: g.title,
                        body: null != (t = g.body) ? t : "",
                        asset: null == (s = g.renderIcon) ? void 0 : s.call(g, l),
                        assetSize: T.Q8,
                        position: "top",
                        asContainer: !0,
                        delay: T.Zh,
                        children: I
                    }) : I
                })({
                    item: t,
                    source: s
                }, e)
            }, t.skuId)
        }), t && (0, n.jsx)(B, {
            lastItem: s,
            remainingCount: l,
            giftRecipient: a,
            onOpenWishlist: u
        })]
    })
}
let D = function(i) {
    let {
        giftRecipient: e,
        onWishlistItemClick: t
    } = i, {
        analyticsLocations: l
    } = (0, m.Ay)(u.A.WISHLIST_BANNER), o = (0, p.Ay)(null == e ? void 0 : e.id), {
        displayItems: c,
        hasMoreItems: h,
        totalWishlistItemCount: j,
        wishlistItemCountToBeDisplayed: x,
        fetchState: _,
        defaultWishlistId: S
    } = (0, A.Ay)({
        user: e,
        numItems: T.pl,
        location: "Wishlist Banner",
        source: T.mQ.WISHLIST_BANNER
    }), N = s.useMemo(() => "loading" === _.status, [_.status]), C = y.Ay.getName(e), {
        theme: w,
        primaryColor: E,
        secondaryColor: B
    } = (0, g.A)({
        user: e,
        displayProfile: o
    }), {
        profileThemeStyle: D,
        profileThemeClassName: W
    } = (0, I.A)({
        theme: w,
        themeType: null,
        primaryColor: E,
        secondaryColor: B
    }), Y = s.useCallback(() => {
        (0, f.openUserProfileModal)({
            userId: e.id,
            tabSection: k.RP.WISHLIST
        })
    }, [e.id]), z = M[s.useMemo(() => x >= T.pl ? "FULL_WISHLIST" : x > 0 ? "MIXED" : c.length > 0 && c.every(i => {
        let {
            item: e,
            source: t
        } = i;
        return t === T.uS.POPULAR && (0, L.$)(e)
    }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY", [x, c])], U = null == o ? void 0 : o.getBannerURL({
        canAnimate: !1,
        size: 713
    }), F = s.useMemo(() => h ? c.slice(0, T.pl - 1) : c, [c, h]), X = (0, O.b)(F, e), Q = h ? c[T.pl - 1] : null, J = j - T.pl + 1, [K, Z] = s.useState(!1), $ = s.useCallback(i => {
        if (i && !N && c.length > 0) {
            let i = c.map(i => {
                let {
                    item: e
                } = i;
                return e.skuId
            });
            b.default.track(v.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                gift_recipient_id: e.id,
                sku_ids: i,
                location_stack: l,
                product_lines: Array.from(new Set(c.map(i => {
                    let {
                        item: e
                    } = i;
                    return e.skuProductLine
                })))
            }), Z(!0)
        }
    }, [N, c, e.id, l]), V = (0, a.K)($, void 0, !N && !K);
    return "error" === _.status ? null : (0, n.jsxs)("div", {
        ref: V,
        className: r()(R.A1, W),
        style: D,
        children: [null != U && (0, n.jsx)("div", {
            className: R.iL,
            style: {
                backgroundImage: "url(".concat(U, ")")
            }
        }), (0, n.jsx)(d.NPJ, {
            disableAdaptiveTheme: !0,
            children: i => (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(H, {
                    title: z.title,
                    subtitle: z.getSubtitle(C),
                    themeClass: i
                }), (0, n.jsx)("div", {
                    className: i,
                    children: N || 0 === c.length ? (0, n.jsx)(P, {}) : (0, n.jsx)(G, {
                        items: F,
                        hasOverflow: h,
                        overflowItem: Q,
                        overflowCount: J,
                        showIcons: z.showIcons,
                        giftRecipient: e,
                        defaultWishlistId: S,
                        onOpenWishlist: Y,
                        onWishlistItemClick: t,
                        tooltipConfigs: X,
                        analyticsLocations: l
                    })
                })]
            })
        })]
    })
}