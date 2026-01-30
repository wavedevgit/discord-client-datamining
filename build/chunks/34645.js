/** chunk id: 34645, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => ed
}), t(896048), t(457529);
var l = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(284009),
    o = t.n(s),
    c = t(835245),
    u = t(311907),
    p = t(435371),
    d = t(582754),
    _ = t(421380),
    m = t(397927),
    b = t(384904),
    S = t(923408),
    E = t(891197),
    g = t(444927),
    A = t(964486),
    P = t(304072),
    y = t(793574),
    f = t(688810),
    I = t(160946),
    N = t(459793),
    T = t(235986),
    O = t(357669),
    M = t(832286),
    h = t(958340),
    C = t(156312),
    x = t(166532),
    j = t(566980),
    L = t(216641),
    v = t(925847),
    R = t(87719),
    D = t(253390),
    w = t(251913),
    k = t(998678),
    U = t(632638),
    G = t(544028),
    F = t(71393),
    B = t(178368),
    Y = t(825755),
    W = t(295405),
    V = t(97352),
    H = t(166403),
    $ = t(954571),
    q = t(473145),
    K = t(927578),
    z = t(83617),
    J = t(615396),
    Q = t(802790),
    X = t(879100),
    Z = t(622501),
    ee = t(652215),
    en = t(788868),
    et = t(818348),
    el = t(985018),
    ei = t(314121);

function er(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
            var l;
            l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = l
        })
    }
    return e
}

function ea(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
        }
        return t
    })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e
}
let es = en.gD.NONE_MONTH,
    eo = [x.pn.PLAN_SELECT, x.pn.REVIEW, x.pn.CONFIRM],
    ec = [x.pn.PLAN_SELECT, x.pn.ADD_PAYMENT_STEPS, x.pn.REVIEW, x.pn.CONFIRM];
async function eu(e, n) {
    await (0, S.CD)();
    let t = (0, q.D$)(B.A.boostSlots);
    return (0, S.VA)(e, t.map(e => e.id), n)
}

function ep(e) {
    let n, {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: s,
            analyticsLocations: S,
            analyticsLocation: ep,
            analyticsSourceLocation: ed,
            guildId: e_,
            onSubscribeComplete: em,
            totalNumberOfSlotsToAssign: eb = 1,
            disablePremiumUpsell: eS = !1,
            onSubscriptionConfirmation: eE,
            applicationId: eg,
            intent: eA
        } = e,
        {
            activeSubscription: eP,
            blockedPayments: ey,
            startingFractionalPremiumEndsAtRef: ef,
            invoicePreview: eI,
            customCheckoutFlow: eN
        } = (0, C.P5)(),
        eT = (0, u.bG)([H.A], () => H.A.hasFetchedSubscriptions()),
        eO = null != eP ? eP.paymentSourceId : null,
        eM = (0, u.bG)([V.A], () => null != eP ? (0, J.c9)(eP.planId) : null),
        eh = (0, u.bG)([V.A], () => null == eP || null != V.A.get(eP.planId)),
        eC = (0, u.bG)([V.A], () => null == eM ? V.A.get(es) : eM),
        ex = (0, u.bG)([G.A], () => G.A.theme),
        ej = i.useRef((0, q.D$)(B.A.boostSlots)).current,
        eL = (0, u.bG)([h.A], () => null != e_ ? h.A.getGuild(e_) : void 0, [e_]),
        ev = (0, u.bG)([W.A], () => W.A.defaultPaymentSourceId),
        eR = (0, k.KP)(null != eO ? eO : eT ? ev : null),
        {
            paymentSources: eD,
            setPurchaseError: ew,
            paymentSourceId: ek,
            setIsSubmittingCurrentStep: eU,
            paymentAuthenticationState: eG,
            setPaymentSourceId: eF,
            isSubmittingCurrentStep: eB,
            paymentError: eY,
            purchaseError: eW,
            purchaseErrorBlockRef: eV
        } = eR,
        eH = Object.keys(eD).length > 0,
        [e$, eq] = i.useState(eb - ej.length),
        [eK, ez] = i.useState(!1),
        eJ = (0, u.bG)([Y.A], () => Y.A.popupCallbackCalled),
        eQ = (0, I.Y)(),
        eX = i.useMemo(() => null != eP && eh && eQ ? (0, D.v)(eP, e$) : [{
            planId: en.gD.PREMIUM_MONTH_GUILD,
            quantity: e$
        }], [eP, eh, e$, eQ]),
        eZ = i.useMemo(() => (0, v.A)(), []),
        [e0, e8] = (0, g.A)(() => [null != eZ ? eZ : (0, c.A)(), Date.now()]),
        {
            analyticsLocations: e5
        } = (0, f.Ay)(S, y.A.GUILD_BOOST_PURCHASE_MODAL),
        e9 = i.useMemo(() => {
            var e, n;
            return {
                load_id: e0,
                payment_type: et.fr[et.VV.SUBSCRIPTION],
                sku_id: en.pe.GUILD,
                subscription_type: ee.rzx.PREMIUM,
                subscription_plan_id: null != (e = null == (n = eX.find(e => {
                    let {
                        planId: n
                    } = e;
                    return en.pW.has(n)
                })) ? void 0 : n.planId) ? e : en.gD.PREMIUM_MONTH_GUILD,
                quantity: e$,
                location: ep,
                source: ed,
                location_stack: e5
            }
        }, [e0, ep, e5, ed, eX, e$]);
    i.useEffect(() => {
        (0, z.c_)(ek)
    }, [ek]);
    let [e4, e1] = i.useState(x.pn.PLAN_SELECT), e2 = i.useMemo(() => Date.now(), [e4]), e7 = i.useCallback((e, n) => {
        e1(e), ew(null);
        let t = Date.now();
        $.default.track(ee.HAw.PAYMENT_FLOW_STEP, ea(er({}, e9), {
            from_step: null != n ? n : e4,
            to_step: e === x.pn.ADD_PAYMENT_STEPS ? x.pn.PAYMENT_TYPE : e,
            step_duration_ms: t - e2,
            flow_duration_ms: t - e8,
            guild_id: e_,
            application_id: eg
        }))
    }, [ew, e9, e4, e2, e8, e_, eg]), e6 = {
        baseAnalyticsData: e9,
        flowStartTime: e8,
        guildId: e_,
        handleStepChange: e7,
        onSubscribeComplete: em,
        paymentSourceId: ek,
        setIsSubmittingCurrentStep: eU,
        setPurchaseError: ew
    }, e3 = i.useRef(e6);
    i.useEffect(() => {
        e3.current = e6
    }), i.useEffect(() => {
        let {
            baseAnalyticsData: e,
            flowStartTime: n,
            guildId: t,
            handleStepChange: l,
            onSubscribeComplete: i,
            paymentSourceId: r,
            setIsSubmittingCurrentStep: a,
            setPurchaseError: s
        } = e3.current;
        (async () => {
            if (!0 === eJ) try {
                if (null == Y.A.redirectedPaymentId) return;
                await (0, b.tn)(Y.A.redirectedPaymentId), l(x.pn.CONFIRM), nl(j.h.COMPLETED), null != t && await eu(t, null != eA), null == i || i()
            } catch (t) {
                nl(j.h.FAIL), s(t), $.default.track(ee.HAw.PAYMENT_FLOW_FAILED, ea(er({}, e), {
                    payment_error_code: null == t ? void 0 : t.code,
                    payment_gateway: ee.kM_.STRIPE,
                    payment_source_id: r,
                    duration_ms: Date.now() - n
                }))
            } finally {
                a(!1), (0, b.bl)()
            }
        })()
    }, [eJ, eA]), (0, A.Ay)(() => {
        H.A.hasFetchedSubscriptions() || (0, b.hP)(), null == e_ || null != F.A.getGuild(e_) || null != h.A.getGuild(e_) || h.A.isGuildFetching(e_) || (0, M.y)(e_), (0, O.b)(ea(er({}, e9), {
            guild_id: e_,
            application_id: eg,
            custom_checkout_flow: eN
        })), null != eP && null != eP.renewalMutations && $.default.track(ee.HAw.PREMIUM_GUILD_PENDING_MODAL, {
            location: ep,
            guild_id: e_
        })
    });
    let [ne, nn] = i.useState(eo), [nt, nl] = i.useState(j.h.WAITING), [ni, nr] = i.useState(!0), na = () => {
        r(nt === j.h.COMPLETED)
    }, ns = null != eP && eP.isPurchasedExternally;
    i.useEffect(() => {
        eG !== w.oc.PENDING && e4 !== x.pn.CONFIRM && null != eO && (ne !== eo && nn(eo), eo.includes(e4) || e4 === x.pn.PREMIUM_UPSELL || e7(x.pn.REVIEW)), e4 === x.pn.ADD_PAYMENT_STEPS && ne !== ec && nn(ec), ns && e4 !== x.pn.PLAN_SELECT && e1(x.pn.PLAN_SELECT)
    }, [e4, e7, ns, eG, eP, eO, ne]), (0, w.b)(e4, eG, e7, nl), (0, x.zT)(e4, nt, nl);
    let no = i.useRef(null),
        [nc, nu] = (0, P.A)(!1, 500),
        [np, nd] = i.useState(null),
        [n_, nm] = i.useState([]),
        [nb, nS] = i.useState(!1),
        nE = i.useMemo(() => JSON.stringify(n_), [n_]);
    i.useEffect(() => {
        let e;
        eQ && (null != V.A.get(en.gD.PREMIUM_MONTH_GUILD) && nm(e = (0, z._w)(en.gD.PREMIUM_MONTH_GUILD, ek, !1)), null == ek && null != eP && null != eP.paymentSourceId ? nd(eP.currency) : null != e && nd(e[0]))
    }, [ek, eP, eQ, nE]);
    let ng = (0, k.Y)({
        paymentModalArgs: eR,
        initialStep: x.pn.PAYMENT_TYPE,
        prependSteps: [x.pn.PLAN_SELECT],
        appendSteps: [x.pn.REVIEW, x.pn.CONFIRM],
        breadcrumpSteps: ne,
        currentBreadcrumpStep: e4,
        onReturn: () => {
            e7(Object.values(eD).length < 1 ? x.pn.PLAN_SELECT : x.pn.REVIEW, x.pn.PAYMENT_TYPE)
        },
        onComplete: e => {
            e7(x.pn.REVIEW, e)
        },
        onStepChange: e => {
            let {
                currentStep: n,
                toStep: t
            } = e, l = Date.now();
            $.default.track(ee.HAw.PAYMENT_FLOW_STEP, ea(er({}, e9), {
                from_step: n,
                to_step: t,
                step_duration_ms: l - e2,
                flow_duration_ms: l - e8,
                guild_id: e_
            }))
        }
    });
    if (ey) n = (0, l.jsx)(N.oO, {
        onClose: na
    });
    else if (eT && eh && eQ && null != np && "" !== np)
        if ((null == eP ? void 0 : eP.isPausedOrPausePending) && !eP.isPausedAllowsUpdatesButNotResume) n = (0, l.jsx)(m.$mQ, {
            "data-migration-pending": !0,
            children: (0, l.jsx)("p", {
                className: ei.C,
                children: el.intl.string(el.t.mOWsF1)
            })
        });
        else if (null != eP && null != eP.renewalMutations) n = (0, l.jsx)(m.$mQ, {
        "data-migration-pending": !0,
        children: (0, l.jsx)("p", {
            className: ei.C,
            children: el.intl.string(el.t.npfhh0)
        })
    });
    else if (e4 === x.pn.PREMIUM_UPSELL) {
        o()(null != eC, "Missing nextPremiumSubscriptionPlan"), o()(np, "Currency not defined");
        let e = null != ek ? {
            paymentSourceId: ek,
            currency: np
        } : {
            currency: np
        };
        n = (0, l.jsx)(Z.A, {
            premiumSubscriptionPlan: eC,
            analyticsLocation: ep,
            analyticsSourceLocation: ed,
            onClose: na,
            onBack: () => e7(x.pn.PLAN_SELECT),
            onSkip: () => e7(null != eO || eH ? x.pn.REVIEW : x.pn.ADD_PAYMENT_STEPS),
            onSubscriptionConfirmation: eE,
            priceOptions: e
        })
    } else {
        let e, t, i, r;
        o()(np, "Currency not defined");
        let a = null != ek ? {
                paymentSourceId: ek,
                currency: np
            } : {
                currency: np
            },
            c = F.A.getGuild(e_),
            u = null == eL && null == c;
        switch (e4) {
            case x.pn.PLAN_SELECT:
                o()(null != e_, "Missing guildId"), o()(null != eC, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(X.As, {
                    premiumSubscriptionPlan: eC,
                    numGuildBoosts: e$,
                    setNumGuildBoosts: eq,
                    setForceDisableSubmitButton: nr,
                    premiumSubscription: eP,
                    existingAvailableSlots: ej,
                    onClickPremiumSubscriptionLink: () => {
                        if (__BILLING_STANDALONE__) {
                            window.location.href = "discord://app/settings/nitro";
                            return
                        }
                        na(), null != s && s(), (0, R.e)()
                    },
                    priceOptions: a
                }), ns && null != eP && null != eP.paymentGateway ? e = (0, l.jsxs)("div", {
                    className: ei.xK,
                    children: [(0, l.jsx)(m.wx6, {
                        type: "critical",
                        children: el.intl.format(el.t["/m3Y3s"], {
                            paymentGatewayName: et.qm[eP.paymentGateway]
                        })
                    }), e]
                }) : !h.A.isGuildFetching(e_) && u && (e = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(m.po8, {
                        messageType: m.YCn.ERROR,
                        className: ei.MR,
                        children: el.intl.string(el.t.eAn6z2)
                    }), e]
                })), i = (0, l.jsx)(_.$n, {
                    "data-migration-pending": !0,
                    look: _.$n.Looks.LINK,
                    color: (0, d.qB)(ex) ? _.$n.Colors.PRIMARY : _.$n.Colors.WHITE,
                    onClick: na,
                    children: el.intl.string(el.t.oEAioF)
                }), r = (0, l.jsx)(m.Button, {
                    variant: "primary",
                    text: el.intl.string(el.t["3PatSz"]),
                    type: "submit",
                    disabled: ni || 0 === e$ || ns || u,
                    onClick: () => {
                        eS || null != eM && eM.premiumSubscriptionType === en.PremiumTypes.TIER_2 ? e7(null != eO || eH ? x.pn.REVIEW : x.pn.ADD_PAYMENT_STEPS) : e7(x.pn.PREMIUM_UPSELL)
                    }
                });
                break;
            case x.pn.ADD_PAYMENT_STEPS:
                break;
            case x.pn.AWAITING_AUTHENTICATION:
                e = (0, l.jsx)(E.N, {
                    className: ei.__invalid_body
                });
                break;
            case x.pn.REVIEW:
                o()(null != eC, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(X.Xp, {
                    paymentSources: eD,
                    priceOptions: a,
                    currentPremiumSubscription: eP,
                    premiumSubscriptionPaymentSourceId: eO,
                    premiumSubscriptionPlan: eC,
                    newAdditionalPlans: eX,
                    onPaymentSourceChange: e => eF(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                        e7(x.pn.ADD_PAYMENT_STEPS), eF(null)
                    },
                    onPurchaseTermsChange: ez,
                    legalTermsNodeRef: no,
                    hasLegalTermsFlash: nc
                }), t = x.pn.PLAN_SELECT, r = eK ? (0, l.jsx)(m.Button, {
                    variant: "active",
                    text: el.intl.string(el.t.eUEeCt),
                    type: "submit",
                    loading: eB,
                    onClick: async () => {
                        o()(null != eX, "Missing newAdditionalPlans");
                        let e = (0, L.W)(eD, ek);
                        ew(null);
                        try {
                            nl(j.h.PURCHASING), eU(!0), o()(null != ek, "Missing paymentSourceId"), o()(null != eI, "Missing invoicePreview");
                            let n = {
                                    amount: eI.total,
                                    currency: eI.currency
                                },
                                t = (0, K.U8)(eP, eX, a.currency.toLowerCase(), a.paymentSourceId);
                            if ($.default.track(ee.HAw.PAYMENT_FLOW_COMPLETED, ea(er({}, e9), {
                                    duration_ms: Date.now() - e8,
                                    guild_id: e_,
                                    application_id: eg
                                })), nb) return;
                            if (null == eP || null == eM) {
                                o()(null != e, "Missing paymentSource");
                                let l = await (0, b.Ky)({
                                    items: eX,
                                    paymentSource: e,
                                    currency: a.currency,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: t
                                });
                                if (l.redirectConfirmation) return void nS(null != l.redirectURL)
                            } else {
                                let l = {
                                    items: (0, K.aE)(eP, eX)
                                };
                                l.currency = eP.currency, null == l.currency && (l.currency = a.currency), l.paymentSource = null != eO ? eD[eO] : void 0, null == l.paymentSource && (o()(null != e, "Missing paymentSource"), l.paymentSource = e, l.currency = a.currency);
                                let i = await (0, b.nV)(eP, l, n, t, e5);
                                if (i.redirectConfirmation) return void nS(null != i.redirectURL)
                            }
                            null == eA && e7(x.pn.CONFIRM), nl(j.h.COMPLETED), null != e_ && await eu(e_, null != eA), null != eA && na(), null == em || em()
                        } catch (n) {
                            nl(j.h.FAIL), ew(n), $.default.track(ee.HAw.PAYMENT_FLOW_FAILED, ea(er({}, e9), {
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway: null != e ? e.type === ee.hes.CARD ? ee.kM_.STRIPE : ee.kM_.BRAINTREE : null,
                                payment_source_id: ek,
                                duration_ms: Date.now() - e8
                            }))
                        } finally {
                            nb || eU(!1)
                        }
                    }
                }) : (0, l.jsx)(p.m_, {
                    text: el.intl.string(el.t.XdvBLS),
                    children: (0, l.jsx)(m.Button, {
                        variant: "active",
                        text: el.intl.string(el.t.eUEeCt),
                        onClick: () => {
                            null != no.current && (no.current.scrollIntoView({
                                behavior: "smooth"
                            }), nu(!0))
                        },
                        type: "submit"
                    })
                });
                break;
            case x.pn.CONFIRM:
                var nA;
                let S = null != (nA = null == c ? void 0 : c.name) ? nA : null == eL ? void 0 : eL.name,
                    g = (0, L.g)(eD, ek),
                    A = (0, J.b2)(ef.current) && null != eM && !en.YV.has(eM.id);
                e = (0, l.jsx)(X.WE, {
                    guild: c,
                    guildBoostQuantity: e$ + ej.length,
                    onClose: na,
                    withAnimation: !1,
                    paymentSourceType: g,
                    fallbackGuildName: S,
                    didPurchaseOnFractionalPremium: A,
                    customCheckoutFlow: eN
                })
        }
        let P = null != eY && null == (0, x.ou)(eY) ? eY : eW;
        n = e4 === x.pn.ADD_PAYMENT_STEPS ? ng : (0, l.jsx)(U.A, {
            hideBreadcrumbs: e4 === x.pn.CONFIRM,
            steps: ne,
            currentStep: e4,
            paymentError: P,
            purchaseErrorBlockRef: eV,
            hasCurrencies: n_.length > 1,
            body: e,
            footer: e4 !== x.pn.CONFIRM ? (0, l.jsxs)(m.jlY, {
                "data-migration-pending": !0,
                direction: T.A.Direction.HORIZONTAL,
                align: T.A.Align.CENTER,
                justify: T.A.Justify.END,
                children: [null != t ? (0, l.jsx)("div", {
                    className: ei.uA,
                    children: (0, l.jsx)(_.$n, {
                        "data-migration-pending": !0,
                        color: (0, d.qB)(ex) ? _.$n.Colors.PRIMARY : _.$n.Colors.WHITE,
                        look: _.$n.Looks.LINK,
                        size: _.$n.Sizes.NONE,
                        onClick: () => {
                            null != t && e7(t)
                        },
                        children: el.intl.string(el.t["13/7kX"])
                    })
                }) : null, (0, l.jsxs)("div", {
                    className: ei.wV,
                    children: [i, r]
                })]
            }) : null
        })
    } else n = (0, l.jsx)("div", {
        className: ei._5,
        children: (0, l.jsx)(m.y$y, {})
    });
    let nP = null;
    return ey || e4 === x.pn.PREMIUM_UPSELL || (nP = (0, l.jsx)(Q.A, {
        onClose: na,
        currentStep: e4,
        purchaseState: nt
    })), (0, l.jsxs)(m.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        className: a()({
            [ei.MZ]: e4 === x.pn.PLAN_SELECT
        }),
        parentComponent: "GuildBoostPurchaseModal",
        children: [nP, n]
    })
}

function ed(e) {
    let n = (0, u.bG)([H.A], () => H.A.getPremiumTypeSubscription()),
        {
            analyticsLocations: t
        } = (0, f.Ay)(y.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(f.f5, {
        value: t,
        children: (0, l.jsx)(C.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(ep, er({}, e))
        })
    })
}