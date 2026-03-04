/** chunk id: 922532, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => o
});
var a = n(64700),
    i = n(341915),
    s = n(561844),
    l = n(590202),
    r = n(652215);

function o(e) {
    let {
        quest: t,
        isExpanded: n,
        setIsExpanded: o,
        expandQuestBar: d,
        isQuestCompleted: c,
        isQuestAccepted: u,
        prevIsQuestAccepted: m,
        impressionRef: h,
        onQuestBarFocus: p
    } = e, x = a.useRef(-1), g = a.useRef(!1), [_, f] = a.useState(!1), [b, v] = a.useState(!1), j = a.useCallback(() => {
        f(!0)
    }, []), A = a.useCallback(() => {
        f(!1), g.current || c || o(!1)
    }, [c, o]), C = a.useCallback(() => {
        f(!1), c || o(!1), g.current = !1
    }, [c, o]), T = a.useCallback(() => {
        v(!0)
    }, []), y = a.useCallback(() => {
        v(!1), o(!1)
    }, [o]), S = a.useCallback(function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (p(), n) return;
        let {
            withDelay: t = !1
        } = e;
        t ? x.current = window.setTimeout(d, 75) : d()
    }, [d, n, p]), E = a.useCallback(() => {
        S()
    }, [S]), N = a.useCallback(() => {
        window.clearTimeout(x.current), _ || b || g.current || o(!1)
    }, [_, b, o]), I = a.useCallback(() => {
        (0, s.av)({
            questId: t.id,
            event: r.HAw.QUEST_HOVER,
            properties: {
                content_id: i.uF.QUEST_BAR,
                content_name: (0, l.jO)(i.uF.QUEST_BAR),
                impression_id: h.current?.getId()
            },
            shouldExtendSession: !0,
            sourceQuestContent: i.uF.QUEST_BAR_V2
        }), g.current = !0, S({
            withDelay: !0
        })
    }, [S, h, t.id]), k = a.useCallback(() => {
        (0, s.av)({
            questId: t.id,
            event: r.HAw.QUEST_HOVER_OFF,
            properties: {
                content_id: i.uF.QUEST_BAR,
                content_name: (0, l.jO)(i.uF.QUEST_BAR),
                impression_id: h.current?.getId()
            },
            sourceQuestContent: i.uF.QUEST_BAR_V2
        }), g.current = !1, N()
    }, [N, h, t.id]);
    return a.useEffect(() => {
        b && k()
    }, [b, k]), a.useLayoutEffect(() => {
        u && !m && g.current && d()
    }, [d, u, m]), a.useLayoutEffect(() => {
        c || !u || m || g.current || o(!1)
    }, [u, c, m, o]), {
        ctxMenuOpen: _,
        gameSheetOpen: b,
        handleCtxMenuOpened: j,
        handleCtxMenuClosed: A,
        handleCtxMenuSelection: C,
        handleGameSheetOpened: T,
        handleGameSheetClosed: y,
        handleFocus: S,
        handleFocusWithoutDelay: E,
        handleBlur: N,
        handleMouseEnter: I,
        handleMouseLeave: k
    }
}