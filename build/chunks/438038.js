/** Chunk was on web.js **/
/** chunk id: 438038, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(108531);
n(311907), n(859703);
var s = n(341915),
    o = n(890687),
    l = n(73473),
    c = n(288531),
    u = n(285433),
    d = n(394900),
    f = n(433745),
    p = n(868684);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function m(e) {
    let {
        quest: t,
        location: n,
        initiallyExpanded: _,
        contentPosition: h,
        sourceQuestContent: m
    } = e, g = (0, o.LS)(t), {
        containerRef: E,
        size: y,
        height: b
    } = (0, d.L)(), {
        expansionSpring: O,
        isAnimating: v,
        isExpanded: A,
        toggleExpanded: I
    } = (0, d.s)({
        initiallyExpanded: _ || (0, f.RA)({
            location: n,
            quest: t
        })
    }), [S, T] = i.useState(!1), C = () => T(!0), N = () => T(!1), w = null != b ? b : f._B;
    return (0, r.jsx)(l.R, {
        questOrQuests: t,
        questContent: n,
        questContentPosition: h,
        trackGuildAndChannelMetadata: n === s.uF.QUESTS_EMBED,
        sourceQuestContent: m,
        children: e => (0, r.jsx)(a.animated.div, {
            style: {
                maxHeight: n === s.uF.QUESTS_EMBED ? void 0 : O.to({
                    range: [0, 1],
                    output: [f.es, w]
                })
            },
            className: p.i,
            onMouseEnter: C,
            onMouseLeave: N,
            onFocus: C,
            onBlur: N,
            children: (0, r.jsxs)("div", {
                ref: t => {
                    e.current = t, E.current = t
                },
                children: [(0, r.jsx)(u.A, {
                    isQuestExpired: g,
                    location: n,
                    quest: t,
                    size: y,
                    expansionSpring: O,
                    isInteracting: S,
                    isAnimating: v,
                    isExpanded: A,
                    contentPosition: h,
                    toggleExpanded: I,
                    sourceQuestContent: m
                }), (0, r.jsx)(c.A, {
                    quest: t,
                    isQuestExpired: g,
                    location: n,
                    size: y,
                    isFocused: S,
                    isExpanded: A,
                    isAnimating: v,
                    contentPosition: h,
                    sourceQuestContent: m
                })]
            })
        })
    })
}