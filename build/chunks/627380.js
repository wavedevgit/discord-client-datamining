/** chunk id: 627380 params = (module,exports,require) **/
r.d(t, {
    t: () => d
});
var a = r(64700),
    i = r(989349),
    n = r.n(i),
    o = r(112848),
    _ = r(788868);

function l(e, t) {
    return n()(e).add(t, "months").add(1, "day")
}

function d() {
    let e = (0, o.$F)(),
        t = (0, o.Xb)();
    return (0, a.useMemo)(() => {
        let r;
        if (null == e || null == t) return null;
        if (e.status === o.Wo.UPCOMING) r = e.tenureReqNumMonths;
        else {
            let t = _.sp.indexOf(e.id),
                a = _.sp[t + 1];
            if (null == a || -1 === t) return null;
            r = _.VD[a].tenureReqNumMonths
        }
        let a = l(t, r);
        return {
            days: Math.max(0, l(t, r).diff(n()(), "days")),
            months: Math.max(0, Math.round(a.diff(n()(), "months", !0)))
        }
    }, [e, t])
}