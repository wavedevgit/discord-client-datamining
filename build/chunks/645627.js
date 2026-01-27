/** Chunk was on 67299 **/
/** chunk id: 645627, original params: e,t,n (module,exports,require) **/
n.d(t, {
    HJ: () => u,
    Ln: () => c
}), n(896048);
var r = n(64700),
    s = n(975807),
    i = n(829219),
    a = n(341915),
    o = n(18437),
    l = n(590202);

function c(e) {
    let {
        isClaimingReward: t,
        isFetchingRewardCode: n,
        questContent: s,
        quest: o,
        rewardCode: l,
        preview: c
    } = e, [u, d] = r.useState(!1), [m, p] = r.useState(!1), f = r.useCallback(async (e, t, n) => {
        try {
            p(!0), await (0, i.Oq)(e, t, n), d(!1), p(!1)
        } catch (e) {
            d(!0), p(!1)
        }
    }, []), C = r.useCallback(e => {
        try {
            (0, i.jh)(e)
        } catch (e) {
            d(!0)
        }
    }, []);
    return r.useEffect(() => {
        var e, r;
        !0 === c || null != l || u || t || m || n || (d(!1), (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null ? f(o.id, a.pY.CROSS_PLATFORM, s) : (null == (r = o.userStatus) ? void 0 : r.claimedAt) != null && C(o.id))
    }, [f, C, u, t, m, n, s, o, l, c]), {
        claimCode: f,
        fetchCode: C,
        hasError: u,
        setHasError: d
    }
}

function u(e) {
    let {
        quest: t,
        redemptionLink: n,
        questContent: i,
        questContentPosition: a,
        sourceQuestContent: c
    } = e, u = (0, o.Ut)();
    return r.useCallback(() => {
        null != n && (u({
            questId: t.id,
            questContent: i,
            questContentCTA: l.Cy.REDEEM_REWARD,
            questContentPosition: a,
            sourceQuestContent: c
        }), u({
            questId: t.id,
            questContent: i,
            questContentCTA: l.Cy.VISIT_REDEMPTION_LINK,
            questContentPosition: a,
            sourceQuestContent: c
        }), (0, s.A)(n))
    }, [t.id, i, a, c, u, n])
}