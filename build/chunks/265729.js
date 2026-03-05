/** chunk id: 265729, original params: e,t,n (module,exports,require) **/
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
    g = n(736653),
    m = n(46054),
    A = n(728364),
    h = n(807055),
    p = n(264779),
    x = n(35587),
    E = n(982311),
    T = n(465794),
    S = n(212168),
    C = n(976860),
    I = n(287809),
    f = n(469778),
    b = n(45938),
    N = n(927578),
    v = n(780964),
    j = n(411121),
    O = n(12901),
    R = n(840065),
    y = n(652215),
    P = n(788868),
    L = n(985018),
    D = n(492489);

function G(e) {
    let t, {
            outboundPromotion: n,
            code: l,
            addClaimedOutboundPromotionCode: r,
            disabled: o
        } = e,
        [d, u] = s.useState(!1),
        [_, A] = s.useState(!1),
        x = () => u(e => !e),
        T = (0, g.Ay)(),
        S = (0, p.WD)(n.id, T),
        C = null != l,
        I = (0, h.A)(n, C);
    C && d ? t = L.intl.format(L.t.pkxVx6, {
        endDate: I,
        onClickDetails: x
    }) : C && !d ? t = L.intl.format(L.t["4sFeob"], {
        endDate: I,
        onClickDetails: x
    }) : !C && d ? t = L.intl.format(L.t["RBnE+l"], {
        endDate: I,
        onClickDetails: x
    }) : C || d || (t = L.intl.format(L.t["57+7Qn"], {
        endDate: I,
        onClickDetails: x
    }));
    let f = C ? L.intl.string(L.t["2cHUti"]) : L.intl.string(L.t.O13yhz),
        b = s.useCallback(() => A(!1), []),
        {
            outboundTitle: N,
            outboundTermsAndConditions: v
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
                    text: f,
                    onClick: () => A(!0),
                    disabled: o,
                    size: "sm"
                })]
            }), d && (0, i.jsx)(c.Text, {
                className: D.GL,
                variant: "text-xs/normal",
                color: "text-default",
                children: m.A.parse(v, !1, {
                    allowLinks: !0
                })
            })]
        }), _ && (0, i.jsx)(c.aFV, {
            renderModal: e => (0, i.jsx)(E.A, {
                ...e,
                onClose: b,
                onClaim: r,
                code: l,
                outboundPromotion: n
            }),
            onCloseRequest: b
        })]
    })
}
let M = function(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, d.yK)([f.A], () => f.A.getGiftable()), [l, r] = o().partition(n, e => {
        let {
            giftCodeBatchId: t
        } = e;
        return null == t
    }), g = (0, d.bG)([I.default], () => N.Ay.isPremiumExactly(I.default.getCurrentUser(), P.PremiumTypes.TIER_2)), m = o().groupBy(l, e => (0, b.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)), [h, p] = s.useState(!1);
    s.useEffect(() => {
        u.h.wait(() => {
            (0, _.XJ)().then(() => p(!0))
        })
    }, []);
    let {
        promotionsLoaded: E,
        activeOutboundPromotions: M,
        claimedEndedOutboundPromotions: U,
        claimedOutboundPromotionCodeMap: k,
        addClaimedOutboundPromotionCode: V
    } = (0, x.y7)(), w = M.length + U.length > 0, H = A.m.useExperiment({
        location: "EntitlementGifts"
    }, {
        autoTrackExposure: !1,
        disable: g
    }).enabled && w;
    return h && E ? (0, i.jsxs)(i.Fragment, {
        children: [function() {
            let e = r.find(e => e.giftCodeBatchId === P.FB && !e.consumed),
                n = r.filter(e => e.giftCodeBatchId === P.Bu && !e.consumed) ?? [],
                [s, l] = o().partition(n, e => {
                    let {
                        subscriptionPlanId: t
                    } = e;
                    return t === P.gD.PREMIUM_YEAR_TIER_2
                }),
                d = (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: w ? L.intl.string(L.t.wFsj3B) : void 0
                }),
                u = H ? (0, i.jsxs)("div", {
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
                                (0, O.default)(), (0, C.pX)(y.BVt.APPLICATION_STORE)
                            }
                        })
                    }), (0, i.jsx)(T.A, {
                        showGradient: !0,
                        className: D.aA,
                        subscriptionTier: P.pe.TIER_2,
                        textOptions: {
                            textOverride: L.intl.string(L.t.mr4K7D)
                        }
                    })]
                }) : null;
            return (0, i.jsxs)("div", {
                className: t ? D.sW : void 0,
                children: [d, w ? (0, i.jsx)(c.cGx, {
                    className: D.yF
                }) : null, (0, i.jsx)(S.A, {
                    className: D.Yj,
                    isShown: H,
                    type: S.i.PREMIUM,
                    hasBackground: !0,
                    children: (0, i.jsxs)("div", {
                        className: a()({
                            [D.sW]: !H
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
                                disabled: !g
                            }, n.id)
                        }), M.map(e => (0, i.jsx)(G, {
                            outboundPromotion: e,
                            code: k[e.id],
                            addClaimedOutboundPromotionCode: V,
                            disabled: !g
                        }, e.id)), null != e ? (0, i.jsx)(j.A, {
                            className: D.uI,
                            skuId: e.skuId,
                            subscriptionPlanId: e.subscriptionPlanId,
                            entitlements: [e],
                            giftCodeBatchId: P.FB
                        }, (0, b.Kx)(e.skuId, e.subscriptionPlanId)) : null, s.length > 0 ? (0, i.jsx)(j.A, {
                            className: D.uI,
                            skuId: s[0].skuId,
                            subscriptionPlanId: s[0].subscriptionPlanId,
                            entitlements: s,
                            giftCodeBatchId: P.Bu
                        }, (0, b.Kx)(s[0].skuId, s[0].subscriptionPlanId)) : null, l.length > 0 ? (0, i.jsx)(j.A, {
                            className: D.uI,
                            skuId: l[0].skuId,
                            subscriptionPlanId: l[0].subscriptionPlanId,
                            entitlements: l,
                            giftCodeBatchId: P.Bu
                        }, (0, b.Kx)(l[0].skuId, l[0].subscriptionPlanId)) : null]
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
                }), 0 === Object.keys(m).length ? (0, i.jsxs)("div", {
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
                                (0, R.openUserSettings)(v.X.NITRO_PANEL, {
                                    section: y.nc_.PREMIUM
                                })
                            }
                        })
                    })]
                }) : o().keys(m).map(e => {
                    let {
                        skuId: t,
                        subscriptionPlanId: n,
                        giftStyle: s
                    } = (0, b.X6)(e);
                    return (0, i.jsx)(j.A, {
                        className: D.uI,
                        skuId: t,
                        subscriptionPlanId: n,
                        entitlements: m[e],
                        giftStyle: s
                    }, e)
                })]
            })
        })]
    }) : (0, i.jsx)(c.y$y, {
        className: D.Lq
    })
}