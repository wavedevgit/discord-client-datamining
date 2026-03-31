/** chunk id: 383329 params = (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => u
});
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(735321),
    l = n(760751),
    c = n(282435);

function _(e) {
    return c.Bf.get(e) ?? 0
}

function u() {
    let e = (0, o.bG)([l.A], () => l.A.games),
        t = r.useMemo(() => a()(e).filter(e => (0, s.XX)(e)).map(e => ({
            id: e.id,
            value: e.id,
            label: e.name
        })).sortBy(e => {
            let {
                value: t
            } = e;
            return _(t)
        }).reverse().value(), [e]),
        n = r.useCallback((e, t) => _(t.item.value) - _(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: r.useMemo(() => ({
            baseSort: n,
            keys: ["label"]
        }), [n])
    }
}