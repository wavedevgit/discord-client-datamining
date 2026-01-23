/** Chunk was on 67299 **/
/** chunk id: 645627, original params: e,t,n (module,exports,require) **/
n.d(t, {
    HJ: () => c,
    Ln: () => l
}), n(896048);
var r = n(64700),
    a = n(975807),
    i = n(829219),
    s = n(216456),
    o = n(341915);

function l(e) {
    let {
        isClaimingReward: t,
        isFetchingRewardCode: n,
        questContent: a,
        quest: s,
        rewardCode: l,
        preview: c
    } = e, [d, u] = r.useState(!1), [m, f] = r.useState(!1), p = r.useCallback(async (e, t, n) => {
        try {
            f(!0), await (0, i.Oq)(e, t, n), u(!1), f(!1)
        } catch (e) {
            u(!0), f(!1)
        }
    }, []), C = r.useCallback(e => {
        try {
            (0, i.jh)(e)
        } catch (e) {
            u(!0)
        }
    }, []);
    return r.useEffect(() => {
        var e, r;
        !0 === c || null != l || d || t || m || n || (u(!1), (null == (e = s.userStatus) ? void 0 : e.claimedAt) == null ? p(s.id, o.pY.CROSS_PLATFORM, a) : (null == (r = s.userStatus) ? void 0 : r.claimedAt) != null && C(s.id))
    }, [p, C, d, t, m, n, a, s, l, c]), {
        claimCode: p,
        fetchCode: C,
        hasError: d,
        setHasError: u
    }
}

function c(e) {
    let {
        quest: t,
        redemptionLink: n,
        questContent: i,
        questContentPosition: o,
        sourceQuestContent: l
    } = e, c = (0, s.Ut)();
    return r.useCallback(() => {
        null != n && (c({
            questId: t.id,
            questContent: i,
            questContentCTA: s.Cy.REDEEM_REWARD,
            questContentPosition: o,
            sourceQuestContent: l
        }), c({
            questId: t.id,
            questContent: i,
            questContentCTA: s.Cy.VISIT_REDEMPTION_LINK,
            questContentPosition: o,
            sourceQuestContent: l
        }), (0, a.A)(n))
    }, [t.id, i, o, l, c, n])
}