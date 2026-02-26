/** chunk id: 416654, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => i
});
var r = n(311907),
    a = n(439174),
    l = n(622543);

function i(e) {
    return (0, r.bG)([l.A], () => {
        let t, n = null != e ? l.A.getUserProfile(e) : null,
            r = n?.premiumSince;
        return null == n || null == r ? null : (n?.badges?.forEach(e => {
            let n = (0, a.cZ)(e.id);
            null != n && (t = n)
        }), t)
    })
}