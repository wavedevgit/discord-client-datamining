/** chunk id: 331884 params = (module,exports,require) **/
r.d(e, {
    i: () => a
});
var i = r(284009),
    n = r.n(i),
    l = r(311907),
    s = r(287809);
let a = () => {
    let t = (0, l.bG)([s.default], () => s.default.getCurrentUser());
    return n()(null != t, "user has to be signed in before accessing shop"), t
}