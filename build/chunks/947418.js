/** Chunk was on 5606 **/
/** chunk id: 947418, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => l
});
var r = n(97352),
    i = n(83617);

function l(e, t) {
    var n;
    let l = r.A.get(null != (n = e.premiumPlanIdFromItems) ? n : "");
    if (null != l) {
        let n = (0, i._w)(l, null == t ? void 0 : t.id, !1),
            r = n.length > 0 ? n[0] : e.currency;
        if (1 === n.length && (null == t ? void 0 : t.id) === e.paymentSourceId && (0, i.jJ)(l.id, r, null == t ? void 0 : t.id)) return !0
    }
    return !1
}