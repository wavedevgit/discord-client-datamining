/** chunk id: 383329 params = (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => d
});
var a = n(64700),
    r = n(735438),
    c = n.n(r),
    i = n(311907),
    s = n(735321),
    o = n(760751),
    l = n(282435);

function _(e) {
    return l.Bf.get(e) ?? 0
}

function d() {
    let e = (0, i.bG)([o.A], () => o.A.games),
        t = a.useMemo(() => c()(e).filter(e => (0, s.XX)(e)).map(e => ({
            id: e.id,
            value: e.id,
            label: e.name
        })).sortBy(e => {
            let {
                value: t
            } = e;
            return _(t)
        }).reverse().value(), [e]),
        n = a.useCallback((e, t) => _(t.item.value) - _(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: a.useMemo(() => ({
            baseSort: n,
            keys: ["label"]
        }), [n])
    }
}