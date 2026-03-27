/** chunk id: 627380 params = (module,exports,require) **/
n.d(t, {
    t: () => d
});
var r = n(64700),
    a = n(989349),
    l = n.n(a),
    i = n(112848),
    s = n(788868);

function u(e, t) {
    return l()(e).add(t, "months").add(1, "day")
}

function d() {
    let e = (0, i.$F)(),
        t = (0, i.Xb)();
    return (0, r.useMemo)(() => {
        let n;
        if (null == e || null == t) return null;
        if (e.status === i.Wo.UPCOMING) n = e.tenureReqNumMonths;
        else {
            let t = s.sp.indexOf(e.id),
                r = s.sp[t + 1];
            if (null == r || -1 === t) return null;
            n = s.VD[r].tenureReqNumMonths
        }
        let r = u(t, n);
        return {
            days: Math.max(0, u(t, n).diff(l()(), "days")),
            months: Math.max(0, Math.round(r.diff(l()(), "months", !0)))
        }
    }, [e, t])
}