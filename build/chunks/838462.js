/** Chunk was on 2824 **/
/** chunk id: 838462, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(554146),
    o = n(397927),
    u = n(841702),
    c = n(367727),
    d = n(552736),
    p = n(810498),
    m = n(173834),
    g = n(380083),
    f = n(203982),
    y = n(45938),
    j = n(615396),
    b = n(937008),
    h = n(156312),
    v = n(491057),
    O = n(482132),
    P = n(877156),
    E = n(216641),
    x = n(921925),
    S = n(652215),
    T = n(49999);

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function A(e) {
    let t, {
            handleClose: i,
            planGroup: A,
            onSubscriptionConfirmation: k,
            renderPurchaseConfirmation: C,
            postSuccessGuild: w,
            followupSKUInfo: _,
            continueSessionToInitialStep: M
        } = e,
        {
            activeSubscription: N,
            paymentSources: R,
            paymentSourceId: D,
            selectedPlan: L,
            selectedSkuId: G,
            step: U,
            updatedSubscription: H,
            startingPremiumSubscriptionPlanIdRef: B,
            startingFractionalPremiumEndsAtRef: F,
            isPremiumGroupPurchase: W
        } = (0, h.P5)(),
        {
            isGift: K,
            giftRecipient: V,
            giftCode: z,
            hasSentMessage: Y,
            isSendingMessage: Z,
            sendGiftMessage: Q,
            claimableRewards: q,
            selectedGiftingPromotionReward: J
        } = (0, b.Pv)(),
        {
            confirmationFooter: X
        } = (0, v.cG)(),
        $ = (0, p.px)(L, K, q),
        ee = (0, d.A)(),
        et = (0, p.Mq)(L),
        en = (0, u.Mv)(null == J ? void 0 : J.skuId),
        er = (0, E.g)(R, D),
        el = K && null != J && et;
    s()(null != L, "Expected plan to selected"), s()(null != G, "Expected selectedSkuId"), s()(null != U, "Step should be set");
    let ei = l.useCallback(() => {
        i(), null == k || k()
    }, [i, k]);
    l.useEffect(() => {
        function e() {
            W && null != H && H.hasAnyPremiumGroup && (0, o.mMO)(async () => {
                let {
                    default: e
                } = await n.e("73987").then(n.bind(n, 773486));
                return t => {
                    var n, l;
                    return (0, r.jsx)(e, (n = I({}, t), l = l = {
                        subscription: H
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                    }), n))
                }
            })
        }
        return f._.subscribe(S.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
            f._.unsubscribe(S.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
        }
    }, [W, H]), l.useEffect(() => {
        !K || null == V || null == z || Y || Z || (0, y.Ik)(V) || Q({
            onSubscriptionConfirmation: k
        })
    }, [Q, K, V, z, Y, Z, k]), l.useEffect(() => {
        null != ee && null != ee.reminderNotice && $ && (0, c.$l)(a.M.GIFTING_PROMOTION_REMINDER, (0, m.p)(), {
            dismissAction: T.i.INDIRECT_ACTION
        })
    }, [ee, $]);
    let es = null != M ? g.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != C) t = C(L, ei, H);
    else if (K) t = (0, r.jsx)(g.fw, {
        planId: L.id,
        onClose: ei
    });
    else {
        let e = B.current === L.id ? {
            postSuccessGuild: w
        } : {
            followupSKUInfo: _,
            startingPremiumSubscriptionPlanId: B.current,
            isDowngrade: null != N && (0, j.vT)(N, L.id, A)
        };
        t = (0, r.jsx)(g.Ay, I({
            planId: L.id,
            onClose: ei,
            paymentSourceType: er,
            hideClose: null != X,
            startingFractionalPremiumEndsAt: F.current,
            customCTAType: es
        }, e))
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(O.dZ, {
            children: [(0, r.jsx)(x.A, {}), t]
        }), null != X && X, el && null != en && (0, r.jsx)(P.A, {
            reward: J,
            purchase: en,
            onClose: ei
        })]
    })
}