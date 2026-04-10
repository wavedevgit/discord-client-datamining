/** chunk id: 790256 params = (module,exports,require) **/
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
    m = n(339048),
    g = n(736653),
    _ = n(46054),
    x = n(807055),
    h = n(264779),
    A = n(35587),
    p = n(982311),
    T = n(725807),
    f = n(212168),
    S = n(976860),
    E = n(287809),
    b = n(469778),
    C = n(45938),
    v = n(927578),
    N = n(780964),
    I = n(779733),
    j = n(858897),
    y = n(709732),
    O = n(652215),
    R = n(788868),
    L = n(985018),
    P = n(827033);

function D(e) {
    let t, {
            outboundPromotion: n,
            code: l,
            addClaimedOutboundPromotionCode: a,
            disabled: o
        } = e,
        [d, u] = s.useState(!1),
        [m, A] = s.useState(!1),
        T = () => u(e => !e),
        f = (0, g.Ay)(),
        S = (0, h.WD)(n.id, f),
        E = null != l,
        b = (0, x.A)(n, E);
    E && d ? t = L.intl.format(L.t.pkxVx6, {
        endDate: b,
        onClickDetails: T
    }) : E && !d ? t = L.intl.format(L.t["4sFeob"], {
        endDate: b,
        onClickDetails: T
    }) : !E && d ? t = L.intl.format(L.t["RBnE+l"], {
        endDate: b,
        onClickDetails: T
    }) : E || d || (t = L.intl.format(L.t["57+7Qn"], {
        endDate: b,
        onClickDetails: T
    }));
    let C = E ? L.intl.string(L.t["2cHUti"]) : L.intl.string(L.t.O13yhz),
        v = s.useCallback(() => A(!1), []),
        {
            outboundTitle: N,
            outboundTermsAndConditions: I
        } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: r()(P.uI, P.AX),
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
                            children: N
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: P.__invalid_promotionText,
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
                className: P.GL,
                variant: "text-xs/normal",
                color: "text-default",
                children: _.A.parse(I, !1, {
                    allowLinks: !0
                })
            })]
        }), m && (0, i.jsx)(c.aFV, {
            renderModal: e => (0, i.jsx)(p.A, {
                ...e,
                onClose: v,
                onClaim: a,
                code: l,
                outboundPromotion: n
            }),
            onCloseRequest: v
        })]
    })
}
let G = function() {
    let e = (0, d.yK)([b.A], () => b.A.getGiftable()),
        [t, n] = o().partition(e, e => {
            let {
                giftCodeBatchId: t
            } = e;
            return null == t
        }),
        l = (0, d.bG)([E.default], () => v.Ay.isPremiumExactly(E.default.getCurrentUser(), R.PremiumTypes.TIER_2)),
        a = (0, d.bG)([E.default], () => !v.Ay.isPremium(E.default.getCurrentUser())),
        g = o().groupBy(t, e => (0, C.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [_, x] = s.useState(!1);
    s.useEffect(() => {
        u.h.wait(() => {
            (0, m.XJ)().then(() => x(!0))
        })
    }, []);
    let {
        promotionsLoaded: h,
        activeOutboundPromotions: p,
        claimedEndedOutboundPromotions: G,
        claimedOutboundPromotionCodeMap: M,
        addClaimedOutboundPromotionCode: k
    } = (0, A.y7)(), U = p.length + G.length > 0, w = a && U;
    return _ && h ? (0, i.jsxs)(i.Fragment, {
        children: [function() {
            let e = n.find(e => e.giftCodeBatchId === R.FB && !e.consumed),
                t = n.filter(e => e.giftCodeBatchId === R.Bu && !e.consumed) ?? [],
                [s, a] = o().partition(t, e => {
                    let {
                        subscriptionPlanId: t
                    } = e;
                    return t === R.gD.PREMIUM_YEAR_TIER_2
                }),
                d = (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: U ? L.intl.string(L.t.wFsj3B) : void 0
                }),
                u = w ? (0, i.jsxs)("div", {
                    className: P.uo,
                    children: [(0, i.jsx)(c.tvc, {
                        size: "md",
                        color: c.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                        className: P.PC
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: P.Qw,
                        children: L.intl.format(L.t.G4fwxK, {
                            onClick: () => {
                                (0, I.default)(), (0, S.pX)(O.BVt.APPLICATION_STORE)
                            }
                        })
                    }), (0, i.jsx)(T.A, {
                        showGradient: !0,
                        className: P.aA,
                        subscriptionTier: R.pe.TIER_2,
                        textOptions: {
                            textOverride: L.intl.string(L.t.mr4K7D)
                        }
                    })]
                }) : null;
            return (0, i.jsxs)("div", {
                children: [d, U ? (0, i.jsx)(c.cGx, {
                    className: P.yF
                }) : null, (0, i.jsx)(f.A, {
                    className: P.Yj,
                    isShown: w,
                    type: f.i.PREMIUM,
                    hasBackground: !0,
                    children: (0, i.jsxs)("div", {
                        className: r()({
                            [P.sW]: !w
                        }),
                        children: [u, G.map(e => {
                            let {
                                code: t,
                                promotion: n
                            } = e;
                            return (0, i.jsx)(D, {
                                outboundPromotion: n,
                                code: t,
                                addClaimedOutboundPromotionCode: k,
                                disabled: !l
                            }, n.id)
                        }), p.map(e => (0, i.jsx)(D, {
                            outboundPromotion: e,
                            code: M[e.id],
                            addClaimedOutboundPromotionCode: k,
                            disabled: !l
                        }, e.id)), null != e ? (0, i.jsx)(y.A, {
                            className: P.uI,
                            skuId: e.skuId,
                            subscriptionPlanId: e.subscriptionPlanId,
                            entitlements: [e],
                            giftCodeBatchId: R.FB
                        }, (0, C.Kx)(e.skuId, e.subscriptionPlanId)) : null, s.length > 0 ? (0, i.jsx)(y.A, {
                            className: P.uI,
                            skuId: s[0].skuId,
                            subscriptionPlanId: s[0].subscriptionPlanId,
                            entitlements: s,
                            giftCodeBatchId: R.Bu
                        }, (0, C.Kx)(s[0].skuId, s[0].subscriptionPlanId)) : null, a.length > 0 ? (0, i.jsx)(y.A, {
                            className: P.uI,
                            skuId: a[0].skuId,
                            subscriptionPlanId: a[0].subscriptionPlanId,
                            entitlements: a,
                            giftCodeBatchId: R.Bu
                        }, (0, C.Kx)(a[0].skuId, a[0].subscriptionPlanId)) : null]
                    })
                })]
            })
        }(), (0, i.jsx)("div", {
            className: P.sW,
            children: (0, i.jsxs)(c.Fmo, {
                component: (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: L.intl.string(L.t["9KeUbY"])
                }),
                children: [(0, i.jsx)(c.cGx, {
                    className: P.yF
                }), 0 === Object.keys(g).length ? (0, i.jsxs)("div", {
                    className: P.p$,
                    children: [(0, i.jsx)("div", {
                        className: P.QT
                    }), (0, i.jsx)(c.H, {
                        className: P.ks,
                        children: L.intl.string(L.t.B1qgZn)
                    }), (0, i.jsx)("p", {
                        className: P.WO,
                        children: L.intl.format(L.t.HezvJ8, {
                            onClick: function() {
                                (0, j.openUserSettings)(N.X.NITRO_PANEL)
                            }
                        })
                    })]
                }) : o().keys(g).map(e => {
                    let {
                        skuId: t,
                        subscriptionPlanId: n,
                        giftStyle: s
                    } = (0, C.X6)(e);
                    return (0, i.jsx)(y.A, {
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