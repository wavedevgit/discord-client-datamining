/** chunk id: 174705, original params: t,n,e (module,exports,require) **/
e.d(n, {
    default: () => U
}), e(896048), e(65821);
var r = e(627968),
    i = e(64700),
    l = e(284009),
    a = e.n(l),
    o = e(158954),
    u = e(311907),
    c = e(397927),
    s = e(158032),
    d = e(155718),
    _ = e(793574),
    p = e(688810),
    m = e(156312),
    y = e(853398),
    f = e(532794),
    C = e(287809),
    I = e(295405),
    A = e(97352),
    v = e(954571),
    b = e(927578),
    S = e(580630),
    P = e(83617),
    g = e(615396),
    x = e(543767),
    L = e(96304),
    N = e(380083),
    h = e(788868),
    E = e(652215),
    M = e(985018);
let U = t => {
    var n, e, l, U;
    let {
        daysLeft: k,
        premiumType: w,
        premiumSubscription: T,
        analyticsSource: D,
        onClose: O,
        transitionState: R
    } = t, [G, j] = i.useState(!1), {
        analyticsLocations: B
    } = (0, p.Ay)(_.A.PREMIUM_UNCANCEL_MODAL), q = (0, u.bG)([C.default], () => {
        let t = C.default.getCurrentUser();
        return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t
    }), K = (0, u.bG)([I.A], () => (null == T ? void 0 : T.paymentSourceId) != null ? I.A.getPaymentSource(T.paymentSourceId) : null, [T]), W = T.items[0].planId, z = (0, b.mH)(h.hd[W].skuId), {
        priceOptions: F
    } = (0, y.A)({
        activeSubscription: null,
        skuIDs: [z],
        paymentSourceId: null == T ? void 0 : T.paymentSourceId,
        isGift: !1
    }), [H] = (0, x.Kq)({
        subscriptionId: T.id,
        items: [{
            planId: W,
            quantity: 1
        }],
        renewal: !0,
        paymentSourceId: null == T ? void 0 : T.paymentSourceId,
        currency: F.currency,
        analyticsLocations: (0, p.Ay)(_.A.PREMIUM_UNCANCEL_MODAL),
        analyticsLocation: _.A.PREMIUM_UNCANCEL_MODAL
    }), X = (0, u.bG)([A.A], () => (0, g.c9)(W), [W]), $ = (0, u.bG)([A.A], () => A.A.isFetchingForSKU(z)), J = null == H || null == (U = H.invoiceItems) || null == (l = U.find(t => t.subscriptionPlanId === W)) || null == (e = l.discounts) || null == (n = e.find(t => t.type === d.iS.SUBSCRIPTION_PLAN)) ? void 0 : n.amount, Z = null != X ? (0, b.y8)(X.id, !1, !1, F) : null, Q = null != Z && null != J ? (0, S.$g)(Z.amount - (null != J ? J : 0), Z.currency) : null, {
        intervalType: V,
        intervalCount: Y
    } = b.Ay.getInterval(W), tt = w === h.PremiumTypes.TIER_1, tn = null != Z ? (0, S.$g)(Z.amount, Z.currency) : null;
    return (i.useEffect(() => {
        v.default.track(E.HAw.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: D
        })
    }, [D]), G) ? (0, r.jsx)(o.Modal, {
        actions: [],
        onClose: O,
        transitionState: R,
        title: "",
        children: (0, r.jsx)(m.PaymentContextProvider, {
            activeSubscription: T,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(N.Ay, {
                planId: W,
                onClose: O,
                paymentSourceType: null == K ? void 0 : K.type
            })
        })
    }) : (0, r.jsx)(o.Modal, {
        title: tt ? M.intl.formatToPlainString(M.t.Sngnzg, {
            daysLeft: k
        }) : M.intl.formatToPlainString(M.t.tdvIlU, {
            daysLeft: k
        }),
        subtitle: tt ? M.intl.format(M.t["6Su2Xb"], {}) : M.intl.format(M.t["lE+P8X"], {}),
        size: "md",
        onClose: O,
        preview: null !== tn ? (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: function(t) {
                switch (V) {
                    case h.WT.YEAR:
                        return tt ? M.intl.format(M.t.O7JRza, {
                            price: t
                        }) : M.intl.format(M.t["0y5kAG"], {
                            price: t
                        });
                    case h.WT.MONTH:
                        if (null != Q) return M.intl.format(M.t["1/ucvu"], {
                            discountPrice: Q,
                            defaultPrice: t
                        });
                        if (tt) return M.intl.format(M.t.rbwRlf, {
                            price: t
                        });
                        if (1 === Y) return M.intl.format(M.t.C9oRCx, {
                            price: t
                        });
                        return M.intl.format(M.t.TmmTgl, {
                            price: t,
                            intervalCount: Y
                        });
                    default:
                        throw Error("Unknown interval type ".concat(V))
                }
            }(tn)
        }) : (0, r.jsx)(c.y$y, {
            type: c.tVU.SPINNING_CIRCLE
        }),
        actions: [{
            text: M.intl.string(M.t.XDpS4K),
            variant: "secondary",
            onClick: O
        }, {
            text: M.intl.string(M.t["2+luBl"]),
            variant: "primary",
            disabled: $,
            onClick: async () => {
                if (null != T) {
                    let t = (0, P.jJ)(W, T.currency, null == K ? void 0 : K.id);
                    null != K && K.id === T.paymentSourceId && t ? (await s.Ir(T, B, T.currency, K, E.ThZ.UNCANCEL_WINBACK_MODAL), j(!0)) : (O(), (0, f.A)({
                        initialPlanId: W,
                        analyticsLocations: B,
                        analyticsLocation: E.ThZ.UNCANCEL_WINBACK_MODAL
                    }))
                }
            }
        }],
        transitionState: R,
        children: (0, r.jsx)(L.l, {
            currentUser: q,
            premiumType: w,
            onClose: O,
            isDowngrade: !1,
            isPremiumRebrand: !0
        })
    })
}