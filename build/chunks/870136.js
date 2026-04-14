/** chunk id: 870136 params = (module,exports,require) **/
n.d(t, {
    Ay: () => c,
    U0: () => u,
    c: () => s
});
var r = n(311907),
    l = n(696451),
    i = n(287809),
    a = n(316031);

function s(e) {
    let t = (0, r.bG)([i.default], () => i.default.getCurrentUser());
    return c(t?.id, e)
}

function o(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function d(e) {
    return [e?.communicationDisabledUntil ?? null, (0, a.Z)(e)]
}

function c(e, t) {
    return d((0, r.bG)([l.Ay], () => o(e, t, l.Ay), [t, e]))
}

function u(e, t) {
    return d(o(e, t, l.Ay))
}