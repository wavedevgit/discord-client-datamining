/** chunk id: 884801 params = (module,exports,require) **/
n.d(t, {
    N: () => l
});
var i = n(64700);

function l(e, t, n) {
    let l = i.useRef(null),
        a = i.useRef(new Map),
        r = i.useRef(new Set),
        s = i.useRef(t),
        o = i.useRef(e);
    return i.useEffect(() => {
        s.current = t, o.current = e
    }, [t, e]), i.useEffect(() => (l.current = new IntersectionObserver(e => {
        let t = !1;
        if (e.forEach(e => {
                let n = e.target.getAttribute("data-item-id");
                null != n && (e.isIntersecting && e.intersectionRatio >= .5 ? r.current.has(n) || (r.current.add(n), t = !0) : r.current.has(n) && (r.current.delete(n), t = !0))
            }), t) {
            let e = o.current,
                t = Array.from(r.current).map(t => {
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
        l.current?.disconnect()
    }), [n]), {
        registerItemRef: i.useCallback((e, t) => {
            if (null != t) a.current.set(e, t), null != l.current && l.current.observe(t);
            else {
                let t = a.current.get(e);
                null != t && (l.current?.unobserve(t), a.current.delete(e))
            }
        }, [])
    }
}