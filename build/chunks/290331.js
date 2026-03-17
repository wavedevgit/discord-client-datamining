/** chunk id: 290331 params = (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(938796);
var i = n(821418),
    r = n(665260),
    l = n(340837);
let a = {
    canAcceptInvite: function(e, t) {
        let [n] = e, {
            guild: a
        } = t;
        return !(null != a && (0, r.Lt)(n.getSelfMember(a.id)?.flags ?? 0, l.D.IS_GUEST)) || (0, r.Lt)(t.flags ?? 0, i.Q.IS_GUEST_INVITE)
    }
}