/** chunk id: 338510, original params: t,e,i (module,exports,require) **/
i.d(e, {
    u: () => r
});
var s = i(617641),
    n = i(168447),
    l = i(546140);

function r(t) {
    let e = (0, s.Lc)({
            location: "safety-tools-button"
        }),
        i = (0, l.L)(),
        r = (0, n.Y)(t);
    if (!e || !i) return;
    let a = r.filter(t => null != t.dismiss_timestamp);
    if (0 !== a.length) return a.sort((t, e) => t.type > e.type || t.dismiss_timestamp < e.dismiss_timestamp ? 1 : -1)[0]
}