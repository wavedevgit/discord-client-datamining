/** chunk id: 383329 params = (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => d
});
var a = n(64700),
    i = n(735438),
    r = n.n(i),
    c = n(311907),
    o = n(735321),
    _ = n(760751),
    l = n(282435);

function s(e) {
    return l.Bf.get(e) ?? 0
}

function d() {
    let e = (0, c.bG)([_.A], () => _.A.games),
        t = a.useMemo(() => r()(e).filter(e => (0, o.XX)(e)).map(e => ({
            id: e.id,
            value: e.id,
            label: e.name
        })).sortBy(e => {
            let {
                value: t
            } = e;
            return s(t)
        }).reverse().value(), [e]),
        n = a.useCallback((e, t) => s(t.item.value) - s(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: a.useMemo(() => ({
            baseSort: n,
            keys: ["label"]
        }), [n])
    }
}