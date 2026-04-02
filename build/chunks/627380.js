/** chunk id: 627380 params = (module,exports,require) **/
n.d(t, {
    t: () => _
});
var r = n(64700),
    i = n(989349),
    l = n.n(i),
    o = n(112848),
    u = n(788868);

function a(e, t) {
    return l()(e).add(t, "months").add(1, "day")
}

function _() {
    let e = (0, o.$F)(),
        t = (0, o.Xb)();
    return (0, r.useMemo)(() => {
        let n;
        if (null == e || null == t) return null;
        if (e.status === o.Wo.UPCOMING) n = e.tenureReqNumMonths;
        else {
            let t = u.sp.indexOf(e.id),
                r = u.sp[t + 1];
            if (null == r || -1 === t) return null;
            n = u.VD[r].tenureReqNumMonths
        }
        let r = a(t, n);
        return {
            days: Math.max(0, a(t, n).diff(l()(), "days")),
            months: Math.max(0, Math.round(r.diff(l()(), "months", !0)))
        }
    }, [e, t])
}