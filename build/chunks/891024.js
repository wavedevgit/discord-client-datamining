/** chunk id: 891024 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(311907),
    a = n(320501),
    r = n(287809);
let l = e => (0, i.bG)([a.A, r.default], () => {
    if (null == e) return !1;
    let t = r.default.getCurrentUser();
    return null != a.A.getMessages(e).findNewest(e => e.author.id === t?.id)
})