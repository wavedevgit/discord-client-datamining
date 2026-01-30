/** chunk id: 192, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => c,
    r: () => s
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(818348);
let a = l.createContext(null),
    o = {
        registerManageWidgetButtonRef: () => i.tE,
        manageFocusOnReorder: i.tE,
        getManageButtonForWidget: () => null
    };

function s() {
    let e = l.useContext(a);
    return null != e ? e : o
}

function c(e) {
    let {
        children: t
    } = e, n = l.useRef(new Map), i = l.useCallback(e => t => {
        null != t ? n.current.set(e, t) : n.current.delete(e)
    }, []), o = l.useCallback(e => {
        requestAnimationFrame(() => {
            let t = n.current.get(e);
            null == t || t.focus()
        })
    }, []), s = l.useCallback(e => {
        var t;
        return null != (t = n.current.get(e)) ? t : null
    }, []), c = l.useMemo(() => ({
        registerManageWidgetButtonRef: i,
        manageFocusOnReorder: o,
        getManageButtonForWidget: s
    }), [i, o, s]);
    return (0, r.jsx)(a.Provider, {
        value: c,
        children: t
    })
}