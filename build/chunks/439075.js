/** chunk id: 439075 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(341915),
    o = n(890687),
    d = n(18437),
    c = n(590202),
    u = n(792620),
    m = n(73473),
    h = n(545986),
    x = n(203879),
    p = n(321503),
    g = n(56853),
    f = n(515038),
    _ = n(652215),
    v = n(917332);

function b(e) {
    let {
        quest: t,
        className: n,
        questContent: s,
        contentPosition: r,
        rowIndex: m,
        impressionRef: b,
        sourceQuestContent: j
    } = e, [A, C] = i.useState(!1), [y, S] = i.useState([]), E = (0, o.aC)(t), T = i.useMemo(() => (0, u.vv)(t), [t]), N = (0, d.u0)(), I = i.useCallback(() => {
        C(!0), N({
            questId: t.id,
            event: _.HAw.QUEST_HOVER,
            properties: {
                content_id: s,
                content_name: (0, c.jO)(s),
                content_position: r
            },
            sourceQuestContent: j
        }), T && (0, h.l9)()
    }, [N, t.id, s, T, j, r]), k = i.useCallback(() => {
        C(!1), N({
            questId: t.id,
            event: _.HAw.QUEST_HOVER_OFF,
            properties: {
                content_id: s,
                content_name: (0, c.jO)(s),
                content_position: r
            },
            sourceQuestContent: j
        })
    }, [N, t.id, s, j, r]), O = i.useContext(p.X), {
        visibilityElementRef: R,
        almostVisibleInViewport: w
    } = function(e) {
        let [t, n] = i.useState(!1), a = i.useCallback(e => {
            e.isIntersecting && n(!0)
        }, []);
        return {
            visibilityElementRef: (0, x.B)(a, {
                root: e ?? null,
                threshold: 0,
                rootMargin: "900px 0px 900px 0px"
            }, !0),
            almostVisibleInViewport: t
        }
    }(O?.current?.getScrollerNode() ?? null);
    return (0, a.jsxs)("div", {
        id: `quest-tile-${t.id}`,
        ref: e => {
            b.current = e, R.current = e
        },
        className: l()(v.k, n),
        onMouseEnter: I,
        onMouseLeave: k,
        onFocus: I,
        onBlur: k,
        children: [(0, a.jsx)(g.A, {
            quest: t,
            isHovering: A,
            errorHints: y,
            warningHints: E,
            isVisibleInViewport: w,
            sourceQuestContent: j
        }), (0, a.jsx)(f.A, {
            quest: t,
            questContent: s,
            isHovering: A,
            contentPosition: r,
            rowIndex: m,
            onReceiveErrorHints: S,
            isVisibleInViewport: w,
            sourceQuestContent: j
        })]
    })
}
let j = i.memo(function(e) {
    return (0, a.jsx)(m.R, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === r.uF.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: t => (0, a.jsx)(b, {
            ...e,
            impressionRef: t
        })
    })
})