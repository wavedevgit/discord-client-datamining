/** chunk id: 823016 params = (module,exports,require) **/
n.d(t, {
    B: () => c,
    r: () => d
});
var i = n(627968),
    l = n(64700),
    a = n(775602),
    s = n(818348);
let r = l.createContext(null),
    o = {
        registerItemRef: () => s.tE,
        registerDragHandleRef: () => s.tE,
        manageFocusOnReorder: s.tE,
        manageFocusOnDelete: s.tE
    };

function d() {
    return l.useContext(r) ?? o
}

function c(e) {
    let {
        children: t,
        emptyListFallbackRef: n
    } = e, s = l.useRef(new Map), o = l.useRef(new Map), d = l.useRef([]), c = l.useCallback(() => {
        d.current = Array.from(s.current.keys()).sort((e, t) => {
            let n = s.current.get(e),
                i = s.current.get(t);
            if (null == n || null == i) return 0;
            let l = n.compareDocumentPosition(i);
            return (l & Node.DOCUMENT_POSITION_FOLLOWING) != 0 ? -1 : +((l & Node.DOCUMENT_POSITION_PRECEDING) != 0)
        })
    }, []), u = l.useCallback(e => t => {
        null != t ? o.current.set(e, t) : o.current.delete(e)
    }, []), g = l.useCallback(e => t => {
        null != t ? s.current.set(e, t) : s.current.delete(e)
    }, []), m = l.useCallback(e => {
        a.A.keyboardModeEnabled && requestAnimationFrame(() => {
            let t = o.current.get(e);
            t?.focus()
        })
    }, []), p = l.useCallback(e => {
        if (!a.A.keyboardModeEnabled) return;
        c();
        let t = d.current,
            i = t.indexOf(e);
        if (-1 === i) return;
        let l = i + 1 < t.length ? i + 1 : i - 1;
        if (l >= 0) {
            let e = t[l];
            requestAnimationFrame(() => {
                let t = s.current.get(e);
                t?.focus()
            })
        } else requestAnimationFrame(() => {
            n?.focus()
        })
    }, [n, c]), x = l.useMemo(() => ({
        registerDragHandleRef: u,
        registerItemRef: g,
        manageFocusOnReorder: m,
        manageFocusOnDelete: p
    }), [u, g, m, p]);
    return (0, i.jsx)(r.Provider, {
        value: x,
        children: t
    })
}