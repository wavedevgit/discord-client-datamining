/** chunk id: 192 params = (module,exports,require) **/
n.d(t, {
    D: () => o,
    r: () => c
});
var a = n(627968),
    i = n(64700),
    l = n(818348);
let s = i.createContext(null),
    r = {
        registerManageWidgetButtonRef: () => l.tE,
        manageFocusOnReorder: l.tE,
        getManageButtonForWidget: () => null
    };

function c() {
    return i.useContext(s) ?? r
}

function o(e) {
    let {
        children: t
    } = e, n = i.useRef(new Map), l = i.useCallback(e => t => {
        null != t ? n.current.set(e, t) : n.current.delete(e)
    }, []), r = i.useCallback(e => {
        requestAnimationFrame(() => {
            let t = n.current.get(e);
            t?.focus()
        })
    }, []), c = i.useCallback(e => n.current.get(e) ?? null, []), o = i.useMemo(() => ({
        registerManageWidgetButtonRef: l,
        manageFocusOnReorder: r,
        getManageButtonForWidget: c
    }), [l, r, c]);
    return (0, a.jsx)(s.Provider, {
        value: o,
        children: t
    })
}