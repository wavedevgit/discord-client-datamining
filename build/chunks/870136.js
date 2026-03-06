/** chunk id: 870136 params = (module,exports,require) **/
n.d(t, {
    Ay: () => d,
    U0: () => u,
    c: () => s
});
var a = n(311907),
    i = n(696451),
    l = n(287809),
    r = n(316031);

function s(e) {
    let t = (0, a.bG)([l.default], () => l.default.getCurrentUser());
    return d(t?.id, e)
}

function o(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function c(e) {
    return [e?.communicationDisabledUntil ?? null, (0, r.Z)(e)]
}

function d(e, t) {
    return c((0, a.bG)([i.Ay], () => o(e, t, i.Ay), [t, e]))
}

function u(e, t) {
    return c(o(e, t, i.Ay))
}