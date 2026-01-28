/** Chunk was on 91075 **/
/** chunk id: 802246, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => D
}), i(896048);
var n = i(627968),
    r = i(64700),
    a = i(503698),
    l = i.n(a),
    s = i(172218),
    o = i(459192),
    d = i(990078),
    u = i(397927),
    c = i(793574),
    m = i(688810),
    f = i(245068),
    _ = i(950191),
    p = i(101928),
    g = i(195898),
    h = i(657331),
    I = i(804870),
    C = i(353157),
    S = i(18983),
    x = i(242640),
    b = i(834796),
    T = i(594832),
    A = i(996353),
    O = i(872472),
    j = i(721932),
    v = i(46537),
    N = i(954571),
    P = i(427262),
    L = i(788868),
    w = i(652215),
    y = i(518477),
    E = i(985018),
    k = i(195416);
let R = {
    FULL_WISHLIST: {
        title: E.intl.string(E.t["7lZ31J"]),
        getSubtitle: e => E.intl.formatToPlainString(E.t.BjEX38, {
            username: e
        }),
        showIcons: !1
    },
    MIXED: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: e => E.intl.formatToPlainString(E.t.dIDKgi, {
            username: e
        }),
        showIcons: !0
    },
    SHOP_ONLY: {
        title: E.intl.string(E.t.SK5rmi),
        getSubtitle: e => E.intl.formatToPlainString(E.t.wyMp1j, {
            username: e
        }),
        showIcons: !1
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: E.intl.string(E.t.BCi1gT),
        getSubtitle: e => E.intl.formatToPlainString(E.t.BjEX38, {
            username: e
        }),
        showIcons: !1
    }
};

function H(e) {
    let {
        title: t,
        subtitle: i,
        themeClass: r
    } = e;
    return (0, n.jsx)("div", {
        className: l()(k.$R, r),
        children: (0, n.jsxs)("div", {
            className: k.hy,
            children: [(0, n.jsx)(u.Heading, {
                variant: "heading-lg/bold",
                children: t
            }), (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: i
            })]
        })
    })
}

function M() {
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.AC4, {
            children: E.intl.string(E.t.pfChQr)
        }), (0, n.jsx)("div", {
            className: k.Md,
            children: Array.from({
                length: T.pl
            }, (e, t) => (0, n.jsx)(b.A, {
                cardSize: x.Y.SMALL
            }, "placeholder-".concat(t)))
        })]
    })
}

function B(e) {
    let {
        lastItem: t,
        remainingCount: i,
        giftRecipient: r,
        onOpenWishlist: a
    } = e;
    return null == t ? null : (0, n.jsx)("li", {
        className: k.XI,
        children: (0, n.jsx)(I.uz, {
            item: t.item,
            remainingCount: i,
            onClick: a,
            cardSize: x.Y.SMALL,
            renderItemPreview: e => {
                if ((0, O.L)(t.item)) {
                    if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
                        let i = {
                            items: t.item.bundleItems
                        };
                        return (0, n.jsx)("div", {
                            className: k.Tz,
                            children: (0, n.jsx)(f.X, {
                                product: i,
                                isHighlighted: e,
                                user: r
                            })
                        })
                    }
                    return (0, n.jsx)(C.A, {
                        item: t.item,
                        profileOwner: r,
                        isHighlighted: e,
                        cardSize: x.Y.SMALL
                    })
                }
                return null
            }
        })
    }, "overflow-".concat(t.item.skuId))
}

function G(e) {
    let {
        items: t,
        hasOverflow: i,
        overflowItem: r,
        overflowCount: a,
        showIcons: l,
        giftRecipient: s,
        defaultWishlistId: u,
        onOpenWishlist: c,
        onWishlistItemClick: m,
        tooltipConfigs: f,
        analyticsLocations: _
    } = e;
    return (0, n.jsxs)("ul", {
        className: k.Md,
        children: [t.map((e, t) => {
            let {
                item: i,
                source: r
            } = e;
            return (0, n.jsx)("li", {
                className: k.XI,
                children: ((e, t) => {
                    var i, r;
                    let {
                        item: a,
                        source: c
                    } = e, p = f[t], g = (0, n.jsx)(S.A, {
                        item: a,
                        profileOwner: s,
                        wishlistId: u,
                        isOwner: !1,
                        cardSize: x.Y.SMALL,
                        showOverlayButton: !1,
                        giftingOrigin: L.vQ.DM_CHANNEL_WISHLIST,
                        source: c,
                        showIcons: l,
                        onWishlistItemClick: m,
                        analyticsLocations: _
                    });
                    return p.shouldShow ? null != p.title && null == p.body && null == p.renderIcon ? (0, n.jsx)(d.m, {
                        text: p.title,
                        position: "top",
                        asContainer: !0,
                        delay: T.Zh,
                        children: g
                    }) : (0, n.jsx)(o.u, {
                        title: p.title,
                        body: null != (i = p.body) ? i : "",
                        asset: null == (r = p.renderIcon) ? void 0 : r.call(p, a),
                        assetSize: T.Q8,
                        position: "top",
                        asContainer: !0,
                        delay: T.Zh,
                        children: g
                    }) : g
                })({
                    item: i,
                    source: r
                }, t)
            }, i.skuId)
        }), i && (0, n.jsx)(B, {
            lastItem: r,
            remainingCount: a,
            giftRecipient: s,
            onOpenWishlist: c
        })]
    })
}
let D = function(e) {
    let {
        giftRecipient: t,
        onWishlistItemClick: i
    } = e, {
        analyticsLocations: a
    } = (0, m.Ay)(c.A.WISHLIST_BANNER), o = (0, _.Ay)(null == t ? void 0 : t.id), {
        displayItems: d,
        hasMoreItems: f,
        totalWishlistItemCount: I,
        wishlistItemCountToBeDisplayed: C,
        fetchState: S,
        defaultWishlistId: x
    } = (0, A.Ay)({
        user: t,
        numItems: T.pl,
        location: "Wishlist Banner",
        source: T.mQ.WISHLIST_BANNER
    }), b = r.useMemo(() => "loading" === S.status, [S.status]), O = P.Ay.getName(t), {
        theme: L,
        primaryColor: E,
        secondaryColor: B
    } = (0, p.A)({
        user: t,
        displayProfile: o
    }), {
        profileThemeStyle: D,
        profileThemeClassName: W
    } = (0, g.A)({
        theme: L,
        themeType: null,
        primaryColor: E,
        secondaryColor: B
    }), U = r.useCallback(() => {
        (0, h.openUserProfileModal)({
            userId: t.id,
            tabSection: y.RP.WISHLIST
        })
    }, [t.id]), F = R[r.useMemo(() => C >= T.pl ? "FULL_WISHLIST" : C > 0 ? "MIXED" : d.length > 0 && d.every(e => {
        let {
            item: t,
            source: i
        } = e;
        return i === T.uS.POPULAR && (0, j.$)(t)
    }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY", [C, d])], Y = null == o ? void 0 : o.getBannerURL({
        canAnimate: !1,
        size: 713
    }), z = r.useMemo(() => f ? d.slice(0, T.pl - 1) : d, [d, f]), X = (0, v.b)(z, t), Q = f ? d[T.pl - 1] : null, J = I - T.pl + 1, [K, Z] = r.useState(!1), $ = r.useCallback(e => {
        if (e && !b && d.length > 0) {
            let e = d.map(e => {
                let {
                    item: t
                } = e;
                return t.skuId
            });
            N.default.track(w.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                gift_recipient_id: t.id,
                sku_ids: e,
                location_stack: a,
                product_lines: Array.from(new Set(d.map(e => {
                    let {
                        item: t
                    } = e;
                    return t.skuProductLine
                })))
            }), Z(!0)
        }
    }, [b, d, t.id, a]), V = (0, s.K)($, void 0, !b && !K);
    return "error" === S.status ? null : (0, n.jsxs)("div", {
        ref: V,
        className: l()(k.A1, W),
        style: D,
        children: [null != Y && (0, n.jsx)("div", {
            className: k.iL,
            style: {
                backgroundImage: "url(".concat(Y, ")")
            }
        }), (0, n.jsx)(u.NPJ, {
            disableAdaptiveTheme: !0,
            children: e => (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(H, {
                    title: F.title,
                    subtitle: F.getSubtitle(O),
                    themeClass: e
                }), (0, n.jsx)("div", {
                    className: e,
                    children: b || 0 === d.length ? (0, n.jsx)(M, {}) : (0, n.jsx)(G, {
                        items: z,
                        hasOverflow: f,
                        overflowItem: Q,
                        overflowCount: J,
                        showIcons: F.showIcons,
                        giftRecipient: t,
                        defaultWishlistId: x,
                        onOpenWishlist: U,
                        onWishlistItemClick: i,
                        tooltipConfigs: X,
                        analyticsLocations: a
                    })
                })]
            })
        })]
    })
}