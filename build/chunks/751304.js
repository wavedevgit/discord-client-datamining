/** chunk id: 751304 params = (module,exports,require) **/
r.d(e, {
    A: () => V
});
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(835245),
    u = r(612324),
    o = r(575593),
    c = r(230109),
    d = r(397927),
    k = r(444927),
    p = r(793574),
    C = r(688810),
    m = r(713517),
    x = r(440938),
    I = r(161918),
    A = r(320447),
    g = r(597783),
    h = r(777829),
    _ = r(859587),
    f = r(918838),
    T = r(536572),
    v = r(268959),
    E = r(387945),
    j = r(638006),
    y = r(140877),
    P = r(834384),
    b = r(157200),
    R = r(561769),
    N = r(364616),
    O = r(666839),
    L = r(935094),
    S = r(758836),
    B = r(496569);
let H = i.memo(function(t) {
        let {
            product: e,
            hideWishlistButton: r,
            hideProductName: l,
            hideVariantSwitcher: a,
            hidePrice: k,
            hidePrimaryCTA: H,
            hideSecondaryCTA: V,
            badgeOverride: U,
            skipLimitedTimeCheck: D,
            onClickCard: W,
            onClickPrimaryCTA: w,
            onClickSecondaryCTA: M,
            onMouseEnter: G,
            onMouseLeave: F,
            onFocus: z,
            onBlur: Q,
            primaryCTAText: Y,
            secondaryCTAIcon: q,
            productNameClassName: X,
            badgeClassName: K,
            cardClassName: Z,
            prioritizedCurrency: J,
            aspectRatio: $,
            hideStaticBundleBackgroundAsset: tt
        } = t, {
            previewingVariantIndex: te,
            handleEntering: tr,
            handleLeaving: tn
        } = (0, L.f)(e), ti = (0, R.gZ)() ?? J, {
            enabled: tl
        } = (0, A.P)("ProductCard"), ts = (0, I.Mk)(), ta = ts?.tab, tu = (0, x.uM)(), to = i.useMemo(() => (0, R.UU)(e, ta, tu), [e, ta, tu]), tc = (0, T.s7)(e), td = i.useRef(null), {
            isHoveringOrFocusing: tk
        } = (0, m.A)(td), tp = (0, f.U)(e), tC = (0, u.A)(td, tp), {
            handleCardVisibilityChange: tm
        } = (0, g.Z)(e.skuId, ta === S.G2.CATALOG ? "full" : ta), tx = (0, R.ql)(e, p.A.COLLECTIBLES_SHOP_CARD, to), {
            analyticsLocations: tI
        } = (0, C.Ay)(), tA = (0, h.f)({
            product: e,
            analyticsLocations: tI
        }), tg = i.useCallback(t => {
            null != W ? W(t) : (tA(S.sH.OPEN_DETAILS), tx(t))
        }, [tA, W, tx]);
        (0, _.x)(tk, e);
        let {
            enabled: th
        } = (0, A.P)("ProductCard"), t_ = e.type === o.R.BUNDLE && th && e.previewAssets?.fgStatic != null, tf = e.type === o.R.VARIANTS_GROUP && !a, tT = i.useMemo(() => ({
            maxVariantsToShow: 4,
            onClick: tx
        }), [tx]), tv = e.type === o.R.BUNDLE && tl && !tt, tE = !H || !V, tj = !(k && l) || tf, ty = tj || tE, tP = tE || tf;
        return (0, n.jsx)(c.L, {
            innerRef: td,
            onChange: tm,
            threshold: 0,
            children: (0, n.jsx)(d.sqX, {
                ref: tC,
                onClick: tg,
                "aria-label": tc,
                className: s()(Z, B.ty, {
                    [B.yo]: tk
                }),
                onFocus: () => z?.(e.skuId),
                onBlur: () => Q?.(e.skuId),
                onMouseEnter: () => G?.(e.skuId),
                onMouseLeave: () => F?.(e.skuId),
                children: (0, n.jsxs)("div", {
                    className: B.qt,
                    style: {
                        aspectRatio: $
                    },
                    children: [tv && e.previewAssets?.bgStatic != null && (0, n.jsx)("img", {
                        className: B.vD,
                        src: e.previewAssets.bgStatic,
                        alt: ""
                    }), (0, n.jsx)("div", {
                        className: s()(B.Dq, {
                            [B.$r]: !l || tj || tP,
                            [B.T9]: t_
                        }),
                        children: (0, n.jsx)(j.A, {
                            skuId: e.skuId,
                            isCardHovered: tk,
                            overrideVariantIndex: te
                        })
                    }), (0, n.jsxs)("div", {
                        className: B.N1,
                        children: [(0, n.jsx)(v.A, {
                            skuId: e.skuId,
                            badgeOverride: U,
                            className: K,
                            prioritizedCurrency: ti,
                            skipLimitedTimeCheck: D
                        }), !r && (0, n.jsx)(O.A, {
                            skuId: e.skuId,
                            isCardHovered: tk,
                            onTrackClick: tA
                        })]
                    }), ty && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: s()(B.wY, {
                                [B.KY]: t_
                            })
                        }), (0, n.jsxs)("div", {
                            className: B.xQ,
                            children: [tj && (0, n.jsxs)("div", {
                                className: B.xE,
                                children: [!(l && k) && (0, n.jsxs)("div", {
                                    className: B.Ly,
                                    children: [!l && (0, n.jsx)(E.A, {
                                        skuId: e.skuId,
                                        className: s()(X, B.tZ)
                                    }), !k && (0, n.jsx)("div", {
                                        className: B.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(y.A, {
                                            skuId: e.skuId,
                                            prioritizedCurrency: ti
                                        })
                                    })]
                                }), tf && (0, n.jsx)(N.A, {
                                    skuId: e.skuId,
                                    isCollapsed: !tk,
                                    onVariantEnter: tr,
                                    onVariantExit: tn,
                                    overflowProps: tT,
                                    onTrackClick: tA
                                })]
                            }), tE && (0, n.jsx)("div", {
                                className: B.Vs,
                                children: (0, n.jsxs)(d.ButtonGroup, {
                                    wrap: !1,
                                    className: B.Ld,
                                    fullWidth: !0,
                                    children: [!H && (0, n.jsx)(P.A, {
                                        skuId: e.skuId,
                                        cardRef: td,
                                        onClick: w,
                                        text: Y,
                                        prioritizedCurrency: ti,
                                        onClickAnalytics: to,
                                        onTrackClick: tA
                                    }), !V && (0, n.jsx)(b.A, {
                                        skuId: e.skuId,
                                        cardRef: td,
                                        onClick: M,
                                        icon: q,
                                        prioritizedCurrency: ti,
                                        onClickAnalytics: to,
                                        onTrackClick: tA
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            })
        })
    }),
    V = t => {
        let {
            skuId: e,
            ...r
        } = t, i = (0, R.Vm)(e), l = (0, k.A)(() => ({
            cardId: (0, a.A)()
        }));
        return null == i ? null : (0, n.jsx)(x.R9, {
            newValue: l,
            children: (0, n.jsx)(H, {
                product: i,
                ...r
            })
        })
    }