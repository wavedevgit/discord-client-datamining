/** chunk id: 751304 params = (module,exports,require) **/
r.d(e, {
    A: () => b
});
var i = r(627968),
    l = r(64700),
    n = r(503698),
    s = r.n(n),
    a = r(575593),
    u = r(230109),
    o = r(397927),
    d = r(793574),
    c = r(713517),
    m = r(161918),
    x = r(597783),
    A = r(536572),
    p = r(268959),
    h = r(387945),
    g = r(638006),
    C = r(140877),
    I = r(834384),
    v = r(157200),
    f = r(561769),
    j = r(364616),
    k = r(666839),
    y = r(935094),
    E = r(758836),
    T = r(75388);
let _ = l.memo(function(t) {
        let {
            product: e,
            hideWishlistButton: r,
            hideProductName: n,
            hideVariantSwitcher: _,
            hidePrice: b,
            hidePrimaryCTA: N,
            hideSecondaryCTA: R,
            badgeOverride: L,
            skipLimitedTimeCheck: O,
            onClickCard: P,
            onClickPrimaryCTA: S,
            onClickSecondaryCTA: V,
            onMouseEnter: w,
            onMouseLeave: B,
            onFocus: U,
            onBlur: D,
            primaryCTAText: H,
            secondaryCTAIcon: W,
            productNameClassName: F,
            badgeClassName: z,
            cardClassName: G,
            prioritizedCurrency: M,
            onClickAnalytics: X
        } = t, {
            previewingVariantIndex: Q,
            handleEntering: q,
            handleLeaving: Z
        } = (0, y.f)(e), Y = (0, f.gZ)() ?? M, K = (0, m.Mk)(), J = K?.tab, $ = (0, A.s7)(e), tt = l.useRef(null), {
            isHoveringOrFocusing: te
        } = (0, c.A)(tt), {
            handleCardVisibilityChange: tr
        } = (0, x.Z)(e.skuId, J === E.G2.CATALOG ? "full" : J), ti = (0, f.ql)(e, d.A.COLLECTIBLES_SHOP_CARD, X), tl = e.type === a.R.VARIANTS_GROUP && !_, tn = l.useMemo(() => ({
            maxVariantsToShow: 4,
            onClick: ti
        }), [ti]), ts = !N || !R, ta = !(b && n) || tl, tu = ta || ts, to = ts || tl;
        return (0, i.jsx)(u.L, {
            innerRef: tt,
            onChange: tr,
            threshold: 0,
            children: (0, i.jsx)(o.sqX, {
                ref: tt,
                onClick: P ?? ti,
                "aria-label": $,
                className: s()(G, T.ty, {
                    [T.yo]: te
                }),
                onFocus: () => U?.(e.skuId),
                onBlur: () => D?.(e.skuId),
                onMouseEnter: () => w?.(e.skuId),
                onMouseLeave: () => B?.(e.skuId),
                children: (0, i.jsxs)("div", {
                    className: T.qt,
                    children: [(0, i.jsx)("div", {
                        className: s()(T.Dq, {
                            [T.$r]: !n || ta || to
                        }),
                        children: (0, i.jsx)(g.A, {
                            skuId: e.skuId,
                            isCardHovered: te,
                            overrideVariantIndex: Q
                        })
                    }), (0, i.jsxs)("div", {
                        className: T.N1,
                        children: [(0, i.jsx)(p.A, {
                            skuId: e.skuId,
                            badgeOverride: L,
                            className: z,
                            prioritizedCurrency: Y,
                            skipLimitedTimeCheck: O
                        }), !r && (0, i.jsx)(k.A, {
                            skuId: e.skuId,
                            isCardHovered: te
                        })]
                    }), tu && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: T.wY
                        }), (0, i.jsxs)("div", {
                            className: T.xQ,
                            children: [ta && (0, i.jsxs)("div", {
                                className: T.xE,
                                children: [!(n && b) && (0, i.jsxs)("div", {
                                    className: T.Ly,
                                    children: [!n && (0, i.jsx)(h.A, {
                                        skuId: e.skuId,
                                        className: s()(F, T.tZ)
                                    }), !b && (0, i.jsx)("div", {
                                        className: T.oh,
                                        "aria-hidden": !0,
                                        children: (0, i.jsx)(C.A, {
                                            skuId: e.skuId,
                                            prioritizedCurrency: Y
                                        })
                                    })]
                                }), tl && (0, i.jsx)(j.A, {
                                    skuId: e.skuId,
                                    isCollapsed: !te,
                                    onVariantEnter: q,
                                    onVariantExit: Z,
                                    overflowProps: tn
                                })]
                            }), ts && (0, i.jsx)("div", {
                                className: T.Vs,
                                children: (0, i.jsxs)(o.ButtonGroup, {
                                    wrap: !1,
                                    className: T.Ld,
                                    fullWidth: !0,
                                    children: [!N && (0, i.jsx)(I.A, {
                                        skuId: e.skuId,
                                        cardRef: tt,
                                        onClick: S,
                                        text: H,
                                        prioritizedCurrency: Y,
                                        onClickAnalytics: X
                                    }), !R && (0, i.jsx)(v.A, {
                                        skuId: e.skuId,
                                        cardRef: tt,
                                        onClick: V,
                                        icon: W,
                                        prioritizedCurrency: Y,
                                        onClickAnalytics: X
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            })
        })
    }),
    b = t => {
        let {
            skuId: e,
            ...r
        } = t, l = (0, f.Vm)(e);
        return null == l ? null : (0, i.jsx)(_, {
            product: l,
            ...r
        })
    }