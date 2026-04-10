/** chunk id: 891024 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(311907),
    l = n(320501),
    r = n(287809);
let a = e => (0, i.bG)([l.A, r.default], () => {
    if (null == e) return !1;
    let t = r.default.getCurrentUser();
    return null != l.A.getMessages(e).findNewest(e => e.author.id === t?.id)
})