/** chunk id: 156312, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P5: () => ee,
    PaymentContextProvider: () => en,
    Qv: () => $
}), n(896048), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    o = n(989349),
    s = n.n(o),
    l = n(835245),
    c = n(665260),
    u = n(311907),
    d = n(444927),
    f = n(10716),
    p = n(795816),
    _ = n(933958),
    h = n(627363),
    m = n(86379),
    g = n(531260),
    E = n(446044),
    y = n(573359),
    b = n(170887),
    O = n(422936),
    v = n(234419),
    A = n(253932),
    I = n(293700),
    S = n(79387),
    T = n(67480),
    C = n(328968),
    N = n(786300),
    w = n(927578),
    R = n(728458),
    P = n(955529),
    D = n(483827),
    L = n(543027),
    x = n(853398),
    M = n(121005),
    j = n(369827),
    k = n(552574),
    U = n(935630),
    G = n(988023),
    F = n(289333),
    V = n(252293),
    B = n(615310),
    H = n(87952),
    Y = n(814626),
    W = n(26279),
    K = n(652215),
    z = n(788868),
    q = n(898772);

function Z(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            Z(e, t, n[t])
        })
    }
    return e
}

function X(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function J(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let [$, ee, et] = (0, N.A)();

function en(e) {
    var t, n, o, N;
    let {
        loadId: Z,
        activeSubscription: X,
        stepConfigs: ee,
        breadcrumbs: et = [],
        skuIDs: en,
        isGift: er = !1,
        children: ei,
        defaultPlanId: ea,
        purchaseType: eo = K.VVm.SUBSCRIPTION,
        applicationId: es,
        referralCode: el,
        paymentGateway: ec,
        excludeSubscriptionPlansBySKU: eu = !1,
        excludeSKUPurchasePreviews: ed = !1,
        wasTier2PremiumBeforePurchase: ef = !1,
        referralTrialOfferId: ep
    } = e, e_ = (0, H.A)(), eh = (0, m.H)(), em = (0, M.A)(), eg = en[0], eE = (0, u.bG)([T.A], () => T.A.get(eg), [eg]), ey = null == eE ? void 0 : eE.eligiblePaymentGateways, {
        paymentSources: eb,
        hasPaymentSources: eO,
        paymentSourceId: ev,
        setPaymentSourceId: eA,
        hasFetchedPaymentSources: eI
    } = (0, j.A)({
        isGift: er,
        activeSubscription: X,
        eligiblePaymentGateways: ey
    }), eS = i.useRef(eO), {
        hasFetchedSubscriptionPlans: eT,
        priceOptions: eC,
        setCurrency: eN,
        currencyLoading: ew,
        currencies: eR
    } = (0, x.A)({
        activeSubscription: X,
        skuIDs: en,
        paymentSourceId: ev,
        isGift: er,
        excludeSubscriptionPlansBySKU: eu
    }), eP = (0, F.A)(), [eD, eL] = i.useState(!1), {
        step: ex,
        setStep: eM,
        steps: ej,
        breadcrumbsData: ek,
        previousStepRef: eU
    } = (0, B.A)({
        stepConfigs: ee,
        breadcrumbs: et
    }), [eG, eF] = (0, G.A)(ex), {
        paymentError: eV,
        paymentAuthenticationState: eB
    } = (0, k.A)(), {
        purchaseError: eH,
        purchaseErrorBlockRef: eY,
        setPurchaseError: eW
    } = (0, U.A)(), eK = (0, d.A)(() => {
        let e = null != Z ? Z : (0, l.A)();
        return R.A.addBreadcrumb({
            message: "Checkout session ID: ".concat(e)
        }), {
            loadId: e,
            startTime: Date.now()
        }
    }), {
        selectedSkuId: ez,
        selectedPlan: eq,
        selectedPlanNotification: eZ,
        setSelectedSkuId: eQ,
        setSelectedPlanId: eX,
        setSelectedPlanNotification: eJ
    } = (0, P.A)(), [e$, e0] = (0, u.yK)([I.A], () => [I.A.purchaseTokenAuthState, I.A.purchaseTokenHash]), [e1, e2, e3, e6] = (0, u.yK)([Y.A], () => [Y.A.browserCheckoutState, Y.A.loadId, Y.A.skuId, Y.A.planId]), [e4, e5] = i.useState(null), [e7, e8] = i.useState(null), [e9, te] = i.useState(null), [tt, tn] = i.useState(null), [tr, ti] = i.useState(null), [ta, to] = i.useState(void 0), [ts, tl] = i.useState([]), [tc, tu] = i.useState([]), td = i.useMemo(() => null == eq || (0, w.ys)(eq.id), [eq]), tf = i.useRef(null != X ? X.planId : null);
    i.useEffect(() => {
        null == tf.current && null != X && (tf.current = X.planId)
    }, [X]);
    let {
        endsAt: tp
    } = (0, g.A)({
        forceFetch: !1,
        excludeReverseTrial: !0
    }), t_ = i.useRef(tp.isSame(s()(0)) ? null : tp);
    i.useEffect(() => {
        null != t_.current || tp.isSame(s()(0)) || (t_.current = tp)
    }, [tp]);
    let th = i.useMemo(() => ({
        paymentSourceId: ev,
        paymentGateway: ec,
        loadId: Z
    }), [ev, ec, Z]);
    (0, L.A)(eg, th);
    let {
        skusById: tm,
        hasFetchedSkus: tg,
        skuPricePreviewsById: tE,
        previewErrorsById: ty
    } = (0, V.A)({
        applicationId: null != es ? es : z.tv,
        skuIDs: en,
        currentPaymentSourceId: ev,
        isGift: er,
        excludeSKUPurchasePreviews: ed
    }), tb = tm[null != ez ? ez : ""], tO = null != ez ? ty[ez] : null, [tv, tA] = i.useState(tO), tI = i.useMemo(() => {
        if (null == ez) return null;
        let e = tE[ez];
        return null == e ? null : e[null != ev ? ev : S.B]
    }, [ez, tE, ev]), {
        data: tS
    } = (0, h.YY)(es), tT = A.Q_.useSetting(), tC = (0, u.bG)([f.A], () => f.A.getFetchState());
    i.useEffect(() => {
        null != tS && (0, c.Lt)(tS.flags, K.gfo.EMBEDDED) && tT && null == tC && (0, p.SE)()
    }, [tS, tT, tC]);
    let tN = (0, c.Lt)(null != (t = null == tS ? void 0 : tS.flags) ? t : 0, K.gfo.EMBEDDED) && (0, c.Lt)(null != (n = null == tS ? void 0 : tS.flags) ? n : 0, K.gfo.EMBEDDED_IAP),
        tw = (0, u.bG)([_.Ay], () => Array.from(_.Ay.getSelfEmbeddedActivities().values()).find(e => {
            let {
                applicationId: t
            } = e;
            return t === es
        })),
        tR = null == tw ? void 0 : tw.compositeInstanceId,
        tP = (0, u.bG)([C.A], () => null != ez ? C.A.getForSKU(ez) : null, [ez]),
        [tD, tL] = i.useState(null),
        tx = null != (o = null == X ? void 0 : X.inReverseTrial) && o && !er,
        tM = (0, b.A)({
            location: "PaymentModal"
        }) && td,
        {
            isDisplayingWowMomentConfirmation: tj
        } = (0, u.cf)([y.A], () => ({
            isDisplayingWowMomentConfirmation: y.A.isDisplayingWowMomentConfirmation
        })),
        tk = tM ? q.Ot : void 0,
        {
            enabled: tU
        } = (0, E.Y)({
            location: "PaymentContext"
        }),
        tG = (0, D.uR)({
            location: "PaymentModal"
        }),
        tF = i.useMemo(() => {
            if (tG) return W.uH.APPLE_PAYMENT_LINK
        }, [tG]),
        tV = i.useMemo(() => null != eq && eq.id === z.gD.PREMIUM_GROUP_MONTH, [eq]),
        tB = (0, v.V)(null != ep ? ep : void 0),
        tH = !tV && !er && null != tB && null != ez && z.TP[tB.trial_id].skus.includes(ez),
        tY = (0, O.O)(),
        tW = null == tY || null == (N = tY.discount) ? void 0 : N.plan_ids.some(e => z.hd[e].skuId === ez),
        tK = !!(!tV && !er && null != tY && null != ez && tW);
    return (0, r.jsx)($.Provider, {
        value: J(Q({
            stripe: e_,
            paymentElementsEnabled: tU,
            contextMetadata: eK,
            blockedPayments: eh,
            activeSubscription: X,
            hasFetchedSubscriptions: em,
            hasFetchedSubscriptionPlans: eT,
            updatedSubscription: tt,
            setUpdatedSubscription: tn,
            subscriptionMetadataRequest: tr,
            setSubscriptionMetadataRequest: ti,
            hasFetchedPaymentSources: eI,
            paymentSources: eb,
            hasPaymentSources: eO,
            paymentSourceId: ev,
            setPaymentSourceId: eA,
            priceOptions: eC,
            setCurrency: eN,
            currencyLoading: ew,
            currencies: eR
        }, eP), {
            hasAcceptedTerms: eD,
            setHasAcceptedTerms: eL,
            step: ex,
            setStep: eM,
            steps: ej,
            stepConfigs: ee,
            breadcrumbs: ek,
            previousStepRef: eU,
            purchaseState: eG,
            setPurchaseState: eF,
            paymentAuthenticationState: eB,
            paymentError: eV,
            purchaseError: eH,
            setPurchaseError: eW,
            purchasePreviewError: tv,
            setPurchasePreviewError: tA,
            purchaseErrorBlockRef: eY,
            purchaseTokenAuthState: e$,
            purchaseTokenHash: e0,
            browserCheckoutState: e1,
            browserCheckoutStateLoadId: e2,
            browserCheckoutStateSkuId: e3,
            browserCheckoutStatePlanId: e6,
            bodyNode: e4,
            setBodyNode: e5,
            footerNode: e7,
            setFooterNode: e8,
            modalOverlayNode: e9,
            setModalOverlayNode: te,
            selectedSkuId: ez,
            selectedSku: tb,
            selectedStoreListing: tP,
            selectedPlan: eq,
            setSelectedSkuId: eQ,
            setSelectedPlanId: eX,
            selectedPlanNotification: eZ,
            setSelectedPlanNotification: eJ,
            readySlideId: ta,
            setReadySlideId: to,
            defaultPlanId: ea,
            isPremium: td,
            isGift: er,
            startingFractionalPremiumEndsAtRef: t_,
            startedPaymentFlowWithPaymentSourcesRef: eS,
            startingPremiumSubscriptionPlanIdRef: tf,
            hasFetchedSkus: tg,
            skusById: tm,
            skuPricePreviewsById: tE,
            selectedSkuPricePreview: tI,
            application: tS,
            purchaseType: eo,
            isEmbeddedIAP: tN,
            activitySessionId: tR,
            devShelfFetchState: tC,
            entitlementsGranted: ts,
            setEntitlementsGranted: tl,
            appliedUserDiscounts: tc,
            setAppliedUserDiscounts: tu,
            referralCode: el,
            invoicePreview: tD,
            setInvoicePreview: tL,
            inReverseTrial: tx,
            enablePremiumBrandRefresh: tM,
            isDisplayingWowMomentConfirmation: tj,
            premiumBrandRefreshBackgroundClassName: tk,
            wasTier2PremiumBeforePurchase: ef,
            customCheckoutFlow: tF,
            isPremiumGroupPurchase: tV,
            isEligibleForTrial: tH,
            isEligibleForDiscount: tK,
            userTrialOffer: tB,
            referralTrialOfferId: ep,
            discountOffer: tY
        }),
        children: (0, r.jsx)(a.Elements, {
            options: K.XL8,
            stripe: e_,
            children: ei
        })
    })
}