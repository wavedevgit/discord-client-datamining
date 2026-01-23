/** Chunk was on 50243 **/
/** chunk id: 758655, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048), n(938796);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(304072),
    u = n(494230),
    d = n(369280),
    p = n(163437),
    m = n(71393),
    f = n(156312),
    b = n(166532),
    g = n(566980),
    x = n(69494),
    j = n(312649),
    h = n(534479),
    v = n(482132),
    y = n(921925),
    P = n(985018),
    S = n(820970);

function O(e) {
    var t, n;
    let {
        backButtonEligible: l,
        prevStep: O,
        handleStepChange: A,
        trialFooterMessageOverride: C,
        reviewWarningMessage: E,
        planGroup: T,
        openInvoiceId: N,
        analyticsData: _,
        analyticsLocation: w,
        handleClose: k
    } = e, {
        activeSubscription: D,
        application: I,
        setUpdatedSubscription: R,
        contextMetadata: B,
        currencies: F,
        paymentSources: U,
        priceOptions: M,
        purchaseError: G,
        purchaseTokenAuthState: H,
        selectedPlan: L,
        selectedSku: Y,
        setCurrency: W,
        setPaymentSourceId: q,
        setPurchaseState: V,
        setPurchaseError: Z,
        purchaseState: Q,
        subscriptionMetadataRequest: X,
        setHasAcceptedTerms: $
    } = (0, f.P5)();
    a()(null != L, "Expected plan to be selected");
    let z = i.useRef(null),
        [K, J] = (0, c.A)(!1, 500),
        ee = null == X ? void 0 : X.guild_id,
        et = (0, s.bG)([m.A], () => m.A.getGuild(ee), [ee]),
        [en, er] = i.useState(null),
        ei = (0, p.bg)(null != (t = null == Y ? void 0 : Y.flags) ? t : 0);
    i.useEffect(() => {
        null != G && null != z.current && z.current.scrollIntoView({
            behavior: "smooth"
        })
    }, [G]);
    let el = i.useCallback(e => {
            R(e), A(b.pn.CONFIRM)
        }, [A, R]),
        ea = i.useRef(null);
    if (Q === g.h.PURCHASING) return (0, r.jsx)(h.A, {});
    let es = () => {
        A(b.pn.ADD_PAYMENT_STEPS)
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(x.A, {
            className: S.jD
        }), (0, r.jsxs)(v.dZ, {
            children: [(0, r.jsx)(y.A, {}), ei && (0, r.jsxs)("div", {
                className: S.Uq,
                children: [(0, r.jsx)(o.Text, {
                    variant: "eyebrow",
                    color: "text-default",
                    children: P.intl.string(P.t.nf5LOU)
                }), (0, r.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: P.intl.format(P.t.y4n0GS, {
                        applicationName: null == I ? void 0 : I.name
                    })
                })]
            }), !ei && (0, r.jsx)("div", {
                className: S.Vw,
                children: (0, r.jsx)(o.D0$, {
                    label: P.intl.string(P.t["5qyruI"]),
                    children: (0, r.jsxs)("div", {
                        className: S.YS,
                        children: [(0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: P.intl.string(P.t.dBih7e)
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            lineClamp: 1,
                            children: null != (n = null == et ? void 0 : et.name) ? n : P.intl.string(P.t.dtwqPR)
                        })]
                    })
                })
            }), null == D ? (0, r.jsx)(u.A, {
                selectedPlanId: L.id,
                planGroup: T,
                paymentSources: U,
                onPaymentSourceChange: e => q(null != e ? e.id : null),
                priceOptions: M,
                currencies: F,
                onCurrencyChange: e => W(e),
                handlePaymentSourceAdd: () => A(b.pn.ADD_PAYMENT_STEPS),
                setHasAcceptedTerms: $,
                legalTermsNodeRef: ea,
                hasLegalTermsFlash: K,
                trialFooterMessageOverride: C,
                reviewWarningMessage: E,
                metadata: ei ? void 0 : X,
                purchaseState: Q,
                hideSubscriptionDetails: !0,
                handleClose: k
            }) : (0, r.jsx)(d.A, {
                premiumSubscription: D,
                paymentSources: U,
                priceOptions: M,
                onPaymentSourceChange: e => q(null != e ? e.id : null),
                onPaymentSourceAdd: es,
                planId: L.id,
                setHasAcceptedTerms: $,
                legalTermsNodeRef: ea,
                hasLegalTermsFlash: K,
                onInvoiceError: e => {
                    er(e)
                },
                planGroup: T,
                currencies: F,
                onCurrencyChange: e => W(e),
                hasOpenInvoice: null != N,
                purchaseState: Q,
                handleClose: k
            })]
        }), (0, r.jsx)(v.UX, {
            children: (0, r.jsx)(j.A, {
                premiumSubscription: null != D ? D : null,
                setPurchaseState: V,
                onBack: () => null != O && A(O),
                onNext: el,
                onPurchaseError: e => Z(e),
                legalTermsNodeRef: ea,
                flashLegalTerms: () => J(!0),
                analyticsLocation: w,
                baseAnalyticsData: _,
                flowStartTime: B.startTime,
                planGroup: T,
                purchaseTokenAuthState: H,
                openInvoiceId: N,
                metadata: ei ? void 0 : X,
                backButtonEligible: l,
                invoiceError: en,
                disablePurchase: (null == X ? void 0 : X.guild_id) == null && !ei,
                onPaymentSourceAdd: es
            })
        })]
    })
}