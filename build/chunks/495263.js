/** chunk id: 495263, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => b
}), n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(73153),
    o = n(384904),
    s = n(391048),
    l = n(158032),
    c = n(830382),
    u = n(272207),
    d = n(954571),
    f = n(927578),
    p = n(566980),
    _ = n(652215),
    h = n(788868);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
async function b(e) {
    let {
        setPurchaseState: t,
        setHasAcceptedTerms: n,
        setIsSubmitting: r,
        setPurchaseError: m,
        hasRedirectURL: E,
        setHasRedirectURL: b,
        isGift: O,
        baseAnalyticsData: v,
        analyticsLocation: A,
        analyticsLocations: I,
        flowStartTime: S,
        subscriptionPlan: T,
        planGroup: C,
        trialId: N,
        priceOptions: w,
        paymentSource: R,
        isPrepaidPaymentPastDue: P,
        openInvoiceId: D,
        premiumSubscription: L,
        onNext: x,
        metadata: M,
        sku: j,
        skuPricePreview: k,
        purchaseType: U,
        referralCode: G,
        loadId: V,
        giftInfoOptions: F,
        invoicePreview: B,
        orderId: H
    } = e;
    t(p.h.PURCHASING), n(!0), r(!0), a.h.wait(s.ET), m(null);
    try {
        let e, n, r, a;
        if (d.default.track(_.HAw.PAYMENT_FLOW_COMPLETED, y(g({}, v), {
                subtotal: null == B ? void 0 : B.subtotal,
                tax: null == B ? void 0 : B.tax,
                expected_amount: null == B ? void 0 : B.total,
                expected_currency: null == B ? void 0 : B.currency,
                duration_ms: Date.now() - S
            })), E) return;
        if (U === _.VVm.ONE_TIME) i()(null != j, "SKU must exist and be fetched."), i()(null != k, "SKUPricePreview must exist."), e = await (0, c.XU)(j.applicationId, j.id, {
            expectedAmount: k.amount,
            expectedCurrency: k.currency,
            isGift: O,
            paymentSource: R,
            loadId: V,
            giftInfoOptions: F,
            orderId: H
        });
        else {
            i()(null != T, "Missing subscriptionPlan"), i()(null != B, "Missing invoicePreview");
            let t = {
                    amount: B.total,
                    currency: B.currency
                },
                n = (0, f.$Q)((0, f.y8)(T.id, !1, !1, w));
            if (null != L) {
                let e = (0, f.Pg)(L, T.id, 1, new Set(C));
                e = (0, f.qn)(e), n = (0, f.UC)(e, w.currency.toLowerCase(), w.paymentSourceId)
            }
            if (O) {
                let t = B.total,
                    n = B.currency;
                e = await (0, c.XU)(h.tv, T.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: R,
                    subscriptionPlanId: T.id,
                    isGift: !0,
                    loadId: V,
                    giftInfoOptions: F,
                    orderId: H
                })
            } else if (P && null != D && null != R && null != L) e = _.AD1.has(R.type) ? await (0, o.LD)(L, D, R, w.currency) : await (0, o.nV)(L, {
                paymentSource: R,
                currency: w.currency
            }, t, n, I, A, V);
            else if (null != L) {
                let r = (0, f.Pg)(L, T.id, 1, new Set(C)),
                    i = {
                        paymentSource: R,
                        currency: w.currency
                    };
                L.status === _.Dmq.PAUSED && (i.status = _.Dmq.ACTIVE), L.isPausedAllowsResumeButNotUpdates || (i.items = r), e = await (0, o.nV)(L, i, t, n, I, A, V)
            } else e = await (0, l.B1)({
                planId: T.id,
                currency: w.currency,
                paymentSource: R,
                trialId: N,
                metadata: M,
                referralCode: G,
                loadId: V,
                expectedInvoicePrice: t,
                expectedRenewalPrice: n
            })
        }
        if (e.redirectConfirmation) return void b(null != e.redirectURL);
        t(p.h.COMPLETED), "subscription" in e ? n = null != e.subscription ? u.A.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0), "appliedUserDiscounts" in e && (a = null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0 ? e.appliedUserDiscounts : void 0), x(n, r, a)
    } catch (e) {
        t(p.h.FAIL), m(e), d.default.track(_.HAw.PAYMENT_FLOW_FAILED, y(g({}, v), {
            payment_error_code: null == e ? void 0 : e.code,
            payment_source_id: null == R ? void 0 : R.id,
            payment_source_type: null == R ? void 0 : R.type,
            duration_ms: Date.now() - S
        }))
    } finally {
        E || r(!1)
    }
}