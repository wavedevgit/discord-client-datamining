/** chunk id: 627380 params = (module,exports,require) **/
n.d(t, {
    t: () => d
});
var r = n(64700),
    a = n(989349),
    l = n.n(a),
    i = n(655752),
    s = n(112848);

function u(e, t) {
    return l()(e).add(t, "months").add(1, "day")
}

function d() {
    let e = (0, i.P)(),
        t = (0, s.Xb)();
    return (0, r.useMemo)(() => {
        if (null == e || null == t) return null;
        let n = e.tenureReqNumMonths,
            r = u(t, n);
        return {
            days: Math.max(0, u(t, n).diff(l()(), "days")),
            months: Math.max(0, Math.round(r.diff(l()(), "months", !0)))
        }
    }, [e, t])
}