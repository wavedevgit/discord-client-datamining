/** Chunk was on 73734 **/
/** chunk id: 772786, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => o,
    x: () => a
});
var r = n(417597),
    i = n(287809),
    l = n(951122);
let a = () => s(i.default.getCurrentUser(), (0, l.kG)()),
    o = () => s((0, r.bG)([i.default], () => i.default.getCurrentUser()), (0, l.Jz)());

function s(e, t) {
    return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t
}