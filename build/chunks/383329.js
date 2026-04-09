/** chunk id: 383329 params = (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => u
});
var a = n(64700),
    r = n(735438),
    i = n.n(r),
    o = n(311907),
    s = n(735321),
    c = n(760751),
    l = n(282435);

function _(e) {
    return l.Bf.get(e) ?? 0
}

function u() {
    let e = (0, o.bG)([c.A], () => c.A.games),
        t = a.useMemo(() => i()(e).filter(e => (0, s.XX)(e)).map(e => ({
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