/** chunk id: 416654 params = (module,exports,require) **/
r.d(t, {
    v: () => o
});
var n = r(311907),
    a = r(439174),
    i = r(622543);

function o(e) {
    return (0, n.bG)([i.A], () => {
        let t, r = null != e ? i.A.getUserProfile(e) : null,
            n = r?.premiumSince;
        return null == r || null == n ? null : (r?.badges?.forEach(e => {
            let r = (0, a.cZ)(e.id);
            null != r && (t = r)
        }), t)
    })
}