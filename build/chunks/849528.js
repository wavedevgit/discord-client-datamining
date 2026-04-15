/** chunk id: 849528 params = (module,exports,require) **/
n.d(t, {
    z: () => l
});
var i = n(989349),
    r = n.n(i),
    a = n(655752),
    s = n(112848);

function l() {
    let e = (0, s.$F)(),
        t = (0, a.P)(),
        n = (0, s.Xb)();
    if (null == e || null == t || null == n) return null;
    let i = r()(),
        l = r()(n),
        o = e.status === s.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
        c = t.tenureReqNumMonths,
        d = l.clone().add(o, "months"),
        u = l.clone().add(c, "months").diff(d);
    return Math.max(0, Math.min(1, (i.diff(d) - 864e5) / u))
}