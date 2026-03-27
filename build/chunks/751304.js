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
    d = r(793574),
    m = r(713517),
    f = r(440938),
    h = r(161918),
    x = r(597783),
    p = r(859587),
    g = r(536572),
    C = r(268959),
    A = r(387945),
    I = r(638006),
    b = r(140877),
    v = r(834384),
    k = r(157200),
    E = r(561769),
    j = r(364616),
    y = r(666839),
    R = r(935094),
    T = r(758836),
    _ = r(551497);
let L = l.memo(function(e) {
        let {
            product: t,
            hideWishlistButton: r,
            hideProductName: i,
            hideVariantSwitcher: a,
            hidePrice: L,
            hidePrimaryCTA: P,
            hideSecondaryCTA: S,
            badgeOverride: N,
            skipLimitedTimeCheck: O,
            onClickCard: V,
            onClickPrimaryCTA: B,
            onClickSecondaryCTA: M,
            onMouseEnter: W,
            onMouseLeave: w,
            onFocus: H,
            onBlur: U,
            primaryCTAText: G,
            secondaryCTAIcon: D,
            productNameClassName: F,
            badgeClassName: z,
            cardClassName: Q,
            prioritizedCurrency: X,
            aspectRatio: Y
        } = e, {
            previewingVariantIndex: q,
            handleEntering: K,
            handleLeaving: Z
        } = (0, R.f)(t), $ = (0, E.gZ)() ?? X, J = (0, h.Mk)(), ee = J?.tab, et = (0, f.uM)(), er = l.useMemo(() => (0, E.UU)(t, ee, et), [t, ee, et]), en = (0, g.s7)(t), el = l.useRef(null), {
            isHoveringOrFocusing: ei
        } = (0, m.A)(el), {
            handleCardVisibilityChange: es
        } = (0, x.Z)(t.skuId, ee === T.G2.CATALOG ? "full" : ee), ea = (0, E.ql)(t, d.A.COLLECTIBLES_SHOP_CARD, er);
        (0, p.x)(ei, t);
        let eu = t.type === u.R.VARIANTS_GROUP && !a,
            eo = l.useMemo(() => ({
                maxVariantsToShow: 4,
                onClick: ea
            }), [ea]),
            ec = !P || !S,
            ed = !(L && i) || eu,
            em = ed || ec,
            ef = ec || eu;
        return (0, n.jsx)(o.L, {
            innerRef: el,
            onChange: es,
            threshold: 0,
            children: (0, n.jsx)(c.sqX, {
                ref: el,
                onClick: V ?? ea,
                "aria-label": en,
                className: s()(Q, _.ty, {
                    [_.yo]: ei
                }),
                onFocus: () => H?.(t.skuId),
                onBlur: () => U?.(t.skuId),
                onMouseEnter: () => W?.(t.skuId),
                onMouseLeave: () => w?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: _.qt,
                    style: {
                        aspectRatio: Y
                    },
                    children: [(0, n.jsx)("div", {
                        className: s()(_.Dq, {
                            [_.$r]: !i || ed || ef
                        }),
                        children: (0, n.jsx)(I.A, {
                            skuId: t.skuId,
                            isCardHovered: ei,
                            overrideVariantIndex: q
                        })
                    }), (0, n.jsxs)("div", {
                        className: _.N1,
                        children: [(0, n.jsx)(C.A, {
                            skuId: t.skuId,
                            badgeOverride: N,
                            className: z,
                            prioritizedCurrency: $,
                            skipLimitedTimeCheck: O
                        }), !r && (0, n.jsx)(y.A, {
                            skuId: t.skuId,
                            isCardHovered: ei
                        })]
                    }), em && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: _.wY
                        }), (0, n.jsxs)("div", {
                            className: _.xQ,
                            children: [ed && (0, n.jsxs)("div", {
                                className: _.xE,
                                children: [!(i && L) && (0, n.jsxs)("div", {
                                    className: _.Ly,
                                    children: [!i && (0, n.jsx)(A.A, {
                                        skuId: t.skuId,
                                        className: s()(F, _.tZ)
                                    }), !L && (0, n.jsx)("div", {
                                        className: _.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(b.A, {
                                            skuId: t.skuId,
                                            prioritizedCurrency: $
                                        })
                                    })]
                                }), eu && (0, n.jsx)(j.A, {
                                    skuId: t.skuId,
                                    isCollapsed: !ei,
                                    onVariantEnter: K,
                                    onVariantExit: Z,
                                    overflowProps: eo
                                })]
                            }), ec && (0, n.jsx)("div", {
                                className: _.Vs,
                                children: (0, n.jsxs)(c.ButtonGroup, {
                                    wrap: !1,
                                    className: _.Ld,
                                    fullWidth: !0,
                                    children: [!P && (0, n.jsx)(v.A, {
                                        skuId: t.skuId,
                                        cardRef: el,
                                        onClick: B,
                                        text: G,
                                        prioritizedCurrency: $,
                                        onClickAnalytics: er
                                    }), !S && (0, n.jsx)(k.A, {
                                        skuId: t.skuId,
                                        cardRef: el,
                                        onClick: M,
                                        icon: D,
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
        } = e, i = (0, E.Vm)(t), s = l.useMemo(() => ({
            cardId: (0, a.A)()
        }), []);
        return null == i ? null : (0, n.jsx)(f.R9, {
            newValue: s,
            children: (0, n.jsx)(L, {
                product: i,
                ...r
            })
        })
    }