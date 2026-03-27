/** chunk id: 383329 params = (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => d
});
var i = n(64700),
    a = n(735438),
    r = n.n(a),
    s = n(311907),
    o = n(735321),
    c = n(760751),
    l = n(282435);

function _(e) {
    return l.Bf.get(e) ?? 0
}

function d() {
    let e = (0, s.bG)([c.A], () => c.A.games),
        t = i.useMemo(() => r()(e).filter(e => (0, o.XX)(e)).map(e => ({
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