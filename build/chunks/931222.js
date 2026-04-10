/** chunk id: 931222 params = (module,exports,require) **/
n.d(t, {
    L: () => d
}), n(321073), n(667532);
var i = n(64700),
    l = n(311907),
    r = n(499118),
    a = n(351022),
    s = n(282026),
    o = n(324580);

function d() {
    let e = s.A.useField("fetchedQuery"),
        t = s.A.useField("resultsInitialCategoryId"),
        n = s.A.useField("languageCode"),
        d = (0, l.bG)([a.A], () => null == t ? 0 : a.A.getTotal({
            categoryId: t,
            query: e,
            languageCode: n
        }) ?? 0),
        c = (0, l.bG)([a.A], () => a.A.getTotal({
            categoryId: o.Iq,
            query: e,
            languageCode: n
        }) ?? 0),
        u = (0, l.bG)([r.A], () => r.A.getVisibleTabs());
    return i.useMemo(() => {
        if (null == u) return null;
        if (null == t) return u;
        let e = [],
            n = new Set;
        for (let [t, i] of u) n.add(t), e.push([t, i]);
        let i = !1;
        return n.has(o.Iq) || (n.add(o.Iq), e.unshift([o.Iq, c]), i = !0), n.has(t) || (n.add(t), e.push([t, d]), i = !0), i ? e : u
    }, [u, t, c, d])
}