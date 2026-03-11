/** chunk id: 870136 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Ay: () => c,
    U0: () => d,
    c: () => s
});
var n = r(311907),
    i = r(696451),
    a = r(287809),
    o = r(316031);

function s(e) {
    let t = (0, n.bG)([a.default], () => a.default.getCurrentUser());
    return c(t?.id, e)
}

function l(e, t, r) {
    return null != t && null != e ? r.getMember(t, e) : null
}

function _(e) {
    return [e?.communicationDisabledUntil ?? null, (0, o.Z)(e)]
}

function c(e, t) {
    return _((0, n.bG)([i.Ay], () => l(e, t, i.Ay), [t, e]))
}

function d(e, t) {
    return _(l(e, t, i.Ay))
}