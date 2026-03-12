/** chunk id: 55029 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(311907),
    s = n(628965),
    l = n(152056),
    r = n(360619);

function a(e, t) {
    let n = (0, r.AC)(t),
        a = l.A.useField("query"),
        o = (0, i.bG)([s.A], () => s.A.getSubsection()),
        d = e.filter(e => null == e.predicate || e.predicate());
    if (null != n && n.size > 0) {
        let e = d.filter(e => n.has(e.setting));
        d = e.length > 0 ? e : d
    }
    if (null != a && a.length > 0 && null == o) {
        let e = d.find(e => e.title.toLowerCase() === a.toLowerCase());
        if (null != e) return {
            viewableTabs: d,
            filteredTab: e
        }
    }
    let c = d.find(e => null != e && e.setting === o);
    return {
        viewableTabs: d,
        filteredTab: c
    }
}