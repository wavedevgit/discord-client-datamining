/** chunk id: 892742 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(341915),
    r = n(570852),
    o = n(890687),
    d = n(710969),
    c = n(814793),
    u = n(338404),
    _ = n(127219),
    m = n(636658),
    h = n(438038),
    p = n(295194),
    g = n(654487),
    A = n(822663);

function x(e) {
    let {
        questId: t
    } = e, {
        quests: n,
        excludedQuests: x,
        isFetchingCurrentQuests: f
    } = (0, o.mL)({
        fetchPolicy: "cache-or-network",
        callerSource: "embed"
    }), C = a.useMemo(() => (0, d.vc)(t, n, x), [t, n, x]), E = a.useMemo(() => x.find(e => e.id === t), [t, x]), {
        enabled: I
    } = r.S.useConfig({
        location: g.rE.EMBED_DESKTOP
    });
    return f ? (0, i.jsx)(l.y$y, {
        className: A.u
    }) : null == C ? null != E ? (0, i.jsx)(u.g, {
        questId: t
    }) : (0, i.jsx)(_.l, {
        questId: t,
        reason: _.o.NOT_FOUND
    }) : (0, c.E0)(C.config) ? I ? (0, i.jsx)(p.M, {
        quest: C,
        location: s.uF.QUESTS_EMBED,
        sourceQuestContent: s.uF.QUESTS_EMBED
    }, C.id) : (0, i.jsx)(h.R, {
        quest: C,
        location: s.uF.QUESTS_EMBED,
        sourceQuestContent: s.uF.QUESTS_EMBED
    }, C.id) : (0, i.jsx)(m.S, {
        questId: t
    })
}