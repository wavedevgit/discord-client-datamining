/** chunk id: 192, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => c,
    r: () => o
});
var i = n(627968),
    l = n(64700),
    a = n(818348);
let s = l.createContext(null),
    r = {
        registerManageWidgetButtonRef: () => a.tE,
        manageFocusOnReorder: a.tE,
        getManageButtonForWidget: () => null
    };

function o() {
    return l.useContext(s) ?? r
}

function c(e) {
    let {
        children: t
    } = e, n = l.useRef(new Map), a = l.useCallback(e => t => {
        null != t ? n.current.set(e, t) : n.current.delete(e)
    }, []), r = l.useCallback(e => {
        requestAnimationFrame(() => {
            let t = n.current.get(e);
            t?.focus()
        })
    }, []), o = l.useCallback(e => n.current.get(e) ?? null, []), c = l.useMemo(() => ({
        registerManageWidgetButtonRef: a,
        manageFocusOnReorder: r,
        getManageButtonForWidget: o
    }), [a, r, o]);
    return (0, i.jsx)(s.Provider, {
        value: c,
        children: t
    })
}