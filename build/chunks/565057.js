/** chunk id: 565057, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => T
});
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(311907),
    o = s(990078),
    c = s(397927),
    d = s(975807),
    u = s(775602),
    _ = s(287809),
    g = s(531685),
    m = s(954571),
    h = s(975571),
    p = s(927578),
    f = s(440938),
    x = s(590180),
    E = s(751304),
    C = s(561769),
    b = s(484469),
    A = s(917987),
    S = s(4196),
    v = s(938191),
    I = s(758836),
    L = s(652215),
    j = s(985018),
    k = s(201073);
let T = e => {
    let {
        isLoading: t,
        title: s,
        sortedSkuIds: r,
        numVisibleItems: T,
        prioritizeUserDiscounts: O,
        tab: N,
        buttonContainerClassName: y,
        orbsSupportedOnly: R
    } = e, B = (0, i.bG)([_.default], () => _.default.getCurrentUser()), M = p.Ay.canUseCollectibles(B), P = (0, v.yB)("FeedBlock"), {
        sortType: D,
        setSortType: w,
        sortedItems: H,
        sortOptions: U,
        shuffleProducts: G,
        showRecommendationOption: F
    } = (0, S.A)({
        sortedSkuIds: r,
        isPremiumUser: M,
        prioritizeUserDiscounts: O,
        orbsSupportedOnly: R
    }), V = (0, i.bG)([u.A], () => u.A.useReducedMotion), K = (0, i.bG)([g.A], () => g.A.isFocused()), W = !V && K, {
        animationPhase: z,
        startAnimation: Y
    } = (0, A.s)(), $ = (0, f.uM)(), Z = $?.sessionId ?? "", q = l.useRef(null), X = l.useCallback(e => {
        Y({
            isShuffling: !1,
            onOutroComplete: () => w(e)
        }), m.default.track(L.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
            page_session_id: Z,
            sort_type: e
        })
    }, [Y, w, Z]);
    return null == B ? null : (0, n.jsxs)("div", {
        className: a()(k.lD, k.YB),
        children: [(0, n.jsxs)("div", {
            className: k.$6,
            children: [(0, n.jsxs)("div", {
                className: k.LD,
                children: [(0, n.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: s
                }), F && (0, n.jsx)(o.m, {
                    text: j.intl.string(j.t["3taPdj"]),
                    position: "top",
                    "aria-label": j.intl.string(j.t["3taPdj"]),
                    children: (0, n.jsx)(c.DUT, {
                        onClick: () => (0, d.A)(h.A.getArticleURL(L.MVz.DATA_USED_FOR_RECOMMENDED)),
                        className: k.sT,
                        children: (0, n.jsx)(c.mir, {
                            size: "sm"
                        })
                    })
                })]
            }), (0, n.jsxs)("div", {
                className: a()(k.IE, {
                    [v.jP]: P
                }),
                children: [(0, n.jsx)(c.Text, {
                    variant: "text-md/medium",
                    children: j.intl.string(j.t.uaX705)
                }), (0, n.jsx)("div", {
                    className: a()(y, k.pI),
                    children: (0, n.jsx)(c.l6P, {
                        label: j.intl.string(j.t.uaX705),
                        hideLabel: !0,
                        options: U,
                        onSelectionChange: X,
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
                        value: D,
                        selectionMode: "single",
                        fullWidth: !0
                    })
                }), (0, n.jsx)("div", {
                    className: y,
                    children: (0, n.jsx)(c.Button, {
                        variant: "secondary",
                        text: j.intl.string(j.t.X3tnc4),
                        buttonRef: q,
                        onClick: () => {
                            Y({
                                isShuffling: !0,
                                onOutroComplete: G,
                                returnRef: q
                            }), m.default.track(L.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                page_session_id: Z
                            })
                        },
                        disabled: z !== A.J.MOUNTED && z !== A.J.FINISHED
                    })
                })]
            })]
        }), (0, n.jsx)("div", {
            className: k.hm,
            children: t ? (0, n.jsx)(n.Fragment, {
                children: [...Array(12)].map((e, t) => (0, n.jsx)(b.A, {}, t + 1))
            }) : H.slice(0, T).map((e, t) => {
                let s, l = x.A.getCategoryForProduct(e.skuId);
                if (null == e || null == l) return null;
                if (W)
                    if (z === A.J.SHUFFLE_OUT) return (0, n.jsx)("div", {
                        className: k.Z2,
                        children: (0, n.jsx)(b.A, {
                            skipPulseAnimation: !0
                        })
                    }, `${e.skuId}-${t}`);
                    else z === A.J.SORT_OUT ? s = k.MW : z === A.J.SHUFFLE_IN ? s = k.aS : z === A.J.SORT_IN && (s = k.F7);
                return (0, n.jsx)(f.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "popular picks",
                        categoryPosition: 2
                    },
                    children: (0, n.jsx)("div", {
                        className: s,
                        children: (0, n.jsx)(E.A, {
                            skuId: e.skuId,
                            prioritizedCurrency: N === I.G2.ORBS ? C.Hi.ORBS : void 0,
                            onClickAnalytics: (0, C.UU)(e, N, $)
                        })
                    })
                }, e.skuId)
            })
        })]
    })
}