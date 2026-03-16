/** chunk id: 870136 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => _,
    U0: () => d,
    c: () => l
});
var i = n(311907),
    a = n(696451),
    r = n(287809),
    s = n(316031);

function l(e) {
    let t = (0, i.bG)([r.default], () => r.default.getCurrentUser());
    return _(t?.id, e)
}

function o(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function c(e) {
    return [e?.communicationDisabledUntil ?? null, (0, s.Z)(e)]
}

function _(e, t) {
    return c((0, i.bG)([a.Ay], () => o(e, t, a.Ay), [t, e]))
}

function d(e, t) {
    return c(o(e, t, a.Ay))
}