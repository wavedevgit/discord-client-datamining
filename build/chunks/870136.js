/** chunk id: 870136 params = (module,exports,require) **/
n.d(t, {
    Ay: () => c,
    U0: () => d,
    c: () => l
});
var r = n(311907),
    i = n(696451),
    a = n(287809),
    o = n(316031);

function l(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser());
    return c(t?.id, e)
}

function _(e, t, n) {
    return null != t && null != e ? n.getMember(t, e) : null
}

function s(e) {
    return [e?.communicationDisabledUntil ?? null, (0, o.Z)(e)]
}

function c(e, t) {
    return s((0, r.bG)([i.Ay], () => _(e, t, i.Ay), [t, e]))
}

function d(e, t) {
    return s(_(e, t, i.Ay))
}