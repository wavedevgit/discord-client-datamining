/** chunk id: 947418, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => a
});
var i = n(97352),
    s = n(83617);

function a(e, t) {
    let n = i.A.get(e.premiumPlanIdFromItems ?? "");
    if (null != n) {
        let i = (0, s._w)(n, t?.id, !1),
            a = i.length > 0 ? i[0] : e.currency;
        if (1 === i.length && t?.id === e.paymentSourceId && (0, s.jJ)(n.id, a, t?.id)) return !0
    }
    return !1
}