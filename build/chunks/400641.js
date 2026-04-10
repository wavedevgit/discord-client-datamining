/** chunk id: 400641 params = (module,exports,require) **/
n.d(t, {
    Gn: () => d,
    Ju: () => u,
    _w: () => o,
    lI: () => c
});
var i = n(417597),
    s = n(580630),
    l = n(695515),
    r = n(923531),
    a = n(191627);

function o(e) {
    return (0, i.yK)([l.A], () => l.A.getActionsForDisplayType(e))
}

function d(e) {
    return (0, i.bG)([l.A], () => l.A.getTotalForDisplayType(e))
}

function c() {
    return (0, i.bG)([l.A], () => Object.values(a.NV).some(e => l.A.getTotalForDisplayType(e) > 0))
}

function u(e) {
    let t = d(e) ?? 0;
    if (e === a.NV.TOTAL_VOICE_MINUTES) return (0, r.hO)(t);
    if (e === a.NV.PURCHASES) {
        let e = l.A.getTotalSpendAmount(),
            t = l.A.getTotalSpendCurrency();
        if (null != e && null != t) return (0, s.RS)(e, t)
    }
    return t
}