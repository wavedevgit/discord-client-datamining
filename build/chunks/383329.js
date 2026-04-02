/** chunk id: 383329 params = (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => u
});
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    l = n(311907),
    o = n(735321),
    s = n(760751),
    c = n(282435);

function _(e) {
    return c.Bf.get(e) ?? 0
}

function u() {
    let e = (0, l.bG)([s.A], () => s.A.games),
        t = i.useMemo(() => a()(e).filter(e => (0, o.XX)(e)).map(e => ({
            id: e.id,
            value: e.id,
            label: e.name
        })).sortBy(e => {
            let {
                value: t
            } = e;
            return _(t)
        }).reverse().value(), [e]),
        n = i.useCallback((e, t) => _(t.item.value) - _(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: i.useMemo(() => ({
            baseSort: n,
            keys: ["label"]
        }), [n])
    }
}