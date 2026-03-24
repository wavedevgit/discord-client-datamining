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
    m = n(339048),
    _ = n(736653),
    g = n(46054),
    x = n(728364),
    A = n(807055),
    h = n(264779),
    p = n(35587),
    f = n(982311),
    T = n(465794),
    S = n(212168),
    E = n(976860),
    b = n(287809),
    C = n(469778),
    v = n(45938),
    N = n(927578),
    I = n(780964),
    j = n(411121),
    y = n(12901),
    O = n(840065),
    R = n(652215),
    L = n(788868),
    P = n(985018),
    D = n(492489);

function G(e) {
    let t, {
            outboundPromotion: n,
            code: l,
            addClaimedOutboundPromotionCode: r,
            disabled: o
        } = e,
        [d, u] = s.useState(!1),
        [m, x] = s.useState(!1),
        p = () => u(e => !e),
        T = (0, _.Ay)(),
        S = (0, h.WD)(n.id, T),
        E = null != l,
        b = (0, A.A)(n, E);
    E && d ? t = P.intl.format(P.t.pkxVx6, {
        endDate: b,
        onClickDetails: p
    }) : E && !d ? t = P.intl.format(P.t["4sFeob"], {
        endDate: b,
        onClickDetails: p
    }) : !E && d ? t = P.intl.format(P.t["RBnE+l"], {
        endDate: b,
        onClickDetails: p
    }) : E || d || (t = P.intl.format(P.t["57+7Qn"], {
        endDate: b,
        onClickDetails: p
    }));
    let C = E ? P.intl.string(P.t["2cHUti"]) : P.intl.string(P.t.O13yhz),
        v = s.useCallback(() => x(!1), []),
        {
            outboundTitle: N,
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
                            src: S,
                            className: D.IJ
                        })
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: N
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: D.__invalid_promotionText,
                            children: t
                        })]
                    })]
                }), !o && (0, i.jsx)(c.Button, {
                    text: C,
                    onClick: () => x(!0),
                    disabled: o,
                    size: "sm"
                })]
            }), d && (0, i.jsx)(c.Text, {
                className: D.GL,
                variant: "text-xs/normal",
                color: "text-default",
                children: g.A.parse(I, !1, {
                    allowLinks: !0
                })
            })]
        }), m && (0, i.jsx)(c.aFV, {
            renderModal: e => (0, i.jsx)(f.A, {
                ...e,
                onClose: v,
                onClaim: r,
                code: l,
                outboundPromotion: n
            }),
            onCloseRequest: v
        })]
    })
}
let M = function(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, d.yK)([C.A], () => C.A.getGiftable()), [l, r] = o().partition(n, e => {
        let {
            giftCodeBatchId: t
        } = e;
        return null == t
    }), _ = (0, d.bG)([b.default], () => N.Ay.isPremiumExactly(b.default.getCurrentUser(), L.PremiumTypes.TIER_2)), g = o().groupBy(l, e => (0, v.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)), [A, h] = s.useState(!1);
    s.useEffect(() => {
        u.h.wait(() => {
            (0, m.XJ)().then(() => h(!0))
        })
    }, []);
    let {
        promotionsLoaded: f,
        activeOutboundPromotions: M,
        claimedEndedOutboundPromotions: U,
        claimedOutboundPromotionCodeMap: k,
        addClaimedOutboundPromotionCode: w
    } = (0, p.y7)(), V = M.length + U.length > 0, B = x.m.useExperiment({
        location: "EntitlementGifts"
    }, {
        autoTrackExposure: !1,
        disable: _
    }).enabled && V;
    return A && f ? (0, i.jsxs)(i.Fragment, {
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
                    children: V ? P.intl.string(P.t.wFsj3B) : void 0
                }),
                u = B ? (0, i.jsxs)("div", {
                    className: D.uo,
                    children: [(0, i.jsx)(c.tvc, {
                        size: "md",
                        color: c.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                        className: D.PC
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: D.Qw,
                        children: P.intl.format(P.t.G4fwxK, {
                            onClick: () => {
                                (0, y.default)(), (0, E.pX)(R.BVt.APPLICATION_STORE)
                            }
                        })
                    }), (0, i.jsx)(T.A, {
                        showGradient: !0,
                        className: D.aA,
                        subscriptionTier: L.pe.TIER_2,
                        textOptions: {
                            textOverride: P.intl.string(P.t.mr4K7D)
                        }
                    })]
                }) : null;
            return (0, i.jsxs)("div", {
                className: t ? D.sW : void 0,
                children: [d, V ? (0, i.jsx)(c.cGx, {
                    className: D.yF
                }) : null, (0, i.jsx)(S.A, {
                    className: D.Yj,
                    isShown: B,
                    type: S.i.PREMIUM,
                    hasBackground: !0,
                    children: (0, i.jsxs)("div", {
                        className: a()({
                            [D.sW]: !B
                        }),
                        children: [u, U.map(e => {
                            let {
                                code: t,
                                promotion: n
                            } = e;
                            return (0, i.jsx)(G, {
                                outboundPromotion: n,
                                code: t,
                                addClaimedOutboundPromotionCode: w,
                                disabled: !_
                            }, n.id)
                        }), M.map(e => (0, i.jsx)(G, {
                            outboundPromotion: e,
                            code: k[e.id],
                            addClaimedOutboundPromotionCode: w,
                            disabled: !_
                        }, e.id)), null != e ? (0, i.jsx)(j.A, {
                            className: D.uI,
                            skuId: e.skuId,
                            subscriptionPlanId: e.subscriptionPlanId,
                            entitlements: [e],
                            giftCodeBatchId: L.FB
                        }, (0, v.Kx)(e.skuId, e.subscriptionPlanId)) : null, s.length > 0 ? (0, i.jsx)(j.A, {
                            className: D.uI,
                            skuId: s[0].skuId,
                            subscriptionPlanId: s[0].subscriptionPlanId,
                            entitlements: s,
                            giftCodeBatchId: L.Bu
                        }, (0, v.Kx)(s[0].skuId, s[0].subscriptionPlanId)) : null, l.length > 0 ? (0, i.jsx)(j.A, {
                            className: D.uI,
                            skuId: l[0].skuId,
                            subscriptionPlanId: l[0].subscriptionPlanId,
                            entitlements: l,
                            giftCodeBatchId: L.Bu
                        }, (0, v.Kx)(l[0].skuId, l[0].subscriptionPlanId)) : null]
                    })
                })]
            })
        }(), (0, i.jsx)("div", {
            className: D.sW,
            children: (0, i.jsxs)(c.Fmo, {
                component: (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: P.intl.string(P.t["9KeUbY"])
                }),
                children: [(0, i.jsx)(c.cGx, {
                    className: D.yF
                }), 0 === Object.keys(g).length ? (0, i.jsxs)("div", {
                    className: D.p$,
                    children: [(0, i.jsx)("div", {
                        className: D.QT
                    }), (0, i.jsx)(c.H, {
                        className: D.ks,
                        children: P.intl.string(P.t.B1qgZn)
                    }), (0, i.jsx)("p", {
                        className: D.WO,
                        children: P.intl.format(P.t.HezvJ8, {
                            onClick: function() {
                                (0, O.openUserSettings)(I.X.NITRO_PANEL)
                            }
                        })
                    })]
                }) : o().keys(g).map(e => {
                    let {
                        skuId: t,
                        subscriptionPlanId: n,
                        giftStyle: s
                    } = (0, v.X6)(e);
                    return (0, i.jsx)(j.A, {
                        className: D.uI,
                        skuId: t,
                        subscriptionPlanId: n,
                        entitlements: g[e],
                        giftStyle: s
                    }, e)
                })]
            })
        })]
    }) : (0, i.jsx)(c.y$y, {
        className: D.Lq
    })
}