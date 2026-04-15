/** chunk id: 870136 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => _,
    U0: () => d,
    c: () => s
});
var a = n(311907),
    r = n(696451),
    i = n(287809),
    c = n(316031);

function s(e) {
    let t = (0, a.bG)([i.default], () => i.default.getCurrentUser());
    return _(t?.id, e)
}

function o(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function l(e) {
    return [e?.communicationDisabledUntil ?? null, (0, c.Z)(e)]
}

function _(e, t) {
    return l((0, a.bG)([r.Ay], () => o(e, t, r.Ay), [t, e]))
}

function d(e, t) {
    return l(o(e, t, r.Ay))
}