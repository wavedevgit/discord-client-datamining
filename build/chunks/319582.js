/** chunk id: 319582 params = (module,exports,require) **/
n.d(t, {
    MR: () => u,
    fY: () => c
}), n(321073);
var a = n(64700),
    l = n(403362),
    i = n(129443),
    r = n(83140),
    s = n(843540),
    d = n(17372);
let o = {
    [d.Wb.SAFETY_DM_SPAM_FILTER]: i.A,
    [d.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: s.A,
    [d.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: r.A
};

function c(e) {
    return a.useMemo(() => {
        var t;
        let n;
        return null != e ? (t = e, n = [], Object.entries(o).forEach(e => {
            let [a, l] = e;
            (null == l.eligibleReportSubtypes || l.eligibleReportSubtypes.includes(t)) && n.push(a)
        }), 0 === n.length ? null : n) : null
    }, [e])
}

function u(e, t) {
    return a.useMemo(() => e.map(e => {
        var n, a;
        let l;
        return n = e, a = t, ! function(e, t) {
            let {
                predicate: n,
                eligibleChannelTypes: a
            } = e, l = null == n || n?.() === !0, i = null == t || null == a || a.includes(t);
            return l && i
        }(l = o[n], a) ? null : l
    }).filter(l.Vq), [e, t])
}