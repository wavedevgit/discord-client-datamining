/** chunk id: 758655, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => N
}), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(304072),
    c = n(494230),
    u = n(369280),
    m = n(163437),
    p = n(71393),
    f = n(156312),
    x = n(166532),
    g = n(566980),
    h = n(69494),
    b = n(312649),
    A = n(534479),
    j = n(482132),
    S = n(921925),
    v = n(985018),
    C = n(820970);

function N(t) {
    let {
        backButtonEligible: e,
        prevStep: n,
        handleStepChange: l,
        trialFooterMessageOverride: N,
        reviewWarningMessage: _,
        planGroup: y,
        openInvoiceId: T,
        analyticsData: E,
        analyticsLocation: P,
        handleClose: I
    } = t, {
        activeSubscription: k,
        application: w,
        setUpdatedSubscription: R,
        contextMetadata: D,
        currencies: B,
        paymentSources: F,
        priceOptions: H,
        purchaseError: L,
        selectedPlan: O,
        selectedSku: U,
        setCurrency: G,
        setPaymentSourceId: M,
        setPurchaseState: Y,
        purchaseState: W,
        subscriptionMetadataRequest: q,
        setHasAcceptedTerms: Q
    } = (0, f.P5)();
    a()(null != O, "Expected plan to be selected");
    let V = r.useRef(null),
        [Z, X] = (0, d.A)(!1, 500),
        $ = q?.guild_id,
        z = (0, s.bG)([p.A], () => p.A.getGuild($), [$]),
        [K, J] = r.useState(null),
        tt = (0, m.bg)(U?.flags ?? 0);
    r.useEffect(() => {
        null != L && null != V.current && V.current.scrollIntoView({
            behavior: "smooth"
        })
    }, [L]);
    let te = r.useCallback(t => {
            R(t), l(x.pn.CONFIRM)
        }, [l, R]),
        tn = r.useRef(null);
    if (W === g.h.PURCHASING) return (0, i.jsx)(A.A, {});
    let ti = () => {
        l(x.pn.ADD_PAYMENT_STEPS)
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.A, {
            className: C.jD
        }), (0, i.jsxs)(j.dZ, {
            children: [(0, i.jsx)(S.A, {}), tt && (0, i.jsxs)("div", {
                className: C.Uq,
                children: [(0, i.jsx)(o.Text, {
                    variant: "eyebrow",
                    color: "text-default",
                    children: v.intl.string(v.t.nf5LOU)
                }), (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: v.intl.format(v.t.y4n0GS, {
                        applicationName: w?.name
                    })
                })]
            }), !tt && (0, i.jsx)("div", {
                className: C.Vw,
                children: (0, i.jsx)(o.D0$, {
                    label: v.intl.string(v.t["5qyruI"]),
                    children: (0, i.jsxs)("div", {
                        className: C.YS,
                        children: [(0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: v.intl.string(v.t.dBih7e)
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            lineClamp: 1,
                            children: z?.name ?? v.intl.string(v.t.dtwqPR)
                        })]
                    })
                })
            }), null == k ? (0, i.jsx)(c.A, {
                selectedPlanId: O.id,
                planGroup: y,
                paymentSources: F,
                onPaymentSourceChange: t => M(null != t ? t.id : null),
                priceOptions: H,
                currencies: B,
                onCurrencyChange: t => G(t),
                handlePaymentSourceAdd: () => l(x.pn.ADD_PAYMENT_STEPS),
                setHasAcceptedTerms: Q,
                legalTermsNodeRef: tn,
                hasLegalTermsFlash: Z,
                trialFooterMessageOverride: N,
                reviewWarningMessage: _,
                metadata: tt ? void 0 : q,
                purchaseState: W,
                hideSubscriptionDetails: !0,
                handleClose: I
            }) : (0, i.jsx)(u.A, {
                premiumSubscription: k,
                paymentSources: F,
                priceOptions: H,
                onPaymentSourceChange: t => M(null != t ? t.id : null),
                onPaymentSourceAdd: ti,
                planId: O.id,
                setHasAcceptedTerms: Q,
                legalTermsNodeRef: tn,
                hasLegalTermsFlash: Z,
                onInvoiceError: t => {
                    J(t)
                },
                planGroup: y,
                currencies: B,
                onCurrencyChange: t => G(t),
                hasOpenInvoice: null != T,
                purchaseState: W,
                handleClose: I
            })]
        }), (0, i.jsx)(j.UX, {
            children: (0, i.jsx)(b.A, {
                premiumSubscription: k ?? null,
                setPurchaseState: Y,
                onBack: () => null != n && l(n),
                onNext: te,
                legalTermsNodeRef: tn,
                flashLegalTerms: () => X(!0),
                analyticsLocation: P,
                baseAnalyticsData: E,
                flowStartTime: D.startTime,
                planGroup: y,
                openInvoiceId: T,
                metadata: tt ? void 0 : q,
                backButtonEligible: e,
                invoiceError: K,
                disablePurchase: q?.guild_id == null && !tt,
                onPaymentSourceAdd: ti
            })
        })]
    })
}