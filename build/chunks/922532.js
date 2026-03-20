/** chunk id: 922532 params = (module,exports,require) **/
n.d(t, {
    m: () => o
});
var a = n(64700),
    i = n(341915),
    l = n(561844),
    s = n(590202),
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
        impressionRef: h
    } = e, p = a.useRef(-1), x = a.useRef(!1), [g, _] = a.useState(!1), [f, v] = a.useState(!1), b = a.useCallback(() => {
        _(!0)
    }, []), j = a.useCallback(() => {
        _(!1), x.current || c || o(!1)
    }, [c, o]), A = a.useCallback(() => {
        _(!1), c || o(!1), x.current = !1
    }, [c, o]), C = a.useCallback(() => {
        v(!0)
    }, []), y = a.useCallback(() => {
        v(!1), o(!1)
    }, [o]), T = a.useCallback(function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (n) return;
        let {
            withDelay: t = !1
        } = e;
        t ? p.current = window.setTimeout(d, 75) : d()
    }, [d, n]), S = a.useCallback(() => {
        T()
    }, [T]), E = a.useCallback(() => {
        window.clearTimeout(p.current), g || f || x.current || o(!1)
    }, [g, f, o]), N = a.useCallback(() => {
        (0, l.av)({
            questId: t.id,
            event: r.HAw.QUEST_HOVER,
            properties: {
                content_id: i.uF.QUEST_BAR,
                content_name: (0, s.jO)(i.uF.QUEST_BAR),
                impression_id: h.current?.getId()
            },
            shouldExtendSession: !0,
            sourceQuestContent: i.uF.QUEST_BAR_V2
        }), x.current = !0, T({
            withDelay: !0
        })
    }, [T, h, t.id]), I = a.useCallback(() => {
        (0, l.av)({
            questId: t.id,
            event: r.HAw.QUEST_HOVER_OFF,
            properties: {
                content_id: i.uF.QUEST_BAR,
                content_name: (0, s.jO)(i.uF.QUEST_BAR),
                impression_id: h.current?.getId()
            },
            sourceQuestContent: i.uF.QUEST_BAR_V2
        }), x.current = !1, E()
    }, [E, h, t.id]);
    return a.useEffect(() => {
        f && I()
    }, [f, I]), a.useLayoutEffect(() => {
        u && !m && x.current && d()
    }, [d, u, m]), a.useLayoutEffect(() => {
        c || !u || m || x.current || o(!1)
    }, [u, c, m, o]), {
        ctxMenuOpen: g,
        gameSheetOpen: f,
        handleCtxMenuOpened: b,
        handleCtxMenuClosed: j,
        handleCtxMenuSelection: A,
        handleGameSheetOpened: C,
        handleGameSheetClosed: y,
        handleFocus: T,
        handleFocusWithoutDelay: S,
        handleBlur: E,
        handleMouseEnter: N,
        handleMouseLeave: I
    }
}