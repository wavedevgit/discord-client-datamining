/** chunk id: 383329, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => d
});
var a = n(64700),
    i = n(735438),
    r = n.n(i),
    c = n(311907),
    o = n(735321),
    s = n(760751),
    l = n(282435);

function _(e) {
    return l.Bf.get(e) ?? 0
}

function d() {
    let e = (0, c.bG)([s.A], () => s.A.games),
        t = a.useMemo(() => r()(e).filter(e => (0, o.XX)(e)).map(e => ({
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