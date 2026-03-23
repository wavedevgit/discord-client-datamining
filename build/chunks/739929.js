/** chunk id: 739929 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(64700),
    s = n(417597),
    l = n(465932),
    r = n(260509),
    a = n(287809),
    o = n(975571),
    d = n(469993),
    c = n(586243),
    u = n(963320),
    m = n(897290),
    g = n(980406),
    x = n(652215),
    h = n(985018);

function _(e) {
    let t, n = (0, d.ME)(e),
        _ = e?.features.has(x.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
        p = e?.features.has(x.GuildFeatures.CREATOR_MONETIZABLE),
        A = (0, s.bG)([a.default], () => {
            let t = a.default.getCurrentUser();
            return null != e && (0, r.bM)(e, t)
        }),
        {
            error: f,
            loading: j,
            createEnableRequest: N,
            submittedRequest: E
        } = (0, c.A)(e?.id),
        {
            loading: b,
            error: T,
            refresh: I,
            eligibility: C
        } = (0, u.A)(e?.id),
        {
            isApplicationRejected: v,
            requestCooldownDuration: S
        } = (0, m.A)(C),
        y = e?.features.has(x.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) === !0 || e?.features.has(x.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) === !0,
        {
            isMonetizationReapplicationDisabled: R
        } = (0, l.YG)(e?.id),
        O = E || C?.isApplicationPending === !0,
        G = C?.canApply === !0,
        L = h.intl.format(h.t.aJUdOi, {
            faqUrl: o.A.getArticleURL(x.MVz.CREATOR_FAQ)
        });
    v && R ? t = !0 === _ ? h.intl.format(h.t["0o1Q+t"], {
        communityGuidelineUrl: x.X7G.GUIDELINES
    }) : h.intl.format(h.t.b6h59n, {
        communityGuidelineUrl: x.X7G.GUIDELINES
    }) : v && null != S && (t = h.intl.format(h.t.TvX207, {
        requestCooldownDuration: S,
        creatorRevenuePolicyUrl: o.A.getArticleURL(x.MVz.CREATOR_POLICY)
    }));
    let D = n && A && !1 === p,
        M = n && !1 === _,
        k = (0, g.r)(),
        U = v && G && A ? h.intl.format(h.t.wbVIUB, {}) : void 0;
    return i.useEffect(() => {
        D && I()
    }, [I, D]), {
        resubmittingEnableRequest: j,
        resubmissionError: f,
        isGuildOwner: A,
        createEnableRequest: N,
        resubmittedRequest: E,
        eligibilityLoading: b,
        eligibilityError: T,
        refreshEligibility: I,
        eligibility: C,
        eligibleForMonetization: G,
        isApplicationPending: O,
        hasPreviousApplicationRejection: v,
        requestRejectedNoticeText: t,
        reapplyNoticeText: U,
        showAcceptTermsFlow: M,
        wasRejectedInV1: M && (y || v),
        requirementsFinePrintText: L,
        acceptTermsCheckboxText: k
    }
}