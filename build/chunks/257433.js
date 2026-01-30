/** chunk id: 257433, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Fm: () => c,
    iN: () => s
}), n(896048);
var r = n(311907),
    i = n(102609),
    a = n(49463),
    o = n(217222);

function s(e, t) {
    return (0, r.bG)([a.A, o.A], () => {
        var n, r;
        return e.system === i.l5.LEGACY ? null == (n = a.A.getUserExperimentDescriptor(e.name)) ? void 0 : n.bucket : null == (r = o.A.getAssignment(e.kind, t, e.name)) ? void 0 : r.variantId
    })
}

function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.A, o.A],
        [r, s] = n;
    return null == e ? null : e.system === i.l5.LEGACY ? r.getLoadedUserExperiment(e.name) : s.getServerAssignment(e.kind, t, e.name)
}

function c(e, t) {
    return (0, r.bG)([a.A, o.A], () => l(e, t, [a.A, o.A]))
}