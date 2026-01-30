/** chunk id: 892742, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(341915),
    s = n(890687),
    o = n(710969),
    c = n(814793),
    u = n(338404),
    d = n(127219),
    p = n(636658),
    m = n(438038),
    f = n(986588);

function g(e) {
    let {
        questId: t
    } = e, {
        quests: n,
        excludedQuests: g,
        isFetchingCurrentQuests: _
    } = (0, s.mL)({
        fetchPolicy: "cache-or-network",
        callerSource: "embed"
    }), h = i.useMemo(() => (0, o.vc)(t, n, g), [t, n, g]), b = i.useMemo(() => g.find(e => e.id === t), [t, g]);
    return _ ? (0, r.jsx)(l.y$y, {
        className: f.u
    }) : null == h ? null != b ? (0, r.jsx)(u.g, {
        questId: t
    }) : (0, r.jsx)(d.l, {
        questId: t,
        reason: d.o.NOT_FOUND
    }) : (0, c.E0)(h.config) ? (0, r.jsx)(m.R, {
        quest: h,
        location: a.uF.QUESTS_EMBED,
        sourceQuestContent: a.uF.QUESTS_EMBED
    }, h.id) : (0, r.jsx)(p.S, {
        questId: t
    })
}