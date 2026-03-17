/** chunk id: 360560 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(580630),
    r = n(985018);

function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return r.intl.string(r.t.RWouSQ);
    if (e.premium && !n) return r.intl.string(r.t["QGUSz/"]);
    let l = e.getPrice(null, t);
    if (null != l)
        if (l.amount > 0) return (0, i.$g)(l.amount, l.currency);
        else return r.intl.string(r.t.QQsaCc);
    return r.intl.string(r.t.RWouSQ)
}