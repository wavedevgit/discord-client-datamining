/** chunk id: 383329 params = (module,exports,require) **/
t.d(n, {
    R: () => u
});
var o = t(64700),
    r = t(735438),
    i = t.n(r),
    _ = t(311907),
    l = t(735321),
    a = t(760751),
    s = t(282435);

function c(e) {
    return s.Bf.get(e) ?? 0
}

function u() {
    let e = (0, _.bG)([a.A], () => a.A.games),
        n = o.useMemo(() => i()(e).filter(e => (0, l.XX)(e)).map(e => ({
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