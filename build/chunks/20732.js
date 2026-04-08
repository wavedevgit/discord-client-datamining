/** chunk id: 20732 params = (module,exports,require) **/
n.d(t, {
    S: () => u
});
var a = n(64700),
    i = n(731738),
    s = n(831062),
    l = n(260364),
    r = n(341915),
    o = n(561844),
    d = n(590202),
    c = n(652215);

function u(e) {
    let {
        quest: t,
        hasAssetsError: n,
        isEligibleForQuests: u,
        isQuestBarVisible: m,
        isVisibilityAnimationAtRest: h,
        isLoadingAssets: x,
        currentQuestVisibleReason: p,
        shouldShowQuestBar: g,
        isQuestEnrollmentBlocked: f,
        impressionRef: v
    } = e;
    a.useEffect(() => {
        n && ((0, o.av)({
            questId: t.id,
            event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
            properties: {
                content_id: r.uF.QUEST_BAR,
                content_name: (0, d.jO)(r.uF.QUEST_BAR),
                reason: "asset_loading_error",
                impression_id: v.current?.getId()
            },
            sourceQuestContent: r.uF.QUEST_BAR_V2
        }), s.A.increment({
            name: i.K.QUEST_CONTENT_RENDERING_FAILURE,
            tags: [`quest_id:${t.id}`, `quest_content:${(0,d.jO)(r.uF.QUEST_BAR)}`, "reason:asset_loading_error"]
        }))
    }, [n, v, t.id]), a.useEffect(() => {
        u || (0, o.av)({
            questId: t.id,
            event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
            properties: {
                content_id: r.uF.QUEST_BAR,
                content_name: (0, d.jO)(r.uF.QUEST_BAR),
                reason: "not_eligible_for_quest",
                impression_id: v.current?.getId()
            },
            sourceQuestContent: r.uF.QUEST_BAR_V2
        })
    }, [u, v, t.id]), a.useEffect(() => {
        m || !h || x || (0, o.av)({
            questId: t.id,
            event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
            properties: {
                content_id: r.uF.QUEST_BAR,
                content_name: (0, d.jO)(r.uF.QUEST_BAR),
                reason: p,
                impression_id: v.current?.getId()
            },
            sourceQuestContent: r.uF.QUEST_BAR_V2
        })
    }, [m, h, x, t.id, p, v]), a.useEffect(() => {
        (!g || f) && l.A.clearTracking(), m && h && !x && !n && u && l.A.stopTracking(t.id)
    }, [g, f, m, h, x, n, u, t.id])
}