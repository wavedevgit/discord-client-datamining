/** chunk id: 892110, original params: e,t,n (module,exports,require) **/
n.d(t, {
    l: () => s
});
var r = n(989349),
    l = n.n(r),
    i = n(661191);
let s = e => {
    let t = i.default.extractTimestamp(e);
    return !l()().isBefore(l()(t).add(l().duration(15, "days")))
}