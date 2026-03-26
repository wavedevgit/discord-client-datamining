/** chunk id: 383329 params = (module,exports,require) **/
t.d(n, {
    R: () => d
});
var i = t(64700),
    _ = t(735438),
    a = t.n(_),
    r = t(311907),
    o = t(735321),
    l = t(760751),
    s = t(282435);

function c(e) {
    return s.Bf.get(e) ?? 0
}

function d() {
    let e = (0, r.bG)([l.A], () => l.A.games),
        n = i.useMemo(() => a()(e).filter(e => (0, o.XX)(e)).map(e => ({
            id: e.id,
            value: e.id,
            label: e.name
        })).sortBy(e => {
            let {
                value: n
            } = e;
            return c(n)
        }).reverse().value(), [e]),
        t = i.useCallback((e, n) => c(n.item.value) - c(e.item.value), []);
    return {
        options: n,
        matchSorterOptions: i.useMemo(() => ({
            baseSort: t,
            keys: ["label"]
        }), [t])
    }
}