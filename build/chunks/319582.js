/** Chunk was on 58652 **/
/** chunk id: 319582, original params: e,t,n (module,exports,require) **/
n.d(t, {
    MR: () => u,
    fY: () => c
}), n(896048), n(321073);
var l = n(64700),
    r = n(403362),
    i = n(129443),
    a = n(83140),
    s = n(843540),
    o = n(17372);
let d = {
    [o.Wb.SAFETY_DM_SPAM_FILTER]: i.A,
    [o.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: s.A,
    [o.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: a.A
};

function c(e) {
    return l.useMemo(() => {
        var t;
        let n;
        return null != e ? (t = e, n = [], Object.entries(d).forEach(e => {
            let [l, r] = e;
            (null == r.eligibleReportSubtypes || r.eligibleReportSubtypes.includes(t)) && n.push(l)
        }), 0 === n.length ? null : n) : null
    }, [e])
}

function u(e, t) {
    return l.useMemo(() => e.map(e => {
        var n, l;
        let r;
        return n = e, l = t, ! function(e, t) {
            let {
                predicate: n,
                eligibleChannelTypes: l
            } = e, r = null == n || (null == n ? void 0 : n()) === !0, i = null == t || null == l || l.includes(t);
            return r && i
        }(r = d[n], l) ? null : r
    }).filter(r.Vq), [e, t])
}