/** Chunk was on 48982 **/
/** chunk id: 34645, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => ed
}), t(896048), t(457529);
var l = t(627968),
    i = t(64700),
    r = t(503698),
    s = t.n(r),
    o = t(284009),
    a = t.n(o),
    c = t(835245),
    u = t(311907),
    p = t(435371),
    d = t(582754),
    _ = t(421380),
    m = t(397927),
    E = t(384904),
    P = t(923408),
    A = t(891197),
    y = t(444927),
    b = t(964486),
    g = t(304072),
    f = t(793574),
    S = t(688810),
    I = t(160946),
    N = t(459793),
    O = t(235986),
    M = t(357669),
    h = t(832286),
    T = t(958340),
    L = t(156312),
    j = t(166532),
    C = t(566980),
    x = t(216641),
    D = t(925847),
    R = t(87719),
    k = t(253390),
    w = t(251913),
    v = t(998678),
    G = t(632638),
    U = t(544028),
    F = t(71393),
    B = t(178368),
    Y = t(825755),
    H = t(295405),
    W = t(97352),
    $ = t(166403),
    V = t(954571),
    z = t(473145),
    K = t(927578),
    q = t(83617),
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

function es(e, n) {
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
let eo = en.gD.NONE_MONTH,
    ea = [j.pn.PLAN_SELECT, j.pn.REVIEW, j.pn.CONFIRM],
    ec = [j.pn.PLAN_SELECT, j.pn.ADD_PAYMENT_STEPS, j.pn.REVIEW, j.pn.CONFIRM];
async function eu(e, n) {
    await (0, P.CD)();
    let t = (0, z.D$)(B.A.boostSlots);
    return (0, P.VA)(e, t.map(e => e.id), n)
}

function ep(e) {
    let n, {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: o,
            analyticsLocations: P,
            analyticsLocation: ep,
            analyticsSourceLocation: ed,
            guildId: e_,
            onSubscribeComplete: em,
            totalNumberOfSlotsToAssign: eE = 1,
            disablePremiumUpsell: eP = !1,
            onSubscriptionConfirmation: eA,
            applicationId: ey,
            intent: eb
        } = e,
        {
            activeSubscription: eg,
            blockedPayments: ef,
            startingFractionalPremiumEndsAtRef: eS,
            invoicePreview: eI,
            customCheckoutFlow: eN
        } = (0, L.P5)(),
        eO = (0, u.bG)([$.A], () => $.A.hasFetchedSubscriptions()),
        eM = null != eg ? eg.paymentSourceId : null,
        eh = (0, u.bG)([W.A], () => null != eg ? (0, J.c9)(eg.planId) : null),
        eT = (0, u.bG)([W.A], () => null == eg || null != W.A.get(eg.planId)),
        eL = (0, u.bG)([W.A], () => null == eh ? W.A.get(eo) : eh),
        ej = (0, u.bG)([U.A], () => U.A.theme),
        eC = i.useRef((0, z.D$)(B.A.boostSlots)).current,
        ex = (0, u.bG)([T.A], () => null != e_ ? T.A.getGuild(e_) : void 0, [e_]),
        eD = (0, u.bG)([H.A], () => H.A.defaultPaymentSourceId),
        eR = (0, v.KP)(null != eM ? eM : eO ? eD : null),
        {
            paymentSources: ek,
            setPurchaseError: ew,
            paymentSourceId: ev,
            setIsSubmittingCurrentStep: eG,
            paymentAuthenticationState: eU,
            setPaymentSourceId: eF,
            isSubmittingCurrentStep: eB,
            paymentError: eY,
            purchaseError: eH,
            purchaseErrorBlockRef: eW
        } = eR,
        e$ = Object.keys(ek).length > 0,
        [eV, ez] = i.useState(eE - eC.length),
        [eK, eq] = i.useState(!1),
        eJ = (0, u.bG)([Y.A], () => Y.A.popupCallbackCalled),
        eQ = (0, I.Y)(),
        eX = i.useMemo(() => null != eg && eT && eQ ? (0, k.v)(eg, eV) : [{
            planId: en.gD.PREMIUM_MONTH_GUILD,
            quantity: eV
        }], [eg, eT, eV, eQ]),
        eZ = i.useMemo(() => (0, D.A)(), []),
        [e0, e5] = (0, y.A)(() => [null != eZ ? eZ : (0, c.A)(), Date.now()]),
        {
            analyticsLocations: e8
        } = (0, S.Ay)(P, f.A.GUILD_BOOST_PURCHASE_MODAL),
        e1 = i.useMemo(() => {
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
                quantity: eV,
                location: ep,
                source: ed,
                location_stack: e8
            }
        }, [e0, ep, e8, ed, eX, eV]);
    i.useEffect(() => {
        (0, q.c_)(ev)
    }, [ev]);
    let [e4, e3] = i.useState(j.pn.PLAN_SELECT), e9 = i.useMemo(() => Date.now(), [e4]), e6 = i.useCallback((e, n) => {
        e3(e), ew(null);
        let t = Date.now();
        V.default.track(ee.HAw.PAYMENT_FLOW_STEP, es(er({}, e1), {
            from_step: null != n ? n : e4,
            to_step: e === j.pn.ADD_PAYMENT_STEPS ? j.pn.PAYMENT_TYPE : e,
            step_duration_ms: t - e9,
            flow_duration_ms: t - e5,
            guild_id: e_,
            application_id: ey
        }))
    }, [ew, e1, e4, e9, e5, e_, ey]), e2 = {
        baseAnalyticsData: e1,
        flowStartTime: e5,
        guildId: e_,
        handleStepChange: e6,
        onSubscribeComplete: em,
        paymentSourceId: ev,
        setIsSubmittingCurrentStep: eG,
        setPurchaseError: ew
    }, e7 = i.useRef(e2);
    i.useEffect(() => {
        e7.current = e2
    }), i.useEffect(() => {
        let {
            baseAnalyticsData: e,
            flowStartTime: n,
            guildId: t,
            handleStepChange: l,
            onSubscribeComplete: i,
            paymentSourceId: r,
            setIsSubmittingCurrentStep: s,
            setPurchaseError: o
        } = e7.current;
        (async () => {
            if (!0 === eJ) try {
                if (null == Y.A.redirectedPaymentId) return;
                await (0, E.tn)(Y.A.redirectedPaymentId), l(j.pn.CONFIRM), nl(C.h.COMPLETED), null != t && await eu(t, null != eb), null == i || i()
            } catch (t) {
                nl(C.h.FAIL), o(t), V.default.track(ee.HAw.PAYMENT_FLOW_FAILED, es(er({}, e), {
                    payment_error_code: null == t ? void 0 : t.code,
                    payment_gateway: ee.kM_.STRIPE,
                    payment_source_id: r,
                    duration_ms: Date.now() - n
                }))
            } finally {
                s(!1), (0, E.bl)()
            }
        })()
    }, [eJ, eb]), (0, b.Ay)(() => {
        $.A.hasFetchedSubscriptions() || (0, E.hP)(), null == e_ || null != F.A.getGuild(e_) || null != T.A.getGuild(e_) || T.A.isGuildFetching(e_) || (0, h.y)(e_), (0, M.b)(es(er({}, e1), {
            guild_id: e_,
            application_id: ey,
            custom_checkout_flow: eN
        })), null != eg && null != eg.renewalMutations && V.default.track(ee.HAw.PREMIUM_GUILD_PENDING_MODAL, {
            location: ep,
            guild_id: e_
        })
    });
    let [ne, nn] = i.useState(ea), [nt, nl] = i.useState(C.h.WAITING), [ni, nr] = i.useState(!0), ns = () => {
        r(nt === C.h.COMPLETED)
    }, no = null != eg && eg.isPurchasedExternally;
    i.useEffect(() => {
        eU !== w.oc.PENDING && e4 !== j.pn.CONFIRM && null != eM && (ne !== ea && nn(ea), ea.includes(e4) || e4 === j.pn.PREMIUM_UPSELL || e6(j.pn.REVIEW)), e4 === j.pn.ADD_PAYMENT_STEPS && ne !== ec && nn(ec), no && e4 !== j.pn.PLAN_SELECT && e3(j.pn.PLAN_SELECT)
    }, [e4, e6, no, eU, eg, eM, ne]), (0, w.b)(e4, eU, e6, nl), (0, j.zT)(e4, nt, nl);
    let na = i.useRef(null),
        [nc, nu] = (0, g.A)(!1, 500),
        [np, nd] = i.useState(null),
        [n_, nm] = i.useState([]),
        [nE, nP] = i.useState(!1),
        nA = i.useMemo(() => JSON.stringify(n_), [n_]);
    i.useEffect(() => {
        let e;
        eQ && (null != W.A.get(en.gD.PREMIUM_MONTH_GUILD) && nm(e = (0, q._w)(en.gD.PREMIUM_MONTH_GUILD, ev, !1)), null == ev && null != eg && null != eg.paymentSourceId ? nd(eg.currency) : null != e && nd(e[0]))
    }, [ev, eg, eQ, nA]);
    let ny = (0, v.Y)({
        paymentModalArgs: eR,
        initialStep: j.pn.PAYMENT_TYPE,
        prependSteps: [j.pn.PLAN_SELECT],
        appendSteps: [j.pn.REVIEW, j.pn.CONFIRM],
        breadcrumpSteps: ne,
        currentBreadcrumpStep: e4,
        onReturn: () => {
            e6(Object.values(ek).length < 1 ? j.pn.PLAN_SELECT : j.pn.REVIEW, j.pn.PAYMENT_TYPE)
        },
        onComplete: e => {
            e6(j.pn.REVIEW, e)
        },
        onStepChange: e => {
            let {
                currentStep: n,
                toStep: t
            } = e, l = Date.now();
            V.default.track(ee.HAw.PAYMENT_FLOW_STEP, es(er({}, e1), {
                from_step: n,
                to_step: t,
                step_duration_ms: l - e9,
                flow_duration_ms: l - e5,
                guild_id: e_
            }))
        }
    });
    if (ef) n = (0, l.jsx)(N.oO, {
        onClose: ns
    });
    else if (eO && eT && eQ && null != np && "" !== np)
        if ((null == eg ? void 0 : eg.isPausedOrPausePending) && !eg.isPausedAllowsUpdatesButNotResume) n = (0, l.jsx)(m.$mQ, {
            "data-migration-pending": !0,
            children: (0, l.jsx)("p", {
                className: ei.C,
                children: el.intl.string(el.t.mOWsF1)
            })
        });
        else if (null != eg && null != eg.renewalMutations) n = (0, l.jsx)(m.$mQ, {
        "data-migration-pending": !0,
        children: (0, l.jsx)("p", {
            className: ei.C,
            children: el.intl.string(el.t.npfhh0)
        })
    });
    else if (e4 === j.pn.PREMIUM_UPSELL) {
        a()(null != eL, "Missing nextPremiumSubscriptionPlan"), a()(np, "Currency not defined");
        let e = null != ev ? {
            paymentSourceId: ev,
            currency: np
        } : {
            currency: np
        };
        n = (0, l.jsx)(Z.A, {
            premiumSubscriptionPlan: eL,
            analyticsLocation: ep,
            analyticsSourceLocation: ed,
            onClose: ns,
            onBack: () => e6(j.pn.PLAN_SELECT),
            onSkip: () => e6(null != eM || e$ ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS),
            onSubscriptionConfirmation: eA,
            priceOptions: e
        })
    } else {
        let e, t, i, r;
        a()(np, "Currency not defined");
        let s = null != ev ? {
                paymentSourceId: ev,
                currency: np
            } : {
                currency: np
            },
            c = F.A.getGuild(e_),
            u = null == ex && null == c;
        switch (e4) {
            case j.pn.PLAN_SELECT:
                a()(null != e_, "Missing guildId"), a()(null != eL, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(X.As, {
                    premiumSubscriptionPlan: eL,
                    numGuildBoosts: eV,
                    setNumGuildBoosts: ez,
                    setForceDisableSubmitButton: nr,
                    premiumSubscription: eg,
                    existingAvailableSlots: eC,
                    onClickPremiumSubscriptionLink: () => {
                        if (__BILLING_STANDALONE__) {
                            window.location.href = "discord://app/settings/nitro";
                            return
                        }
                        ns(), null != o && o(), (0, R.Z)()
                    },
                    priceOptions: s
                }), no && null != eg && null != eg.paymentGateway ? e = (0, l.jsxs)("div", {
                    className: ei.xK,
                    children: [(0, l.jsx)(m.wx6, {
                        type: "critical",
                        children: el.intl.format(el.t["/m3Y3s"], {
                            paymentGatewayName: et.qm[eg.paymentGateway]
                        })
                    }), e]
                }) : !T.A.isGuildFetching(e_) && u && (e = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(m.po8, {
                        messageType: m.YCn.ERROR,
                        className: ei.MR,
                        children: el.intl.string(el.t.eAn6z2)
                    }), e]
                })), i = (0, l.jsx)(_.$n, {
                    "data-migration-pending": !0,
                    look: _.$n.Looks.LINK,
                    color: (0, d.qB)(ej) ? _.$n.Colors.PRIMARY : _.$n.Colors.WHITE,
                    onClick: ns,
                    children: el.intl.string(el.t.oEAioF)
                }), r = (0, l.jsx)(m.Button, {
                    variant: "primary",
                    text: el.intl.string(el.t["3PatSz"]),
                    type: "submit",
                    disabled: ni || 0 === eV || no || u,
                    onClick: () => {
                        eP || null != eh && eh.premiumSubscriptionType === en.PremiumTypes.TIER_2 ? e6(null != eM || e$ ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS) : e6(j.pn.PREMIUM_UPSELL)
                    }
                });
                break;
            case j.pn.ADD_PAYMENT_STEPS:
                break;
            case j.pn.AWAITING_AUTHENTICATION:
                e = (0, l.jsx)(A.N, {
                    className: ei.__invalid_body
                });
                break;
            case j.pn.REVIEW:
                a()(null != eL, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(X.Xp, {
                    paymentSources: ek,
                    priceOptions: s,
                    currentPremiumSubscription: eg,
                    premiumSubscriptionPaymentSourceId: eM,
                    premiumSubscriptionPlan: eL,
                    newAdditionalPlans: eX,
                    onPaymentSourceChange: e => eF(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                        e6(j.pn.ADD_PAYMENT_STEPS), eF(null)
                    },
                    onPurchaseTermsChange: eq,
                    legalTermsNodeRef: na,
                    hasLegalTermsFlash: nc
                }), t = j.pn.PLAN_SELECT, r = eK ? (0, l.jsx)(m.Button, {
                    variant: "active",
                    text: el.intl.string(el.t.eUEeCt),
                    type: "submit",
                    loading: eB,
                    onClick: async () => {
                        a()(null != eX, "Missing newAdditionalPlans");
                        let e = (0, x.W)(ek, ev);
                        ew(null);
                        try {
                            nl(C.h.PURCHASING), eG(!0), a()(null != ev, "Missing paymentSourceId"), a()(null != eI, "Missing invoicePreview");
                            let n = {
                                    amount: eI.total,
                                    currency: eI.currency
                                },
                                t = (0, K.U8)(eg, eX, s.currency.toLowerCase(), s.paymentSourceId);
                            if (V.default.track(ee.HAw.PAYMENT_FLOW_COMPLETED, es(er({}, e1), {
                                    duration_ms: Date.now() - e5,
                                    guild_id: e_,
                                    application_id: ey
                                })), nE) return;
                            if (null == eg || null == eh) {
                                a()(null != e, "Missing paymentSource");
                                let l = await (0, E.Ky)({
                                    items: eX,
                                    paymentSource: e,
                                    currency: s.currency,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: t
                                });
                                if (l.redirectConfirmation) return void nP(null != l.redirectURL)
                            } else {
                                let l = {
                                    items: (0, K.aE)(eg, eX)
                                };
                                l.currency = eg.currency, null == l.currency && (l.currency = s.currency), l.paymentSource = null != eM ? ek[eM] : void 0, null == l.paymentSource && (a()(null != e, "Missing paymentSource"), l.paymentSource = e, l.currency = s.currency);
                                let i = await (0, E.nV)(eg, l, n, t, e8);
                                if (i.redirectConfirmation) return void nP(null != i.redirectURL)
                            }
                            null == eb && e6(j.pn.CONFIRM), nl(C.h.COMPLETED), null != e_ && await eu(e_, null != eb), null != eb && ns(), null == em || em()
                        } catch (n) {
                            nl(C.h.FAIL), ew(n), V.default.track(ee.HAw.PAYMENT_FLOW_FAILED, es(er({}, e1), {
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway: null != e ? e.type === ee.hes.CARD ? ee.kM_.STRIPE : ee.kM_.BRAINTREE : null,
                                payment_source_id: ev,
                                duration_ms: Date.now() - e5
                            }))
                        } finally {
                            nE || eG(!1)
                        }
                    }
                }) : (0, l.jsx)(p.m_, {
                    text: el.intl.string(el.t.XdvBLS),
                    children: (0, l.jsx)(m.Button, {
                        variant: "active",
                        text: el.intl.string(el.t.eUEeCt),
                        onClick: () => {
                            null != na.current && (na.current.scrollIntoView({
                                behavior: "smooth"
                            }), nu(!0))
                        },
                        type: "submit"
                    })
                });
                break;
            case j.pn.CONFIRM:
                var nb;
                let P = null != (nb = null == c ? void 0 : c.name) ? nb : null == ex ? void 0 : ex.name,
                    y = (0, x.g)(ek, ev),
                    b = (0, J.b2)(eS.current) && null != eh && !en.YV.has(eh.id);
                e = (0, l.jsx)(X.WE, {
                    guild: c,
                    guildBoostQuantity: eV + eC.length,
                    onClose: ns,
                    withAnimation: !1,
                    paymentSourceType: y,
                    fallbackGuildName: P,
                    didPurchaseOnFractionalPremium: b,
                    customCheckoutFlow: eN
                })
        }
        let g = null != eY && null == (0, j.ou)(eY) ? eY : eH;
        n = e4 === j.pn.ADD_PAYMENT_STEPS ? ny : (0, l.jsx)(G.A, {
            hideBreadcrumbs: e4 === j.pn.CONFIRM,
            steps: ne,
            currentStep: e4,
            paymentError: g,
            purchaseErrorBlockRef: eW,
            hasCurrencies: n_.length > 1,
            body: e,
            footer: e4 !== j.pn.CONFIRM ? (0, l.jsxs)(m.jlY, {
                "data-migration-pending": !0,
                direction: O.A.Direction.HORIZONTAL,
                align: O.A.Align.CENTER,
                justify: O.A.Justify.END,
                children: [null != t ? (0, l.jsx)("div", {
                    className: ei.uA,
                    children: (0, l.jsx)(_.$n, {
                        "data-migration-pending": !0,
                        color: (0, d.qB)(ej) ? _.$n.Colors.PRIMARY : _.$n.Colors.WHITE,
                        look: _.$n.Looks.LINK,
                        size: _.$n.Sizes.NONE,
                        onClick: () => {
                            null != t && e6(t)
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
    let ng = null;
    return ef || e4 === j.pn.PREMIUM_UPSELL || (ng = (0, l.jsx)(Q.A, {
        onClose: ns,
        currentStep: e4,
        purchaseState: nt
    })), (0, l.jsxs)(m.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        className: s()({
            [ei.MZ]: e4 === j.pn.PLAN_SELECT
        }),
        parentComponent: "GuildBoostPurchaseModal",
        children: [ng, n]
    })
}

function ed(e) {
    let n = (0, u.bG)([$.A], () => $.A.getPremiumTypeSubscription()),
        {
            analyticsLocations: t
        } = (0, S.Ay)(f.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(S.f5, {
        value: t,
        children: (0, l.jsx)(L.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(ep, er({}, e))
        })
    })
}