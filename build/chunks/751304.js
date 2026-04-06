/** chunk id: 751304 params = (module,exports,require) **/
r.d(t, {
    A: () => V
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(835245),
    u = r(612324),
    o = r(575593),
    c = r(230109),
    d = r(397927),
    m = r(444927),
    h = r(793574),
    p = r(713517),
    f = r(440938),
    x = r(161918),
    g = r(597783),
    C = r(859587),
    v = r(918838),
    A = r(536572),
    k = r(268959),
    I = r(387945),
    b = r(638006),
    y = r(140877),
    E = r(834384),
    j = r(157200),
    _ = r(561769),
    R = r(364616),
    T = r(666839),
    L = r(935094),
    S = r(758836),
    P = r(551497);
let O = l.memo(function(e) {
        let {
            product: t,
            hideWishlistButton: r,
            hideProductName: i,
            hideVariantSwitcher: a,
            hidePrice: m,
            hidePrimaryCTA: O,
            hideSecondaryCTA: V,
            badgeOverride: N,
            skipLimitedTimeCheck: w,
            onClickCard: M,
            onClickPrimaryCTA: B,
            onClickSecondaryCTA: H,
            onMouseEnter: W,
            onMouseLeave: U,
            onFocus: D,
            onBlur: G,
            primaryCTAText: F,
            secondaryCTAIcon: z,
            productNameClassName: K,
            badgeClassName: Q,
            cardClassName: Y,
            prioritizedCurrency: q,
            aspectRatio: X
        } = e, {
            previewingVariantIndex: Z,
            handleEntering: $,
            handleLeaving: J
        } = (0, L.f)(t), ee = (0, _.gZ)() ?? q, et = (0, x.Mk)(), er = et?.tab, en = (0, f.uM)(), el = l.useMemo(() => (0, _.UU)(t, er, en), [t, er, en]), ei = (0, A.s7)(t), es = l.useRef(null), {
            isHoveringOrFocusing: ea
        } = (0, p.A)(es), eu = (0, v.U)(t), eo = (0, u.A)(es, eu), {
            handleCardVisibilityChange: ec
        } = (0, g.Z)(t.skuId, er === S.G2.CATALOG ? "full" : er), ed = (0, _.ql)(t, h.A.COLLECTIBLES_SHOP_CARD, el);
        (0, C.x)(ea, t);
        let em = t.type === o.R.VARIANTS_GROUP && !a,
            eh = l.useMemo(() => ({
                maxVariantsToShow: 4,
                onClick: ed
            }), [ed]),
            ep = !O || !V,
            ef = !(m && i) || em,
            ex = ef || ep,
            eg = ep || em;
        return (0, n.jsx)(c.L, {
            innerRef: es,
            onChange: ec,
            threshold: 0,
            children: (0, n.jsx)(d.sqX, {
                ref: eo,
                onClick: M ?? ed,
                "aria-label": ei,
                className: s()(Y, P.ty, {
                    [P.yo]: ea
                }),
                onFocus: () => D?.(t.skuId),
                onBlur: () => G?.(t.skuId),
                onMouseEnter: () => W?.(t.skuId),
                onMouseLeave: () => U?.(t.skuId),
                children: (0, n.jsxs)("div", {
                    className: P.qt,
                    style: {
                        aspectRatio: X
                    },
                    children: [(0, n.jsx)("div", {
                        className: s()(P.Dq, {
                            [P.$r]: !i || ef || eg
                        }),
                        children: (0, n.jsx)(b.A, {
                            skuId: t.skuId,
                            isCardHovered: ea,
                            overrideVariantIndex: Z
                        })
                    }), (0, n.jsxs)("div", {
                        className: P.N1,
                        children: [(0, n.jsx)(k.A, {
                            skuId: t.skuId,
                            badgeOverride: N,
                            className: Q,
                            prioritizedCurrency: ee,
                            skipLimitedTimeCheck: w
                        }), !r && (0, n.jsx)(T.A, {
                            skuId: t.skuId,
                            isCardHovered: ea
                        })]
                    }), ex && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: P.wY
                        }), (0, n.jsxs)("div", {
                            className: P.xQ,
                            children: [ef && (0, n.jsxs)("div", {
                                className: P.xE,
                                children: [!(i && m) && (0, n.jsxs)("div", {
                                    className: P.Ly,
                                    children: [!i && (0, n.jsx)(I.A, {
                                        skuId: t.skuId,
                                        className: s()(K, P.tZ)
                                    }), !m && (0, n.jsx)("div", {
                                        className: P.oh,
                                        "aria-hidden": !0,
                                        children: (0, n.jsx)(y.A, {
                                            skuId: t.skuId,
                                            prioritizedCurrency: ee
                                        })
                                    })]
                                }), em && (0, n.jsx)(R.A, {
                                    skuId: t.skuId,
                                    isCollapsed: !ea,
                                    onVariantEnter: $,
                                    onVariantExit: J,
                                    overflowProps: eh
                                })]
                            }), ep && (0, n.jsx)("div", {
                                className: P.Vs,
                                children: (0, n.jsxs)(d.ButtonGroup, {
                                    wrap: !1,
                                    className: P.Ld,
                                    fullWidth: !0,
                                    children: [!O && (0, n.jsx)(E.A, {
                                        skuId: t.skuId,
                                        cardRef: es,
                                        onClick: B,
                                        text: F,
                                        prioritizedCurrency: ee,
                                        onClickAnalytics: el
                                    }), !V && (0, n.jsx)(j.A, {
                                        skuId: t.skuId,
                                        cardRef: es,
                                        onClick: H,
                                        icon: z,
                                        prioritizedCurrency: ee,
                                        onClickAnalytics: el
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            })
        })
    }),
    V = e => {
        let {
            skuId: t,
            ...r
        } = e, l = (0, _.Vm)(t), i = (0, m.A)(() => ({
            cardId: (0, a.A)()
        }));
        return null == l ? null : (0, n.jsx)(f.R9, {
            newValue: i,
            children: (0, n.jsx)(O, {
                product: l,
                ...r
            })
        })
    }