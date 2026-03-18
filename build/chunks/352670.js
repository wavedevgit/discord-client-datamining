/** chunk id: 352670 params = (module,exports,require) **/
n.d(t, {
    Y: () => r
}), n(323874), n(14289), n(35956);
var i = n(64700),
    a = n(873263),
    l = n(458518);

function r() {
    let e = (0, l.o)(),
        t = (0, a.W6)(),
        n = i.useRef(null),
        r = i.useCallback(i => {
            let a = new URLSearchParams(n.current ?? e);
            for (let [e, t] of Object.entries(i)) null == t ? a.delete(e) : a.set(e, t);
            n.current = a, t.replace({
                search: a.toString()
            }), Promise.resolve().then(() => {
                n.current = null
            })
        }, [e, t]);
    return [e, r]
}