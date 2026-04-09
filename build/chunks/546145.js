/** chunk id: 546145 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(287809),
    a = n(622543);

function r(e) {
    let t = l.default.getCurrentUser();
    return null == t ? null : null != e ? a.A.getGuildMemberProfile(t.id, e) : a.A.getUserProfile(t.id)
}