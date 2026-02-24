/** chunk id: 884801, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => r
});
var i = n(64700);

function r(e, t, n) {
    let r = i.useRef(null),
        l = i.useRef(new Map),
        a = i.useRef(new Set),
        s = i.useRef(t),
        o = i.useRef(e);
    return i.useEffect(() => {
        s.current = t, o.current = e
    }, [t, e]), i.useEffect(() => (r.current = new IntersectionObserver(e => {
        let t = !1;
        if (e.forEach(e => {
                let n = e.target.getAttribute("data-item-id");
                null != n && (e.isIntersecting && e.intersectionRatio >= .5 ? a.current.has(n) || (a.current.add(n), t = !0) : a.current.has(n) && (a.current.delete(n), t = !0))
            }), t) {
            let e = o.current,
                t = Array.from(a.current).map(t => {
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
        r.current?.disconnect()
    }), [n]), {
        registerItemRef: i.useCallback((e, t) => {
            if (null != t) l.current.set(e, t), null != r.current && r.current.observe(t);
            else {
                let t = l.current.get(e);
                null != t && (r.current?.unobserve(t), l.current.delete(e))
            }
        }, [])
    }
}