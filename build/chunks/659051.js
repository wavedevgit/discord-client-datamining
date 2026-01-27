/** Chunk was on 92917 **/
/** chunk id: 659051, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(927813),
    i = n(661191);
let l = 2 * r.A.Millis.HOUR;

function a(e, t, n) {
    var r;
    if (null == e) return !1;
    let a = null != t.activity ? t.activity.party_id : null,
        s = null != a && (null == (r = e.party) ? void 0 : r.id) !== a,
        o = i.default.extractTimestamp(t.id) + l < Date.now(),
        c = null != e.application_id && e.application_id !== n;
    return !s && !o && !c
}