/** chunk id: 565057 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => y
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(311907),
    o = s(990078),
    c = s(397927),
    d = s(975807),
    u = s(775602),
    _ = s(793574),
    g = s(688810),
    m = s(287809),
    h = s(531685),
    p = s(954571),
    f = s(975571),
    x = s(927578),
    E = s(440938),
    C = s(590180),
    b = s(940980),
    A = s(751304),
    S = s(561769),
    v = s(484469),
    I = s(917987),
    L = s(4196),
    j = s(938191),
    O = s(758836),
    T = s(652215),
    k = s(985018),
    N = s(941734);
let y = e => {
    let {
        isLoading: t,
        title: s,
        sortedSkuIds: l,
        numVisibleItems: y,
        prioritizeUserDiscounts: R,
        tab: B,
        buttonContainerClassName: P,
        orbsSupportedOnly: M
    } = e, H = (0, i.bG)([m.default], () => m.default.getCurrentUser()), w = x.Ay.canUseCollectibles(H), D = (0, b.W)("FeedBlock"), F = (0, j.yB)("FeedBlock"), {
        sortType: G,
        setSortType: U,
        sortedItems: K,
        sortOptions: W,
        shuffleProducts: z,
        showRecommendationOption: V
    } = (0, L.A)({
        sortedSkuIds: l,
        isPremiumUser: w,
        prioritizeUserDiscounts: R,
        orbsSupportedOnly: M
    }), Y = (0, i.bG)([u.A], () => u.A.useReducedMotion), $ = (0, i.bG)([h.A], () => h.A.isFocused()), Z = !Y && $, {
        animationPhase: q,
        startAnimation: X
    } = (0, I.s)(), J = (0, E.uM)(), Q = J?.sessionId ?? "", {
        analyticsLocations: ee
    } = (0, g.Ay)(_.A.COLLECTIBLES_SHOP_POPULAR_PICKS), et = r.useRef(null), es = r.useCallback(e => {
        X({
            isShuffling: !1,
            onOutroComplete: () => U(e)
        }), p.default.track(T.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
            page_session_id: Q,
            sort_type: e
        })
    }, [X, U, Q]);
    return null == H ? null : (0, n.jsx)(g.f5, {
        value: ee,
        children: (0, n.jsxs)("div", {
            className: a()(N.lD, N.YB),
            children: [(0, n.jsxs)("div", {
                className: N.$6,
                children: [(0, n.jsxs)("div", {
                    className: N.LD,
                    children: [(0, n.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        children: s
                    }), V && (0, n.jsx)(o.m, {
                        text: k.intl.string(k.t["3taPdj"]),
                        position: "top",
                        "aria-label": k.intl.string(k.t["3taPdj"]),
                        children: (0, n.jsx)(c.DUT, {
                            onClick: () => (0, d.A)(f.A.getArticleURL(T.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: N.sT,
                            children: (0, n.jsx)(c.mir, {
                                size: "sm"
                            })
                        })
                    })]
                }), (0, n.jsxs)("div", {
                    className: a()(N.IE, {
                        [j.jP]: F
                    }),
                    children: [(0, n.jsx)(c.Text, {
                        variant: "text-md/medium",
                        children: k.intl.string(k.t.uaX705)
                    }), (0, n.jsx)("div", {
                        className: a()(P, N.pI),
                        children: (0, n.jsx)(c.l6P, {
                            label: k.intl.string(k.t.uaX705),
                            hideLabel: !0,
                            options: W,
                            onSelectionChange: es,
                            formatOption: e => {
                                let {
                                    label: t,
                                    value: s
                                } = e;
                                return {
                                    id: s,
                                    label: t,
                                    value: s
                                }
                            },
                            value: G,
                            selectionMode: "single",
                            fullWidth: !0
                        })
                    }), (0, n.jsx)("div", {
                        className: P,
                        children: (0, n.jsx)(c.Button, {
                            variant: "secondary",
                            text: k.intl.string(k.t.X3tnc4),
                            buttonRef: et,
                            onClick: () => {
                                X({
                                    isShuffling: !0,
                                    onOutroComplete: z,
                                    returnRef: et
                                }), p.default.track(T.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                    page_session_id: Q
                                })
                            },
                            disabled: q !== I.J.MOUNTED && q !== I.J.FINISHED
                        })
                    })]
                })]
            }), (0, n.jsx)("div", {
                className: N.hm,
                children: t ? (0, n.jsx)(n.Fragment, {
                    children: [...Array(12)].map((e, t) => (0, n.jsx)(v.A, {}, t + 1))
                }) : K.slice(0, y).map((e, t) => {
                    let s, r = C.A.getCategoryForProduct(e.skuId);
                    if (null == e || null == r) return null;
                    if (Z)
                        if (q === I.J.SHUFFLE_OUT) return (0, n.jsx)("div", {
                            className: N.Z2,
                            children: (0, n.jsx)(v.A, {
                                skipPulseAnimation: !0
                            })
                        }, `${e.skuId}-${t}`);
                        else q === I.J.SORT_OUT ? s = N.MW : q === I.J.SHUFFLE_IN ? s = N.aS : q === I.J.SORT_IN && (s = N.F7);
                    return (0, n.jsx)(E.R9, {
                        newValue: {
                            tilePosition: t,
                            pageSection: "popular picks",
                            categoryPosition: 2
                        },
                        children: (0, n.jsx)("div", {
                            className: s,
                            children: (0, n.jsx)(A.A, {
                                skuId: e.skuId,
                                hideStaticBundleBackgroundAsset: !0,
                                prioritizedCurrency: B === O.G2.ORBS ? S.Hi.ORBS : D ? S.Hi.FIAT : void 0
                            })
                        })
                    }, e.skuId)
                })
            })]
        })
    })
}