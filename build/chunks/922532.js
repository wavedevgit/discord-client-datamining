/** Chunk was on 36054 **/
/** chunk id: 922532, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => s
}), n(896048);
var a = n(64700),
    l = n(216456),
    r = n(341915),
    i = n(652215);

function s(e) {
    let {
        quest: t,
        isExpanded: n,
        setIsExpanded: s,
        expandQuestBar: o,
        isQuestCompleted: c,
        isQuestAccepted: d,
        prevIsQuestAccepted: u,
        impressionRef: m
    } = e, p = a.useRef(-1), h = a.useRef(!1), [x, g] = a.useState(!1), [f, b] = a.useState(!1), v = a.useCallback(() => {
        g(!0)
    }, []), j = a.useCallback(() => {
        g(!1), h.current || c || s(!1)
    }, [c, s]), _ = a.useCallback(() => {
        g(!1), c || s(!1), h.current = !1
    }, [c, s]), y = a.useCallback(() => {
        b(!0)
    }, []), A = a.useCallback(() => {
        b(!1), s(!1)
    }, [s]), C = a.useCallback(function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (n) return;
        let {
            withDelay: t = !1
        } = e;
        t ? p.current = window.setTimeout(o, 75) : o()
    }, [o, n]), S = a.useCallback(() => {
        C()
    }, [C]), O = a.useCallback(() => {
        window.clearTimeout(p.current), x || f || h.current || s(!1)
    }, [x, f, s]), T = a.useCallback(() => {
        var e;
        (0, l.av)({
            questId: t.id,
            event: i.HAw.QUEST_HOVER,
            properties: {
                content_id: r.uF.QUEST_BAR,
                content_name: (0, l.jO)(r.uF.QUEST_BAR),
                impression_id: null == (e = m.current) ? void 0 : e.getId()
            },
            shouldExtendSession: !0,
            sourceQuestContent: r.uF.QUEST_BAR_V2
        }), h.current = !0, C({
            withDelay: !0
        })
    }, [C, m, t.id]), E = a.useCallback(() => {
        var e;
        (0, l.av)({
            questId: t.id,
            event: i.HAw.QUEST_HOVER_OFF,
            properties: {
                content_id: r.uF.QUEST_BAR,
                content_name: (0, l.jO)(r.uF.QUEST_BAR),
                impression_id: null == (e = m.current) ? void 0 : e.getId()
            },
            sourceQuestContent: r.uF.QUEST_BAR_V2
        }), h.current = !1, O()
    }, [O, m, t.id]);
    return a.useEffect(() => {
        f && E()
    }, [f, E]), a.useLayoutEffect(() => {
        d && !u && h.current && o()
    }, [o, d, u]), a.useLayoutEffect(() => {
        c || !d || u || h.current || s(!1)
    }, [d, c, u, s]), {
        ctxMenuOpen: x,
        gameSheetOpen: f,
        handleCtxMenuOpened: v,
        handleCtxMenuClosed: j,
        handleCtxMenuSelection: _,
        handleGameSheetOpened: y,
        handleGameSheetClosed: A,
        handleFocus: C,
        handleFocusWithoutDelay: S,
        handleBlur: O,
        handleMouseEnter: T,
        handleMouseLeave: E
    }
}