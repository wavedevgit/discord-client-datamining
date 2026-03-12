/** chunk id: 265729 params = (module,exports,require) **/
n.d(t, {
    A: () => G
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    _ = n(339048),
    m = n(736653),
    g = n(46054),
    A = n(728364),
    h = n(807055),
    x = n(264779),
    p = n(35587),
    T = n(982311),
    E = n(465794),
    C = n(212168),
    S = n(976860),
    f = n(287809),
    N = n(469778),
    b = n(45938),
    I = n(927578),
    v = n(780964),
    j = n(411121),
    O = n(12901),
    y = n(840065),
    R = n(652215),
    P = n(788868),
    D = n(985018),
    L = n(160239);

function M(e) {
    let t, {
            outboundPromotion: n,
            code: l,
            addClaimedOutboundPromotionCode: a,
            disabled: o
        } = e,
        [d, u] = s.useState(!1),
        [_, A] = s.useState(!1),
        p = () => u(e => !e),
        E = (0, m.Ay)(),
        C = (0, x.WD)(n.id, E),
        S = null != l,
        f = (0, h.A)(n, S);
    S && d ? t = D.intl.format(D.t.pkxVx6, {
        endDate: f,
        onClickDetails: p
    }) : S && !d ? t = D.intl.format(D.t["4sFeob"], {
        endDate: f,
        onClickDetails: p
    }) : !S && d ? t = D.intl.format(D.t["RBnE+l"], {
        endDate: f,
        onClickDetails: p
    }) : S || d || (t = D.intl.format(D.t["57+7Qn"], {
        endDate: f,
        onClickDetails: p
    }));
    let N = S ? D.intl.string(D.t["2cHUti"]) : D.intl.string(D.t.O13yhz),
        b = s.useCallback(() => A(!1), []),
        {
            outboundTitle: I,
            outboundTermsAndConditions: v
        } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: r()(L.uI, L.AX),
            children: [(0, i.jsxs)("div", {
                className: L.gE,
                children: [(0, i.jsxs)("div", {
                    className: L.At,
                    children: [(0, i.jsx)("div", {
                        className: L.$G,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            src: C,
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
                    text: N,
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
                onClose: b,
                onClaim: a,
                code: l,
                outboundPromotion: n
            }),
            onCloseRequest: b
        })]
    })
}
let G = function(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, d.yK)([N.A], () => N.A.getGiftable()), [l, a] = o().partition(n, e => {
        let {
            giftCodeBatchId: t
        } = e;
        return null == t
    }), m = (0, d.bG)([f.default], () => I.Ay.isPremiumExactly(f.default.getCurrentUser(), P.PremiumTypes.TIER_2)), g = o().groupBy(l, e => (0, b.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)), [h, x] = s.useState(!1);
    s.useEffect(() => {
        u.h.wait(() => {
            (0, _.XJ)().then(() => x(!0))
        })
    }, []);
    let {
        promotionsLoaded: T,
        activeOutboundPromotions: G,
        claimedEndedOutboundPromotions: U,
        claimedOutboundPromotionCodeMap: k,
        addClaimedOutboundPromotionCode: V
    } = (0, p.y7)(), w = G.length + U.length > 0, B = A.m.useExperiment({
        location: "EntitlementGifts"
    }, {
        autoTrackExposure: !1,
        disable: m
    }).enabled && w;
    return h && T ? (0, i.jsxs)(i.Fragment, {
        children: [function() {
            let e = a.find(e => e.giftCodeBatchId === P.FB && !e.consumed),
                n = a.filter(e => e.giftCodeBatchId === P.Bu && !e.consumed) ?? [],
                [s, l] = o().partition(n, e => {
                    let {
                        subscriptionPlanId: t
                    } = e;
                    return t === P.gD.PREMIUM_YEAR_TIER_2
                }),
                d = (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: w ? D.intl.string(D.t.wFsj3B) : void 0
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
                        children: D.intl.format(D.t.G4fwxK, {
                            onClick: () => {
                                (0, O.default)(), (0, S.pX)(R.BVt.APPLICATION_STORE)
                            }
                        })
                    }), (0, i.jsx)(E.A, {
                        showGradient: !0,
                        className: L.aA,
                        subscriptionTier: P.pe.TIER_2,
                        textOptions: {
                            textOverride: D.intl.string(D.t.mr4K7D)
                        }
                    })]
                }) : null;
            return (0, i.jsxs)("div", {
                className: t ? L.sW : void 0,
                children: [d, w ? (0, i.jsx)(c.cGx, {
                    className: L.yF
                }) : null, (0, i.jsx)(C.A, {
                    className: L.Yj,
                    isShown: B,
                    type: C.i.PREMIUM,
                    hasBackground: !0,
                    children: (0, i.jsxs)("div", {
                        className: r()({
                            [L.sW]: !B
                        }),
                        children: [u, U.map(e => {
                            let {
                                code: t,
                                promotion: n
                            } = e;
                            return (0, i.jsx)(M, {
                                outboundPromotion: n,
                                code: t,
                                addClaimedOutboundPromotionCode: V,
                                disabled: !m
                            }, n.id)
                        }), G.map(e => (0, i.jsx)(M, {
                            outboundPromotion: e,
                            code: k[e.id],
                            addClaimedOutboundPromotionCode: V,
                            disabled: !m
                        }, e.id)), null != e ? (0, i.jsx)(j.A, {
                            className: L.uI,
                            skuId: e.skuId,
                            subscriptionPlanId: e.subscriptionPlanId,
                            entitlements: [e],
                            giftCodeBatchId: P.FB
                        }, (0, b.Kx)(e.skuId, e.subscriptionPlanId)) : null, s.length > 0 ? (0, i.jsx)(j.A, {
                            className: L.uI,
                            skuId: s[0].skuId,
                            subscriptionPlanId: s[0].subscriptionPlanId,
                            entitlements: s,
                            giftCodeBatchId: P.Bu
                        }, (0, b.Kx)(s[0].skuId, s[0].subscriptionPlanId)) : null, l.length > 0 ? (0, i.jsx)(j.A, {
                            className: L.uI,
                            skuId: l[0].skuId,
                            subscriptionPlanId: l[0].subscriptionPlanId,
                            entitlements: l,
                            giftCodeBatchId: P.Bu
                        }, (0, b.Kx)(l[0].skuId, l[0].subscriptionPlanId)) : null]
                    })
                })]
            })
        }(), (0, i.jsx)("div", {
            className: L.sW,
            children: (0, i.jsxs)(c.Fmo, {
                component: (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: D.intl.string(D.t["9KeUbY"])
                }),
                children: [(0, i.jsx)(c.cGx, {
                    className: L.yF
                }), 0 === Object.keys(g).length ? (0, i.jsxs)("div", {
                    className: L.p$,
                    children: [(0, i.jsx)("div", {
                        className: L.QT
                    }), (0, i.jsx)(c.H, {
                        className: L.ks,
                        children: D.intl.string(D.t.B1qgZn)
                    }), (0, i.jsx)("p", {
                        className: L.WO,
                        children: D.intl.format(D.t.HezvJ8, {
                            onClick: function() {
                                (0, y.openUserSettings)(v.X.NITRO_PANEL, {
                                    section: R.nc_.PREMIUM
                                })
                            }
                        })
                    })]
                }) : o().keys(g).map(e => {
                    let {
                        skuId: t,
                        subscriptionPlanId: n,
                        giftStyle: s
                    } = (0, b.X6)(e);
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