/** chunk id: 939665 params = (module,exports,require) **/
n.d(t, {
    Z: () => B
});
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(877624),
    d = n(417597),
    c = n(397927),
    p = n(428644),
    m = n(69882),
    E = n(742810),
    _ = n(543767),
    S = n(810498),
    x = n(364876),
    P = n(412260),
    T = n(91053),
    A = n(446929),
    h = n(97352),
    g = n(45938),
    I = n(975571),
    f = n(927578),
    j = n(937008),
    R = n(156312),
    M = n(166532),
    C = n(69494),
    N = n(534479),
    O = n(482132),
    y = n(970077),
    b = n(615310),
    v = n(961098),
    k = n(340034),
    U = n(50956),
    w = n(921925),
    G = n(104745),
    D = n(652215),
    L = n(788868),
    F = n(985018),
    H = n(994560);

function B(e) {
    let {
        handleStepChange: t,
        initialPlanId: n,
        planGroup: r,
        subscriptionTier: a,
        trialId: B,
        handleClose: W
    } = e, {
        activeSubscription: K,
        selectedSkuId: z,
        defaultPlanId: V,
        priceOptions: q,
        isPremium: Y,
        isEligibleForTrial: Z,
        isEligibleForDiscount: X,
        referralTrialOfferId: Q
    } = (0, R.P5)(), J = (0, y.A)(), $ = (0, b.bB)(), {
        isGift: ee,
        giftRecipient: et,
        giftMessage: en,
        claimableRewards: el
    } = (0, j.Pv)(), ei = (0, S.Mq)(J), er = (0, d.bG)([P.A], () => {
        let e = P.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
        return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
    }), es = ee && ei && null != el && el.length > 0 && er, ea = (Z || X) ?? !1, eo = i.useMemo(() => (0, f.Tm)({
        skuId: z,
        isPremium: Y,
        defaultPlanId: V
    }), [z, Y, V]), eu = X && eo.includes(L.gD.PREMIUM_MONTH_TIER_2) ? L.gD.PREMIUM_MONTH_TIER_2 : eo[0], ed = (0, d.bG)([h.A], () => h.A.get(eu)), ec = [{
        planId: ed?.id,
        quantity: 1
    }], [ep, em] = i.useState(ea), [eE, e_] = (0, _.Kq)({
        items: ec,
        renewal: !1,
        preventFetch: !ea,
        applyEntitlements: !0,
        trialId: B,
        paymentSourceId: q.paymentSourceId,
        currency: q.currency
    });
    i.useEffect(() => {
        ea && em(eE?.subscriptionPeriodEnd == null)
    }, [eE, ea]), (0, p.A)("Payment Modal Plan Select Step", ep, 5, {
        proratedInvoicePreview: eE,
        proratedInvoiceError: e_,
        isEligibleForOffer: ea
    }, {
        tags: {
            app_context: "billing"
        }
    });
    let eS = e_?.message ?? F.intl.string(F.t.R0RpRX),
        ex = ea && null == e_,
        eP = ea && null != e_,
        eT = ex && null == K && eE?.subscriptionPeriodEnd == null,
        eA = (0, E.D7)({
            location: "premium_payment_plan_select_step"
        });
    (0, v.c)(eE, X);
    let eh = i.useMemo(() => ({
        planOptions: eo,
        selectedPlanId: J?.id,
        planGroup: r,
        subscriptionPeriodEnd: eE?.subscriptionPeriodEnd,
        useCompactGiftComponents: es,
        handleClose: W
    }), [eo, J?.id, r, eE?.subscriptionPeriodEnd, es, W]);
    if (eT) return eA ? (0, l.jsx)(m.Ed, {
        className: H.QW
    }) : (0, l.jsx)(N.A, {});
    o()(null != $, "Step should be set"), o()(eo.length > 0, "Premium plan options should be set");
    let eg = eA && !ee ? (0, l.jsx)(k.XH, {
        ...eh,
        isInPlanSelectStep: !0,
        showPlanStatusSubText: !0
    }) : (0, l.jsx)(A.$p, {
        ...eh
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(U.Z, {
            giftMessage: en
        }), !(ee && (0, g.Ik)(et)) && (0, l.jsx)(C.A, {
            isEligibleForTrial: Z
        }), (0, l.jsxs)(O.dZ, {
            children: [!eA && ex && (0, l.jsx)("hr", {
                className: H.T4
            }), (0, l.jsx)(G.P, {
                className: H.ZB,
                planSkuId: ed?.skuId,
                referralTrialOfferId: Q
            }), (0, l.jsx)(w.A, {}), eP ? (0, l.jsx)(c.wx6, {
                type: "critical",
                children: eS
            }) : eg, ex && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("hr", {
                    className: s()(H.IM, {
                        [H.Go]: eA
                    })
                }), (0, l.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    children: F.intl.format(F.t.BHtnqA, {
                        link: I.A.getArticleURL(D.MVz.PREMIUM_DETAILS_CANCEL_SUB)
                    })
                })]
            })]
        }), (0, l.jsxs)(O.UX, {
            children: [es && (0, l.jsx)(x._, {}), (0, l.jsx)(T.Z, {
                onStepChange: t,
                onBackClick: () => t(M.pn.SKU_SELECT),
                showBackButton: null == n && null == a,
                planOptions: eo,
                shouldRenderUpdatedPaymentModal: ex,
                isTrial: Z
            })]
        })]
    })
}