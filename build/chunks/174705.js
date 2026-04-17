/** chunk id: 174705 params = (module,exports,require) **/
r.d(t, {
    default: () => N
});
var n = r(627968),
    o = r(64700),
    i = r(284009),
    a = r.n(i),
    _ = r(158954),
    l = r(311907),
    u = r(397927),
    s = r(158032),
    c = r(155718),
    d = r(793574),
    p = r(688810),
    m = r(156312),
    C = r(853398),
    f = r(532794),
    y = r(287809),
    I = r(295405),
    b = r(97352),
    A = r(954571),
    h = r(927578),
    g = r(580630),
    P = r(83617),
    S = r(615396),
    x = r(543767),
    L = r(96304),
    T = r(380083),
    v = r(788868),
    U = r(652215),
    w = r(985018);
let N = e => {
    let {
        daysLeft: t,
        premiumType: r,
        premiumSubscription: i,
        analyticsSource: N,
        onClose: E,
        transitionState: M
    } = e, [k, F] = o.useState(!1), {
        analyticsLocations: R
    } = (0, p.Ay)(d.A.PREMIUM_UNCANCEL_MODAL), D = (0, l.bG)([y.default], () => {
        let e = y.default.getCurrentUser();
        return a()(null != e, "ProfileItem: currentUser cannot be undefined"), e
    }), O = (0, l.bG)([I.A], () => i?.paymentSourceId != null ? I.A.getPaymentSource(i.paymentSourceId) : null, [i]), j = i.items[0].planId, G = (0, h.mH)(v.hd[j].skuId), {
        priceOptions: B
    } = (0, C.A)({
        activeSubscription: null,
        skuIDs: [G],
        paymentSourceId: i?.paymentSourceId,
        isGift: !1
    }), [K] = (0, x.Kq)({
        subscriptionId: i.id,
        items: [{
            planId: j,
            quantity: 1
        }],
        renewal: !0,
        paymentSourceId: i?.paymentSourceId,
        currency: B.currency,
        analyticsLocations: (0, p.Ay)(d.A.PREMIUM_UNCANCEL_MODAL),
        analyticsLocation: d.A.PREMIUM_UNCANCEL_MODAL
    }), q = (0, l.bG)([b.A], () => (0, S.c9)(j), [j]), z = (0, l.bG)([b.A], () => b.A.isFetchingForSKU(G)), W = K?.invoiceItems?.find(e => e.subscriptionPlanId === j)?.discounts?.find(e => e.type === c.iS.SUBSCRIPTION_PLAN)?.amount, $ = null != q ? (0, h.y8)(q.id, !1, !1, B) : null, H = null != $ && null != W ? (0, g.$g)($.amount - (W ?? 0), $.currency) : null, {
        intervalType: Y,
        intervalCount: X
    } = h.Ay.getInterval(j), Z = r === v.PremiumTypes.TIER_1, J = null != $ ? (0, g.$g)($.amount, $.currency) : null;
    return (o.useEffect(() => {
        A.default.track(U.HAw.OPEN_MODAL, {
            type: "Premium Uncancel Winback",
            source: N
        })
    }, [N]), k) ? (0, n.jsx)(_.Modal, {
        actions: [],
        onClose: E,
        transitionState: M,
        title: "",
        children: (0, n.jsx)(m.PaymentContextProvider, {
            activeSubscription: i,
            stepConfigs: [],
            skuIDs: [],
            children: (0, n.jsx)(T.Ay, {
                planId: j,
                onClose: E,
                paymentSourceType: O?.type
            })
        })
    }) : (0, n.jsx)(_.Modal, {
        title: Z ? w.intl.formatToPlainString(w.t.Sngnzg, {
            daysLeft: t
        }) : w.intl.formatToPlainString(w.t.tdvIlU, {
            daysLeft: t
        }),
        subtitle: Z ? w.intl.format(w.t["6Su2Xb"], {}) : w.intl.format(w.t["lE+P8X"], {}),
        size: "md",
        onClose: E,
        preview: null !== J ? (0, n.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: function(e) {
                switch (Y) {
                    case v.WT.YEAR:
                        return Z ? w.intl.format(w.t.O7JRza, {
                            price: e
                        }) : w.intl.format(w.t["0y5kAG"], {
                            price: e
                        });
                    case v.WT.MONTH:
                        if (null != H) return w.intl.format(w.t["1/ucvu"], {
                            discountPrice: H,
                            defaultPrice: e
                        });
                        if (Z) return w.intl.format(w.t.rbwRlf, {
                            price: e
                        });
                        if (1 === X) return w.intl.format(w.t.C9oRCx, {
                            price: e
                        });
                        return w.intl.format(w.t.TmmTgl, {
                            price: e,
                            intervalCount: X
                        });
                    default:
                        throw Error(`Unknown interval type ${Y}`)
                }
            }(J)
        }) : (0, n.jsx)(u.y$y, {
            type: u.tVU.SPINNING_CIRCLE
        }),
        actions: [{
            text: w.intl.string(w.t.XDpS4K),
            variant: "secondary",
            onClick: E
        }, {
            text: w.intl.string(w.t["2+luBl"]),
            variant: "primary",
            disabled: z,
            onClick: async () => {
                if (null != i) {
                    let e = (0, P.jJ)(j, i.currency, O?.id);
                    null != O && O.id === i.paymentSourceId && e ? (await s.Ir(i, R, i.currency, O, U.ThZ.UNCANCEL_WINBACK_MODAL), F(!0)) : (E(), (0, f.A)({
                        initialPlanId: j,
                        analyticsLocations: R,
                        analyticsLocation: U.ThZ.UNCANCEL_WINBACK_MODAL
                    }))
                }
            }
        }],
        transitionState: M,
        children: (0, n.jsx)(L.l, {
            currentUser: D,
            premiumType: r,
            onClose: E,
            isDowngrade: !1,
            isPremiumRebrand: !0
        })
    })
}