/** Chunk was on 94682 **/
/** chunk id: 823016, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => u,
    r: () => c
}), n(896048), n(638769);
var r = n(627968),
    l = n(64700),
    i = n(775602),
    a = n(818348);
let o = l.createContext(null),
    s = {
        registerItemRef: () => a.tE,
        registerDragHandleRef: () => a.tE,
        manageFocusOnReorder: a.tE,
        manageFocusOnDelete: a.tE
    };

function c() {
    let e = l.useContext(o);
    return null != e ? e : s
}

function u(e) {
    let {
        children: t,
        emptyListFallbackRef: n
    } = e, a = l.useRef(new Map), s = l.useRef(new Map), c = l.useRef([]), u = l.useCallback(() => {
        c.current = Array.from(a.current.keys()).sort((e, t) => {
            let n = a.current.get(e),
                r = a.current.get(t);
            if (null == n || null == r) return 0;
            let l = n.compareDocumentPosition(r);
            return (l & Node.DOCUMENT_POSITION_FOLLOWING) != 0 ? -1 : +((l & Node.DOCUMENT_POSITION_PRECEDING) != 0)
        })
    }, []), d = l.useCallback(e => t => {
        null != t ? s.current.set(e, t) : s.current.delete(e)
    }, []), f = l.useCallback(e => t => {
        null != t ? a.current.set(e, t) : a.current.delete(e)
    }, []), p = l.useCallback(e => {
        i.A.keyboardModeEnabled && requestAnimationFrame(() => {
            let t = s.current.get(e);
            null == t || t.focus()
        })
    }, []), g = l.useCallback(e => {
        if (!i.A.keyboardModeEnabled) return;
        u();
        let t = c.current,
            r = t.indexOf(e);
        if (-1 === r) return;
        let l = r + 1 < t.length ? r + 1 : r - 1;
        if (l >= 0) {
            let e = t[l];
            requestAnimationFrame(() => {
                let t = a.current.get(e);
                null == t || t.focus()
            })
        } else requestAnimationFrame(() => {
            null == n || n.focus()
        })
    }, [n, u]), m = l.useMemo(() => ({
        registerDragHandleRef: d,
        registerItemRef: f,
        manageFocusOnReorder: p,
        manageFocusOnDelete: g
    }), [d, f, p, g]);
    return (0, r.jsx)(o.Provider, {
        value: m,
        children: t
    })
}