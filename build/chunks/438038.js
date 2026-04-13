/** chunk id: 438038 params = (module,exports,require) **/
n.d(t, {
    R: () => _
});
var i = n(627968),
    l = n(64700),
    s = n(294426);
n(311907), n(859703);
var r = n(341915),
    a = n(890687),
    o = n(73473),
    d = n(288531),
    c = n(285433),
    u = n(394900);
n(433745);
var m = n(915689);

function _(e) {
    let {
        quest: t,
        location: n,
        contentPosition: _,
        sourceQuestContent: h
    } = e, p = (0, a.LS)(t), {
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
    }), [v, b] = l.useState(!1), T = () => b(!0), y = () => b(!1), N = x ?? 1e3;
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: _,
        trackGuildAndChannelMetadata: n === r.uF.QUESTS_EMBED,
        sourceQuestContent: h,
        children: e => (0, i.jsx)(s.animated.div, {
            style: {
                maxHeight: n === r.uF.QUESTS_EMBED ? void 0 : f.to({
                    range: [0, 1],
                    output: [100, N]
                })
            },
            className: m.i,
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
                    contentPosition: _,
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
                    contentPosition: _,
                    sourceQuestContent: h
                })]
            })
        })
    })
}