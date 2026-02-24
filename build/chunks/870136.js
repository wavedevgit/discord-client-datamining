/** chunk id: 870136, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    Ay: () => _,
    U0: () => d,
    c: () => s
});
var r = a(311907),
    n = a(696451),
    i = a(287809),
    o = a(316031);

function s(e) {
    let t = (0, r.bG)([i.default], () => i.default.getCurrentUser());
    return _(t?.id, e)
}

function l(e, t, a) {
    return null != t && null != e ? a.getMember(t, e) : null
}

function c(e) {
    return [e?.communicationDisabledUntil ?? null, (0, o.Z)(e)]
}

function _(e, t) {
    return c((0, r.bG)([n.Ay], () => l(e, t, n.Ay), [t, e]))
}

function d(e, t) {
    return c(l(e, t, n.Ay))
}