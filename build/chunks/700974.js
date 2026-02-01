/** chunk id: 700974, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(989349),
    l = n.n(s),
    c = n(311907),
    u = n(73153),
    d = n(73825),
    f = n(241524),
    p = n(688810),
    _ = n(202384),
    h = n(513461),
    m = n(212455),
    g = n(51758),
    E = n(857071),
    y = n(728950),
    b = n(97352),
    O = n(975571),
    v = n(500345),
    A = n(599941),
    I = n(624456),
    S = n(700206),
    T = n(396695),
    C = n(916727),
    N = n(354033),
    w = n(2242),
    R = n(652215),
    P = n(985018);
let D = "MMM DD, YYYY",
    L = (e, t, n, a) => {
        let s, L = (0, c.bG)([E.A], () => E.A.isLurking(t)),
            x = (0, g.H)(t),
            M = (0, c.bG)([m.A], () => null != t ? m.A.getRequest(t) : null),
            j = (null == M ? void 0 : M.applicationStatus) === h.B5.SUBMITTED,
            k = null == e ? void 0 : e.subscription_plans[0],
            U = null == k ? void 0 : k.id,
            G = (null == e ? void 0 : e.published) === !0,
            V = null == k ? void 0 : k.sku_id,
            F = (0, c.bG)([b.A], () => null != U ? b.A.get(U) : null),
            {
                activeSubscription: B,
                activeSubscriptionPlanFromStore: H
            } = (0, S.A)(n),
            Y = null == B || null != H,
            W = (0, A.cY)(n, {
                includeSoftDeleted: !0
            }).map(e => e.subscription_plans[0].id),
            K = (0, I.l)(B),
            z = null != K,
            q = !!(null == B ? void 0 : B.hasActiveTrial),
            {
                loading: Z,
                getTrialPurchaseEligibility: Q
            } = (0, T.E)(),
            X = (0, A.dL)(null == e ? void 0 : e.id),
            {
                analyticsLocations: J
            } = (0, p.Ay)(),
            $ = null == B ? void 0 : B.isPurchasedViaAppleGeneric,
            ee = !L && null != F && Y && !j && !z && !q && !$;
        j || L && !x ? s = P.intl.string(P.t.pQK5ho) : K === U ? s = P.intl.formatToPlainString(P.t.UlBRTl, {
            changeDate: null != B ? l()(B.currentPeriodEnd).format(D) : ""
        }) : z ? s = P.intl.string(P.t.ePFYOS) : q ? s = P.intl.string(P.t["0lPoT2"]) : $ && (s = P.intl.string(P.t.cEMaCt));
        let et = (0, f.A)(w.Yl);
        i.useEffect(() => {
            G && null != V && u.h.wait(() => {
                (0, d.ur)(V)
            })
        }, [G, V]);
        let en = i.useCallback(async () => {
                let n, i;
                if (o()(null != e, "No subscription listing"), o()(null != k, "No subscription plan"), o()(G, "Cannot purchase this unpublished plan"), (null == X ? void 0 : X.active_trial) != null) {
                    let r = await Q(t, e.id, X.active_trial.id);
                    if ((null == r ? void 0 : r.is_eligible) === !0) {
                        var s;
                        n = null == X || null == (s = X.active_trial) ? void 0 : s.id
                    } else i = P.intl.string(P.t.vuvsK5)
                }(0, y.A)({
                    activeSubscription: B,
                    analyticsSubscriptionType: R.rzx.GUILD,
                    trialId: n,
                    trialFooterMessageOverride: (null == X ? void 0 : X.active_trial) != null ? P.intl.format(P.t.zyGyNk, {
                        buttonText: P.intl.string(P.t.BEeXib),
                        interval: (0, v.Gg)(k),
                        days: 1,
                        contactLink: R.X7G.CONTACT,
                        cancelSubscriptionArticle: O.A.getArticleURL(R.MVz.ROLE_SUBSCRIPTION_CANCEL),
                        helpdeskArticle: O.A.getArticleURL(R.MVz.ROLE_SUBSCRIPTION_TRIAL),
                        paidServiceTermsArticle: O.A.getArticleURL(R.MVz.PAID_TERMS),
                        tierName: k.name
                    }) : void 0,
                    analyticsLocations: J,
                    analyticsLocation: a,
                    renderHeader: (n, i, a) => (0, r.jsx)(N.Y, {
                        onClose: i,
                        listing: e,
                        step: a,
                        guildId: t
                    }),
                    initialPlanId: k.id,
                    skuId: k.sku_id,
                    planGroup: W,
                    renderPurchaseConfirmation: (n, i) => et ? (0, r.jsx)(C.v, {
                        listing: e,
                        onClose: i,
                        guildId: t
                    }) : (0, r.jsx)(N.X, {
                        listing: e,
                        onClose: i,
                        guildId: t
                    }),
                    reviewWarningMessage: i
                })
            }, [G, e, k, B, W, t, J, a, Q, X, et]),
            er = i.useCallback(() => {
                (0, _.Ze)(t)
            }, [t]);
        return {
            openModal: x ? er : en,
            canOpenModal: ee,
            cannotOpenReason: s,
            isCheckingTrialEligibility: Z
        }
    }