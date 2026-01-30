/** chunk id: 52684, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c,
    G: () => a
}), n(321073);
var r, i = n(311907),
    l = n(961350),
    a = ((r = {})[r.END_EARLY = 0] = "END_EARLY", r);
let o = [];

function c(e) {
    let t = (0, i.bG)([l.default], () => l.default.getId()),
        {
            poll: n
        } = e;
    if (!e.isPoll() || null == n) return o;
    let r = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r
}