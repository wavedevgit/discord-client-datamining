/** chunk id: 659051 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(927813),
    a = n(661191);
let r = 2 * i.A.Millis.HOUR;

function l(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        l = null != i && e.party?.id !== i,
        s = a.default.extractTimestamp(t.id) + r < Date.now(),
        o = null != e.application_id && e.application_id !== n;
    return !l && !s && !o
}