/** chunk id: 870136 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => _,
    U0: () => u,
    c: () => s
});
var a = n(311907),
    r = n(696451),
    i = n(287809),
    o = n(316031);

function s(e) {
    let t = (0, a.bG)([i.default], () => i.default.getCurrentUser());
    return _(t?.id, e)
}

function c(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function l(e) {
    return [e?.communicationDisabledUntil ?? null, (0, o.Z)(e)]
}

function _(e, t) {
    return l((0, a.bG)([r.Ay], () => c(e, t, r.Ay), [t, e]))
}

function u(e, t) {
    return l(c(e, t, r.Ay))
}