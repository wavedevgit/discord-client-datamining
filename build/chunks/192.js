/** chunk id: 192 params = (module,exports,require) **/
n.d(t, {
    D: () => o,
    r: () => c
});
var l = n(627968),
    a = n(64700),
    i = n(818348);
let r = a.createContext(null),
    s = {
        registerManageWidgetButtonRef: () => i.tE,
        manageFocusOnReorder: i.tE,
        getManageButtonForWidget: () => null
    };

function c() {
    return a.useContext(r) ?? s
}

function o(e) {
    let {
        children: t
    } = e, n = a.useRef(new Map), i = a.useCallback(e => t => {
        null != t ? n.current.set(e, t) : n.current.delete(e)
    }, []), s = a.useCallback(e => {
        requestAnimationFrame(() => {
            let t = n.current.get(e);
            t?.focus()
        })
    }, []), c = a.useCallback(e => n.current.get(e) ?? null, []), o = a.useMemo(() => ({
        registerManageWidgetButtonRef: i,
        manageFocusOnReorder: s,
        getManageButtonForWidget: c
    }), [i, s, c]);
    return (0, l.jsx)(r.Provider, {
        value: o,
        children: t
    })
}