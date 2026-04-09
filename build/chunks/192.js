/** chunk id: 192 params = (module,exports,require) **/
n.d(t, {
    D: () => o,
    r: () => d
});
var l = n(627968),
    a = n(64700),
    r = n(818348);
let i = a.createContext(null),
    s = {
        registerManageWidgetButtonRef: () => r.tE,
        manageFocusOnReorder: r.tE,
        getManageButtonForWidget: () => null
    };

function d() {
    return a.useContext(i) ?? s
}

function o(e) {
    let {
        children: t
    } = e, n = a.useRef(new Map), r = a.useCallback(e => t => {
        null != t ? n.current.set(e, t) : n.current.delete(e)
    }, []), s = a.useCallback(e => {
        requestAnimationFrame(() => {
            let t = n.current.get(e);
            t?.focus()
        })
    }, []), d = a.useCallback(e => n.current.get(e) ?? null, []), o = a.useMemo(() => ({
        registerManageWidgetButtonRef: r,
        manageFocusOnReorder: s,
        getManageButtonForWidget: d
    }), [r, s, d]);
    return (0, l.jsx)(i.Provider, {
        value: o,
        children: t
    })
}