/** Chunk was on 97492 **/
/** chunk id: 338510, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => s
}), n(638769);
var r = n(617641),
    l = n(168447),
    i = n(546140);

function s(e) {
    let t = (0, r.Lc)({
            location: "safety-tools-button"
        }),
        n = (0, i.L)(),
        s = (0, l.Y)(e);
    if (!t || !n) return;
    let a = s.filter(e => null != e.dismiss_timestamp);
    if (0 !== a.length) return a.sort((e, t) => e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1)[0]
}