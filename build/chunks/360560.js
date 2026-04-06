/** chunk id: 360560 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(580630),
    l = n(985018);

function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return l.intl.string(l.t.RWouSQ);
    if (e.premium && !n) return l.intl.string(l.t["QGUSz/"]);
    let s = e.getPrice(null, t);
    if (null != s)
        if (s.amount > 0) return (0, i.$g)(s.amount, s.currency);
        else return l.intl.string(l.t.QQsaCc);
    return l.intl.string(l.t.RWouSQ)
}