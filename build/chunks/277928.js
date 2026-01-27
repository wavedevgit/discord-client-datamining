/** Chunk was on 65298 **/
/** chunk id: 277928, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    l = n(64700),
    r = n(397927),
    i = n(341915),
    s = n(714510),
    o = n(646764),
    c = n(568329),
    d = n(453384),
    u = n(963713),
    m = n(128478);
let p = e => {
    let {
        isExpanded: t,
        contentLocation: n,
        progressBarRef: p,
        percentComplete: h,
        activeScreen: x,
        popoutTargetElementRef: g
    } = e, {
        quest: f,
        onGameSheetOpen: b,
        onGameSheetClose: v
    } = l.useContext(u.T), j = (0, s.VX)(f), _ = (0, s.tH)({
        quest: f,
        isExpanded: t,
        activeScreen: x,
        sourceQuestContent: i.uF.QUEST_BAR_V2,
        popoutTargetElementRef: g,
        onGameSheetOpened: b,
        onGameSheetClosed: v
    });
    return (0, a.jsxs)("div", {
        className: m.Z0,
        children: [(0, a.jsx)(c.dN, {
            inState: n,
            id: "progress-bar",
            ref: p,
            children: e => (0, a.jsx)(d.A, {
                ref: e,
                quest: f,
                percentComplete: h,
                size: 42,
                strokeWidth: 3,
                children: (0, a.jsx)(o.A, {
                    className: m.vt,
                    quest: f,
                    questContent: i.uF.QUEST_BAR_V2,
                    autoplay: !1,
                    sourceQuestContent: i.uF.QUEST_BAR_V2
                })
            })
        }), (0, a.jsxs)("div", {
            className: m.NZ,
            children: [(0, a.jsx)(c.dN, {
                inState: n,
                id: "progress-title",
                children: e => (0, a.jsx)(r.Text, {
                    ref: e,
                    className: m.FZ,
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: j
                })
            }), (0, a.jsx)(c.dN, {
                inState: n,
                id: "progress-subtitle",
                isTextTransition: !0,
                children: e => (0, a.jsx)(r.Text, {
                    ref: e,
                    className: m.FZ,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: _
                })
            })]
        })]
    })
}