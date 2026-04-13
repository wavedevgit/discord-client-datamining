/** chunk id: 751304 params = (module,exports,require) **/
r.d(t, {
    A: () => B
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(835245),
    o = r(612324),
    u = r(575593),
    c = r(230109),
    d = r(397927),
    p = r(444927),
    k = r(793574),
    C = r(688810),
    m = r(713517),
    x = r(440938),
    g = r(161918),
    A = r(320447),
    h = r(597783),
    I = r(777829),
    v = r(859587),
    _ = r(918838),
    T = r(536572),
    f = r(268959),
    E = r(387945),
    y = r(638006),
    j = r(140877),
    b = r(834384),
    R = r(157200),
    P = r(561769),
    S = r(364616),
    O = r(666839),
    N = r(935094),
    L = r(758836),
    V = r(551497);
let H = l.memo(function(e) {
        let {
            product: t,
            hideWishlistButton: r,
            hideProductName: i,
            hideVariantSwitcher: a,
            hidePrice: p,
            hidePrimaryCTA: H,
            hideSecondaryCTA: B,
            badgeOverride: w,
            skipLimitedTimeCheck: U,
            onClickCard: D,
            onClickPrimaryCTA: M,
            onClickSecondaryCTA: W,
            onMouseEnter: G,
            onMouseLeave: F,
            onFocus: z,
            onBlur: K,
            primaryCTAText: Y,
            secondaryCTAIcon: Q,
            productNameClassName: q,
            badgeClassName: X,
            cardClassName: Z,
            prioritizedCurrency: $,
            aspectRatio: J,
            hideStaticBundleBackgroundAsset: ee
        } = e, {
            previewingVariantIndex: et,
            handleEntering: er,
            handleLeaving: en
        } = (0, N.f)(t), el = (0, P.gZ)() ?? $, {
            enabled: ei
        } = (0, A.P)("ProductCard"), es = (0, g.Mk)(), ea = es?.tab, eo = (0, x.uM)(), eu = l.useMemo(() => (0, P.UU)(t, ea, eo), [t, ea, eo]), ec = (0, T.s7)(t), ed = l.useRef(null), {
            isHoveringOrFocusing: ep
        } = (0, m.A)(ed), ek = (0, _.U)(t), eC = (0, o.A)(ed, ek), {
            handleCardVisibilityChange: em
        } = (0, h.Z)(t.skuId, ea === L.G2.CATALOG ? "full" : ea), ex = (0, P.ql)(t, k.A.COLLECTIBLES_SHOP_CARD, eu), {
            analyticsLocations: eg
        } = (0, C.Ay)(), eA = (0, I.f)({
            product: t,
            analyticsLocations: eg
        }), eh = l.useCallback(e => {
            null != D ? D(e) : (eA(L.sH.OPEN_DETAILS), ex(e))
        }, [eA, D, ex]);
        (0, v.x)(ep, t);
        let {
            enabled: eI
        } = (0, A.P)("ProductCard"), ev = t.type === u.R.BUNDLE && eI && t.previewAssets?.fgStatic != null, e_ = t.type === u.R.VARIANTS_GROUP && !a, eT = l.useMemo(() => ({
            maxVariantsToShow: 4,
            onClick: ex
        }), [ex]), ef = t.type === u.R.BUNDLE && ei && !ee, eE = !H || !B, ey = !(p && i) || e_, ej = ey || eE, eb = eE || e_;
        return (0, n.jsx)(c.L, {
            innerRef: ed,
            onChange: em,
            threshold: 0,
            children: (0, n.jsx)(d.sqX, {
                ref: eC,
                onClick: eh,
                "aria-label": ec,
                className: s()(Z, V.ty, {
                    [V.yo]: ep
                }),
                onFocus: () => z?.(t.skuId),
                onBlur: () => K?.(t.skuId),
                onMouseEnter: () => G?.(t.skuId),
                onMouseLeave: () => F?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: V.qt,
                    style: {
                        aspectRatio: J
                    },
                    children: [ef && t.previewAssets?.bgStatic != null && (0, n.jsx)("img", {
                        className: V.vD,
                        src: t.previewAssets.bgStatic,
                        alt: ""
                    }), (0, n.jsx)("div", {
                        className: s()(V.Dq, {
                            [V.$r]: !i || ey || eb,
                            [V.T9]: ev
                        }),
                        children: (0, n.jsx)(y.A, {
                            skuId: t.skuId,
                            isCardHovered: ep,
                            overrideVariantIndex: et
                        })
                    }), (0, n.jsxs)("div", {
                        className: V.N1,
                        children: [(0, n.jsx)(f.A, {
                            skuId: t.skuId,
                            badgeOverride: w,
                            className: X,
                            prioritizedCurrency: el,
                            skipLimitedTimeCheck: U
                        }), !r && (0, n.jsx)(O.A, {
                            skuId: t.skuId,
                            isCardHovered: ep,
                            onTrackClick: eA
                        })]
                    }), ej && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: s()(V.wY, {
                                [V.KY]: ev
                            })
                        }), (0, n.jsxs)("div", {
                            className: V.xQ,
                            children: [ey && (0, n.jsxs)("div", {
                                className: V.xE,
                                children: [!(i && p) && (0, n.jsxs)("div", {
                                    className: V.Ly,
                                    children: [!i && (0, n.jsx)(E.A, {
                                        skuId: t.skuId,
                                        className: s()(q, V.tZ)
                                    }), !p && (0, n.jsx)("div", {
                                        className: V.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(j.A, {
                                            skuId: t.skuId,
                                            prioritizedCurrency: el
                                        })
                                    })]
                                }), e_ && (0, n.jsx)(S.A, {
                                    skuId: t.skuId,
                                    isCollapsed: !ep,
                                    onVariantEnter: er,
                                    onVariantExit: en,
                                    overflowProps: eT,
                                    onTrackClick: eA
                                })]
                            }), eE && (0, n.jsx)("div", {
                                className: V.Vs,
                                children: (0, n.jsxs)(d.ButtonGroup, {
                                    wrap: !1,
                                    className: V.Ld,
                                    fullWidth: !0,
                                    children: [!H && (0, n.jsx)(b.A, {
                                        skuId: t.skuId,
                                        cardRef: ed,
                                        onClick: M,
                                        text: Y,
                                        prioritizedCurrency: el,
                                        onClickAnalytics: eu,
                                        onTrackClick: eA
                                    }), !B && (0, n.jsx)(R.A, {
                                        skuId: t.skuId,
                                        cardRef: ed,
                                        onClick: W,
                                        icon: Q,
                                        prioritizedCurrency: el,
                                        onClickAnalytics: eu,
                                        onTrackClick: eA
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            })
        })
    }),
    B = e => {
        let {
            skuId: t,
            ...r
        } = e, l = (0, P.Vm)(t), i = (0, p.A)(() => ({
            cardId: (0, a.A)()
        }));
        return null == l ? null : (0, n.jsx)(x.R9, {
            newValue: i,
            children: (0, n.jsx)(H, {
                product: l,
                ...r
            })
        })
    }