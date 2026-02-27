/** chunk id: 838462, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => O
});
var l = n(627968),
    i = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(735438),
    o = n(877624),
    u = n(311907),
    d = n(554146),
    c = n(397927),
    p = n(964486),
    m = n(841702),
    E = n(367727),
    _ = n(810498),
    h = n(173834),
    x = n(412260),
    S = n(380083),
    P = n(954571),
    I = n(203982),
    T = n(45938),
    g = n(615396),
    A = n(937008),
    j = n(156312),
    f = n(491057),
    M = n(482132),
    R = n(877156),
    y = n(216641),
    C = n(921925),
    N = n(652215),
    v = n(49999);

function O(e) {
    let t, {
            handleClose: s,
            planGroup: O,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: k,
            postSuccessGuild: w,
            followupSKUInfo: U,
            continueSessionToInitialStep: D
        } = e,
        {
            activeSubscription: L,
            paymentSources: G,
            paymentSourceId: F,
            selectedPlan: H,
            selectedSkuId: B,
            step: W,
            updatedSubscription: z,
            startingPremiumSubscriptionPlanIdRef: K,
            startingFractionalPremiumEndsAtRef: V,
            isPremiumGroupPurchase: Z
        } = (0, j.P5)(),
        {
            isGift: q,
            giftRecipient: Y,
            giftCode: X,
            hasSentMessage: Q,
            isSendingMessage: J,
            sendGiftMessage: $,
            claimableRewards: ee,
            selectedGiftingPromotionReward: et
        } = (0, A.Pv)(),
        {
            confirmationFooter: en
        } = (0, f.cG)(),
        el = (0, _.px)(H, q, ee),
        ei = (0, _.Mq)(H),
        es = (0, m.Mv)(et, !1),
        er = (0, u.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
        }),
        ea = (0, y.g)(G, F),
        eo = q && null != et && null != es && ei;
    r()(null != H, "Expected plan to selected"), r()(null != B, "Expected selectedSkuId"), r()(null != W, "Step should be set");
    let eu = i.useCallback(() => {
        s(), b?.()
    }, [s, b]);
    (0, p.Ay)(() => {
        Z && P.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
            has_updated_subscription: null != z,
            has_any_premium_group: z?.hasAnyPremiumGroup ?? !1,
            subscription_id: z?.id
        })
    }), i.useEffect(() => {
        function e() {
            if (Z)
                if (null != z && z.hasAnyPremiumGroup) {
                    P.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                        subscription_id: z.id
                    });
                    let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                    (0, c.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("73987").then(n.bind(n, 773486));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            subscription: z,
                            isFromPurchaseFlow: !0,
                            onClose: async () => {
                                I._.dispatch(N.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose()
                            }
                        })
                    }, {
                        onCloseRequest: () => {
                            I._.dispatch(N.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e)
                        },
                        modalKey: e
                    })
                } else P.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                    has_updated_subscription: null != z,
                    has_any_premium_group: z?.hasAnyPremiumGroup ?? !1
                }), I._.dispatch(N.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED)
        }
        return I._.subscribe(N.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
            I._.unsubscribe(N.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
        }
    }, [Z, z]), i.useEffect(() => {
        !q || null == Y || null == X || Q || J || (0, T.Ik)(Y) || $({
            onSubscriptionConfirmation: b
        })
    }, [$, q, Y, X, Q, J, b]), i.useEffect(() => {
        el && null != er && (0, E.$l)(d.M.GIFTING_PROMOTION_REMINDER, (0, h.p)(), {
            dismissAction: v.i.INDIRECT_ACTION
        })
    }, [er, el]);
    let ed = null != D ? S.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != k) t = k(H, eu, z);
    else if (q) t = (0, l.jsx)(S.fw, {
        planId: H.id,
        onClose: eu
    });
    else {
        let e = K.current === H.id ? {
            postSuccessGuild: w
        } : {
            followupSKUInfo: U,
            startingPremiumSubscriptionPlanId: K.current,
            isDowngrade: null != L && (0, g.vT)(L, H.id, O)
        };
        t = (0, l.jsx)(S.Ay, {
            planId: H.id,
            onClose: eu,
            paymentSourceType: ea,
            hideClose: null != en,
            startingFractionalPremiumEndsAt: V.current,
            customCTAType: ed,
            ...e
        })
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(M.dZ, {
            children: [(0, l.jsx)(C.A, {}), t]
        }), null != en && en, eo && null != et && (0, l.jsx)(R.A, {
            rewardSkuId: et,
            onClose: eu
        })]
    })
}