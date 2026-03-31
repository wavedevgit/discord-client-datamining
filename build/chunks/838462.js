/** chunk id: 838462 params = (module,exports,require) **/
t.d(n, {
    _: () => v
});
var l = t(627968),
    i = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(735438),
    o = t(877624),
    u = t(311907),
    d = t(554146),
    c = t(397927),
    p = t(964486),
    m = t(841702),
    E = t(367727),
    _ = t(810498),
    S = t(173834),
    x = t(412260),
    P = t(380083),
    T = t(954571),
    I = t(203982),
    h = t(45938),
    g = t(615396),
    A = t(937008),
    f = t(156312),
    j = t(491057),
    R = t(482132),
    C = t(877156),
    M = t(216641),
    y = t(921925),
    N = t(652215),
    O = t(49999);

function v(e) {
    let n, {
            handleClose: r,
            planGroup: v,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: k,
            postSuccessGuild: U,
            followupSKUInfo: w,
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
            startingPremiumSubscriptionPlanIdRef: z,
            startingFractionalPremiumEndsAtRef: V,
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
            selectedGiftingPromotionReward: en
        } = (0, A.Pv)(),
        {
            confirmationFooter: et
        } = (0, j.cG)(),
        el = (0, _.px)(H, Y, ee),
        ei = (0, _.Mq)(H),
        er = (0, m.Mv)(en, !1),
        es = (0, u.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
        }),
        ea = (0, M.g)(L, F),
        eo = Y && null != en && null != er && ei;
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
                        } = await t.e("29225").then(t.bind(t, 773486));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            subscription: K,
                            isFromPurchaseFlow: !0,
                            onClose: async () => {
                                I._.dispatch(N.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await n.onClose()
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
        el && null != es && (0, E.$l)(d.M.GIFTING_PROMOTION_REMINDER, (0, S.p)(), {
            dismissAction: O.i.INDIRECT_ACTION
        })
    }, [es, el]);
    let ed = null != G ? P.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != k) n = k(H, eu, K);
    else if (Y) n = (0, l.jsx)(P.fw, {
        planId: H.id,
        onClose: eu
    });
    else {
        let e = z.current === H.id ? {
            postSuccessGuild: U
        } : {
            followupSKUInfo: w,
            startingPremiumSubscriptionPlanId: z.current,
            isDowngrade: null != D && (0, g.vT)(D, H.id, v)
        };
        n = (0, l.jsx)(P.Ay, {
            planId: H.id,
            onClose: eu,
            paymentSourceType: ea,
            hideClose: null != et,
            startingFractionalPremiumEndsAt: V.current,
            customCTAType: ed,
            ...e
        })
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(R.dZ, {
            children: [(0, l.jsx)(y.A, {}), n]
        }), null != et && et, eo && null != en && (0, l.jsx)(C.A, {
            rewardSkuId: en,
            onClose: eu
        })]
    })
}