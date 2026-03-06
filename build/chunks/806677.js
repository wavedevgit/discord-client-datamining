/** chunk id: 806677 params = (module,exports,require) **/
i.d(t, {
    default: () => es
});
var s = i(627968),
    a = i(64700),
    n = i(791282),
    r = i.n(n),
    o = i(172218),
    l = i(158954),
    d = i(311907),
    c = i(459192),
    _ = i(990078),
    u = i(397927),
    f = i(775602),
    m = i(793574),
    p = i(688810),
    h = i(937008),
    I = i(156312),
    g = i(532794),
    C = i(871123),
    S = i(177569),
    x = i(622543),
    L = i(657331),
    k = i(18983),
    E = i(798048),
    A = i(834796),
    w = i(310250),
    b = i(178213),
    j = i(594832),
    T = i(996353),
    O = i(631784),
    y = i(872472),
    N = i(721932),
    v = i(310209),
    H = i(878244),
    M = i(46537),
    W = i(734057),
    G = i(309010),
    R = i(954571),
    P = i(427262),
    D = i(407775),
    F = i(672525),
    Q = i(788868),
    U = i(652215),
    B = i(518477),
    Z = i(699976),
    K = i(985018),
    X = i(235889),
    z = i(8043);

function V(e) {
    let {
        onSelectSku: t,
        priceOptions: i,
        showPromotionalGiftBanner: a
    } = e;
    return (0, s.jsxs)("div", {
        className: z.u6,
        children: [(0, s.jsx)(F.D3, {
            onClick: () => t(Q.pe.TIER_2),
            isGift: !0,
            priceOptions: i,
            showPromotionalGiftBanner: a,
            wumpusPosition: D.Rf.GIFT_SELECTION_MODAL,
            className: X.giftSelectionModalContext
        }), (0, s.jsx)(F.Ls, {
            onClick: () => t(Q.pe.TIER_0),
            isGift: !0,
            priceOptions: i,
            removeTopMargin: !0,
            className: X.giftSelectionModalContext
        })]
    })
}

function q(e) {
    let {
        isEligibleForWishlistSkuPreview: t
    } = e;
    return (0, s.jsx)(s.Fragment, {
        children: Array.from({
            length: 12
        }, t ? (e, t) => (0, s.jsx)(H.O, {
            spec: Z.Z.SIZE_150
        }, `placeholder-${t}`) : (e, t) => (0, s.jsx)(A.A, {
            cardSize: E.Y.MEDIUM_SQUARE
        }, `placeholder-${t}`))
    })
}

function J(e) {
    let {
        item: t,
        source: i,
        giftRecipient: a,
        defaultWishlistId: n,
        tooltipConfig: r,
        onWishlistItemClick: o,
        analyticsLocations: l
    } = e, d = (0, s.jsx)(k.A, {
        item: t,
        profileOwner: a,
        wishlistId: n,
        isOwner: !1,
        cardSize: E.Y.MEDIUM_SQUARE,
        showOverlayButton: !1,
        giftingOrigin: Q.vQ.DM_CHANNEL_WISHLIST,
        source: i,
        showIcons: !0,
        heartColor: "white",
        onWishlistItemClick: o,
        analyticsLocations: l
    }, t.skuId);
    return r.shouldShow ? (0, M.Qc)(r) ? (0, s.jsx)(_.m, {
        text: r.title,
        position: "top",
        asContainer: !0,
        delay: j.Zh,
        children: d
    }, t.skuId) : (0, s.jsx)(c.u, {
        title: r.title,
        body: r.body ?? "",
        asset: r.renderIcon?.(t),
        assetSize: j.Q8,
        position: "top",
        asContainer: !0,
        delay: j.Zh,
        children: d
    }, t.skuId) : d
}

function Y(e) {
    let {
        isEligibleForWishlistSkuPreview: t,
        displayItems: i,
        giftRecipient: n,
        defaultWishlistId: r,
        tooltipConfigs: o,
        onSeeWishlistClick: l,
        onWishlistItemClick: c,
        totalUnownedWishlistItems: _,
        analyticsLocations: u
    } = e, f = a.useMemo(() => new Set(i.map(e => {
        let {
            source: t
        } = e;
        return t
    })), [i]), m = (0, d.bG)([G.A, W.A], () => W.A.getChannel(G.A.getChannelId()));
    return t ? (0, s.jsx)(s.Fragment, {
        children: i.map((e, t) => {
            let {
                item: a,
                source: o
            } = e;
            return null != a.sku && (0, s.jsx)(H.A, {
                index: t,
                sku: a.sku,
                wishlistId: r,
                source: o,
                wishlistOwner: n,
                hasMultipleSources: f.size > 1,
                onOpenWishlist: l,
                onClick: c,
                analyticsLocations: u,
                totalUnownedWishlistItems: _,
                spec: Z.Z.SIZE_150,
                maxWishlistLength: i.length,
                guildId: m?.guild_id,
                channelId: m?.id
            }, a.skuId)
        })
    }) : (0, s.jsx)(s.Fragment, {
        children: i.map((e, t) => {
            let {
                item: i,
                source: a
            } = e;
            return (0, s.jsx)(J, {
                item: i,
                source: a,
                giftRecipient: n,
                defaultWishlistId: r,
                tooltipConfig: o[t],
                onWishlistItemClick: c,
                analyticsLocations: u
            }, i.skuId)
        })
    })
}

function $(e) {
    let {
        giftRecipient: t,
        onSeeWishlistClick: i,
        onWishlistItemClick: n,
        displayItems: r,
        defaultWishlistId: d,
        isLoading: c,
        totalUnownedWishlistItems: _,
        analyticsLocations: f
    } = e, h = (0, b.G)("gift_selection_modal_wishlist_section"), I = (0, P.tx)(t), g = K.intl.formatToPlainString(_ >= 12 ? K.t.Y2RFOQ : K.t.dIDKgi, {
        username: I
    }), {
        analyticsLocations: x
    } = (0, p.Ay)(...f ?? [], m.A.GIFT_SELECTION_MODAL_WISHLIST), L = (0, M.bc)(r, t), [k, E] = a.useState(!1), A = a.useCallback(e => {
        e && !c && r.length > 0 && (R.default.track(U.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
            gift_recipient_id: t.id,
            sku_ids: r.map(e => {
                let {
                    item: t
                } = e;
                return t.skuId
            }),
            product_lines: Array.from(new Set(r.map(e => {
                let {
                    item: t
                } = e;
                return t.skuProductLine
            }))),
            location_stack: x
        }), E(!0))
    }, [c, r, t.id, x]), w = (0, o.K)(A, void 0, !c && !k), j = a.useMemo(() => r.some(e => {
        let {
            item: t
        } = e;
        return (0, C.bF)(t.sku)
    }), [r]);
    return (0, s.jsxs)("div", {
        ref: w,
        className: z.jf,
        children: [(0, s.jsxs)("div", {
            className: z.nM,
            children: [(0, s.jsx)(l.DZT, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: z.Uf,
                children: g
            }), !h && (0, s.jsx)(u.QWc, {
                variant: "secondary",
                size: "sm",
                text: K.intl.string(K.t.y6PSA3),
                onClick: i
            })]
        }), j && (0, s.jsx)(S.A, {
            location: "gift_selection_modal_wishlist"
        }), (0, s.jsx)("div", {
            className: z.KN,
            children: c ? (0, s.jsx)(q, {
                isEligibleForWishlistSkuPreview: h
            }) : (0, s.jsx)(Y, {
                isEligibleForWishlistSkuPreview: h,
                displayItems: r,
                giftRecipient: t,
                defaultWishlistId: d,
                tooltipConfigs: L,
                onSeeWishlistClick: i,
                onWishlistItemClick: n,
                totalUnownedWishlistItems: _,
                analyticsLocations: x
            })
        })]
    })
}

function ee(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: n,
        analyticsLocations: r,
        analyticsLocation: o,
        analyticsObject: c,
        giftMessage: _,
        giftingOrigin: m = Q.vQ.DM_CHANNEL,
        displayItems: p,
        wishlistCount: C,
        defaultWishlistId: S,
        isWishlistLoaded: k
    } = e, {
        priceOptions: E
    } = (0, I.P5)(), {
        claimableRewards: A
    } = (0, h.Pv)(), w = null != A && A.length > 0, b = null != (0, d.bG)([x.A], () => x.A.getFirstWishlistId(t.id)) && (!k || C > 0), j = K.intl.string(K.t["7lZ31J"]), [T, O] = a.useState("Nitro"), y = a.useRef(null), N = a.useRef(null), v = (0, d.bG)([f.A], () => f.A.useReducedMotion), H = a.useRef(!1), M = a.useRef(!1);
    a.useEffect(() => {
        k && !M.current && (M.current = !0, R.default.track(U.HAw.GIFT_SELECTION_MODAL_OPENED, {
            gift_recipient_id: t.id,
            wishlist_item_count: C,
            location_stack: r
        }))
    }, [k, t.id, C, r]);
    let W = a.useCallback(e => {
            O(e), H.current = !0;
            let i = y.current;
            null != i && i.addEventListener("scrollend", () => {
                H.current = !1
            }, {
                once: !0
            }), "Nitro" === e ? i?.scrollTo({
                top: 0,
                behavior: v ? "auto" : "smooth"
            }) : N.current?.scrollIntoView({
                behavior: v ? "auto" : "smooth",
                block: "start"
            }), R.default.track(U.HAw.GIFT_SELECTION_TAB_SELECTED, {
                gift_recipient_id: t.id,
                tab_name: e,
                location_stack: r
            })
        }, [t.id, r, v]),
        G = a.useCallback(() => {
            R.default.track(U.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: C,
                location_stack: r
            }), i(), (0, L.openUserProfileModal)({
                userId: t.id,
                tabSection: B.RP.WISHLIST
            })
        }, [t.id, C, r, i]);
    a.useEffect(() => {
        let e = N.current,
            t = y.current;
        if (null == e || null == t) return;
        let i = new IntersectionObserver(e => {
            let [t] = e;
            H.current || O(t.isIntersecting ? "Wishlist" : "Nitro")
        }, {
            root: t,
            threshold: .5
        });
        return i.observe(e), () => i.disconnect()
    }, [b]);
    let P = a.useCallback(e => {
        (0, g.A)({
            isGift: !0,
            giftRecipient: t,
            subscriptionTier: e,
            giftingOrigin: m,
            analyticsLocations: r ?? [],
            analyticsLocation: o ?? U.ThZ.GIFT_SELECTION_MODAL,
            analyticsObject: c ?? {
                page: U.liQ.DM_CHANNEL,
                section: U.JJy.CHANNEL_TEXT_AREA,
                object: U.ZSU.BUTTON_ICON,
                objectType: U.AnalyticsObjectTypes.GIFT
            },
            giftMessage: _
        }), i()
    }, [t, r, o, c, _, i, m]);
    return (0, s.jsx)(l.dWK, {
        transitionState: n,
        size: "lg",
        onClose: i,
        "aria-label": K.intl.string(K.t["wg/30i"]),
        children: (0, s.jsxs)("div", {
            className: z.jE,
            children: [(0, s.jsx)(l.rQ0, {
                title: K.intl.string(K.t["wg/30i"])
            }), b && (0, s.jsx)("div", {
                className: z.CE,
                children: (0, s.jsxs)(l.VQ0, {
                    type: "top",
                    look: "brand",
                    selectedItem: T,
                    onItemSelect: W,
                    children: [(0, s.jsx)(l.VQ0.Item, {
                        id: "Nitro",
                        "aria-label": K.intl.string(K.t.Ipxkog),
                        children: K.intl.string(K.t.Ipxkog)
                    }), (0, s.jsx)(l.VQ0.Item, {
                        id: "Wishlist",
                        "aria-label": j,
                        children: j
                    })]
                })
            }), (0, s.jsx)(u.HOs, {
                ref: y,
                className: z.XG,
                children: (0, s.jsxs)("div", {
                    className: z.Qs,
                    children: [(0, s.jsx)("div", {
                        className: z.XP,
                        children: (0, s.jsx)(V, {
                            onSelectSku: P,
                            priceOptions: E,
                            showPromotionalGiftBanner: w
                        })
                    }), b && (0, s.jsx)("div", {
                        ref: N,
                        className: z.XP,
                        children: (0, s.jsx)($, {
                            giftRecipient: t,
                            onSeeWishlistClick: G,
                            onWishlistItemClick: i,
                            displayItems: p,
                            defaultWishlistId: S,
                            isLoading: !k,
                            totalUnownedWishlistItems: C,
                            analyticsLocations: r
                        })
                    })]
                })
            })]
        })
    })
}

function et(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: n,
        analyticsLocations: o,
        analyticsLocation: l,
        analyticsObject: d,
        giftMessage: c,
        giftingOrigin: _ = Q.vQ.DM_CHANNEL
    } = e, {
        wishlistAndRecommendations: u,
        totalUnownedWishlistItemCount: f,
        skusToUserAndReason: m,
        status: p,
        defaultWishlistId: h
    } = (0, O.r)({
        userId: t.id,
        numItems: 12,
        source: j.B5.USER_PROFILE
    }), I = a.useMemo(() => r()(u.map(e => {
        let i = e.productLine === U.EZt.COLLECTIBLES ? y.A.fromSKU(e) : N.A.fromSKU(e),
            s = null != m[e.id] && m[e.id][t.id] === v.j.WISHLIST ? j.uS.WISHLIST : j.uS.POPULAR;
        return null != i ? {
            item: i,
            source: s
        } : null
    })), [u, t.id, m]);
    return (0, s.jsx)(ee, {
        giftRecipient: t,
        onClose: i,
        transitionState: n,
        analyticsLocations: o,
        analyticsLocation: l,
        analyticsObject: d,
        giftMessage: c,
        giftingOrigin: _,
        displayItems: I,
        wishlistCount: f,
        defaultWishlistId: h,
        isWishlistLoaded: "loading" !== p
    })
}

function ei(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: a,
        analyticsLocations: n,
        analyticsLocation: r,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d = Q.vQ.DM_CHANNEL
    } = e, {
        totalUnownedWishlistItemCount: c,
        displayItems: _,
        defaultWishlistId: u,
        fetchState: f
    } = (0, T.A)({
        user: t,
        numItems: 12
    });
    return (0, s.jsx)(ee, {
        giftRecipient: t,
        onClose: i,
        transitionState: a,
        analyticsLocations: n,
        analyticsLocation: r,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d,
        displayItems: _,
        wishlistCount: c,
        defaultWishlistId: u,
        isWishlistLoaded: "loading" !== f.status
    })
}

function es(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: a,
        analyticsLocations: n,
        analyticsLocation: r,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d = Q.vQ.DM_CHANNEL
    } = e, c = (0, w.T)("gift_selection_modal_wishlist_section");
    return (0, s.jsx)(I.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: Q.T7,
        isGift: !0,
        children: (0, s.jsx)(h.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d,
            children: c ? (0, s.jsx)(et, {
                giftRecipient: t,
                onClose: i,
                transitionState: a,
                analyticsLocations: n,
                analyticsLocation: r,
                analyticsObject: o,
                giftMessage: l,
                giftingOrigin: d
            }) : (0, s.jsx)(ei, {
                giftRecipient: t,
                onClose: i,
                transitionState: a,
                analyticsLocations: n,
                analyticsLocation: r,
                analyticsObject: o,
                giftMessage: l,
                giftingOrigin: d
            })
        })
    })
}