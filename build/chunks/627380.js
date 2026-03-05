/** chunk id: 627380, original params: e,t,r (module,exports,require) **/
r.d(t, {
    t: () => u,
    x: () => l
});
var a = r(64700),
    n = r(989349),
    i = r.n(n),
    o = r(112848),
    _ = r(788868);

function l(e, t) {
    return Math.max(0, d(e, t).diff(i()(), "days"))
}

function d(e, t) {
    return i()(e).add(t, "months").add(1, "day")
}

function u() {
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
        let a = d(t, r);
        return {
            days: l(t, r),
            months: Math.max(0, Math.round(a.diff(i()(), "months", !0)))
        }
    }, [e, t])
}