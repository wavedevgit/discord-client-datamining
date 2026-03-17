/** chunk id: 870136 params = (module,exports,require) **/
n.d(t, {
    Ay: () => d,
    U0: () => c,
    c: () => o
});
var l = n(311907),
    i = n(696451),
    r = n(287809),
    a = n(316031);

function o(e) {
    let t = (0, l.bG)([r.default], () => r.default.getCurrentUser());
    return d(t?.id, e)
}

function u(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function s(e) {
    return [e?.communicationDisabledUntil ?? null, (0, a.Z)(e)]
}

function d(e, t) {
    return s((0, l.bG)([i.Ay], () => u(e, t, i.Ay), [t, e]))
}

function c(e, t) {
    return s(u(e, t, i.Ay))
}