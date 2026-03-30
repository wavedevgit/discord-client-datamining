/** chunk id: 352670 params = (module,exports,require) **/
n.d(t, {
    Y: () => r
}), n(323874), n(14289), n(35956);
var i = n(64700),
    l = n(873263),
    a = n(458518);

function r() {
    let e = (0, a.o)(),
        t = (0, l.W6)(),
        n = i.useRef(null),
        r = i.useCallback(i => {
            let l = new URLSearchParams(n.current ?? e);
            for (let [e, t] of Object.entries(i)) null == t ? l.delete(e) : l.set(e, t);
            n.current = l, t.replace({
                search: l.toString()
            }), Promise.resolve().then(() => {
                n.current = null
            })
        }, [e, t]);
    return [e, r]
}