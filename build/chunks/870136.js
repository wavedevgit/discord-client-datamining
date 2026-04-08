/** chunk id: 870136 params = (module,exports,require) **/
t.d(a, {
    Ay: () => u,
    U0: () => d,
    c: () => i
});
var n = t(311907),
    c = t(696451),
    l = t(287809),
    r = t(316031);

function i(e) {
    let a = (0, n.bG)([l.default], () => l.default.getCurrentUser());
    return u(a?.id, e)
}

function s(e, a, t) {
    return null != a && null != e ? t.getMember(a, e) : null
}

function o(e) {
    return [e?.communicationDisabledUntil ?? null, (0, r.Z)(e)]
}

function u(e, a) {
    return o((0, n.bG)([c.Ay], () => s(e, a, c.Ay), [a, e]))
}

function d(e, a) {
    return o(s(e, a, c.Ay))
}