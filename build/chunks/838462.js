/** chunk id: 838462 params = (module,exports,require) **/
t.d(n, {
    _: () => k
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
    T = t(380083),
    P = t(954571),
    h = t(203982),
    A = t(45938),
    I = t(615396),
    g = t(937008),
    f = t(156312),
    j = t(491057),
    R = t(482132),
    M = t(877156),
    C = t(970077),
    N = t(615310),
    O = t(216641),
    y = t(921925),
    b = t(652215),
    v = t(49999);

function k(e) {
    let n, {
            handleClose: r,
            planGroup: k,
            onSubscriptionConfirmation: U,
            renderPurchaseConfirmation: w,
            postSuccessGuild: D,
            followupSKUInfo: G,
            continueSessionToInitialStep: L
        } = e,
        {
            activeSubscription: F,
            paymentSources: H,
            paymentSourceId: B,
            selectedSkuId: W,
            updatedSubscription: K,
            startingPremiumSubscriptionPlanIdRef: z,
            startingFractionalPremiumEndsAtRef: V,
            isPremiumGroupPurchase: q
        } = (0, f.P5)(),
        Y = (0, C.A)(),
        Z = (0, N.bB)(),
        {
            isGift: X,
            giftRecipient: Q,
            giftCode: J,
            hasSentMessage: $,
            isSendingMessage: ee,
            sendGiftMessage: en,
            claimableRewards: et,
            selectedGiftingPromotionReward: el
        } = (0, g.Pv)(),
        {
            confirmationFooter: ei
        } = (0, j.cG)(),
        er = (0, _.px)(Y, X, et),
        es = (0, _.Mq)(Y),
        ea = (0, m.Mv)(el, !1),
        eo = (0, u.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
        }),
        eu = (0, O.g)(H, B),
        ed = X && null != el && null != ea && es;
    s()(null != Y, "Expected plan to selected"), s()(null != W, "Expected selectedSkuId"), s()(null != Z, "Step should be set");
    let ec = i.useCallback(() => {
        r(), U?.()
    }, [r, U]);
    (0, p.Ay)(() => {
        q && P.default.track(b.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
            has_updated_subscription: null != K,
            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
            subscription_id: K?.id
        })
    }), i.useEffect(() => {
        function e() {
            if (q)
                if (null != K && K.hasAnyPremiumGroup) {
                    P.default.track(b.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
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
                                h._.dispatch(b.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await n.onClose()
                            }
                        })
                    }, {
                        onCloseRequest: () => {
                            h._.dispatch(b.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e)
                        },
                        modalKey: e
                    })
                } else P.default.track(b.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                    has_updated_subscription: null != K,
                    has_any_premium_group: K?.hasAnyPremiumGroup ?? !1
                }), h._.dispatch(b.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED)
        }
        return h._.subscribe(b.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
            h._.unsubscribe(b.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
        }
    }, [q, K]), i.useEffect(() => {
        !X || null == Q || null == J || $ || ee || (0, A.Ik)(Q) || en({
            onSubscriptionConfirmation: U
        })
    }, [en, X, Q, J, $, ee, U]), i.useEffect(() => {
        er && null != eo && (0, E.$l)(d.M.GIFTING_PROMOTION_REMINDER, (0, S.p)(), {
            dismissAction: v.i.INDIRECT_ACTION
        })
    }, [eo, er]);
    let ep = null != L ? T.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != w) n = w(Y, ec, K);
    else if (X) n = (0, l.jsx)(T.fw, {
        planId: Y.id,
        onClose: ec
    });
    else {
        let e = z.current === Y.id ? {
            postSuccessGuild: D
        } : {
            followupSKUInfo: G,
            startingPremiumSubscriptionPlanId: z.current,
            isDowngrade: null != F && (0, I.vT)(F, Y.id, k)
        };
        n = (0, l.jsx)(T.Ay, {
            planId: Y.id,
            onClose: ec,
            paymentSourceType: eu,
            hideClose: null != ei,
            startingFractionalPremiumEndsAt: V.current,
            customCTAType: ep,
            ...e
        })
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(R.dZ, {
            children: [(0, l.jsx)(y.A, {}), n]
        }), null != ei && ei, ed && null != el && (0, l.jsx)(M.A, {
            rewardSkuId: el,
            onClose: ec
        })]
    })
}