/** Chunk was on 59275 **/
/** chunk id: 565057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(975807),
    d = n(775602),
    g = n(287809),
    f = n(531685),
    m = n(954571),
    p = n(975571),
    _ = n(927578),
    b = n(440938),
    h = n(590180),
    E = n(751304),
    v = n(561769),
    C = n(484469),
    A = n(917987),
    x = n(4196),
    S = n(940622),
    O = n(938191),
    y = n(758836),
    j = n(652215),
    T = n(985018),
    L = n(816917),
    I = n(201073);
let k = e => {
    var t;
    let {
        isLoading: n,
        title: s,
        sortedSkuIds: k,
        numVisibleItems: N,
        prioritizeUserDiscounts: R,
        tab: P,
        buttonContainerClassName: B,
        orbsSupportedOnly: w
    } = e, D = (0, i.bG)([g.default], () => g.default.getCurrentUser()), M = _.Ay.canUseCollectibles(D), H = (0, O.y)("FeedBlock"), {
        sortType: G,
        setSortType: U,
        sortedItems: F,
        sortOptions: z,
        shuffleProducts: V,
        showRecommendationOption: K
    } = (0, x.A)({
        sortedSkuIds: k,
        isPremiumUser: M,
        prioritizeUserDiscounts: R,
        orbsSupportedOnly: w
    }), W = (0, S.od)(F), Y = (0, i.bG)([d.A], () => d.A.useReducedMotion), q = (0, i.bG)([f.A], () => f.A.isFocused()), Z = !Y && q, {
        animationPhase: X,
        startAnimation: J
    } = (0, A.s)(), Q = (0, b.uM)(), $ = null != (t = null == Q ? void 0 : Q.sessionId) ? t : "", ee = l.useRef(null), et = l.useCallback(e => {
        J({
            isShuffling: !1,
            onOutroComplete: () => U(e)
        }), m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
            page_session_id: $,
            sort_type: e
        })
    }, [J, U, $]);
    return null == D ? null : (0, r.jsxs)("div", {
        className: a()(I.lD, I.YB),
        children: [(0, r.jsxs)("div", {
            className: I.$6,
            children: [(0, r.jsxs)("div", {
                className: I.LD,
                children: [(0, r.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: s
                }), K && (0, r.jsx)(o.m, {
                    text: T.intl.string(T.t["3taPdj"]),
                    position: "top",
                    "aria-label": T.intl.string(T.t["3taPdj"]),
                    children: (0, r.jsx)(c.DUT, {
                        onClick: () => (0, u.A)(p.A.getArticleURL(j.MVz.DATA_USED_FOR_RECOMMENDED)),
                        className: I.sT,
                        children: (0, r.jsx)(c.mir, {
                            size: "sm"
                        })
                    })
                })]
            }), (0, r.jsxs)("div", {
                className: a()(I.IE, {
                    [L.T3]: H
                }),
                children: [(0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    children: T.intl.string(T.t.uaX705)
                }), (0, r.jsx)("div", {
                    className: a()(B, I.pI),
                    children: (0, r.jsx)(c.l6P, {
                        label: T.intl.string(T.t.uaX705),
                        hideLabel: !0,
                        options: z,
                        onSelectionChange: et,
                        formatOption: e => {
                            let {
                                label: t,
                                value: n
                            } = e;
                            return {
                                id: n,
                                label: t,
                                value: n
                            }
                        },
                        value: G,
                        selectionMode: "single",
                        fullWidth: !0
                    })
                }), (0, r.jsx)("div", {
                    className: B,
                    children: (0, r.jsx)(c.Button, {
                        variant: "secondary",
                        text: T.intl.string(T.t.X3tnc4),
                        buttonRef: ee,
                        onClick: () => {
                            J({
                                isShuffling: !0,
                                onOutroComplete: V,
                                returnRef: ee
                            }), m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                page_session_id: $
                            })
                        },
                        disabled: X !== A.J.MOUNTED && X !== A.J.FINISHED
                    })
                })]
            })]
        }), (0, r.jsx)("div", {
            className: I.hm,
            children: n ? (0, r.jsx)(r.Fragment, {
                children: [...Array(12)].map((e, t) => (0, r.jsx)(C.A, {}, t + 1))
            }) : W.slice(0, N).map((e, t) => {
                let n, l = h.A.getCategoryForProduct(e.skuId);
                if (null == e || null == l) return null;
                if (Z)
                    if (X === A.J.SHUFFLE_OUT) return (0, r.jsx)("div", {
                        className: I.Z2,
                        children: (0, r.jsx)(C.A, {
                            skipPulseAnimation: !0
                        })
                    }, "".concat(e.skuId, "-").concat(t));
                    else X === A.J.SORT_OUT ? n = I.MW : X === A.J.SHUFFLE_IN ? n = I.aS : X === A.J.SORT_IN && (n = I.F7);
                return (0, r.jsx)(b.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "popular picks",
                        categoryPosition: 2
                    },
                    children: (0, r.jsx)("div", {
                        className: n,
                        children: (0, r.jsx)(E.A, {
                            skuId: e.skuId,
                            prioritizedCurrency: P === y.G2.ORBS ? v.Hi.ORBS : void 0,
                            onClickAnalytics: (0, v.UU)(e, P, Q)
                        })
                    })
                }, e.skuId)
            })
        })]
    })
}