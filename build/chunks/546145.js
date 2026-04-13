/** chunk id: 546145 params = (module,exports,require) **/
n.d(t, {
    A: () => i
});
var a = n(287809),
    l = n(622543);

function i(e) {
    let t = a.default.getCurrentUser();
    return null == t ? null : null != e ? l.A.getGuildMemberProfile(t.id, e) : l.A.getUserProfile(t.id)
}