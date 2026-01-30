/** chunk id: 963713, original params: e,t,n (module,exports,require) **/
n.d(t, {
    C: () => i,
    T: () => r
});
var a = n(627968),
    l = n(64700);
let r = l.createContext({
        onCtxMenuClose: () => {},
        onCtxMenuOpen: () => {},
        onCtxMenuSelect: () => {},
        onGameSheetOpen: () => {},
        onGameSheetClose: () => {},
        collapsedHeight: 0,
        isExpanded: !1,
        isExpansionAnimationComplete: !1,
        quest: null,
        taskDetails: null
    }),
    i = e => {
        let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: i,
            onCtxMenuClose: s,
            onCtxMenuOpen: o,
            onCtxMenuSelect: c,
            onGameSheetOpen: d,
            onGameSheetClose: u,
            collapsedHeight: m,
            quest: p,
            taskDetails: h
        } = e, x = l.useMemo(() => ({
            isExpanded: n,
            isExpansionAnimationComplete: i,
            onCtxMenuClose: s,
            onCtxMenuOpen: o,
            onCtxMenuSelect: c,
            onGameSheetOpen: d,
            onGameSheetClose: u,
            collapsedHeight: m,
            quest: p,
            taskDetails: h
        }), [n, i, s, o, c, d, u, m, p, h]);
        return (0, a.jsx)(r.Provider, {
            value: x,
            children: t
        })
    }