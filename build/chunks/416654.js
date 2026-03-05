/** chunk id: 416654 params = (module,exports,require) **/
r.d(t, {
    v: () => o
});
var a = r(311907),
    n = r(439174),
    i = r(622543);

function o(e) {
    return (0, a.bG)([i.A], () => {
        let t, r = null != e ? i.A.getUserProfile(e) : null,
            a = r?.premiumSince;
        return null == r || null == a ? null : (r?.badges?.forEach(e => {
            let r = (0, n.cZ)(e.id);
            null != r && (t = r)
        }), t)
    })
}