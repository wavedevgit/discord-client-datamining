/** Chunk was on 5606 **/
/** chunk id: 265729, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(311907),
    d = n(397927),
    u = n(73153),
    p = n(339048),
    _ = n(736653),
    m = n(46054),
    g = n(728364),
    f = n(807055),
    b = n(264779),
    h = n(35587),
    A = n(982311),
    E = n(465794),
    x = n(212168),
    O = n(976860),
    C = n(287809),
    y = n(469778),
    j = n(45938),
    T = n(927578),
    v = n(780964),
    S = n(411121),
    I = n(12901),
    N = n(840065),
    P = n(652215),
    R = n(788868),
    D = n(985018),
    w = n(492489);

function L(e) {
    let t, {
            outboundPromotion: n,
            code: l,
            addClaimedOutboundPromotionCode: a,
            disabled: o
        } = e,
        [c, u] = i.useState(!1),
        [p, g] = i.useState(!1),
        h = () => u(e => !e),
        E = (0, _.Ay)(),
        x = (0, b.WD)(n.id, E),
        O = null != l,
        C = (0, f.A)(n, O);
    O && c ? t = D.intl.format(D.t.pkxVx6, {
        endDate: C,
        onClickDetails: h
    }) : O && !c ? t = D.intl.format(D.t["4sFeob"], {
        endDate: C,
        onClickDetails: h
    }) : !O && c ? t = D.intl.format(D.t["RBnE+l"], {
        endDate: C,
        onClickDetails: h
    }) : O || c || (t = D.intl.format(D.t["57+7Qn"], {
        endDate: C,
        onClickDetails: h
    }));
    let y = O ? D.intl.string(D.t["2cHUti"]) : D.intl.string(D.t.O13yhz),
        j = i.useCallback(() => g(!1), []),
        {
            outboundTitle: T,
            outboundTermsAndConditions: v
        } = n;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: s()(w.uI, w.AX),
            children: [(0, r.jsxs)("div", {
                className: w.gE,
                children: [(0, r.jsxs)("div", {
                    className: w.At,
                    children: [(0, r.jsx)("div", {
                        className: w.$G,
                        children: (0, r.jsx)("img", {
                            alt: "",
                            src: x,
                            className: w.IJ
                        })
                    }), (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: T
                        }), (0, r.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: w.__invalid_promotionText,
                            children: t
                        })]
                    })]
                }), !o && (0, r.jsx)(d.Button, {
                    text: y,
                    onClick: () => g(!0),
                    disabled: o,
                    size: "sm"
                })]
            }), c && (0, r.jsx)(d.Text, {
                className: w.GL,
                variant: "text-xs/normal",
                color: "text-default",
                children: m.A.parse(v, !1, {
                    allowLinks: !0
                })
            })]
        }), p && (0, r.jsx)(d.aFV, {
            renderModal: e => {
                var t, i;
                return (0, r.jsx)(A.A, (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, e), i = i = {
                    onClose: j,
                    onClaim: a,
                    code: l,
                    outboundPromotion: n
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }), t))
            },
            onCloseRequest: j
        })]
    })
}
let M = function(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, c.yK)([y.A], () => y.A.getGiftable()), [l, a] = o().partition(n, e => {
        let {
            giftCodeBatchId: t
        } = e;
        return null == t
    }), _ = (0, c.bG)([C.default], () => T.Ay.isPremiumExactly(C.default.getCurrentUser(), R.PremiumTypes.TIER_2)), m = o().groupBy(l, e => (0, j.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)), [f, b] = i.useState(!1);
    i.useEffect(() => {
        u.h.wait(() => {
            (0, p.XJ)().then(() => b(!0))
        })
    }, []);
    let {
        promotionsLoaded: A,
        activeOutboundPromotions: M,
        claimedEndedOutboundPromotions: G,
        claimedOutboundPromotionCodeMap: U,
        addClaimedOutboundPromotionCode: k
    } = (0, h.y7)(), H = M.length + G.length > 0, B = g.m.useExperiment({
        location: "EntitlementGifts"
    }, {
        autoTrackExposure: !1,
        disable: _
    }).enabled && H;
    return f && A ? (0, r.jsxs)(r.Fragment, {
        children: [function() {
            var e;
            let n = a.find(e => e.giftCodeBatchId === R.FB && !e.consumed),
                i = null != (e = a.filter(e => e.giftCodeBatchId === R.Bu && !e.consumed)) ? e : [],
                [l, c] = o().partition(i, e => {
                    let {
                        subscriptionPlanId: t
                    } = e;
                    return t === R.gD.PREMIUM_YEAR_TIER_2
                }),
                u = (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: H ? D.intl.string(D.t.wFsj3B) : void 0
                }),
                p = B ? (0, r.jsxs)("div", {
                    className: w.uo,
                    children: [(0, r.jsx)(d.tvc, {
                        size: "md",
                        color: d.LU0.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                        className: w.PC
                    }), (0, r.jsx)(d.Text, {
                        variant: "text-md/normal",
                        className: w.Qw,
                        children: D.intl.format(D.t.G4fwxK, {
                            onClick: () => {
                                (0, I.default)(), (0, O.pX)(P.BVt.APPLICATION_STORE)
                            }
                        })
                    }), (0, r.jsx)(E.A, {
                        showGradient: !0,
                        className: w.aA,
                        subscriptionTier: R.pe.TIER_2,
                        textOptions: {
                            textOverride: D.intl.string(D.t.mr4K7D)
                        }
                    })]
                }) : null;
            return (0, r.jsxs)("div", {
                className: t ? w.sW : void 0,
                children: [u, H ? (0, r.jsx)(d.cGx, {
                    className: w.yF
                }) : null, (0, r.jsx)(x.A, {
                    className: w.Yj,
                    isShown: B,
                    type: x.i.PREMIUM,
                    hasBackground: !0,
                    children: (0, r.jsxs)("div", {
                        className: s()({
                            [w.sW]: !B
                        }),
                        children: [p, G.map(e => {
                            let {
                                code: t,
                                promotion: n
                            } = e;
                            return (0, r.jsx)(L, {
                                outboundPromotion: n,
                                code: t,
                                addClaimedOutboundPromotionCode: k,
                                disabled: !_
                            }, n.id)
                        }), M.map(e => (0, r.jsx)(L, {
                            outboundPromotion: e,
                            code: U[e.id],
                            addClaimedOutboundPromotionCode: k,
                            disabled: !_
                        }, e.id)), null != n ? (0, r.jsx)(S.A, {
                            className: w.uI,
                            skuId: n.skuId,
                            subscriptionPlanId: n.subscriptionPlanId,
                            entitlements: [n],
                            giftCodeBatchId: R.FB
                        }, (0, j.Kx)(n.skuId, n.subscriptionPlanId)) : null, l.length > 0 ? (0, r.jsx)(S.A, {
                            className: w.uI,
                            skuId: l[0].skuId,
                            subscriptionPlanId: l[0].subscriptionPlanId,
                            entitlements: l,
                            giftCodeBatchId: R.Bu
                        }, (0, j.Kx)(l[0].skuId, l[0].subscriptionPlanId)) : null, c.length > 0 ? (0, r.jsx)(S.A, {
                            className: w.uI,
                            skuId: c[0].skuId,
                            subscriptionPlanId: c[0].subscriptionPlanId,
                            entitlements: c,
                            giftCodeBatchId: R.Bu
                        }, (0, j.Kx)(c[0].skuId, c[0].subscriptionPlanId)) : null]
                    })
                })]
            })
        }(), (0, r.jsx)("div", {
            className: w.sW,
            children: (0, r.jsxs)(d.Fmo, {
                component: (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: D.intl.string(D.t["9KeUbY"])
                }),
                children: [(0, r.jsx)(d.cGx, {
                    className: w.yF
                }), 0 === Object.keys(m).length ? (0, r.jsxs)("div", {
                    className: w.p$,
                    children: [(0, r.jsx)("div", {
                        className: w.QT
                    }), (0, r.jsx)(d.H, {
                        className: w.ks,
                        children: D.intl.string(D.t.B1qgZn)
                    }), (0, r.jsx)("p", {
                        className: w.WO,
                        children: D.intl.format(D.t.HezvJ8, {
                            onClick: function() {
                                (0, N.openUserSettings)(v.X.NITRO_PANEL, {
                                    section: P.nc_.PREMIUM
                                })
                            }
                        })
                    })]
                }) : o().keys(m).map(e => {
                    let {
                        skuId: t,
                        subscriptionPlanId: n,
                        giftStyle: i
                    } = (0, j.X6)(e);
                    return (0, r.jsx)(S.A, {
                        className: w.uI,
                        skuId: t,
                        subscriptionPlanId: n,
                        entitlements: m[e],
                        giftStyle: i
                    }, e)
                })]
            })
        })]
    }) : (0, r.jsx)(d.y$y, {
        className: w.Lq
    })
}