/** chunk id: 891024 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    l = n(320501),
    a = n(287809);
let r = e => (0, i.bG)([l.A, a.default], () => {
    if (null == e) return !1;
    let t = a.default.getCurrentUser();
    return null != l.A.getMessages(e).findNewest(e => e.author.id === t?.id)
})