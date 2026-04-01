/** chunk id: 192 params = (module,exports,require) **/
n.d(t, {
    D: () => c,
    r: () => o
});
var i = n(627968),
    a = n(64700),
    l = n(818348);
let s = a.createContext(null),
    r = {
        registerManageWidgetButtonRef: () => l.tE,
        manageFocusOnReorder: l.tE,
        getManageButtonForWidget: () => null
    };

function o() {
    return a.useContext(s) ?? r
}

function c(e) {
    let {
        children: t
    } = e, n = a.useRef(new Map), l = a.useCallback(e => t => {
        null != t ? n.current.set(e, t) : n.current.delete(e)
    }, []), r = a.useCallback(e => {
        requestAnimationFrame(() => {
            let t = n.current.get(e);
            t?.focus()
        })
    }, []), o = a.useCallback(e => n.current.get(e) ?? null, []), c = a.useMemo(() => ({
        registerManageWidgetButtonRef: l,
        manageFocusOnReorder: r,
        getManageButtonForWidget: o
    }), [l, r, o]);
    return (0, i.jsx)(s.Provider, {
        value: c,
        children: t
    })
}