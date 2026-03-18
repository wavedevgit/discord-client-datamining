/** chunk id: 265729 params = (module,exports,require) **/
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
    _ = n(339048),
    m = n(736653),
    g = n(46054),
    A = n(728364),
    x = n(807055),
    h = n(264779),
    p = n(35587),
    T = n(982311),
    E = n(465794),
    S = n(212168),
    f = n(976860),
    C = n(287809),
    b = n(469778),
    N = n(45938),
    I = n(927578),
    v = n(780964),
    j = n(411121),
    y = n(12901),
    R = n(840065),
    O = n(652215),
    D = n(788868),
    P = n(985018),
    L = n(492489);

function G(e) {
    let t, {
            outboundPromotion: n,
            code: l,
            addClaimedOutboundPromotionCode: r,
            disabled: o
        } = e,
        [d, u] = s.useState(!1),
        [_, A] = s.useState(!1),
        p = () => u(e => !e),
        E = (0, m.Ay)(),
        S = (0, h.WD)(n.id, E),
        f = null != l,
        C = (0, x.A)(n, f);
    f && d ? t = P.intl.format(P.t.pkxVx6, {
        endDate: C,
        onClickDetails: p
    }) : f && !d ? t = P.intl.format(P.t["4sFeob"], {
        endDate: C,
        onClickDetails: p
    }) : !f && d ? t = P.intl.format(P.t["RBnE+l"], {
        endDate: C,
        onClickDetails: p
    }) : f || d || (t = P.intl.format(P.t["57+7Qn"], {
        endDate: C,
        onClickDetails: p
    }));
    let b = f ? P.intl.string(P.t["2cHUti"]) : P.intl.string(P.t.O13yhz),
        N = s.useCallback(() => A(!1), []),
        {
            outboundTitle: I,
            outboundTermsAndConditions: v
        } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: a()(L.uI, L.AX),
            children: [(0, i.jsxs)("div", {
                className: L.gE,
                children: [(0, i.jsxs)("div", {
                    className: L.At,
                    children: [(0, i.jsx)("div", {
                        className: L.$G,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            src: S,
                            className: L.IJ
                        })
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: I
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: L.__invalid_promotionText,
                            children: t
                        })]
                    })]
                }), !o && (0, i.jsx)(c.Button, {
                    text: b,
                    onClick: () => A(!0),
                    disabled: o,
                    size: "sm"
                })]
            }), d && (0, i.jsx)(c.Text, {
                className: L.GL,
                variant: "text-xs/normal",
                color: "text-default",
                children: g.A.parse(v, !1, {
                    allowLinks: !0
                })
            })]
        }), _ && (0, i.jsx)(c.aFV, {
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
let M = function(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, d.yK)([b.A], () => b.A.getGiftable()), [l, r] = o().partition(n, e => {
        let {
            giftCodeBatchId: t
        } = e;
        return null == t
    }), m = (0, d.bG)([C.default], () => I.Ay.isPremiumExactly(C.default.getCurrentUser(), D.PremiumTypes.TIER_2)), g = o().groupBy(l, e => (0, N.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)), [x, h] = s.useState(!1);
    s.useEffect(() => {
        u.h.wait(() => {
            (0, _.XJ)().then(() => h(!0))
        })
    }, []);
    let {
        promotionsLoaded: T,
        activeOutboundPromotions: M,
        claimedEndedOutboundPromotions: U,
        claimedOutboundPromotionCodeMap: k,
        addClaimedOutboundPromotionCode: V
    } = (0, p.y7)(), w = M.length + U.length > 0, B = A.m.useExperiment({
        location: "EntitlementGifts"
    }, {
        autoTrackExposure: !1,
        disable: m
    }).enabled && w;
    return x && T ? (0, i.jsxs)(i.Fragment, {
        children: [function() {
            let e = r.find(e => e.giftCodeBatchId === D.FB && !e.consumed),
                n = r.filter(e => e.giftCodeBatchId === D.Bu && !e.consumed) ?? [],
                [s, l] = o().partition(n, e => {
                    let {
                        subscriptionPlanId: t
                    } = e;
                    return t === D.gD.PREMIUM_YEAR_TIER_2
                }),
                d = (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: w ? P.intl.string(P.t.wFsj3B) : void 0
                }),
                u = B ? (0, i.jsxs)("div", {
                    className: L.uo,
                    children: [(0, i.jsx)(c.tvc, {
                        size: "md",
                        color: c.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                        className: L.PC
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: L.Qw,
                        children: P.intl.format(P.t.G4fwxK, {
                            onClick: () => {
                                (0, y.default)(), (0, f.pX)(O.BVt.APPLICATION_STORE)
                            }
                        })
                    }), (0, i.jsx)(E.A, {
                        showGradient: !0,
                        className: L.aA,
                        subscriptionTier: D.pe.TIER_2,
                        textOptions: {
                            textOverride: P.intl.string(P.t.mr4K7D)
                        }
                    })]
                }) : null;
            return (0, i.jsxs)("div", {
                className: t ? L.sW : void 0,
                children: [d, w ? (0, i.jsx)(c.cGx, {
                    className: L.yF
                }) : null, (0, i.jsx)(S.A, {
                    className: L.Yj,
                    isShown: B,
                    type: S.i.PREMIUM,
                    hasBackground: !0,
                    children: (0, i.jsxs)("div", {
                        className: a()({
                            [L.sW]: !B
                        }),
                        children: [u, U.map(e => {
                            let {
                                code: t,
                                promotion: n
                            } = e;
                            return (0, i.jsx)(G, {
                                outboundPromotion: n,
                                code: t,
                                addClaimedOutboundPromotionCode: V,
                                disabled: !m
                            }, n.id)
                        }), M.map(e => (0, i.jsx)(G, {
                            outboundPromotion: e,
                            code: k[e.id],
                            addClaimedOutboundPromotionCode: V,
                            disabled: !m
                        }, e.id)), null != e ? (0, i.jsx)(j.A, {
                            className: L.uI,
                            skuId: e.skuId,
                            subscriptionPlanId: e.subscriptionPlanId,
                            entitlements: [e],
                            giftCodeBatchId: D.FB
                        }, (0, N.Kx)(e.skuId, e.subscriptionPlanId)) : null, s.length > 0 ? (0, i.jsx)(j.A, {
                            className: L.uI,
                            skuId: s[0].skuId,
                            subscriptionPlanId: s[0].subscriptionPlanId,
                            entitlements: s,
                            giftCodeBatchId: D.Bu
                        }, (0, N.Kx)(s[0].skuId, s[0].subscriptionPlanId)) : null, l.length > 0 ? (0, i.jsx)(j.A, {
                            className: L.uI,
                            skuId: l[0].skuId,
                            subscriptionPlanId: l[0].subscriptionPlanId,
                            entitlements: l,
                            giftCodeBatchId: D.Bu
                        }, (0, N.Kx)(l[0].skuId, l[0].subscriptionPlanId)) : null]
                    })
                })]
            })
        }(), (0, i.jsx)("div", {
            className: L.sW,
            children: (0, i.jsxs)(c.Fmo, {
                component: (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: P.intl.string(P.t["9KeUbY"])
                }),
                children: [(0, i.jsx)(c.cGx, {
                    className: L.yF
                }), 0 === Object.keys(g).length ? (0, i.jsxs)("div", {
                    className: L.p$,
                    children: [(0, i.jsx)("div", {
                        className: L.QT
                    }), (0, i.jsx)(c.H, {
                        className: L.ks,
                        children: P.intl.string(P.t.B1qgZn)
                    }), (0, i.jsx)("p", {
                        className: L.WO,
                        children: P.intl.format(P.t.HezvJ8, {
                            onClick: function() {
                                (0, R.openUserSettings)(v.X.NITRO_PANEL)
                            }
                        })
                    })]
                }) : o().keys(g).map(e => {
                    let {
                        skuId: t,
                        subscriptionPlanId: n,
                        giftStyle: s
                    } = (0, N.X6)(e);
                    return (0, i.jsx)(j.A, {
                        className: L.uI,
                        skuId: t,
                        subscriptionPlanId: n,
                        entitlements: g[e],
                        giftStyle: s
                    }, e)
                })]
            })
        })]
    }) : (0, i.jsx)(c.y$y, {
        className: L.Lq
    })
}