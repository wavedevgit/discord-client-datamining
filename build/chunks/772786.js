/** chunk id: 772786, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => a,
    x: () => o
});
var r = n(417597),
    i = n(287809),
    l = n(951122);
let o = () => s(i.default.getCurrentUser(), (0, l.kG)()),
    a = () => s((0, r.bG)([i.default], () => i.default.getCurrentUser()), (0, l.Jz)());

function s(e, t) {
    return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t
}