/** chunk id: 790256 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    m = n(339048),
    g = n(736653),
    _ = n(46054),
    A = n(728364),
    x = n(807055),
    h = n(264779),
    p = n(35587),
    T = n(982311),
    f = n(465794),
    E = n(212168),
    S = n(976860),
    b = n(287809),
    C = n(469778),
    N = n(45938),
    v = n(927578),
    I = n(780964),
    j = n(12901),
    y = n(840065),
    O = n(709732),
    R = n(652215),
    P = n(788868),
    L = n(985018),
    D = n(827033);

function G(e) {
    let t, {
            outboundPromotion: n,
            code: l,
            addClaimedOutboundPromotionCode: r,
            disabled: o
        } = e,
        [d, u] = s.useState(!1),
        [m, A] = s.useState(!1),
        p = () => u(e => !e),
        f = (0, g.Ay)(),
        E = (0, h.WD)(n.id, f),
        S = null != l,
        b = (0, x.A)(n, S);
    S && d ? t = L.intl.format(L.t.pkxVx6, {
        endDate: b,
        onClickDetails: p
    }) : S && !d ? t = L.intl.format(L.t["4sFeob"], {
        endDate: b,
        onClickDetails: p
    }) : !S && d ? t = L.intl.format(L.t["RBnE+l"], {
        endDate: b,
        onClickDetails: p
    }) : S || d || (t = L.intl.format(L.t["57+7Qn"], {
        endDate: b,
        onClickDetails: p
    }));
    let C = S ? L.intl.string(L.t["2cHUti"]) : L.intl.string(L.t.O13yhz),
        N = s.useCallback(() => A(!1), []),
        {
            outboundTitle: v,
            outboundTermsAndConditions: I
        } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: a()(D.uI, D.AX),
            children: [(0, i.jsxs)("div", {
                className: D.gE,
                children: [(0, i.jsxs)("div", {
                    className: D.At,
                    children: [(0, i.jsx)("div", {
                        className: D.$G,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            src: E,
                            className: D.IJ
                        })
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: v
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: D.__invalid_promotionText,
                            children: t
                        })]
                    })]
                }), !o && (0, i.jsx)(c.Button, {
                    text: C,
                    onClick: () => A(!0),
                    disabled: o,
                    size: "sm"
                })]
            }), d && (0, i.jsx)(c.Text, {
                className: D.GL,
                variant: "text-xs/normal",
                color: "text-default",
                children: _.A.parse(I, !1, {
                    allowLinks: !0
                })
            })]
        }), m && (0, i.jsx)(c.aFV, {
            renderModal: e => (0, i.jsx)(T.A, {
                ...e,
                onClose: N,
                onClaim: r,
                code: l,
                outboundPromotion: n
            }),
            onCloseRequest: N
        })]
    })
}
let M = function() {
    let e = (0, d.yK)([C.A], () => C.A.getGiftable()),
        [t, n] = o().partition(e, e => {
            let {
                giftCodeBatchId: t
            } = e;
            return null == t
        }),
        l = (0, d.bG)([b.default], () => v.Ay.isPremiumExactly(b.default.getCurrentUser(), P.PremiumTypes.TIER_2)),
        r = o().groupBy(t, e => (0, N.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [g, _] = s.useState(!1);
    s.useEffect(() => {
        u.h.wait(() => {
            (0, m.XJ)().then(() => _(!0))
        })
    }, []);
    let {
        promotionsLoaded: x,
        activeOutboundPromotions: h,
        claimedEndedOutboundPromotions: T,
        claimedOutboundPromotionCodeMap: M,
        addClaimedOutboundPromotionCode: k
    } = (0, p.y7)(), U = h.length + T.length > 0, w = A.m.useExperiment({
        location: "EntitlementGifts"
    }, {
        autoTrackExposure: !1,
        disable: l
    }).enabled && U;
    return g && x ? (0, i.jsxs)(i.Fragment, {
        children: [function() {
            let e = n.find(e => e.giftCodeBatchId === P.FB && !e.consumed),
                t = n.filter(e => e.giftCodeBatchId === P.Bu && !e.consumed) ?? [],
                [s, r] = o().partition(t, e => {
                    let {
                        subscriptionPlanId: t
                    } = e;
                    return t === P.gD.PREMIUM_YEAR_TIER_2
                }),
                d = (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: U ? L.intl.string(L.t.wFsj3B) : void 0
                }),
                u = w ? (0, i.jsxs)("div", {
                    className: D.uo,
                    children: [(0, i.jsx)(c.tvc, {
                        size: "md",
                        color: c.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                        className: D.PC
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: D.Qw,
                        children: L.intl.format(L.t.G4fwxK, {
                            onClick: () => {
                                (0, j.default)(), (0, S.pX)(R.BVt.APPLICATION_STORE)
                            }
                        })
                    }), (0, i.jsx)(f.A, {
                        showGradient: !0,
                        className: D.aA,
                        subscriptionTier: P.pe.TIER_2,
                        textOptions: {
                            textOverride: L.intl.string(L.t.mr4K7D)
                        }
                    })]
                }) : null;
            return (0, i.jsxs)("div", {
                children: [d, U ? (0, i.jsx)(c.cGx, {
                    className: D.yF
                }) : null, (0, i.jsx)(E.A, {
                    className: D.Yj,
                    isShown: w,
                    type: E.i.PREMIUM,
                    hasBackground: !0,
                    children: (0, i.jsxs)("div", {
                        className: a()({
                            [D.sW]: !w
                        }),
                        children: [u, T.map(e => {
                            let {
                                code: t,
                                promotion: n
                            } = e;
                            return (0, i.jsx)(G, {
                                outboundPromotion: n,
                                code: t,
                                addClaimedOutboundPromotionCode: k,
                                disabled: !l
                            }, n.id)
                        }), h.map(e => (0, i.jsx)(G, {
                            outboundPromotion: e,
                            code: M[e.id],
                            addClaimedOutboundPromotionCode: k,
                            disabled: !l
                        }, e.id)), null != e ? (0, i.jsx)(O.A, {
                            className: D.uI,
                            skuId: e.skuId,
                            subscriptionPlanId: e.subscriptionPlanId,
                            entitlements: [e],
                            giftCodeBatchId: P.FB
                        }, (0, N.Kx)(e.skuId, e.subscriptionPlanId)) : null, s.length > 0 ? (0, i.jsx)(O.A, {
                            className: D.uI,
                            skuId: s[0].skuId,
                            subscriptionPlanId: s[0].subscriptionPlanId,
                            entitlements: s,
                            giftCodeBatchId: P.Bu
                        }, (0, N.Kx)(s[0].skuId, s[0].subscriptionPlanId)) : null, r.length > 0 ? (0, i.jsx)(O.A, {
                            className: D.uI,
                            skuId: r[0].skuId,
                            subscriptionPlanId: r[0].subscriptionPlanId,
                            entitlements: r,
                            giftCodeBatchId: P.Bu
                        }, (0, N.Kx)(r[0].skuId, r[0].subscriptionPlanId)) : null]
                    })
                })]
            })
        }(), (0, i.jsx)("div", {
            className: D.sW,
            children: (0, i.jsxs)(c.Fmo, {
                component: (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: L.intl.string(L.t["9KeUbY"])
                }),
                children: [(0, i.jsx)(c.cGx, {
                    className: D.yF
                }), 0 === Object.keys(r).length ? (0, i.jsxs)("div", {
                    className: D.p$,
                    children: [(0, i.jsx)("div", {
                        className: D.QT
                    }), (0, i.jsx)(c.H, {
                        className: D.ks,
                        children: L.intl.string(L.t.B1qgZn)
                    }), (0, i.jsx)("p", {
                        className: D.WO,
                        children: L.intl.format(L.t.HezvJ8, {
                            onClick: function() {
                                (0, y.openUserSettings)(I.X.NITRO_PANEL)
                            }
                        })
                    })]
                }) : o().keys(r).map(e => {
                    let {
                        skuId: t,
                        subscriptionPlanId: n,
                        giftStyle: s
                    } = (0, N.X6)(e);
                    return (0, i.jsx)(O.A, {
                        className: D.uI,
                        skuId: t,
                        subscriptionPlanId: n,
                        entitlements: r[e],
                        giftStyle: s
                    }, e)
                })]
            })
        })]
    }) : (0, i.jsx)(c.y$y, {
        className: D.Lq
    })
}