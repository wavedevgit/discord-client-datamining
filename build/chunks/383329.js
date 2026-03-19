/** chunk id: 383329 params = (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => d
});
var i = n(64700),
    a = n(735438),
    r = n.n(a),
    l = n(311907),
    s = n(735321),
    _ = n(760751),
    o = n(282435);

function c(e) {
    return o.Bf.get(e) ?? 0
}

function d() {
    let e = (0, l.bG)([_.A], () => _.A.games),
        t = i.useMemo(() => r()(e).filter(e => (0, s.XX)(e)).map(e => ({
            id: e.id,
            value: e.id,
            label: e.name
        })).sortBy(e => {
            let {
                value: t
            } = e;
            return c(t)
        }).reverse().value(), [e]),
        n = i.useCallback((e, t) => c(t.item.value) - c(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: i.useMemo(() => ({
            baseSort: n,
            keys: ["label"]
        }), [n])
    }
}