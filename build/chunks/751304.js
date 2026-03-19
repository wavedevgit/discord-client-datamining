/** chunk id: 751304 params = (module,exports,require) **/
r.d(t, {
    A: () => O
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    a = r.n(i),
    s = r(835245),
    u = r(575593),
    o = r(230109),
    c = r(397927),
    d = r(793574),
    h = r(713517),
    m = r(440938),
    f = r(161918),
    x = r(597783),
    A = r(859587),
    p = r(536572),
    v = r(268959),
    g = r(387945),
    C = r(638006),
    b = r(140877),
    I = r(834384),
    k = r(157200),
    E = r(561769),
    y = r(364616),
    j = r(666839),
    R = r(935094),
    _ = r(758836),
    T = r(75388);
let L = l.memo(function(e) {
        let {
            product: t,
            hideWishlistButton: r,
            hideProductName: i,
            hideVariantSwitcher: s,
            hidePrice: L,
            hidePrimaryCTA: O,
            hideSecondaryCTA: N,
            badgeOverride: P,
            skipLimitedTimeCheck: V,
            onClickCard: S,
            onClickPrimaryCTA: w,
            onClickSecondaryCTA: M,
            onMouseEnter: B,
            onMouseLeave: D,
            onFocus: U,
            onBlur: H,
            primaryCTAText: W,
            secondaryCTAIcon: G,
            productNameClassName: F,
            badgeClassName: z,
            cardClassName: Y,
            prioritizedCurrency: K,
            aspectRatio: Q
        } = e, {
            previewingVariantIndex: X,
            handleEntering: q,
            handleLeaving: Z
        } = (0, R.f)(t), $ = (0, E.gZ)() ?? K, J = (0, f.Mk)(), ee = J?.tab, et = (0, m.uM)(), er = l.useMemo(() => (0, E.UU)(t, ee, et), [t, ee, et]), en = (0, p.s7)(t), el = l.useRef(null), {
            isHoveringOrFocusing: ei
        } = (0, h.A)(el), {
            handleCardVisibilityChange: ea
        } = (0, x.Z)(t.skuId, ee === _.G2.CATALOG ? "full" : ee), es = (0, E.ql)(t, d.A.COLLECTIBLES_SHOP_CARD, er);
        (0, A.x)(ei, t);
        let eu = t.type === u.R.VARIANTS_GROUP && !s,
            eo = l.useMemo(() => ({
                maxVariantsToShow: 4,
                onClick: es
            }), [es]),
            ec = !O || !N,
            ed = !(L && i) || eu,
            eh = ed || ec,
            em = ec || eu;
        return (0, n.jsx)(o.L, {
            innerRef: el,
            onChange: ea,
            threshold: 0,
            children: (0, n.jsx)(c.sqX, {
                ref: el,
                onClick: S ?? es,
                "aria-label": en,
                className: a()(Y, T.ty, {
                    [T.yo]: ei
                }),
                onFocus: () => U?.(t.skuId),
                onBlur: () => H?.(t.skuId),
                onMouseEnter: () => B?.(t.skuId),
                onMouseLeave: () => D?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: T.qt,
                    style: {
                        aspectRatio: Q
                    },
                    children: [(0, n.jsx)("div", {
                        className: a()(T.Dq, {
                            [T.$r]: !i || ed || em
                        }),
                        children: (0, n.jsx)(C.A, {
                            skuId: t.skuId,
                            isCardHovered: ei,
                            overrideVariantIndex: X
                        })
                    }), (0, n.jsxs)("div", {
                        className: T.N1,
                        children: [(0, n.jsx)(v.A, {
                            skuId: t.skuId,
                            badgeOverride: P,
                            className: z,
                            prioritizedCurrency: $,
                            skipLimitedTimeCheck: V
                        }), !r && (0, n.jsx)(j.A, {
                            skuId: t.skuId,
                            isCardHovered: ei
                        })]
                    }), eh && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: T.wY
                        }), (0, n.jsxs)("div", {
                            className: T.xQ,
                            children: [ed && (0, n.jsxs)("div", {
                                className: T.xE,
                                children: [!(i && L) && (0, n.jsxs)("div", {
                                    className: T.Ly,
                                    children: [!i && (0, n.jsx)(g.A, {
                                        skuId: t.skuId,
                                        className: a()(F, T.tZ)
                                    }), !L && (0, n.jsx)("div", {
                                        className: T.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(b.A, {
                                            skuId: t.skuId,
                                            prioritizedCurrency: $
                                        })
                                    })]
                                }), eu && (0, n.jsx)(y.A, {
                                    skuId: t.skuId,
                                    isCollapsed: !ei,
                                    onVariantEnter: q,
                                    onVariantExit: Z,
                                    overflowProps: eo
                                })]
                            }), ec && (0, n.jsx)("div", {
                                className: T.Vs,
                                children: (0, n.jsxs)(c.ButtonGroup, {
                                    wrap: !1,
                                    className: T.Ld,
                                    fullWidth: !0,
                                    children: [!O && (0, n.jsx)(I.A, {
                                        skuId: t.skuId,
                                        cardRef: el,
                                        onClick: w,
                                        text: W,
                                        prioritizedCurrency: $,
                                        onClickAnalytics: er
                                    }), !N && (0, n.jsx)(k.A, {
                                        skuId: t.skuId,
                                        cardRef: el,
                                        onClick: M,
                                        icon: G,
                                        prioritizedCurrency: $,
                                        onClickAnalytics: er
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            })
        })
    }),
    O = e => {
        let {
            skuId: t,
            ...r
        } = e, i = (0, E.Vm)(t), a = l.useMemo(() => ({
            cardId: (0, s.A)()
        }), []);
        return null == i ? null : (0, n.jsx)(m.R9, {
            newValue: a,
            children: (0, n.jsx)(L, {
                product: i,
                ...r
            })
        })
    }