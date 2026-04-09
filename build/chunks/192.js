/** chunk id: 192 params = (module,exports,require) **/
t.d(n, {
    D: () => d,
    r: () => s
});
var i = t(627968),
    a = t(64700),
    r = t(818348);
let l = a.createContext(null),
    o = {
        registerManageWidgetButtonRef: () => r.tE,
        manageFocusOnReorder: r.tE,
        getManageButtonForWidget: () => null
    };

function s() {
    return a.useContext(l) ?? o
}

function d(e) {
    let {
        children: n
    } = e, t = a.useRef(new Map), r = a.useCallback(e => n => {
        null != n ? t.current.set(e, n) : t.current.delete(e)
    }, []), o = a.useCallback(e => {
        requestAnimationFrame(() => {
            let n = t.current.get(e);
            n?.focus()
        })
    }, []), s = a.useCallback(e => t.current.get(e) ?? null, []), d = a.useMemo(() => ({
        registerManageWidgetButtonRef: r,
        manageFocusOnReorder: o,
        getManageButtonForWidget: s
    }), [r, o, s]);
    return (0, i.jsx)(l.Provider, {
        value: d,
        children: n
    })
}