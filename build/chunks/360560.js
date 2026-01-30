/** Chunk was on 64935 **/
/** chunk id: 360560, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var r = n(580630),
    i = n(985018);

function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return i.intl.string(i.t.RWouSQ);
    if (e.premium && !n) return i.intl.string(i.t["QGUSz/"]);
    let l = e.getPrice(null, t);
    if (null != l)
        if (l.amount > 0) return (0, r.$g)(l.amount, l.currency);
        else return i.intl.string(i.t.QQsaCc);
    return i.intl.string(i.t.RWouSQ)
}