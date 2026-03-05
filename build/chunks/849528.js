/** chunk id: 849528, original params: e,t,n (module,exports,require) **/
n.d(t, {
    z: () => r
});
var i = n(989349),
    s = n.n(i),
    l = n(112848),
    a = n(788868);

function r() {
    let e, t, n = (0, l.$F)(),
        i = (0, l.Xb)();
    if (null == n || null == i) return null;
    let r = s()(),
        o = s()(i);
    if (n.status === l.Wo.UPCOMING) e = 0, t = n.tenureReqNumMonths;
    else {
        let i = a.sp.indexOf(n.id),
            s = a.sp[i + 1];
        if (null == s || -1 === i) return null;
        e = n.tenureReqNumMonths, t = a.VD[s].tenureReqNumMonths
    }
    let d = o.clone().add(e, "months"),
        c = o.clone().add(t, "months").diff(d);
    return Math.max(0, Math.min(1, (r.diff(d) - 864e5) / c))
}