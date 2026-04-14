/** chunk id: 290331 params = (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(938796);
var i = n(821418),
    a = n(665260),
    l = n(340837);
let s = {
    canAcceptInvite: function(e, t) {
        let [n] = e, {
            guild: s
        } = t;
        return !(null != s && (0, a.Lt)(n.getSelfMember(s.id)?.flags ?? 0, l.D.IS_GUEST)) || (0, a.Lt)(t.flags ?? 0, i.Q.IS_GUEST_INVITE)
    }
}