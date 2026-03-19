/** chunk id: 758655 params = (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(304072),
    c = n(608805),
    u = n(271849),
    m = n(369280),
    p = n(163437),
    f = n(71393),
    x = n(156312),
    g = n(166532),
    h = n(566980),
    b = n(69494),
    A = n(312649),
    j = n(534479),
    v = n(482132),
    S = n(921925),
    C = n(367160),
    _ = n(985018),
    y = n(437752);

function N(e) {
    let {
        backButtonEligible: t,
        prevStep: n,
        handleStepChange: l,
        trialFooterMessageOverride: N,
        reviewWarningMessage: E,
        planGroup: T,
        openInvoiceId: P,
        analyticsData: I,
        analyticsLocation: k,
        handleClose: w
    } = e, {
        activeSubscription: R,
        application: D,
        setUpdatedSubscription: B,
        contextMetadata: F,
        currencies: U,
        paymentSources: H,
        priceOptions: L,
        purchaseError: O,
        selectedPlan: G,
        selectedSku: M,
        setCurrency: Y,
        setPaymentSourceId: W,
        setPurchaseState: q,
        purchaseState: Q,
        subscriptionMetadataRequest: V,
        setHasAcceptedTerms: Z
    } = (0, x.P5)();
    a()(null != G, "Expected plan to be selected");
    let X = r.useRef(null),
        [$, z] = (0, d.A)(!1, 500),
        K = V?.guild_id,
        J = (0, s.bG)([f.A], () => f.A.getGuild(K), [K]),
        [ee, et] = r.useState(null),
        en = (0, p.bg)(M?.flags ?? 0);
    r.useEffect(() => {
        null != O && null != X.current && X.current.scrollIntoView({
            behavior: "smooth"
        })
    }, [O]);
    let ei = r.useCallback(e => {
            B(e), l(g.pn.CONFIRM)
        }, [l, B]),
        er = (0, c.D7)({
            location: "payment_modal_review_step"
        }),
        el = r.useRef(null);
    if (Q === h.h.PURCHASING) return (0, i.jsx)(j.A, {});
    let ea = () => {
            l(g.pn.ADD_PAYMENT_STEPS)
        },
        es = er ? C._ : u.A,
        eo = null;
    return er || (eo = (0, i.jsxs)(i.Fragment, {
        children: [en && (0, i.jsxs)("div", {
            className: y.Uq,
            children: [(0, i.jsx)(o.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: _.intl.string(_.t.nf5LOU)
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "interactive-text-default",
                children: _.intl.format(_.t.y4n0GS, {
                    applicationName: D?.name
                })
            })]
        }), !en && (0, i.jsx)("div", {
            className: y.Vw,
            children: (0, i.jsx)(o.D0$, {
                label: _.intl.string(_.t["5qyruI"]),
                children: (0, i.jsxs)("div", {
                    className: y.YS,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: _.intl.string(_.t.dBih7e)
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        lineClamp: 1,
                        children: J?.name ?? _.intl.string(_.t.dtwqPR)
                    })]
                })
            })
        })]
    })), (0, i.jsxs)(i.Fragment, {
        children: [er ? null : (0, i.jsx)(b.A, {
            className: y.jD
        }), (0, i.jsxs)(v.dZ, {
            children: [(0, i.jsx)(S.A, {}), eo, null == R ? (0, i.jsx)(es, {
                selectedPlanId: G.id,
                planGroup: T,
                paymentSources: H,
                onPaymentSourceChange: e => W(null != e ? e.id : null),
                priceOptions: L,
                currencies: U,
                onCurrencyChange: e => Y(e),
                handlePaymentSourceAdd: () => l(g.pn.ADD_PAYMENT_STEPS),
                setHasAcceptedTerms: Z,
                legalTermsNodeRef: el,
                hasLegalTermsFlash: $,
                trialFooterMessageOverride: N,
                reviewWarningMessage: E,
                metadata: en ? void 0 : V,
                purchaseState: Q,
                hideSubscriptionDetails: !0,
                handleClose: w
            }) : (0, i.jsx)(m.A, {
                premiumSubscription: R,
                paymentSources: H,
                priceOptions: L,
                onPaymentSourceChange: e => W(null != e ? e.id : null),
                onPaymentSourceAdd: ea,
                planId: G.id,
                setHasAcceptedTerms: Z,
                legalTermsNodeRef: el,
                hasLegalTermsFlash: $,
                invoiceError: ee,
                onInvoiceError: e => {
                    et(e)
                },
                planGroup: T,
                currencies: U,
                onCurrencyChange: e => Y(e),
                hasOpenInvoice: null != P,
                purchaseState: Q,
                handleClose: w,
                shouldUseUnifiedCheckoutUI: er
            })]
        }), (0, i.jsx)(v.UX, {
            children: (0, i.jsx)(A.A, {
                premiumSubscription: R ?? null,
                setPurchaseState: q,
                onBack: () => null != n && l(n),
                onNext: ei,
                legalTermsNodeRef: el,
                flashLegalTerms: () => z(!0),
                analyticsLocation: k,
                baseAnalyticsData: I,
                flowStartTime: F.startTime,
                planGroup: T,
                openInvoiceId: P,
                metadata: en ? void 0 : V,
                backButtonEligible: t,
                invoiceError: ee,
                disablePurchase: V?.guild_id == null && !en,
                onPaymentSourceAdd: ea
            })
        })]
    })
}