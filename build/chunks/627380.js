/** chunk id: 627380 params = (module,exports,require) **/
r.d(t, {
    t: () => u,
    x: () => l
});
var n = r(64700),
    a = r(989349),
    i = r.n(a),
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
    return (0, n.useMemo)(() => {
        let r;
        if (null == e || null == t) return null;
        if (e.status === o.Wo.UPCOMING) r = e.tenureReqNumMonths;
        else {
            let t = _.sp.indexOf(e.id),
                n = _.sp[t + 1];
            if (null == n || -1 === t) return null;
            r = _.VD[n].tenureReqNumMonths
        }
        let n = d(t, r);
        return {
            days: l(t, r),
            months: Math.max(0, Math.round(n.diff(i()(), "months", !0)))
        }
    }, [e, t])
}