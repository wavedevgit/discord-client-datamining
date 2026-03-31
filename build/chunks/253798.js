/** chunk id: 253798 params = (module,exports,require) **/
n.d(t, {
    B: () => c,
    M: () => d
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(61881),
    r = n(735321);
let o = l.createContext(null);

function d(e) {
    let {
        widgetType: t,
        children: n
    } = e, d = (0, a.bG)([s.A], () => {
        let e = s.A.getPendingWidgets();
        if (null == e) return !1;
        let n = e.find(e => e.type === t);
        if (null == n) return !1;
        let i = (0, r.cv)(t);
        return n.games.length > i
    }), [c, u] = l.useState(d);
    return (0, i.jsx)(o.Provider, {
        value: {
            expanded: c,
            setExpanded: u
        },
        children: n
    })
}

function c() {
    let e = l.useContext(o);
    if (null == e) throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e
}