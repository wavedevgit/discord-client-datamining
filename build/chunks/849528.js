/** chunk id: 849528, original params: e,t,n (module,exports,require) **/
n.d(t, {
    z: () => l
});
var i = n(989349),
    s = n.n(i),
    a = n(112848),
    r = n(788868);

function l() {
    let e, t, n = (0, a.$F)(),
        i = (0, a.Xb)();
    if (null == n || null == i) return null;
    let l = s()(),
        o = s()(i);
    if (n.status === a.Wo.UPCOMING) e = 0, t = n.tenureReqNumMonths;
    else {
        let i = r.sp.indexOf(n.id),
            s = r.sp[i + 1];
        if (null == s || -1 === i) return null;
        e = n.tenureReqNumMonths, t = r.VD[s].tenureReqNumMonths
    }
    let c = o.clone().add(e, "months"),
        d = o.clone().add(t, "months").diff(c);
    return Math.max(0, Math.min(1, (l.diff(c) - 864e5) / d))
}