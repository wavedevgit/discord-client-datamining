/** chunk id: 627380 params = (module,exports,require) **/
t.d(r, {
    t: () => d
});
var a = t(64700),
    o = t(989349),
    _ = t.n(o),
    i = t(655752),
    n = t(112848);

function l(e, r) {
    return _()(e).add(r, "months").add(1, "day")
}

function d() {
    let e = (0, i.P)(),
        r = (0, n.Xb)();
    return (0, a.useMemo)(() => {
        if (null == e || null == r) return null;
        let t = e.tenureReqNumMonths,
            a = l(r, t);
        return {
            days: Math.max(0, l(r, t).diff(_()(), "days")),
            months: Math.max(0, Math.round(a.diff(_()(), "months", !0)))
        }
    }, [e, r])
}