/** Chunk was on 41727 **/
/** chunk id: 517461, original params: e,t,n (module,exports,require) **/
n.d(t, {
    V: () => s
}), n(896048);
var r = n(64700),
    l = n(506774),
    i = n(964486);

function s(e, t) {
    let [n, s] = r.useState(() => {
        let n = l.w.get(e);
        return null != n ? n : t
    });
    return (0, i.Ay)(() => {
        null == l.w.get(e) && l.w.set(e, t)
    }), [n, r.useCallback(t => {
        s(t), l.w.set(e, t)
    }, [e])]
}