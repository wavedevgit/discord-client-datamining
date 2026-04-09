/** chunk id: 823016 params = (module,exports,require) **/
n.d(t, {
    B: () => d,
    r: () => c
});
var i = n(627968),
    a = n(64700),
    l = n(775602),
    s = n(818348);
let r = a.createContext(null),
    o = {
        registerItemRef: () => s.tE,
        registerDragHandleRef: () => s.tE,
        manageFocusOnReorder: s.tE,
        manageFocusOnDelete: s.tE
    };

function c() {
    return a.useContext(r) ?? o
}

function d(e) {
    let {
        children: t,
        emptyListFallbackRef: n
    } = e, s = a.useRef(new Map), o = a.useRef(new Map), c = a.useRef([]), d = a.useCallback(() => {
        c.current = Array.from(s.current.keys()).sort((e, t) => {
            let n = s.current.get(e),
                i = s.current.get(t);
            if (null == n || null == i) return 0;
            let a = n.compareDocumentPosition(i);
            return (a & Node.DOCUMENT_POSITION_FOLLOWING) != 0 ? -1 : +((a & Node.DOCUMENT_POSITION_PRECEDING) != 0)
        })
    }, []), u = a.useCallback(e => t => {
        null != t ? o.current.set(e, t) : o.current.delete(e)
    }, []), g = a.useCallback(e => t => {
        null != t ? s.current.set(e, t) : s.current.delete(e)
    }, []), _ = a.useCallback(e => {
        l.A.keyboardModeEnabled && requestAnimationFrame(() => {
            let t = o.current.get(e);
            t?.focus()
        })
    }, []), m = a.useCallback(e => {
        if (!l.A.keyboardModeEnabled) return;
        d();
        let t = c.current,
            i = t.indexOf(e);
        if (-1 === i) return;
        let a = i + 1 < t.length ? i + 1 : i - 1;
        if (a >= 0) {
            let e = t[a];
            requestAnimationFrame(() => {
                let t = s.current.get(e);
                t?.focus()
            })
        } else requestAnimationFrame(() => {
            n?.focus()
        })
    }, [n, d]), f = a.useMemo(() => ({
        registerDragHandleRef: u,
        registerItemRef: g,
        manageFocusOnReorder: _,
        manageFocusOnDelete: m
    }), [u, g, _, m]);
    return (0, i.jsx)(r.Provider, {
        value: f,
        children: t
    })
}