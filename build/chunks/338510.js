/** chunk id: 338510, original params: e,t,r (module,exports,require) **/
r.d(t, {
    u: () => o
}), r(638769);
var n = r(617641),
    i = r(168447),
    s = r(546140);

function o(e) {
    let t = (0, n.Lc)({
            location: "safety-tools-button"
        }),
        r = (0, s.L)(),
        o = (0, i.Y)(e);
    if (!t || !r) return;
    let l = o.filter(e => null != e.dismiss_timestamp);
    if (0 !== l.length) return l.sort((e, t) => e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1)[0]
}