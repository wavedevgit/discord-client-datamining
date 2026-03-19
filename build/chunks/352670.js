/** chunk id: 352670 params = (module,exports,require) **/
n.d(t, {
    Y: () => l
}), n(323874), n(14289), n(35956);
var i = n(64700),
    a = n(873263),
    r = n(458518);

function l() {
    let e = (0, r.o)(),
        t = (0, a.W6)(),
        n = i.useRef(null),
        l = i.useCallback(i => {
            let a = new URLSearchParams(n.current ?? e);
            for (let [e, t] of Object.entries(i)) null == t ? a.delete(e) : a.set(e, t);
            n.current = a, t.replace({
                search: a.toString()
            }), Promise.resolve().then(() => {
                n.current = null
            })
        }, [e, t]);
    return [e, l]
}