/** chunk id: 352670, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Y: () => a
}), n(323874), n(14289), n(35956);
var i = n(64700),
    r = n(873263),
    l = n(458518);

function a() {
    let e = (0, l.o)(),
        t = (0, r.W6)(),
        n = i.useRef(null),
        a = i.useCallback(i => {
            let r = new URLSearchParams(n.current ?? e);
            for (let [e, t] of Object.entries(i)) null == t ? r.delete(e) : r.set(e, t);
            n.current = r, t.replace({
                search: r.toString()
            }), Promise.resolve().then(() => {
                n.current = null
            })
        }, [e, t]);
    return [e, a]
}