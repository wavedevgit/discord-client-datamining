/** chunk id: 838462 params = (module,exports,require) **/
n.d(t, {
    _: () => v
});
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(735438),
    o = n(877624),
    u = n(311907),
    d = n(554146),
    c = n(397927),
    p = n(964486),
    m = n(841702),
    E = n(367727),
    _ = n(810498),
    x = n(173834),
    S = n(412260),
    P = n(380083),
    T = n(954571),
    I = n(203982),
    h = n(45938),
    g = n(615396),
    A = n(937008),
    f = n(156312),
    j = n(491057),
    R = n(482132),
    M = n(877156),
    C = n(216641),
    y = n(921925),
    N = n(652215),
    O = n(49999);

function v(e) {
    let t, {
            handleClose: r,
            planGroup: v,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: k,
            postSuccessGuild: w,
            followupSKUInfo: U,
            continueSessionToInitialStep: G
        } = e,
        {
            activeSubscription: D,
            paymentSources: L,
            paymentSourceId: F,
            selectedPlan: H,
            selectedSkuId: B,
            step: W,
            updatedSubscription: K,
            startingPremiumSubscriptionPlanIdRef: V,
            startingFractionalPremiumEndsAtRef: z,
            isPremiumGroupPurchase: q
        } = (0, f.P5)(),
        {
            isGift: Y,
            giftRecipient: Z,
            giftCode: X,
            hasSentMessage: Q,
            isSendingMessage: J,
            sendGiftMessage: $,
            claimableRewards: ee,
            selectedGiftingPromotionReward: et
        } = (0, A.Pv)(),
        {
            confirmationFooter: en
        } = (0, j.cG)(),
        el = (0, _.px)(H, Y, ee),
        ei = (0, _.Mq)(H),
        er = (0, m.Mv)(et, !1),
        es = (0, u.bG)([S.A], () => {
            let e = S.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
        }),
        ea = (0, C.g)(L, F),
        eo = Y && null != et && null != er && ei;
    s()(null != H, "Expected plan to selected"), s()(null != B, "Expected selectedSkuId"), s()(null != W, "Step should be set");
    let eu = i.useCallback(() => {
        r(), b?.()
    }, [r, b]);
    (0, p.Ay)(() => {
        q && T.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
            has_updated_subscription: null != K,
            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
            subscription_id: K?.id
        })
    }), i.useEffect(() => {
        function e() {
            if (q)
                if (null != K && K.hasAnyPremiumGroup) {
                    T.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                        subscription_id: K.id
                    });
                    let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                    (0, c.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("29225").then(n.bind(n, 773486));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            subscription: K,
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
                } else T.default.track(N.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                    has_updated_subscription: null != K,
                    has_any_premium_group: K?.hasAnyPremiumGroup ?? !1
                }), I._.dispatch(N.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED)
        }
        return I._.subscribe(N.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
            I._.unsubscribe(N.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
        }
    }, [q, K]), i.useEffect(() => {
        !Y || null == Z || null == X || Q || J || (0, h.Ik)(Z) || $({
            onSubscriptionConfirmation: b
        })
    }, [$, Y, Z, X, Q, J, b]), i.useEffect(() => {
        el && null != es && (0, E.$l)(d.M.GIFTING_PROMOTION_REMINDER, (0, x.p)(), {
            dismissAction: O.i.INDIRECT_ACTION
        })
    }, [es, el]);
    let ed = null != G ? P.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != k) t = k(H, eu, K);
    else if (Y) t = (0, l.jsx)(P.fw, {
        planId: H.id,
        onClose: eu
    });
    else {
        let e = V.current === H.id ? {
            postSuccessGuild: w
        } : {
            followupSKUInfo: U,
            startingPremiumSubscriptionPlanId: V.current,
            isDowngrade: null != D && (0, g.vT)(D, H.id, v)
        };
        t = (0, l.jsx)(P.Ay, {
            planId: H.id,
            onClose: eu,
            paymentSourceType: ea,
            hideClose: null != en,
            startingFractionalPremiumEndsAt: z.current,
            customCTAType: ed,
            ...e
        })
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(R.dZ, {
            children: [(0, l.jsx)(y.A, {}), t]
        }), null != en && en, eo && null != et && (0, l.jsx)(M.A, {
            rewardSkuId: et,
            onClose: eu
        })]
    })
}