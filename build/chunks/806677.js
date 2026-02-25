/** chunk id: 806677, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => D
});
var a = i(627968),
    r = i(64700),
    s = i(172218),
    n = i(158954),
    o = i(311907),
    l = i(459192),
    d = i(990078),
    _ = i(397927),
    c = i(775602),
    u = i(793574),
    f = i(688810),
    p = i(937008),
    m = i(156312),
    C = i(532794),
    I = i(622543),
    h = i(657331),
    g = i(18983),
    S = i(798048),
    x = i(834796),
    T = i(594832),
    E = i(996353),
    b = i(46537),
    A = i(954571),
    k = i(427262),
    N = i(407775),
    j = i(672525),
    w = i(788868),
    L = i(652215),
    O = i(518477),
    H = i(985018),
    v = i(235889),
    y = i(8043);

function M(e) {
    let {
        onSelectSku: t,
        priceOptions: i,
        showPromotionalGiftBanner: r
    } = e;
    return (0, a.jsxs)("div", {
        className: y.u6,
        children: [(0, a.jsx)(j.D3, {
            onClick: () => t(w.pe.TIER_2),
            isGift: !0,
            priceOptions: i,
            showPromotionalGiftBanner: r,
            wumpusPosition: N.Rf.GIFT_SELECTION_MODAL,
            className: v.giftSelectionModalContext
        }), (0, a.jsx)(j.Ls, {
            onClick: () => t(w.pe.TIER_0),
            isGift: !0,
            priceOptions: i,
            removeTopMargin: !0,
            className: v.giftSelectionModalContext
        })]
    })
}

function G(e) {
    let {
        giftRecipient: t,
        onSeeWishlistClick: i,
        onWishlistItemClick: o,
        displayItems: c,
        defaultWishlistId: p,
        isLoading: m,
        analyticsLocations: C
    } = e, I = (0, k.tx)(t), h = H.intl.formatToPlainString(H.t.dIDKgi, {
        username: I
    }), {
        analyticsLocations: E
    } = (0, f.Ay)(...C ?? [], u.A.GIFT_SELECTION_MODAL_WISHLIST), N = (0, b.bc)(c, t), [j, O] = r.useState(!1), v = r.useCallback(e => {
        e && !m && c.length > 0 && (A.default.track(L.HAw.IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED, {
            gift_recipient_id: t.id,
            sku_ids: c.map(e => {
                let {
                    item: t
                } = e;
                return t.skuId
            }),
            product_lines: Array.from(new Set(c.map(e => {
                let {
                    item: t
                } = e;
                return t.skuProductLine
            }))),
            location_stack: E
        }), O(!0))
    }, [m, c, t.id, E]), M = (0, s.K)(v, void 0, !m && !j);
    return (0, a.jsxs)("div", {
        ref: M,
        className: y.jf,
        children: [(0, a.jsxs)("div", {
            className: y.nM,
            children: [(0, a.jsx)(n.DZT, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: y.Uf,
                children: h
            }), (0, a.jsx)(_.QWc, {
                variant: "secondary",
                size: "sm",
                text: H.intl.string(H.t.y6PSA3),
                onClick: i
            })]
        }), (0, a.jsx)("div", {
            className: y.KN,
            children: m ? Array.from({
                length: 12
            }, (e, t) => (0, a.jsx)(x.A, {
                cardSize: S.Y.MEDIUM_SQUARE
            }, `placeholder-${t}`)) : c.map((e, i) => {
                let {
                    item: r,
                    source: s
                } = e, n = N[i], _ = (0, a.jsx)(g.A, {
                    item: r,
                    profileOwner: t,
                    wishlistId: p,
                    isOwner: !1,
                    cardSize: S.Y.MEDIUM_SQUARE,
                    showOverlayButton: !1,
                    giftingOrigin: w.vQ.DM_CHANNEL_WISHLIST,
                    source: s,
                    showIcons: !0,
                    heartColor: "white",
                    onWishlistItemClick: o,
                    analyticsLocations: E
                }, r.skuId);
                return n.shouldShow ? (0, b.Qc)(n) ? (0, a.jsx)(d.m, {
                    text: n.title,
                    position: "top",
                    asContainer: !0,
                    delay: T.Zh,
                    children: _
                }, r.skuId) : (0, a.jsx)(l.u, {
                    title: n.title,
                    body: n.body ?? "",
                    asset: n.renderIcon?.(r),
                    assetSize: T.Q8,
                    position: "top",
                    asContainer: !0,
                    delay: T.Zh,
                    children: _
                }, r.skuId) : _
            })
        })]
    })
}

function P(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: d,
        analyticsObject: u,
        giftMessage: f,
        giftingOrigin: g = w.vQ.DM_CHANNEL
    } = e, {
        priceOptions: S
    } = (0, m.P5)(), {
        claimableRewards: x
    } = (0, p.Pv)(), T = null != x && x.length > 0, {
        totalUnownedWishlistItemCount: b,
        displayItems: k,
        defaultWishlistId: N,
        fetchState: j
    } = (0, E.A)({
        user: t,
        numItems: 12,
        location: "Gift Selection Modal"
    }), v = null != (0, o.bG)([I.A], () => I.A.getFirstWishlistId(t.id)), P = "loading" !== j.status, D = v && (!P || b > 0), R = H.intl.string(H.t["7lZ31J"]), [W, Q] = r.useState("Nitro"), B = r.useRef(null), F = r.useRef(null), U = (0, o.bG)([c.A], () => c.A.useReducedMotion), K = r.useRef(!1);
    r.useEffect(() => {
        "loading" === j.status || K.current || (K.current = !0, A.default.track(L.HAw.GIFT_SELECTION_MODAL_OPENED, {
            gift_recipient_id: t.id,
            wishlist_item_count: b,
            location_stack: l
        }))
    }, [j.status, t.id, b, l]);
    let X = r.useCallback(e => {
            Q(e), A.default.track(L.HAw.GIFT_SELECTION_TAB_SELECTED, {
                gift_recipient_id: t.id,
                tab_name: e,
                location_stack: l
            })
        }, [t.id, l]),
        Z = r.useCallback(() => {
            A.default.track(L.HAw.GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED, {
                gift_recipient_id: t.id,
                wishlist_item_count: b,
                location_stack: l
            }), i(), (0, h.openUserProfileModal)({
                userId: t.id,
                tabSection: O.RP.WISHLIST
            })
        }, [t.id, b, l, i]);
    r.useEffect(() => {
        "Nitro" === W ? B.current?.scrollTo({
            top: 0,
            behavior: U ? "auto" : "smooth"
        }) : F.current?.scrollIntoView({
            behavior: U ? "auto" : "smooth",
            block: "start"
        })
    }, [W, U]);
    let V = r.useCallback(e => {
        (0, C.A)({
            isGift: !0,
            giftRecipient: t,
            subscriptionTier: e,
            giftingOrigin: g,
            analyticsLocations: l ?? [],
            analyticsLocation: d ?? L.ThZ.GIFT_SELECTION_MODAL,
            analyticsObject: u ?? {
                page: L.liQ.DM_CHANNEL,
                section: L.JJy.CHANNEL_TEXT_AREA,
                object: L.ZSU.BUTTON_ICON,
                objectType: L.AnalyticsObjectTypes.GIFT
            },
            giftMessage: f
        }), i()
    }, [t, l, d, u, f, i, g]);
    return (0, a.jsx)(n.dWK, {
        transitionState: s,
        size: "lg",
        onClose: i,
        "aria-label": H.intl.string(H.t["wg/30i"]),
        children: (0, a.jsxs)("div", {
            className: y.jE,
            children: [(0, a.jsx)(n.rQ0, {
                title: H.intl.string(H.t["wg/30i"])
            }), D && (0, a.jsx)("div", {
                className: y.CE,
                children: (0, a.jsxs)(n.VQ0, {
                    type: "top",
                    look: "brand",
                    selectedItem: W,
                    onItemSelect: X,
                    children: [(0, a.jsx)(n.VQ0.Item, {
                        id: "Nitro",
                        "aria-label": H.intl.string(H.t.Ipxkog),
                        children: H.intl.string(H.t.Ipxkog)
                    }), (0, a.jsx)(n.VQ0.Item, {
                        id: "Wishlist",
                        "aria-label": R,
                        children: R
                    })]
                })
            }), (0, a.jsx)(_.HOs, {
                ref: B,
                className: y.XG,
                children: (0, a.jsxs)("div", {
                    className: y.Qs,
                    children: [(0, a.jsx)("div", {
                        className: y.XP,
                        children: (0, a.jsx)(M, {
                            onSelectSku: V,
                            priceOptions: S,
                            showPromotionalGiftBanner: T
                        })
                    }), D && (0, a.jsx)("div", {
                        ref: F,
                        className: y.XP,
                        children: (0, a.jsx)(G, {
                            giftRecipient: t,
                            onSeeWishlistClick: Z,
                            onWishlistItemClick: i,
                            displayItems: k,
                            defaultWishlistId: N,
                            isLoading: !P,
                            analyticsLocations: l
                        })
                    })]
                })
            })]
        })
    })
}

function D(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: s,
        analyticsLocation: n,
        analyticsObject: o,
        giftMessage: l,
        giftingOrigin: d = w.vQ.DM_CHANNEL
    } = e;
    return (0, a.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: w.T7,
        isGift: !0,
        children: (0, a.jsx)(p.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d,
            children: (0, a.jsx)(P, {
                giftRecipient: t,
                onClose: i,
                transitionState: r,
                analyticsLocations: s,
                analyticsLocation: n,
                analyticsObject: o,
                giftMessage: l,
                giftingOrigin: d
            })
        })
    })
}