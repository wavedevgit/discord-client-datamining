/** Chunk was on 47827 **/
/** chunk id: 174705, original params: t,n,e (module,exports,require) **/
e.d(n, {
    default: () => M
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
    p = e(793574),
    m = e(688810),
    y = e(156312),
    _ = e(853398),
    f = e(532794),
    I = e(287809),
    A = e(295405),
    C = e(97352),
    S = e(954571),
    b = e(927578),
    v = e(580630),
    P = e(83617),
    x = e(615396),
    L = e(543767),
    g = e(96304),
    N = e(380083),
    E = e(788868),
    U = e(652215),
    h = e(985018);
let M = t => {
    var n, e, l, M;
    let {
        daysLeft: w,
        premiumType: T,
        premiumSubscription: k,
        analyticsSource: D,
        onClose: O,
        transitionState: R
    } = t, [j, G] = i.useState(!1), {
        analyticsLocations: B
    } = (0, m.Ay)(p.A.PREMIUM_UNCANCEL_MODAL), q = (0, u.bG)([I.default], () => {
        let t = I.default.getCurrentUser();
        return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t
    }), K = (0, u.bG)([A.A], () => (null == k ? void 0 : k.paymentSourceId) != null ? A.A.getPaymentSource(k.paymentSourceId) : null, [k]), W = k.items[0].planId, z = (0, b.mH)(E.hd[W].skuId), {
        priceOptions: F
    } = (0, _.A)({
        activeSubscription: null,
        skuIDs: [z],
        paymentSourceId: null == k ? void 0 : k.paymentSourceId,
        isGift: !1
    }), [H] = (0, L.Kq)({
        subscriptionId: k.id,
        items: [{
            planId: W,
            quantity: 1
        }],
        renewal: !0,
        paymentSourceId: null == k ? void 0 : k.paymentSourceId,
        currency: F.currency,
        analyticsLocations: (0, m.Ay)(p.A.PREMIUM_UNCANCEL_MODAL),
        analyticsLocation: p.A.PREMIUM_UNCANCEL_MODAL
    }), X = (0, u.bG)([C.A], () => (0, x.c9)(W), [W]), $ = (0, u.bG)([C.A], () => C.A.isFetchingForSKU(z)), J = null == H || null == (M = H.invoiceItems) || null == (l = M.find(t => t.subscriptionPlanId === W)) || null == (e = l.discounts) || null == (n = e.find(t => t.type === d.iS.SUBSCRIPTION_PLAN)) ? void 0 : n.amount, Z = null != X ? (0, b.y8)(X.id, !1, !1, F) : null, Q = null != Z && null != J ? (0, v.$g)(Z.amount - (null != J ? J : 0), Z.currency) : null, {
        intervalType: V,
        intervalCount: Y
    } = b.Ay.getInterval(W), tt = T === E.PremiumTypes.TIER_1, tn = null != Z ? (0, v.$g)(Z.amount, Z.currency) : null;
    return (i.useEffect(() => {
        S.default.track(U.HAw.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: D
        })
    }, [D]), j) ? (0, r.jsx)(o.Modal, {
        actions: [],
        onClose: O,
        transitionState: R,
        title: "",
        children: (0, r.jsx)(y.PaymentContextProvider, {
            activeSubscription: k,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(N.Ay, {
                planId: W,
                onClose: O,
                paymentSourceType: null == K ? void 0 : K.type
            })
        })
    }) : (0, r.jsx)(o.Modal, {
        title: tt ? h.intl.formatToPlainString(h.t.Sngnzg, {
            daysLeft: w
        }) : h.intl.formatToPlainString(h.t.tdvIlU, {
            daysLeft: w
        }),
        subtitle: tt ? h.intl.format(h.t["6Su2Xb"], {}) : h.intl.format(h.t["lE+P8X"], {}),
        size: "md",
        onClose: O,
        preview: null !== tn ? (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: function(t) {
                switch (V) {
                    case E.WT.YEAR:
                        return tt ? h.intl.format(h.t.O7JRza, {
                            price: t
                        }) : h.intl.format(h.t["0y5kAG"], {
                            price: t
                        });
                    case E.WT.MONTH:
                        if (null != Q) return h.intl.format(h.t["1/ucvu"], {
                            discountPrice: Q,
                            defaultPrice: t
                        });
                        if (tt) return h.intl.format(h.t.rbwRlf, {
                            price: t
                        });
                        if (1 === Y) return h.intl.format(h.t.C9oRCx, {
                            price: t
                        });
                        return h.intl.format(h.t.TmmTgl, {
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
            text: h.intl.string(h.t.XDpS4K),
            variant: "secondary",
            onClick: O
        }, {
            text: h.intl.string(h.t["2+luBl"]),
            variant: "primary",
            disabled: $,
            onClick: async () => {
                if (null != k) {
                    let t = (0, P.jJ)(W, k.currency, null == K ? void 0 : K.id);
                    null != K && K.id === k.paymentSourceId && t ? (await s.Ir(k, B, k.currency, K, U.ThZ.UNCANCEL_WINBACK_MODAL), G(!0)) : (O(), (0, f.A)({
                        initialPlanId: W,
                        analyticsLocations: B,
                        analyticsLocation: U.ThZ.UNCANCEL_WINBACK_MODAL
                    }))
                }
            }
        }],
        transitionState: R,
        children: (0, r.jsx)(g.l, {
            currentUser: q,
            premiumType: T,
            onClose: O,
            isDowngrade: !1,
            isPremiumRebrand: !0
        })
    })
}