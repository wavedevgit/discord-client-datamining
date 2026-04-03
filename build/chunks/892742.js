/** chunk id: 892742 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    r = n(397927),
    s = n(341915),
    a = n(570852),
    o = n(890687),
    d = n(710969),
    c = n(814793),
    u = n(338404),
    m = n(127219),
    _ = n(636658),
    h = n(438038),
    p = n(295194),
    g = n(654487),
    A = n(459671);

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
    }), C = l.useMemo(() => (0, d.vc)(t, n, x), [t, n, x]), E = l.useMemo(() => x.find(e => e.id === t), [t, x]), {
        enabled: I
    } = a.S.useConfig({
        location: g.rE.EMBED_DESKTOP
    });
    return f ? (0, i.jsx)(r.y$y, {
        className: A.u
    }) : null == C ? null != E ? (0, i.jsx)(u.g, {
        questId: t
    }) : (0, i.jsx)(m.l, {
        questId: t,
        reason: m.o.NOT_FOUND
    }) : (0, c.E0)(C.config) ? I ? (0, i.jsx)(p.M, {
        quest: C,
        location: s.uF.QUESTS_EMBED,
        sourceQuestContent: s.uF.QUESTS_EMBED
    }, C.id) : (0, i.jsx)(h.R, {
        quest: C,
        location: s.uF.QUESTS_EMBED,
        sourceQuestContent: s.uF.QUESTS_EMBED
    }, C.id) : (0, i.jsx)(_.S, {
        questId: t
    })
}