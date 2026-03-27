/** chunk id: 870136 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Ay: () => d,
    U0: () => u,
    c: () => l
});
var n = r(311907),
    i = r(696451),
    s = r(287809),
    a = r(316031);

function l(e) {
    let t = (0, n.bG)([s.default], () => s.default.getCurrentUser());
    return d(t?.id, e)
}

function o(e, t, r) {
    return null != t && null != e ? r.getMember(t, e) : null
}

function c(e) {
    return [e?.communicationDisabledUntil ?? null, (0, a.Z)(e)]
}

function d(e, t) {
    return c((0, n.bG)([i.Ay], () => o(e, t, i.Ay), [t, e]))
}

function u(e, t) {
    return c(o(e, t, i.Ay))
}