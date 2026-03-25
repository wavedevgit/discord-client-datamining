/** chunk id: 645627 params = (module,exports,require) **/
n.d(t, {
    HJ: () => c,
    Ln: () => d
});
var a = n(64700),
    r = n(975807),
    s = n(829219),
    o = n(341915),
    i = n(18437),
    l = n(590202);

function d(e) {
    let {
        isClaimingReward: t,
        isFetchingRewardCode: n,
        questContent: r,
        quest: i,
        rewardCode: l,
        preview: d
    } = e, [c, u] = a.useState(!1), [C, p] = a.useState(!1), _ = a.useCallback(async (e, t, n) => {
        try {
            p(!0), await (0, s.Oq)(e, t, n), u(!1), p(!1)
        } catch (e) {
            u(!0), p(!1)
        }
    }, []), h = a.useCallback(e => {
        try {
            (0, s.jh)(e)
        } catch (e) {
            u(!0)
        }
    }, []);
    return a.useEffect(() => {
        !0 === d || null != l || c || t || C || n || (u(!1), i.userStatus?.claimedAt == null ? _(i.id, o.pY.CROSS_PLATFORM, r) : i.userStatus?.claimedAt != null && h(i.id))
    }, [_, h, c, t, C, n, r, i, l, d]), {
        claimCode: _,
        fetchCode: h,
        hasError: c,
        setHasError: u
    }
}

function c(e) {
    let {
        quest: t,
        redemptionLink: n,
        questContent: s,
        questContentPosition: o,
        sourceQuestContent: d
    } = e, c = (0, i.Ut)();
    return a.useCallback(() => {
        null != n && (c({
            questId: t.id,
            questContent: s,
            questContentCTA: l.Cy.REDEEM_REWARD,
            questContentPosition: o,
            sourceQuestContent: d
        }), c({
            questId: t.id,
            questContent: s,
            questContentCTA: l.Cy.VISIT_REDEMPTION_LINK,
            questContentPosition: o,
            sourceQuestContent: d
        }), (0, r.A)(n))
    }, [t.id, s, o, d, c, n])
}