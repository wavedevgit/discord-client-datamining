/** chunk id: 870136 params = (module,exports,require) **/
n.d(t, {
    Ay: () => c,
    U0: () => u,
    c: () => a
});
var i = n(311907),
    s = n(696451),
    r = n(287809),
    l = n(316031);

function a(e) {
    let t = (0, i.bG)([r.default], () => r.default.getCurrentUser());
    return c(t?.id, e)
}

function o(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function d(e) {
    return [e?.communicationDisabledUntil ?? null, (0, l.Z)(e)]
}

function c(e, t) {
    return d((0, i.bG)([s.Ay], () => o(e, t, s.Ay), [t, e]))
}

function u(e, t) {
    return d(o(e, t, s.Ay))
}