/** chunk id: 963713 params = (module,exports,require) **/
n.d(t, {
    C: () => s,
    T: () => l
});
var a = n(627968),
    i = n(64700);
let l = i.createContext({
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
    s = e => {
        let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: s,
            onCtxMenuClose: r,
            onCtxMenuOpen: o,
            onCtxMenuSelect: d,
            onGameSheetOpen: c,
            onGameSheetClose: u,
            collapsedHeight: m,
            quest: h,
            taskDetails: p
        } = e, x = i.useMemo(() => ({
            isExpanded: n,
            isExpansionAnimationComplete: s,
            onCtxMenuClose: r,
            onCtxMenuOpen: o,
            onCtxMenuSelect: d,
            onGameSheetOpen: c,
            onGameSheetClose: u,
            collapsedHeight: m,
            quest: h,
            taskDetails: p
        }), [n, s, r, o, d, c, u, m, h, p]);
        return (0, a.jsx)(l.Provider, {
            value: x,
            children: t
        })
    }