/** chunk id: 565057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(975807),
    u = n(775602),
    g = n(287809),
    _ = n(531685),
    m = n(954571),
    h = n(975571),
    p = n(927578),
    f = n(440938),
    x = n(590180),
    E = n(751304),
    C = n(561769),
    A = n(484469),
    b = n(917987),
    S = n(4196),
    v = n(940622),
    L = n(938191),
    I = n(758836),
    j = n(652215),
    k = n(985018),
    T = n(201073);
let O = e => {
    let {
        isLoading: t,
        title: n,
        sortedSkuIds: r,
        numVisibleItems: O,
        prioritizeUserDiscounts: N,
        tab: y,
        buttonContainerClassName: R,
        orbsSupportedOnly: B
    } = e, M = (0, i.bG)([g.default], () => g.default.getCurrentUser()), P = p.Ay.canUseCollectibles(M), D = (0, L.yB)("FeedBlock"), {
        sortType: H,
        setSortType: w,
        sortedItems: U,
        sortOptions: G,
        shuffleProducts: F,
        showRecommendationOption: V
    } = (0, S.A)({
        sortedSkuIds: r,
        isPremiumUser: P,
        prioritizeUserDiscounts: N,
        orbsSupportedOnly: B
    }), K = (0, v.od)(U), W = (0, i.bG)([u.A], () => u.A.useReducedMotion), z = (0, i.bG)([_.A], () => _.A.isFocused()), Y = !W && z, {
        animationPhase: $,
        startAnimation: Z
    } = (0, b.s)(), q = (0, f.uM)(), X = q?.sessionId ?? "", J = l.useRef(null), Q = l.useCallback(e => {
        Z({
            isShuffling: !1,
            onOutroComplete: () => w(e)
        }), m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
            page_session_id: X,
            sort_type: e
        })
    }, [Z, w, X]);
    return null == M ? null : (0, s.jsxs)("div", {
        className: a()(T.lD, T.YB),
        children: [(0, s.jsxs)("div", {
            className: T.$6,
            children: [(0, s.jsxs)("div", {
                className: T.LD,
                children: [(0, s.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: n
                }), V && (0, s.jsx)(o.m, {
                    text: k.intl.string(k.t["3taPdj"]),
                    position: "top",
                    "aria-label": k.intl.string(k.t["3taPdj"]),
                    children: (0, s.jsx)(c.DUT, {
                        onClick: () => (0, d.A)(h.A.getArticleURL(j.MVz.DATA_USED_FOR_RECOMMENDED)),
                        className: T.sT,
                        children: (0, s.jsx)(c.mir, {
                            size: "sm"
                        })
                    })
                })]
            }), (0, s.jsxs)("div", {
                className: a()(T.IE, {
                    [L.jP]: D
                }),
                children: [(0, s.jsx)(c.Text, {
                    variant: "text-md/medium",
                    children: k.intl.string(k.t.uaX705)
                }), (0, s.jsx)("div", {
                    className: a()(R, T.pI),
                    children: (0, s.jsx)(c.l6P, {
                        label: k.intl.string(k.t.uaX705),
                        hideLabel: !0,
                        options: G,
                        onSelectionChange: Q,
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
                        value: H,
                        selectionMode: "single",
                        fullWidth: !0
                    })
                }), (0, s.jsx)("div", {
                    className: R,
                    children: (0, s.jsx)(c.Button, {
                        variant: "secondary",
                        text: k.intl.string(k.t.X3tnc4),
                        buttonRef: J,
                        onClick: () => {
                            Z({
                                isShuffling: !0,
                                onOutroComplete: F,
                                returnRef: J
                            }), m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                page_session_id: X
                            })
                        },
                        disabled: $ !== b.J.MOUNTED && $ !== b.J.FINISHED
                    })
                })]
            })]
        }), (0, s.jsx)("div", {
            className: T.hm,
            children: t ? (0, s.jsx)(s.Fragment, {
                children: [...Array(12)].map((e, t) => (0, s.jsx)(A.A, {}, t + 1))
            }) : K.slice(0, O).map((e, t) => {
                let n, l = x.A.getCategoryForProduct(e.skuId);
                if (null == e || null == l) return null;
                if (Y)
                    if ($ === b.J.SHUFFLE_OUT) return (0, s.jsx)("div", {
                        className: T.Z2,
                        children: (0, s.jsx)(A.A, {
                            skipPulseAnimation: !0
                        })
                    }, `${e.skuId}-${t}`);
                    else $ === b.J.SORT_OUT ? n = T.MW : $ === b.J.SHUFFLE_IN ? n = T.aS : $ === b.J.SORT_IN && (n = T.F7);
                return (0, s.jsx)(f.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "popular picks",
                        categoryPosition: 2
                    },
                    children: (0, s.jsx)("div", {
                        className: n,
                        children: (0, s.jsx)(E.A, {
                            skuId: e.skuId,
                            prioritizedCurrency: y === I.G2.ORBS ? C.Hi.ORBS : void 0,
                            onClickAnalytics: (0, C.UU)(e, y, q)
                        })
                    })
                }, e.skuId)
            })
        })]
    })
}