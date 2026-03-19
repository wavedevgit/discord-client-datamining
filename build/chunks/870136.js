/** chunk id: 870136 params = (module,exports,require) **/
n.d(t, {
    Ay: () => c,
    U0: () => s,
    c: () => i
});
var r = n(311907),
    a = n(696451),
    o = n(287809),
    _ = n(316031);

function i(e) {
    let t = (0, r.bG)([o.default], () => o.default.getCurrentUser());
    return c(t?.id, e)
}

function d(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function l(e) {
    return [e?.communicationDisabledUntil ?? null, (0, _.Z)(e)]
}

function c(e, t) {
    return l((0, r.bG)([a.Ay], () => d(e, t, a.Ay), [t, e]))
}

function s(e, t) {
    return l(d(e, t, a.Ay))
}