/** Chunk was on 76850 **/
/** chunk id: 338510, original params: e,t,r (module,exports,require) **/
r.d(t, {
    u: () => s
}), r(638769);
var n = r(617641),
    i = r(168447),
    o = r(546140);

function s(e) {
    let t = (0, n.Lc)({
            location: "safety-tools-button"
        }),
        r = (0, o.L)(),
        s = (0, i.Y)(e);
    if (!t || !r) return;
    let l = s.filter(e => null != e.dismiss_timestamp);
    if (0 !== l.length) return l.sort((e, t) => e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1)[0]
}