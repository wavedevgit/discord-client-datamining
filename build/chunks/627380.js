/** chunk id: 627380 params = (module,exports,require) **/
n.d(t, {
    t: () => _
});
var r = n(64700),
    i = n(989349),
    l = n.n(i),
    o = n(655752),
    u = n(112848);

function a(e, t) {
    return l()(e).add(t, "months").add(1, "day")
}

function _() {
    let e = (0, o.P)(),
        t = (0, u.Xb)();
    return (0, r.useMemo)(() => {
        if (null == e || null == t) return null;
        let n = e.tenureReqNumMonths,
            r = a(t, n);
        return {
            days: Math.max(0, a(t, n).diff(l()(), "days")),
            months: Math.max(0, Math.round(r.diff(l()(), "months", !0)))
        }
    }, [e, t])
}