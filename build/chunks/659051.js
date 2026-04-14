/** chunk id: 659051 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(927813),
    a = n(661191);
let l = 2 * i.A.Millis.HOUR;

function s(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        s = null != i && e.party?.id !== i,
        r = a.default.extractTimestamp(t.id) + l < Date.now(),
        o = null != e.application_id && e.application_id !== n;
    return !s && !r && !o
}