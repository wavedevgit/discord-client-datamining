/** chunk id: 751304 params = (module,exports,require) **/
r.d(t, {
    A: () => P
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(835245),
    u = r(575593),
    o = r(230109),
    c = r(397927),
    d = r(444927),
    h = r(793574),
    m = r(713517),
    x = r(440938),
    f = r(161918),
    p = r(597783),
    g = r(859587),
    v = r(536572),
    C = r(268959),
    A = r(387945),
    b = r(638006),
    k = r(140877),
    I = r(834384),
    y = r(157200),
    E = r(561769),
    j = r(364616),
    R = r(666839),
    _ = r(935094),
    L = r(758836),
    T = r(551497);
let S = l.memo(function(e) {
        let {
            product: t,
            hideWishlistButton: r,
            hideProductName: i,
            hideVariantSwitcher: a,
            hidePrice: d,
            hidePrimaryCTA: S,
            hideSecondaryCTA: P,
            badgeOverride: O,
            skipLimitedTimeCheck: V,
            onClickCard: N,
            onClickPrimaryCTA: w,
            onClickSecondaryCTA: M,
            onMouseEnter: B,
            onMouseLeave: H,
            onFocus: W,
            onBlur: D,
            primaryCTAText: U,
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
        } = (0, _.f)(t), $ = (0, E.gZ)() ?? K, J = (0, f.Mk)(), ee = J?.tab, et = (0, x.uM)(), er = l.useMemo(() => (0, E.UU)(t, ee, et), [t, ee, et]), en = (0, v.s7)(t), el = l.useRef(null), {
            isHoveringOrFocusing: ei
        } = (0, m.A)(el), {
            handleCardVisibilityChange: es
        } = (0, p.Z)(t.skuId, ee === L.G2.CATALOG ? "full" : ee), ea = (0, E.ql)(t, h.A.COLLECTIBLES_SHOP_CARD, er);
        (0, g.x)(ei, t);
        let eu = t.type === u.R.VARIANTS_GROUP && !a,
            eo = l.useMemo(() => ({
                maxVariantsToShow: 4,
                onClick: ea
            }), [ea]),
            ec = !S || !P,
            ed = !(d && i) || eu,
            eh = ed || ec,
            em = ec || eu;
        return (0, n.jsx)(o.L, {
            innerRef: el,
            onChange: es,
            threshold: 0,
            children: (0, n.jsx)(c.sqX, {
                ref: el,
                onClick: N ?? ea,
                "aria-label": en,
                className: s()(Y, T.ty, {
                    [T.yo]: ei
                }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => D?.(t.skuId),
                onMouseEnter: () => B?.(t.skuId),
                onMouseLeave: () => H?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: T.qt,
                    style: {
                        aspectRatio: Q
                    },
                    children: [(0, n.jsx)("div", {
                        className: s()(T.Dq, {
                            [T.$r]: !i || ed || em
                        }),
                        children: (0, n.jsx)(b.A, {
                            skuId: t.skuId,
                            isCardHovered: ei,
                            overrideVariantIndex: X
                        })
                    }), (0, n.jsxs)("div", {
                        className: T.N1,
                        children: [(0, n.jsx)(C.A, {
                            skuId: t.skuId,
                            badgeOverride: O,
                            className: z,
                            prioritizedCurrency: $,
                            skipLimitedTimeCheck: V
                        }), !r && (0, n.jsx)(R.A, {
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
                                children: [!(i && d) && (0, n.jsxs)("div", {
                                    className: T.Ly,
                                    children: [!i && (0, n.jsx)(A.A, {
                                        skuId: t.skuId,
                                        className: s()(F, T.tZ)
                                    }), !d && (0, n.jsx)("div", {
                                        className: T.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(k.A, {
                                            skuId: t.skuId,
                                            prioritizedCurrency: $
                                        })
                                    })]
                                }), eu && (0, n.jsx)(j.A, {
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
                                    children: [!S && (0, n.jsx)(I.A, {
                                        skuId: t.skuId,
                                        cardRef: el,
                                        onClick: w,
                                        text: U,
                                        prioritizedCurrency: $,
                                        onClickAnalytics: er
                                    }), !P && (0, n.jsx)(y.A, {
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
    P = e => {
        let {
            skuId: t,
            ...r
        } = e, l = (0, E.Vm)(t), i = (0, d.A)(() => ({
            cardId: (0, a.A)()
        }));
        return null == l ? null : (0, n.jsx)(x.R9, {
            newValue: i,
            children: (0, n.jsx)(S, {
                product: l,
                ...r
            })
        })
    }