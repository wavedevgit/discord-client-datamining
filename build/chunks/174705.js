/** chunk id: 174705, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => M
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    o = n.n(l),
    u = n(158954),
    a = n(311907),
    _ = n(397927),
    s = n(158032),
    d = n(155718),
    c = n(793574),
    m = n(688810),
    p = n(156312),
    f = n(853398),
    C = n(532794),
    b = n(287809),
    y = n(295405),
    I = n(97352),
    A = n(954571),
    h = n(927578),
    g = n(580630),
    S = n(83617),
    P = n(615396),
    x = n(543767),
    T = n(96304),
    v = n(380083),
    U = n(788868),
    L = n(652215),
    E = n(985018);
let M = e => {
    let {
        daysLeft: t,
        premiumType: n,
        premiumSubscription: l,
        analyticsSource: M,
        onClose: N,
        transitionState: G
    } = e, [w, R] = i.useState(!1), {
        analyticsLocations: D
    } = (0, m.Ay)(c.A.PREMIUM_UNCANCEL_MODAL), F = (0, a.bG)([b.default], () => {
        let e = b.default.getCurrentUser();
        return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e
    }), O = (0, a.bG)([y.A], () => l?.paymentSourceId != null ? y.A.getPaymentSource(l.paymentSourceId) : null, [l]), k = l.items[0].planId, j = (0, h.mH)(U.hd[k].skuId), {
        priceOptions: B
    } = (0, f.A)({
        activeSubscription: null,
        skuIDs: [j],
        paymentSourceId: l?.paymentSourceId,
        isGift: !1
    }), [q] = (0, x.Kq)({
        subscriptionId: l.id,
        items: [{
            planId: k,
            quantity: 1
        }],
        renewal: !0,
        paymentSourceId: l?.paymentSourceId,
        currency: B.currency,
        analyticsLocations: (0, m.Ay)(c.A.PREMIUM_UNCANCEL_MODAL),
        analyticsLocation: c.A.PREMIUM_UNCANCEL_MODAL
    }), K = (0, a.bG)([I.A], () => (0, P.c9)(k), [k]), W = (0, a.bG)([I.A], () => I.A.isFetchingForSKU(j)), $ = q?.invoiceItems?.find(e => e.subscriptionPlanId === k)?.discounts?.find(e => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount, z = null != K ? (0, h.y8)(K.id, !1, !1, B) : null, X = null != z && null != $ ? (0, g.$g)(z.amount - ($ ?? 0), z.currency) : null, {
        intervalType: Y,
        intervalCount: H
    } = h.Ay.getInterval(k), V = n === U.PremiumTypes.TIER_1, Z = null != z ? (0, g.$g)(z.amount, z.currency) : null;
    return (i.useEffect(() => {
        A.default.track(L.HAw.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: M
        })
    }, [M]), w) ? (0, r.jsx)(u.Modal, {
        actions: [],
        onClose: N,
        transitionState: G,
        title: "",
        children: (0, r.jsx)(p.PaymentContextProvider, {
            activeSubscription: l,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(v.Ay, {
                planId: k,
                onClose: N,
                paymentSourceType: O?.type
            })
        })
    }) : (0, r.jsx)(u.Modal, {
        title: V ? E.intl.formatToPlainString(E.t.Sngnzg, {
            daysLeft: t
        }) : E.intl.formatToPlainString(E.t.tdvIlU, {
            daysLeft: t
        }),
        subtitle: V ? E.intl.format(E.t["6Su2Xb"], {}) : E.intl.format(E.t["lE+P8X"], {}),
        size: "md",
        onClose: N,
        preview: null !== Z ? (0, r.jsx)(_.Text, {
            variant: "text-sm/normal",
            children: function(e) {
                switch (Y) {
                    case U.WT.YEAR:
                        return V ? E.intl.format(E.t.O7JRza, {
                            price: e
                        }) : E.intl.format(E.t["0y5kAG"], {
                            price: e
                        });
                    case U.WT.MONTH:
                        if (null != X) return E.intl.format(E.t["1/ucvu"], {
                            discountPrice: X,
                            defaultPrice: e
                        });
                        if (V) return E.intl.format(E.t.rbwRlf, {
                            price: e
                        });
                        if (1 === H) return E.intl.format(E.t.C9oRCx, {
                            price: e
                        });
                        return E.intl.format(E.t.TmmTgl, {
                            price: e,
                            intervalCount: H
                        });
                    default:
                        throw Error(`Unknown interval type ${Y}`)
                }
            }(Z)
        }) : (0, r.jsx)(_.y$y, {
            type: _.tVU.SPINNING_CIRCLE
        }),
        actions: [{
            text: E.intl.string(E.t.XDpS4K),
            variant: "secondary",
            onClick: N
        }, {
            text: E.intl.string(E.t["2+luBl"]),
            variant: "primary",
            disabled: W,
            onClick: async () => {
                if (null != l) {
                    let e = (0, S.jJ)(k, l.currency, O?.id);
                    null != O && O.id === l.paymentSourceId && e ? (await s.Ir(l, D, l.currency, O, L.ThZ.UNCANCEL_WINBACK_MODAL), R(!0)) : (N(), (0, C.A)({
                        initialPlanId: k,
                        analyticsLocations: D,
                        analyticsLocation: L.ThZ.UNCANCEL_WINBACK_MODAL
                    }))
                }
            }
        }],
        transitionState: G,
        children: (0, r.jsx)(T.l, {
            currentUser: F,
            premiumType: n,
            onClose: N,
            isDowngrade: !1,
            isPremiumRebrand: !0
        })
    })
}