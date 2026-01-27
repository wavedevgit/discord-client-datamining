/** Chunk was on web.js **/
/** chunk id: 386976, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    op: () => f
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(949355),
    o = n(102609),
    s = n(620233),
    l = n(217222),
    c = n(375441);

function u(e, t) {
    let n = {};
    for (let [t, r] of Object.entries(e)) n[t] = {
        system: o.l5.APEX,
        kind: r.unitType === c.ni.User ? "user" : "guild",
        name: r.name,
        title: r.title,
        variants: r.variants.map(e => ({
            id: e.id,
            label: "Variant ".concat(e.id, ": ").concat(e.label),
            shortLabel: "Variant ".concat(e.id),
            type: e.type
        }))
    };
    for (let [e, r] of Object.entries(t)) null == n[e] && (n[e] = {
        system: o.l5.APEX,
        kind: r.kind,
        name: r.name,
        title: r.name,
        variants: Object.entries(r.variations).map(e => {
            let [t, n] = e;
            return {
                id: Number(t),
                label: "Variant ".concat(t),
                shortLabel: "Variant ".concat(t),
                type: a.FZ.UNSPECIFIED
            }
        })
    });
    return n
}

function d(e) {
    let t = {};
    for (let [n, r] of Object.entries(e)) t[n] = {
        experimentId: n,
        variantId: r.variantId,
        originalDescriptor: r
    };
    return t
}

function f() {
    (0, r.useEffect)(() => {
        (0, s.sD)(a.Um.APP)
    }, []);
    let e = (0, i.bG)([l.A], () => l.A.getExperimentsMetadata()),
        t = (0, i.bG)([l.A], () => l.A.getRegisteredExperiments()),
        n = (0, r.useMemo)(() => u(e, t), [e, t]),
        o = (0, i.bG)([l.A], () => l.A.getClientOverrides());
    return {
        experiments: n,
        overridesInfo: (0, r.useMemo)(() => d(o), [o])
    }
}