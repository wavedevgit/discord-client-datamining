/** chunk id: 438038 params = (module,exports,require) **/
n.d(t, {
    R: () => m
});
var i = n(627968),
    a = n(64700),
    l = n(825638);
n(311907), n(859703);
var r = n(341915),
    s = n(890687),
    o = n(73473),
    d = n(288531),
    c = n(285433),
    u = n(394900);
n(433745);
var _ = n(699257);

function m(e) {
    let {
        quest: t,
        location: n,
        contentPosition: m,
        sourceQuestContent: h
    } = e, p = (0, s.LS)(t), {
        containerRef: g,
        size: A,
        height: x
    } = (0, u.L)(), {
        expansionSpring: f,
        isAnimating: C,
        isExpanded: E,
        toggleExpanded: I
    } = (0, u.s)({
        initiallyExpanded: !0
    }), [v, b] = a.useState(!1), T = () => b(!0), y = () => b(!1), S = x ?? 1e3;
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: m,
        trackGuildAndChannelMetadata: n === r.uF.QUESTS_EMBED,
        sourceQuestContent: h,
        children: e => (0, i.jsx)(l.animated.div, {
            style: {
                maxHeight: n === r.uF.QUESTS_EMBED ? void 0 : f.to({
                    range: [0, 1],
                    output: [100, S]
                })
            },
            className: _.i,
            onMouseEnter: T,
            onMouseLeave: y,
            onFocus: T,
            onBlur: y,
            children: (0, i.jsxs)("div", {
                ref: t => {
                    e.current = t, g.current = t
                },
                children: [(0, i.jsx)(c.A, {
                    isQuestExpired: p,
                    location: n,
                    quest: t,
                    size: A,
                    expansionSpring: f,
                    isInteracting: v,
                    isAnimating: C,
                    isExpanded: E,
                    contentPosition: m,
                    toggleExpanded: I,
                    sourceQuestContent: h
                }), (0, i.jsx)(d.A, {
                    quest: t,
                    isQuestExpired: p,
                    location: n,
                    size: A,
                    isFocused: v,
                    isExpanded: E,
                    isAnimating: C,
                    contentPosition: m,
                    sourceQuestContent: h
                })]
            })
        })
    })
}