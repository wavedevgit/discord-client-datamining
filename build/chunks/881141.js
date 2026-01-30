/** chunk id: 881141, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var a = n(927578),
    l = n(112848),
    r = n(788868);

function i() {
    let e = (0, l.Xb)(),
        t = (0, a.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = r.sp.length - 1; t >= 0; t--) {
        let a = r.VD[r.sp[t]],
            l = new Date(e);
        if (l.setMonth(e.getMonth() + a.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime())
            if (n - l.getTime() < 6048e5) return a.id;
            else break
    }
    return null
}