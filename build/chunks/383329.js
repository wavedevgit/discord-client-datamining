/** chunk id: 383329, original params: e,t,n (module,exports,require) **/
n.d(t, {
    R: () => d
}), n(264879);
var r = n(64700),
    l = n(735438),
    i = n.n(l),
    a = n(311907),
    o = n(735321),
    s = n(760751),
    c = n(282435);

function u(e) {
    var t;
    return null != (t = c.Bf.get(e)) ? t : 0
}

function d() {
    let e = (0, a.bG)([s.A], () => s.A.games),
        t = r.useMemo(() => i()(e).filter(e => (0, o.XX)(e)).map(e => ({
            id: e.id,
            value: e.id,
            label: e.name
        })).sortBy(e => {
            let {
                value: t
            } = e;
            return u(t)
        }).reverse().value(), [e]),
        n = r.useCallback((e, t) => u(t.item.value) - u(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: r.useMemo(() => ({
            baseSort: n,
            keys: ["label"]
        }), [n])
    }
}