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
    P = n(380083),
    S = n(954571),
    T = n(203982),
    I = n(45938),
    g = n(615396),
    A = n(937008),
    j = n(156312),
    f = n(491057),
    M = n(482132),
    R = n(877156),
    C = n(216641),
    y = n(921925),
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
            paymentSourceId: H,
            selectedPlan: F,
            selectedSkuId: B,
            step: W,
            updatedSubscription: K,
            startingPremiumSubscriptionPlanIdRef: z,
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
        el = (0, _.px)(F, q, ee),
        ei = (0, _.Mq)(F),
        es = (0, m.Mv)(et, !1),
        er = (0, u.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
        }),
        ea = (0, C.g)(G, H),
        eo = q && null != et && null != es && ei;
    r()(null != F, "Expected plan to selected"), r()(null != B, "Expected selectedSkuId"), r()(null != W, "Step should be set");
    let eu = i.useCallback(() => {
        s(), b?.()
    }, [s, b]);
    (0, p.Ay)(() => {
        Z && S.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
            has_updated_subscription: null != K,
            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
            subscription_id: K?.id
        })
    }), i.useEffect(() => {
        function e() {
            if (Z)
                if (null != K && K.hasAnyPremiumGroup) {
                    S.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                        subscription_id: K.id
                    });
                    let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                    (0, c.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("73987").then(n.bind(n, 773486));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            subscription: K,
                            isFromPurchaseFlow: !0,
                            onClose: async () => {
                                T._.dispatch(N.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose()
                            }
                        })
                    }, {
                        onCloseRequest: () => {
                            T._.dispatch(N.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e)
                        },
                        modalKey: e
                    })
                } else S.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                    has_updated_subscription: null != K,
                    has_any_premium_group: K?.hasAnyPremiumGroup ?? !1
                }), T._.dispatch(N.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED)
        }
        return T._.subscribe(N.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
            T._.unsubscribe(N.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
        }
    }, [Z, K]), i.useEffect(() => {
        !q || null == Y || null == X || Q || J || (0, I.Ik)(Y) || $({
            onSubscriptionConfirmation: b
        })
    }, [$, q, Y, X, Q, J, b]), i.useEffect(() => {
        el && null != er && (0, E.$l)(d.M.GIFTING_PROMOTION_REMINDER, (0, h.p)(), {
            dismissAction: v.i.INDIRECT_ACTION
        })
    }, [er, el]);
    let ed = null != D ? P.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != k) t = k(F, eu, K);
    else if (q) t = (0, l.jsx)(P.fw, {
        planId: F.id,
        onClose: eu
    });
    else {
        let e = z.current === F.id ? {
            postSuccessGuild: w
        } : {
            followupSKUInfo: U,
            startingPremiumSubscriptionPlanId: z.current,
            isDowngrade: null != L && (0, g.vT)(L, F.id, O)
        };
        t = (0, l.jsx)(P.Ay, {
            planId: F.id,
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
            children: [(0, l.jsx)(y.A, {}), t]
        }), null != en && en, eo && null != et && (0, l.jsx)(R.A, {
            rewardSkuId: et,
            onClose: eu
        })]
    })
}