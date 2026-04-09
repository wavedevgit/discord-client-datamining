/** chunk id: 891024 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    a = n(320501),
    l = n(287809);
let r = e => (0, i.bG)([a.A, l.default], () => {
    if (null == e) return !1;
    let t = l.default.getCurrentUser();
    return null != a.A.getMessages(e).findNewest(e => e.author.id === t?.id)
})