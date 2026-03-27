/** chunk id: 338510 params = (module,exports,require) **/
i.d(e, {
    u: () => n
});
var s = i(617641),
    _ = i(168447),
    l = i(546140);

function n(t) {
    let e = (0, s.Lc)({
            location: "safety-tools-button"
        }),
        i = (0, l.L)(),
        n = (0, _.Y)(t);
    if (!e || !i) return;
    let r = n.filter(t => null != t.dismiss_timestamp);
    if (0 !== r.length) return r.sort((t, e) => t.type > e.type || t.dismiss_timestamp < e.dismiss_timestamp ? 1 : -1)[0]
}