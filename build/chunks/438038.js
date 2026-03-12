/** chunk id: 438038 params = (module,exports,require) **/
n.d(t, {
    R: () => h
});
var i = n(627968),
    r = n(64700),
    l = n(490249);
n(311907), n(859703);
var a = n(341915),
    s = n(890687),
    o = n(73473),
    d = n(288531),
    c = n(285433),
    u = n(394900),
    _ = n(433745),
    m = n(969862);

function h(e) {
    let {
        quest: t,
        location: n,
        initiallyExpanded: h,
        contentPosition: p,
        sourceQuestContent: g
    } = e, A = (0, s.LS)(t), {
        containerRef: x,
        size: f,
        height: C
    } = (0, u.L)(), {
        expansionSpring: E,
        isAnimating: I,
        isExpanded: b,
        toggleExpanded: T
    } = (0, u.s)({
        initiallyExpanded: h || (0, _.RA)({
            location: n,
            quest: t
        })
    }), [v, S] = r.useState(!1), y = () => S(!0), N = () => S(!1), j = C ?? _._B;
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: p,
        trackGuildAndChannelMetadata: n === a.uF.QUESTS_EMBED,
        sourceQuestContent: g,
        children: e => (0, i.jsx)(l.animated.div, {
            style: {
                maxHeight: n === a.uF.QUESTS_EMBED ? void 0 : E.to({
                    range: [0, 1],
                    output: [_.es, j]
                })
            },
            className: m.i,
            onMouseEnter: y,
            onMouseLeave: N,
            onFocus: y,
            onBlur: N,
            children: (0, i.jsxs)("div", {
                ref: t => {
                    e.current = t, x.current = t
                },
                children: [(0, i.jsx)(c.A, {
                    isQuestExpired: A,
                    location: n,
                    quest: t,
                    size: f,
                    expansionSpring: E,
                    isInteracting: v,
                    isAnimating: I,
                    isExpanded: b,
                    contentPosition: p,
                    toggleExpanded: T,
                    sourceQuestContent: g
                }), (0, i.jsx)(d.A, {
                    quest: t,
                    isQuestExpired: A,
                    location: n,
                    size: f,
                    isFocused: v,
                    isExpanded: b,
                    isAnimating: I,
                    contentPosition: p,
                    sourceQuestContent: g
                })]
            })
        })
    })
}