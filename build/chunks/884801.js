/** chunk id: 884801 params = (module,exports,require) **/
n.d(t, {
    N: () => a
});
var i = n(64700);

function a(e, t, n) {
    let a = i.useRef(null),
        r = i.useRef(new Map),
        l = i.useRef(new Set),
        s = i.useRef(t),
        o = i.useRef(e);
    return i.useEffect(() => {
        s.current = t, o.current = e
    }, [t, e]), i.useEffect(() => (a.current = new IntersectionObserver(e => {
        let t = !1;
        if (e.forEach(e => {
                let n = e.target.getAttribute("data-item-id");
                null != n && (e.isIntersecting && e.intersectionRatio >= .5 ? l.current.has(n) || (l.current.add(n), t = !0) : l.current.has(n) && (l.current.delete(n), t = !0))
            }), t) {
            let e = o.current,
                t = Array.from(l.current).map(t => {
                    let n = e.findIndex(e => e.id === t);
                    return n >= 0 ? {
                        index: n,
                        item: e[n]
                    } : null
                }).filter(e => null !== e).sort((e, t) => e.index - t.index);
            s.current({
                viewableItems: t
            })
        }
    }, {
        root: n?.current ?? null,
        threshold: [0, .5, 1],
        rootMargin: "0px"
    }), () => {
        a.current?.disconnect()
    }), [n]), {
        registerItemRef: i.useCallback((e, t) => {
            if (null != t) r.current.set(e, t), null != a.current && a.current.observe(t);
            else {
                let t = r.current.get(e);
                null != t && (a.current?.unobserve(t), r.current.delete(e))
            }
        }, [])
    }
}