/** Chunk was on 60667 **/
/** chunk id: 400641, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Gn: () => c,
    Ju: () => u,
    _w: () => o,
    lI: () => d
});
var r = n(417597),
    i = n(580630),
    l = n(695515),
    s = n(923531),
    a = n(191627);

function o(e) {
    return (0, r.yK)([l.A], () => l.A.getActionsForDisplayType(e))
}

function c(e) {
    return (0, r.bG)([l.A], () => l.A.getTotalForDisplayType(e))
}

function d() {
    return (0, r.bG)([l.A], () => Object.values(a.NV).some(e => l.A.getTotalForDisplayType(e) > 0))
}

function u(e) {
    var t;
    let n = null != (t = c(e)) ? t : 0;
    if (e === a.NV.TOTAL_VOICE_MINUTES) return (0, s.hO)(n);
    if (e === a.NV.PURCHASES) {
        let e = l.A.getTotalSpendAmount(),
            t = l.A.getTotalSpendCurrency();
        if (null != e && null != t) return (0, i.RS)(e, t)
    }
    return n
}