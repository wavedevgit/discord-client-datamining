/** chunk id: 253798 params = (module,exports,require) **/
i.d(t, {
    B: () => c,
    M: () => d
});
var n = i(627968),
    s = i(64700),
    l = i(311907),
    a = i(61881),
    r = i(735321);
let o = s.createContext(null);

function d(e) {
    let {
        widgetType: t,
        children: i
    } = e, d = (0, l.bG)([a.A], () => {
        let e = a.A.getPendingWidgets();
        if (null == e) return !1;
        let i = e.find(e => e.type === t);
        if (null == i) return !1;
        let n = (0, r.cv)(t);
        return i.games.length > n
    }), [c, u] = s.useState(d);
    return (0, n.jsx)(o.Provider, {
        value: {
            expanded: c,
            setExpanded: u
        },
        children: i
    })
}

function c() {
    let e = s.useContext(o);
    if (null == e) throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e
}