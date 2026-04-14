/** chunk id: 416654 params = (module,exports,require) **/
t.d(r, {
    v: () => i
});
var a = t(311907),
    o = t(439174),
    _ = t(622543);

function i(e) {
    return (0, a.bG)([_.A], () => {
        let r, t = null != e ? _.A.getUserProfile(e) : null,
            a = t?.premiumSince;
        return null == t || null == a ? null : (t?.badges?.forEach(e => {
            let t = (0, o.cZ)(e.id);
            null != t && (r = t)
        }), r)
    })
}