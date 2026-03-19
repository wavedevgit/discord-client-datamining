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
    C = n(976860),
    f = n(287809),
    N = n(469778),
    I = n(45938),
    b = n(927578),
    v = n(780964),
    j = n(411121),
    y = n(12901),
    O = n(840065),
    R = n(652215),
    L = n(788868),
    D = n(985018),
    P = n(492489);

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
        C = null != l,
        f = (0, x.A)(n, C);
    C && d ? t = D.intl.format(D.t.pkxVx6, {
        endDate: f,
        onClickDetails: p
    }) : C && !d ? t = D.intl.format(D.t["4sFeob"], {
        endDate: f,
        onClickDetails: p
    }) : !C && d ? t = D.intl.format(D.t["RBnE+l"], {
        endDate: f,
        onClickDetails: p
    }) : C || d || (t = D.intl.format(D.t["57+7Qn"], {
        endDate: f,
        onClickDetails: p
    }));
    let N = C ? D.intl.string(D.t["2cHUti"]) : D.intl.string(D.t.O13yhz),
        I = s.useCallback(() => A(!1), []),
        {
            outboundTitle: b,
            outboundTermsAndConditions: v
        } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: a()(P.uI, P.AX),
            children: [(0, i.jsxs)("div", {
                className: P.gE,
                children: [(0, i.jsxs)("div", {
                    className: P.At,
                    children: [(0, i.jsx)("div", {
                        className: P.$G,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            src: S,
                            className: P.IJ
                        })
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: b
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: P.__invalid_promotionText,
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
                className: P.GL,
                variant: "text-xs/normal",
                color: "text-default",
                children: g.A.parse(v, !1, {
                    allowLinks: !0
                })
            })]
        }), _ && (0, i.jsx)(c.aFV, {
            renderModal: e => (0, i.jsx)(T.A, {
                ...e,
                onClose: I,
                onClaim: r,
                code: l,
                outboundPromotion: n
            }),
            onCloseRequest: I
        })]
    })
}
let M = function(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, d.yK)([N.A], () => N.A.getGiftable()), [l, r] = o().partition(n, e => {
        let {
            giftCodeBatchId: t
        } = e;
        return null == t
    }), m = (0, d.bG)([f.default], () => b.Ay.isPremiumExactly(f.default.getCurrentUser(), L.PremiumTypes.TIER_2)), g = o().groupBy(l, e => (0, I.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)), [x, h] = s.useState(!1);
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
            let e = r.find(e => e.giftCodeBatchId === L.FB && !e.consumed),
                n = r.filter(e => e.giftCodeBatchId === L.Bu && !e.consumed) ?? [],
                [s, l] = o().partition(n, e => {
                    let {
                        subscriptionPlanId: t
                    } = e;
                    return t === L.gD.PREMIUM_YEAR_TIER_2
                }),
                d = (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: w ? D.intl.string(D.t.wFsj3B) : void 0
                }),
                u = B ? (0, i.jsxs)("div", {
                    className: P.uo,
                    children: [(0, i.jsx)(c.tvc, {
                        size: "md",
                        color: c.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                        className: P.PC
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: P.Qw,
                        children: D.intl.format(D.t.G4fwxK, {
                            onClick: () => {
                                (0, y.default)(), (0, C.pX)(R.BVt.APPLICATION_STORE)
                            }
                        })
                    }), (0, i.jsx)(E.A, {
                        showGradient: !0,
                        className: P.aA,
                        subscriptionTier: L.pe.TIER_2,
                        textOptions: {
                            textOverride: D.intl.string(D.t.mr4K7D)
                        }
                    })]
                }) : null;
            return (0, i.jsxs)("div", {
                className: t ? P.sW : void 0,
                children: [d, w ? (0, i.jsx)(c.cGx, {
                    className: P.yF
                }) : null, (0, i.jsx)(S.A, {
                    className: P.Yj,
                    isShown: B,
                    type: S.i.PREMIUM,
                    hasBackground: !0,
                    children: (0, i.jsxs)("div", {
                        className: a()({
                            [P.sW]: !B
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
                            className: P.uI,
                            skuId: e.skuId,
                            subscriptionPlanId: e.subscriptionPlanId,
                            entitlements: [e],
                            giftCodeBatchId: L.FB
                        }, (0, I.Kx)(e.skuId, e.subscriptionPlanId)) : null, s.length > 0 ? (0, i.jsx)(j.A, {
                            className: P.uI,
                            skuId: s[0].skuId,
                            subscriptionPlanId: s[0].subscriptionPlanId,
                            entitlements: s,
                            giftCodeBatchId: L.Bu
                        }, (0, I.Kx)(s[0].skuId, s[0].subscriptionPlanId)) : null, l.length > 0 ? (0, i.jsx)(j.A, {
                            className: P.uI,
                            skuId: l[0].skuId,
                            subscriptionPlanId: l[0].subscriptionPlanId,
                            entitlements: l,
                            giftCodeBatchId: L.Bu
                        }, (0, I.Kx)(l[0].skuId, l[0].subscriptionPlanId)) : null]
                    })
                })]
            })
        }(), (0, i.jsx)("div", {
            className: P.sW,
            children: (0, i.jsxs)(c.Fmo, {
                component: (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: D.intl.string(D.t["9KeUbY"])
                }),
                children: [(0, i.jsx)(c.cGx, {
                    className: P.yF
                }), 0 === Object.keys(g).length ? (0, i.jsxs)("div", {
                    className: P.p$,
                    children: [(0, i.jsx)("div", {
                        className: P.QT
                    }), (0, i.jsx)(c.H, {
                        className: P.ks,
                        children: D.intl.string(D.t.B1qgZn)
                    }), (0, i.jsx)("p", {
                        className: P.WO,
                        children: D.intl.format(D.t.HezvJ8, {
                            onClick: function() {
                                (0, O.openUserSettings)(v.X.NITRO_PANEL)
                            }
                        })
                    })]
                }) : o().keys(g).map(e => {
                    let {
                        skuId: t,
                        subscriptionPlanId: n,
                        giftStyle: s
                    } = (0, I.X6)(e);
                    return (0, i.jsx)(j.A, {
                        className: P.uI,
                        skuId: t,
                        subscriptionPlanId: n,
                        entitlements: g[e],
                        giftStyle: s
                    }, e)
                })]
            })
        })]
    }) : (0, i.jsx)(c.y$y, {
        className: P.Lq
    })
}