/** chunk id: 546145 params = (module,exports,require) **/
t.d(n, {
    A: () => r
});
var i = t(287809),
    a = t(622543);

function r(e) {
    let n = i.default.getCurrentUser();
    return null == n ? null : null != e ? a.A.getGuildMemberProfile(n.id, e) : a.A.getUserProfile(n.id)
}