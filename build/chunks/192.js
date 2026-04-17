/** chunk id: 192 params = (module,exports,require) **/
t.d(n, {
    D: () => o,
    r: () => s
});
var i = t(627968),
    a = t(64700),
    l = t(818348);
let r = a.createContext(null),
    d = {
        registerManageWidgetButtonRef: () => l.tE,
        manageFocusOnReorder: l.tE,
        getManageButtonForWidget: () => null
    };

function s() {
    return a.useContext(r) ?? d
}

function o(e) {
    let {
        children: n
    } = e, t = a.useRef(new Map), l = a.useCallback(e => n => {
        null != n ? t.current.set(e, n) : t.current.delete(e)
    }, []), d = a.useCallback(e => {
        requestAnimationFrame(() => {
            let n = t.current.get(e);
            n?.focus()
        })
    }, []), s = a.useCallback(e => t.current.get(e) ?? null, []), o = a.useMemo(() => ({
        registerManageWidgetButtonRef: l,
        manageFocusOnReorder: d,
        getManageButtonForWidget: s
    }), [l, d, s]);
    return (0, i.jsx)(r.Provider, {
        value: o,
        children: n
    })
}