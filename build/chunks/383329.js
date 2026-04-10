/** chunk id: 383329 params = (module,exports,require) **/
t.d(n, {
    R: () => d
});
var o = t(64700),
    r = t(735438),
    _ = t.n(r),
    i = t(311907),
    l = t(735321),
    a = t(760751),
    s = t(282435);

function c(e) {
    return s.Bf.get(e) ?? 0
}

function d() {
    let e = (0, i.bG)([a.A], () => a.A.games),
        n = o.useMemo(() => _()(e).filter(e => (0, l.XX)(e)).map(e => ({
            id: e.id,
            value: e.id,
            label: e.name
        })).sortBy(e => {
            let {
                value: n
            } = e;
            return c(n)
        }).reverse().value(), [e]),
        t = o.useCallback((e, n) => c(n.item.value) - c(e.item.value), []);
    return {
        options: n,
        matchSorterOptions: o.useMemo(() => ({
            baseSort: t,
            keys: ["label"]
        }), [t])
    }
}