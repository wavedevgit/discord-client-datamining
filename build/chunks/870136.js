/** chunk id: 870136 params = (module,exports,require) **/
n.d(t, {
    Ay: () => d,
    U0: () => u,
    c: () => o
});
var a = n(311907),
    i = n(696451),
    r = n(287809),
    s = n(316031);

function o(e) {
    let t = (0, a.bG)([r.default], () => r.default.getCurrentUser());
    return d(t?.id, e)
}

function l(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function c(e) {
    return [e?.communicationDisabledUntil ?? null, (0, s.Z)(e)]
}

function d(e, t) {
    return c((0, a.bG)([i.Ay], () => l(e, t, i.Ay), [t, e]))
}

function u(e, t) {
    return c(l(e, t, i.Ay))
}