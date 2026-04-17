/** chunk id: 870136 params = (module,exports,require) **/
a.d(t, {
    Ay: () => s,
    U0: () => l,
    c: () => c
});
var r = a(311907),
    n = a(696451),
    o = a(287809),
    i = a(316031);

function c(e) {
    let t = (0, r.bG)([o.default], () => o.default.getCurrentUser());
    return s(t?.id, e)
}

function _(e, t, a) {
    return null != t && null != e ? a.getMember(t, e) : null
}

function d(e) {
    return [e?.communicationDisabledUntil ?? null, (0, i.Z)(e)]
}

function s(e, t) {
    return d((0, r.bG)([n.Ay], () => _(e, t, n.Ay), [t, e]))
}

function l(e, t) {
    return d(_(e, t, n.Ay))
}