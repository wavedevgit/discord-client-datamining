/** Chunk was on web.js **/
/** chunk id: 546042, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    I: () => ee,
    PaymentModal: () => $
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(330140),
    l = n(417597),
    c = n(397927),
    u = n(73153),
    d = n(339048),
    f = n(158032),
    p = n(830382),
    _ = n(428644),
    h = n(964486),
    m = n(459793),
    g = n(357669),
    E = n(319437),
    y = n(70730),
    b = n(45787),
    O = n(51501),
    v = n(422936),
    A = n(511484),
    I = n(251913),
    S = n(869573),
    T = n(344159),
    C = n(97352),
    N = n(469778),
    w = n(954571),
    R = n(45938),
    P = n(927578),
    D = n(937008),
    L = n(156312),
    x = n(166532),
    M = n(566980),
    j = n(379174),
    k = n(800471),
    U = n(169801),
    G = n(216641),
    F = n(462309),
    V = n(534479),
    B = n(482132);
n(322076);
var H = n(652215),
    Y = n(788868),
    W = n(985018),
    K = n(898772);

function z(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            z(e, t, n[t])
        })
    }
    return e
}

function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Q(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let X = 2,
    J = "billing";

function $(e) {
    let {
        analyticsDataOverride: t,
        analyticsLocations: n,
        analyticsLocation: a,
        analyticsObject: l,
        analyticsSourceLocation: d,
        analyticsSubscriptionType: _ = H.rzx.PREMIUM,
        onComplete: m,
        transitionState: N,
        initialPlanId: k,
        subscriptionTier: U,
        onClose: V,
        trialId: z,
        trialFooterMessageOverride: Z,
        reviewWarningMessage: J,
        planGroup: $ = Y.LE,
        openInvoiceId: ee,
        onSubscriptionConfirmation: et,
        renderPurchaseConfirmation: en,
        postSuccessGuild: er,
        followupSKUInfo: ei,
        renderHeader: ea,
        applicationId: eo,
        guildId: es,
        referralTrialOfferId: el,
        skuId: ec,
        onStepChange: eu,
        shakeWhilePurchasing: ed = !1,
        isLargeModal: ef = !1,
        isMediumModal: ep = !1,
        isDynamicModal: e_ = !1,
        hideShadow: eh = !1,
        returnRef: em,
        skipConfirm: eg = !1,
        continueSessionToInitialStep: eE,
        paymentModalVersion: ey = "v1"
    } = e, {
        activitySessionId: eb,
        purchaseState: eO,
        setPurchaseState: ev,
        selectedSkuId: eA,
        setSelectedSkuId: eI,
        selectedPlan: eS,
        setSelectedPlanId: eT,
        setSelectedPlanNotification: eC,
        setStep: eN,
        setPurchaseError: ew,
        paymentAuthenticationState: eR,
        step: eP,
        selectedSku: eD,
        contextMetadata: eL,
        purchaseTokenAuthState: ex,
        activeSubscription: eM,
        priceOptions: ej,
        hasPaymentSources: ek,
        paymentSourceId: eU,
        paymentSources: eG,
        purchaseType: eF,
        defaultPlanId: eV,
        premiumBrandRefreshBackgroundClassName: eB,
        customCheckoutFlow: eH,
        invoicePreview: eY
    } = (0, L.P5)(), eW = (0, j.A)(), {
        isGift: eK,
        giftRecipient: ez,
        customGiftMessage: eq,
        emojiConfetti: eZ,
        soundEffect: eQ
    } = (0, D.Pv)(), eX = c.rIJ.SMALL;
    ef || (null == eW ? void 0 : eW.isLargeModal) ? eX = c.rIJ.LARGE : ep || (null == eW ? void 0 : eW.isMediumModal) ? eX = c.rIJ.MEDIUM : (eP === x.pn.ADD_PAYMENT_STEPS || e_ || (null == eW ? void 0 : eW.isDynamicModal)) && (eX = c.rIJ.DYNAMIC);
    let eJ = (0, v.O)(),
        e$ = null != U && !eK && (0, A.U9)(eJ, U),
        [e0, e1] = i.useState(q({
            load_id: eL.loadId,
            payment_type: H.frM[eF],
            location: null != a ? a : l,
            source: d,
            subscription_type: _,
            subscription_plan_id: null == eS ? void 0 : eS.id,
            is_gift: eK,
            eligible_for_trial: null != z,
            location_stack: n,
            sku_id: ec,
            application_id: eo,
            guild_id: es,
            payment_modal_version: ey,
            activity_session_id: eb,
            eligible_for_discount: e$,
            sku_product_line: null == eD ? void 0 : eD.productLine
        }, t)),
        e2 = (0, G.W)(eG, eU),
        e3 = null != eY ? eY.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e1(e => {
            let n = null != eS ? (0, P.y8)(eS.id, !1, eK, ej) : void 0;
            return q(Q(q({}, e), {
                subscription_plan_id: null == eS ? void 0 : eS.id,
                price: null == n ? void 0 : n.amount,
                regular_price: null == eS ? void 0 : eS.price,
                currency: ej.currency,
                sku_id: eA,
                sku_product_line: null == eD ? void 0 : eD.productLine
            }), t)
        })
    }, [eS, eA, eK, ej, t, null == eD ? void 0 : eD.productLine]), (0, h.Ay)(() => {
        (0, g.b)(Q(q({}, e0), {
            continue_session_initial_step: eE,
            custom_checkout_flow: eH,
            has_saved_payment_source: ek,
            discount_id: null != eJ ? eJ.discount_id : e3
        }))
    }), i.useEffect(() => {
        if (null == eS && (null != eV && null != eE ? eT(eV) : eT(k)), null != ec) eI(ec);
        else if (null != k) {
            var e;
            eI(null == (e = C.A.get(k)) ? void 0 : e.skuId)
        }
    }, [eT, eS, eI, k, ec, eV, eE]);
    let e6 = i.useCallback(() => {
            let e = (0, R.lo)(ez) === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            w.default.track(H.HAw.PAYMENT_FLOW_SUCCEEDED, Q(q({}, e0), {
                is_custom_message_edited: eK && e && null != eq ? eq !== W.intl.string(W.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && (null == eZ ? void 0 : eZ.id) == null ? null == eZ ? void 0 : eZ.surrogates : void 0,
                sound_id: eK && e ? null == eQ ? void 0 : eQ.soundId : void 0,
                duration_ms: t - eL.startTime,
                payment_source_type: null == e2 ? void 0 : e2.type
            }));
            let {
                enabled: n
            } = y.u.getConfig({
                location: "PaymentModal emitPaymentFlowSuccess"
            });
            eK && null != ez && null != a && n && (0, O.W)(a) && (0, b.Yd)(ez.id)
        }, [e0, eZ, eq, ez, eK, eQ, eL.startTime, e2, a]),
        e4 = i.useMemo(() => () => null == V ? void 0 : V(eO === M.h.COMPLETED, eA), [V, eO, eA]),
        e5 = (0, s.A)(() => Date.now(), [eP]),
        e7 = i.useCallback(function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                {
                    trackedFromStep: n,
                    analyticsDataOverride: r,
                    fulfillment: i,
                    emitPaymentFlowLoadedEvent: a
                } = t,
                o = Date.now();
            if (e === x.pn.CONFIRM && (e6(), null == m || m(i), eg)) return void e4();
            eN(e), null == eu || eu(e), ew(null), eC(null), e === x.pn.ADD_PAYMENT_STEPS && (u.h.wait(f.ET), u.h.wait(p.T3));
            let s = null != n ? n : eP;
            null === s || a ? w.default.track(H.HAw.PAYMENT_FLOW_LOADED, Q(q({}, e0), {
                initial_step: null != s ? s : e,
                continue_session_initial_step: eE,
                has_saved_payment_source: ek
            })) : w.default.track(H.HAw.PAYMENT_FLOW_STEP, Q(q({}, e0, r), {
                from_step: s,
                to_step: e === x.pn.ADD_PAYMENT_STEPS ? x.pn.PAYMENT_TYPE : e,
                step_duration_ms: o - e5,
                flow_duration_ms: o - eL.startTime
            }))
        }, [eN, eu, ew, eC, eP, eE, e0, e5, eL.startTime, e6, m, eg, e4, ek]);
    (0, I.b)(eP, eR, e7, ev), (0, x.zT)(eP, eO, ev), (0, S.Q)(eP, ex, e7), (0, E.A)(e4), (0, T.s)(eM, () => V(!1), eK), (0, I.QR)(eR);
    let e8 = {
            initialPlanId: k,
            subscriptionTier: U,
            handleStepChange: e7,
            handleClose: e4,
            analyticsData: e0,
            setAnalyticsData: e1,
            trialId: z,
            trialFooterMessageOverride: Z,
            reviewWarningMessage: J,
            planGroup: $,
            openInvoiceId: ee,
            analyticsLocation: a,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            referralTrialOfferId: el,
            skipConfirm: eg,
            continueSessionToInitialStep: eE
        },
        e9 = (0, F.L)({
            renderHeader: ea,
            handleClose: e4
        });
    return (0, r.jsx)(c.bfh, {
        className: K.Xn,
        isShaking: ed && eO === M.h.PURCHASING,
        intensity: X,
        children: (0, r.jsx)(c.EOs, {
            "data-migration-pending": !0,
            className: o()(K.zr, eB, {
                [K.wf]: null != e9
            }),
            transitionState: N,
            hideShadow: eh,
            returnRef: em,
            size: eX,
            parentComponent: "PaymentModal",
            children: (0, r.jsx)(B.Ay, q({
                header: e9,
                isLargeModal: ef || (null == eW ? void 0 : eW.isLargeModal),
                isDynamicModal: e_ || (null == eW ? void 0 : eW.isDynamicModal)
            }, e8))
        })
    })
}

function ee(e) {
    let {
        subscriptionTier: t,
        initialPlanId: n,
        handleStepChange: a,
        referralTrialOfferId: o,
        handleClose: s,
        continueSessionToInitialStep: c
    } = e, {
        activeSubscription: u,
        blockedPayments: f,
        hasFetchedSubscriptions: p,
        hasFetchedSubscriptionPlans: h,
        currencyLoading: g,
        selectedSkuId: E,
        setSelectedPlanId: y,
        defaultPlanId: b,
        startedPaymentFlowWithPaymentSourcesRef: O,
        hasPaymentSources: v
    } = (0, L.P5)(), {
        isGift: A
    } = (0, D.Pv)(), I = O.current, S = (0, U.A)({
        isGift: A,
        skuId: E,
        referralTrialOfferId: o
    }), [T, C] = i.useState(!0), w = (0, l.bG)([N.A], () => N.A.applicationIdsFetched.has(Y.tv));
    return (i.useEffect(() => {
        C(!p || !h || g)
    }, [g, h, p]), (0, _.A)("Payment Modal", T, 5, {
        hasFetchedSubscriptions: p,
        hasFetchedSubscriptionPlans: h,
        currencyLoading: g
    }, {
        tags: {
            app_context: J
        }
    }), i.useEffect(() => {
        if (w || (0, d.LM)(Y.tv), T || f) return;
        let e = (0, k.vT)({
            isTrial: S,
            isGift: A,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: I
        });
        null != c ? a(x.pn.ADD_PAYMENT_STEPS, {
            emitPaymentFlowLoadedEvent: !0,
            trackedFromStep: c
        }) : null != n ? n !== Y.gD.PREMIUM_GROUP_MONTH || v ? a(x.pn.REVIEW) : a(x.pn.ADD_PAYMENT_STEPS) : e ? (y((0, k.xT)(E, u, b)), a(x.pn.REVIEW)) : null != t ? a(x.pn.PLAN_SELECT) : a(x.pn.SKU_SELECT)
    }, [c, u, f, w, n, T, a, t, E, y, S, b, A, I, v]), T) ? (0, r.jsx)(V.A, {}) : f ? (0, r.jsx)(m.oO, {
        onClose: s
    }) : null
}