/** chunk id: 645627 params = (module,exports,require) **/
n.d(t, {
    HJ: () => d,
    Ln: () => c
});
var s = n(64700),
    a = n(975807),
    i = n(829219),
    r = n(341915),
    o = n(18437),
    l = n(590202);

function c(e) {
    let {
        isClaimingReward: t,
        isFetchingRewardCode: n,
        questContent: a,
        quest: o,
        rewardCode: l,
        preview: c
    } = e, [d, u] = s.useState(!1), [m, C] = s.useState(!1), h = s.useCallback(async (e, t, n) => {
        try {
            C(!0), await (0, i.Oq)(e, t, n), u(!1), C(!1)
        } catch (e) {
            u(!0), C(!1)
        }
    }, []), x = s.useCallback(e => {
        try {
            (0, i.jh)(e)
        } catch (e) {
            u(!0)
        }
    }, []);
    return s.useEffect(() => {
        !0 === c || null != l || d || t || m || n || (u(!1), o.userStatus?.claimedAt == null ? h(o.id, r.pY.CROSS_PLATFORM, a) : o.userStatus?.claimedAt != null && x(o.id))
    }, [h, x, d, t, m, n, a, o, l, c]), {
        claimCode: h,
        fetchCode: x,
        hasError: d,
        setHasError: u
    }
}

function d(e) {
    let {
        quest: t,
        redemptionLink: n,
        questContent: i,
        questContentPosition: r,
        sourceQuestContent: c
    } = e, d = (0, o.Ut)();
    return s.useCallback(() => {
        null != n && (d({
            questId: t.id,
            questContent: i,
            questContentCTA: l.Cy.REDEEM_REWARD,
            questContentPosition: r,
            sourceQuestContent: c
        }), d({
            questId: t.id,
            questContent: i,
            questContentCTA: l.Cy.VISIT_REDEMPTION_LINK,
            questContentPosition: r,
            sourceQuestContent: c
        }), (0, a.A)(n))
    }, [t.id, i, r, c, d, n])
}