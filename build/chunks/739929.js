/** chunk id: 739929, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(64700),
    i = n(417597),
    l = n(465932),
    s = n(260509),
    a = n(287809),
    o = n(975571),
    c = n(469993),
    d = n(586243),
    u = n(963320),
    g = n(897290),
    m = n(980406),
    p = n(652215),
    f = n(985018);

function h(e) {
    let t, n = (0, c.ME)(e),
        h = null == e ? void 0 : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
        b = null == e ? void 0 : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE),
        x = (0, i.bG)([a.default], () => {
            let t = a.default.getCurrentUser();
            return null != e && (0, s.bM)(e, t)
        }),
        {
            error: j,
            loading: _,
            createEnableRequest: O,
            submittedRequest: v
        } = (0, d.A)(null == e ? void 0 : e.id),
        {
            loading: y,
            error: A,
            refresh: E,
            eligibility: N
        } = (0, u.A)(null == e ? void 0 : e.id),
        {
            isApplicationRejected: S,
            requestCooldownDuration: I
        } = (0, g.A)(N),
        C = (null == e ? void 0 : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === !0,
        {
            isMonetizationReapplicationDisabled: T
        } = (0, l.YG)(null == e ? void 0 : e.id),
        P = v || (null == N ? void 0 : N.isApplicationPending) === !0,
        w = (null == N ? void 0 : N.canApply) === !0,
        R = f.intl.format(f.t.aJUdOi, {
            faqUrl: o.A.getArticleURL(p.MVz.CREATOR_FAQ)
        });
    S && T ? t = !0 === h ? f.intl.format(f.t["0o1Q+t"], {
        communityGuidelineUrl: p.X7G.GUIDELINES
    }) : f.intl.format(f.t.b6h59n, {
        communityGuidelineUrl: p.X7G.GUIDELINES
    }) : S && null != I && (t = f.intl.format(f.t.TvX207, {
        requestCooldownDuration: I,
        creatorRevenuePolicyUrl: o.A.getArticleURL(p.MVz.CREATOR_POLICY)
    }));
    let D = n && x && !1 === b,
        G = n && !1 === h,
        L = (0, m.r)(),
        k = S && w && x ? f.intl.format(f.t.wbVIUB, {}) : void 0;
    return r.useEffect(() => {
        D && E()
    }, [E, D]), {
        resubmittingEnableRequest: _,
        resubmissionError: j,
        isGuildOwner: x,
        createEnableRequest: O,
        resubmittedRequest: v,
        eligibilityLoading: y,
        eligibilityError: A,
        refreshEligibility: E,
        eligibility: N,
        eligibleForMonetization: w,
        isApplicationPending: P,
        hasPreviousApplicationRejection: S,
        requestRejectedNoticeText: t,
        reapplyNoticeText: k,
        showAcceptTermsFlow: G,
        wasRejectedInV1: G && (C || S),
        requirementsFinePrintText: R,
        acceptTermsCheckboxText: L
    }
}