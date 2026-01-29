/** Chunk was on 2827 **/
/** chunk id: 262077, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(638769);
var r = n(64700),
    i = n(311907),
    l = n(961350),
    s = n(166403),
    a = n(818348);
let o = function(e) {
    let {
        subscriptionFilter: t
    } = e, n = (0, i.bG)([s.A], () => s.A.getSubscriptions(!0)), o = r.useMemo(() => null == n ? [] : Object.values(n).filter(e => e.type === a.rz.PREMIUM && e.userId === l.default.getId() && (null == t || !!t(e))), [n, t]);
    return o.sort((e, t) => {
        var n, r;
        let i = null != (n = e.paymentGateway) ? n : 0,
            l = null != (r = t.paymentGateway) ? r : 0;
        return i < l ? -1 : +(i > l)
    }), o
}