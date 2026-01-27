/** Chunk was on 60667 **/
/** chunk id: 55029, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(311907),
    i = n(628965),
    l = n(152056),
    s = n(360619);

function a(e, t) {
    let n = (0, s.AC)(t),
        a = l.A.useField("query"),
        o = (0, r.bG)([i.A], () => i.A.getSubsection()),
        c = e.filter(e => null == e.predicate || e.predicate());
    if (null != n && n.size > 0) {
        let e = c.filter(e => n.has(e.setting));
        c = e.length > 0 ? e : c
    }
    if (null != a && a.length > 0 && null == o) {
        let e = c.find(e => e.title.toLowerCase() === a.toLowerCase());
        if (null != e) return {
            viewableTabs: c,
            filteredTab: e
        }
    }
    let d = c.find(e => null != e && e.setting === o);
    return {
        viewableTabs: c,
        filteredTab: d
    }
}