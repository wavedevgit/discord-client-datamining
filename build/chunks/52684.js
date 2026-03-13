/** chunk id: 52684 params = (module,exports,require) **/
n.d(t, {
    A: () => o,
    G: () => a
}), n(321073);
var i, l = n(311907),
    r = n(961350),
    a = ((i = {})[i.END_EARLY = 0] = "END_EARLY", i);
let s = [];

function o(e) {
    let t = (0, l.bG)([r.default], () => r.default.getId()),
        {
            poll: n
        } = e;
    if (!e.isPoll() || null == n) return s;
    let i = [];
    return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i
}